import { ArrowRight, BarChart3, Bot, Building2, CheckCircle2, Code2, Mail, Store, Tractor } from 'lucide-react';

const solutions = [
  {
    icon: BarChart3,
    title: 'İş zekâsı danışmanlığı',
    text: 'Farklı kaynaklardaki verileri bir araya getirir; veri modeli, gösterge tanımları ve karar odaklı dashboardlar oluştururuz.',
    href: '/is-zekasi-danismanligi',
  },
  {
    icon: Code2,
    title: 'Özel yazılım geliştirme',
    text: 'Hazır ürünün karşılamadığı operasyonlar için web uygulamaları, yönetim ekranları, entegrasyonlar ve iş akışları geliştiririz.',
    href: '/#ozel-yazilim',
  },
  {
    icon: Bot,
    title: 'Özel yapay zekâ',
    text: 'Şirketin veya profesyonelin kendi verisi, kuralları ve onay noktalarıyla çalışan asistanlar ve otomasyonlar kurarız.',
    href: '/ozel-yapay-zeka',
  },
] as const;

const products = [
  {
    icon: Store,
    title: 'Bi Restoran',
    text: 'Restoranların sipariş, salon, mutfak, stok ve raporlama süreçlerini tek yerde yönetmesine yardımcı olan bulut tabanlı operasyon ürünüdür.',
    href: '/restoran',
  },
  {
    icon: Tractor,
    title: 'Bi Sürü',
    text: 'Hayvancılık ve çiftlik işletmelerinde sürü, sağlık, üreme, süt, yem ve finans kayıtlarını birlikte takip etmeye yarayan bulut tabanlı üründür.',
    href: '/suru',
  },
] as const;

const questions = [
  {
    question: 'Bianalytic bir iş zekâsı programı mı?',
    answer: 'Hayır. Bianalytic bir danışmanlık ve yazılım şirketidir. İhtiyaca göre mevcut iş zekâsı araçlarını kullanır; ayrıca özel yazılım, yapay zekâ çözümleri ve sektörel ürünler geliştirir.',
  },
  {
    question: 'Kimler Bianalytic ile çalışabilir?',
    answer: 'BT ekibi bulunmayan işletmeler, küçük BT ekipleri, belirli bir proje için dış uzmanlık arayan kurumsal ekipler ve kişisel iş akışını geliştirmek isteyen profesyoneller çalışabilir.',
  },
  {
    question: 'Çalışma hangi sektörlerle sınırlı?',
    answer: 'Belirli bir sektörle sınırlı değildir. Perakende, üretim, restoran, tarım, hayvancılık, e-ticaret ve hizmet işletmelerindeki veri ve operasyon ihtiyaçları değerlendirilebilir.',
  },
  {
    question: 'İlk adım nedir?',
    answer: 'İlk adım ücretsiz veri keşfidir. İhtiyaç, veri kaynakları, erişimler, mevcut yazılımlar ve kullanıcılar incelenir; uygulanabilir kapsam bundan sonra belirlenir.',
  },
  {
    question: '48 saat içinde ne yapılabilir?',
    answer: 'Veriler doğru yapılandırılmış ve erişimler hazırsa ilk 48 saatte entegrasyon ile veri modeli kurulabilir ve dashboard tasarımına başlanabilir. Bu süre bütün projenin teslim süresi değildir.',
  },
] as const;

export default function CompanyOverviewPage() {
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
        <section className="relative overflow-hidden border-b border-slate-200 bg-white py-20 sm:py-24">
          <div className="absolute -right-24 top-0 h-96 w-96 rounded-full bg-teal-100/70 blur-3xl" />
          <div className="relative mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-[1.2fr_.8fr] lg:items-center lg:px-8">
            <div>
              <p className="text-sm font-bold uppercase tracking-[.2em] text-teal-600">Kısa ve açık yanıt</p>
              <h1 className="mt-4 font-display text-4xl font-bold leading-tight text-navy-900 sm:text-6xl">Bianalytic nedir?</h1>
              <p className="mt-7 max-w-3xl text-xl leading-9 text-slate-600"><strong className="text-navy-900">Bianalytic, bir iş zekâsı programı değildir.</strong> İşletmelerin verisini kullanılabilir hâle getiren, iş zekâsı danışmanlığı sunan; özel yazılım ve yapay zekâ çözümleri geliştiren Türkiye merkezli bir teknoloji şirketidir.</p>
              <p className="mt-5 max-w-3xl leading-8">Resmî unvanı Bİ Analytic Yazılım Hizmetleri Ticaret Limited Şirketi’dir. Mayıs 2026’da Çanakkale’de kurulmuştur.</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row"><a href="#cozumler" className="inline-flex items-center justify-center gap-2 rounded-full bg-navy-900 px-7 py-4 font-bold text-white shadow-lg hover:bg-navy-800">Çözümleri inceleyin <ArrowRight size={18} /></a><a href="/hakkimizda" className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-7 py-4 font-bold text-navy-900 hover:border-teal-400">Şirket bilgileri</a></div>
            </div>
            <aside className="rounded-3xl bg-navy-900 p-8 text-white shadow-2xl">
              <Building2 className="text-teal-300" size={38} />
              <h2 className="mt-6 font-display text-2xl font-bold">Tek cümlede Bianalytic</h2>
              <p className="mt-4 leading-7 text-slate-200">Veriyi, yazılımı ve yapay zekâyı işletmenin gerçek karar ve operasyon ihtiyacına göre bir araya getiren danışmanlık ve geliştirme şirketi.</p>
              <ul className="mt-7 space-y-3 text-sm text-slate-200">
                {['Araçtan önce ihtiyacı belirler', 'Mevcut sistemlerle çalışabilir', 'Hazır ürün ve özel geliştirme sunar', 'Teknik ekibi küçük işletmeleri destekler'].map(item => <li key={item} className="flex gap-3"><CheckCircle2 className="mt-0.5 shrink-0 text-teal-400" size={18} />{item}</li>)}
              </ul>
            </aside>
          </div>
        </section>

        <section id="cozumler" className="scroll-mt-24 py-20 sm:py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl"><p className="text-sm font-bold uppercase tracking-[.2em] text-teal-600">Hizmet alanları</p><h2 className="mt-3 font-display text-3xl font-bold text-navy-900 sm:text-5xl">Bianalytic ne yapar?</h2><p className="mt-5 text-lg leading-8">İhtiyaç tek bir dashboarddan ibaret değilse veri, uygulama ve otomasyon katmanları birlikte ele alınır. Çözüm türü ücretsiz ilk keşiften sonra belirlenir.</p></div>
            <div className="mt-10 grid gap-6 lg:grid-cols-3">{solutions.map(({icon: Icon, title, text, href}) => <article key={title} className="flex flex-col rounded-3xl border border-slate-200 bg-white p-7 shadow-sm"><span className="grid h-12 w-12 place-items-center rounded-2xl bg-teal-50 text-teal-700"><Icon size={24} /></span><h3 className="mt-5 font-display text-xl font-bold text-navy-900">{title}</h3><p className="mt-3 flex-1 leading-7">{text}</p><a href={href} className="mt-6 inline-flex items-center gap-2 font-bold text-teal-700">Ayrıntıları görün <ArrowRight size={16} /></a></article>)}</div>
          </div>
        </section>

        <section className="bg-white py-20 sm:py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl"><p className="text-sm font-bold uppercase tracking-[.2em] text-teal-600">Sektörel ürünler</p><h2 className="mt-3 font-display text-3xl font-bold text-navy-900 sm:text-5xl">Bi Restoran ve Bi Sürü nedir?</h2><p className="mt-5 text-lg leading-8">Bianalytic yalnızca proje bazlı danışmanlık yapmaz; belirli sektörlerin günlük iş akışları için kendi yazılım ürünlerini de geliştirir.</p></div>
            <div className="mt-10 grid gap-6 md:grid-cols-2">{products.map(({icon: Icon, title, text, href}) => <article key={title} className="rounded-3xl border border-slate-200 bg-slate-50 p-8"><span className="grid h-14 w-14 place-items-center rounded-2xl bg-navy-900 text-teal-300"><Icon size={27} /></span><h3 className="mt-6 font-display text-2xl font-bold text-navy-900">{title}</h3><p className="mt-4 leading-8">{text}</p><a href={href} className="mt-6 inline-flex items-center gap-2 font-bold text-teal-700">Ürünü inceleyin <ArrowRight size={16} /></a></article>)}</div>
          </div>
        </section>

        <section className="py-20 sm:py-24">
          <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
            <article><h2 className="font-display text-3xl font-bold text-navy-900">Kimler için uygundur?</h2><p className="mt-5 leading-8">Bianalytic; BT ekibi bulunmayan işletmelere, küçük BT ekiplerine ve belirli bir proje için dış uzmanlık arayan kurumsal ekiplere hizmet verir. Bireysel profesyoneller için kişiye özel yapay zekâ ve otomasyon çalışmaları da yapılabilir.</p><p className="mt-4 leading-8">Perakende, üretim, restoran, tarım, hayvancılık, e-ticaret ve hizmet sektörleri dâhil farklı alanlardaki ihtiyaçlar değerlendirilebilir. Belirleyici olan sektör adı değil; çözülmesi gereken karar veya operasyon sorunudur.</p></article>
            <article><h2 className="font-display text-3xl font-bold text-navy-900">Çalışma nasıl başlar?</h2><p className="mt-5 leading-8">İlk adım ücretsiz veri keşfidir. Veri kaynakları, kullanılan uygulamalar, erişimler, kullanıcılar ve beklenen çıktı birlikte incelenir. Ardından hazır ürün, danışmanlık, özel yazılım veya yapay zekâ seçeneklerinden hangisinin uygun olduğu belirlenir.</p><p className="mt-4 leading-8">Veriler doğru yapılandırılmış ve erişimler hazırsa ilk 48 saatte entegrasyon ile veri modeli kurulabilir ve dashboard tasarımına başlanabilir. Tam proje takvimi kapsam ve veri kalitesine göre ayrıca hazırlanır.</p></article>
          </div>
        </section>

        <section className="bg-navy-900 py-20 text-white sm:py-24">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8"><p className="text-sm font-bold uppercase tracking-[.2em] text-teal-400">Sık sorulan sorular</p><h2 className="mt-3 font-display text-3xl font-bold sm:text-5xl">Bianalytic hakkında temel bilgiler</h2><div className="mt-10 space-y-4">{questions.map(({question, answer}) => <details key={question} className="group rounded-2xl border border-white/10 bg-white/5 p-6" open={question === 'Bianalytic bir iş zekâsı programı mı?'}><summary className="cursor-pointer list-none text-lg font-bold">{question}</summary><p className="mt-4 leading-7 text-slate-300">{answer}</p></details>)}</div></div>
        </section>

        <section className="bg-teal-600 py-16 text-white"><div className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-8 px-4 sm:px-6 lg:flex-row lg:items-center lg:px-8"><div><h2 className="font-display text-3xl font-bold">İhtiyacınız hangi çözümle karşılanmalı?</h2><p className="mt-3 max-w-2xl text-lg leading-8 text-teal-50">Verinizi veya çözmek istediğiniz operasyon sorununu paylaşın. Doğru başlangıç noktasını ücretsiz ilk keşifte birlikte belirleyelim.</p></div><a href="/iletisim" className="inline-flex shrink-0 items-center gap-2 rounded-full bg-navy-900 px-7 py-4 font-bold text-white shadow-xl">İletişime geçin <ArrowRight size={18} /></a></div></section>
      </main>

      <footer className="bg-navy-900 py-10 text-slate-400"><div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 text-sm md:flex-row md:items-center md:justify-between"><a href="/" className="inline-flex w-fit rounded-xl bg-white px-3 py-2"><img src="/Logo.png" alt="Bi Analytic" className="h-11 w-auto" /></a><div className="flex flex-wrap gap-5"><a href="/hakkimizda" className="hover:text-white">Hakkımızda</a><a href="/iletisim" className="hover:text-white">İletişim</a><a href="/gizlilik-politikasi" className="hover:text-white">Gizlilik</a><a href="/kullanim-kosullari" className="hover:text-white">Kullanım Koşulları</a></div><a href="mailto:mustafa.oz@bianalytic.net" className="flex items-center gap-2 font-semibold text-white hover:text-teal-400"><Mail size={16} /> mustafa.oz@bianalytic.net</a></div></footer>
    </div>
  );
}
