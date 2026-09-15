import {StrictMode} from 'react';
import type {ComponentType} from 'react';
import {createRoot, hydrateRoot} from 'react-dom/client';
import './index.css';

const root = document.getElementById('root')!;

type PageModule = {default: ComponentType};
type PageLoader = () => Promise<PageModule>;

const routes: Record<string, PageLoader> = {
  '/': () => import('./App'),
  '/hakkimizda': () => import('./AboutPage'),
  '/rehber/kobiler-icin-hizli-veri-analizi': () => import('./FastAnalyticsGuidePage'),
  '/rehber/kobiler-icin-hazir-paneller': () => import('./ReadyDashboardGuidePage'),
  '/rehber/satis-ve-gelir-takibi': () => import('./SalesRevenueGuidePage'),
  '/rehber/kobiler-icin-is-zekasi-secimi': () => import('./BISelectionGuidePage'),
  '/rehber/48-saatte-is-zekasi-baslangici': () => import('./RapidBIStartGuidePage'),
  '/karsilastirma/is-zekasi-danismanligi-ve-bi-platformu': () => import('./ConsultingComparisonPage'),
  '/iletisim': () => import('./ContactPage'),
  '/kullanim-kosullari': () => import('./TermsOfUsePage'),
  '/gizlilik-politikasi': () => import('./PrivacyPolicyPage'),
  '/is-zekasi-danismanligi': () => import('./SMEConsultingPage'),
  '/ozel-yapay-zeka': () => import('./CustomAIPage'),
  '/restoran': () => import('./RestaurantProduct'),
  '/suru': () => import('./HerdProduct'),
};

async function bootstrap() {
  const pathname = window.location.pathname.replace(/\/$/, '') || '/';
  const pageModule = await (routes[pathname] ?? routes['/'])();
  const Page = pageModule.default;
  const app = <StrictMode><Page /></StrictMode>;

  if (root.hasChildNodes()) {
    hydrateRoot(root, app);
    return;
  }

  createRoot(root).render(app);
}

void bootstrap();
