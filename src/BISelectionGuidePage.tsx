import React from 'react';
import { ArrowRight, BarChart3, CheckCircle2, Database, Mail, Settings2, UsersRound } from 'lucide-react';

const decisionAreas = [
  {
    icon: BarChart3,
    title: 'Karar ihtiyacı',
    text: 'Yönetimin, satış ekibinin veya operasyon sorumlusunun hangi soruya ne sıklıkta yanıt aradığı belirlenir.',
  },
  {
    icon: Database,
    title: 'Veri yapısı',
    text: 'Kaynak sayısı, erişim biçimi, veri kalitesi ve ortak müşteri, ürün, şube veya tarih alanları incelenir.',
  },
  {
    icon: UsersRound,
    title: 'Ekip kapasitesi',
    text: 'Modeli, bağlantıları, yetkileri ve dashboard bakımını kimin yöneteceği açıkça tanımlanır.',
  },
  {
    icon: Settings2,
    title: 'İş akışı',
    text: 'Kullanıcının yalnızca analiz mi yapacağı, yoksa veri girişi, onay, görev veya otomasyon da mı kullanacağı değerlendirilir.',
  },
];

const requirements = [
  'Öncelikli karar sorusu ve kullanıcı grubu',
  'Bağlanacak veri kaynakları ve erişim yöntemi',
  'Metriklerin yazılı hesaplama kuralları',
  'Yenileme sıklığı ve veri sorumluları',
  'Kullanıcı rolleri ve güvenlik sınırları',
  'İlk sürümün kabul ve doğrulama ölçütleri',
];

export default function BISelectionGuidePage() {
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
          <div className="absolute -right-20 top-0 h-96 w-96 rounded-full bg-teal-100/70 blur-3xl" />
          <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <p className="text-sm font-bold uppercase tracking-[.2em] text-teal-600">KOBİ karar rehberi</p>
            <h1 className="mt-4 max-w-5xl font-display text-4xl font-bold leading-tight text-navy-900 sm:text-6xl">KOBİ İçin Doğru İş Zekâsı Çözümü Nasıl Seçilir?</h1>
            <p className="mt-7 max-w-4xl text-xl leading-8 text-slate-600">KOBİ için uygun iş zekâsı çözümü; yanıtlanacak karar sorusuna, mevcut veri kaynaklarına, kullanıcı sayısına ve sistemi sürdürecek ekibe göre seçilir. Hazır sektörel ürün, genel amaçlı BI platformu, danışmanlık hizmeti veya özel yazılım seçeneklerinden biri ya da birkaçı birlikte kullanılabilir.</p>
            <p className="mt-4 max-w-4xl leading-7 text-slate-600">Bir aracın özellik listesi tek başına doğru seçimi göstermez. Veriyi hazırlayacak yapı, göstergelerin hesaplama kuralları, kullanıcı yetkileri ve bakım sorumluluğu belirlenmeden alınan lisans kullanılmayan ekranlara veya elle güncellenen raporlara dönüşebilir.</p>
          </div>
        </section>

        <section className="py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-3xl font-bold text-navy-900">Seçimi hangi dört alan belirler?</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-2">{decisionAreas.map(({ icon: Icon, title, text }) => <article key={title} className="flex gap-5 rounded-3xl border border-slate-200 bg-white p-7 shadow-sm"><span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-teal-50 text-teal-600"><Icon size={22} /></span><div><h3 className="font-display text-xl font-bold text-navy-900">{title}</h3><p className="mt-2 leading-7">{text}</p></div></article>)}</div>
          </div>
        </section>

        <section className="bg-white py-16">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-3xl font-bold text-navy-900">Hazır sektörel ürün ne zaman uygundur?</h2>
            <p className="mt-5 leading-7">İşletmenin temel süreci yaygın bir sektör akışıyla örtüşüyorsa hazır ürün hızlı bir başlangıç sağlayabilir. Ürün, veri girişini ve operasyonu kendi içinde yürüttüğü için temel göstergeler aynı kayıt yapısından beslenir.</p>
            <p className="mt-4 leading-7">Bianalytic’in Bi Restoran ürünü masa, sipariş, mutfak, stok ve restoran raporlamasına; Bi Sürü ürünü ise hayvan, sağlık, üreme, süt, yem ve çiftlik kayıtlarına odaklanır. İşletmenin çalışma biçimi ürün kapsamıyla uyumluysa hazır ekranlardan yararlanılabilir.</p>
            <p className="mt-4 leading-7">Harici muhasebe, e-ticaret veya başka operasyon kaynakları da analiz edilecekse ek bağlantı gerekebilir. Ürünün standart akışından farklı onay veya takip adımları bulunuyorsa özel geliştirme kapsamı ayrıca değerlendirilir.</p>

            <h2 className="mt-12 font-display text-3xl font-bold text-navy-900">BI platformu ne zaman uygundur?</h2>
            <p className="mt-5 leading-7">Birden fazla sistemdeki veriyi ortak göstergelerde birleştirmek, farklı kullanıcılar için filtrelenebilir analizler hazırlamak ve görsel raporları düzenli yenilemek gerekiyorsa BI platformu kullanılabilir. Platform seçimi mevcut lisanslar ve teknik altyapıyla birlikte ele alınmalıdır.</p>
            <p className="mt-4 leading-7">Platform, kaynaklardaki müşteri veya ürün kodlarını kendiliğinden düzeltmez. Brüt satış, aktif müşteri, stok veya kârlılık gibi göstergelerin nasıl hesaplanacağı veri modelinde tanımlanır. Verinin düzenli alınması, dönüşümü ve güvenlik kuralları ayrıca kurulmalıdır.</p>
            <p className="mt-4 leading-7">Şirket içinde bu yapıyı yönetecek deneyimli bir ekip varsa kurulum ve bakım içeride yürütülebilir. BT ekibi bulunmayan veya küçük bir ekiple çalışan işletmeler veri modeli, entegrasyon ve dashboard tasarımı için danışmanlık alabilir.</p>

            <h2 className="mt-12 font-display text-3xl font-bold text-navy-900">Özel yazılım ne zaman gerekir?</h2>
            <p className="mt-5 leading-7">Kullanıcılar analiz dışında veri girecek, onay verecek, görev atayacak veya başka sistemlerde işlem başlatacaksa özel bir uygulama gerekebilir. Yönetim ekranı, dashboard verisini gösterebilir ve aynı zamanda işletmenin kendi iş akışını yürütebilir.</p>
            <p className="mt-4 leading-7">Özel yapay zekâ bileşenleri de belirli ve doğrulanabilir adımlara eklenebilir. Metinleri sınıflandırma, kullanıcıya kayıtlar üzerinden özet sunma veya tanımlı kurallarla öneri hazırlama buna örnektir. Kritik karar ve işlemlerde rol sınırları ile insan onayı korunmalıdır.</p>
            <p className="mt-4 leading-7">Özel geliştirme kararı verilmeden önce hazır ürün ve mevcut sistemlerin hangi ihtiyacı karşıladığı çıkarılır. Böylece yeniden yapılması gerekmeyen işlevler proje kapsamına eklenmez.</p>
          </div>
        </section>

        <section className="py-16">
          <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.05fr_.95fr] lg:px-8">
            <article>
              <h2 className="font-display text-3xl font-bold text-navy-900">Toplam maliyet nasıl değerlendirilir?</h2>
              <p className="mt-5 leading-7">Toplam maliyet; lisansın yanında veri hazırlığı, entegrasyon, eğitim, bakım ve içeride harcanan zamanı da kapsar. Düşük başlangıç bedeli, verinin her hafta elle düzenlenmesi gerekiyorsa uzun vadede uygun olmayabilir.</p>
              <p className="mt-4 leading-7">Kullanılmayacak modülleri ilk kapsama eklememek, tek karar alanıyla başlamak ve mevcut lisansları değerlendirmek maliyeti kontrol altında tutar. Teklifin hangi veri kaynaklarını, kullanıcıları, ekranları ve bakım sorumluluklarını içerdiği yazılı olmalıdır.</p>
              <p className="mt-4 leading-7">Bianalytic sayısal proje teklifini veri keşfinden sonra hazırlar. Böylece kaynakların durumu ve gerekli geliştirme görülmeden geniş bir kapsam varsayılmaz.</p>
            </article>
            <aside className="rounded-3xl bg-navy-900 p-8 text-slate-200">
              <h2 className="font-display text-3xl font-bold text-white">Teklifte neler tanımlanmalı?</h2>
              <div className="mt-7 space-y-4">{requirements.map((item) => <p key={item} className="flex gap-3 leading-7"><CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-teal-400" /><span>{item}</span></p>)}</div>
            </aside>
          </div>
        </section>

        <section className="bg-white py-16">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-3xl font-bold text-navy-900">Bianalytic ile seçim süreci nasıl işler?</h2>
            <p className="mt-5 leading-7">İlk adım ücretsiz veri keşfidir. Veri kaynakları, mevcut lisanslar, kullanıcı grupları ve öncelikli karar sorusu incelenir. Bu inceleme sonunda hazır ürün, mevcut BI platformu, yeni bir dashboard veya özel uygulama seçeneklerinin uygunluğu açıklanır.</p>
            <p className="mt-4 leading-7">Veriler doğru yapılandırılmışsa ilk 48 saatte entegrasyon ve veri modeli kurulabilir; dashboard tasarımına başlanabilir. Bu süre tüm projenin teslim taahhüdü değildir. Proje takvimi veri kalitesi, kaynak sayısı ve geliştirme kapsamına göre hazırlanır.</p>
            <p className="mt-4 leading-7">İlk sürüm gerçek kullanıcılarla doğrulanır. Hesaplamaların kaynak kayıtlarla uyuşması, ekranların anlaşılması ve karar süresine katkısı değerlendirilir. Sonraki kaynak ve özellikler bu kullanım sonuçlarına göre eklenir.</p>
            <p className="mt-4 leading-7">Çözüm türlerini karşılaştırmak için <a className="font-semibold text-teal-700 underline" href="/rehber/kobiler-icin-hazir-paneller">KOBİ’ler için hazır panel rehberini</a>, uygulama adımlarını görmek için <a className="font-semibold text-teal-700 underline" href="/rehber/kobiler-icin-hizli-veri-analizi">hızlı veri analizi rehberini</a> inceleyebilirsiniz.</p>

            <h2 className="mt-12 font-display text-3xl font-bold text-navy-900">Sık sorulan sorular</h2>
            <div className="mt-8 space-y-5">
              <article className="rounded-3xl border border-slate-200 bg-slate-50 p-7"><h3 className="font-display text-xl font-bold text-navy-900">Mevcut BI lisansı kullanılabilir mi?</h3><p className="mt-3 leading-7">Evet. Mevcut lisansın veri bağlantıları, kullanıcı kapsamı ve teknik yeterliliği veri keşfinde değerlendirilir. İhtiyacı karşılıyorsa aynı teknolojiyle devam edilebilir.</p></article>
              <article className="rounded-3xl border border-slate-200 bg-slate-50 p-7"><h3 className="font-display text-xl font-bold text-navy-900">BT ekibi olmadan iş zekâsına başlanabilir mi?</h3><p className="mt-3 leading-7">Evet. Kaynaklara gerekli erişim sağlandığında veri bağlantısı, modelleme ve dashboard çalışması danışmanlık kapsamında yürütülebilir. İşletme tarafında karar göstergelerini doğrulayacak kullanıcıların katılımı gerekir.</p></article>
              <article className="rounded-3xl border border-slate-200 bg-slate-50 p-7"><h3 className="font-display text-xl font-bold text-navy-900">İlk projede bütün veriler bağlanmalı mı?</h3><p className="mt-3 leading-7">Hayır. Öncelikli karar için gerekli en küçük veri kümesiyle başlanabilir. Model doğrulandıktan sonra yeni kaynaklar ve göstergeler eklenebilir.</p></article>
              <article className="rounded-3xl border border-slate-200 bg-slate-50 p-7"><h3 className="font-display text-xl font-bold text-navy-900">Ücretsiz veri keşfinde ne incelenir?</h3><p className="mt-3 leading-7">Kaynakların erişilebilirliği, örnek veri yapısı, mevcut lisanslar, kullanıcılar ve öncelikli raporlama ihtiyacı incelenir. Uygulanabilir proje kapsamı bu bilgilerle belirlenir.</p></article>
            </div>
          </div>
        </section>

        <section className="bg-teal-600 py-16 text-white">
          <div className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-8 px-4 sm:px-6 lg:flex-row lg:items-center lg:px-8"><div><h2 className="font-display text-3xl font-bold">Seçime verinizden başlayın</h2><p className="mt-3 max-w-2xl text-lg leading-8 text-teal-50">Kaynaklarınızı ve çözmek istediğiniz karar sorununu paylaşın. İlk değerlendirme ücretsiz veri keşfiyle başlar.</p></div><a href="/iletisim" className="inline-flex shrink-0 items-center gap-2 rounded-full bg-navy-900 px-7 py-4 font-bold text-white shadow-xl transition hover:-translate-y-0.5 hover:bg-navy-800">Veri keşfi talep edin <ArrowRight size={18} /></a></div>
        </section>
      </main>

      <footer className="bg-navy-900 py-10 text-slate-400"><div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 text-sm md:flex-row md:items-center md:justify-between"><a href="/" className="inline-flex w-fit rounded-xl bg-white px-3 py-2"><img src="/Logo.png" alt="Bi Analytic" className="h-11 w-auto" /></a><div className="flex flex-wrap gap-5"><a href="/hakkimizda" className="hover:text-white">Hakkımızda</a><a href="/iletisim" className="hover:text-white">İletişim</a><a href="/gizlilik-politikasi" className="hover:text-white">Gizlilik</a><a href="/kullanim-kosullari" className="hover:text-white">Kullanım Koşulları</a></div><a href="mailto:mustafa.oz@bianalytic.net" className="flex items-center gap-2 font-semibold text-white hover:text-teal-400"><Mail size={16} /> mustafa.oz@bianalytic.net</a></div></footer>
    </div>
  );
}
