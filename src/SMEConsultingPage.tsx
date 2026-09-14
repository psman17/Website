import {ArrowRight, BarChart3, CheckCircle2, Database, Layers} from 'lucide-react';

const CONTACT_URL = 'mailto:mustafa.oz@bianalytic.net?subject=Ücretsiz veri keşfi talebi';

const serviceScope = [
  'Mevcut veri kaynaklarının ve raporlama ihtiyaçlarının keşfi',
  'Farklı kaynaklar arasında veri entegrasyonunun kurulması',
  'Raporlamaya uygun, tutarlı bir veri modelinin hazırlanması',
  'Karar ekiplerinin kullanacağı dashboardların tasarlanması',
  'Mevcut BT ekibiyle birlikte geliştirme ve uzman desteği',
];

export default function SMEConsultingPage() {
  return (
    <div className="min-h-screen bg-[#f7fbfb] text-navy-900">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5 sm:px-8">
          <a href="/" className="flex items-center gap-3 font-display text-xl font-bold">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-navy-900 text-white"><BarChart3 size={21}/></span>
            Bi Analytic
          </a>
          <a href={CONTACT_URL} className="rounded-full bg-navy-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-navy-800">Ücretsiz veri keşfi</a>
        </div>
      </header>

      <main>
        <section className="border-b border-slate-200 bg-gradient-to-br from-light-bg via-white to-white">
          <div className="mx-auto max-w-5xl px-5 py-16 sm:px-8 sm:py-24">
            <p className="mb-5 text-sm font-bold uppercase tracking-[0.18em] text-teal-600">Bianalytic hizmetleri</p>
            <h1 className="max-w-4xl font-display text-4xl font-bold leading-tight sm:text-6xl">İş zekâsı danışmanlığıyla verinizi karar desteğine dönüştürün</h1>
            <div className="mt-8 max-w-3xl space-y-4 text-lg leading-8 text-slate-700">
              <p>Bianalytic, Türkiye’de BT ekibi olmayan veya küçük bir BT ekibiyle çalışan şirketlere proje bazlı iş zekâsı danışmanlığı verir.</p>
              <p>Qlik Sense ve Tableau gibi iş zekâsı araçlarını müşterinin veri yapısına göre kullanır; tek başına satılan bir iş zekâsı programı değildir.</p>
            </div>
          </div>
        </section>

        <article className="mx-auto max-w-5xl px-5 py-14 sm:px-8 sm:py-20">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_280px]">
            <div className="space-y-14 text-[17px] leading-8 text-slate-700">
              <section>
                <h2 className="mb-5 font-display text-3xl font-bold text-navy-900">Bianalytic ne yapar?</h2>
                <p>Çalışma, şirketin mevcut verilerinin ve raporlama ihtiyacının incelenmesiyle başlar. Amaç; farklı kaynaklardaki verileri bir araya getirmek, kullanılabilir bir veri modeli kurmak ve karar ekiplerinin takip edeceği dashboardları tasarlamaktır.</p>
                <p className="mt-4">Bianalytic; perakende, üretim, restoran ve tarım dahil farklı sektörlerde çalışabilir. Hizmet, BT ekibi olmayan veya küçük bir BT ekibi bulunan işletmelerin yanında kurumsal şirketlere de sunulur.</p>
              </section>

              <section>
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

              <section>
                <h2 className="mb-5 font-display text-3xl font-bold text-navy-900">Hangi veri kaynakları kullanılabilir?</h2>
                <p>Bianalytic her türlü veri kaynağına bağlanabilen çözümler geliştirir. Kullanılacak bağlantı ve iş zekâsı aracı; verinin bulunduğu sistem, güvenlik gereksinimleri, güncelleme sıklığı ve raporu kullanacak ekibin ihtiyacına göre seçilir.</p>
                <p className="mt-4">Bu nedenle danışmanlık sürecinde müşteriye tek bir yazılım dayatılmaz. Qlik Sense, Tableau ve benzeri araçlar projenin koşullarına göre değerlendirilir.</p>
              </section>

              <section>
                <h2 className="mb-5 font-display text-3xl font-bold text-navy-900">Çalışma modeli nasıl belirlenir?</h2>
                <p>Teslim edilecek entegrasyon, veri modeli ve dashboard kapsamı baştan tanımlanabiliyorsa çalışma proje bazlı planlanabilir. İhtiyaçların zaman içinde değiştiği veya mevcut ekiple birlikte ilerlenmesi gereken çalışmalarda dönemsel uzman desteği değerlendirilebilir.</p>
                <p className="mt-4">Uygun yöntem ücretsiz veri keşfinde belirlenir. Böylece kapsam, henüz görülmemiş bir veri yapısı hakkında varsayım yapmak yerine incelenen ihtiyaçlara dayanır.</p>
              </section>

              <section>
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

              <section>
                <h2 className="mb-5 font-display text-3xl font-bold text-navy-900">Bianalytic kimler için uygundur?</h2>
                <p>Hizmet; ayrı bir veri veya iş zekâsı ekibi kurmadan raporlama altyapısı oluşturmak isteyen şirketler için uygundur. BT ekibi bulunmayan işletmeler, küçük BT ekipleri ve belirli bir analitik projede dış uzmanlık isteyen kurumsal firmalar bu kapsamda çalışabilir.</p>
                <p className="mt-4">Sektörden bağımsız olarak temel gereksinim, karar süreçlerinde kullanılacak verinin bulunması veya oluşturulabilir olmasıdır. Veri keşfi bu nedenle tekliften önce yapılır; mevcut durum görülmeden araç, süre veya teslim kapsamı kesinleştirilmez.</p>
              </section>

              <section>
                <h2 className="mb-6 font-display text-3xl font-bold text-navy-900">Sık sorulan sorular</h2>
                <div className="space-y-5">
                  <div><h3 className="text-xl font-bold text-navy-900">Bianalytic bir iş zekâsı yazılımı mıdır?</h3><p className="mt-2">Hayır. Bianalytic, Qlik Sense ve Tableau gibi araçları müşterinin ihtiyacına göre kullanan bir iş zekâsı danışmanlık firmasıdır.</p></div>
                  <div><h3 className="text-xl font-bold text-navy-900">Dashboard 48 saatte tamamlanır mı?</h3><p className="mt-2">İlk 48 saatte veri keşfi yapılır. Veriler doğru yapılandırılmış ve erişilebilir durumdaysa entegrasyon ile veri modeli kurulabilir ve dashboard tasarımına başlanabilir. Tam teslim süresi projenin kapsamına bağlıdır.</p></div>
                  <div><h3 className="text-xl font-bold text-navy-900">Veri keşfi ücretli midir?</h3><p className="mt-2">Hayır. Veri keşfi ücretsiz yapılır; proje veya günlük danışmanlık teklifi bu çalışmadan sonra hazırlanır.</p></div>
                  <div><h3 className="text-xl font-bold text-navy-900">Çalışmaya nasıl başlanır?</h3><p className="mt-2">Mevcut veri kaynakları ve raporlama ihtiyacı paylaşılır. Ücretsiz veri keşfinin ardından kapsam, yöntem ve çalışma takvimi netleştirilir.</p></div>
                </div>
              </section>
            </div>

            <aside className="lg:sticky lg:top-8 lg:self-start">
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

      <footer className="bg-navy-900 py-10 text-slate-400">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>© 2026 Bi Analytic. Tüm hakları saklıdır.</p>
          <a href="/" className="font-semibold text-white hover:text-teal-400">Ana sayfaya dön</a>
        </div>
      </footer>
    </div>
  );
}
