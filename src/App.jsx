import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import './styles/App.scss'
import FirstPage from './views/FirstPage.jsx'
import Navigation from './components/Navigation.jsx'
import Button from './components/Button.jsx'
import MyProjects from './views/MyProjects.jsx'
import Scroll from './components/Scroll.jsx'
import TechPage from './views/TechPage.jsx'
import { Provider } from "./components/ui/provider.jsx";
import AboutPage from './views/AboutPage';
import ResumePage from './views/ResumePage.jsx';
import ContactPage from './views/ContactPage.jsx';
import OrcamentoPage from './views/OrcamentoPage.jsx';
import ProjectDetailsPage from './views/ProjectDetailsPage.jsx';
import ShiftSyncProjectPage from './views/ShiftSyncProjectPage.jsx';
import TailTrackProjectPage from './views/TailTrackProjectPage.jsx';
import MatrixBackground from './components/MatrixBackground.jsx';
import { useTranslation } from 'react-i18next';
import LanguageSelector from './components/LanguageSelector.jsx';
import { getMotionSafeScrollBehavior } from './utils/motion.js';

const MotionPage = motion.div;

// Novo componente para a página Home que encapsula o scroll
function HomePage() {
  return (
    <>
      <div className="snap-container">
        <section id="home" className="area area-1">
          <FirstPage />
        </section>
        <section id="projects" className="area area-2">
          <MyProjects />
        </section>
        <section id="tech" className="area area-3">
          <TechPage />
        </section>
        <section id="about" className="area area-4">
          <AboutPage />
        </section>
      </div>
      <Scroll />
    </>
  );
}

// Componente que lida com Header e Rotas
function MainLayout() {
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useTranslation();

  const handleNavigation = (path) => {
    if (path === '/') {
        if (location.pathname === '/') {
            // Se já estiver na Home, faça o scroll suave para o topo
            document.querySelector('.snap-container')?.scrollTo({ top: 0, behavior: getMotionSafeScrollBehavior() });
        } else {
            // Vai pra Home normalmente
            navigate(path);
        }
    } else {
        navigate(path);
    }
  };

  return (
    <>
      <MatrixBackground />
      <header className="site-header">
        <div className="header-inner">
        <button className="logo" type="button" onClick={() => handleNavigation('/')} aria-label={t('header.nav_home')}>
          <span className="logo-mark" aria-hidden="true">C</span>
          <span>{t('header.logo')}</span>
        </button>
        <Navigation 
          items={[
            { name: t('header.nav_home'), path: '/' }, 
            { name: t('header.nav_resume'), path: '/resume' }, 
            { name: t('header.nav_contact'), path: '/contact' },
            { name: t('header.btn_budget'), path: '/orcamento', mobileOnly: true }
          ]} 
          onNavigate={handleNavigation}
        />
        <Flex className="header-tools" align="center">
          <LanguageSelector />
          <div className="header-action">
            <Button texto={t('header.btn_budget')} onClick={() => handleNavigation('/orcamento')} />
          </div>
        </Flex>
        </div>
      </header>

      {/* Roteamento das páginas independentes */}
      <Box as="main" h="100%" w="100%" position="relative" zIndex={1} overflow="hidden">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<PageWrapper><HomePage /></PageWrapper>} />
            <Route path="/resume" element={<PageWrapper><Box className="route-page"><ResumePage /></Box></PageWrapper>} />
            <Route path="/contact" element={<PageWrapper><Box className="route-page"><ContactPage /></Box></PageWrapper>} />
            <Route path="/orcamento" element={<PageWrapper><Box className="route-page"><OrcamentoPage /></Box></PageWrapper>} />
            <Route path="/project/shiftsync" element={<PageWrapper><ShiftSyncProjectPage /></PageWrapper>} />
            <Route path="/project/tailtrack" element={<PageWrapper><TailTrackProjectPage /></PageWrapper>} />
            <Route path="/project/:id" element={<PageWrapper><Box className="route-page"><ProjectDetailsPage /></Box></PageWrapper>} />
          </Routes>
        </AnimatePresence>
      </Box>
    </>
  );
}

// Wrapper para as transições de página
function PageWrapper({ children }) {
  const reduceMotion = useReducedMotion();

  return (
    <MotionPage
      initial={{ opacity: 0, y: reduceMotion ? 0 : 14 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: reduceMotion ? 0 : -14 }}
      transition={{ duration: reduceMotion ? 0 : 0.3, ease: "easeOut" }}
      style={{ width: "100%", height: "100%" }}
    >
      {children}
    </MotionPage>
  );
}

import { Box, Flex } from '@chakra-ui/react'; // Import necessário para o Layout

function App() {
  return (
    <Provider>
      <Router>
        <MainLayout />
      </Router>
    </Provider>
  )
}

export default App
