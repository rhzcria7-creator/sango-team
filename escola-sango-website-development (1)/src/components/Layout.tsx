import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  Phone,
  Mail,
  MapPin,
  Shield,
} from "lucide-react";
import { ACADEMY } from "../data";

/* ========================================================================
   SVGs INLINE DE REDES SOCIAIS
   ======================================================================== */

const InstagramIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);
const FacebookIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);
const YoutubeIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
  </svg>
);

/* ========================================================================
   NAVBAR
   ======================================================================== */

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  const links = [
    { to: "/", label: "Início" },
    { to: "/modalidades", label: "Modalidades" },
    { to: "/conquistas", label: "Conquistas" },
    { to: "/equipe", label: "Equipe" },
    { to: "/horarios", label: "Horários & Planos" },
    { to: "/galeria", label: "Galeria" },
    { to: "/blog", label: "Blog" },
    { to: "/eventos", label: "Eventos" },
    { to: "/loja", label: "Loja Oficial" },
    { to: "/sobre", label: "Sobre Nós" },
    { to: "/contato", label: "Contato" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-deep-black/90 backdrop-blur-xl border-b border-border-gray"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative w-11 h-11 rounded-xl bg-gradient-to-br from-sangao-red to-sangao-red-dark flex items-center justify-center font-display text-white text-2xl font-bold shadow-lg group-hover:shadow-sangao-red/50 transition-shadow">
              S
              <span className="absolute inset-0 rounded-xl border border-white/20" />
            </div>
            <div className="hidden sm:block">
              <div className="font-display uppercase text-lg leading-tight tracking-wider text-white">
                Escola Sangão
              </div>
              <div className="text-[10px] font-mono-tech uppercase tracking-[0.2em] text-sangao-red">
                SANGÃO TEAM • EST. 2009
              </div>
            </div>
          </Link>

          {/* Links Desktop */}
          <nav className="hidden lg:flex items-center gap-1">
            {links.slice(0, 9).map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === "/"}
                className={({ isActive }) =>
                  `px-3 py-2 text-sm font-semibold uppercase tracking-wider transition-colors relative ${
                    isActive
                      ? "text-sangao-red"
                      : "text-gray-300 hover:text-white"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {l.label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-underline"
                        className="absolute -bottom-0.5 left-3 right-3 h-0.5 bg-sangao-red"
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            {/* CTA */}
            <Link
              to="/contato"
              className="hidden sm:inline-flex bg-sangao-red hover:bg-sangao-red-light text-white px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-colors shadow-lg shadow-sangao-red/25 hover:shadow-sangao-red-light/45 hover:-translate-y-0.5"
            >
              Aula Experimental Grátis
            </Link>

            {/* Mobile toggle */}
            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden p-2 text-white hover:text-sangao-red transition-colors"
              aria-label="Menu principal"
            >
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-35 lg:hidden"
          >
            <div className="absolute inset-0 bg-black/80 backdrop-blur-md" onClick={() => setOpen(false)} />
            <motion.nav
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 220 }}
              className="absolute top-0 right-0 h-full w-80 max-w-full bg-deep-black border-l border-border-gray pt-24 px-6 overflow-y-auto flex flex-col justify-between pb-8"
            >
              <div className="space-y-1">
                {links.map((l) => (
                  <NavLink
                    key={l.to}
                    to={l.to}
                    end={l.to === "/"}
                    className={({ isActive }) =>
                      `block py-3 px-4 border-l-3 text-lg font-display uppercase tracking-wider transition-all ${
                        isActive
                          ? "border-sangao-red text-sangao-red bg-sangao-red/5 rounded-r-xl"
                          : "border-transparent text-gray-300 hover:text-white hover:border-sangao-red/40"
                      }`
                    }
                  >
                    {l.label}
                  </NavLink>
                ))}
              </div>
              <div className="pt-8 border-t border-border-gray space-y-4">
                <Link
                  to="/contato"
                  className="block bg-sangao-red hover:bg-sangao-red-light text-white px-4 py-3.5 rounded-full text-center font-bold uppercase tracking-wider transition-colors shadow-lg shadow-sangao-red/20"
                >
                  Aula Experimental Grátis
                </Link>
                <div className="flex justify-center gap-4 text-gray-400">
                  <a href={ACADEMY.instagram} target="_blank" rel="noopener noreferrer"><InstagramIcon size={20} /></a>
                  <a href={ACADEMY.facebook} target="_blank" rel="noopener noreferrer"><FacebookIcon size={20} /></a>
                  <a href={ACADEMY.youtube} target="_blank" rel="noopener noreferrer"><YoutubeIcon size={20} /></a>
                </div>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

/* ========================================================================
   FOOTER
   ======================================================================== */

export function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const links = [
    { title: "Modalidades", items: [
      { label: "Jiu-Jitsu", to: "/modalidades/jiu-jitsu" },
      { label: "Muay Thai", to: "/modalidades/muay-thai" },
      { label: "MMA", to: "/modalidades/mma" },
      { label: "Defesa Pessoal", to: "/modalidades/defesa-pessoal" },
    ]},
    { title: "Navegação", items: [
      { label: "Sobre Nós", to: "/sobre" },
      { label: "Nossa Equipe", to: "/equipe" },
      { label: "Horários & Planos", to: "/horarios" },
      { label: "Eventos", to: "/eventos" },
      { label: "Blog Oficial", to: "/blog" },
      { label: "Galeria", to: "/galeria" },
    ]},
    { title: "Legal & Termos", items: [
      { label: "Política de Privacidade", to: "/privacidade" },
      { label: "Termos de Uso", to: "/termos" },
      { label: "Diretrizes LGPD", to: "/privacidade" },
      { label: "Contato Oficial", to: "/contato" },
    ]},
  ];

  return (
    <footer className="bg-[#050505] border-t border-border-gray relative overflow-hidden">
      {/* Decorative kanji */}
      <div className="absolute top-0 right-0 kanji-huge text-[30rem] leading-none text-white/[0.02] pointer-events-none select-none">
        柔
      </div>

      {/* Newsletter */}
      <div className="bg-gradient-to-r from-sangao-red-dark via-sangao-red to-sangao-red-dark py-12">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="font-display uppercase text-2xl md:text-3xl text-white">
              Entre para a Família Sangão
            </h3>
            <p className="text-white/85 mt-2 text-sm md:text-base">
              Receba novidades, dicas técnicas de treino e promoções exclusivas da academia.
            </p>
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (email) setSubscribed(true);
            }}
            className="flex gap-2"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="seu@email.com"
              required
              className="flex-1 bg-white/10 border border-white/20 rounded-full px-5 py-3 text-white placeholder-white/50 focus:outline-none focus:border-white transition-all text-sm"
            />
            <button
              type="submit"
              className="bg-deep-black hover:bg-black text-white px-8 py-3 rounded-full font-bold uppercase text-xs tracking-wider transition-colors shrink-0"
            >
              {subscribed ? "✓ Inscrito!" : "Inscrever"}
            </button>
          </form>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-16 grid md:grid-cols-2 lg:grid-cols-5 gap-10">
        {/* Brand */}
        <div className="lg:col-span-2">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-sangao-red to-sangao-red-dark flex items-center justify-center font-display text-white text-2xl font-bold">
              S
            </div>
            <div>
              <div className="font-display uppercase text-2xl text-white">Escola Sangão</div>
              <div className="text-[10px] font-mono-tech uppercase tracking-[0.3em] text-sangao-red">
                SANGÃO TEAM • EST. 2009
              </div>
            </div>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-sm">
            Forja Campeões. Forja Caráter. A mais tradicional escola de artes marciais de Sete Lagoas/MG sob comando do Professor Marcus Sangão.
          </p>

          {/* Contato */}
          <div className="space-y-3 text-sm">
            <a
              href={ACADEMY.googleMaps}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-3 text-gray-400 hover:text-white transition-colors"
            >
              <MapPin size={16} className="shrink-0 mt-0.5 text-sangao-red" />
              <span>{ACADEMY.address}</span>
            </a>
            <a
              href={`https://wa.me/${ACADEMY.whatsapp}?text=Ol%C3%A1!%20Gostaria%20de%20mais%20informa%C3%A7%C3%B5es.`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors"
            >
              <Phone size={16} className="text-sangao-red" />
              <span>{ACADEMY.phone}</span>
            </a>
            <a
              href={`mailto:${ACADEMY.email}`}
              className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors"
            >
              <Mail size={16} className="text-sangao-red" />
              <span>{ACADEMY.email}</span>
            </a>
          </div>
        </div>

        {/* Link columns */}
        {links.map((col) => (
          <div key={col.title}>
            <h4 className="font-display uppercase text-white tracking-wider mb-4 text-lg">
              {col.title}
            </h4>
            <ul className="space-y-2.5">
              {col.items.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.to}
                    className="text-sm text-gray-400 hover:text-sangao-red transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom */}
      <div className="border-t border-border-gray">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500 text-center md:text-left">
            © 2026 Escola Sangão • Sangão Team Academias LTDA • CNPJ 00.000.000/0001-00 • Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-3">
            <a
              href={ACADEMY.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram Oficial"
              className="w-10 h-10 rounded-full bg-charcoal hover:bg-sangao-red flex items-center justify-center text-gray-400 hover:text-white transition-colors"
            >
              <InstagramIcon size={18} />
            </a>
            <a
              href={ACADEMY.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook Oficial"
              className="w-10 h-10 rounded-full bg-charcoal hover:bg-sangao-red flex items-center justify-center text-gray-400 hover:text-white transition-colors"
            >
              <FacebookIcon size={18} />
            </a>
            <a
              href={ACADEMY.youtube}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube Oficial"
              className="w-10 h-10 rounded-full bg-charcoal hover:bg-sangao-red flex items-center justify-center text-gray-400 hover:text-white transition-colors"
            >
              <YoutubeIcon size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ========================================================================
   COOKIE CONSENT — LGPD
   ======================================================================== */

export function CookieConsent() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      const t = setTimeout(() => setShow(true), 2000);
      return () => clearTimeout(t);
    }
  }, []);

  const accept = (level: "all" | "essential") => {
    localStorage.setItem("cookie-consent", level);
    setShow(false);
  };

  if (!show) return null;

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:bottom-6 md:max-w-md z-45 glass rounded-3xl p-6 shadow-2xl border border-border-gray"
    >
      <div className="flex items-start gap-3 mb-4">
        <Shield className="text-sangao-red shrink-0 mt-0.5" size={22} />
        <div>
          <h3 className="font-display uppercase text-white text-lg tracking-wider">Privacidade & Cookies</h3>
          <p className="text-xs text-gray-400 mt-1 leading-relaxed">
            Usamos cookies para aprimorar sua experiência e coletar estatísticas de navegação no site. Em total conformidade com a LGPD brasileira.
          </p>
        </div>
      </div>
      <div className="flex gap-2">
        <button
          onClick={() => accept("essential")}
          className="flex-1 bg-transparent border border-border-gray hover:border-white text-gray-300 hover:text-white px-4 py-2.5 rounded-full text-xs font-bold uppercase transition-colors"
        >
          Apenas Essenciais
        </button>
        <button
          onClick={() => accept("all")}
          className="flex-1 bg-sangao-red hover:bg-sangao-red-light text-white px-4 py-2.5 rounded-full text-xs font-bold uppercase transition-colors shadow-lg shadow-sangao-red/25"
        >
          Aceitar Todos
        </button>
      </div>
    </motion.div>
  );
}

/* ========================================================================
   CUSTOM CURSOR
   ======================================================================== */

export function CustomCursor() {
  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    const dot = document.createElement("div");
    const ring = document.createElement("div");
    dot.className = "custom-cursor-dot";
    ring.className = "custom-cursor-ring";
    document.body.appendChild(dot);
    document.body.appendChild(ring);

    let mouseX = 0, mouseY = 0;
    let ringX = 0, ringY = 0;

    const move = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.transform = `translate(${mouseX - 3}px, ${mouseY - 3}px)`;
    };

    const animate = () => {
      ringX += (mouseX - ringX) * 0.15;
      ringY += (mouseY - ringY) * 0.15;
      ring.style.transform = `translate(${ringX - 18}px, ${ringY - 18}px)`;
      requestAnimationFrame(animate);
    };
    const raf = requestAnimationFrame(animate);

    const enter = () => {
      ring.style.width = "52px";
      ring.style.height = "52px";
      ring.style.borderColor = "rgba(200, 16, 46, 1)";
    };
    const leave = () => {
      ring.style.width = "36px";
      ring.style.height = "36px";
      ring.style.borderColor = "rgba(200, 16, 46, 0.6)";
    };

    window.addEventListener("mousemove", move, { passive: true });
    
    // Use event delegation instead of attaching to all elements for massive performance improvement
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target && target.closest("a, button, input, textarea, select")) {
        enter();
      } else {
        leave();
      }
    };

    document.addEventListener("mouseover", handleMouseOver, { passive: true });

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseover", handleMouseOver);
      dot.remove();
      ring.remove();
    };
  }, []);
  return null;
}

/* ========================================================================
   LOADER
   ======================================================================== */

export function Loader({ onDone }: { onDone: () => void }) {
  useEffect(() => {
    const t = setTimeout(onDone, 2000);
    return () => clearTimeout(t);
  }, [onDone]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-[100] bg-deep-black flex flex-col items-center justify-center"
    >
      <div className="relative">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="relative w-32 h-32 rounded-3xl bg-gradient-to-br from-sangao-red to-sangao-red-dark flex items-center justify-center font-display text-white text-7xl font-bold shadow-2xl pulse-red"
        >
          S
        </motion.div>
        <motion.div
          initial={{ opacity: 0, rotate: -20 }}
          animate={{ opacity: 0.15, rotate: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="absolute -top-20 -right-24 kanji-huge text-sangao-red text-9xl select-none pointer-events-none"
        >
          柔
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mt-8 text-center animate-pulse"
      >
        <div className="font-display uppercase text-white text-3xl tracking-wider">
          Escola Sangão
        </div>
        <div className="text-xs font-mono-tech uppercase tracking-[0.4em] text-sangao-red mt-1">
          FORJA CAMPEÕES • FORJA CARÁTER
        </div>
      </motion.div>

      <div className="mt-10 w-48 h-0.5 bg-charcoal rounded overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 1.6, ease: "easeInOut" }}
          className="h-full bg-gradient-to-r from-sangao-red to-champion-gold"
        />
      </div>
    </motion.div>
  );
}

/* ========================================================================
   WHATSAPP FLOAT
   ======================================================================== */

export function WhatsAppFloat() {
  return (
    <a
      href={`https://wa.me/${ACADEMY.whatsapp}?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20Escola%20Sang%C3%A3o%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es.`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-6 z-40 hidden sm:flex items-center gap-2.5 bg-[#25D366] hover:bg-[#1ea855] text-white px-5 py-3.5 rounded-full shadow-2xl font-bold text-sm transition-all hover:-translate-y-1 hover:scale-105"
      aria-label="Falar no WhatsApp"
    >
      <Phone size={18} />
      <span>(31) 99901-3426</span>
    </a>
  );
}
