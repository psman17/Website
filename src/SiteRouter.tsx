import React, { lazy, Suspense } from 'react';

const HomePage = lazy(() => import('./App'));
const AboutPage = lazy(() => import('./AboutPage'));
const FastAnalyticsGuidePage = lazy(() => import('./FastAnalyticsGuidePage'));
const ReadyDashboardGuidePage = lazy(() => import('./ReadyDashboardGuidePage'));
const SalesRevenueGuidePage = lazy(() => import('./SalesRevenueGuidePage'));
const BISelectionGuidePage = lazy(() => import('./BISelectionGuidePage'));
const RapidBIStartGuidePage = lazy(() => import('./RapidBIStartGuidePage'));
const ConsultingComparisonPage = lazy(() => import('./ConsultingComparisonPage'));
const ContactPage = lazy(() => import('./ContactPage'));
const TermsOfUsePage = lazy(() => import('./TermsOfUsePage'));
const PrivacyPolicyPage = lazy(() => import('./PrivacyPolicyPage'));
const SMEConsultingPage = lazy(() => import('./SMEConsultingPage'));
const CustomAIPage = lazy(() => import('./CustomAIPage'));
const RestaurantProduct = lazy(() => import('./RestaurantProduct'));
const HerdProduct = lazy(() => import('./HerdProduct'));

const routes = [
  ['/hakkimizda', AboutPage],
  ['/rehber/kobiler-icin-hizli-veri-analizi', FastAnalyticsGuidePage],
  ['/rehber/kobiler-icin-hazir-paneller', ReadyDashboardGuidePage],
  ['/rehber/satis-ve-gelir-takibi', SalesRevenueGuidePage],
  ['/rehber/kobiler-icin-is-zekasi-secimi', BISelectionGuidePage],
  ['/rehber/48-saatte-is-zekasi-baslangici', RapidBIStartGuidePage],
  ['/karsilastirma/is-zekasi-danismanligi-ve-bi-platformu', ConsultingComparisonPage],
  ['/iletisim', ContactPage],
  ['/kullanim-kosullari', TermsOfUsePage],
  ['/gizlilik-politikasi', PrivacyPolicyPage],
  ['/is-zekasi-danismanligi', SMEConsultingPage],
  ['/ozel-yapay-zeka', CustomAIPage],
  ['/restoran', RestaurantProduct],
  ['/suru', HerdProduct],
] as const;

function loadingScreen() {
  return <div className="min-h-screen bg-slate-50" aria-label="Sayfa yükleniyor" />;
}

export default function SiteRouter() {
  const pathname = window.location.pathname.replace(/\/$/, '') || '/';
  const route = routes.find(([path]) => pathname === path);
  const Page = route?.[1] ?? HomePage;

  return <Suspense fallback={loadingScreen()}><Page /></Suspense>;
}
