import React from 'react';

const sections = [
  {
    title: 'Hizmet sağlayıcı',
    body: 'Bu site Bİ Analytic Yazılım Hizmetleri Ticaret Limited Şirketi tarafından işletilir. Şirket merkezi İstiklal Mahallesi Şehit Mustafa Kaya Caddesi No: 57/11, Çan / Çanakkale adresindedir. Çan Vergi Dairesi vergi numarası 1691240862, ticaret sicil numarası ÇAN/2295, oda sicil numarası 21842 ve MERSİS numarası 0169124086200001’dir.',
  },
  {
    title: 'Kapsam',
    body: 'Bu koşullar bianalytic.net web sitesinin kullanımını düzenler. İş zekâsı danışmanlığı, özel yapay zekâ, yazılım geliştirme ve ürün hizmetlerine ilişkin proje kapsamı ile ticari koşullar ayrıca hazırlanacak teklif veya sözleşmede belirlenir.',
  },
  {
    title: 'Sitedeki bilgiler',
    body: 'Sitedeki içerikler hizmetlerimizi genel olarak tanıtmak amacıyla sunulur. Proje takvimi, teslim kapsamı, entegrasyonlar ve diğer taahhütler; ihtiyaç analizi sonrasında taraflarca yazılı olarak onaylandığında geçerli olur.',
  },
  {
    title: 'Fikri mülkiyet',
    body: 'Bi Analytic adı, logoları, site tasarımı, metinleri ve özgün görselleri üzerindeki haklar ilgili hak sahiplerine aittir. İçerikler yazılı izin olmadan ticari amaçla çoğaltılamaz veya yanıltıcı biçimde kullanılamaz.',
  },
  {
    title: 'Üçüncü taraf hizmetleri',
    body: 'Site; e-posta, WhatsApp, analitik veya başka üçüncü taraf hizmetlerine bağlantı verebilir. Bu hizmetlerin çalışması ve kendi gizlilik uygulamaları ilgili sağlayıcının koşullarına tabidir.',
  },
  {
    title: 'Sorumluluğun sınırı',
    body: 'Sitenin güvenli ve kesintisiz çalışması için makul özen gösterilir. Bununla birlikte bakım, bağlantı veya üçüncü taraf hizmetlerinden kaynaklanan geçici kesintiler olabilir. Proje ve ürünlere özel sorumluluklar ilgili yazılı sözleşmede düzenlenir.',
  },
  {
    title: 'Gizlilik ve değişiklikler',
    body: 'Kişisel veriler ve analitik çerezler Gizlilik ve Çerez Politikası kapsamında ele alınır. Bu kullanım koşulları hizmet veya mevzuat değişiklikleri doğrultusunda güncellenebilir; güncel sürüm bu sayfada yayımlanır.',
  },
];

export default function TermsOfUsePage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-700">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <a href="/" className="rounded-xl bg-white px-3 py-2" aria-label="Bi Analytic ana sayfa">
            <img src="/Logo.png" alt="Bi Analytic" className="h-12 w-auto object-contain" />
          </a>
          <a href="/" className="rounded-full bg-navy-900 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-navy-800">Ana sayfaya dön</a>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <p className="mb-3 text-sm font-bold uppercase tracking-[.2em] text-teal-600">Bi Analytic</p>
        <h1 className="font-display text-4xl font-bold text-navy-900 sm:text-5xl">Kullanım Koşulları</h1>
        <p className="mt-6 text-lg leading-8 text-slate-600">Bu sayfa bianalytic.net web sitesinin kullanımına ilişkin temel koşulları açıklar. Son güncelleme: 14 Eylül 2026.</p>

        <div className="mt-12 space-y-6">
          {sections.map((section) => (
            <section key={section.title} className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
              <h2 className="font-display text-2xl font-bold text-navy-900">{section.title}</h2>
              <p className="mt-3 leading-7">{section.body}</p>
            </section>
          ))}
        </div>

        <section className="mt-10 rounded-3xl bg-navy-900 p-7 text-slate-200">
          <h2 className="font-display text-2xl font-bold text-white">Sorularınız için</h2>
          <p className="mt-3">Koşullarla ilgili sorularınızı <a className="font-bold text-teal-300 underline" href="mailto:mustafa.oz@bianalytic.net">mustafa.oz@bianalytic.net</a> adresine iletebilirsiniz.</p>
          <div className="mt-5 flex flex-wrap gap-4 text-sm font-semibold"><a className="text-teal-300 underline" href="/gizlilik-politikasi">Gizlilik Politikası</a><a className="text-teal-300 underline" href="/iletisim">İletişim</a></div>
        </section>
      </main>
    </div>
  );
}
