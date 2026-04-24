import React, { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ToastContainer } from 'react-toastify';

import Home from './pages/Home';
import About from './pages/About';
import Website from './pages/Website';
import Design from './pages/Design';
import Error404 from './pages/Error404';
import Badapple from './pages/badapple';

import Footer from './components/Footer';
import ScrollToTop from './context/ScrollToTop';
import FadeAnimate from './context/FadeAnimate';
import EcommerceVendas from './components/websites/EcommerceVendas';
import Navbar from './components/NavbBar';
import SiteLoader from './components/SiteLoader';

const App = () => {
  const location = useLocation();
  const isBadapplePage = location.pathname === '/badapple';
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const minLoadingTime = 1100;
    const startTime = performance.now();
    let loadingTimer;

    const finishLoading = () => {
      const elapsed = performance.now() - startTime;
      const remainingTime = Math.max(0, minLoadingTime - elapsed);

      loadingTimer = window.setTimeout(() => {
        setIsLoading(false);
      }, remainingTime);
    };

    if (document.readyState === 'complete') {
      finishLoading();
    } else {
      window.addEventListener('load', finishLoading, { once: true });
    }

    return () => {
      window.removeEventListener('load', finishLoading);
      window.clearTimeout(loadingTimer);
    };
  }, []);

  return (
    <>
      <AnimatePresence>{isLoading && <SiteLoader />}</AnimatePresence>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 0.45, ease: 'easeOut' }}
        className="bg-black text-white min-h-screen"
      >
        {!isBadapplePage && <Navbar />}

        <ToastContainer />
        <ScrollToTop />
        <FadeAnimate />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<About />} />
          <Route path="/websites" element={<Website />} />
          <Route path="/ecommerce" element={<EcommerceVendas />} />
          <Route path="/design" element={<Design />} />
          <Route path="/badapple" element={<Badapple />} />
          <Route path="*" element={<Error404 />} />
        </Routes>

        {!isBadapplePage && (
          <div className="w-full">
            <Footer />
          </div>
        )}
      </motion.div>
    </>
  );
};

export default App;
