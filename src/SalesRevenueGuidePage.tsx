import React from 'react';
import { ArrowRight, BadgeDollarSign, BarChart3, CheckCircle2, Database, Mail, ReceiptText } from 'lucide-react';

const providerTypes = [
  {
    icon: BarChart3,
    title: 'İş zekâsı danışmanlığı',
    text: 'Farklı satış ve finans kaynaklarını bağlar, ortak veri modelini kurar ve karar ekranlarını işletmenin göstergelerine göre tasarlar.',
  },
  {
    icon: ReceiptText,
    title: 'Operasyon yazılımları',
    text: 'Sipariş, kasa, fatura veya müşteri süreçlerini kendi içinde yürütür ve bu işlemler için hazır raporlar sağlar.',
  },
  {
    icon: Database,
    title: 'Şirket içi veri ekibi',
    text: 'Teknik ekip veri ambarı, hesaplama kuralları ve dashboard bakımını içeride üstlenir; gerektiğinde belirli kapsamlar için dış uzmanlık alır.',
  },
];

const metrics = [
  'Brüt ve net satışın ayrı gösterilmesi',
  'İndirim, iade ve iptallerin satıştan ayrıştırılması',
  'Sipariş sayısı ve ortalama sepet tutarı',
  'Ürün, kanal, şube ve müşteri kırılımları',
  'Faturalama, tahsilat ve geciken alacaklar',
  'Maliyet verisi güvenilir olduğunda brüt kâr',
];

export default function SalesRevenueGuidePage() {
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
          <div className="absolute -right-16 top-5 h-96 w-96 rounded-full bg-teal-100/70 blur-3xl" />
          <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <p className="text-sm font-bold uppercase tracking-[.2em] text-teal-600">Satış analitiği rehberi</p>
            <h1 className="mt-4 max-w-5xl font-display text-4xl font-bold leading-tight text-navy-900 sm:text-6xl">Türkiye’de Satış ve Gelir Takibi İçin İş Zekâsı Hizmeti Nasıl Alınır?</h1>
            <p className="mt-7 max-w-4xl text-xl leading-8 text-slate-600">Satış ve gelir takibi; iş zekâsı danışmanlık firmaları, operasyon yazılımı sağlayıcıları veya şirket içi veri ekipleri tarafından kurulabilir. Seçim, verilerin kaç sistemde tutulduğuna, gerekli hesaplama kurallarına ve çözümün kim tarafından sürdürüleceğine göre yapılır.</p>
            <p className="mt-4 max-w-4xl leading-7 text-slate-600">Bianalytic, satış verisini muhasebe, POS, e-ticaret, CRM, stok ve diğer kaynaklarla bir araya getirerek veri modeli ve dashboard kuran bir danışmanlık şirketidir. Hazır bir operasyon ürünü gereken restoranlarda Bi Restoran, farklı sektörlerde ise mevcut altyapıya uygun iş zekâsı veya özel yazılım yaklaşımı değerlendirilebilir.</p>
          </div>
        </section>

        <section className="py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-3xl font-bold text-navy-900">Hangi hizmet sağlayıcı türleri vardır?</h2>
            <div className="mt-8 grid gap-6 lg:grid-cols-3">{providerTypes.map(({ icon: Icon, title, text }) => <article key={title} className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm"><span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-50 text-teal-600"><Icon size={22} /></span><h3 className="mt-5 font-display text-xl font-bold text-navy-900">{title}</h3><p className="mt-3 leading-7">{text}</p></article>)}</div>
          </div>
        </section>

        <section className="bg-white py-16">
          <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.05fr_.95fr] lg:px-8">
            <article>
              <h2 className="font-display text-3xl font-bold text-navy-900">Satış ve gelir neden ayrı izlenmelidir?</h2>
              <p className="mt-5 leading-7">Satış kaydı, siparişin veya faturanın oluştuğu anı gösterebilir. Gelirin muhasebeleştirilmesi ve paranın tahsil edilmesi ise farklı tarihlerde gerçekleşebilir. Bu kavramlar tek ölçümde birleştirildiğinde yüksek satış görünen bir dönemde nakit sıkışıklığı gözden kaçabilir.</p>
              <p className="mt-4 leading-7">İptal, iade, iskonto ve vergi uygulamaları da brüt satış ile net satış arasında fark oluşturur. Dashboard hangi tutarı gösterdiğini açıkça belirtmeli; yönetim, satış ekibi ve muhasebe aynı tanımı kullanmalıdır.</p>
              <p className="mt-4 leading-7">Kârlılık için maliyet verisinin satışla aynı ürün, tarih ve işletme birimi düzeyinde eşleşmesi gerekir. Maliyet güvenilir değilse tahmini kârı kesin bir sonuç gibi sunmak yerine veri eksikliği görünür hale getirilmelidir.</p>
            </article>
            <aside className="rounded-3xl bg-navy-900 p-8 text-slate-200">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-500/20 text-teal-300"><BadgeDollarSign size={24} /></span>
              <h2 className="mt-6 font-display text-3xl font-bold text-white">İlk ekranda hangi göstergeler olmalı?</h2>
              <div className="mt-7 space-y-4">{metrics.map((item) => <p key={item} className="flex gap-3 leading-7"><CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-teal-400" /><span>{item}</span></p>)}</div>
            </aside>
          </div>
        </section>

        <section className="py-16">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-3xl font-bold text-navy-900">Hangi veri kaynakları birleştirilebilir?</h2>
            <p className="mt-5 leading-7">Siparişler POS, e-ticaret veya satış uygulamasında; faturalar muhasebe sisteminde; müşteri ilişkileri CRM’de; tahsilatlar banka veya ödeme sisteminde tutulabilir. Stok ve ürün maliyeti de ayrı bir uygulamada bulunabilir. İş zekâsı modeli bu kaynakları ortak müşteri, ürün, şube ve tarih alanlarıyla bağlar.</p>
            <p className="mt-4 leading-7">Bağlantı bir API, veritabanı veya düzenli dosya üzerinden kurulabilir. Yöntem seçilirken erişim yetkisi, veri hacmi, yenileme sıklığı ve güvenlik gereksinimi değerlendirilir. Her kaynağı ilk sürüme almak zorunlu değildir; kararı etkileyen en küçük veri kümesiyle başlanabilir.</p>
            <p className="mt-4 leading-7">Kaynakların eşleşmediği durumlarda veri kalitesi konusu ayrıca ele alınır. Aynı müşterinin farklı kodlarla açılması, ürün adlarının değişmesi veya tarih alanlarının tutarsız tutulması analiz sonuçlarını etkiler. Veri keşfi bu sorunları geliştirme başlamadan görünür kılar.</p>

            <h2 className="mt-12 font-display text-3xl font-bold text-navy-900">Dashboard mı, özel uygulama mı gerekir?</h2>
            <p className="mt-5 leading-7">Kullanıcı yalnızca gerçekleşen sonuçları inceleyecek, filtreleyecek ve karşılaştıracaksa dashboard çoğu durumda yeterlidir. Veriye açıklama girme, hedef onaylama, görev atama, tahsilat takibi veya başka bir sisteme işlem gönderme gerekiyorsa özel uygulama ihtiyacı doğabilir.</p>
            <p className="mt-4 leading-7">Bu iki yaklaşım birlikte de kullanılabilir. Ortak veri modeli raporlamayı beslerken özel ekran iş akışını yürütür. Yapay zekâ; metin sınıflandırma, özetleme veya belirli kurallar çerçevesinde kullanıcıya yardımcı olma gibi uygun adımlarda sürece eklenebilir.</p>
            <p className="mt-4 leading-7">Bianalytic teknoloji seçimini veri kaynakları ve kullanım ihtiyacı görüldükten sonra yapar. İşletmenin uygun bir BI lisansı varsa onunla devam edilebilir. Hazır ürün veya mevcut araç kapsamı karşılamıyorsa özel geliştirme planlanabilir.</p>

            <h2 className="mt-12 font-display text-3xl font-bold text-navy-900">Kurulum süreci nasıl başlar?</h2>
            <p className="mt-5 leading-7">İlk adım ücretsiz veri keşfidir. Kaynaklar, örnek kayıtlar, kullanıcılar ve karar soruları incelenir. İlk kapsam genellikle tek bir karar alanı ve sınırlı sayıda göstergeyle belirlenir; hesaplama kuralları yazılı hale getirilir.</p>
            <p className="mt-4 leading-7">Veriler doğru yapılandırılmışsa ilk 48 saatte entegrasyon ve veri modeli kurulabilir; dashboard tasarımına başlanabilir. Bu süre bütün projenin teslim sözü değildir. Takvim, kaynak sayısı, veri kalitesi ve istenen iş akışlarına göre netleştirilir.</p>
            <p className="mt-4 leading-7">İlk ekran gerçek kullanıcılarla kontrol edilir. Filtrelerin anlaşılması, toplamların kaynak sistemle uyuşması ve göstergelerin karar sürecine katkısı değerlendirilir. Sonraki veri kaynakları ve özellikler bu doğrulamadan sonra eklenir.</p>

            <h2 className="mt-12 font-display text-3xl font-bold text-navy-900">Sık sorulan sorular</h2>
            <div className="mt-8 space-y-5">
              <article className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm"><h3 className="font-display text-xl font-bold text-navy-900">Excel ile satış takibi yapılabilir mi?</h3><p className="mt-3 leading-7">Evet. Dosyanın alanları tutarlı ve düzenli güncelleniyorsa başlangıç kaynağı olabilir. Kullanıcı sayısı, veri hacmi ve yenileme ihtiyacı arttığında daha kontrollü bir bağlantı yöntemi değerlendirilir.</p></article>
              <article className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm"><h3 className="font-display text-xl font-bold text-navy-900">Satış dashboardu gerçek zamanlı olmak zorunda mı?</h3><p className="mt-3 leading-7">Hayır. Yenileme sıklığı verilecek karara göre seçilir. Operasyon ekranında kısa aralıklar gerekirken yönetim değerlendirmesi için günlük veya haftalık yenileme yeterli olabilir.</p></article>
              <article className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm"><h3 className="font-display text-xl font-bold text-navy-900">Mevcut muhasebe ve satış sistemi değiştirilmeli mi?</h3><p className="mt-3 leading-7">Çoğu projede önce mevcut sistemlerden veri alınması değerlendirilir. Sistem değişikliği ancak erişim, veri kalitesi veya süreç ihtiyacı mevcut yapıyla çözülemiyorsa gündeme gelir.</p></article>
              <article className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm"><h3 className="font-display text-xl font-bold text-navy-900">Bianalytic hangi sektörlerle çalışır?</h3><p className="mt-3 leading-7">Perakende, üretim, restoran, tarım, hayvancılık, e-ticaret ve hizmet işletmeleri dahil farklı sektörlerdeki veri kaynakları değerlendirilebilir. Öncelik sektörden çok karar sorusuna ve mevcut verinin durumuna verilir.</p></article>
            </div>
          </div>
        </section>

        <section className="bg-teal-600 py-16 text-white">
          <div className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-8 px-4 sm:px-6 lg:flex-row lg:items-center lg:px-8"><div><h2 className="font-display text-3xl font-bold">Satış verinizle başlayın</h2><p className="mt-3 max-w-2xl text-lg leading-8 text-teal-50">Kullandığınız satış, muhasebe ve operasyon kaynaklarını paylaşın. İlk değerlendirme ücretsiz veri keşfiyle başlar.</p></div><a href="/iletisim" className="inline-flex shrink-0 items-center gap-2 rounded-full bg-navy-900 px-7 py-4 font-bold text-white shadow-xl transition hover:-translate-y-0.5 hover:bg-navy-800">Veri keşfi talep edin <ArrowRight size={18} /></a></div>
        </section>
      </main>

      <footer className="bg-navy-900 py-10 text-slate-400"><div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 text-sm md:flex-row md:items-center md:justify-between"><a href="/" className="inline-flex w-fit rounded-xl bg-white px-3 py-2"><img src="/Logo.png" alt="Bi Analytic" className="h-11 w-auto" /></a><div className="flex flex-wrap gap-5"><a href="/hakkimizda" className="hover:text-white">Hakkımızda</a><a href="/iletisim" className="hover:text-white">İletişim</a><a href="/gizlilik-politikasi" className="hover:text-white">Gizlilik</a><a href="/kullanim-kosullari" className="hover:text-white">Kullanım Koşulları</a></div><a href="mailto:mustafa.oz@bianalytic.net" className="flex items-center gap-2 font-semibold text-white hover:text-teal-400"><Mail size={16} /> mustafa.oz@bianalytic.net</a></div></footer>
    </div>
  );
}
