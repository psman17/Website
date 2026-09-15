import React from 'react';
import { ArrowRight, CheckCircle2, Clock3, Database, KeyRound, Mail, PanelsTopLeft } from 'lucide-react';

const prerequisites = [
  {
    icon: Database,
    title: 'Kaynaklar belirli olmalı',
    text: 'Kullanılacak dosya, veritabanı veya uygulamalar ile bu kaynakların veri sahipleri bilinmelidir.',
  },
  {
    icon: KeyRound,
    title: 'Erişim hazırlanmalı',
    text: 'Gerekli kullanıcı, API, veritabanı veya güvenli dosya erişimleri çalışma başlamadan sağlanmalıdır.',
  },
  {
    icon: PanelsTopLeft,
    title: 'İlk karar sorusu seçilmeli',
    text: 'İlk ekranın satış, stok, üretim, finans veya operasyon içinden hangi karara hizmet edeceği net olmalıdır.',
  },
];

const delays = [
  'Aynı müşteri veya ürünün kaynaklarda farklı kodlarla tutulması',
  'Metriklerin ekipler tarafından farklı hesaplanması',
  'Eksik tarih, tutar veya anahtar alanlar',
  'Kaynak sistemde dış erişim ya da API kısıtı bulunması',
  'Güvenlik ve yetki onaylarının tamamlanmaması',
  'İlk sürüme çok sayıda kaynak ve ekran eklenmesi',
];

export default function RapidBIStartGuidePage() {
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
          <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.2fr_.8fr] lg:px-8">
            <div>
              <p className="text-sm font-bold uppercase tracking-[.2em] text-teal-600">Hızlı başlangıç rehberi</p>
              <h1 className="mt-4 font-display text-4xl font-bold leading-tight text-navy-900 sm:text-6xl">48 Saatte İş Zekâsı Projesine Nasıl Başlanır?</h1>
              <p className="mt-7 max-w-3xl text-xl leading-8 text-slate-600">Veriler doğru yapılandırılmış, erişimler hazır ve ilk karar sorusu belirlenmişse 48 saat içinde veri bağlantısı ile model kurulabilir ve dashboard tasarımına başlanabilir. Bu hedef, bütün projenin tamamlanmasından önce doğrulanabilir bir teknik başlangıç oluşturur.</p>
              <p className="mt-4 max-w-3xl leading-7 text-slate-600">Bianalytic önce ücretsiz veri keşfi yapar. Kaynakların kullanılabilirliği ve ilk kapsam doğrulandıktan sonra entegrasyon, modelleme ve ekran çalışması planlanır. Projenin toplam takvimi veri kalitesi, kaynak sayısı ve istenen geliştirmelere göre belirlenir.</p>
            </div>
            <aside className="rounded-3xl bg-navy-900 p-8 text-white shadow-2xl">
              <Clock3 className="h-12 w-12 text-teal-300" />
              <p className="mt-6 text-sm font-bold uppercase tracking-[.16em] text-teal-300">48 saatlik hedef</p>
              <p className="mt-3 font-display text-3xl font-bold">Bağlantı, ilk veri modeli ve dashboard tasarım başlangıcı</p>
              <p className="mt-5 leading-7 text-slate-300">Kapsam; veri keşfinde doğrulanan kaynaklar ve ilk karar sorusuyla sınırlıdır.</p>
            </aside>
          </div>
        </section>

        <section className="py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-3xl font-bold text-navy-900">48 saatlik başlangıç için hangi koşullar gerekir?</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-3">{prerequisites.map(({ icon: Icon, title, text }) => <article key={title} className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm"><span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-50 text-teal-600"><Icon size={22} /></span><h3 className="mt-5 font-display text-xl font-bold text-navy-900">{title}</h3><p className="mt-3 leading-7">{text}</p></article>)}</div>
          </div>
        </section>

        <section className="bg-white py-16">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-3xl font-bold text-navy-900">Ücretsiz veri keşfinde ne yapılır?</h2>
            <p className="mt-5 leading-7">Veri keşfi sırasında işletmenin kullandığı muhasebe, satış, POS, stok, üretim, e-ticaret, CRM veya operasyon sistemleri listelenir. İlk karar için gerekli alanlar ve kaynaklar belirlenir. Örnek kayıtlar üzerinden veri yapısı, tarih alanları, ortak anahtarlar ve temel kalite sorunları incelenir.</p>
            <p className="mt-4 leading-7">Mevcut BI lisansları ve teknik altyapı da değerlendirmeye alınır. Uygun bir lisans varsa aynı teknolojiyle devam edilebilir. Hazır sektörel ürün, özel dashboard veya iş akışı uygulaması daha uygunsa seçenekler kapsamla birlikte açıklanır.</p>
            <p className="mt-4 leading-7">Keşif sonunda ilk sürümün kullanıcıları, göstergeleri, kaynakları ve yenileme sıklığı yazılı hale getirilir. Veri erişimi veya kalite sorunu bulunuyorsa hızlı başlangıçtan önce çözülmesi gereken maddeler belirtilir.</p>

            <h2 className="mt-12 font-display text-3xl font-bold text-navy-900">İlk gün hangi çalışmalar yapılır?</h2>
            <p className="mt-5 leading-7">İlk gün bağlantı yöntemi kurulur ve örnek veri güvenli biçimde alınır. Alan tipleri, tarih aralıkları, boş değerler ve kayıt tekrarları kontrol edilir. Müşteri, ürün, şube veya işletme birimi gibi ortak boyutların kaynaklar arasında nasıl eşleşeceği belirlenir.</p>
            <p className="mt-4 leading-7">Ardından ilk veri modelinin tabloları ve ilişkileri oluşturulur. Brüt satış, net satış, stok, üretim, sipariş veya başka bir öncelikli göstergenin hesaplama kuralı kaynak veriye uygulanır. Sonuçlar işletmenin bildiği örnek kayıtlarla karşılaştırılır.</p>
            <p className="mt-4 leading-7">Gün sonunda hangi bağlantının çalıştığı, hangi alanların doğrulandığı ve hangi veri sorunlarının açık kaldığı görünür olmalıdır. Bu kayıt, ikinci günün tasarım kapsamını belirler.</p>

            <h2 className="mt-12 font-display text-3xl font-bold text-navy-900">İkinci gün hangi çıktı oluşur?</h2>
            <p className="mt-5 leading-7">Doğrulanan veri modeli üzerinden ilk dashboard düzeni hazırlanır. Kullanıcının karar sırasına göre toplamlar, eğilimler, kırılımlar ve gerekli filtreler yerleştirilir. Ekran, mevcut kaynak sistemdeki örnek sonuçlarla yeniden kontrol edilir.</p>
            <p className="mt-4 leading-7">İkinci günün çıktısı tamamlanmış kurumsal raporlama sistemi olmak zorunda değildir. Amaç, veri bağlantısının çalıştığını, hesaplama kurallarının uygulanabildiğini ve ilk karar ekranının hangi yönde gelişeceğini göstermektir.</p>
            <p className="mt-4 leading-7">Kullanıcı geri bildirimi sonrasında tasarım, yeni göstergeler ve ek kaynaklar planlanır. Üretim ortamına geçiş, güvenlik kontrolleri, kullanıcı yetkileri, yenileme takvimi ve bakım sorumluluğu proje planında ayrıca ele alınır.</p>
          </div>
        </section>

        <section className="py-16">
          <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.05fr_.95fr] lg:px-8">
            <article>
              <h2 className="font-display text-3xl font-bold text-navy-900">Hangi durumlar 48 saatlik başlangıcı geciktirir?</h2>
              <p className="mt-5 leading-7">En yaygın gecikme nedeni erişim ve veri hazırlığıdır. Kaynağın bağlantı yöntemi bilinmiyorsa, yetki onayı bekleniyorsa veya ortak alanlar tutarsızsa önce bu sorunların çözülmesi gerekir.</p>
              <p className="mt-4 leading-7">Karar sorusunun geniş tutulması da başlangıcı uzatır. Satış, finans, stok, üretim ve insan kaynaklarını aynı anda kapsayan bir ilk sürüm; daha fazla kaynak, tanım ve kullanıcı doğrulaması gerektirir.</p>
              <p className="mt-4 leading-7">Hız hedefi için iş kuralları atlanmamalıdır. Yanlış toplamı erken göstermek, doğru sonucu biraz daha sonra göstermekten daha fazla düzeltme işi oluşturur. Açık kalan veri sorunları teslim planında görünür tutulmalıdır.</p>
            </article>
            <aside className="rounded-3xl bg-navy-900 p-8 text-slate-200">
              <h2 className="font-display text-3xl font-bold text-white">Başlangıcı etkileyen noktalar</h2>
              <div className="mt-7 space-y-4">{delays.map((item) => <p key={item} className="flex gap-3 leading-7"><CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-teal-400" /><span>{item}</span></p>)}</div>
            </aside>
          </div>
        </section>

        <section className="bg-white py-16">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-3xl font-bold text-navy-900">Proje kapsamı ve maliyet nasıl belirlenir?</h2>
            <p className="mt-5 leading-7">Bianalytic veri keşfini ücretsiz yapar. Geliştirme kapsamı; bağlanacak kaynaklar, hazırlanacak veri modeli, ekran sayısı, kullanıcı yetkileri, otomasyonlar ve özel uygulama ihtiyaçları görüldükten sonra belirlenir.</p>
            <p className="mt-4 leading-7">Çalışma proje bazlı veya günlük modelle planlanabilir. Sayısal teklif, veri keşfi sonrasında hazırlanır ve web sitesinde genel fiyat listesi yayımlanmaz. Böylece teklif, kullanılmayacak modüller yerine doğrulanmış ihtiyacı kapsar.</p>
            <p className="mt-4 leading-7">İlk sürümü tek karar alanıyla sınırlandırmak; bağlantı, model ve ekranın erken doğrulanmasını sağlar. Yeni kaynaklar ile işlevler, ilk kullanım sonuçlarına göre sonraki aşamalara alınabilir.</p>
            <p className="mt-4 leading-7">Çözüm seçimini ayrıntılı değerlendirmek için <a className="font-semibold text-teal-700 underline" href="/rehber/kobiler-icin-is-zekasi-secimi">KOBİ iş zekâsı seçim rehberini</a> inceleyebilirsiniz.</p>

            <h2 className="mt-12 font-display text-3xl font-bold text-navy-900">Sık sorulan sorular</h2>
            <div className="mt-8 space-y-5">
              <article className="rounded-3xl border border-slate-200 bg-slate-50 p-7"><h3 className="font-display text-xl font-bold text-navy-900">48 saatte dashboard teslim edilir mi?</h3><p className="mt-3 leading-7">Veri hazırsa 48 saat içinde entegrasyon ve model kurulabilir, dashboard tasarımına başlanabilir. Tam teslim süresi kaynak, veri kalitesi, kullanıcı ve geliştirme kapsamına göre belirlenir.</p></article>
              <article className="rounded-3xl border border-slate-200 bg-slate-50 p-7"><h3 className="font-display text-xl font-bold text-navy-900">Veri keşfi için hangi bilgiler gerekir?</h3><p className="mt-3 leading-7">Kullanılan sistemlerin listesi, örnek veri veya alan bilgisi, erişim yöntemi, raporu kullanacak kişiler ve öncelikli karar sorusu başlangıç için yeterlidir.</p></article>
              <article className="rounded-3xl border border-slate-200 bg-slate-50 p-7"><h3 className="font-display text-xl font-bold text-navy-900">Excel dosyasıyla hızlı başlangıç yapılabilir mi?</h3><p className="mt-3 leading-7">Evet. Alanları tutarlı ve örnek kayıtları doğrulanabilir bir dosya ilk model için kullanılabilir. Düzenli kullanımda yenileme ve dosya yönetimi yöntemi ayrıca belirlenir.</p></article>
              <article className="rounded-3xl border border-slate-200 bg-slate-50 p-7"><h3 className="font-display text-xl font-bold text-navy-900">BT ekibi olmayan işletmeler başlayabilir mi?</h3><p className="mt-3 leading-7">Evet. Teknik bağlantı, veri modeli ve dashboard kurulumu danışmanlık kapsamında yürütülebilir. İşletme tarafında göstergeleri ve örnek sonuçları doğrulayacak bir sorumlu bulunmalıdır.</p></article>
            </div>
          </div>
        </section>

        <section className="bg-teal-600 py-16 text-white">
          <div className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-8 px-4 sm:px-6 lg:flex-row lg:items-center lg:px-8"><div><h2 className="font-display text-3xl font-bold">Veriniz hızlı başlangıca uygun mu?</h2><p className="mt-3 max-w-2xl text-lg leading-8 text-teal-50">Kaynaklarınızı ve ilk karar sorunuzu paylaşın. Uygunluk ücretsiz veri keşfinde değerlendirilir.</p></div><a href="/iletisim" className="inline-flex shrink-0 items-center gap-2 rounded-full bg-navy-900 px-7 py-4 font-bold text-white shadow-xl transition hover:-translate-y-0.5 hover:bg-navy-800">Veri keşfi talep edin <ArrowRight size={18} /></a></div>
        </section>
      </main>

      <footer className="bg-navy-900 py-10 text-slate-400"><div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 text-sm md:flex-row md:items-center md:justify-between"><a href="/" className="inline-flex w-fit rounded-xl bg-white px-3 py-2"><img src="/Logo.png" alt="Bi Analytic" className="h-11 w-auto" /></a><div className="flex flex-wrap gap-5"><a href="/hakkimizda" className="hover:text-white">Hakkımızda</a><a href="/iletisim" className="hover:text-white">İletişim</a><a href="/gizlilik-politikasi" className="hover:text-white">Gizlilik</a><a href="/kullanim-kosullari" className="hover:text-white">Kullanım Koşulları</a></div><a href="mailto:mustafa.oz@bianalytic.net" className="flex items-center gap-2 font-semibold text-white hover:text-teal-400"><Mail size={16} /> mustafa.oz@bianalytic.net</a></div></footer>
    </div>
  );
}
