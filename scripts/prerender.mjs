import fs from 'node:fs/promises';
import path from 'node:path';
import React from 'react';
import {renderToString} from 'react-dom/server';
import {createServer} from 'vite';

const rootDir = process.cwd();
const distDir = path.join(rootDir, 'dist');

globalThis.window = {
  location: {pathname: '/'},
  scrollY: 0,
  addEventListener() {},
  removeEventListener() {},
};

const organization = {
  '@type': 'Organization',
  '@id': 'https://www.bianalytic.net/#organization',
  name: 'Bi Analytic',
  legalName: 'Bİ Analytic Yazılım Hizmetleri Ticaret Limited Şirketi',
  url: 'https://www.bianalytic.net/',
  logo: 'https://www.bianalytic.net/Logo.png',
  email: 'mustafa.oz@bianalytic.net',
  telephone: '+905437431754',
  taxID: '1691240862',
  foundingDate: '2026-05',
  founder: {'@id': 'https://www.bianalytic.net/hakkimizda#mustafa-oz'},
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Çanakkale',
    addressRegion: 'Çanakkale',
    addressCountry: 'TR',
  },
  identifier: [
    {'@type': 'PropertyValue', name: 'Ticaret Sicil No', value: 'ÇAN/2295'},
    {'@type': 'PropertyValue', name: 'Oda Sicil No', value: '21842'},
    {'@type': 'PropertyValue', name: 'MERSİS No', value: '0169124086200001'},
  ],
};

const routes = [
  {
    pathname: '/',
    output: 'index.html',
    title: 'Bi Analytic | İş Zekâsı ve Yazılım Çözümleri',
    description: 'Bianalytic, Türkiye’de KOBİ’ler, kurumsal ekipler ve profesyoneller için iş zekâsı, özel yapay zekâ ve özel yazılım çözümleri geliştirir.',
    canonical: 'https://www.bianalytic.net/',
    schema: {
      '@context': 'https://schema.org',
      '@graph': [
        organization,
        {
          '@type': 'WebSite',
          '@id': 'https://www.bianalytic.net/#website',
          url: 'https://www.bianalytic.net/',
          name: 'Bi Analytic',
          publisher: {'@id': organization['@id']},
          inLanguage: 'tr',
        },
        {
          '@type': 'Service',
          '@id': 'https://www.bianalytic.net/#business-intelligence-service',
          name: 'İş zekâsı danışmanlığı',
          url: 'https://www.bianalytic.net/is-zekasi-danismanligi',
          description: 'Veri keşfi, entegrasyon, veri modelleme ve dashboard tasarımı hizmetleri.',
          areaServed: { '@type': 'Country', name: 'Türkiye' },
          serviceType: 'İş zekâsı danışmanlığı',
          provider: {'@id': organization['@id']},
        },
        {
          '@type': 'SoftwareApplication',
          '@id': 'https://www.bianalytic.net/restoran#software',
          name: 'Bi Restoran',
          url: 'https://www.bianalytic.net/restoran',
          applicationCategory: 'BusinessApplication',
          operatingSystem: 'Web',
          description: 'Bulut tabanlı restoran POS ve operasyon yönetim sistemi.',
          publisher: {'@id': organization['@id']},
        },
        {
          '@type': 'SoftwareApplication',
          '@id': 'https://www.bianalytic.net/suru#software',
          name: 'Bi Sürü',
          url: 'https://www.bianalytic.net/suru',
          applicationCategory: 'BusinessApplication',
          operatingSystem: 'Web',
          description: 'Bulut tabanlı sürü ve çiftlik yönetim sistemi.',
          publisher: {'@id': organization['@id']},
        },
        {
          '@type': 'Service',
          '@id': 'https://www.bianalytic.net/#custom-software-service',
          name: 'İşletmeye özel yazılım geliştirme',
          url: 'https://www.bianalytic.net/#ozel-yazilim',
          description: 'İşletme süreçlerine uygun web, yönetim ve entegrasyon uygulamaları geliştirme hizmeti.',
          areaServed: { '@type': 'Country', name: 'Türkiye' },
          serviceType: 'Özel yazılım geliştirme',
          provider: {'@id': organization['@id']},
        },
        {
          '@type': 'Service',
          '@id': 'https://www.bianalytic.net/#custom-ai-service',
          name: 'Firmalara ve kişilere özel yapay zekâ çözümleri',
          url: 'https://www.bianalytic.net/ozel-yapay-zeka',
          description: 'İş süreçlerine ve kişisel çalışma düzenine göre geliştirilen yapay zekâ asistanları, otomasyonlar ve entegrasyonlar.',
          areaServed: { '@type': 'Country', name: 'Türkiye' },
          serviceType: 'Özel yapay zekâ ve otomasyon geliştirme',
          provider: {'@id': organization['@id']},
        },
      ],
    },
  },
  {
    pathname: '/hakkimizda',
    output: path.join('hakkimizda', 'index.html'),
    title: 'Hakkımızda | Bi Analytic',
    description: 'Mayıs 2026’da Çanakkale’de kurulan Bİ Analytic Yazılım Hizmetleri Ticaret Limited Şirketinin iş zekâsı, yapay zekâ ve özel yazılım yaklaşımı.',
    canonical: 'https://www.bianalytic.net/hakkimizda',
    schema: {
      '@context': 'https://schema.org',
      '@graph': [organization, {
        '@type': 'Person',
        '@id': 'https://www.bianalytic.net/hakkimizda#mustafa-oz',
        name: 'Mustafa Öz',
        jobTitle: 'Kurucu',
        worksFor: {'@id': organization['@id']},
      }, {
        '@type': 'AboutPage',
        name: 'Bi Analytic Hakkımızda',
        url: 'https://www.bianalytic.net/hakkimizda',
        about: [{'@id': organization['@id']}, {'@id': 'https://www.bianalytic.net/hakkimizda#mustafa-oz'}],
        isPartOf: {'@id': 'https://www.bianalytic.net/#website'},
        inLanguage: 'tr',
      }],
    },
  },
  {
    pathname: '/bianalytic-nedir',
    output: path.join('bianalytic-nedir', 'index.html'),
    title: 'Bianalytic Nedir? | İş Zekâsı, Yazılım ve Yapay Zekâ',
    description: 'Bianalytic nedir, ne yapar ve kimlerle çalışır? İş zekâsı danışmanlığı, özel yazılım, yapay zekâ, Bi Restoran ve Bi Sürü çözümlerini keşfedin.',
    canonical: 'https://www.bianalytic.net/bianalytic-nedir',
    schema: {
      '@context': 'https://schema.org',
      '@graph': [organization, {
        '@type': 'WebPage',
        '@id': 'https://www.bianalytic.net/bianalytic-nedir#webpage',
        name: 'Bianalytic Nedir?',
        url: 'https://www.bianalytic.net/bianalytic-nedir',
        description: 'Bianalytic şirketini, hizmetlerini, sektörel ürünlerini, hedef müşterilerini ve çalışma sürecini açıklayan kurumsal bilgi sayfası.',
        about: {'@id': organization['@id']},
        isPartOf: {'@id': 'https://www.bianalytic.net/#website'},
        inLanguage: 'tr',
      }, {
        '@type': 'FAQPage',
        '@id': 'https://www.bianalytic.net/bianalytic-nedir#faq',
        mainEntity: [
          {'@type': 'Question', name: 'Bianalytic bir iş zekâsı programı mı?', acceptedAnswer: {'@type': 'Answer', text: 'Hayır. Bianalytic bir danışmanlık ve yazılım şirketidir. İhtiyaca göre mevcut iş zekâsı araçlarını kullanır; ayrıca özel yazılım, yapay zekâ çözümleri ve sektörel ürünler geliştirir.'}},
          {'@type': 'Question', name: 'Kimler Bianalytic ile çalışabilir?', acceptedAnswer: {'@type': 'Answer', text: 'BT ekibi bulunmayan işletmeler, küçük BT ekipleri, belirli bir proje için dış uzmanlık arayan kurumsal ekipler ve kişisel iş akışını geliştirmek isteyen profesyoneller çalışabilir.'}},
          {'@type': 'Question', name: 'Bianalytic hangi sektörlerle çalışır?', acceptedAnswer: {'@type': 'Answer', text: 'Perakende, üretim, restoran, tarım, hayvancılık, e-ticaret ve hizmet işletmeleri dahil farklı sektörlerdeki veri ve operasyon ihtiyaçları değerlendirilebilir.'}},
          {'@type': 'Question', name: 'Bianalytic ile çalışmanın ilk adımı nedir?', acceptedAnswer: {'@type': 'Answer', text: 'İlk adım ücretsiz veri keşfidir. İhtiyaç, veri kaynakları, erişimler, mevcut yazılımlar ve kullanıcılar incelenir; uygulanabilir kapsam bundan sonra belirlenir.'}},
          {'@type': 'Question', name: '48 saat içinde ne yapılabilir?', acceptedAnswer: {'@type': 'Answer', text: 'Veriler doğru yapılandırılmış ve erişimler hazırsa ilk 48 saatte entegrasyon ile veri modeli kurulabilir ve dashboard tasarımına başlanabilir. Bu süre bütün projenin teslim süresi değildir.'}},
        ],
      }],
    },
  },
  {
    pathname: '/rehber/kobiler-icin-hizli-veri-analizi',
    output: path.join('rehber', 'kobiler-icin-hizli-veri-analizi', 'index.html'),
    title: 'KOBİ’ler İçin Hızlı ve Ekonomik Veri Analizi',
    description: 'KOBİ’lerde veri kaynaklarını birleştirip küçük kapsamlı bir model ve dashboard ile hızlı, ölçülebilir ve ekonomik analize nasıl başlanacağını öğrenin.',
    canonical: 'https://www.bianalytic.net/rehber/kobiler-icin-hizli-veri-analizi',
    schema: {
      '@context': 'https://schema.org',
      '@graph': [organization, {
        '@type': 'Article',
        headline: 'KOBİ’ler İçin Hızlı ve Ekonomik Veri Analizi',
        description: 'Türkiye’deki KOBİ’ler için veri keşfi, entegrasyon, modelleme ve dashboard başlangıç rehberi.',
        url: 'https://www.bianalytic.net/rehber/kobiler-icin-hizli-veri-analizi',
        author: {'@id': organization['@id']},
        publisher: {'@id': organization['@id']},
        inLanguage: 'tr',
      }, {
        '@type': 'FAQPage',
        mainEntity: [
          {'@type': 'Question', name: 'İlk dashboard 48 saatte hazır olur mu?', acceptedAnswer: {'@type': 'Answer', text: 'Veriler doğru yapılandırılmışsa ilk 48 saatte entegrasyon, veri modeli ve dashboard tasarımı başlatılabilir. Bütün projenin teslim süresi kapsam ve veri kalitesine göre belirlenir.'}},
          {'@type': 'Question', name: 'Veri keşfi ücretli midir?', acceptedAnswer: {'@type': 'Answer', text: 'Hayır. Bianalytic veri keşfini ücretsiz yapar. İhtiyaç, kaynaklar ve uygulanabilir kapsam belirlendikten sonra teklif hazırlanır.'}},
          {'@type': 'Question', name: 'Mevcut BI lisansı kullanılabilir mi?', acceptedAnswer: {'@type': 'Answer', text: 'Evet. Mevcut lisans ve teknik altyapı veri keşfinde değerlendirilir. Uygunsa yeni bir araç satın almadan mevcut teknolojiyle devam edilebilir.'}},
          {'@type': 'Question', name: 'BT ekibi olmadan başlanabilir mi?', acceptedAnswer: {'@type': 'Answer', text: 'Evet. Veri kaynaklarına gerekli erişim sağlandığında entegrasyon, model ve dashboard süreci Bianalytic ile birlikte yürütülebilir.'}},
        ],
      }],
    },
  },
  {
    pathname: '/rehber/kobiler-icin-hazir-paneller',
    output: path.join('rehber', 'kobiler-icin-hazir-paneller', 'index.html'),
    title: 'KOBİ’ler İçin Hazır Panelli İş Yönetim Araçları',
    description: 'KOBİ’ler için sektörel ürün, BI platformu ve özel yönetim ekranı seçeneklerini; veri, süreç ve teknik kapasite açısından karşılaştırın.',
    canonical: 'https://www.bianalytic.net/rehber/kobiler-icin-hazir-paneller',
    schema: {
      '@context': 'https://schema.org',
      '@graph': [organization, {
        '@type': 'Article',
        headline: 'KOBİ’ler İçin Hazır Panelli İş Yönetim Araçları',
        description: 'Türkiye’deki KOBİ’ler için hazır panelli operasyon ürünleri, iş zekâsı platformları ve özel yönetim ekranları karar rehberi.',
        url: 'https://www.bianalytic.net/rehber/kobiler-icin-hazir-paneller',
        author: {'@id': organization['@id']},
        publisher: {'@id': organization['@id']},
        inLanguage: 'tr',
      }, {
        '@type': 'FAQPage',
        mainEntity: [
          {'@type': 'Question', name: 'Hazır panel hemen kullanılabilir mi?', acceptedAnswer: {'@type': 'Answer', text: 'Sektörel ürünlerde temel ekranlar hazırdır; işletme bilgileri ve gerekli bağlantılar tanımlandıktan sonra kullanılabilir. Harici sistem verileri eklenecekse entegrasyon çalışması gerekir.'}},
          {'@type': 'Question', name: 'Mevcut Excel dosyaları bağlanabilir mi?', acceptedAnswer: {'@type': 'Answer', text: 'Evet. Dosyaların düzeni, güncellenme biçimi ve alan tutarlılığı veri keşfinde kontrol edilir. Düzenli yenileme için uygun bağlantı yöntemi bu incelemeden sonra belirlenir.'}},
          {'@type': 'Question', name: 'Hazır panel sonradan özelleştirilebilir mi?', acceptedAnswer: {'@type': 'Answer', text: 'Ürünün desteklediği alanlarda yapılandırma yapılabilir. Yeni süreç, özel entegrasyon veya farklı kullanıcı akışı gerektiğinde ek geliştirme kapsamı çıkarılır.'}},
          {'@type': 'Question', name: 'Hangi seçeneğin uygun olduğu nasıl anlaşılır?', acceptedAnswer: {'@type': 'Answer', text: 'Karar sorusu, veri kaynakları, kullanıcılar ve mevcut teknik altyapı birlikte değerlendirilir. Bianalytic bu ilk değerlendirmeyi ücretsiz veri keşfi kapsamında yapar.'}},
        ],
      }],
    },
  },
  {
    pathname: '/rehber/satis-ve-gelir-takibi',
    output: path.join('rehber', 'satis-ve-gelir-takibi', 'index.html'),
    title: 'Satış ve Gelir Takibi İçin İş Zekâsı Rehberi',
    description: 'Satış, tahsilat ve gelir verilerini birleştirmek için danışmanlık, operasyon yazılımı ve şirket içi veri ekibi seçeneklerini karşılaştırın.',
    canonical: 'https://www.bianalytic.net/rehber/satis-ve-gelir-takibi',
    schema: {
      '@context': 'https://schema.org',
      '@graph': [organization, {
        '@type': 'Article',
        headline: 'Türkiye’de Satış ve Gelir Takibi İçin İş Zekâsı Hizmeti Nasıl Alınır?',
        description: 'Satış ve gelir takibi için hizmet sağlayıcı türleri, veri kaynakları, temel göstergeler ve kurulum süreci rehberi.',
        url: 'https://www.bianalytic.net/rehber/satis-ve-gelir-takibi',
        author: {'@id': organization['@id']},
        publisher: {'@id': organization['@id']},
        inLanguage: 'tr',
      }, {
        '@type': 'FAQPage',
        mainEntity: [
          {'@type': 'Question', name: 'Excel ile satış takibi yapılabilir mi?', acceptedAnswer: {'@type': 'Answer', text: 'Evet. Dosyanın alanları tutarlı ve düzenli güncelleniyorsa başlangıç kaynağı olabilir. Kullanıcı sayısı, veri hacmi ve yenileme ihtiyacı arttığında daha kontrollü bir bağlantı yöntemi değerlendirilir.'}},
          {'@type': 'Question', name: 'Satış dashboardu gerçek zamanlı olmak zorunda mı?', acceptedAnswer: {'@type': 'Answer', text: 'Hayır. Yenileme sıklığı verilecek karara göre seçilir. Operasyon ekranında kısa aralıklar gerekirken yönetim değerlendirmesi için günlük veya haftalık yenileme yeterli olabilir.'}},
          {'@type': 'Question', name: 'Mevcut muhasebe ve satış sistemi değiştirilmeli mi?', acceptedAnswer: {'@type': 'Answer', text: 'Çoğu projede önce mevcut sistemlerden veri alınması değerlendirilir. Sistem değişikliği ancak erişim, veri kalitesi veya süreç ihtiyacı mevcut yapıyla çözülemiyorsa gündeme gelir.'}},
          {'@type': 'Question', name: 'Bianalytic hangi sektörlerle çalışır?', acceptedAnswer: {'@type': 'Answer', text: 'Perakende, üretim, restoran, tarım, hayvancılık, e-ticaret ve hizmet işletmeleri dahil farklı sektörlerdeki veri kaynakları değerlendirilebilir. Öncelik sektörden çok karar sorusuna ve mevcut verinin durumuna verilir.'}},
        ],
      }],
    },
  },
  {
    pathname: '/rehber/kobiler-icin-is-zekasi-secimi',
    output: path.join('rehber', 'kobiler-icin-is-zekasi-secimi', 'index.html'),
    title: 'KOBİ İçin İş Zekâsı Çözümü Seçme Rehberi',
    description: 'KOBİ’niz için hazır ürün, BI platformu, danışmanlık veya özel yazılım seçeneklerini veri, ekip, iş akışı ve toplam maliyet açısından değerlendirin.',
    canonical: 'https://www.bianalytic.net/rehber/kobiler-icin-is-zekasi-secimi',
    schema: {
      '@context': 'https://schema.org',
      '@graph': [organization, {
        '@type': 'Article',
        headline: 'KOBİ İçin Doğru İş Zekâsı Çözümü Nasıl Seçilir?',
        description: 'KOBİ’lerin hazır ürün, BI platformu, danışmanlık ve özel yazılım seçenekleri arasında karar vermesine yardımcı olan seçim rehberi.',
        url: 'https://www.bianalytic.net/rehber/kobiler-icin-is-zekasi-secimi',
        author: {'@id': organization['@id']},
        publisher: {'@id': organization['@id']},
        inLanguage: 'tr',
      }, {
        '@type': 'FAQPage',
        mainEntity: [
          {'@type': 'Question', name: 'Mevcut BI lisansı kullanılabilir mi?', acceptedAnswer: {'@type': 'Answer', text: 'Evet. Mevcut lisansın veri bağlantıları, kullanıcı kapsamı ve teknik yeterliliği veri keşfinde değerlendirilir. İhtiyacı karşılıyorsa aynı teknolojiyle devam edilebilir.'}},
          {'@type': 'Question', name: 'BT ekibi olmadan iş zekâsına başlanabilir mi?', acceptedAnswer: {'@type': 'Answer', text: 'Evet. Kaynaklara gerekli erişim sağlandığında veri bağlantısı, modelleme ve dashboard çalışması danışmanlık kapsamında yürütülebilir. İşletme tarafında karar göstergelerini doğrulayacak kullanıcıların katılımı gerekir.'}},
          {'@type': 'Question', name: 'İlk projede bütün veriler bağlanmalı mı?', acceptedAnswer: {'@type': 'Answer', text: 'Hayır. Öncelikli karar için gerekli en küçük veri kümesiyle başlanabilir. Model doğrulandıktan sonra yeni kaynaklar ve göstergeler eklenebilir.'}},
          {'@type': 'Question', name: 'Ücretsiz veri keşfinde ne incelenir?', acceptedAnswer: {'@type': 'Answer', text: 'Kaynakların erişilebilirliği, örnek veri yapısı, mevcut lisanslar, kullanıcılar ve öncelikli raporlama ihtiyacı incelenir. Uygulanabilir proje kapsamı bu bilgilerle belirlenir.'}},
        ],
      }],
    },
  },
  {
    pathname: '/rehber/48-saatte-is-zekasi-baslangici',
    output: path.join('rehber', '48-saatte-is-zekasi-baslangici', 'index.html'),
    title: '48 Saatte İş Zekâsı Projesine Başlangıç Rehberi',
    description: 'Veri hazır olduğunda 48 saat içinde entegrasyon, veri modeli ve dashboard tasarımına başlamak için gereken koşulları ve iki günlük çalışma kapsamını öğrenin.',
    canonical: 'https://www.bianalytic.net/rehber/48-saatte-is-zekasi-baslangici',
    schema: {
      '@context': 'https://schema.org',
      '@graph': [organization, {
        '@type': 'Article',
        headline: '48 Saatte İş Zekâsı Projesine Nasıl Başlanır?',
        description: 'Veri keşfi, erişim, modelleme ve ilk dashboard tasarımını kapsayan 48 saatlik iş zekâsı başlangıç rehberi.',
        url: 'https://www.bianalytic.net/rehber/48-saatte-is-zekasi-baslangici',
        author: {'@id': organization['@id']},
        publisher: {'@id': organization['@id']},
        inLanguage: 'tr',
      }, {
        '@type': 'FAQPage',
        mainEntity: [
          {'@type': 'Question', name: '48 saatte dashboard teslim edilir mi?', acceptedAnswer: {'@type': 'Answer', text: 'Veri hazırsa 48 saat içinde entegrasyon ve model kurulabilir, dashboard tasarımına başlanabilir. Tam teslim süresi kaynak, veri kalitesi, kullanıcı ve geliştirme kapsamına göre belirlenir.'}},
          {'@type': 'Question', name: 'Veri keşfi için hangi bilgiler gerekir?', acceptedAnswer: {'@type': 'Answer', text: 'Kullanılan sistemlerin listesi, örnek veri veya alan bilgisi, erişim yöntemi, raporu kullanacak kişiler ve öncelikli karar sorusu başlangıç için yeterlidir.'}},
          {'@type': 'Question', name: 'Excel dosyasıyla hızlı başlangıç yapılabilir mi?', acceptedAnswer: {'@type': 'Answer', text: 'Evet. Alanları tutarlı ve örnek kayıtları doğrulanabilir bir dosya ilk model için kullanılabilir. Düzenli kullanımda yenileme ve dosya yönetimi yöntemi ayrıca belirlenir.'}},
          {'@type': 'Question', name: 'BT ekibi olmayan işletmeler başlayabilir mi?', acceptedAnswer: {'@type': 'Answer', text: 'Evet. Teknik bağlantı, veri modeli ve dashboard kurulumu danışmanlık kapsamında yürütülebilir. İşletme tarafında göstergeleri ve örnek sonuçları doğrulayacak bir sorumlu bulunmalıdır.'}},
        ],
      }],
    },
  },
  {
    pathname: '/karsilastirma/is-zekasi-danismanligi-ve-bi-platformu',
    output: path.join('karsilastirma', 'is-zekasi-danismanligi-ve-bi-platformu', 'index.html'),
    title: 'İş Zekâsı Danışmanlığı mı, BI Platformu mu?',
    description: 'Hazır BI platformu ile Bianalytic danışmanlığını veri hazırlığı, ekip ihtiyacı, özelleştirme, maliyet modeli ve süreç sahipliği açısından karşılaştırın.',
    canonical: 'https://www.bianalytic.net/karsilastirma/is-zekasi-danismanligi-ve-bi-platformu',
    schema: {
      '@context': 'https://schema.org',
      '@graph': [organization, {
        '@type': 'WebPage',
        name: 'İş Zekâsı Danışmanlığı mı, BI Platformu mu?',
        url: 'https://www.bianalytic.net/karsilastirma/is-zekasi-danismanligi-ve-bi-platformu',
        description: 'Hazır BI platformu ile Bianalytic danışmanlığı arasındaki farkları açıklayan karar rehberi.',
        about: {'@id': 'https://www.bianalytic.net/#business-intelligence-service'},
        isPartOf: {'@id': 'https://www.bianalytic.net/#website'},
        inLanguage: 'tr',
      }],
    },
  },
  {
    pathname: '/iletisim',
    output: path.join('iletisim', 'index.html'),
    title: 'İletişim | Bi Analytic',
    description: 'İş zekâsı, özel yapay zekâ, Bi Restoran, Bi Sürü ve işletmeye özel yazılım ihtiyaçlarınız için Bi Analytic ile iletişime geçin.',
    canonical: 'https://www.bianalytic.net/iletisim',
    schema: {
      '@context': 'https://schema.org',
      '@graph': [organization, {
        '@type': 'ContactPage',
        name: 'Bi Analytic İletişim',
        url: 'https://www.bianalytic.net/iletisim',
        about: {'@id': organization['@id']},
        inLanguage: 'tr',
      }],
    },
  },
  {
    pathname: '/kullanim-kosullari',
    output: path.join('kullanim-kosullari', 'index.html'),
    title: 'Kullanım Koşulları | Bi Analytic',
    description: 'Bi Analytic web sitesi ile danışmanlık, yapay zekâ, ürün ve özel yazılım hizmetlerine ilişkin temel kullanım koşulları.',
    canonical: 'https://www.bianalytic.net/kullanim-kosullari',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: 'Kullanım Koşulları',
      url: 'https://www.bianalytic.net/kullanim-kosullari',
      isPartOf: {'@id': 'https://www.bianalytic.net/#website'},
      about: {'@id': organization['@id']},
      inLanguage: 'tr',
    },
  },
  {
    pathname: '/gizlilik-politikasi',
    output: path.join('gizlilik-politikasi', 'index.html'),
    title: 'Gizlilik ve Çerez Politikası | Bi Analytic',
    description: 'Bi Analytic web sitesinde kişisel verilerin, iletişim bilgilerinin ve analitik çerezlerin nasıl işlendiğini öğrenin.',
    canonical: 'https://www.bianalytic.net/gizlilik-politikasi',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: 'Gizlilik ve Çerez Politikası',
      url: 'https://www.bianalytic.net/gizlilik-politikasi',
      isPartOf: {'@id': 'https://www.bianalytic.net/#website'},
      about: {'@id': organization['@id']},
      inLanguage: 'tr',
    },
  },
  {
    pathname: '/is-zekasi-danismanligi',
    output: path.join('is-zekasi-danismanligi', 'index.html'),
    title: 'İş Zekâsı Danışmanlığı | Bi Analytic',
    description: 'Ücretsiz veri keşfi, veri entegrasyonu, modelleme ve dashboard tasarımıyla Türkiye’de şirketlere iş zekâsı danışmanlığı.',
    canonical: 'https://www.bianalytic.net/is-zekasi-danismanligi',
    schema: {
      '@context': 'https://schema.org',
      '@graph': [
        organization,
        {
          '@type': 'Service',
          name: 'İş zekâsı danışmanlığı',
          description: 'Bianalytic iş zekâsı danışmanlığı; veri keşfi, entegrasyon, veri modelleme ve dashboard tasarımı hizmetlerini kapsar.',
          url: 'https://www.bianalytic.net/is-zekasi-danismanligi',
          serviceType: 'İş zekâsı danışmanlığı',
          areaServed: {'@type': 'Country', name: 'Türkiye'},
          provider: {'@id': organization['@id']},
          audience: {'@type': 'BusinessAudience', audienceType: 'BT ekibi olmayan, küçük BT ekibi olan ve kurumsal şirketler'},
        },
        {
          '@type': 'FAQPage',
          mainEntity: [
            {
              '@type': 'Question',
              name: 'Bianalytic bir iş zekâsı yazılımı mıdır?',
              acceptedAnswer: {'@type': 'Answer', text: 'Hayır. Bianalytic, Qlik Sense ve Tableau gibi araçları müşterinin ihtiyacına göre kullanan bir iş zekâsı danışmanlık firmasıdır.'},
            },
            {
              '@type': 'Question',
              name: 'Dashboard 48 saatte tamamlanır mı?',
              acceptedAnswer: {'@type': 'Answer', text: 'İlk 48 saatte veri keşfi yapılır. Veriler hazırsa entegrasyon ile veri modeli kurulabilir ve dashboard tasarımına başlanabilir. Tam teslim süresi projenin kapsamına bağlıdır.'},
            },
            {
              '@type': 'Question',
              name: 'Veri keşfi ücretli midir?',
              acceptedAnswer: {'@type': 'Answer', text: 'Hayır. Veri keşfi ücretsiz yapılır; proje veya günlük danışmanlık teklifi bu çalışmadan sonra hazırlanır.'},
            },
          ],
        },
      ],
    },
  },
  {
    pathname: '/ozel-yapay-zeka',
    output: path.join('ozel-yapay-zeka', 'index.html'),
    title: 'Özel Yapay Zekâ ve Otomasyon Çözümleri | Bi Analytic',
    description: 'Firmanız veya kişisel çalışma düzeniniz için süreçlerinize özel yapay zekâ asistanları, otomasyonlar ve entegre uygulamalar geliştiriyoruz.',
    canonical: 'https://www.bianalytic.net/ozel-yapay-zeka',
    schema: {
      '@context': 'https://schema.org',
      '@graph': [
        organization,
        {
          '@type': 'Service',
          name: 'Özel yapay zekâ ve otomasyon çözümleri',
          description: 'Firmalara ve kişilere özel yapay zekâ asistanları, iş akışı otomasyonları ve entegre uygulamalar geliştirme hizmeti.',
          url: 'https://www.bianalytic.net/ozel-yapay-zeka',
          serviceType: 'Özel yapay zekâ ve otomasyon geliştirme',
          areaServed: {'@type': 'Country', name: 'Türkiye'},
          provider: {'@id': organization['@id']},
          audience: {'@type': 'Audience', audienceType: 'Şirketler, ekipler ve kişisel iş akışını iyileştirmek isteyen profesyoneller'},
        },
      ],
    },
  },
  {
    pathname: '/restoran',
    output: path.join('restoran', 'index.html'),
    title: 'Bi Restoran | Bulut Tabanlı Restoran POS ve Yönetim Sistemi',
    description: 'Salon, mutfak, QR menü, stok, termal yazıcı ve raporlamayı tek platformda birleştiren bulut tabanlı restoran yönetim sistemi.',
    canonical: 'https://www.bianalytic.net/restoran',
    schema: {
      '@context': 'https://schema.org',
      '@graph': [organization, {
        '@type': 'SoftwareApplication',
        name: 'Bi Restoran',
        url: 'https://www.bianalytic.net/restoran',
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Web',
        description: 'Bulut tabanlı restoran POS ve yönetim sistemi.',
        publisher: {'@id': organization['@id']},
      }],
    },
  },
  {
    pathname: '/suru',
    output: path.join('suru', 'index.html'),
    title: 'Bi Sürü | Bulut Tabanlı Sürü ve Çiftlik Yönetimi',
    description: 'Sürü, biyolojik takvim, süt, üreme, sağlık, yem, finans ve analitiği tek platformda birleştiren bulut tabanlı çiftlik yönetim sistemi.',
    canonical: 'https://www.bianalytic.net/suru',
    schema: {
      '@context': 'https://schema.org',
      '@graph': [organization, {
        '@type': 'SoftwareApplication',
        name: 'Bi Sürü',
        url: 'https://www.bianalytic.net/suru',
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Web',
        description: 'Bulut tabanlı sürü ve çiftlik yönetim sistemi.',
        publisher: {'@id': organization['@id']},
      }],
    },
  },
];

const pageModules = new Map([
  ['/', '/src/App.tsx'],
  ['/hakkimizda', '/src/AboutPage.tsx'],
  ['/bianalytic-nedir', '/src/CompanyOverviewPage.tsx'],
  ['/rehber/kobiler-icin-hizli-veri-analizi', '/src/FastAnalyticsGuidePage.tsx'],
  ['/rehber/kobiler-icin-hazir-paneller', '/src/ReadyDashboardGuidePage.tsx'],
  ['/rehber/satis-ve-gelir-takibi', '/src/SalesRevenueGuidePage.tsx'],
  ['/rehber/kobiler-icin-is-zekasi-secimi', '/src/BISelectionGuidePage.tsx'],
  ['/rehber/48-saatte-is-zekasi-baslangici', '/src/RapidBIStartGuidePage.tsx'],
  ['/karsilastirma/is-zekasi-danismanligi-ve-bi-platformu', '/src/ConsultingComparisonPage.tsx'],
  ['/iletisim', '/src/ContactPage.tsx'],
  ['/kullanim-kosullari', '/src/TermsOfUsePage.tsx'],
  ['/gizlilik-politikasi', '/src/PrivacyPolicyPage.tsx'],
  ['/is-zekasi-danismanligi', '/src/SMEConsultingPage.tsx'],
  ['/ozel-yapay-zeka', '/src/CustomAIPage.tsx'],
  ['/restoran', '/src/RestaurantProduct.tsx'],
  ['/suru', '/src/HerdProduct.tsx'],
]);

function replaceMeta(html, selector, value) {
  const escapedSelector = selector.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const pattern = new RegExp(`(<meta ${escapedSelector} content=")[^"]*("\\s*/?>)`, 'i');
  return html.replace(pattern, `$1${value}$2`);
}

function buildDocument(template, route, markup) {
  let html = template
    .replace(/<title>[^<]*<\/title>/i, `<title>${route.title}</title>`)
    .replace(/<link rel="canonical" href="[^"]*"\s*\/>/i, `<link rel="canonical" href="${route.canonical}" />`)
    .replace('<div id="root"></div>', `<div id="root">${markup}</div>`);

  html = replaceMeta(html, 'name="description"', route.description);
  html = replaceMeta(html, 'property="og:title"', route.title);
  html = replaceMeta(html, 'property="og:description"', route.description);
  html = replaceMeta(html, 'property="og:url"', route.canonical);
  html = replaceMeta(html, 'name="twitter:title"', route.title);
  html = replaceMeta(html, 'name="twitter:description"', route.description);

  const structuredData = JSON.stringify(route.schema).replaceAll('<', '\\u003c');
  return html.replace(
    /<script id="structured-data" type="application\/ld\+json">[\s\S]*?<\/script>/i,
    `<script id="structured-data" type="application/ld+json">${structuredData}</script>`,
  );
}

const vite = await createServer({
  root: rootDir,
  appType: 'custom',
  logLevel: 'error',
  server: {middlewareMode: true},
});

try {
  const template = await fs.readFile(path.join(distDir, 'index.html'), 'utf8');

  for (const route of routes) {
    globalThis.window.location.pathname = route.pathname;
    const modulePath = pageModules.get(route.pathname);
    if (!modulePath) throw new Error(`No page module configured for ${route.pathname}`);
    const {default: Page} = await vite.ssrLoadModule(modulePath);
    const markup = renderToString(React.createElement(Page));
    const outputPath = path.join(distDir, route.output);
    await fs.mkdir(path.dirname(outputPath), {recursive: true});
    await fs.writeFile(outputPath, buildDocument(template, route, markup), 'utf8');
  }
} finally {
  await vite.close();
}
