import React from 'react';
import { Mail, MapPin, MessageCircle, Phone } from 'lucide-react';

const contactMethods = [
  {
    title: 'E-posta',
    value: 'mustafa.oz@bianalytic.net',
    href: 'mailto:mustafa.oz@bianalytic.net',
    icon: Mail,
  },
  {
    title: 'Telefon',
    value: '+90 543 743 1754',
    href: 'tel:+905437431754',
    icon: Phone,
  },
  {
    title: 'WhatsApp',
    value: 'Mesaj gönderin',
    href: 'https://wa.me/905437431754',
    icon: MessageCircle,
  },
  {
    title: 'Konum',
    value: 'İstiklal Mah. Şehit Mustafa Kaya Cad. No: 57/11, Çan / Çanakkale',
    icon: MapPin,
  },
];

export default function ContactPage() {
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

      <main className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="mb-3 text-sm font-bold uppercase tracking-[.2em] text-teal-600">Bi Analytic</p>
          <h1 className="font-display text-4xl font-bold text-navy-900 sm:text-5xl">İletişim</h1>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            İş zekâsı, özel yapay zekâ, restoran veya sürü yönetimi ürünleri ve işletmenize özel yazılım ihtiyaçlarınızı birlikte değerlendirelim.
          </p>
          <p className="mt-4 font-semibold text-navy-900">Bİ Analytic Yazılım Hizmetleri Ticaret Limited Şirketi</p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[.9fr_1.1fr]">
          <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1" aria-label="İletişim bilgileri">
            {contactMethods.map(({ title, value, href, icon: Icon }) => {
              const content = (
                <>
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-teal-50 text-teal-600"><Icon size={20} /></span>
                  <span><strong className="block text-sm text-navy-900">{title}</strong><span className="mt-1 block text-slate-600">{value}</span></span>
                </>
              );

              return href ? (
                <a key={title} href={href} className="flex items-center gap-4 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-teal-300 hover:-translate-y-0.5" target={href.startsWith('https://') ? '_blank' : undefined} rel={href.startsWith('https://') ? 'noopener noreferrer' : undefined}>{content}</a>
              ) : (
                <div key={title} className="flex items-center gap-4 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">{content}</div>
              );
            })}
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm sm:p-9">
            <h2 className="font-display text-2xl font-bold text-navy-900">İhtiyacınızı anlatın</h2>
            <p className="mt-3 leading-7 text-slate-600">Form, bilgilerinizi sunucuda saklamaz; gönderdiğinizde varsayılan e-posta uygulamanız açılır.</p>
            <form className="mt-7 space-y-5" action="mailto:mustafa.oz@bianalytic.net" method="post" encType="text/plain">
              <label className="block text-sm font-semibold text-navy-900">Adınız ve şirketiniz
                <input required name="Ad ve şirket" className="mt-2 w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 font-normal outline-none transition focus:border-teal-500 focus:ring-2 focus:ring-teal-100" />
              </label>
              <label className="block text-sm font-semibold text-navy-900">E-posta adresiniz
                <input required type="email" name="E-posta" className="mt-2 w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 font-normal outline-none transition focus:border-teal-500 focus:ring-2 focus:ring-teal-100" />
              </label>
              <label className="block text-sm font-semibold text-navy-900">İlgilendiğiniz çözüm
                <select name="Çözüm" className="mt-2 w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 font-normal outline-none transition focus:border-teal-500 focus:ring-2 focus:ring-teal-100">
                  <option>İş zekâsı danışmanlığı</option>
                  <option>Özel yapay zekâ ve otomasyon</option>
                  <option>Bi Restoran</option>
                  <option>Bi Sürü</option>
                  <option>Özel yazılım geliştirme</option>
                </select>
              </label>
              <label className="block text-sm font-semibold text-navy-900">Talebiniz
                <textarea required name="Talep" rows={5} className="mt-2 w-full resize-y rounded-2xl border border-slate-300 bg-white px-4 py-3 font-normal outline-none transition focus:border-teal-500 focus:ring-2 focus:ring-teal-100" />
              </label>
              <p className="text-sm leading-6 text-slate-500">Göndererek paylaştığınız bilgilerin talebinizi yanıtlamak amacıyla işlenmesini kabul edersiniz. Ayrıntılar için <a className="font-semibold text-teal-700 underline" href="/gizlilik-politikasi">Gizlilik Politikası</a>'nı inceleyin.</p>
              <button type="submit" className="w-full rounded-full bg-navy-900 px-6 py-3.5 font-bold text-white transition hover:bg-navy-800">E-posta ile gönder</button>
            </form>
          </section>
        </div>
      </main>
    </div>
  );
}
