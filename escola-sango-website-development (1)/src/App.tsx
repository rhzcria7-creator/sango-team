import { useState, useEffect } from "react";
import { HashRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import { Navbar, Footer, CookieConsent, CustomCursor, Loader, WhatsAppFloat } from "./components/Layout";
import SangoBot from "./components/SangoBot";
import Home from "./pages/Home";
import {
  ModalidadesPage,
  ModalidadeDetail,
  ConquistasPage,
  EquipePage,
  HorariosPage,
  GaleriaPage,
  BlogPage,
  EventosPage,
  LocalizacaoPage,
  ContatoPage,
  LojaPage,
  SobrePage,
  AlunoPage,
  PrivacidadePage,
  NotFound,
} from "./pages/Pages";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as any });
  }, [pathname]);
  return null;
}

function AppContent() {
  const [loading, setLoading] = useState(true);
  const [loaded, setLoaded] = useState(false);

  // Exibe o loader apenas na primeira montagem do navegador
  useEffect(() => {
    const seen = sessionStorage.getItem("sangao-loaded");
    if (seen) {
      setLoading(false);
      setLoaded(true);
    }
  }, []);

  return (
    <div className="bg-deep-black text-gray-100 min-h-screen selection:bg-sangao-red selection:text-white">
      <AnimatePresence>
        {loading && !loaded && (
          <Loader
            onDone={() => {
              setLoading(false);
              setLoaded(true);
              sessionStorage.setItem("sangao-loaded", "1");
            }}
          />
        )}
      </AnimatePresence>

      {!loading && (
        <>
          <CustomCursor />
          <ScrollToTop />
          <Navbar />

          <main className="min-h-screen">
            <AnimatePresence mode="wait">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/modalidades" element={<ModalidadesPage />} />
                <Route path="/modalidades/:id" element={<ModalidadeDetail />} />
                <Route path="/conquistas" element={<ConquistasPage />} />
                <Route path="/equipe" element={<EquipePage />} />
                <Route path="/horarios" element={<HorariosPage />} />
                <Route path="/galeria" element={<GaleriaPage />} />
                <Route path="/blog" element={<BlogPage />} />
                <Route path="/eventos" element={<EventosPage />} />
                <Route path="/localizacao" element={<LocalizacaoPage />} />
                <Route path="/contato" element={<ContatoPage />} />
                <Route path="/loja" element={<LojaPage />} />
                <Route path="/sobre" element={<SobrePage />} />
                <Route path="/aluno" element={<AlunoPage />} />
                <Route path="/privacidade" element={<PrivacidadePage />} />
                <Route path="/termos" element={<PrivacidadePage />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </AnimatePresence>
          </main>

          <Footer />
          <SangoBot />
          <WhatsAppFloat />
          <CookieConsent />
        </>
      )}
    </div>
  );
}

export default function App() {
  return (
    <HashRouter>
      <AppContent />
    </HashRouter>
  );
}
