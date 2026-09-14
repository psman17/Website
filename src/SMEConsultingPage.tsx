import {useState} from 'react';
import {ArrowRight, BarChart3, CheckCircle2, Database, Layers, Mail, MapPin, Menu, Phone, X} from 'lucide-react';

const CONTACT_URL = 'mailto:mustafa.oz@bianalytic.net?subject=Ücretsiz veri keşfi talebi';

const globalNav = [
  ['Çözümler', '/#cozumler'],
  ['İş Zekâsı', '/is-zekasi-danismanligi'],
  ['Yapay Zekâ', '/ozel-yapay-zeka'],
  ['Bi Restoran', '/restoran'],
  ['Bi Sürü', '/suru'],
  ['Özel Yazılım', '/#ozel-yazilim'],
];

const sectionNav = [
  ['Genel Bakış', '#genel-bakis'],
  ['Süreç', '#surec'],
  ['Veri Kaynakları', '#veri-kaynaklari'],
  ['Hizmet Kapsamı', '#hizmet-kapsami'],
  ['Kimler İçin', '#kimler-icin'],
  ['SSS', '#sss'],
];

const serviceScope = [
  'Mevcut veri kaynaklarının ve raporlama ihtiyaçlarının keşfi',
  'Farklı kaynaklar arasında veri entegrasyonunun kurulması',
  'Raporlamaya uygun, tutarlı bir veri modelinin hazırlanması',
  'Karar ekiplerinin kullanacağı dashboardların tasarlanması',
  'Mevcut BT ekibiyle birlikte geliştirme ve uzman desteği',
];

export default function SMEConsultingPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#f7fbfb] text-navy-900">
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <a href="/" aria-label="Bi Analytic ana sayfa">
            <img src="/Logo.png" alt="Bi Analytic" className="h-[50px] w-[150px] object-contain"/>
          </a>
          <nav className="hidden items-center gap-5 lg:flex xl:gap-7" aria-label="Ana navigasyon">
            {globalNav.map(([label, href]) => <a key={label} href={href} className={`text-sm font-medium transition-colors hover:text-teal-600 ${label === 'İş Zekâsı' ? 'text-teal-700' : 'text-navy-800'}`}>{label}</a>)}
            <a href={CONTACT_URL} className="rounded-full bg-navy-900 px-5 py-2.5 text-sm font-semibold text-white shadow-md transition hover:bg-navy-800">Ücretsiz veri keşfi</a>
          </nav>
          <button type="button" onClick={() => setMenuOpen(!menuOpen)} className="rounded-lg p-2 text-navy-900 lg:hidden" aria-label={menuOpen ? 'Menüyü kapat' : 'Menüyü aç'} aria-expanded={menuOpen}>
            {menuOpen ? <X/> : <Menu/>}
          </button>
        </div>
        {menuOpen && <nav className="border-t border-slate-100 bg-white px-4 py-4 lg:hidden" aria-label="Mobil navigasyon">
          <div className="mx-auto max-w-7xl space-y-1">
            {globalNav.map(([label, href]) => <a key={label} href={href} onClick={() => setMenuOpen(false)} className="block rounded-lg px-3 py-3 font-medium text-navy-800 hover:bg-light-bg">{label}</a>)}
            <a href={CONTACT_URL} className="mt-3 block rounded-lg bg-navy-900 px-4 py-3 text-center font-semibold text-white">Ücretsiz veri keşfi</a>
          </div>
        </nav>}
      </header>

      <nav className="sticky top-[83px] z-40 border-b border-slate-200 bg-white/95 shadow-sm backdrop-blur-md" aria-label="Sayfa bölümleri">
        <div className="mx-auto flex max-w-7xl gap-7 overflow-x-auto px-4 py-3 sm:px-6 lg:px-8">
          {sectionNav.map(([label, href]) => <a key={label} href={href} className="shrink-0 text-sm font-semibold text-slate-600 transition hover:text-teal-700">{label}</a>)}
        </div>
      </nav>

      <main>
        <section id="genel-bakis" className="scroll-mt-36 border-b border-slate-200 bg-gradient-to-br from-light-bg via-white to-white">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-[1.08fr_.92fr]">
            <div>
              <p className="mb-5 text-sm font-bold uppercase tracking-[0.18em] text-teal-600">Bianalytic hizmetleri</p>
              <h1 className="font-display text-4xl font-bold leading-tight sm:text-6xl">İş zekâsı danışmanlığıyla verinizi karar desteğine dönüştürün</h1>
              <div className="mt-7 max-w-3xl space-y-4 text-lg leading-8 text-slate-700">
                <p>Bianalytic, BT ekibi olmayan veya küçük bir BT ekibiyle çalışan şirketlerin yanında kurumsal ekiplere de proje bazlı iş zekâsı danışmanlığı verir.</p>
                <p>Qlik Sense ve Tableau gibi araçları veri yapınıza göre kullanır; tek başına satılan bir iş zekâsı programı değildir.</p>
              </div>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href={CONTACT_URL} className="inline-flex items-center justify-center gap-2 rounded-full bg-navy-900 px-7 py-4 font-bold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-navy-800">Ücretsiz veri keşfi <ArrowRight size={18}/></a>
                <a href="#surec" className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-7 py-4 font-bold text-navy-900 transition hover:border-teal-300">Süreci inceleyin</a>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-xl">
              <div className="absolute inset-0 rotate-3 rounded-[2rem] bg-gradient-to-br from-teal-500/20 to-navy-900/10 blur-xl"/>
              <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-6 shadow-2xl shadow-navy-900/10">
                <div className="flex items-center justify-between border-b border-slate-100 pb-5">
                  <div><p className="text-xs font-bold uppercase tracking-widest text-teal-600">Veri akışı</p><h2 className="mt-1 font-display text-xl font-bold">Kaynaklardan karar ekranına</h2></div>
                  <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-700">Canlı model</span>
                </div>
                <div className="mt-6 grid gap-3 sm:grid-cols-3">
                  {[['01','Veri Kaynakları','ERP · Excel · API'],['02','Veri Modeli','Temiz · Tutarlı'],['03','Dashboard','Karar · Aksiyon']].map(([step,title,detail]) => <div key={step} className="rounded-2xl border border-slate-200 bg-light-bg p-4"><span className="text-xs font-bold text-teal-600">{step}</span><h3 className="mt-2 font-bold text-navy-900">{title}</h3><p className="mt-1 text-xs text-slate-500">{detail}</p></div>)}
                </div>
                <div className="mt-5 rounded-2xl bg-navy-900 p-5 text-white">
                  <div className="flex items-center justify-between"><span className="text-sm text-slate-300">Karar görünümü</span><BarChart3 className="text-teal-400" size={22}/></div>
                  <div className="mt-6 flex h-28 items-end gap-3" aria-hidden="true">{[45,72,56,88,68,96].map((height,index) => <span key={index} className="flex-1 rounded-t-md bg-gradient-to-t from-teal-600 to-teal-300" style={{height: `${height}%`}}/> )}</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <article className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_280px]">
            <div className="space-y-14 text-[17px] leading-8 text-slate-700">
              <section>
                <h2 className="mb-5 font-display text-3xl font-bold text-navy-900">Bianalytic ne yapar?</h2>
                <p>Çalışma, şirketin mevcut verilerinin ve raporlama ihtiyacının incelenmesiyle başlar. Amaç; farklı kaynaklardaki verileri bir araya getirmek, kullanılabilir bir veri modeli kurmak ve karar ekiplerinin takip edeceği dashboardları tasarlamaktır.</p>
                <p className="mt-4">Bianalytic; perakende, üretim, restoran ve tarım dahil farklı sektörlerde çalışabilir. Hizmet, BT ekibi olmayan veya küçük bir BT ekibi bulunan işletmelerin yanında kurumsal şirketlere de sunulur.</p>
              </section>

              <section id="surec" className="scroll-mt-40">
                <h2 className="mb-5 font-display text-3xl font-bold text-navy-900">İlk 48 saatte hangi çalışma yapılır?</h2>
                <p>İlk 48 saat içinde veri keşfi yapılır. Veri kaynaklarının yapısı, erişilebilirliği, kalitesi ve raporlama hedefleri incelenir.</p>
                <p className="mt-4">Veriler doğru biçimde yapılandırılmışsa bu süre içinde entegrasyon ve veri modeli kurulabilir, ardından dashboard tasarımına başlanabilir. Kaynak verilerin eksik, tutarsız veya erişime kapalı olması halinde takvim veri hazırlığı ihtiyacına göre yeniden belirlenir.</p>
              </section>

              <section>
                <h2 className="mb-5 font-display text-3xl font-bold text-navy-900">Veri keşfinden sonra hangi adımlar gelir?</h2>
                <div className="grid gap-4 sm:grid-cols-3">
                  {[
                    [Database, 'Entegrasyon', 'Gerekli veri kaynakları belirlenir ve bağlantı yöntemi seçilir.'],
                    [Layers, 'Veri modeli', 'Raporlarda kullanılacak ölçüler ve ilişkiler ortak bir yapıda kurulur.'],
                    [BarChart3, 'Dashboard', 'Karar ihtiyacına uygun ekranlar ve göstergeler tasarlanır.'],
                  ].map(([Icon, title, copy]) => (
                    <div key={String(title)} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                      <Icon className="mb-4 text-teal-600" size={24}/>
                      <h3 className="font-bold text-navy-900">{String(title)}</h3>
                      <p className="mt-2 text-sm leading-6">{String(copy)}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section id="veri-kaynaklari" className="scroll-mt-40">
                <h2 className="mb-5 font-display text-3xl font-bold text-navy-900">Hangi veri kaynakları kullanılabilir?</h2>
                <p>Bianalytic her türlü veri kaynağına bağlanabilen çözümler geliştirir. Kullanılacak bağlantı ve iş zekâsı aracı; verinin bulunduğu sistem, güvenlik gereksinimleri, güncelleme sıklığı ve raporu kullanacak ekibin ihtiyacına göre seçilir.</p>
                <p className="mt-4">Bu nedenle danışmanlık sürecinde müşteriye tek bir yazılım dayatılmaz. Qlik Sense, Tableau ve benzeri araçlar projenin koşullarına göre değerlendirilir.</p>
              </section>

              <section>
                <h2 className="mb-5 font-display text-3xl font-bold text-navy-900">Çalışma modeli nasıl belirlenir?</h2>
                <p>Teslim edilecek entegrasyon, veri modeli ve dashboard kapsamı baştan tanımlanabiliyorsa çalışma proje bazlı planlanabilir. İhtiyaçların zaman içinde değiştiği veya mevcut ekiple birlikte ilerlenmesi gereken çalışmalarda dönemsel uzman desteği değerlendirilebilir.</p>
                <p className="mt-4">Uygun yöntem ücretsiz veri keşfinde belirlenir. Böylece kapsam, henüz görülmemiş bir veri yapısı hakkında varsayım yapmak yerine incelenen ihtiyaçlara dayanır.</p>
              </section>

              <section id="hizmet-kapsami" className="scroll-mt-40">
                <h2 className="mb-5 font-display text-3xl font-bold text-navy-900">Hizmet kapsamında neler bulunur?</h2>
                <p>Bianalytic, yalnızca dashboard ekranı hazırlamak yerine verinin kaynağından karar ekranına kadar uzanan süreci birlikte ele alır. Kapsam ücretsiz veri keşfinde şirketin mevcut yapısına göre netleştirilir.</p>
                <ul className="mt-6 space-y-3">
                  {serviceScope.map((item) => (
                    <li key={item} className="flex gap-3 rounded-xl bg-white p-4 shadow-sm ring-1 ring-slate-200">
                      <CheckCircle2 className="mt-1 shrink-0 text-teal-600" size={20}/>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-5">Yaklaşım, araç lisansı satmaktan önce veri yapısını ve karar ihtiyacını incelemek üzerine kuruludur. Kullanılacak teknoloji bu incelemenin ardından projenin koşullarına göre seçilir.</p>
              </section>

              <section>
                <h2 className="mb-5 font-display text-3xl font-bold text-navy-900">Veri keşfi görüşmesine nasıl hazırlanılır?</h2>
                <p>Görüşmeden önce kullanılan veri kaynaklarının, mevcut raporların ve karar ekiplerinin ihtiyaç duyduğu göstergelerin listelenmesi süreci hızlandırır. Veriye kimlerin erişebildiği, ne sıklıkla güncellendiği ve hangi raporların elle hazırlandığı da paylaşılmalıdır.</p>
                <p className="mt-4">Bu bilgiler kesin bir teknik doküman olmak zorunda değildir. Veri keşfinin amacı zaten mevcut durumu birlikte netleştirmek ve uygulanabilir bir çalışma kapsamı çıkarmaktır.</p>
              </section>

              <section id="kimler-icin" className="scroll-mt-40">
                <h2 className="mb-5 font-display text-3xl font-bold text-navy-900">Bianalytic kimler için uygundur?</h2>
                <p>Hizmet; ayrı bir veri veya iş zekâsı ekibi kurmadan raporlama altyapısı oluşturmak isteyen şirketler için uygundur. BT ekibi bulunmayan işletmeler, küçük BT ekipleri ve belirli bir analitik projede dış uzmanlık isteyen kurumsal firmalar bu kapsamda çalışabilir.</p>
                <p className="mt-4">Sektörden bağımsız olarak temel gereksinim, karar süreçlerinde kullanılacak verinin bulunması veya oluşturulabilir olmasıdır. Veri keşfi bu nedenle tekliften önce yapılır; mevcut durum görülmeden araç, süre veya teslim kapsamı kesinleştirilmez.</p>
              </section>

              <section id="sss" className="scroll-mt-40">
                <h2 className="mb-6 font-display text-3xl font-bold text-navy-900">Sık sorulan sorular</h2>
                <div className="space-y-5">
                  <div><h3 className="text-xl font-bold text-navy-900">Bianalytic bir iş zekâsı yazılımı mıdır?</h3><p className="mt-2">Hayır. Bianalytic, Qlik Sense ve Tableau gibi araçları müşterinin ihtiyacına göre kullanan bir iş zekâsı danışmanlık firmasıdır.</p></div>
                  <div><h3 className="text-xl font-bold text-navy-900">Dashboard 48 saatte tamamlanır mı?</h3><p className="mt-2">İlk 48 saatte veri keşfi yapılır. Veriler doğru yapılandırılmış ve erişilebilir durumdaysa entegrasyon ile veri modeli kurulabilir ve dashboard tasarımına başlanabilir. Tam teslim süresi projenin kapsamına bağlıdır.</p></div>
                  <div><h3 className="text-xl font-bold text-navy-900">Veri keşfi ücretli midir?</h3><p className="mt-2">Hayır. Veri keşfi ücretsiz yapılır; proje veya günlük danışmanlık teklifi bu çalışmadan sonra hazırlanır.</p></div>
                  <div><h3 className="text-xl font-bold text-navy-900">Çalışmaya nasıl başlanır?</h3><p className="mt-2">Mevcut veri kaynakları ve raporlama ihtiyacı paylaşılır. Ücretsiz veri keşfinin ardından kapsam, yöntem ve çalışma takvimi netleştirilir.</p></div>
                </div>
              </section>
            </div>

            <aside className="lg:sticky lg:top-40 lg:self-start">
              <div className="rounded-3xl bg-navy-900 p-7 text-white shadow-xl">
                <p className="text-sm font-bold uppercase tracking-widest text-teal-400">İlk adım</p>
                <h2 className="mt-3 font-display text-2xl font-bold">Verinizi birlikte inceleyelim</h2>
                <p className="mt-4 text-sm leading-6 text-slate-300">Veri kaynaklarınızı ve raporlama hedefinizi paylaşın. İlk veri keşfi ücretsizdir.</p>
                <a href={CONTACT_URL} className="mt-6 inline-flex items-center gap-2 rounded-full bg-teal-500 px-5 py-3 font-bold text-white transition hover:bg-teal-400">Görüşme başlat <ArrowRight size={18}/></a>
              </div>
            </aside>
          </div>
        </article>
      </main>

      <footer className="border-t border-navy-800 bg-navy-900 py-12 text-slate-400">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-9 md:grid-cols-4">
            <div className="md:col-span-2">
              <a href="/" className="inline-flex rounded-xl bg-white px-3 py-2"><img src="/Logo.png" alt="Bi Analytic" className="h-[45px] w-auto object-contain"/></a>
              <p className="mt-4 max-w-sm text-sm leading-6">İş zekâsı danışmanlığı, operasyon ürünleri ve işletmeye özel yazılım geliştirme çözümleri.</p>
            </div>
            <div>
              <h2 className="font-semibold text-white">İletişim</h2>
              <ul className="mt-4 space-y-3 text-sm">
                <li className="flex items-center gap-2"><Mail size={16} className="text-teal-500"/> info@bianalytic.net</li>
                <li className="flex items-center gap-2"><Phone size={16} className="text-teal-500"/> +90 543 743 1754</li>
                <li className="flex items-center gap-2"><MapPin size={16} className="text-teal-500"/> Çanakkale</li>
              </ul>
            </div>
            <div>
              <h2 className="font-semibold text-white">Çözümler</h2>
              <ul className="mt-4 space-y-2 text-sm">
                <li><a href="/is-zekasi-danismanligi" className="hover:text-teal-400">İş Zekâsı Danışmanlığı</a></li>
                <li><a href="/ozel-yapay-zeka" className="hover:text-teal-400">Özel Yapay Zekâ</a></li>
                <li><a href="/restoran" className="hover:text-teal-400">Bi Restoran</a></li>
                <li><a href="/suru" className="hover:text-teal-400">Bi Sürü</a></li>
                <li><a href="/#ozel-yazilim" className="hover:text-teal-400">Özel Yazılım</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-10 border-t border-navy-800 pt-7 text-sm">© {new Date().getFullYear()} Bi Analytic. Tüm hakları saklıdır.</div>
        </div>
      </footer>
    </div>
  );
}
