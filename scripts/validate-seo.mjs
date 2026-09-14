import assert from 'node:assert/strict';
import fs from 'node:fs';

const expectedRoutes = [
  ['dist/index.html', 'https://www.bianalytic.net/'],
  ['dist/rehber/kobiler-icin-hizli-veri-analizi/index.html', 'https://www.bianalytic.net/rehber/kobiler-icin-hizli-veri-analizi'],
  ['dist/karsilastirma/is-zekasi-danismanligi-ve-bi-platformu/index.html', 'https://www.bianalytic.net/karsilastirma/is-zekasi-danismanligi-ve-bi-platformu'],
  ['dist/iletisim/index.html', 'https://www.bianalytic.net/iletisim'],
  ['dist/kullanim-kosullari/index.html', 'https://www.bianalytic.net/kullanim-kosullari'],
  ['dist/gizlilik-politikasi/index.html', 'https://www.bianalytic.net/gizlilik-politikasi'],
  ['dist/is-zekasi-danismanligi/index.html', 'https://www.bianalytic.net/is-zekasi-danismanligi'],
  ['dist/ozel-yapay-zeka/index.html', 'https://www.bianalytic.net/ozel-yapay-zeka'],
  ['dist/restoran/index.html', 'https://www.bianalytic.net/restoran'],
  ['dist/suru/index.html', 'https://www.bianalytic.net/suru'],
];

for (const [file, canonical] of expectedRoutes) {
  const html = fs.readFileSync(file, 'utf8');
  const title = html.match(/<title>(.*?)<\/title>/i)?.[1];
  const canonicalHref = html.match(/<link rel="canonical" href="([^"]+)"/i)?.[1];
  const description = html.match(/<meta name="description" content="([^"]+)"/i)?.[1];
  const structuredData = html.match(/<script id="structured-data" type="application\/ld\+json">([\s\S]*?)<\/script>/i)?.[1];
  const visibleText = html
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

  assert(title, `${file}: title missing`);
  assert.equal(canonicalHref, canonical, `${file}: canonical mismatch`);
  assert(description, `${file}: description missing`);
  assert(structuredData, `${file}: JSON-LD missing`);
  JSON.parse(structuredData);
  assert.match(html, /<h1\b/i, `${file}: H1 missing`);
  assert(!html.includes('<div id="root"></div>'), `${file}: root is empty`);
  assert(visibleText.length > 500, `${file}: prerendered text is too short`);

  console.log(`${file}: ${visibleText.length} visible characters, metadata and JSON-LD valid`);
}

const robots = fs.readFileSync('public/robots.txt', 'utf8');
assert.match(robots, /Sitemap: https:\/\/www\.bianalytic\.net\/sitemap\.xml/);

const sitemap = fs.readFileSync('public/sitemap.xml', 'utf8');
for (const [, canonical] of expectedRoutes) {
  assert(sitemap.includes(`<loc>${canonical}</loc>`), `sitemap missing ${canonical}`);
}

const ogImage = fs.readFileSync('public/og-image.png');
assert.equal(ogImage.toString('ascii', 1, 4), 'PNG');
assert.equal(ogImage.readUInt32BE(16), 1200, 'OG image width must be 1200');
assert.equal(ogImage.readUInt32BE(20), 630, 'OG image height must be 630');

const vercel = JSON.parse(fs.readFileSync('vercel.json', 'utf8'));
const securityHeaders = new Set(vercel.headers.flatMap((rule) => rule.headers.map((header) => header.key)));
for (const key of [
  'Strict-Transport-Security',
  'X-Content-Type-Options',
  'X-Frame-Options',
  'Referrer-Policy',
  'Permissions-Policy',
  'Content-Security-Policy',
]) {
  assert(securityHeaders.has(key), `vercel.json missing ${key}`);
}
assert.deepEqual(vercel.rewrites.map((rewrite) => rewrite.source), ['/rehber/kobiler-icin-hizli-veri-analizi', '/karsilastirma/is-zekasi-danismanligi-ve-bi-platformu', '/iletisim', '/kullanim-kosullari', '/gizlilik-politikasi', '/is-zekasi-danismanligi', '/ozel-yapay-zeka', '/restoran', '/suru']);

console.log('robots.txt, sitemap.xml, 1200x630 OG image, redirects and security headers valid');
