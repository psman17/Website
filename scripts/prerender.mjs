import fs from 'node:fs/promises';
import path from 'node:path';
import React from 'react';
import {renderToString} from 'react-dom/server';
import {createServer} from 'vite';

const rootDir = process.cwd();
const distDir = path.join(rootDir, 'dist');

globalThis.window = {
  location: {pathname: '/'},
  scrollY: 0,
  addEventListener() {},
  removeEventListener() {},
};

const organization = {
  '@type': 'Organization',
  '@id': 'https://www.bianalytic.net/#organization',
  name: 'Bi Analytic',
  url: 'https://www.bianalytic.net/',
  logo: 'https://www.bianalytic.net/Logo.png',
  email: 'info@bianalytic.net',
};

const routes = [
  {
    pathname: '/',
    output: 'index.html',
    title: 'Bi Analytic | Veri Mühendisliği ve İş Zekası',
    description: "Bi Analytic, KOBİ'ler için veri mühendisliği, iş zekası dashboardları ve hazır analitik çözümleri sunar.",
    canonical: 'https://www.bianalytic.net/',
    schema: {
      '@context': 'https://schema.org',
      '@graph': [
        organization,
        {
          '@type': 'WebSite',
          '@id': 'https://www.bianalytic.net/#website',
          url: 'https://www.bianalytic.net/',
          name: 'Bi Analytic',
          publisher: {'@id': organization['@id']},
          inLanguage: 'tr',
        },
        {
          '@type': 'SoftwareApplication',
          '@id': 'https://www.bianalytic.net/#software',
          name: 'Bi Analytic',
          url: 'https://www.bianalytic.net/',
          applicationCategory: 'BusinessApplication',
          operatingSystem: 'Web',
          description: "KOBİ'ler için veri mühendisliği, iş zekası dashboardları ve hazır analitik çözümleri.",
          publisher: {'@id': organization['@id']},
        },
      ],
    },
  },
  {
    pathname: '/restoran',
    output: path.join('restoran', 'index.html'),
    title: 'Bi Restoran | Bulut Tabanlı Restoran POS ve Yönetim Sistemi',
    description: 'Salon, mutfak, QR menü, stok, termal yazıcı ve raporlamayı tek platformda birleştiren bulut tabanlı restoran yönetim sistemi.',
    canonical: 'https://www.bianalytic.net/restoran',
    schema: {
      '@context': 'https://schema.org',
      '@graph': [organization, {
        '@type': 'SoftwareApplication',
        name: 'Bi Restoran',
        url: 'https://www.bianalytic.net/restoran',
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Web',
        description: 'Bulut tabanlı restoran POS ve yönetim sistemi.',
        publisher: {'@id': organization['@id']},
      }],
    },
  },
  {
    pathname: '/suru',
    output: path.join('suru', 'index.html'),
    title: 'Bi Sürü | Bulut Tabanlı Sürü ve Çiftlik Yönetimi',
    description: 'Sürü, biyolojik takvim, süt, üreme, sağlık, yem, finans ve analitiği tek platformda birleştiren bulut tabanlı çiftlik yönetim sistemi.',
    canonical: 'https://www.bianalytic.net/suru',
    schema: {
      '@context': 'https://schema.org',
      '@graph': [organization, {
        '@type': 'SoftwareApplication',
        name: 'Bi Sürü',
        url: 'https://www.bianalytic.net/suru',
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Web',
        description: 'Bulut tabanlı sürü ve çiftlik yönetim sistemi.',
        publisher: {'@id': organization['@id']},
      }],
    },
  },
];

function replaceMeta(html, selector, value) {
  const escapedSelector = selector.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const pattern = new RegExp(`(<meta ${escapedSelector} content=")[^"]*("\\s*/?>)`, 'i');
  return html.replace(pattern, `$1${value}$2`);
}

function buildDocument(template, route, markup) {
  let html = template
    .replace(/<title>[^<]*<\/title>/i, `<title>${route.title}</title>`)
    .replace(/<link rel="canonical" href="[^"]*"\s*\/>/i, `<link rel="canonical" href="${route.canonical}" />`)
    .replace('<div id="root"></div>', `<div id="root">${markup}</div>`);

  html = replaceMeta(html, 'name="description"', route.description);
  html = replaceMeta(html, 'property="og:title"', route.title);
  html = replaceMeta(html, 'property="og:description"', route.description);
  html = replaceMeta(html, 'property="og:url"', route.canonical);
  html = replaceMeta(html, 'name="twitter:title"', route.title);
  html = replaceMeta(html, 'name="twitter:description"', route.description);

  const structuredData = JSON.stringify(route.schema).replaceAll('<', '\\u003c');
  return html.replace(
    /<script id="structured-data" type="application\/ld\+json">[\s\S]*?<\/script>/i,
    `<script id="structured-data" type="application/ld+json">${structuredData}</script>`,
  );
}

const vite = await createServer({
  root: rootDir,
  appType: 'custom',
  logLevel: 'error',
  server: {middlewareMode: true},
});

try {
  const [{default: App}, template] = await Promise.all([
    vite.ssrLoadModule('/src/App.tsx'),
    fs.readFile(path.join(distDir, 'index.html'), 'utf8'),
  ]);

  for (const route of routes) {
    globalThis.window.location.pathname = route.pathname;
    const markup = renderToString(React.createElement(App));
    const outputPath = path.join(distDir, route.output);
    await fs.mkdir(path.dirname(outputPath), {recursive: true});
    await fs.writeFile(outputPath, buildDocument(template, route, markup), 'utf8');
  }
} finally {
  await vite.close();
}
