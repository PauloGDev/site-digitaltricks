import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
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

const App = () => {
  const location = useLocation();
  const isBadapplePage = location.pathname === '/badapple';

  return (
    <div className="bg-black text-white min-h-screen">
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
    </div>
  );
};

export default App;