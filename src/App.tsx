import React, { useState, useEffect } from 'react';
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
  Activity
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
    { name: 'Hizmetler', href: '#services' },
    { name: 'Çözümler', href: '#demo' },
    { name: 'Referanslar', href: '#cases' },
    { name: 'Teknolojiler', href: '#tech' },
    { name: 'Hakkımızda', href: '#about' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img src="/Logo.png" alt="Bi Analytic" className="h-[50px] w-[150px] rounded-none object-contain" />
          </div>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
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
          <div className="md:hidden">
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
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
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
              Veriye Dayalı Karar Alma Dönemi
            </div>
            <h1 className="text-5xl lg:text-6xl font-display font-bold text-navy-900 leading-[1.1] mb-6">
              Karmaşık Verilerinizi <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-navy-900 to-teal-600">
                Net İçgörülere
              </span> Dönüştürün
            </h1>
            <p className="text-lg text-navy-800/80 mb-8 leading-relaxed max-w-xl">
              İşletmenizin potansiyelini ortaya çıkarın. Modern iş zekası, veri mühendisliği ve gelişmiş dashboard çözümlerimizle verilerinizi stratejik bir avantaja çeviriyoruz.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="inline-flex justify-center items-center gap-2 bg-navy-900 hover:bg-navy-800 text-white px-8 py-4 rounded-full font-medium transition-all shadow-lg shadow-navy-900/20 hover:shadow-xl hover:-translate-y-0.5">
                Ücretsiz Veri Analizi
                <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#services" className="inline-flex justify-center items-center gap-2 bg-white hover:bg-gray-50 text-navy-900 border border-gray-200 px-8 py-4 rounded-full font-medium transition-all">
                Hizmetlerimizi İnceleyin
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
                <ResponsiveContainer width="100%" height="100%">
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
                      <ResponsiveContainer width="100%" height="100%">
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

const Services = () => {
  const services = [
    {
      icon: <PieChart className="w-6 h-6 text-teal-600" />,
      title: "İş Zekası (BI) Danışmanlığı",
      description: "İşletmenizin hedeflerine uygun BI stratejileri geliştiriyor, doğru araçları seçmenize ve uygulamanıza rehberlik ediyoruz."
    },
    {
      icon: <LineChart className="w-6 h-6 text-teal-600" />,
      title: "Dashboard & Raporlama",
      description: "Karmaşık verileri anlaşılır, etkileşimli ve yönetici dostu görsel panellere dönüştürerek karar alma hızınızı artırıyoruz."
    },
    {
      icon: <Layers className="w-6 h-6 text-teal-600" />,
      title: "ETL & Veri Entegrasyonu",
      description: "Farklı kaynaklardaki (ERP, CRM, Web) verilerinizi temizliyor, birleştiriyor ve analize hazır merkezi bir yapıya taşıyoruz."
    },
    {
      icon: <Database className="w-6 h-6 text-teal-600" />,
      title: "Data Engineering",
      description: "Büyük veri mimarileri kuruyor, veri ambarı (Data Warehouse) tasarımı ile ölçeklenebilir ve güvenli altyapılar oluşturuyoruz."
    }
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-teal-600 font-semibold tracking-wide uppercase text-sm mb-2">Uzmanlık Alanlarımız</h2>
          <h3 className="text-3xl md:text-4xl font-display font-bold text-navy-900 mb-4">Uçtan Uca Veri Çözümleri</h3>
          <p className="text-gray-600 text-lg">
            Verinin toplanmasından görselleştirilmesine kadar tüm süreçlerde yanınızdayız. Teknik karmaşayı biz yönetelim, siz işinize odaklanın.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-2xl bg-light-bg border border-light-accent hover:shadow-lg transition-shadow group"
            >
              <div className="w-14 h-14 rounded-xl bg-white shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h4 className="text-xl font-bold text-navy-900 mb-3">{service.title}</h4>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
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
      company: "Global Perakende Zinciri",
      metric: "+35%",
      metricLabel: "Stok Optimizasyonu",
      title: "Gerçek Zamanlı Satış Analitiği",
      description: "100'den fazla mağazanın verisini tek bir merkezde toplayarak, anlık stok takibi ve talep tahmini sağlayan Qlik Sense altyapısı kuruldu."
    },
    {
      company: "Finansal Hizmetler A.Ş.",
      metric: "120 Saat",
      metricLabel: "Aylık Zaman Tasarrufu",
      title: "Otomatik Finansal Raporlama",
      description: "Manuel hazırlanan Excel raporları, otomatik ETL süreçleri ve interaktif dashboardlar ile değiştirilerek insan hatası sıfıra indirildi."
    },
    {
      company: "E-Ticaret Platformu",
      metric: "3x",
      metricLabel: "ROI Artışı",
      title: "Müşteri Davranış Analizi",
      description: "Kullanıcı yolculuğu verileri analiz edilerek, pazarlama kampanyalarının dönüşüm oranlarını artıracak içgörüler elde edildi."
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
          Verileriniz Konuşmaya Hazır mı?
        </h2>
        <p className="text-teal-50 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
          İşletmenizin veri potansiyelini değerlendirmek ve size özel çözümlerimizi konuşmak için ücretsiz danışmanlık randevusu alın.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-navy-900 hover:bg-navy-800 text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1">
            <a href="https://wa.me/905437431754" target="_blank">
            Ücretsiz Danışmanlık Alın
            </a>
          </button>
          <button className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-full font-bold text-lg transition-all">
           <a href="mailto:mustafa.oz@bianalytic.net">
            Bize Ulaşın
           </a>
          </button>
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
              Veriyi stratejik bir avantaja dönüştüren modern iş zekası ve veri mühendisliği danışmanlık firması.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">İletişim</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2"><Mail className="w-4 h-4 text-teal-500" /> info@bianalytic.net</li>
              <li className="flex items-center gap-2"><Phone className="w-4 h-4 text-teal-500" /> +90 543 743 1754</li>
              <li className="flex items-center gap-2"><MapPin className="w-4 h-4 text-teal-500" /> Çanakkale </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Hızlı Linkler</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#services" className="hover:text-teal-400 transition-colors">Hizmetler</a></li>
              <li><a href="#cases" className="hover:text-teal-400 transition-colors">Referanslar</a></li>
              <li><a href="#about" className="hover:text-teal-400 transition-colors">Hakkımızda</a></li>
              <li><a href="#" className="hover:text-teal-400 transition-colors">Kariyer</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-navy-800 text-sm text-center md:text-left flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {new Date().getFullYear()} Bi Analytic. Tüm hakları saklıdır.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Gizlilik Politikası</a>
            <a href="#" className="hover:text-white transition-colors">Kullanım Şartları</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-light-bg font-sans selection:bg-teal-500/30">
      <Navbar />
      <main>
        <Hero />
        <InteractiveDemo />
        <Services />
        <CaseStudies />
        <Technologies />
        <About />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

