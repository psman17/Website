import React, { useState, useEffect } from 'react';
import RestaurantProduct from './RestaurantProduct';
import HerdProduct from './HerdProduct';
import SMEConsultingPage from './SMEConsultingPage';
import CustomAIPage from './CustomAIPage';
import PrivacyPolicyPage from './PrivacyPolicyPage';
import ContactPage from './ContactPage';
import TermsOfUsePage from './TermsOfUsePage';
import ConsultingComparisonPage from './ConsultingComparisonPage';
import FastAnalyticsGuidePage from './FastAnalyticsGuidePage';
import ReadyDashboardGuidePage from './ReadyDashboardGuidePage';
import SalesRevenueGuidePage from './SalesRevenueGuidePage';
import BISelectionGuidePage from './BISelectionGuidePage';
import AboutPage from './AboutPage';
import { motion, AnimatePresence } from 'motion/react';
import { 
  BarChart3, 
  Database, 
  LineChart, 
  PieChart, 
  ArrowRight, 
  CheckCircle2, 
  Layers, 
  Cpu, 
  Globe, 
  Mail, 
  Phone, 
  MapPin,
  Menu,
  X,
  TrendingUp,
  Activity,
  ShoppingCart,
  Wallet,
  Package,
  Zap,
  Clock,
  LayoutTemplate
} from 'lucide-react';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  BarChart,
  Bar,
  Legend
} from 'recharts';

// --- Mock Data for Interactive Dashboard ---
const revenueData = [
  { name: 'Oca', current: 4000, previous: 2400 },
  { name: 'Şub', current: 3000, previous: 1398 },
  { name: 'Mar', current: 2000, previous: 9800 },
  { name: 'Nis', current: 2780, previous: 3908 },
  { name: 'May', current: 1890, previous: 4800 },
  { name: 'Haz', current: 2390, previous: 3800 },
  { name: 'Tem', current: 3490, previous: 4300 },
];

const efficiencyData = [
  { name: 'Pzt', value: 65 },
  { name: 'Sal', value: 78 },
  { name: 'Çar', value: 82 },
  { name: 'Per', value: 70 },
  { name: 'Cum', value: 89 },
];

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Çözümler', href: '#cozumler' },
    { name: 'İş Zekâsı', href: '/is-zekasi-danismanligi' },
    { name: 'Yapay Zekâ', href: '/ozel-yapay-zeka' },
    { name: 'Bi Restoran', href: '/restoran' },
    { name: 'Bi Sürü', href: '/suru' },
    { name: 'Özel Yazılım', href: '#ozel-yazilim' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img src="/Logo.png" alt="Bi Analytic" className="h-[50px] w-[150px] rounded-none object-contain" />
          </div>
          
          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-5 xl:gap-7">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-sm font-medium text-navy-800 hover:text-teal-600 transition-colors">
                {link.name}
              </a>
            ))}
            <a href="#contact" className="bg-navy-900 hover:bg-navy-800 text-white px-5 py-2.5 rounded-full text-sm font-medium transition-all shadow-md hover:shadow-lg">
              İletişime Geç
            </a>
          </div>

          {/* Mobile Nav Toggle */}
          <div className="lg:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-navy-900">
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-3 text-base font-medium text-navy-800 hover:bg-light-bg rounded-md"
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="#contact" 
                onClick={() => setIsOpen(false)}
                className="block w-full text-center mt-4 bg-navy-900 text-white px-5 py-3 rounded-md text-base font-medium"
              >
                İletişime Geç
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute -top-[20%] -right-[10%] w-[70%] h-[70%] rounded-full bg-teal-600/10 blur-3xl" />
        <div className="absolute top-[40%] -left-[10%] w-[50%] h-[50%] rounded-full bg-navy-900/5 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-600/10 text-teal-600 text-sm font-medium mb-6 border border-teal-600/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-600"></span>
              </span>
              İş Zekâsı ve Operasyon Teknolojileri
            </div>
            <h1 className="text-5xl lg:text-6xl font-display font-bold text-navy-900 leading-[1.1] mb-6">
              Türkiye’de İş Zekâsı, <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-navy-900 to-teal-600">
                Yapay Zekâ ve Özel Yazılım
              </span>
            </h1>
            <p className="text-lg text-navy-800/80 mb-8 leading-relaxed max-w-xl">
              Bianalytic, Türkiye’de KOBİ’ler, kurumsal ekipler ve bireysel profesyoneller için iş zekâsı danışmanlığı, özel yapay zekâ, restoran ve sürü yönetimi ürünleri ile ihtiyaca özel yazılımlar geliştirir.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#cozumler" className="inline-flex justify-center items-center gap-2 bg-navy-900 hover:bg-navy-800 text-white px-8 py-4 rounded-full font-medium transition-all shadow-lg shadow-navy-900/20 hover:shadow-xl hover:-translate-y-0.5">
                Çözümleri İnceleyin
                <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#contact" className="inline-flex justify-center items-center gap-2 bg-white hover:bg-gray-50 text-navy-900 border border-gray-200 px-8 py-4 rounded-full font-medium transition-all">
                İhtiyacınızı Konuşalım
              </a>
            </div>
          </motion.div>

          {/* Hero Visual - Abstract Dashboard */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative lg:ml-auto w-full max-w-lg"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-teal-600/20 to-navy-900/20 rounded-3xl transform rotate-3 blur-lg" />
            <div className="relative bg-white rounded-3xl shadow-2xl border border-gray-100 p-6 overflow-hidden">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="font-display font-bold text-navy-900">Aylık Büyüme</h3>
                  <p className="text-sm text-gray-500">Gerçek zamanlı analiz</p>
                </div>
                <div className="flex items-center gap-1 text-teal-600 bg-teal-50 px-2 py-1 rounded-md text-sm font-medium">
                  <TrendingUp className="w-4 h-4" />
                  +24.8%
                </div>
              </div>
              <div className="h-64 w-full">
                <ResponsiveContainer width="100%" height="100%" minWidth={0} minHeight={0} initialDimension={{width: 512, height: 256}}>
                  <AreaChart data={revenueData} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
                    <defs>
                      <linearGradient id="colorCurrent" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#1F7A8C" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="#1F7A8C" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                    <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#888' }} dy={10} />
                    <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#888' }} />
                    <Tooltip 
                      contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                      cursor={{ stroke: '#1F7A8C', strokeWidth: 1, strokeDasharray: '4 4' }}
                    />
                    <Area type="monotone" dataKey="current" stroke="#1F7A8C" strokeWidth={3} fillOpacity={1} fill="url(#colorCurrent)" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
              
              {/* Floating KPI Cards */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-6 top-1/4 bg-white pr-[39px] pb-[14px] pt-[13px] pl-[5px] rounded-xl shadow-xl border border-gray-100 flex items-center gap-4"
              >
                <div className="w-10 h-10 rounded-full bg-navy-50 flex items-center justify-center">
                  <Activity className="w-5 h-5 text-navy-900" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-medium">Verimlilik</p>
                  <p className="font-bold text-navy-900">98.2%</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Solutions = () => {
  const solutions = [
    {
      category: 'Danışmanlık',
      title: 'İş Zekâsı',
      description: 'Farklı kaynaklardaki verilerinizi bir araya getiriyor; veri modeli, dashboard ve karar destek yapıları kuruyoruz.',
      detail: 'Qlik Sense, Tableau ve ihtiyaca uygun diğer teknolojiler',
      href: '/is-zekasi-danismanligi',
      cta: 'Danışmanlığı inceleyin',
      icon: <BarChart3 className="h-7 w-7" />,
      accent: 'text-teal-700 bg-teal-50 border-teal-100',
    },
    {
      category: 'Restoran Teknolojisi',
      title: 'Bi Restoran',
      description: 'Siparişten mutfağa, QR menüden stok ve raporlamaya kadar restoran operasyonunu tek platformda yönetin.',
      detail: 'Bulut tabanlı POS ve restoran operasyon yönetimi',
      href: '/restoran',
      cta: 'Bi Restoran’ı keşfedin',
      logo: '/bi-restoran-logo.jpg',
      accent: 'text-teal-700 bg-cyan-50 border-cyan-100',
    },
    {
      category: 'Tarım Teknolojisi',
      title: 'Bi Sürü',
      description: 'Hayvan kayıtları, sağlık, üreme, süt, yem, finans ve çiftlik performansını tek merkezden takip edin.',
      detail: 'Bulut tabanlı sürü ve çiftlik yönetimi',
      href: '/suru',
      cta: 'Bi Sürü’yü keşfedin',
      logo: '/bi-suru-logo.svg',
      accent: 'text-emerald-800 bg-emerald-50 border-emerald-100',
    },
    {
      category: 'Yazılım Geliştirme',
      title: 'Özel Yazılım',
      description: 'Hazır bir ürünün karşılamadığı süreçleriniz için işletmenize uygun web, yönetim ve entegrasyon uygulamaları geliştiriyoruz.',
      detail: 'Analizden geliştirmeye, işletmeye özel çözüm',
      href: '#contact',
      cta: 'Projenizi konuşalım',
      icon: <Cpu className="h-7 w-7" />,
      accent: 'text-navy-900 bg-blue-50 border-blue-100',
      id: 'ozel-yazilim',
    },
    {
      category: 'Uygulamalı Yapay Zekâ',
      title: 'Özel Yapay Zekâ',
      description: 'Firmanızın veya kişisel çalışma düzeninizin tekrarlanan işlerini anlayan yapay zekâ asistanları ve kontrollü otomasyonlar kuruyoruz.',
      detail: 'Süreç analizi, entegrasyon, çalışan sistem ve iyileştirme',
      href: '/ozel-yapay-zeka',
      cta: 'Yapay zekâ çözümlerini inceleyin',
      icon: <Cpu className="h-7 w-7" />,
      accent: 'text-violet-800 bg-violet-50 border-violet-100',
    },
  ];

  return (
    <section id="cozumler" className="bg-white py-24 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-14">
          <p className="text-teal-600 font-semibold tracking-wide uppercase text-sm mb-2">Ne yapıyoruz?</p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-navy-900 mb-4">Veriden günlük operasyona, tek bir teknoloji ortağı</h2>
          <p className="text-gray-600 text-lg leading-relaxed">Danışmanlık uzmanlığımızı kendi ürünlerimiz ve işletmeye özel yazılım geliştirme yetkinliğimizle birleştiriyoruz.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {solutions.map((solution, index) => (
            <motion.a
              id={solution.id}
              key={solution.title}
              href={solution.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="group rounded-3xl border border-slate-200 bg-white p-7 md:p-8 shadow-sm transition-all hover:-translate-y-1 hover:border-teal-200 hover:shadow-xl md:last:col-span-2 lg:last:col-span-1"
            >
              <div className="flex items-start gap-5">
                <div className={`flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-2xl border ${solution.accent}`}>
                  {solution.logo ? <img src={solution.logo} alt={`${solution.title} logosu`} className="h-full w-full object-cover" /> : solution.icon}
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-[.18em] text-teal-600">{solution.category}</p>
                  <h3 className="mt-2 text-2xl font-display font-bold text-navy-900">{solution.title}</h3>
                </div>
              </div>
              <p className="mt-6 text-base leading-7 text-slate-600">{solution.description}</p>
              <p className="mt-4 text-sm font-semibold text-navy-800">{solution.detail}</p>
              <span className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-teal-700">
                {solution.cta}<ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

const InteractiveDemo = () => {
  const [activeTab, setActiveTab] = useState('before');

  return (
    <section id="demo" className="py-24 bg-navy-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-teal-600/20 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Veri Dönüşümünün Gücü</h2>
          <p className="text-teal-50 text-lg">
            Dağınık ve anlamsız verilerinizi, aksiyon alınabilir, interaktif ve görsel olarak zengin dashboardlara dönüştürüyoruz.
          </p>
        </div>

        <div className="bg-navy-800 rounded-2xl border border-navy-700 overflow-hidden shadow-2xl">
          <div className="flex border-b border-navy-700">
            <button 
              onClick={() => setActiveTab('before')}
              className={`flex-1 py-4 text-sm font-medium transition-colors ${activeTab === 'before' ? 'bg-navy-900 text-white border-b-2 border-teal-500' : 'text-gray-400 hover:text-gray-200'}`}
            >
              Öncesi: Dağınık Veri (Excel/CSV)
            </button>
            <button 
              onClick={() => setActiveTab('after')}
              className={`flex-1 py-4 text-sm font-medium transition-colors ${activeTab === 'after' ? 'bg-navy-900 text-white border-b-2 border-teal-500' : 'text-gray-400 hover:text-gray-200'}`}
            >
              Sonrası: Bi Analytic Dashboard
            </button>
          </div>

          <div className="p-6 md:p-8 min-h-[400px]">
            <AnimatePresence mode="wait">
              {activeTab === 'before' ? (
                <motion.div 
                  key="before"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="font-mono text-xs md:text-sm text-gray-300 overflow-x-auto"
                >
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="border-b border-navy-700 text-gray-400">
                        <th className="p-2">Date</th>
                        <th className="p-2">Region</th>
                        <th className="p-2">Product_ID</th>
                        <th className="p-2">Revenue_Raw</th>
                        <th className="p-2">Cost_Est</th>
                        <th className="p-2">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[...Array(8)].map((_, i) => (
                        <tr key={i} className="border-b border-navy-700/50">
                          <td className="p-2">2023-10-{10+i}</td>
                          <td className="p-2">{['NA', 'EMEA', 'APAC', 'LATAM'][i%4]}</td>
                          <td className="p-2">PRD-{Math.floor(Math.random()*1000)}</td>
                          <td className="p-2">${(Math.random()*10000).toFixed(2)}</td>
                          <td className="p-2">${(Math.random()*5000).toFixed(2)}</td>
                          <td className="p-2">{Math.random() > 0.2 ? 'Completed' : 'Pending'}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <div className="mt-8 text-center text-gray-500 italic">
                    "Bu verilerden anlamlı bir karar çıkarmak saatler sürer..."
                  </div>
                </motion.div>
              ) : (
                <motion.div 
                  key="after"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="grid grid-cols-1 md:grid-cols-3 gap-6"
                >
                  <div className="md:col-span-2 bg-navy-900 rounded-xl p-4 border border-navy-700">
                    <h4 className="text-sm font-medium text-gray-400 mb-4">Bölgesel Gelir Dağılımı</h4>
                    <div className="h-64">
                      <ResponsiveContainer width="100%" height="100%" minWidth={0} minHeight={0} initialDimension={{width: 720, height: 256}}>
                        <BarChart data={[
                          { name: 'NA', value: 4000 },
                          { name: 'EMEA', value: 3000 },
                          { name: 'APAC', value: 2000 },
                          { name: 'LATAM', value: 2780 },
                        ]}>
                          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#374151" />
                          <XAxis dataKey="name" stroke="#9CA3AF" tickLine={false} axisLine={false} />
                          <YAxis stroke="#9CA3AF" tickLine={false} axisLine={false} />
                          <Tooltip cursor={{fill: '#1F2937'}} contentStyle={{backgroundColor: '#111827', border: 'none', borderRadius: '8px'}} />
                          <Bar dataKey="value" fill="#1F7A8C" radius={[4, 4, 0, 0]} />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                  <div className="space-y-6">
                    <div className="bg-navy-900 rounded-xl p-4 border border-navy-700">
                      <h4 className="text-sm font-medium text-gray-400 mb-1">Toplam Gelir</h4>
                      <p className="text-3xl font-display font-bold text-white">$1.2M</p>
                      <p className="text-xs text-teal-400 mt-1 flex items-center gap-1"><TrendingUp className="w-3 h-3"/> +15% geçen aya göre</p>
                    </div>
                    <div className="bg-navy-900 rounded-xl p-4 border border-navy-700">
                      <h4 className="text-sm font-medium text-gray-400 mb-1">Kâr Marjı</h4>
                      <p className="text-3xl font-display font-bold text-white">32.4%</p>
                      <p className="text-xs text-teal-400 mt-1 flex items-center gap-1"><TrendingUp className="w-3 h-3"/> +2.1% geçen aya göre</p>
                    </div>
                    <div className="bg-navy-900 rounded-xl p-4 border border-navy-700 flex items-center justify-between">
                      <div>
                        <h4 className="text-sm font-medium text-gray-400 mb-1">Veri Kalitesi</h4>
                        <p className="text-xl font-display font-bold text-white">Mükemmel</p>
                      </div>
                      <div className="w-10 h-10 rounded-full bg-teal-600/20 flex items-center justify-center">
                        <CheckCircle2 className="text-teal-500 w-5 h-5" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

const Templates = () => {
  const templates = [
    {
      icon: <ShoppingCart className="w-6 h-6 text-teal-600" />,
      title: "Satış & Ciro Şablonu",
      description: "Günlük satışlar, hedef takibi, en çok satan ürünler ve personel performansı tek ekranda."
    },
    {
      icon: <Wallet className="w-6 h-6 text-teal-600" />,
      title: "Finans & Nakit Akışı",
      description: "Gelir/Gider dengesi, tahsilat takibi ve karlılık analizleri ile finansal kontrolü elinize alın."
    },
    {
      icon: <Package className="w-6 h-6 text-teal-600" />,
      title: "Stok & Depo Yönetimi",
      description: "Kritik stok uyarıları, depo verimliliği ve tedarik zinciri optimizasyonu için hazır metrikler."
    },
    {
      icon: <Globe className="w-6 h-6 text-teal-600" />,
      title: "E-Ticaret & Pazarlama",
      description: "Web sitesi trafiği, dönüşüm oranları ve kampanya ROI takibi ile dijital büyümenizi hızlandırın."
    }
  ];

  return (
    <section id="templates" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-teal-600 font-semibold tracking-wide uppercase text-sm mb-2">İş Zekâsı</h2>
          <h3 className="text-3xl md:text-4xl font-display font-bold text-navy-900 mb-4">Dashboard ve Raporlama Çözümleri</h3>
          <p className="text-gray-600 text-lg">
            Satış, finans, stok ve pazarlama verileriniz için hazır metriklerden yararlanıyor; dashboardları veri kaynağınıza ve karar ihtiyacınıza göre uyarlıyoruz.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {templates.map((template, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6 rounded-2xl bg-light-bg border border-light-accent hover:shadow-lg hover:border-teal-200 transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {template.icon}
              </div>
              <h4 className="text-lg font-bold text-navy-900 mb-2">{template.title}</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                {template.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Advantages = () => {
  const advantages = [
    {
      icon: <Clock className="w-6 h-6 text-teal-600" />,
      title: "48 Saatte Veri Keşfi",
      description: "Veri yapınızı ve raporlama ihtiyacınızı inceliyor; veriler hazırsa entegrasyon, modelleme ve dashboard tasarımını başlatıyoruz."
    },
    {
      icon: <Layers className="w-6 h-6 text-teal-600" />,
      title: "İhtiyaca Göre Çalışma",
      description: "Ücretsiz veri keşfinin ardından kapsamı belirliyor; projeyi ihtiyacınıza uygun çalışma modeliyle planlıyoruz."
    },
    {
      icon: <Zap className="w-6 h-6 text-teal-600" />,
      title: "BT Ekibinizle Uyumlu",
      description: "BT ekibi olmayan işletmelerle, küçük BT ekipleriyle ve belirli bir projede dış uzmanlık arayan kurumsal ekiplerle çalışıyoruz."
    },
    {
      icon: <LayoutTemplate className="w-6 h-6 text-teal-600" />,
      title: "Sektöre Özel Çözümler",
      description: "Perakende, üretim, e-ticaret veya hizmet sektörü... İş modelinize en uygun hazır metrikleri sizin için seçiyoruz."
    }
  ];

  return (
    <section id="services" className="py-24 bg-light-bg border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-teal-600 font-semibold tracking-wide uppercase text-sm mb-2">Neden Biz?</h2>
          <h3 className="text-3xl md:text-4xl font-display font-bold text-navy-900 mb-4">KOBİ'lerin Veri Ortağı</h3>
          <p className="text-gray-600 text-lg">
            İşletmenizi büyütmek için ihtiyacınız olan teknolojiye, bütçenizi sarsmadan ve zaman kaybetmeden ulaşın.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {advantages.map((adv, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-2xl bg-white border border-gray-100 hover:shadow-lg transition-shadow flex gap-6 items-start"
            >
              <div className="w-14 h-14 shrink-0 rounded-xl bg-teal-50 flex items-center justify-center">
                {adv.icon}
              </div>
              <div>
                <h4 className="text-xl font-bold text-navy-900 mb-2">{adv.title}</h4>
                <p className="text-gray-600 leading-relaxed">
                  {adv.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CaseStudies = () => {
  const cases = [
    {
      company: "Büyüyen E-Ticaret Firması",
      metric: "+45%",
      metricLabel: "Ciro Artışı",
      title: "Tek Ekrandan Satış Yönetimi",
      description: "Hazır e-ticaret şablonumuzla günlük satış, iade ve kampanya verileri tek ekranda birleştirildi. Pazarlama bütçesi anlık optimize edildi."
    },
    {
      company: "Yerel Üretim Tesisi",
      metric: "48 Saat",
      metricLabel: "Canlıya Alınma Süresi",
      title: "Üretim Takip Dashboard'u",
      description: "Karmaşık Excel dosyaları yerine, üretime özel hazır dashboard'umuz sadece 2 gün içinde sisteme entegre edilerek üretime hız kazandırıldı."
    },
    {
      company: "Bölgesel Lojistik Şirketi",
      metric: "-30%",
      metricLabel: "Maliyet Düşüşü",
      title: "Operasyonel Verimlilik",
      description: "Araç takip, yakıt ve personel verileri görselleştirilerek, operasyonel maliyetlerde anında tasarruf ve rota optimizasyonu sağlandı."
    }
  ];

  return (
    <section id="cases" className="py-24 bg-light-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-teal-600 font-semibold tracking-wide uppercase text-sm mb-2">Başarı Hikayeleri</h2>
            <h3 className="text-3xl md:text-4xl font-display font-bold text-navy-900 mb-4">Ölçülebilir İş Değeri</h3>
            <p className="text-gray-600 text-lg">
              Müşterilerimizin verilerini nasıl somut iş sonuçlarına ve karlılığa dönüştürdüğümüzü inceleyin.
            </p>
          </div>
          <a href="#contact" className="inline-flex items-center gap-2 text-navy-900 font-semibold hover:text-teal-600 transition-colors">
            Tüm Projeleri Gör <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {cases.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-xl transition-all"
            >
              <div className="text-sm font-medium text-gray-500 mb-4">{item.company}</div>
              <div className="mb-6 pb-6 border-b border-gray-100">
                <div className="text-4xl font-display font-bold text-teal-600 mb-1">{item.metric}</div>
                <div className="text-sm font-medium text-navy-900">{item.metricLabel}</div>
              </div>
              <h4 className="text-xl font-bold text-navy-900 mb-3">{item.title}</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Technologies = () => {
  const techs = [
    { name: "Qlik Sense", category: "Visualization" },
    { name: "Qlik Cloud", category: "Visualization" },
    { name: "Nprinting", category: "Visualization" },
    { name: "Tableau", category: "Visualization" },
    { name: "Power BI", category: "Visualization" },
    { name: "SQL Server", category: "Database" },
    { name: "PostgreSQL", category: "Database" },
    { name: "Snowflake", category: "Data Warehouse" },
    { name: "Google BigQuery", category: "Data Warehouse" },
    { name: "Apache Airflow", category: "ETL" },
    { name: "dbt", category: "Data Transformation" },
    { name: "Python", category: "Data Science" },
  ];

  return (
    <section id="tech" className="py-24 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-teal-600 font-semibold tracking-wide uppercase text-sm mb-2">Teknoloji Yığınımız</h2>
        <h3 className="text-2xl md:text-3xl font-display font-bold text-navy-900 mb-12">Modern Veri Ekosistemi</h3>
        
        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {techs.map((tech, index) => (
            <div 
              key={index}
              className="px-6 py-3 bg-light-bg text-navy-900 font-medium rounded-full border border-light-accent hover:bg-teal-50 hover:border-teal-200 transition-colors cursor-default"
            >
              {tech.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 bg-navy-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-teal-400 font-semibold tracking-wide uppercase text-sm mb-2">Hakkımızda</h2>
            <h3 className="text-3xl md:text-4xl font-display font-bold mb-6">Veriyi Değere Dönüştüren Ekip</h3>
            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
              Bi Analytic olarak, kurumların veri odaklı kültürler inşa etmelerine yardımcı oluyoruz. Sadece raporlar üretmiyor, işinizin büyümesini sağlayacak stratejik içgörüler sunuyoruz.
            </p>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              Deneyimli veri mühendisleri ve iş zekası uzmanlarından oluşan ekibimizle, karmaşık veri problemlerini çözüyor ve karar alma süreçlerinizi hızlandırıyoruz.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div>
                <div className="text-4xl font-display font-bold text-teal-400 mb-2">50+</div>
                <div className="text-sm text-gray-400">Başarılı Proje</div>
              </div>
              <div>
                <div className="text-4xl font-display font-bold text-teal-400 mb-2">10+</div>
                <div className="text-sm text-gray-400">Yıllık Deneyim</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-teal-600 rounded-2xl transform translate-x-4 translate-y-4 opacity-50"></div>
            <img 
              src="https://picsum.photos/seed/analytics-team/800/600" 
              alt="Bi Analytic Team" 
              className="relative rounded-2xl shadow-2xl object-cover w-full h-full"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const CTA = () => {
  return (
    <section id="contact" className="py-24 bg-teal-600 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
          İşletmenizi Büyütmeye Hazır Mısınız?
        </h2>
        <p className="text-teal-50 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
          İş zekâsı, operasyon yazılımı veya işletmenize özel bir uygulama ihtiyacınızı birlikte değerlendirelim.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a 
            href="https://wa.me/905437431754" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex justify-center items-center bg-navy-900 hover:bg-navy-800 text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1"
          >
            İhtiyacınızı Anlatın
          </a>
          <a 
            href="mailto:mustafa.oz@bianalytic.net"
            className="inline-flex justify-center items-center bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-full font-bold text-lg transition-all"
          >
            Bize Ulaşın
          </a>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-navy-900 text-gray-400 py-12 border-t border-navy-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <div className="inline-flex items-center mb-4 bg-white py-2 px-3 rounded-xl">
              <img src="/Logo.png" alt="Bi Analytic" className="h-[45px] w-auto object-contain" />
            </div>
            <p className="text-sm max-w-xs mb-6">
              İş zekâsı danışmanlığı, operasyon ürünleri ve işletmeye özel yazılım geliştirme çözümleri.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">İletişim</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2"><Mail className="w-4 h-4 text-teal-500" /> <a href="mailto:mustafa.oz@bianalytic.net" className="hover:text-white">mustafa.oz@bianalytic.net</a></li>
              <li className="flex items-center gap-2"><Phone className="w-4 h-4 text-teal-500" /> <a href="tel:+905437431754" className="hover:text-white">+90 543 743 1754</a></li>
              <li className="flex items-center gap-2"><MapPin className="w-4 h-4 text-teal-500" /> Çanakkale </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Hızlı Linkler</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/is-zekasi-danismanligi" className="hover:text-teal-400 transition-colors">İş Zekâsı Danışmanlığı</a></li>
              <li><a href="/ozel-yapay-zeka" className="hover:text-teal-400 transition-colors">Özel Yapay Zekâ</a></li>
              <li><a href="/restoran" className="hover:text-teal-400 transition-colors">Bi Restoran</a></li>
              <li><a href="/suru" className="hover:text-teal-400 transition-colors">Bi Sürü</a></li>
              <li><a href="#ozel-yazilim" className="hover:text-teal-400 transition-colors">Özel Yazılım</a></li>
              <li><a href="/hakkimizda" className="hover:text-teal-400 transition-colors">Hakkımızda</a></li>
              <li><a href="/iletisim" className="hover:text-teal-400 transition-colors">İletişim</a></li>
              <li><a href="/karsilastirma/is-zekasi-danismanligi-ve-bi-platformu" className="hover:text-teal-400 transition-colors">Danışmanlık mı, BI Platformu mu?</a></li>
              <li><a href="/rehber/kobiler-icin-hizli-veri-analizi" className="hover:text-teal-400 transition-colors">KOBİ Veri Analizi Rehberi</a></li>
              <li><a href="/rehber/kobiler-icin-hazir-paneller" className="hover:text-teal-400 transition-colors">KOBİ Hazır Panel Rehberi</a></li>
              <li><a href="/rehber/satis-ve-gelir-takibi" className="hover:text-teal-400 transition-colors">Satış ve Gelir Takibi Rehberi</a></li>
              <li><a href="/rehber/kobiler-icin-is-zekasi-secimi" className="hover:text-teal-400 transition-colors">KOBİ İş Zekâsı Seçim Rehberi</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-navy-800 text-sm text-center md:text-left flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {new Date().getFullYear()} Bi Analytic. Tüm hakları saklıdır.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <div className="relative group">
              <a href="/gizlilik-politikasi" className="hover:text-white transition-colors">Gizlilik Politikası</a>
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 p-2 bg-gray-800 text-xs text-white text-center rounded opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all pointer-events-none z-10 shadow-lg">
                Verilerinizin nasıl korunduğunu ve işlendiğini öğrenin.
                <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-800"></div>
              </div>
            </div>
            <div className="relative group">
              <a href="/kullanim-kosullari" className="hover:text-white transition-colors">Kullanım Koşulları</a>
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 p-2 bg-gray-800 text-xs text-white text-center rounded opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all pointer-events-none z-10 shadow-lg">
                Hizmetlerimizi kullanım koşullarını ve yasal haklarınızı inceleyin.
                <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-800"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  if (window.location.pathname === '/hakkimizda' || window.location.pathname.startsWith('/hakkimizda/')) {
    return <AboutPage />;
  }

  if (window.location.pathname === '/rehber/kobiler-icin-hizli-veri-analizi' || window.location.pathname.startsWith('/rehber/kobiler-icin-hizli-veri-analizi/')) {
    return <FastAnalyticsGuidePage />;
  }

  if (window.location.pathname === '/rehber/kobiler-icin-hazir-paneller' || window.location.pathname.startsWith('/rehber/kobiler-icin-hazir-paneller/')) {
    return <ReadyDashboardGuidePage />;
  }

  if (window.location.pathname === '/rehber/satis-ve-gelir-takibi' || window.location.pathname.startsWith('/rehber/satis-ve-gelir-takibi/')) {
    return <SalesRevenueGuidePage />;
  }

  if (window.location.pathname === '/rehber/kobiler-icin-is-zekasi-secimi' || window.location.pathname.startsWith('/rehber/kobiler-icin-is-zekasi-secimi/')) {
    return <BISelectionGuidePage />;
  }

  if (window.location.pathname === '/karsilastirma/is-zekasi-danismanligi-ve-bi-platformu' || window.location.pathname.startsWith('/karsilastirma/is-zekasi-danismanligi-ve-bi-platformu/')) {
    return <ConsultingComparisonPage />;
  }

  if (window.location.pathname === '/iletisim' || window.location.pathname.startsWith('/iletisim/')) {
    return <ContactPage />;
  }

  if (window.location.pathname === '/kullanim-kosullari' || window.location.pathname.startsWith('/kullanim-kosullari/')) {
    return <TermsOfUsePage />;
  }

  if (window.location.pathname === '/gizlilik-politikasi' || window.location.pathname.startsWith('/gizlilik-politikasi/')) {
    return <PrivacyPolicyPage />;
  }

  if (window.location.pathname === '/is-zekasi-danismanligi' || window.location.pathname.startsWith('/is-zekasi-danismanligi/')) {
    return <SMEConsultingPage />;
  }

  if (window.location.pathname === '/ozel-yapay-zeka' || window.location.pathname.startsWith('/ozel-yapay-zeka/')) {
    return <CustomAIPage />;
  }

  if (window.location.pathname === '/restoran' || window.location.pathname.startsWith('/restoran/')) {
    return <RestaurantProduct />;
  }

  if (window.location.pathname === '/suru' || window.location.pathname.startsWith('/suru/')) {
    return <HerdProduct />;
  }

  return (
    <div className="min-h-screen overflow-x-hidden bg-light-bg font-sans selection:bg-teal-500/30">
      <Navbar />
      <main>
        <Hero />
        <Solutions />
        <Templates />
        <InteractiveDemo />
        <Advantages />
        <CaseStudies />
        <Technologies />
        <About />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

