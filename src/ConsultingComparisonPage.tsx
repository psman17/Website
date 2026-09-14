import React from 'react';
import { ArrowRight, CheckCircle2, Mail } from 'lucide-react';

const comparisonRows = [
  ['Satın alınan', 'Yazılım lisansı veya abonelik', 'Analiz, tasarım, uygulama ve uzmanlık'],
  ['Kurulum sorumluluğu', 'Genellikle şirketin kendi ekibinde', 'Bianalytic ekibiyle birlikte yürütülür'],
  ['Veri hazırlığı', 'Temiz ve modellenmiş veri bekleyebilir', 'Kaynaklar incelenir; entegrasyon ve model kurulur'],
  ['Özelleştirme', 'Platformun özellikleri ve ekibin yetkinliğiyle sınırlıdır', 'Dashboard yanında entegrasyon ve özel uygulama geliştirilebilir'],
  ['Maliyet modeli', 'Sağlayıcının lisans veya abonelik koşullarına bağlıdır', 'Ücretsiz veri keşfinden sonra kapsama göre teklif hazırlanır'],
  ['Süreç sahipliği', 'İç ekip planlar, geliştirir ve bakımını yapar', 'Kapsam, teslim adımları ve sorumluluklar birlikte belirlenir'],
];

const decisionPoints = [
  'Veriler farklı sistemlerde tutuluyor ve ortak bir modele ihtiyaç duyuluyor.',
  'Şirkette BI deneyimi olan bir ekip bulunmuyor veya ekip sınırlı kapasiteyle çalışıyor.',
  'Raporlama yanında entegrasyon, otomasyon veya özel uygulama gerekiyor.',
  'Hangi platformun mevcut lisanslara ve kullanıcı yapısına uygun olduğu bilinmiyor.',
];

export default function ConsultingComparisonPage() {
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
          <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-teal-100/60 blur-3xl" />
          <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <p className="text-sm font-bold uppercase tracking-[.2em] text-teal-600">Karar rehberi</p>
            <h1 className="mt-4 max-w-4xl font-display text-4xl font-bold leading-tight text-navy-900 sm:text-6xl">İş Zekâsı Danışmanlığı mı, BI Platformu mu?</h1>
            <p className="mt-7 max-w-3xl text-xl leading-8 text-slate-600">Hazır bir BI platformu, rapor ve dashboard üretmek için kullanılan yazılımdır. Bianalytic ise uygun araçlarla veri keşfi, entegrasyon, veri modeli, dashboard ve özel geliştirme sağlayan bir danışmanlık firmasıdır.</p>
            <p className="mt-4 max-w-3xl leading-7 text-slate-600">Bu iki seçenek birbirinin yerine geçmek zorunda değildir. Doğru danışmanlık, seçilen platformun işletmenin verisine ve karar süreçlerine uygun kurulmasını sağlar.</p>
          </div>
        </section>

        <section className="py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-3xl font-bold text-navy-900">Kısa karşılaştırma</h2>
            <p className="mt-4 max-w-3xl leading-7">Karar yalnızca yazılım özelliklerine göre verilmemelidir. Veri hazırlığı, ekip kapasitesi ve geliştirme sorumluluğu toplam maliyeti doğrudan etkiler.</p>
            <div className="mt-8 overflow-x-auto rounded-3xl border border-slate-200 bg-white shadow-sm">
              <table className="w-full min-w-[760px] text-left text-sm">
                <thead className="bg-navy-900 text-white"><tr><th className="p-5">Karar alanı</th><th className="p-5">Hazır BI platformu</th><th className="p-5">Bianalytic danışmanlığı</th></tr></thead>
                <tbody>{comparisonRows.map((row) => <tr key={row[0]} className="border-t border-slate-200"><th className="p-5 font-bold text-navy-900">{row[0]}</th><td className="p-5 leading-6">{row[1]}</td><td className="p-5 leading-6">{row[2]}</td></tr>)}</tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="bg-white py-16">
          <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
            <article className="rounded-3xl border border-slate-200 p-7 sm:p-9">
              <h2 className="font-display text-3xl font-bold text-navy-900">Hazır BI platformu ne zaman yeterli olur?</h2>
              <p className="mt-5 leading-7">Şirketinizde deneyimli bir BI veya BT ekibi bulunabilir. Düzenli bir veri ambarınız ve tanımlı raporlama ihtiyaçlarınız da olabilir. Bu durumda platformu kendi ekibinizle yönetmek daha uygun olabilir.</p>
              <p className="mt-4 leading-7">Yalnızca lisans ve self-servis raporlama arayan olgun ekipler için danışmanlık ek kapsam yaratabilir. Bianalytic’in daha zayıf kaldığı durum budur: sorun uygulama değilse, dış uygulama hizmetine ihtiyaç olmayabilir.</p>
            </article>
            <article className="rounded-3xl bg-navy-900 p-7 text-slate-200 sm:p-9">
              <h2 className="font-display text-3xl font-bold text-white">Danışmanlık ne zaman uygundur?</h2>
              <div className="mt-6 space-y-4">{decisionPoints.map((point) => <p key={point} className="flex gap-3 leading-7"><CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-teal-400" /><span>{point}</span></p>)}</div>
            </article>
          </div>
        </section>

        <section className="py-16">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-3xl font-bold text-navy-900">Bianalytic’in çalışma biçimi nedir?</h2>
            <p className="mt-5 leading-7">Süreç ücretsiz veri keşfiyle başlar. Veri kaynakları, mevcut lisanslar, kullanıcılar ve karar ihtiyaçları incelenir. Bianalytic her türlü yapılandırılmış veri kaynağıyla çalışmayı hedefler. Uygun bağlantı yöntemi keşif sırasında belirlenir.</p>
            <p className="mt-4 leading-7">Veriler doğru biçimde yapılandırılmışsa ilk 48 saatte entegrasyon ve veri modeli kurulabilir. Dashboard tasarımına da bu aşamada başlanabilir. Bu ifade bütün projenin 48 saatte tamamlanacağı anlamına gelmez. Teslim süresi veri kalitesine, kaynak sayısına ve istenen geliştirmelere bağlıdır.</p>
            <p className="mt-4 leading-7">Kullanılacak teknoloji baştan dayatılmaz. Mevcut lisanslar ve teknik koşullar değerlendirilir. Gerekirse dashboard dışında web uygulaması, yönetim ekranı veya otomasyon geliştirilir. Böylece araç seçimi, işletmenin gerçek sürecinden sonra gelir.</p>
          </div>
        </section>

        <section className="bg-slate-100 py-16">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-3xl font-bold text-navy-900">Maliyet nasıl karşılaştırılmalı?</h2>
            <p className="mt-5 leading-7">Hazır platformlarda lisans veya abonelik bedeli bulunabilir. Buna kurulum, veri hazırlığı, geliştirme ve bakım için harcanan iç ekip zamanı da eklenmelidir. Danışmanlıkta ise kapsam veri keşfinden sonra belirlenir. Bianalytic sayısal fiyatları bu sayfada yayımlamaz; ihtiyaç ve teslim kapsamına göre yazılı teklif hazırlar.</p>
            <p className="mt-4 leading-7">Karşılaştırma yaparken yalnızca lisans bedeline bakmak eksik sonuç verir. Toplam sahip olma maliyetine veri entegrasyonu, modelleme, kullanıcı eğitimi, bakım ve değişiklik talepleri de dahil edilmelidir.</p>
          </div>
        </section>

        <section className="bg-white py-16">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-3xl font-bold text-navy-900">Karar vermeden önce hangi sorular yanıtlanmalı?</h2>
            <p className="mt-5 leading-7">Önce raporların kimler tarafından kullanılacağını belirleyin. Ardından verinin hangi sistemlerde tutulduğunu ve ne sıklıkta yenileneceğini listeleyin. Şirket içinde veri modelini kuracak ve sürdürecek kişinin kim olduğu da açık olmalıdır.</p>
            <p className="mt-4 leading-7">Mevcut lisansları, kullanıcı sayısını ve erişim kurallarını değerlendirin. Dashboard dışında bildirim, onay akışı veya mobil kullanım gerekip gerekmediğini not edin. Son olarak ilk kurulumdan sonraki değişikliklerin kim tarafından yönetileceğini kararlaştırın.</p>
            <p className="mt-4 leading-7">Bu soruların yanıtı hazırsa platform ve danışmanlık kapsamı aynı çerçevede karşılaştırılabilir. Yanıtlar net değilse ücretsiz veri keşfi, yanlış lisans veya gereksiz geliştirme riskini azaltır.</p>
          </div>
        </section>

        <section className="bg-teal-600 py-16 text-white">
          <div className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-8 px-4 sm:px-6 lg:flex-row lg:items-center lg:px-8">
            <div><h2 className="font-display text-3xl font-bold">İlk adım: ücretsiz veri keşfi</h2><p className="mt-3 max-w-2xl text-lg leading-8 text-teal-50">Veri kaynaklarınızı ve raporlama ihtiyacınızı paylaşın. Platformla kendi ekibinizin devam etmesinin mi, danışmanlık desteğinin mi daha doğru olduğunu birlikte değerlendirelim.</p></div>
            <a href="/iletisim" className="inline-flex shrink-0 items-center gap-2 rounded-full bg-navy-900 px-7 py-4 font-bold text-white shadow-xl transition hover:-translate-y-0.5 hover:bg-navy-800">İhtiyacınızı anlatın <ArrowRight size={18} /></a>
          </div>
        </section>
      </main>

      <footer className="bg-navy-900 py-10 text-slate-400"><div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 text-sm md:flex-row md:items-center md:justify-between"><a href="/" className="inline-flex w-fit rounded-xl bg-white px-3 py-2"><img src="/Logo.png" alt="Bi Analytic" className="h-11 w-auto" /></a><div className="flex flex-wrap gap-5"><a href="/iletisim" className="hover:text-white">İletişim</a><a href="/gizlilik-politikasi" className="hover:text-white">Gizlilik</a><a href="/kullanim-kosullari" className="hover:text-white">Kullanım Koşulları</a></div><a href="mailto:info@bianalytic.net" className="flex items-center gap-2 font-semibold text-white hover:text-teal-400"><Mail size={16} /> info@bianalytic.net</a></div></footer>
    </div>
  );
}
