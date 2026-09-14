import {useState} from 'react';
import {
  ArrowRight,
  Bot,
  BrainCircuit,
  CheckCircle2,
  Database,
  FileText,
  GitBranch,
  Mail,
  Menu,
  MessageSquareText,
  ShieldCheck,
  Sparkles,
  Workflow,
  X,
} from 'lucide-react';

const CONTACT_URL = 'mailto:mustafa.oz@bianalytic.net?subject=Özel yapay zekâ çözümü görüşmesi';

const globalNav = [
  ['Çözümler', '/#cozumler'],
  ['İş Zekâsı', '/is-zekasi-danismanligi'],
  ['Yapay Zekâ', '/ozel-yapay-zeka'],
  ['Bi Restoran', '/restoran'],
  ['Bi Sürü', '/suru'],
  ['Özel Yazılım', '/#ozel-yazilim'],
];

const useCases = [
  [MessageSquareText, 'Müşteri iletişimi', 'Sık soruları yanıtlayan, talepleri sınıflandıran ve gerektiğinde ekibinize aktaran asistanlar.'],
  [FileText, 'Doküman ve bilgi asistanı', 'Şirket dokümanları içinde arama, özetleme, bilgi çıkarımı ve taslak oluşturma sistemleri.'],
  [Database, 'Veri ve raporlama', 'Farklı kaynaklardan veri toplayan, düzenli özetler hazırlayan ve karar ekiplerini bilgilendiren akışlar.'],
  [Workflow, 'İş akışı otomasyonu', 'Form, e-posta, CRM, ERP ve kullandığınız uygulamalar arasında kontrollü görev akışları.'],
  [Sparkles, 'İçerik üretim desteği', 'Marka kurallarınıza göre fikir, taslak ve kanal uyarlaması hazırlayan insan onaylı üretim akışları.'],
  [Bot, 'Kişisel çalışma asistanı', 'Araştırma, planlama, takip ve tekrarlanan masa başı işlerinde kişiye göre yapılandırılan yardımcılar.'],
] as const;

const steps = [
  ['01', 'İşi ve darboğazı anlarız', 'Tekrarlanan görevleri, kullanılan araçları, veriyi, sorumluları ve zaman kaybettiren noktaları birlikte çıkarırız.'],
  ['02', 'Değer alanını seçeriz', 'Yapay zekânın gerçekten fayda üreteceği işi; etki, uygulanabilirlik, veri ve risk açısından önceliklendiririz.'],
  ['03', 'Sistemi kurar ve bağlarız', 'Asistanı veya otomasyonu küçük, test edilebilir parçalar halinde geliştirir; mevcut uygulamalarınıza entegre ederiz.'],
  ['04', 'Teslim eder ve iyileştiririz', 'Sistemi dokümante ederek devreye alır; kullanım, hata kayıtları ve geri bildirimlerle kontrollü biçimde geliştiririz.'],
] as const;

export default function CustomAIPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#f7fbfb] text-navy-900">
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <a href="/" aria-label="Bi Analytic ana sayfa"><img src="/Logo.png" alt="Bi Analytic" className="h-[50px] w-[150px] object-contain"/></a>
          <nav className="hidden items-center gap-4 lg:flex xl:gap-6" aria-label="Ana navigasyon">
            {globalNav.map(([label, href]) => <a key={label} href={href} className={`text-sm font-medium transition hover:text-teal-600 ${label === 'Yapay Zekâ' ? 'text-teal-700' : 'text-navy-800'}`}>{label}</a>)}
            <a href={CONTACT_URL} className="rounded-full bg-navy-900 px-5 py-2.5 text-sm font-semibold text-white shadow-md transition hover:bg-navy-800">İhtiyacınızı anlatın</a>
          </nav>
          <button type="button" onClick={() => setMenuOpen(!menuOpen)} className="rounded-lg p-2 lg:hidden" aria-label={menuOpen ? 'Menüyü kapat' : 'Menüyü aç'} aria-expanded={menuOpen}>{menuOpen ? <X/> : <Menu/>}</button>
        </div>
        {menuOpen && <nav className="border-t border-slate-100 bg-white px-4 py-4 lg:hidden" aria-label="Mobil navigasyon"><div className="mx-auto max-w-7xl space-y-1">{globalNav.map(([label, href]) => <a key={label} href={href} onClick={() => setMenuOpen(false)} className="block rounded-lg px-3 py-3 font-medium hover:bg-light-bg">{label}</a>)}<a href={CONTACT_URL} className="mt-3 block rounded-lg bg-navy-900 px-4 py-3 text-center font-semibold text-white">İhtiyacınızı anlatın</a></div></nav>}
      </header>

      <main>
        <section className="relative overflow-hidden border-b border-slate-200 bg-gradient-to-br from-light-bg via-white to-white">
          <div className="absolute -right-32 top-0 h-96 w-96 rounded-full bg-violet-200/30 blur-3xl"/>
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-[1.08fr_.92fr]">
            <div className="relative z-10">
              <p className="mb-5 text-sm font-bold uppercase tracking-[.18em] text-teal-600">Firmalara ve kişilere özel yapay zekâ</p>
              <h1 className="font-display text-4xl font-bold leading-tight sm:text-6xl">İşinizi anlayan, süreçlerinize göre çalışan yapay zekâ sistemleri</h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-700">Hazır bir bot vermiyoruz. Ne yaptığınızı, hangi işin zamanınızı aldığını ve hangi sonucu beklediğinizi anlayıp size özel asistanlar, otomasyonlar ve yapay zekâ destekli uygulamalar geliştiriyoruz.</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row"><a href={CONTACT_URL} className="inline-flex items-center justify-center gap-2 rounded-full bg-navy-900 px-7 py-4 font-bold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-navy-800">İşinizi konuşalım <ArrowRight size={18}/></a><a href="#nasil-calisir" className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-7 py-4 font-bold transition hover:border-teal-300">Nasıl çalışır?</a></div>
            </div>

            <div className="relative mx-auto w-full max-w-xl">
              <div className="absolute inset-0 rotate-3 rounded-[2rem] bg-gradient-to-br from-teal-500/20 to-violet-500/20 blur-xl"/>
              <div className="relative rounded-[2rem] border border-slate-200 bg-white p-6 shadow-2xl shadow-navy-900/10">
                <div className="flex items-center justify-between"><div className="flex items-center gap-3"><span className="grid h-11 w-11 place-items-center rounded-xl bg-navy-900 text-teal-300"><BrainCircuit size={24}/></span><div><p className="text-xs font-bold uppercase tracking-widest text-teal-600">Size özel sistem</p><h2 className="font-display text-lg font-bold">Operasyon asistanı</h2></div></div><span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-700">Kontrollü</span></div>
                <div className="mt-6 space-y-3">
                  {[['Talep geldi','E-posta ve form içeriği sınıflandırıldı'],['Bilgi toplandı','CRM ve dokümanlardan bağlam hazırlandı'],['Taslak oluşturuldu','İnsan onayına gönderildi']].map(([title,detail],index) => <div key={title} className="flex gap-4 rounded-2xl border border-slate-200 bg-light-bg p-4"><span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-teal-600 text-xs font-bold text-white">{index+1}</span><div><h3 className="font-bold">{title}</h3><p className="mt-1 text-sm text-slate-500">{detail}</p></div></div>)}
                </div>
                <div className="mt-4 flex items-center gap-2 rounded-xl bg-navy-900 px-4 py-3 text-sm text-white"><ShieldCheck className="text-teal-300" size={19}/><span>Kritik işlemler sizin onayınızla ilerler.</span></div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="max-w-3xl"><p className="text-sm font-bold uppercase tracking-[.18em] text-teal-600">Neleri devredebilirsiniz?</p><h2 className="mt-3 font-display text-3xl font-bold sm:text-5xl">Tekrarlanan işi azaltın, önemli kararı siz verin</h2><p className="mt-5 text-lg leading-8 text-slate-600">Her süreç otomasyona uygun değildir. Önce ölçülebilir fayda üretecek ve güvenli biçimde devredilebilecek alanları seçeriz.</p></div>
            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{useCases.map(([Icon,title,copy]) => <div key={title} className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"><span className="grid h-12 w-12 place-items-center rounded-2xl bg-teal-50 text-teal-700"><Icon size={24}/></span><h3 className="mt-5 text-xl font-bold">{title}</h3><p className="mt-3 leading-7 text-slate-600">{copy}</p></div>)}</div>
          </div>
        </section>

        <section id="nasil-calisir" className="scroll-mt-24 bg-navy-900 py-20 text-white sm:py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <p className="text-sm font-bold uppercase tracking-[.18em] text-teal-400">Çalışma modeli</p><h2 className="mt-3 max-w-3xl font-display text-3xl font-bold sm:text-5xl">Fikirden çalışan sisteme dört adım</h2>
            <div className="mt-12 grid gap-5 md:grid-cols-2">{steps.map(([number,title,copy]) => <div key={number} className="rounded-3xl border border-white/10 bg-white/5 p-7"><span className="text-sm font-bold text-teal-400">{number}</span><h3 className="mt-3 text-2xl font-bold">{title}</h3><p className="mt-3 leading-7 text-slate-300">{copy}</p></div>)}</div>
          </div>
        </section>

        <section className="py-20 sm:py-24">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-2">
            <div><p className="text-sm font-bold uppercase tracking-[.18em] text-teal-600">Teslim yaklaşımı</p><h2 className="mt-3 font-display text-3xl font-bold sm:text-5xl">Kara kutu değil, yönetilebilir bir sistem</h2><p className="mt-5 text-lg leading-8 text-slate-600">Kullanılan veri kaynakları, entegrasyonlar, yetkiler ve kontrol noktaları baştan tanımlanır. Sistem sizin çalışma biçiminize uyarlanır ve teslim süreci dokümante edilir.</p></div>
            <ul className="space-y-4">{['Mevcut uygulamalarınızla entegrasyon','Rol ve erişim sınırlarının tanımlanması','Kritik adımlarda insan onayı','Test senaryoları ve teslim dokümantasyonu','Kullanım sonrası izleme ve iyileştirme'].map(item => <li key={item} className="flex gap-3 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"><CheckCircle2 className="mt-0.5 shrink-0 text-teal-600" size={21}/><span className="font-semibold">{item}</span></li>)}</ul>
          </div>
        </section>

        <section className="bg-teal-600 py-20 text-center text-white"><div className="mx-auto max-w-3xl px-5"><h2 className="font-display text-3xl font-bold sm:text-5xl">Aklınızdaki işi birlikte değerlendirelim</h2><p className="mt-5 text-lg leading-8 text-teal-50">Ne yapmak istediğinizi veya hangi işin sizi yavaşlattığını anlatın. İlk görüşmede uygulanabilir alanı ve doğru başlangıç noktasını belirleyelim.</p><a href={CONTACT_URL} className="mt-8 inline-flex items-center gap-2 rounded-full bg-navy-900 px-8 py-4 font-bold text-white shadow-xl">Görüşme başlat <ArrowRight size={18}/></a></div></section>
      </main>

      <footer className="bg-navy-900 py-10 text-slate-400"><div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 text-sm sm:px-8 md:flex-row md:items-center md:justify-between"><a href="/" className="inline-flex w-fit rounded-xl bg-white px-3 py-2"><img src="/Logo.png" alt="Bi Analytic" className="h-11 w-auto"/></a><p>© {new Date().getFullYear()} Bi Analytic. Tüm hakları saklıdır.</p><a href="mailto:info@bianalytic.net" className="flex items-center gap-2 font-semibold text-white hover:text-teal-400"><Mail size={16}/> info@bianalytic.net</a></div></footer>
    </div>
  );
}
