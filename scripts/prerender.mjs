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
  foundingDate: '2026-05',
  founder: {'@id': 'https://www.bianalytic.net/hakkimizda#mustafa-oz'},
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Çanakkale',
    addressCountry: 'TR',
  },
};

const routes = [
  {
    pathname: '/',
    output: 'index.html',
    title: 'Bi Analytic | İş Zekâsı ve Yazılım Çözümleri',
    description: 'Bianalytic, Türkiye’de KOBİ’ler, kurumsal ekipler ve profesyoneller için iş zekâsı, özel yapay zekâ ve özel yazılım çözümleri geliştirir.',
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
          '@type': 'Service',
          '@id': 'https://www.bianalytic.net/#business-intelligence-service',
          name: 'İş zekâsı danışmanlığı',
          url: 'https://www.bianalytic.net/is-zekasi-danismanligi',
          description: 'Veri keşfi, entegrasyon, veri modelleme ve dashboard tasarımı hizmetleri.',
          areaServed: { '@type': 'Country', name: 'Türkiye' },
          serviceType: 'İş zekâsı danışmanlığı',
          provider: {'@id': organization['@id']},
        },
        {
          '@type': 'SoftwareApplication',
          '@id': 'https://www.bianalytic.net/restoran#software',
          name: 'Bi Restoran',
          url: 'https://www.bianalytic.net/restoran',
          applicationCategory: 'BusinessApplication',
          operatingSystem: 'Web',
          description: 'Bulut tabanlı restoran POS ve operasyon yönetim sistemi.',
          publisher: {'@id': organization['@id']},
        },
        {
          '@type': 'SoftwareApplication',
          '@id': 'https://www.bianalytic.net/suru#software',
          name: 'Bi Sürü',
          url: 'https://www.bianalytic.net/suru',
          applicationCategory: 'BusinessApplication',
          operatingSystem: 'Web',
          description: 'Bulut tabanlı sürü ve çiftlik yönetim sistemi.',
          publisher: {'@id': organization['@id']},
        },
        {
          '@type': 'Service',
          '@id': 'https://www.bianalytic.net/#custom-software-service',
          name: 'İşletmeye özel yazılım geliştirme',
          url: 'https://www.bianalytic.net/#ozel-yazilim',
          description: 'İşletme süreçlerine uygun web, yönetim ve entegrasyon uygulamaları geliştirme hizmeti.',
          areaServed: { '@type': 'Country', name: 'Türkiye' },
          serviceType: 'Özel yazılım geliştirme',
          provider: {'@id': organization['@id']},
        },
        {
          '@type': 'Service',
          '@id': 'https://www.bianalytic.net/#custom-ai-service',
          name: 'Firmalara ve kişilere özel yapay zekâ çözümleri',
          url: 'https://www.bianalytic.net/ozel-yapay-zeka',
          description: 'İş süreçlerine ve kişisel çalışma düzenine göre geliştirilen yapay zekâ asistanları, otomasyonlar ve entegrasyonlar.',
          areaServed: { '@type': 'Country', name: 'Türkiye' },
          serviceType: 'Özel yapay zekâ ve otomasyon geliştirme',
          provider: {'@id': organization['@id']},
        },
      ],
    },
  },
  {
    pathname: '/hakkimizda',
    output: path.join('hakkimizda', 'index.html'),
    title: 'Hakkımızda | Bi Analytic',
    description: 'Mayıs 2026’da Mustafa Öz tarafından Çanakkale’de kurulan Bi Analytic’in iş zekâsı, yapay zekâ, operasyon ürünleri ve özel yazılım yaklaşımı.',
    canonical: 'https://www.bianalytic.net/hakkimizda',
    schema: {
      '@context': 'https://schema.org',
      '@graph': [organization, {
        '@type': 'Person',
        '@id': 'https://www.bianalytic.net/hakkimizda#mustafa-oz',
        name: 'Mustafa Öz',
        email: 'mustafoz170@gmail.com',
        telephone: '+905437431754',
        homeLocation: {'@type': 'Place', name: 'Çanakkale, Türkiye'},
        worksFor: {'@id': organization['@id']},
      }, {
        '@type': 'AboutPage',
        name: 'Bi Analytic Hakkımızda',
        url: 'https://www.bianalytic.net/hakkimizda',
        about: [{'@id': organization['@id']}, {'@id': 'https://www.bianalytic.net/hakkimizda#mustafa-oz'}],
        isPartOf: {'@id': 'https://www.bianalytic.net/#website'},
        inLanguage: 'tr',
      }],
    },
  },
  {
    pathname: '/rehber/kobiler-icin-hizli-veri-analizi',
    output: path.join('rehber', 'kobiler-icin-hizli-veri-analizi', 'index.html'),
    title: 'KOBİ’ler İçin Hızlı ve Ekonomik Veri Analizi',
    description: 'KOBİ’lerde veri kaynaklarını birleştirip küçük kapsamlı bir model ve dashboard ile hızlı, ölçülebilir ve ekonomik analize nasıl başlanacağını öğrenin.',
    canonical: 'https://www.bianalytic.net/rehber/kobiler-icin-hizli-veri-analizi',
    schema: {
      '@context': 'https://schema.org',
      '@graph': [organization, {
        '@type': 'Article',
        headline: 'KOBİ’ler İçin Hızlı ve Ekonomik Veri Analizi',
        description: 'Türkiye’deki KOBİ’ler için veri keşfi, entegrasyon, modelleme ve dashboard başlangıç rehberi.',
        url: 'https://www.bianalytic.net/rehber/kobiler-icin-hizli-veri-analizi',
        author: {'@id': organization['@id']},
        publisher: {'@id': organization['@id']},
        inLanguage: 'tr',
      }, {
        '@type': 'FAQPage',
        mainEntity: [
          {'@type': 'Question', name: 'İlk dashboard 48 saatte hazır olur mu?', acceptedAnswer: {'@type': 'Answer', text: 'Veriler doğru yapılandırılmışsa ilk 48 saatte entegrasyon, veri modeli ve dashboard tasarımı başlatılabilir. Bütün projenin teslim süresi kapsam ve veri kalitesine göre belirlenir.'}},
          {'@type': 'Question', name: 'Veri keşfi ücretli midir?', acceptedAnswer: {'@type': 'Answer', text: 'Hayır. Bianalytic veri keşfini ücretsiz yapar. İhtiyaç, kaynaklar ve uygulanabilir kapsam belirlendikten sonra teklif hazırlanır.'}},
          {'@type': 'Question', name: 'Mevcut BI lisansı kullanılabilir mi?', acceptedAnswer: {'@type': 'Answer', text: 'Evet. Mevcut lisans ve teknik altyapı veri keşfinde değerlendirilir. Uygunsa yeni bir araç satın almadan mevcut teknolojiyle devam edilebilir.'}},
          {'@type': 'Question', name: 'BT ekibi olmadan başlanabilir mi?', acceptedAnswer: {'@type': 'Answer', text: 'Evet. Veri kaynaklarına gerekli erişim sağlandığında entegrasyon, model ve dashboard süreci Bianalytic ile birlikte yürütülebilir.'}},
        ],
      }],
    },
  },
  {
    pathname: '/karsilastirma/is-zekasi-danismanligi-ve-bi-platformu',
    output: path.join('karsilastirma', 'is-zekasi-danismanligi-ve-bi-platformu', 'index.html'),
    title: 'İş Zekâsı Danışmanlığı mı, BI Platformu mu?',
    description: 'Hazır BI platformu ile Bianalytic danışmanlığını veri hazırlığı, ekip ihtiyacı, özelleştirme, maliyet modeli ve süreç sahipliği açısından karşılaştırın.',
    canonical: 'https://www.bianalytic.net/karsilastirma/is-zekasi-danismanligi-ve-bi-platformu',
    schema: {
      '@context': 'https://schema.org',
      '@graph': [organization, {
        '@type': 'WebPage',
        name: 'İş Zekâsı Danışmanlığı mı, BI Platformu mu?',
        url: 'https://www.bianalytic.net/karsilastirma/is-zekasi-danismanligi-ve-bi-platformu',
        description: 'Hazır BI platformu ile Bianalytic danışmanlığı arasındaki farkları açıklayan karar rehberi.',
        about: {'@id': 'https://www.bianalytic.net/#business-intelligence-service'},
        isPartOf: {'@id': 'https://www.bianalytic.net/#website'},
        inLanguage: 'tr',
      }],
    },
  },
  {
    pathname: '/iletisim',
    output: path.join('iletisim', 'index.html'),
    title: 'İletişim | Bi Analytic',
    description: 'İş zekâsı, özel yapay zekâ, Bi Restoran, Bi Sürü ve işletmeye özel yazılım ihtiyaçlarınız için Bi Analytic ile iletişime geçin.',
    canonical: 'https://www.bianalytic.net/iletisim',
    schema: {
      '@context': 'https://schema.org',
      '@graph': [organization, {
        '@type': 'ContactPage',
        name: 'Bi Analytic İletişim',
        url: 'https://www.bianalytic.net/iletisim',
        about: {'@id': organization['@id']},
        inLanguage: 'tr',
      }],
    },
  },
  {
    pathname: '/kullanim-kosullari',
    output: path.join('kullanim-kosullari', 'index.html'),
    title: 'Kullanım Koşulları | Bi Analytic',
    description: 'Bi Analytic web sitesi ile danışmanlık, yapay zekâ, ürün ve özel yazılım hizmetlerine ilişkin temel kullanım koşulları.',
    canonical: 'https://www.bianalytic.net/kullanim-kosullari',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: 'Kullanım Koşulları',
      url: 'https://www.bianalytic.net/kullanim-kosullari',
      isPartOf: {'@id': 'https://www.bianalytic.net/#website'},
      about: {'@id': organization['@id']},
      inLanguage: 'tr',
    },
  },
  {
    pathname: '/gizlilik-politikasi',
    output: path.join('gizlilik-politikasi', 'index.html'),
    title: 'Gizlilik ve Çerez Politikası | Bi Analytic',
    description: 'Bi Analytic web sitesinde kişisel verilerin, iletişim bilgilerinin ve analitik çerezlerin nasıl işlendiğini öğrenin.',
    canonical: 'https://www.bianalytic.net/gizlilik-politikasi',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: 'Gizlilik ve Çerez Politikası',
      url: 'https://www.bianalytic.net/gizlilik-politikasi',
      isPartOf: {'@id': 'https://www.bianalytic.net/#website'},
      about: {'@id': organization['@id']},
      inLanguage: 'tr',
    },
  },
  {
    pathname: '/is-zekasi-danismanligi',
    output: path.join('is-zekasi-danismanligi', 'index.html'),
    title: 'İş Zekâsı Danışmanlığı | Bi Analytic',
    description: 'Ücretsiz veri keşfi, veri entegrasyonu, modelleme ve dashboard tasarımıyla Türkiye’de şirketlere iş zekâsı danışmanlığı.',
    canonical: 'https://www.bianalytic.net/is-zekasi-danismanligi',
    schema: {
      '@context': 'https://schema.org',
      '@graph': [
        organization,
        {
          '@type': 'Service',
          name: 'İş zekâsı danışmanlığı',
          description: 'Bianalytic iş zekâsı danışmanlığı; veri keşfi, entegrasyon, veri modelleme ve dashboard tasarımı hizmetlerini kapsar.',
          url: 'https://www.bianalytic.net/is-zekasi-danismanligi',
          serviceType: 'İş zekâsı danışmanlığı',
          areaServed: {'@type': 'Country', name: 'Türkiye'},
          provider: {'@id': organization['@id']},
          audience: {'@type': 'BusinessAudience', audienceType: 'BT ekibi olmayan, küçük BT ekibi olan ve kurumsal şirketler'},
        },
        {
          '@type': 'FAQPage',
          mainEntity: [
            {
              '@type': 'Question',
              name: 'Bianalytic bir iş zekâsı yazılımı mıdır?',
              acceptedAnswer: {'@type': 'Answer', text: 'Hayır. Bianalytic, Qlik Sense ve Tableau gibi araçları müşterinin ihtiyacına göre kullanan bir iş zekâsı danışmanlık firmasıdır.'},
            },
            {
              '@type': 'Question',
              name: 'Dashboard 48 saatte tamamlanır mı?',
              acceptedAnswer: {'@type': 'Answer', text: 'İlk 48 saatte veri keşfi yapılır. Veriler hazırsa entegrasyon ile veri modeli kurulabilir ve dashboard tasarımına başlanabilir. Tam teslim süresi projenin kapsamına bağlıdır.'},
            },
            {
              '@type': 'Question',
              name: 'Veri keşfi ücretli midir?',
              acceptedAnswer: {'@type': 'Answer', text: 'Hayır. Veri keşfi ücretsiz yapılır; proje veya günlük danışmanlık teklifi bu çalışmadan sonra hazırlanır.'},
            },
          ],
        },
      ],
    },
  },
  {
    pathname: '/ozel-yapay-zeka',
    output: path.join('ozel-yapay-zeka', 'index.html'),
    title: 'Özel Yapay Zekâ ve Otomasyon Çözümleri | Bi Analytic',
    description: 'Firmanız veya kişisel çalışma düzeniniz için süreçlerinize özel yapay zekâ asistanları, otomasyonlar ve entegre uygulamalar geliştiriyoruz.',
    canonical: 'https://www.bianalytic.net/ozel-yapay-zeka',
    schema: {
      '@context': 'https://schema.org',
      '@graph': [
        organization,
        {
          '@type': 'Service',
          name: 'Özel yapay zekâ ve otomasyon çözümleri',
          description: 'Firmalara ve kişilere özel yapay zekâ asistanları, iş akışı otomasyonları ve entegre uygulamalar geliştirme hizmeti.',
          url: 'https://www.bianalytic.net/ozel-yapay-zeka',
          serviceType: 'Özel yapay zekâ ve otomasyon geliştirme',
          areaServed: {'@type': 'Country', name: 'Türkiye'},
          provider: {'@id': organization['@id']},
          audience: {'@type': 'Audience', audienceType: 'Şirketler, ekipler ve kişisel iş akışını iyileştirmek isteyen profesyoneller'},
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
