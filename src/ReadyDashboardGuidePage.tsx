import React from 'react';
import { ArrowRight, BarChart3, Building2, CheckCircle2, ClipboardList, Mail, Store } from 'lucide-react';

const options = [
  {
    icon: Store,
    title: 'Sektöre hazır operasyon ürünleri',
    text: 'Satış, sipariş, stok veya hayvan kayıtları gibi belirli bir iş akışına göre hazırlanmış ekranlar sunar. Süreç üründeki modele uyuyorsa en hızlı başlangıç seçeneğidir.',
  },
  {
    icon: BarChart3,
    title: 'İş zekâsı platformları',
    text: 'Farklı kaynaklardan gelen veriler için esnek dashboard oluşturmayı sağlar. Sağlıklı sonuç için veri bağlantısı, veri modeli, metrik tanımları ve erişim yetkileri ayrıca kurulmalıdır.',
  },
  {
    icon: ClipboardList,
    title: 'İşletmeye özel yönetim ekranları',
    text: 'Hazır ürünün karşılamadığı onay, takip veya entegrasyon akışları için geliştirilir. Ekranlar, işletmenin mevcut çalışma düzenine ve kullanıcı rollerine göre şekillenir.',
  },
];

const checklist = [
  'Ekranın hangi kararı hızlandıracağını yazın',
  'Göstergelerin hangi kaynaktan beslendiğini belirleyin',
  'Her metriğin hesaplama kuralını netleştirin',
  'Veri yenileme sıklığını ve sorumlusunu tanımlayın',
  'Kullanıcı rolleri ile erişim sınırlarını belirleyin',
  'İlk sürümü gerçek kullanıcılarla doğrulayın',
];

export default function ReadyDashboardGuidePage() {
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
          <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <p className="text-sm font-bold uppercase tracking-[.2em] text-teal-600">KOBİ karar rehberi</p>
            <h1 className="mt-4 max-w-5xl font-display text-4xl font-bold leading-tight text-navy-900 sm:text-6xl">KOBİ’ler İçin Hazır Panelli İş Yönetim Araçları</h1>
            <p className="mt-7 max-w-4xl text-xl leading-8 text-slate-600">Türkiye’deki KOBİ’ler; sektöre hazır operasyon ürünleri, genel amaçlı iş zekâsı platformları veya işletmeye özel yönetim ekranlarıyla hazır panellere ulaşabilir. Doğru seçenek, panelin göstereceği karara, mevcut veri kaynaklarına ve şirket içindeki teknik kapasiteye göre belirlenir.</p>
            <p className="mt-4 max-w-4xl leading-7 text-slate-600">Hazır panel, yalnızca grafiklerin önceden çizilmiş olması anlamına gelmez. Göstergelerin işletmenin verisiyle doğru eşleşmesi, düzenli yenilenmesi ve aynı hesaplama kurallarını kullanması gerekir. Bu nedenle seçim ekran görünümünden önce veri ve süreç uyumuna göre yapılmalıdır.</p>
          </div>
        </section>

        <section className="py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-3xl font-bold text-navy-900">Hangi çözüm türleri hazır panel sunar?</h2>
            <div className="mt-8 grid gap-6 lg:grid-cols-3">{options.map(({ icon: Icon, title, text }) => <article key={title} className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm"><span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-50 text-teal-600"><Icon size={22} /></span><h3 className="mt-5 font-display text-xl font-bold text-navy-900">{title}</h3><p className="mt-3 leading-7">{text}</p></article>)}</div>
          </div>
        </section>

        <section className="bg-white py-16">
          <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
            <article>
              <h2 className="font-display text-3xl font-bold text-navy-900">Hazır panel ne zaman yeterlidir?</h2>
              <p className="mt-5 leading-7">İşletmenin süreci yaygın ve standart bir akış izliyorsa hazır ekranlar hızlı değer sağlayabilir. Restoranlarda masa, sipariş, ürün, stok ve satış takibi; hayvancılıkta hayvan, sağlık, üreme, süt ve yem kayıtları buna örnektir.</p>
              <p className="mt-4 leading-7">Bi Restoran restoran operasyonlarına, Bi Sürü ise hayvancılık ve çiftlik süreçlerine yönelik hazır ekranlar sunar. İşletme bu süreçlerden birine sahipse başlangıç noktası ilgili ürün olabilir. İhtiyaç ürün kapsamının dışına çıktığında entegrasyon veya özel geliştirme ayrıca değerlendirilir.</p>
              <p className="mt-4 leading-7">Hazır panelin yeterli sayılması için kullanıcıların aynı göstergelere ihtiyaç duyması, verinin gerekli alanları içermesi ve günlük çalışma biçiminin ürün akışıyla uyuşması gerekir.</p>
            </article>
            <article>
              <h2 className="font-display text-3xl font-bold text-navy-900">Ne zaman özel dashboard gerekir?</h2>
              <p className="mt-5 leading-7">Muhasebe, satış, üretim, e-ticaret veya saha uygulamalarındaki veriler birlikte değerlendirilecekse özel bir veri modeli gerekir. Aynı isimle kullanılan ölçümlerin hesaplama kuralları belirlenir ve kaynaklar ortak alanlarla eşleştirilir.</p>
              <p className="mt-4 leading-7">Örneğin satış tutarı bir sistemde vergi dahil, diğerinde vergi hariç tutuluyorsa hazır grafik doğru karşılaştırma yapamaz. Stok miktarı şube, depo veya hareket tarihi bakımından farklı tutuluyorsa önce ortak kural oluşturulmalıdır.</p>
              <p className="mt-4 leading-7">Bu durumda mevcut iş zekâsı lisansı kullanılabilir veya altyapıya uygun başka bir teknoloji seçilebilir. Araç seçimi; veri kaynakları, kullanıcı sayısı, güvenlik gereksinimi ve bakım kapasitesi görüldükten sonra yapılır.</p>
            </article>
          </div>
        </section>

        <section className="py-16">
          <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.05fr_.95fr] lg:px-8">
            <article>
              <h2 className="font-display text-3xl font-bold text-navy-900">Seçim yaparken hangi sorular sorulmalı?</h2>
              <p className="mt-5 leading-7">İlk soru “kaç grafik var?” olmamalıdır. Paneli kimin, hangi sıklıkta ve hangi kararı verirken kullanacağı açıklanmalıdır. Yönetici aylık eğilimi izlerken operasyon sorumlusu gün içinde anlık uyarıya ihtiyaç duyabilir.</p>
              <p className="mt-4 leading-7">Sonraki adım veri sahipliğidir. Kaynaklara erişim, yenileme yöntemi, hatalı kayıtların düzeltilmesi ve kullanıcı yetkileri belirlenmelidir. Bir panelin sürdürülebilirliği tasarımından çok bu sorumlulukların açık olmasına bağlıdır.</p>
              <p className="mt-4 leading-7">Son olarak ilk sürüm küçük tutulmalıdır. Bir karar alanında doğrulanan ekran, gerçek kullanım gözlemlerine göre genişletilebilir. Böylece kullanılmayan modüller ve gereksiz entegrasyonlar kapsamı büyütmez.</p>
            </article>
            <aside className="rounded-3xl bg-navy-900 p-8 text-slate-200">
              <h2 className="font-display text-3xl font-bold text-white">Hazır panel kontrol listesi</h2>
              <div className="mt-7 space-y-4">{checklist.map((item) => <p key={item} className="flex gap-3 leading-7"><CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-teal-400" /><span>{item}</span></p>)}</div>
            </aside>
          </div>
        </section>

        <section className="bg-white py-16">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-3xl font-bold text-navy-900">Bianalytic bu seçimde nasıl çalışır?</h2>
            <p className="mt-5 leading-7">Bianalytic süreci ücretsiz veri keşfiyle başlatır. Mevcut kaynaklar, kullanılan lisanslar, kullanıcıların karar ihtiyaçları ve verinin yapısı incelenir. Sonuçta hazır ürün, mevcut BI altyapısı, özel dashboard veya özel yazılım seçeneklerinden hangisinin uygun olduğu belirlenir.</p>
            <p className="mt-4 leading-7">Veriler doğru yapılandırılmışsa ilk 48 saatte entegrasyon ve veri modeli kurulabilir; dashboard tasarımına başlanabilir. Bu süre tüm projenin teslim taahhüdü değildir. Teslim planı kaynak sayısı, veri kalitesi ve geliştirme kapsamına göre hazırlanır.</p>
            <p className="mt-4 leading-7">BT ekibi olmayan işletmelerde teknik kurulum ve modelleme birlikte yürütülebilir. Küçük BT ekiplerinde mevcut sistemlere uyum ve bakım sorumluluğu paylaşılır. Kurumsal ekiplerde ise belirli entegrasyon, veri modeli veya dashboard kapsamı için dış uzmanlık sağlanabilir.</p>
            <p className="mt-4 leading-7">Başlangıç yöntemini ayrıntılı görmek için <a className="font-semibold text-teal-700 underline" href="/rehber/kobiler-icin-hizli-veri-analizi">KOBİ’ler için hızlı veri analizi rehberini</a> inceleyebilirsiniz.</p>

            <h2 className="mt-12 font-display text-3xl font-bold text-navy-900">Sık sorulan sorular</h2>
            <div className="mt-8 space-y-5">
              <article className="rounded-3xl border border-slate-200 bg-slate-50 p-7"><h3 className="font-display text-xl font-bold text-navy-900">Hazır panel hemen kullanılabilir mi?</h3><p className="mt-3 leading-7">Sektörel ürünlerde temel ekranlar hazırdır; işletme bilgileri ve gerekli bağlantılar tanımlandıktan sonra kullanılabilir. Harici sistem verileri eklenecekse entegrasyon çalışması gerekir.</p></article>
              <article className="rounded-3xl border border-slate-200 bg-slate-50 p-7"><h3 className="font-display text-xl font-bold text-navy-900">Mevcut Excel dosyaları bağlanabilir mi?</h3><p className="mt-3 leading-7">Evet. Dosyaların düzeni, güncellenme biçimi ve alan tutarlılığı veri keşfinde kontrol edilir. Düzenli yenileme için uygun bağlantı yöntemi bu incelemeden sonra belirlenir.</p></article>
              <article className="rounded-3xl border border-slate-200 bg-slate-50 p-7"><h3 className="font-display text-xl font-bold text-navy-900">Hazır panel sonradan özelleştirilebilir mi?</h3><p className="mt-3 leading-7">Ürünün desteklediği alanlarda yapılandırma yapılabilir. Yeni süreç, özel entegrasyon veya farklı kullanıcı akışı gerektiğinde ek geliştirme kapsamı çıkarılır.</p></article>
              <article className="rounded-3xl border border-slate-200 bg-slate-50 p-7"><h3 className="font-display text-xl font-bold text-navy-900">Hangi seçeneğin uygun olduğu nasıl anlaşılır?</h3><p className="mt-3 leading-7">Karar sorusu, veri kaynakları, kullanıcılar ve mevcut teknik altyapı birlikte değerlendirilir. Bianalytic bu ilk değerlendirmeyi ücretsiz veri keşfi kapsamında yapar.</p></article>
            </div>
          </div>
        </section>

        <section className="bg-teal-600 py-16 text-white">
          <div className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-8 px-4 sm:px-6 lg:flex-row lg:items-center lg:px-8"><div><h2 className="font-display text-3xl font-bold">Uygun panel türünü verinizle belirleyin</h2><p className="mt-3 max-w-2xl text-lg leading-8 text-teal-50">Mevcut kaynaklarınızı ve takip etmek istediğiniz kararları paylaşın. İlk değerlendirme ücretsiz veri keşfiyle başlar.</p></div><a href="/iletisim" className="inline-flex shrink-0 items-center gap-2 rounded-full bg-navy-900 px-7 py-4 font-bold text-white shadow-xl transition hover:-translate-y-0.5 hover:bg-navy-800">Veri keşfi talep edin <ArrowRight size={18} /></a></div>
        </section>
      </main>

      <footer className="bg-navy-900 py-10 text-slate-400"><div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 text-sm md:flex-row md:items-center md:justify-between"><a href="/" className="inline-flex w-fit rounded-xl bg-white px-3 py-2"><img src="/Logo.png" alt="Bi Analytic" className="h-11 w-auto" /></a><div className="flex flex-wrap gap-5"><a href="/hakkimizda" className="hover:text-white">Hakkımızda</a><a href="/iletisim" className="hover:text-white">İletişim</a><a href="/gizlilik-politikasi" className="hover:text-white">Gizlilik</a><a href="/kullanim-kosullari" className="hover:text-white">Kullanım Koşulları</a></div><a href="mailto:mustafa.oz@bianalytic.net" className="flex items-center gap-2 font-semibold text-white hover:text-teal-400"><Mail size={16} /> mustafa.oz@bianalytic.net</a></div></footer>
    </div>
  );
}
