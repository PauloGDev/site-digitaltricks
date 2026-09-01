import { lazy, Suspense } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ScrollToTop from "./context/ScrollToTop";

const Home = lazy(() => import("./pages/Home"));
const Solutions = lazy(() => import("./pages/Solutions"));
const SolutionDetail = lazy(() => import("./pages/SolutionDetail"));
const Audiences = lazy(() => import("./pages/Audiences"));
const AudienceDetail = lazy(() => import("./pages/AudienceDetail"));
const DealershipSystem = lazy(() => import("./pages/DealershipSystem"));
const Method = lazy(() => import("./pages/Method"));
const About = lazy(() => import("./pages/About"));
const Diagnosis = lazy(() => import("./pages/Diagnosis"));
const LegalPage = lazy(() => import("./pages/LegalPage"));
const Error404 = lazy(() => import("./pages/Error404"));
const Badapple = lazy(() => import("./pages/Badapple"));
const GetStickBugged = lazy(() => import("./pages/GetStickBugged"));

const RouteFallback = () => (
  <div className="grid min-h-[70svh] place-items-center bg-black text-white">
    <div className="flex items-center gap-3 text-xs uppercase tracking-[0.22em] text-white/[0.40]">
      <span className="h-2 w-2 animate-pulse rounded-full bg-violet-400" />
      Carregando experiência
    </div>
  </div>
);

const App = () => {
  const location = useLocation();
  const immersiveRoute = ["/badapple", "/s"].includes(location.pathname);

  return (
    <div className="min-h-screen bg-black text-white">
      {!immersiveRoute && <Navbar />}
      <ScrollToTop />
      <ToastContainer theme="dark" position="bottom-right" />

      <Suspense fallback={<RouteFallback />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/solucoes" element={<Solutions />} />
          <Route path="/solucoes/:slug" element={<SolutionDetail />} />
          <Route path="/para-seu-negocio" element={<Audiences />} />
          <Route path="/para-seu-negocio/:slug" element={<AudienceDetail />} />
          <Route path="/sistema-concessionarias" element={<DealershipSystem />} />
          <Route path="/metodo" element={<Method />} />
          <Route path="/projetos" element={<Navigate to="/" replace />} />
          <Route path="/sobre" element={<About />} />
          <Route path="/diagnostico" element={<Diagnosis />} />
          <Route path="/privacidade" element={<LegalPage type="privacidade" />} />
          <Route path="/cookies" element={<LegalPage type="cookies" />} />
          <Route path="/termos" element={<LegalPage type="termos" />} />

          <Route path="/websites" element={<Navigate to="/solucoes/landing-pages-sites" replace />} />
          <Route path="/ecommerce" element={<Navigate to="/solucoes/landing-pages-sites" replace />} />
          <Route path="/solucoes/sites" element={<Navigate to="/solucoes/landing-pages-sites" replace />} />
          <Route path="/design" element={<Navigate to="/solucoes/criativos" replace />} />
          <Route path="/social-media" element={<Navigate to="/solucoes" replace />} />
          <Route path="/solucoes/social-media" element={<Navigate to="/solucoes" replace />} />
          <Route path="/marketing" element={<Navigate to="/solucoes/posicionamento" replace />} />
          <Route path="/solucoes/marketing" element={<Navigate to="/solucoes/posicionamento" replace />} />
          <Route path="/trafego-pago" element={<Navigate to="/solucoes/trafego-pago" replace />} />

          <Route path="/badapple" element={<Badapple />} />
          <Route path="/s" element={<GetStickBugged />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </Suspense>

      {!immersiveRoute && <Footer />}
    </div>
  );
};

export default App;
