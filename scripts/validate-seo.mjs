import assert from 'node:assert/strict';
import fs from 'node:fs';

const expectedRoutes = [
  ['dist/index.html', 'https://www.bianalytic.net/'],
  ['dist/hakkimizda/index.html', 'https://www.bianalytic.net/hakkimizda'],
  ['dist/rehber/kobiler-icin-hizli-veri-analizi/index.html', 'https://www.bianalytic.net/rehber/kobiler-icin-hizli-veri-analizi'],
  ['dist/rehber/kobiler-icin-hazir-paneller/index.html', 'https://www.bianalytic.net/rehber/kobiler-icin-hazir-paneller'],
  ['dist/rehber/satis-ve-gelir-takibi/index.html', 'https://www.bianalytic.net/rehber/satis-ve-gelir-takibi'],
  ['dist/rehber/kobiler-icin-is-zekasi-secimi/index.html', 'https://www.bianalytic.net/rehber/kobiler-icin-is-zekasi-secimi'],
  ['dist/rehber/48-saatte-is-zekasi-baslangici/index.html', 'https://www.bianalytic.net/rehber/48-saatte-is-zekasi-baslangici'],
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

const llms = fs.readFileSync('public/llms.txt', 'utf8');
assert.match(llms, /^# Bi Analytic/m, 'llms.txt title missing');
assert.match(llms, /Bİ Analytic Yazılım Hizmetleri Ticaret Limited Şirketi/, 'llms.txt legal identity missing');
assert.match(llms, /https:\/\/www\.bianalytic\.net\/is-zekasi-danismanligi/, 'llms.txt consulting page missing');
assert.match(llms, /https:\/\/www\.bianalytic\.net\/rehber\/48-saatte-is-zekasi-baslangici/, 'llms.txt guide page missing');

const analyticsConsent = fs.readFileSync('public/analytics-consent.js', 'utf8');
assert.match(analyticsConsent, /G-Z57V7YWLP9/, 'GA4 measurement ID missing');
assert.match(analyticsConsent, /generate_lead/, 'lead conversion tracking missing');
assert.match(analyticsConsent, /select_content/, 'content selection tracking missing');
assert.match(analyticsConsent, /analytics_storage: 'denied'/, 'analytics consent must default to denied');
assert.match(analyticsConsent, /getPreference\(\) !== 'accept'/, 'events must require analytics consent');

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
assert.deepEqual(vercel.rewrites.map((rewrite) => rewrite.source), ['/hakkimizda', '/rehber/kobiler-icin-hizli-veri-analizi', '/rehber/kobiler-icin-hazir-paneller', '/rehber/satis-ve-gelir-takibi', '/rehber/kobiler-icin-is-zekasi-secimi', '/rehber/48-saatte-is-zekasi-baslangici', '/karsilastirma/is-zekasi-danismanligi-ve-bi-platformu', '/iletisim', '/kullanim-kosullari', '/gizlilik-politikasi', '/is-zekasi-danismanligi', '/ozel-yapay-zeka', '/restoran', '/suru']);

console.log('robots.txt, llms.txt, sitemap.xml, 1200x630 OG image, redirects and security headers valid');
