import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import SiteRouter from './SiteRouter.tsx';
import './index.css';

const root = document.getElementById('root')!;
createRoot(root).render(
  <StrictMode>
    <SiteRouter />
  </StrictMode>,
);
