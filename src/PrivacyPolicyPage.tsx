import React from 'react';

const sections = [
  {
    title: 'Veri sorumlusu',
    body: 'bianalytic.net kapsamında veri sorumlusu Bİ Analytic Yazılım Hizmetleri Ticaret Limited Şirketi’dir. Şirket merkezi Çanakkale’dedir.',
  },
  {
    title: 'Topladığımız bilgiler',
    body: 'Bize e-posta, telefon veya WhatsApp üzerinden ulaştığınızda paylaştığınız iletişim ve talep bilgilerini, talebinizi yanıtlamak ve hizmet sürecini yürütmek amacıyla işleriz.',
  },
  {
    title: 'Google Analytics ve çerez tercihi',
    body: 'Google Analytics etiketi yalnızca analitik çerezleri kabul ettiğinizde yüklenir. Kabul sonrasında sayfa görüntülemeleri, ziyaret kaynağı; WhatsApp, e-posta ve telefon bağlantılarına yapılan tıklamalar ile hizmet, ürün ve rehber geçişleri ölçülür. İletişim adresinin veya mesaj içeriğinin kendisi Analytics’e gönderilmez. Reddettiğinizde analitik etiketi yüklenmez. Ekrandaki “Çerez tercihleri” düğmesiyle kararınızı daha sonra değiştirebilirsiniz.',
  },
  {
    title: 'İşleme amaçları ve saklama',
    body: 'Verileri hizmet taleplerini değerlendirmek, iletişim kurmak, site performansını anlamak ve hizmetlerimizi geliştirmek için; amaç için gerekli süre ve yasal yükümlülüklerle sınırlı olarak saklarız.',
  },
  {
    title: 'Haklarınız',
    body: '6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamındaki bilgi alma, düzeltme, silme ve işleme itiraz haklarınıza ilişkin taleplerinizi mustafa.oz@bianalytic.net adresine iletebilirsiniz.',
  },
];

export default function PrivacyPolicyPage() {
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
        <h1 className="font-display text-4xl font-bold text-navy-900 sm:text-5xl">Gizlilik ve Çerez Politikası</h1>
        <p className="mt-6 text-lg leading-8 text-slate-600">
          Bu sayfa, bianalytic.net üzerindeki kişisel veri ve analitik çerez uygulamalarımızı açıklar. Son güncelleme: 15 Eylül 2026.
        </p>

        <div className="mt-12 space-y-6">
          {sections.map((section) => (
            <section key={section.title} className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
              <h2 className="font-display text-2xl font-bold text-navy-900">{section.title}</h2>
              <p className="mt-3 leading-7">{section.body}</p>
            </section>
          ))}
        </div>

        <section className="mt-10 rounded-3xl bg-navy-900 p-7 text-slate-200">
          <h2 className="font-display text-2xl font-bold text-white">İletişim</h2>
          <p className="mt-3">Gizlilik ve kişisel veri talepleri için: <a className="font-bold text-teal-300 underline" href="mailto:mustafa.oz@bianalytic.net">mustafa.oz@bianalytic.net</a></p>
          <div className="mt-5 flex flex-wrap gap-4 text-sm font-semibold"><a className="text-teal-300 underline" href="/iletisim">İletişim</a><a className="text-teal-300 underline" href="/kullanim-kosullari">Kullanım Koşulları</a></div>
        </section>
      </main>
    </div>
  );
}
