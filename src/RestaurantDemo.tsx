import React, { useMemo, useState } from 'react';
import { BarChart3, ChefHat, Check, ChevronRight, Clock3, Package, Plus, RefreshCw, Store, Utensils, X } from 'lucide-react';

type DemoStatus = 'draft' | 'sent' | 'preparing' | 'ready' | 'served';
type DemoItem = { id: string; name: string; price: number; quantity: number; status: DemoStatus };

const products = [
  { id:'levrek', name:'Izgara Deniz Levreği', category:'Balıklar', price:640 },
  { id:'kalamar', name:'Kalamar Tava ve Tarator', category:'Sıcak Başlangıçlar', price:490 },
  { id:'haydari', name:'Taşköprü Sarımsaklı Haydari', category:'Soğuk Mezeler', price:210 },
  { id:'soda', name:'Maden Suyu', category:'İçecekler', price:45 },
];
const initialItems: DemoItem[] = [
  { id:'haydari', name:'Taşköprü Sarımsaklı Haydari', price:210, quantity:2, status:'served' },
  { id:'levrek', name:'Izgara Deniz Levreği', price:640, quantity:1, status:'ready' },
];
const statusLabel: Record<DemoStatus,string> = {draft:'Yeni',sent:'Mutfağa gönderildi',preparing:'Hazırlanıyor',ready:'Hazır',served:'Servis edildi'};

function Pill({status}:{status:DemoStatus}) {
  const colors = {draft:'bg-stone-100 text-stone-600',sent:'bg-amber-100 text-amber-700',preparing:'bg-sky-100 text-sky-700',ready:'bg-emerald-100 text-emerald-700',served:'bg-stone-900 text-white'};
  return <span className={`rounded-full px-2.5 py-1 text-[10px] font-black ${colors[status]}`}>{statusLabel[status]}</span>;
}

export default function RestaurantDemo() {
  const [tab,setTab] = useState<'salon'|'kitchen'|'dashboard'|'inventory'>('salon');
  const [items,setItems] = useState<DemoItem[]>(initialItems);
  const [menuOpen,setMenuOpen] = useState(false);
  const [notice,setNotice] = useState('Masa 3 seçili. Demo akışını deneyebilirsiniz.');
  const total = useMemo(()=>items.reduce((sum,item)=>sum+item.price*item.quantity,0),[items]);
  const reset = () => { setItems(initialItems); setTab('salon'); setMenuOpen(false); setNotice('Demo başlangıç durumuna döndürüldü.'); };
  const add = (product: typeof products[number]) => {
    setItems(current => current.some(item=>item.id===product.id && item.status==='draft')
      ? current.map(item=>item.id===product.id && item.status==='draft'?{...item,quantity:item.quantity+1}:item)
      : [...current,{...product,quantity:1,status:product.category==='İçecekler'?'ready':'draft'}]);
    setNotice(product.category==='İçecekler'?'İçecek doğrudan servis aşamasına alındı.':'Ürün adisyona eklendi.');
  };
  const sendKitchen = () => { setItems(v=>v.map(i=>i.status==='draft'?{...i,status:'sent'}:i)); setNotice('Yeni ürünler mutfağa gönderildi; önceki ürünler tekrar gönderilmedi.'); };
  const advanceKitchen = () => { setItems(v=>v.map(i=>i.status==='sent'?{...i,status:'preparing'}:i.status==='preparing'?{...i,status:'ready'}:i)); setNotice('Mutfak durumları bir sonraki aşamaya taşındı.'); };
  const serveReady = () => { setItems(v=>v.map(i=>i.status==='ready'?{...i,status:'served'}:i)); setNotice('Hazır ürünlerin tamamı servis edildi.'); };
  const closeTable = () => { if(items.length && items.every(i=>i.status==='served')) { setItems([]); setNotice('Demo hesap kapatıldı ve Masa 3 tekrar boş oldu.'); } else setNotice('Hesap kapanmadı: hazırlanmakta veya servise hazır ürün bulunuyor.'); };
  const kitchenItems = items.filter(i=>['sent','preparing','ready'].includes(i.status));
  const tabs = [
    ['salon','Salon',Utensils],['kitchen','Mutfak',ChefHat],['dashboard','Raporlar',BarChart3],['inventory','Depo',Package],
  ] as const;

  return <div className="min-h-screen bg-[#f5f4ef] text-stone-900">
    <header className="sticky top-0 z-30 border-b border-stone-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <div className="flex items-center gap-3"><img src="/bi-restoran-logo.jpg" className="h-11 w-11 rounded-xl object-cover"/><div><strong className="block">Bi Restoran Demo</strong><span className="text-[10px] font-bold uppercase tracking-widest text-teal-700">Güvenli interaktif sandbox</span></div></div>
        <button onClick={reset} className="flex items-center gap-2 rounded-xl border border-stone-200 px-3 py-2 text-xs font-bold"><RefreshCw size={14}/> Sıfırla</button>
      </div>
    </header>
    <div className="mx-auto grid max-w-7xl lg:grid-cols-[210px_1fr]">
      <aside className="border-b border-stone-200 bg-[#1c1917] p-3 text-white lg:min-h-[calc(100vh-68px)] lg:border-b-0">
        <nav className="grid grid-cols-4 gap-2 lg:grid-cols-1">{tabs.map(([id,label,Icon])=><button key={id} onClick={()=>setTab(id)} className={`flex min-h-12 items-center justify-center gap-2 rounded-xl px-3 text-xs font-black lg:justify-start ${tab===id?'bg-emerald-600':'text-stone-400 hover:bg-white/5'}`}><Icon size={17}/><span>{label}</span></button>)}</nav>
        <div className="mt-4 hidden rounded-xl border border-white/10 bg-white/5 p-3 text-xs leading-5 text-stone-400 lg:block">Demo işlemleri yalnızca bu sekmenin belleğinde tutulur. Gerçek sipariş, ödeme veya baskı oluşmaz.</div>
      </aside>
      <main className="min-w-0 p-3 sm:p-5">
        <div className="mb-4 flex items-start gap-3 rounded-xl border border-teal-200 bg-teal-50 px-4 py-3 text-sm text-teal-900"><Check className="mt-0.5 shrink-0" size={17}/><span>{notice}</span></div>
        {tab==='salon' && <section>
          <div className="mb-5 flex items-center justify-between"><div><p className="text-xs font-black uppercase tracking-widest text-emerald-700">Canlı salon</p><h1 className="text-2xl font-black">Masa 3 Adisyonu</h1></div><span className="rounded-full bg-rose-100 px-3 py-1 text-xs font-black text-rose-700">Dolu · {total.toLocaleString('tr-TR')} TL</span></div>
          <div className="grid gap-4 xl:grid-cols-[1fr_300px]"><div className="space-y-3">{items.length?items.map((item,index)=><article key={`${item.id}-${index}`} className="flex items-center justify-between gap-3 rounded-2xl border border-stone-200 bg-white p-4 shadow-sm"><div><strong>{item.quantity}× {item.name}</strong><p className="mt-1 text-xs text-stone-500">{item.price.toLocaleString('tr-TR')} TL / adet</p></div><div className="text-right"><Pill status={item.status}/><p className="mt-2 font-black">{(item.price*item.quantity).toLocaleString('tr-TR')} TL</p></div></article>):<div className="rounded-2xl border border-dashed border-stone-300 bg-white p-12 text-center"><Store className="mx-auto text-emerald-600"/><h2 className="mt-3 font-black">Masa 3 boş</h2><p className="mt-1 text-sm text-stone-500">Yeni demo siparişi için ürün ekleyin.</p></div>}</div>
          <aside className="rounded-2xl border border-stone-200 bg-white p-4 shadow-sm"><button onClick={()=>setMenuOpen(!menuOpen)} className="flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 px-4 py-3 font-black text-white"><Plus size={18}/> Ürün Ekle</button>{menuOpen&&<div className="mt-3 space-y-2">{products.map(p=><button key={p.id} onClick={()=>add(p)} className="flex w-full items-center justify-between rounded-xl border border-stone-200 p-3 text-left text-xs hover:border-emerald-500"><span><strong className="block text-sm">{p.name}</strong>{p.category}</span><span className="font-black">{p.price} TL</span></button>)}</div>}<div className="mt-4 space-y-2"><button disabled={!items.some(i=>i.status==='draft')} onClick={sendKitchen} className="w-full rounded-xl bg-amber-500 px-4 py-3 text-sm font-black disabled:opacity-40">Mutfağa Gönder</button><button disabled={!items.some(i=>i.status==='ready')} onClick={serveReady} className="w-full rounded-xl bg-sky-600 px-4 py-3 text-sm font-black text-white disabled:opacity-40">Tümünü Servis Et</button><button onClick={closeTable} className="w-full rounded-xl bg-stone-900 px-4 py-3 text-sm font-black text-white">Hesabı Kapat</button></div></aside></div>
        </section>}
        {tab==='kitchen' && <section><p className="text-xs font-black uppercase tracking-widest text-amber-600">Mutfak ekranı</p><div className="mt-1 flex items-center justify-between"><h1 className="text-2xl font-black">Aktif Siparişler</h1><button disabled={!kitchenItems.some(i=>i.status!=='ready')} onClick={advanceKitchen} className="rounded-xl bg-amber-500 px-4 py-2 text-xs font-black disabled:opacity-40">Durumları İlerlet</button></div><div className="mt-5 grid gap-4 md:grid-cols-2">{kitchenItems.length?kitchenItems.map((item,index)=><article key={`${item.id}-${index}`} className="rounded-2xl border border-stone-200 bg-white p-5"><div className="flex justify-between"><span className="text-xs font-black text-stone-400">MASA 3</span><Pill status={item.status}/></div><h2 className="mt-5 text-lg font-black">{item.quantity}× {item.name}</h2><div className="mt-5 flex items-center gap-2 text-xs text-stone-500"><Clock3 size={15}/> Demo sipariş · şimdi</div></article>):<div className="col-span-full rounded-2xl border border-dashed border-stone-300 bg-white p-12 text-center text-stone-500">Mutfağa gönderilmiş aktif ürün yok.</div>}</div></section>}
        {tab==='dashboard' && <section><p className="text-xs font-black uppercase tracking-widest text-emerald-700">Yönetici dashboard</p><h1 className="mt-1 text-2xl font-black">Bütçe Yönetimi ve Raporlama</h1><div className="mt-5 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">{[['Toplam Ciro','56.980 TL','text-emerald-700'],['Fire & İsraf','1.064 TL','text-rose-600'],['Stok Maliyeti','19.780 TL','text-amber-600'],['Net Kâr','33.101 TL','text-emerald-700']].map(([label,value,color])=><div key={label} className="rounded-2xl border border-stone-200 bg-white p-5"><p className="text-xs font-black uppercase text-stone-400">{label}</p><p className={`mt-3 text-2xl font-black ${color}`}>{value}</p></div>)}</div><div className="mt-4 rounded-2xl border border-stone-200 bg-white p-5"><h2 className="font-black">Günlük gelir ve net kâr</h2><div className="mt-8 flex h-52 items-end gap-3">{[74,88,24,23,17,15,28,42,36,40,31].map((h,i)=><div key={i} className="flex flex-1 items-end gap-1"><div className="w-1/2 rounded-t bg-emerald-500" style={{height:`${h}%`}}/><div className="w-1/2 rounded-t bg-blue-500" style={{height:`${Math.max(8,h*.58)}%`}}/></div>)}</div></div></section>}
        {tab==='inventory' && <section><p className="text-xs font-black uppercase tracking-widest text-emerald-700">Depo & stok</p><h1 className="mt-1 text-2xl font-black">Hammadde Kartları</h1><div className="mt-5 overflow-hidden rounded-2xl border border-stone-200 bg-white">{[['Deniz Levreği','18,50 kg','285 TL'],['Kalamar','12,80 kg','310 TL'],['Jumbo Karides','9,40 kg','365 TL'],['Ayvalık Zeytinyağı','24,70 lt','190 TL'],['Maden Suyu','84 adet','8 TL']].map(([name,stock,cost])=><div key={name} className="grid grid-cols-[1fr_auto_auto] items-center gap-4 border-b border-stone-100 p-4 last:border-0"><strong>{name}</strong><span className="text-sm font-black text-emerald-700">{stock}</span><span className="text-xs text-stone-500">{cost}</span></div>)}</div></section>}
      </main>
    </div>
  </div>;
}
