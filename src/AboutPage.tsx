import React from 'react';
import { ArrowRight, BarChart3, BrainCircuit, Building2, Mail, MapPin, Phone, UserRound } from 'lucide-react';

const services = [
  {
    icon: BarChart3,
    title: 'İş zekâsı danışmanlığı',
    text: 'Veri keşfi, kaynak entegrasyonu, veri modeli ve dashboard tasarımı. Kullanılacak teknoloji mevcut altyapı ve iş ihtiyacına göre seçilir.',
    href: '/is-zekasi-danismanligi',
  },
  {
    icon: BrainCircuit,
    title: 'Özel yapay zekâ ve yazılım',
    text: 'Firmaların veya bireysel profesyonellerin çalışma düzenine uygun asistanlar, otomasyonlar, yönetim ekranları ve entegrasyon uygulamaları.',
    href: '/ozel-yapay-zeka',
  },
  {
    icon: Building2,
    title: 'Operasyon ürünleri',
    text: 'Restoran operasyonları için Bi Restoran; hayvancılık ve çiftlik süreçleri için Bi Sürü. Her ürün, kendi sektörünün günlük iş akışına odaklanır.',
    href: '/#cozumler',
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-700">
      <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <a href="/" className="rounded-xl bg-white px-3 py-2" aria-label="Bi Analytic ana sayfa"><img src="/Logo.png" alt="Bi Analytic" className="h-12 w-auto object-contain" /></a>
          <nav className="hidden items-center gap-6 text-sm font-semibold text-navy-900 md:flex" aria-label="Ana menü">
            <a className="hover:text-teal-600" href="/is-zekasi-danismanligi">İş Zekâsı</a>
            <a className="hover:text-teal-600" href="/ozel-yapay-zeka">Özel Yapay Zekâ</a>
            <a className="hover:text-teal-600" href="/restoran">Bi Restoran</a>
            <a className="hover:text-teal-600" href="/suru">Bi Sürü</a>
            <a className="rounded-full bg-navy-900 px-5 py-2.5 text-white hover:bg-navy-800" href="/iletisim">İletişim</a>
          </nav>
          <a className="rounded-full bg-navy-900 px-4 py-2 text-sm font-bold text-white md:hidden" href="/iletisim">İletişim</a>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden bg-white py-20 sm:py-24">
          <div className="absolute -right-12 top-0 h-96 w-96 rounded-full bg-teal-100/70 blur-3xl" />
          <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.25fr_.75fr] lg:px-8">
            <div>
              <p className="text-sm font-bold uppercase tracking-[.2em] text-teal-600">Hakkımızda</p>
              <h1 className="mt-4 font-display text-4xl font-bold leading-tight text-navy-900 sm:text-6xl">Bi Analytic Kimdir?</h1>
              <p className="mt-7 max-w-3xl text-xl leading-8 text-slate-600">Bi Analytic, Mustafa Öz tarafından Mayıs 2026’da Çanakkale’de kurulan bir iş zekâsı danışmanlığı ve özel yazılım firmasıdır.</p>
              <p className="mt-4 max-w-3xl leading-7 text-slate-600">Şirket; iş zekâsı araçlarını müşterinin veri yapısına göre kullanır, özel yapay zekâ ve yazılım geliştirir, restoran ve hayvancılık operasyonlarına yönelik kendi ürünlerini sunar. Bi Analytic tek bir BI yazılımı değildir.</p>
            </div>
            <aside className="rounded-3xl bg-navy-900 p-8 text-white shadow-2xl">
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-500/20 text-teal-300"><UserRound size={28} /></span>
              <p className="mt-6 text-sm font-bold uppercase tracking-[.16em] text-teal-300">Kurucu</p>
              <h2 className="mt-2 font-display text-3xl font-bold">Mustafa Öz</h2>
              <dl className="mt-7 space-y-4 text-sm text-slate-200">
                <div className="flex gap-3"><MapPin className="h-5 w-5 shrink-0 text-teal-400" /><div><dt className="font-bold text-white">Merkez</dt><dd>Çanakkale, Türkiye</dd></div></div>
                <div className="flex gap-3"><Mail className="h-5 w-5 shrink-0 text-teal-400" /><div><dt className="font-bold text-white">E-posta</dt><dd><a className="hover:text-teal-300" href="mailto:mustafoz170@gmail.com">mustafoz170@gmail.com</a></dd></div></div>
                <div className="flex gap-3"><Phone className="h-5 w-5 shrink-0 text-teal-400" /><div><dt className="font-bold text-white">Telefon</dt><dd><a className="hover:text-teal-300" href="tel:+905437431754">0543 743 1754</a></dd></div></div>
              </dl>
            </aside>
          </div>
        </section>

        <section className="py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-3xl font-bold text-navy-900">Bi Analytic ne yapar?</h2>
            <p className="mt-5 max-w-4xl leading-7">Bi Analytic farklı sistemlerde tutulan verilerin karar vermeyi kolaylaştıracak tek bir yapıda buluşmasına yardımcı olur. Gerektiğinde mevcut iş zekâsı lisansları kullanılır. İhtiyaç hazır bir ürünle karşılanmıyorsa özel bir web uygulaması, yönetim ekranı, entegrasyon veya otomasyon geliştirilir.</p>
            <div className="mt-9 grid gap-6 lg:grid-cols-3">{services.map(({ icon: Icon, title, text, href }) => <article key={title} className="flex flex-col rounded-3xl border border-slate-200 bg-white p-7 shadow-sm"><span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-50 text-teal-600"><Icon size={22} /></span><h3 className="mt-5 font-display text-xl font-bold text-navy-900">{title}</h3><p className="mt-3 flex-1 leading-7">{text}</p><a href={href} className="mt-6 inline-flex items-center gap-2 font-bold text-teal-700">Ayrıntıları inceleyin <ArrowRight size={16} /></a></article>)}</div>
          </div>
        </section>

        <section className="bg-white py-16">
          <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
            <article>
              <h2 className="font-display text-3xl font-bold text-navy-900">Kimlerle çalışır?</h2>
              <p className="mt-5 leading-7">Bi Analytic; BT ekibi bulunmayan işletmelere, küçük BT ekiplerine ve belirli bir proje için dış uzmanlık arayan kurumsal ekiplere hizmet verir. Bireysel profesyoneller için kişisel çalışma akışına özel yapay zekâ ve otomasyon çözümleri de geliştirir.</p>
              <p className="mt-4 leading-7">Perakende, üretim, restoran, tarım, hayvancılık, e-ticaret ve hizmet işletmeleri kapsam içindedir. Sektörden önce çözülmesi gereken karar sorusu ve mevcut verinin durumu değerlendirilir.</p>
            </article>
            <article>
              <h2 className="font-display text-3xl font-bold text-navy-900">Çalışma nasıl başlar?</h2>
              <p className="mt-5 leading-7">İlk adım ücretsiz veri keşfidir. Veri kaynakları, mevcut lisanslar, raporlama ihtiyacı ve kullanıcılar incelenir. Proje kapsamı ve çalışma modeli bu incelemeden sonra belirlenir.</p>
              <p className="mt-4 leading-7">Veriler doğru şekilde yapılandırılmışsa ilk 48 saatte entegrasyon ve veri modeli kurulabilir; dashboard tasarımına başlanabilir. Bu süre tüm projenin teslim sözü değildir. Teslim planı kaynak sayısına, veri kalitesine ve istenen geliştirmelere göre hazırlanır.</p>
            </article>
          </div>
        </section>

        <section className="py-16">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-3xl font-bold text-navy-900">Neden tek bir araca bağlı değil?</h2>
            <p className="mt-5 leading-7">Bir iş zekâsı aracının uygunluğu; veri kaynaklarına, lisans durumuna, kullanıcı sayısına, güvenlik kurallarına ve bakım kapasitesine bağlıdır. Bu nedenle teknoloji, veri keşfinden önce kesinleştirilmez.</p>
            <p className="mt-4 leading-7">Şirketin mevcut aracı ihtiyacı karşılıyorsa onunla devam edilebilir. Veri hazırlığı veya süreç uygulaması eksikse önce bu katmanlar çözülür. Böylece dashboard, elle güncellenen bir sunum yerine tanımlı kurallarla beslenen bir karar ekranına dönüşür.</p>

            <h2 className="mt-12 font-display text-3xl font-bold text-navy-900">Bi Analytic’in yaklaşımı nedir?</h2>
            <p className="mt-5 leading-7">Amaç yalnızca daha fazla grafik üretmek değildir. Her çalışma, kullanıcının hangi kararı ne sıklıkta verdiğiyle başlar. İlk kapsam bu karar için gerekli en küçük veri modeliyle sınırlandırılır.</p>
            <p className="mt-4 leading-7">İlk ekran gerçek kullanıcılarla değerlendirildikten sonra yeni kaynaklar ve özellikler eklenir. Bu yaklaşım, kullanılmayan raporların ve gereksiz geliştirmelerin azaltılmasına yardımcı olur. Kurulum sonrasında veri yenileme, erişim ve bakım sorumlulukları da açık biçimde belirlenir.</p>

            <h2 className="mt-12 font-display text-3xl font-bold text-navy-900">Hangi veri kaynaklarıyla çalışır?</h2>
            <p className="mt-5 leading-7">Çalışma belirli bir veri kaynağıyla sınırlı değildir. İşletmenin kullandığı muhasebe, satış, üretim, restoran, çiftlik veya operasyon sistemlerindeki veriler incelenebilir. Dosyalar, veritabanları ve uygulamalar arasındaki bağlantı yöntemi; erişim imkânı, veri yapısı ve güvenlik gereksinimleri görüldükten sonra belirlenir.</p>
            <p className="mt-4 leading-7">Veri keşfi sırasında önce hangi kaynakların güvenilir olduğu, ortak alanların nasıl eşleştirileceği ve hangi göstergelerin iş kararına hizmet ettiği netleştirilir. Her bağlantı için gerekli erişim yetkisi ve veri yenileme sıklığı ayrıca kaydedilir. Ardından ihtiyaç, bir dashboard ile mi, özel bir uygulamayla mı, yapay zekâ destekli bir akışla mı yoksa bunların birlikte kullanılmasıyla mı karşılanacak kararlaştırılır.</p>
          </div>
        </section>

        <section className="bg-teal-600 py-16 text-white">
          <div className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-8 px-4 sm:px-6 lg:flex-row lg:items-center lg:px-8"><div><h2 className="font-display text-3xl font-bold">Bi Analytic ile iletişime geçin</h2><p className="mt-3 max-w-2xl text-lg leading-8 text-teal-50">Mevcut verinizi, operasyon ihtiyacınızı veya geliştirmek istediğiniz yazılımı paylaşın. İlk değerlendirme ücretsiz veri keşfiyle başlar.</p></div><a href="/iletisim" className="inline-flex shrink-0 items-center gap-2 rounded-full bg-navy-900 px-7 py-4 font-bold text-white shadow-xl transition hover:-translate-y-0.5 hover:bg-navy-800">İletişim bilgileri <ArrowRight size={18} /></a></div>
        </section>
      </main>

      <footer className="bg-navy-900 py-10 text-slate-400"><div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 text-sm md:flex-row md:items-center md:justify-between"><a href="/" className="inline-flex w-fit rounded-xl bg-white px-3 py-2"><img src="/Logo.png" alt="Bi Analytic" className="h-11 w-auto" /></a><div className="flex flex-wrap gap-5"><a href="/iletisim" className="hover:text-white">İletişim</a><a href="/gizlilik-politikasi" className="hover:text-white">Gizlilik</a><a href="/kullanim-kosullari" className="hover:text-white">Kullanım Koşulları</a></div><a href="mailto:mustafoz170@gmail.com" className="flex items-center gap-2 font-semibold text-white hover:text-teal-400"><Mail size={16} /> mustafoz170@gmail.com</a></div></footer>
    </div>
  );
}
