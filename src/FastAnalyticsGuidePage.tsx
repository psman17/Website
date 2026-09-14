import React from 'react';
import { ArrowRight, CheckCircle2, Clock3, Database, Gauge, Mail } from 'lucide-react';

const steps = [
  {
    icon: Database,
    title: '1. Veri kaynaklarını çıkarın',
    text: 'Excel dosyaları, muhasebe, satış, POS, üretim, stok ve diğer sistemler listelenir. Verinin sahibi, güncellenme sıklığı ve temel kalite sorunları not edilir.',
  },
  {
    icon: Gauge,
    title: '2. Karar sorusunu belirleyin',
    text: 'İlk dashboard her şeyi göstermeye çalışmaz. Satış, kârlılık, stok, üretim veya operasyon içinden günlük kararı en çok etkileyen alan seçilir.',
  },
  {
    icon: Clock3,
    title: '3. Küçük kapsamla başlayın',
    text: 'Veri hazırsa entegrasyon ve veri modeli kurulur. İlk ekranlar gerçek kullanıcılarla kontrol edilir; işe yarayan yapı daha sonra genişletilir.',
  },
];

const savings = [
  'Kullanılmayan lisans ve gereksiz modül riskini azaltmak',
  'Aynı veriyi farklı ekiplerin tekrar tekrar hazırlamasını önlemek',
  'İlk aşamada yalnızca karar veren metriklere odaklanmak',
  'Bakım sorumluluğunu ve veri yenileme yöntemini baştan belirlemek',
];

export default function FastAnalyticsGuidePage() {
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
          <div className="absolute -right-16 top-8 h-96 w-96 rounded-full bg-teal-100/70 blur-3xl" />
          <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <p className="text-sm font-bold uppercase tracking-[.2em] text-teal-600">KOBİ rehberi</p>
            <h1 className="mt-4 max-w-4xl font-display text-4xl font-bold leading-tight text-navy-900 sm:text-6xl">KOBİ’ler İçin Hızlı ve Ekonomik Veri Analizi</h1>
            <p className="mt-7 max-w-3xl text-xl leading-8 text-slate-600">KOBİ’lerde hızlı ve ekonomik veri analizi, en ucuz aracı seçmekle başlamaz. Önce tek bir karar sorusu belirlenir, mevcut verinin kullanılabilirliği ölçülür ve yalnızca gerekli entegrasyon ile dashboard kapsamı kurulur.</p>
            <p className="mt-4 max-w-3xl leading-7 text-slate-600">Bianalytic bu süreci ücretsiz veri keşfiyle başlatır. Veriler doğru yapılandırılmışsa ilk 48 saatte entegrasyon ve veri modeli kurulabilir; dashboard tasarımına başlanabilir. Tam teslim süresi kaynak sayısına, veri kalitesine ve istenen geliştirmelere bağlıdır.</p>
          </div>
        </section>

        <section className="py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-3xl font-bold text-navy-900">Hızlı başlangıç için üç adım</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-3">{steps.map(({ icon: Icon, title, text }) => <article key={title} className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm"><span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-50 text-teal-600"><Icon size={22} /></span><h3 className="mt-5 font-display text-xl font-bold text-navy-900">{title}</h3><p className="mt-3 leading-7">{text}</p></article>)}</div>
          </div>
        </section>

        <section className="bg-white py-16">
          <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
            <article>
              <h2 className="font-display text-3xl font-bold text-navy-900">“Ekonomik” çözüm ne demektir?</h2>
              <p className="mt-5 leading-7">Ekonomik çözüm yalnızca düşük lisans bedeli değildir. Veri hazırlığına ayrılan zaman, entegrasyon geliştirme işi, bakım yükü ve yanlış raporla alınan kararlar da toplam maliyetin parçasıdır.</p>
              <p className="mt-4 leading-7">Bir KOBİ için doğru başlangıç, ihtiyaç duyulmayan ekranları ertelemektir. Önce günlük veya haftalık kullanılan karar göstergeleri seçilir. Kaynaklar otomatik yenilenir ve hesaplama kuralları tek veri modelinde tanımlanır.</p>
              <p className="mt-4 leading-7">Sayısal teklif veri keşfinden sonra hazırlanır. Böylece işletme, görmediği veri sorunları veya kullanmayacağı özellikler için baştan geniş bir kapsam satın almak zorunda kalmaz.</p>
            </article>
            <article className="rounded-3xl bg-navy-900 p-8 text-slate-200">
              <h2 className="font-display text-3xl font-bold text-white">Maliyeti düşüren seçimler</h2>
              <div className="mt-6 space-y-4">{savings.map((item) => <p key={item} className="flex gap-3 leading-7"><CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-teal-400" /><span>{item}</span></p>)}</div>
            </article>
          </div>
        </section>

        <section className="py-16">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-3xl font-bold text-navy-900">Hangi veri kaynakları kullanılabilir?</h2>
            <p className="mt-5 leading-7">Satış, muhasebe, stok, üretim, restoran POS, e-ticaret, CRM, sensör ve çiftlik kayıtları aynı analiz modeline bağlanabilir. Kaynak bir veritabanı, API, bulut hizmeti veya düzenli dosya olabilir. Bağlantı yöntemi güvenlik, yenileme sıklığı ve veri hacmine göre seçilir.</p>
            <p className="mt-4 leading-7">Her kaynağı ilk günden bağlamak gerekli değildir. Kararı etkileyen en küçük veri kümesiyle başlamak, sonucu daha erken görmeyi sağlar. Yeni kaynaklar, ilk model doğrulandıktan sonra eklenebilir.</p>

            <h2 className="mt-12 font-display text-3xl font-bold text-navy-900">İlk dashboard hangi göstergeleri içermeli?</h2>
            <p className="mt-5 leading-7">Satış yapan işletmeler günlük gelir, sipariş sayısı, ortalama sepet ve ürün kırılımıyla başlayabilir. Üretim şirketlerinde hedef-gerçekleşen üretim, duruş, fire ve teslimat öne çıkar. Restoranlarda şube satışı, ürün grubu, iptal ve stok hareketi izlenebilir.</p>
            <p className="mt-4 leading-7">Tarım ve hayvancılık işletmeleri hayvan sayısı, sağlık, süt, yem ve finans kayıtlarını birlikte değerlendirebilir. Hizmet şirketlerinde proje yükü, faturalama ve tahsilat daha değerli olabilir. Her sektör için ortak kural aynıdır: ilk ekran, bir sonraki kararı değiştirmeyen ölçümlerle doldurulmamalıdır.</p>
            <p className="mt-4 leading-7">Gösterge tanımları da yazılı hale getirilmelidir. “Ciro”, “aktif müşteri” veya “stok” farklı ekiplerde farklı hesaplanıyorsa dashboard güven kaybeder. Veri modeli bu tanımları tek kurala bağlar.</p>
            <p className="mt-4 leading-7">Pilot ekran belirli bir kullanıcı grubuyla denenmelidir. Kullanıcıların hangi filtreleri açtığı, hangi ölçümlerde açıklama istediği ve hangi kararları daha hızlı aldığı kaydedilir. Sonraki geliştirme listesi bu gerçek kullanıma göre hazırlanır; yalnızca görsel beklentiye göre büyütülmez.</p>

            <h2 className="mt-12 font-display text-3xl font-bold text-navy-900">Hazır platform mu, danışmanlık mı?</h2>
            <p className="mt-5 leading-7">Deneyimli bir BI ekibi ve düzenli veri ambarı olan işletmeler, hazır bir platformu kendi başına yönetebilir. BT ekibi olmayan veya küçük bir ekiple çalışan işletmelerde ise araçtan önce veri modeli ve süreç sahipliği çözülmelidir.</p>
            <p className="mt-4 leading-7">Bianalytic bir BI yazılımı değildir. İşletmenin mevcut araçlarını değerlendiren ve uygun teknolojiyle çözüm kuran danışmanlık firmasıdır. Dashboard dışında özel web uygulaması, yönetim ekranı, yapay zekâ veya otomasyon gerekiyorsa aynı veri yapısı üzerinde geliştirilebilir.</p>
            <p className="mt-4 leading-7">Karar vermeden önce <a className="font-semibold text-teal-700 underline" href="/karsilastirma/is-zekasi-danismanligi-ve-bi-platformu">danışmanlık ve BI platformu karşılaştırmasını</a> inceleyebilirsiniz.</p>
          </div>
        </section>

        <section className="bg-slate-100 py-16">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-3xl font-bold text-navy-900">Sık sorulan sorular</h2>
            <div className="mt-8 space-y-5">
              <article className="rounded-3xl bg-white p-7 shadow-sm"><h3 className="font-display text-xl font-bold text-navy-900">İlk dashboard 48 saatte hazır olur mu?</h3><p className="mt-3 leading-7">Veriler doğru yapılandırılmışsa ilk 48 saatte entegrasyon, veri modeli ve dashboard tasarımı başlatılabilir. Bütün projenin teslim süresi kapsam ve veri kalitesine göre belirlenir.</p></article>
              <article className="rounded-3xl bg-white p-7 shadow-sm"><h3 className="font-display text-xl font-bold text-navy-900">Veri keşfi ücretli midir?</h3><p className="mt-3 leading-7">Hayır. Bianalytic veri keşfini ücretsiz yapar. İhtiyaç, kaynaklar ve uygulanabilir kapsam belirlendikten sonra teklif hazırlanır.</p></article>
              <article className="rounded-3xl bg-white p-7 shadow-sm"><h3 className="font-display text-xl font-bold text-navy-900">Mevcut BI lisansı kullanılabilir mi?</h3><p className="mt-3 leading-7">Evet. Mevcut lisans ve teknik altyapı veri keşfinde değerlendirilir. Uygunsa yeni bir araç satın almadan mevcut teknolojiyle devam edilebilir.</p></article>
              <article className="rounded-3xl bg-white p-7 shadow-sm"><h3 className="font-display text-xl font-bold text-navy-900">BT ekibi olmadan başlanabilir mi?</h3><p className="mt-3 leading-7">Evet. Veri kaynaklarına gerekli erişim sağlandığında entegrasyon, model ve dashboard süreci Bianalytic ile birlikte yürütülebilir.</p></article>
            </div>
          </div>
        </section>

        <section className="bg-teal-600 py-16 text-white">
          <div className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-8 px-4 sm:px-6 lg:flex-row lg:items-center lg:px-8"><div><h2 className="font-display text-3xl font-bold">Verinizle başlayın</h2><p className="mt-3 max-w-2xl text-lg leading-8 text-teal-50">Hangi rapora veya araca ihtiyacınız olduğundan emin olmasanız da mevcut veri kaynaklarınızı paylaşabilirsiniz. İlk adım ücretsiz veri keşfidir.</p></div><a href="/iletisim" className="inline-flex shrink-0 items-center gap-2 rounded-full bg-navy-900 px-7 py-4 font-bold text-white shadow-xl transition hover:-translate-y-0.5 hover:bg-navy-800">Veri keşfi talep edin <ArrowRight size={18} /></a></div>
        </section>
      </main>

      <footer className="bg-navy-900 py-10 text-slate-400"><div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 text-sm md:flex-row md:items-center md:justify-between"><a href="/" className="inline-flex w-fit rounded-xl bg-white px-3 py-2"><img src="/Logo.png" alt="Bi Analytic" className="h-11 w-auto" /></a><div className="flex flex-wrap gap-5"><a href="/iletisim" className="hover:text-white">İletişim</a><a href="/gizlilik-politikasi" className="hover:text-white">Gizlilik</a><a href="/kullanim-kosullari" className="hover:text-white">Kullanım Koşulları</a></div><a href="mailto:info@bianalytic.net" className="flex items-center gap-2 font-semibold text-white hover:text-teal-400"><Mail size={16} /> info@bianalytic.net</a></div></footer>
    </div>
  );
}
