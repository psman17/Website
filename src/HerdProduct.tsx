import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import {
  Activity,
  ArrowRight,
  BarChart3,
  Beef,
  BellRing,
  CalendarDays,
  Check,
  CircleDollarSign,
  ExternalLink,
  HeartPulse,
  Menu,
  Milk,
  Scale,
  ShieldCheck,
  Users,
  Wheat,
  X,
} from 'lucide-react';

const APP_URL = 'https://suru.bianalytic.tr';
const CONTACT_EMAIL = 'saasadmin@bianalytic.net';

const features = [
  { icon: Beef, title: 'Sürü ve soy kütüğü', text: 'Hayvan kartlarını, yaşam döngüsünü, pedigriyi ve sürü hareketlerini tek merkezden yönetin.' },
  { icon: CalendarDays, title: 'Biyolojik takvim', text: 'Kızgınlık, tohumlama, gebelik, doğum, kuruya alma ve buzağılama tarihlerini biyolojik takvimle izleyin.' },
  { icon: Milk, title: 'Süt ve sağım takibi', text: 'Doğum sonrası açılan sağım akışlarıyla günlük ve toplu süt kayıtlarını güvenli biçimde yönetin.' },
  { icon: Wheat, title: 'Rasyon ve yem verimliliği', text: 'Yem maliyetini, kuru madde tüketimini ve FCE değerlerini aynı analitik modelde değerlendirin.' },
  { icon: HeartPulse, title: 'Tedavi ve ilaç stoku', text: 'Tedavi protokollerini, uygulama geçmişini ve ilaç stok hareketlerini hayvan bazında takip edin.' },
  { icon: BarChart3, title: 'Sürü analitiği', text: 'Üretim, verimlilik, sağlık ve finans göstergelerini karar vermeyi kolaylaştıran panolarda görün.' },
];

const flow = [
  ['01', 'Çiftliğinizi oluşturun', 'İşletme ve lokasyon bilgilerinizi girerek 30 günlük deneme sürecini başlatın.'],
  ['02', 'Sürünüzü tanımlayın', 'Hayvan kartlarını tek tek oluşturun veya mevcut kayıtlarınızı içeri aktarın.'],
  ['03', 'Ekibinizi davet edin', 'Yönetici ve personel rollerini çiftlik veya lokasyon kapsamıyla atayın.'],
  ['04', 'Takip ve analiz edin', 'Günlük operasyonları kaydedin; biyolojik uyarıları ve performans göstergelerini izleyin.'],
];

function ProductMark({ compact = false }: { compact?: boolean }) {
  return <span className="flex shrink-0 items-center gap-3">
    <img src="/bi-suru-logo.svg" alt="Bi Sürü" className={`${compact ? 'h-12 w-12 rounded-xl' : 'h-14 w-14 rounded-2xl'} object-cover shadow-sm`}/>
    <span><strong className="block font-display text-xl leading-none text-navy-900">Bi Sürü</strong><small className="mt-1 block text-[10px] font-bold uppercase tracking-[.2em] text-emerald-700">Herd Intelligence</small></span>
  </span>;
}

function ProductNav() {
  const [open, setOpen] = useState(false);
  const links = [['Özellikler', '#ozellikler'], ['Nasıl çalışır?', '#nasil-calisir'], ['Paketler', '#paketler'], ['SSS', '#sss']];
  return <header className="fixed inset-x-0 top-0 z-50 border-b border-emerald-950/10 bg-[#fbfdf8]/90 backdrop-blur-xl">
    <div className="mx-auto flex h-20 max-w-[1600px] items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
      <a href="/suru" aria-label="Bi Sürü ana sayfa"><ProductMark/></a>
      <nav className="hidden shrink-0 items-center gap-6 min-[1536px]:flex">{links.map(([label, href]) => <a key={href} href={href} className="whitespace-nowrap text-sm font-semibold text-slate-600 transition hover:text-emerald-700">{label}</a>)}</nav>
      <div className="hidden shrink-0 items-center gap-2 sm:flex"><a href={APP_URL} target="_blank" rel="noreferrer" className="whitespace-nowrap px-3 py-2.5 text-sm font-bold text-navy-900">Giriş Yap</a><a href={APP_URL} target="_blank" rel="noreferrer" className="hidden whitespace-nowrap items-center gap-2 rounded-full bg-emerald-700 px-5 py-3 text-sm font-bold text-white min-[1024px]:inline-flex">30 Gün Ücretsiz Dene <ArrowRight size={16}/></a></div>
      <button type="button" onClick={() => setOpen(!open)} className="rounded-xl border border-slate-200 p-2.5 text-navy-900 sm:hidden" aria-label="Menüyü aç">{open ? <X/> : <Menu/>}</button>
    </div>
    <AnimatePresence>{open && <motion.div initial={{height:0,opacity:0}} animate={{height:'auto',opacity:1}} exit={{height:0,opacity:0}} className="overflow-hidden border-t border-slate-100 bg-white sm:hidden"><div className="space-y-1 p-4">{links.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)} className="block rounded-xl px-4 py-3 font-semibold text-navy-900">{label}</a>)}<a href={APP_URL} className="block rounded-xl px-4 py-3 font-semibold text-navy-900">Giriş Yap</a><a href={APP_URL} className="mt-2 block rounded-xl bg-emerald-700 px-4 py-3 text-center font-bold text-white">30 Gün Ücretsiz Dene</a></div></motion.div>}</AnimatePresence>
  </header>;
}

function ProductHero() {
  const alerts = [['Kızgınlık takibi','8 hayvan','Bugün'],['Gebelik kontrolü','4 hayvan','3 gün'],['Kuruya alma','2 hayvan','7 gün'],['Tahmini doğum','3 hayvan','14 gün']];
  return <section className="relative overflow-hidden bg-[#fbfdf8] pb-20 pt-36 lg:pb-28 lg:pt-44"><div className="absolute -right-40 top-20 h-[34rem] w-[34rem] rounded-full bg-emerald-400/10 blur-3xl"/><div className="absolute -left-40 bottom-0 h-80 w-80 rounded-full bg-amber-300/10 blur-3xl"/><div className="mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-[1.05fr_.95fr] lg:px-8">
    <motion.div initial={{opacity:0,y:24}} animate={{opacity:1,y:0}}><div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-700/20 bg-emerald-700/10 px-4 py-2 text-sm font-bold text-emerald-700"><span className="h-2 w-2 rounded-full bg-emerald-600"/> Sürü yönetimi, biyolojik takvimle birlikte</div><h1 className="max-w-3xl font-display text-5xl font-bold leading-[1.05] tracking-tight text-navy-900 sm:text-6xl lg:text-7xl">Çiftliğinizin verisini <span className="text-emerald-700">üretkenliğe dönüştürün.</span></h1><p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600">Hayvan yaşam döngüsü, süt, üreme, sağlık, yem ve finans verilerini tek akışta buluşturan bulut tabanlı sürü yönetim platformu.</p><div className="mt-9 flex flex-col gap-3 sm:flex-row"><a href={APP_URL} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-700 px-7 py-4 font-bold text-white shadow-xl shadow-emerald-900/15">30 Gün Ücretsiz Başla <ArrowRight size={18}/></a><a href="#ozellikler" className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-7 py-4 font-bold text-navy-900">Özellikleri İncele</a></div><div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium text-slate-500">{['Kredi kartı gerekmez','30 gün deneme','Mobil uyumlu'].map(x=><span key={x} className="flex items-center gap-2"><Check size={16} className="text-emerald-700"/>{x}</span>)}</div></motion.div>
    <motion.div initial={{opacity:0,scale:.96}} animate={{opacity:1,scale:1}} transition={{delay:.15}} className="relative"><div className="absolute inset-6 rounded-[2.5rem] bg-emerald-900/15 blur-3xl"/><div className="relative rounded-[2rem] border border-white/80 bg-emerald-950 p-4 shadow-2xl"><div className="rounded-[1.4rem] bg-[#f6f8f2] p-5 sm:p-7"><div className="mb-6 flex items-center justify-between"><div><p className="text-xs font-bold uppercase tracking-widest text-slate-400">Biyolojik takvim</p><h2 className="mt-1 font-display text-xl font-bold text-navy-900">Bugünün Çiftlik Özeti</h2></div><span className="rounded-full bg-emerald-100 px-3 py-1.5 text-xs font-bold text-emerald-700">● Güncel</span></div><div className="space-y-3">{alerts.map(([title,count,time],i)=><div key={title} className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"><span className={`grid h-10 w-10 place-items-center rounded-xl ${i===3?'bg-amber-100 text-amber-700':'bg-emerald-100 text-emerald-700'}`}><CalendarDays size={19}/></span><div className="min-w-0 flex-1"><strong className="block text-sm">{title}</strong><span className="text-xs text-slate-400">{time}</span></div><strong className="text-sm text-emerald-800">{count}</strong></div>)}</div><div className="mt-4 grid grid-cols-3 gap-3 rounded-2xl bg-white p-4 text-center shadow-sm"><div><strong className="block text-lg">126</strong><small className="text-slate-400">Toplam sürü</small></div><div className="border-x border-slate-100"><strong className="block text-lg">31,4 L</strong><small className="text-slate-400">Ort. süt</small></div><div><strong className="block text-lg text-emerald-700">1,42</strong><small className="text-slate-400">FCE</small></div></div></div></div></motion.div>
  </div></section>;
}

export default function HerdProduct() {
  useEffect(() => {
    document.title = 'Bi Sürü | Bulut Tabanlı Sürü ve Çiftlik Yönetimi';
    const el = document.querySelector('meta[name="description"]') || document.head.appendChild(document.createElement('meta'));
    el.setAttribute('name', 'description');
    el.setAttribute('content', 'Sürü, biyolojik takvim, süt, üreme, sağlık, yem, finans ve analitiği tek platformda birleştiren bulut tabanlı çiftlik yönetim sistemi.');
    const favicon = document.querySelector<HTMLLinkElement>('link[rel="icon"]') || document.head.appendChild(document.createElement('link'));
    favicon.rel = 'icon';
    favicon.type = 'image/svg+xml';
    favicon.href = '/bi-suru-logo.svg';
  }, []);

  return <div className="min-h-screen bg-[#fbfdf8] font-sans text-navy-900"><ProductNav/><main><ProductHero/>
    <section className="border-y border-emerald-950/10 bg-white py-7"><div className="mx-auto flex max-w-7xl flex-wrap justify-center gap-x-12 gap-y-4 px-4 text-sm font-bold text-slate-500">{['Sürü','Biyolojik Takvim','Süt','Sağlık','Yem & Rasyon','Finans','Analitik'].map(x=><span key={x}>{x}</span>)}</div></section>
    <section id="ozellikler" className="bg-white py-24"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div className="max-w-3xl"><p className="text-sm font-bold uppercase tracking-[.2em] text-emerald-700">Tek platform</p><h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl">Günlük kayıt için sade, doğru karar için güçlü.</h2><p className="mt-5 text-lg leading-8 text-slate-600">Çiftlik ekibine rolüne uygun araçları, işletme yöneticisine sürünün bütününü sunar.</p></div><div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{features.map(({icon:Icon,title,text})=><article key={title} className="rounded-3xl border border-slate-200 bg-[#fbfdf8] p-7 transition hover:-translate-y-1 hover:shadow-xl"><span className="grid h-12 w-12 place-items-center rounded-2xl bg-emerald-700/10 text-emerald-700"><Icon/></span><h3 className="mt-6 font-display text-xl font-bold">{title}</h3><p className="mt-3 leading-7 text-slate-600">{text}</p></article>)}</div></div></section>
    <section className="bg-emerald-950 py-20 text-white"><div className="mx-auto grid max-w-7xl gap-8 px-4 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">{[[Activity,'Biyolojik','Takvime dayalı uyarılar'],[Scale,'Verimli','Kuru madde ve FCE analizi'],[CircleDollarSign,'Kontrollü','Maskelenebilir finans verileri'],[BellRing,'Zamanında','Operasyon bildirimleri']].map(([Icon,title,text])=><div key={title as string} className="rounded-3xl border border-white/10 bg-white/5 p-6"><Icon className="text-emerald-300"/><strong className="mt-5 block text-xl">{title as string}</strong><span className="mt-2 block text-sm text-emerald-100/70">{text as string}</span></div>)}</div></section>
    <section id="nasil-calisir" className="bg-[#f4f7ef] py-24"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><p className="text-sm font-bold uppercase tracking-[.2em] text-emerald-700">Başlangıç akışı</p><h2 className="mt-3 max-w-2xl font-display text-4xl font-bold sm:text-5xl">Çiftliğinizi adım adım dijitalleştirin.</h2><div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">{flow.map(([no,title,text])=><div key={no} className="rounded-3xl border border-emerald-950/10 bg-white p-6"><span className="font-display text-3xl font-bold text-emerald-700">{no}</span><h3 className="mt-8 text-lg font-bold">{title}</h3><p className="mt-3 text-sm leading-6 text-slate-600">{text}</p></div>)}</div></div></section>
    <section id="paketler" className="py-24"><div className="mx-auto max-w-6xl px-4 sm:px-6"><div className="text-center"><p className="text-sm font-bold uppercase tracking-[.2em] text-emerald-700">Esnek paketler</p><h2 className="mt-3 font-display text-4xl font-bold">Önce deneyin, ihtiyacınızla büyüyün.</h2><p className="mt-4 text-slate-600">30 günlük ücretsiz denemede Starter özelliklerinin tamamını kullanın.</p></div><div className="mt-12 grid gap-6 md:grid-cols-2">{[['Starter','Sürü yönetiminin tüm dijital özellikleri.',['Sürü ve biyolojik takvim','Süt, sağlık ve üreme takibi','Yem, rasyon ve FCE analizi','Finans ve gelişmiş raporlar','Kullanıcı ve lokasyon yönetimi']],['Pro','Starter özelliklerine ek uzman desteği.',['Starter paketindeki her şey','Danışmanlık hizmetleri','İşletmeye özel değerlendirme','Operasyon geliştirme desteği','Uzman görüşmeleri']]].map(([name,desc,items],i)=><div key={name as string} className={`relative rounded-3xl bg-white p-8 ${i?'border-2 border-emerald-700 shadow-xl':'border border-slate-200'}`}>{i===1&&<span className="absolute right-6 top-6 rounded-full bg-emerald-700 px-3 py-1 text-xs font-bold text-white">Danışmanlık dahil</span>}<h3 className="font-display text-2xl font-bold">{name as string}</h3><p className="mt-2 text-slate-600">{desc as string}</p><ul className="mt-7 space-y-3 text-sm">{(items as string[]).map(x=><li key={x} className="flex gap-3"><Check className="text-emerald-700" size={18}/>{x}</li>)}</ul></div>)}</div><div className="mt-9 text-center"><a href={`mailto:${CONTACT_EMAIL}?subject=Bi Sürü paket bilgisi`} className="inline-flex items-center gap-2 rounded-full bg-navy-900 px-7 py-4 font-bold text-white">Paket bilgisi alın <ArrowRight size={18}/></a></div></div></section>
    <section id="sss" className="bg-white py-24"><div className="mx-auto max-w-4xl px-4 sm:px-6"><h2 className="text-center font-display text-4xl font-bold">Sık sorulanlar</h2><div className="mt-12 divide-y divide-slate-200 border-y border-slate-200">{[['Program yüklemem gerekir mi?','Hayır. Bi Sürü modern bir web uygulamasıdır; bilgisayar, tablet ve telefondaki güncel tarayıcınızdan çalışır.'],['Verilerim başka çiftliklerle karışır mı?','Hayır. İşletmeler, lokasyonlar, kullanıcı yetkileri ve operasyon kayıtları tenant bazında izole edilir.'],['Deneme paketinde özellik kısıtı var mı?','30 günlük ücretsiz deneme Starter paketindeki tüm uygulama özelliklerini içerir.'],['Pro paketinin farkı nedir?','Pro, Starter özelliklerinin tamamına ek olarak danışmanlık ve işletmeye özel uzman desteği sunar.']].map(([q,a])=><div key={q} className="py-7"><h3 className="font-bold">{q}</h3><p className="mt-2 leading-7 text-slate-600">{a}</p></div>)}</div></div></section>
    <section className="bg-emerald-700 py-20 text-white"><div className="mx-auto max-w-4xl px-4 text-center"><ShieldCheck className="mx-auto h-12 w-12"/><h2 className="mt-5 font-display text-4xl font-bold sm:text-5xl">Sürünüzü bugün dijitalleştirin.</h2><p className="mx-auto mt-5 max-w-2xl text-lg text-emerald-50">Kredi kartı girmeden hesabınızı oluşturun ve 30 günlük deneme sürecini başlatın.</p><a href={APP_URL} target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 font-bold text-emerald-950 shadow-xl">Ücretsiz Denemeyi Başlat <ExternalLink size={18}/></a></div></section>
  </main><footer className="bg-emerald-950 py-10 text-emerald-100/60"><div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 text-sm md:flex-row md:items-center md:justify-between"><div><ProductMark compact/><span className="mt-3 block">Bi Analytic tarafından geliştirilmiştir.</span></div><div className="flex flex-wrap gap-5"><a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a><a href={APP_URL}>Uygulamaya Giriş</a><a href="/">Bi Analytic</a><a href="/restoran">Bi Restoran</a></div><p>© {new Date().getFullYear()} Bi Analytic</p></div></footer></div>;
}
