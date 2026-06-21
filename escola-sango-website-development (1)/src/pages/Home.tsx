import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Zap,
  ChevronDown,
  Award,
  Users,
  Trophy,
  Calendar,
  Star,
  ArrowRight,
  MapPin,
  Clock,
  Play,
} from "lucide-react";
import {
  MODALITIES,
  CHAMPIONS,
  TESTIMONIALS,
  MARQUEE_TEXTS,
  EVENTS,
  FOUNDER,
  ACADEMY,
} from "../data";
import { ScrollReveal, CountUp, SectionTitle, TextReveal, Marquee, TrophyIcon } from "../components/ui";

export default function Home() {
  return (
    <div className="relative">
      <Hero />
      <Marquee items={MARQUEE_TEXTS} />
      <Stats />
      <ModalitiesSection />
      <NextEvent />
      <Champions />
      <Testimonials />
      <Founder />
      <LocationPreview />
      <CTAFinal />
    </div>
  );
}

/* ========================================================================
   HERO
   ======================================================================== */

function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center overflow-hidden bg-deep-black">
      {/* Background: Video loop */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          src={ACADEMY.heroVideo}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-35 filter brightness-90 saturate-75"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-deep-black via-deep-black/60 to-deep-black/80" />
      </div>

      <div className="absolute inset-0 tatame-bg opacity-20 z-0" />

      {/* Fumaça vermelha animada */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 rounded-full bg-sangao-red/25 blur-3xl smoke" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-sangao-red-dark/35 blur-3xl smoke" style={{ animationDelay: "2s" }} />
      </div>

      {/* Kanji gigantes decorativos */}
      <motion.div
        style={{ y, willChange: "transform" }}
        className="absolute top-24 left-0 md:left-10 kanji-huge text-[20rem] md:text-[28rem] text-sangao-red/5 select-none pointer-events-none leading-none z-0"
      >
        柔
      </motion.div>
      <motion.div
        style={{ y, willChange: "transform" }}
        className="absolute bottom-24 right-0 md:right-10 kanji-huge text-[18rem] md:text-[24rem] text-sangao-red/5 select-none pointer-events-none leading-none z-0"
      >
        拳
      </motion.div>

      {/* Conteúdo */}
      <motion.div style={{ opacity, willChange: "opacity" }} className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 pt-32 pb-20 w-full">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-3 px-4 py-2 rounded-full glass border border-white/10 mb-8"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-sangao-red animate-pulse" />
          <span className="text-xs md:text-sm font-mono-tech uppercase tracking-[0.25em] text-white/90">
            ESCOLA SANGÃO • SETE LAGOAS • DESDE 2009
          </span>
        </motion.div>

        <h1 className="font-display uppercase leading-[0.85] tracking-tighter text-white">
          <span className="block text-6xl sm:text-7xl md:text-8xl lg:text-[9.5rem] font-bold">
            <TextReveal text="FORJA CAMPEÕES." />
          </span>
          <span className="block text-6xl sm:text-7xl md:text-8xl lg:text-[9.5rem] font-bold text-gradient-red mt-3">
            <TextReveal text="FORJA CARÁTER." />
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="mt-8 text-lg md:text-xl text-gray-300 max-w-2xl text-balance leading-relaxed"
        >
          Jiu-Jitsu, Muay Thai, MMA e Defesa Pessoal em Sete Lagoas — do absoluto iniciante ao atleta de competição. Treine com o Professor Marcus Sangão, 10x campeão mineiro.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.5 }}
          className="mt-10 flex flex-col sm:flex-row gap-4"
        >
          <Link
            to="/contato"
            className="group relative inline-flex items-center justify-center gap-2.5 bg-sangao-red hover:bg-sangao-red-light text-white px-8 py-4 rounded-full font-bold uppercase tracking-wider text-sm md:text-base transition-all pulse-red shadow-xl shadow-sangao-red/25 hover:shadow-sangao-red-light/45 hover:-translate-y-0.5"
          >
            <Zap size={20} className="group-hover:rotate-12 transition-transform" />
            <span>⚡ AULA EXPERIMENTAL GRÁTIS</span>
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            to="/modalidades"
            className="inline-flex items-center justify-center gap-2.5 bg-transparent border-2 border-white/20 hover:border-white hover:bg-white/5 text-white px-8 py-4 rounded-full font-bold uppercase tracking-wider text-sm md:text-base transition-all hover:-translate-y-0.5"
          >
            CONHECER MODALIDADES
          </Link>
        </motion.div>

        {/* Quick info cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.5 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl"
        >
          {[
            { icon: Trophy, label: "10x Campeão", sub: "Mineiro de Jiu-Jitsu" },
            { icon: Users, label: "+200 Alunos", sub: "Família ativa" },
            { icon: Award, label: "+50 Medalhas", sub: "Em 2024 e 2025" },
            { icon: Calendar, label: "15 Anos", sub: "De tradição e respeito" },
          ].map((item, i) => (
            <div
              key={i}
              className="glass border border-white/10 rounded-2xl p-5 hover:border-sangao-red/50 transition-all hover:-translate-y-1"
            >
              <item.icon className="text-sangao-red mb-3" size={22} />
              <div className="font-display uppercase text-white text-lg md:text-xl">{item.label}</div>
              <div className="text-[10px] md:text-xs text-gray-400 uppercase tracking-wider mt-1">{item.sub}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.0 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 flex flex-col items-center gap-2 z-10"
      >
        <span className="text-[10px] font-mono-tech uppercase tracking-[0.3em]">Desça para explorar</span>
        <ChevronDown size={22} className="bounce-arrow" />
      </motion.div>
    </section>
  );
}

/* ========================================================================
   STATS
   ======================================================================== */

function Stats() {
  const items = [
    { value: 10, suffix: "x", label: "Campeão Mineiro", icon: Trophy },
    { value: 200, prefix: "+", label: "Alunos Praticantes", icon: Users },
    { value: 50, prefix: "+", label: "Medalhas de Ouro", icon: Award },
    { value: 15, label: "Anos de Tradição", icon: Calendar },
  ];

  return (
    <section className="relative py-24 bg-charcoal tatame-grid">
      <div className="absolute inset-0 bg-gradient-to-b from-deep-black via-transparent to-deep-black pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-4 md:px-6 grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
        {items.map((item, i) => (
          <ScrollReveal key={i} delay={i * 0.08}>
            <div className="text-center">
              <item.icon className="mx-auto mb-4 text-sangao-red" size={40} strokeWidth={1.5} />
              <div className="font-display text-5xl md:text-7xl font-bold text-gradient-red leading-none">
                <CountUp to={item.value} prefix={item.prefix} suffix={item.suffix} />
              </div>
              <div className="mt-3 text-xs md:text-sm font-mono-tech uppercase tracking-[0.2em] text-gray-400">
                {item.label}
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}

/* ========================================================================
   MODALIDADES
   ======================================================================== */

function ModalitiesSection() {
  return (
    <section className="relative py-24 md:py-32 bg-deep-black tatame-bg overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <SectionTitle
          eyebrow="Nossas Modalidades"
          title="O Caminho do Guerreiro"
          subtitle="Do iniciante absoluto ao atleta de competição — encontre sua arte marcial e desenvolva seu corpo e mente."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {MODALITIES.map((m, i) => (
            <ScrollReveal key={m.id} delay={i * 0.08}>
              <Link
                to={`/modalidades/${m.id}`}
                className="group relative block overflow-hidden rounded-3xl border border-border-gray hover:border-sangao-red bg-charcoal hover-lift h-full transition-all duration-300"
              >
                {/* Background image & overlay */}
                <div className="relative h-56 overflow-hidden flex items-center justify-center bg-deep-black">
                  <img
                    src={m.image}
                    alt={m.name}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/40 to-transparent" />
                  <span className="absolute kanji-huge text-[10rem] text-white/[0.04] group-hover:text-sangao-red/10 transition-colors duration-300">
                    {m.kanji}
                  </span>
                  <span className="absolute text-6xl opacity-90 group-hover:scale-110 transition-transform duration-300">
                    {m.icon}
                  </span>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-display uppercase text-2xl text-white tracking-wider">
                      {m.name}
                    </h3>
                    <ArrowRight
                      size={18}
                      className="text-sangao-red group-hover:translate-x-1 transition-transform"
                    />
                  </div>
                  <p className="text-sm text-gray-400 leading-relaxed mb-4">{m.tagline}</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-[10px] font-mono-tech uppercase tracking-wider text-sangao-red-light bg-sangao-red/10 px-2.5 py-1 rounded-full border border-sangao-red/20">
                      {m.ages}
                    </span>
                    <span className="text-[10px] font-mono-tech uppercase tracking-wider text-gray-400 bg-white/5 px-2.5 py-1 rounded-full">
                      {m.level}
                    </span>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ========================================================================
   PRÓXIMO EVENTO — Countdown
   ======================================================================== */

function NextEvent() {
  const nextEvent = EVENTS.find((e) => new Date(e.date) > new Date());
  if (!nextEvent) return null;

  return (
    <section className="relative py-20 md:py-28 bg-charcoal overflow-hidden">
      <div className="absolute inset-0 hero-gradient opacity-20" />
      <div className="absolute inset-0 tatame-grid opacity-40" />

      <div className="relative max-w-6xl mx-auto px-4 md:px-6">
        <SectionTitle eyebrow="Agenda Oficial" title="Próximo Desafio" />

        <ScrollReveal>
          <div className="relative bg-gradient-to-br from-sangao-red-dark via-sangao-red to-sangao-red-dark rounded-3xl p-8 md:p-12 border border-sangao-red-light/20 shadow-2xl overflow-hidden">
            {/* Decorative */}
            <div className="absolute -top-20 -right-20 kanji-huge text-[15rem] text-white/5 select-none pointer-events-none">
              戰
            </div>

            <div className="relative grid md:grid-cols-2 gap-10 items-center">
              <div>
                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 text-white text-xs font-bold uppercase tracking-wider mb-4 border border-white/15">
                  <span className="w-2.5 h-2.5 rounded-full bg-white animate-pulse" />
                  {nextEvent.type}
                </span>
                <h3 className="font-display uppercase text-3xl md:text-5xl text-white tracking-tight mb-4 leading-none">
                  {nextEvent.title}
                </h3>
                <p className="text-white/85 mb-6 text-sm md:text-base leading-relaxed">{nextEvent.description}</p>
                <div className="space-y-3.5 text-white/90 text-sm">
                  <div className="flex items-center gap-3">
                    <Calendar size={16} className="text-gold-light" />
                    <span>
                      {new Date(nextEvent.date).toLocaleDateString("pt-BR", {
                        day: "2-digit",
                        month: "long",
                        year: "numeric",
                      })}{" "}
                      • {new Date(nextEvent.date).toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" })}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin size={16} className="text-gold-light" />
                    <span>{nextEvent.location}</span>
                  </div>
                </div>
                <Link
                  to="/eventos"
                  className="mt-8 inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-sangao-red px-6 py-3.5 rounded-full font-bold uppercase tracking-wider text-xs transition-colors shadow-lg shadow-black/20"
                >
                  Garantir Minha Inscrição <ArrowRight size={16} />
                </Link>
              </div>

              <Countdown target={nextEvent.date} />
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

function Countdown({ target }: { target: string }) {
  const [time, setTime] = useState({ d: 0, h: 0, m: 0, s: 0 });

  useEffect(() => {
    const update = () => {
      const diff = new Date(target).getTime() - Date.now();
      if (diff <= 0) return;
      setTime({
        d: Math.floor(diff / 86400000),
        h: Math.floor((diff % 86400000) / 3600000),
        m: Math.floor((diff % 3600000) / 60000),
        s: Math.floor((diff % 60000) / 1000),
      });
    };
    update();
    const i = setInterval(update, 1000);
    return () => clearInterval(i);
  }, [target]);

  const blocks = [
    { label: "Dias", value: time.d },
    { label: "Horas", value: time.h },
    { label: "Minutos", value: time.m },
    { label: "Segundos", value: time.s },
  ];

  return (
    <div className="grid grid-cols-4 gap-2.5 md:gap-4">
      {blocks.map((b) => (
        <div
          key={b.label}
          className="bg-black/40 border border-white/10 rounded-2xl p-4 md:p-6 text-center backdrop-blur-md"
        >
          <div className="font-mono-tech font-bold text-3xl md:text-5xl text-white tabular-nums leading-none">
            {String(b.value).padStart(2, "0")}
          </div>
          <div className="text-[9px] md:text-xs uppercase tracking-wider text-white/70 mt-2 font-mono-tech">
            {b.label}
          </div>
        </div>
      ))}
    </div>
  );
}

/* ========================================================================
   CAMPEÕES RECENTES
   ======================================================================== */

function Champions() {
  return (
    <section className="relative py-24 md:py-32 bg-deep-black overflow-hidden">
      <div className="absolute top-0 right-0 kanji-huge text-[20rem] text-sangao-red/5 select-none pointer-events-none leading-none">
        勝
      </div>

      <div className="relative max-w-7xl mx-auto px-4 md:px-6">
        <SectionTitle
          eyebrow="Hall da Fama"
          title="Campeões Recentes"
          subtitle="Conheça alguns dos atletas formados na Escola Sangão que conquistaram o pódio nas principais competições nacionais e internacionais."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CHAMPIONS.map((c, i) => (
            <ScrollReveal key={i} delay={i * 0.06}>
              <div className="group relative bg-charcoal border border-border-gray hover:border-champion-gold rounded-3xl p-6 hover-lift overflow-hidden">
                {/* Shine */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-champion-gold/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative flex items-start gap-4">
                  {/* Avatar */}
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-sangao-red to-sangao-red-dark flex items-center justify-center font-display text-white text-2xl font-bold shrink-0 border border-white/10 shadow-md">
                    {c.name.split(" ").map((n) => n[0]).slice(0, 2).join("")}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <TrophyIcon size={22} />
                      <span className="text-xs font-mono-tech uppercase tracking-wider text-champion-gold">
                        {c.year}
                      </span>
                    </div>
                    <h3 className="font-display uppercase text-xl text-white truncate">{c.name}</h3>
                    <p className="text-sm text-sangao-red-light font-semibold mt-0.5">{c.title}</p>
                    <p className="text-xs text-gray-400 mt-1">{c.category} • Faixa {c.belt}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/conquistas"
            className="inline-flex items-center gap-2 text-sangao-red hover:text-sangao-red-light font-bold uppercase tracking-wider text-sm transition-all hover:translate-x-1"
          >
            Ver Quadro de Títulos Completo <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ========================================================================
   DEPOIMENTOS
   ======================================================================== */

function Testimonials() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const i = setInterval(() => setActive((a) => (a + 1) % TESTIMONIALS.length), 6000);
    return () => clearInterval(i);
  }, []);

  return (
    <section className="relative py-24 bg-charcoal tatame-bg overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-deep-black via-transparent to-deep-black pointer-events-none" />
      <div className="relative max-w-5xl mx-auto px-4 md:px-6">
        <SectionTitle eyebrow="Comunidade" title="O Que Diz Nossa Família" />

        <ScrollReveal>
          <div className="relative min-h-[260px] flex items-center">
            {TESTIMONIALS.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: i === active ? 1 : 0, y: i === active ? 0 : 20 }}
                transition={{ duration: 0.4 }}
                className={`${i === active ? "relative w-full" : "absolute inset-0 pointer-events-none w-full"}`}
                style={{ willChange: "transform, opacity" }}
              >
                <div className="text-center max-w-3xl mx-auto">
                  <div className="text-sangao-red text-6xl font-serif mb-4 leading-none">"</div>
                  <p className="text-lg md:text-2xl text-white leading-relaxed italic text-balance font-light">
                    {t.text}
                  </p>
                  <div className="flex items-center justify-center gap-1 mt-6 text-champion-gold">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star key={j} size={18} fill="currentColor" />
                    ))}
                  </div>
                  <div className="mt-5">
                    <div className="font-display uppercase text-white text-lg tracking-wider">
                      {t.name}
                    </div>
                    <div className="text-xs text-gray-400 font-mono-tech uppercase tracking-wider mt-0.5">{t.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="flex justify-center gap-2 mt-8">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === active ? "w-8 bg-sangao-red" : "w-2 bg-white/20 hover:bg-white/40"
                }`}
                aria-label={`Ver depoimento de número ${i + 1}`}
              />
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ========================================================================
   FUNDADOR
   ======================================================================== */

function Founder() {
  return (
    <section className="relative py-24 md:py-32 bg-deep-black overflow-hidden">
      <div className="absolute inset-0 tatame-bg opacity-25" />
      <div className="relative max-w-7xl mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-12 items-center">
        <ScrollReveal direction="left">
          <div className="relative max-w-md mx-auto md:mx-0">
            <div className="aspect-[4/5] bg-gradient-to-br from-sangao-red-dark via-charcoal to-deep-black rounded-3xl overflow-hidden border border-border-gray relative shadow-2xl">
              <img
                src={FOUNDER.photo}
                alt={FOUNDER.name}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover opacity-80 filter brightness-90 saturate-75"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deep-black via-transparent" />
              <div className="absolute inset-0 flex flex-col items-center justify-end p-8">
                <div className="flex items-center gap-2 mb-2">
                  {[..."⬛⬛⬛"].map((_, i) => (
                    <span key={i} className="w-1.5 h-6 bg-white/80" />
                  ))}
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 bg-champion-gold text-deep-black rounded-full w-28 h-28 flex flex-col items-center justify-center text-center shadow-2xl border border-gold-light/20 z-10"
              style={{ willChange: "transform" }}
            >
              <div className="font-display text-3xl font-bold leading-none">10x</div>
              <div className="text-[8px] font-mono-tech uppercase tracking-wider mt-1">Campeão</div>
              <div className="text-[8px] font-mono-tech uppercase tracking-wider">Mineiro</div>
            </motion.div>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="right">
          <div>
            <div className="inline-flex items-center gap-3 mb-4">
              <span className="h-px w-8 bg-sangao-red" />
              <span className="text-xs md:text-sm font-mono-tech tracking-[0.25em] text-sangao-red uppercase">
                O Fundador
              </span>
            </div>
            <h2 className="font-display uppercase text-4xl md:text-6xl text-white tracking-tight mb-4">
              {FOUNDER.name}
            </h2>
            <div className="inline-flex items-center gap-2 bg-champion-gold/10 border border-champion-gold/30 rounded-full px-4.5 py-1.5 mb-6">
              <TrophyIcon size={20} />
              <span className="text-xs md:text-sm font-bold text-champion-gold uppercase tracking-wider">
                {FOUNDER.title}
              </span>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6 text-base md:text-lg">{FOUNDER.bio}</p>
            <ul className="space-y-3 mb-8">
              {FOUNDER.achievements.map((a, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-300 text-sm md:text-base">
                  <span className="text-sangao-red mt-1 shrink-0">◆</span>
                  <span>{a}</span>
                </li>
              ))}
            </ul>
            <Link
              to="/equipe"
              className="inline-flex items-center gap-2 text-sangao-red hover:text-sangao-red-light font-bold uppercase tracking-wider text-sm transition-all hover:translate-x-1"
            >
              Conhecer Comissão Técnica <ArrowRight size={16} />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ========================================================================
   LOCALIZAÇÃO PREVIEW
   ======================================================================== */

function LocationPreview() {
  return (
    <section className="relative py-20 bg-charcoal">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <ScrollReveal>
          <div className="grid md:grid-cols-2 gap-8 items-center bg-deep-black rounded-3xl overflow-hidden border border-border-gray shadow-2xl">
            {/* Mapa estilizado */}
            <div className="relative h-80 md:h-full min-h-[340px] bg-gradient-to-br from-charcoal to-deep-black overflow-hidden">
              <div className="absolute inset-0 tatame-grid opacity-35" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="relative inline-block">
                    <MapPin size={64} className="text-sangao-red mx-auto" strokeWidth={1.5} />
                    <span className="absolute inset-0 bg-sangao-red rounded-full blur-2xl opacity-40 animate-pulse" />
                  </div>
                  <div className="mt-4 font-display uppercase text-white text-xl tracking-wider">
                    Sete Lagoas • Minas Gerais
                  </div>
                  <div className="text-xs text-gray-400 font-mono-tech mt-1.5">
                    19.4628° S, 44.2407° W
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8 md:p-12">
              <div className="text-xs font-mono-tech uppercase tracking-[0.25em] text-sangao-red mb-3">
                Localização Premium
              </div>
              <h3 className="font-display uppercase text-3xl md:text-4xl text-white mb-4">
                Agende uma Visita
              </h3>
              <div className="space-y-5 text-gray-300">
                <div className="flex items-start gap-3">
                  <MapPin size={18} className="text-sangao-red shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold text-white text-sm md:text-base">Endereço Oficial</div>
                    <div className="text-sm mt-0.5">{ACADEMY.address}</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock size={18} className="text-sangao-red shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold text-white text-sm md:text-base">Horários de Atendimento</div>
                    <div className="text-sm mt-0.5">{ACADEMY.hours.weekday}</div>
                    <div className="text-sm">{ACADEMY.hours.saturday}</div>
                  </div>
                </div>
              </div>
              <div className="mt-8 flex flex-col sm:flex-row gap-3.5">
                <a
                  href={ACADEMY.googleMaps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-sangao-red hover:bg-sangao-red-light text-white px-6 py-3.5 rounded-full font-bold uppercase text-xs transition-colors shadow-lg shadow-sangao-red/20"
                >
                  <MapPin size={16} /> Ver Rotas no Mapa
                </a>
                <Link
                  to="/localizacao"
                  className="inline-flex items-center justify-center gap-2 border border-white/20 hover:border-white text-white px-6 py-3.5 rounded-full font-bold uppercase text-xs transition-colors"
                >
                  <Play size={16} /> Estrutura & Fotos
                </Link>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ========================================================================
   CTA FINAL
   ======================================================================== */

function CTAFinal() {
  const [form, setForm] = useState({ nome: "", email: "", telefone: "", modalidade: "Jiu-Jitsu" });
  const [sent, setSent] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = encodeURIComponent(
      `Olá! Vim pelo site da Escola Sangão e quero agendar uma aula experimental grátis.\n\nNome: ${form.nome}\nE-mail: ${form.email}\nTelefone: ${form.telefone}\nModalidade: ${form.modalidade}`
    );
    window.open(`https://wa.me/${ACADEMY.whatsapp}?text=${msg}`, "_blank", "noopener,noreferrer");
    setSent(true);
  };

  return (
    <section className="relative py-24 md:py-32 bg-gradient-to-br from-sangao-red via-sangao-red-dark to-deep-black overflow-hidden">
      <div className="absolute inset-0 tatame-bg opacity-15" />
      <div className="absolute top-0 left-0 kanji-huge text-[20rem] text-white/5 select-none pointer-events-none leading-none">
        始
      </div>

      <div className="relative max-w-4xl mx-auto px-4 md:px-6 text-center">
        <ScrollReveal>
          <h2 className="font-display uppercase text-4xl md:text-6xl lg:text-7xl text-white tracking-tight mb-4">
            COMECE SUA JORNADA HOJE
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Dê o primeiro passo rumo à transformação física e mental. Preencha o cadastro rápido e garanta sua aula experimental 100% gratuita.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          {sent ? (
            <div className="bg-white/10 backdrop-blur border border-white/20 rounded-3xl p-8 text-center">
              <div className="text-5xl mb-4">🥋</div>
              <h3 className="font-display uppercase text-2xl text-white mb-2">Solicitação enviada com sucesso!</h3>
              <p className="text-white/80">
                Seu WhatsApp foi aberto para finalizar o agendamento direto com nossa equipe. Te esperamos no tatame!
              </p>
            </div>
          ) : (
            <form
              onSubmit={submit}
              className="bg-white/10 backdrop-blur-md border border-white/15 rounded-3xl p-6 md:p-10 grid sm:grid-cols-2 gap-4 text-left shadow-2xl"
            >
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-mono-tech uppercase tracking-wider text-white/80">Nome Completo</label>
                <input
                  type="text"
                  placeholder="Ex: João da Silva"
                  required
                  value={form.nome}
                  onChange={(e) => setForm({ ...form, nome: e.target.value })}
                  className="bg-black/30 border border-white/15 rounded-full px-5 py-3 text-white placeholder-white/40 focus:outline-none focus:border-white transition-all text-sm"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-mono-tech uppercase tracking-wider text-white/80">E-mail</label>
                <input
                  type="email"
                  placeholder="seu@email.com"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="bg-black/30 border border-white/15 rounded-full px-5 py-3 text-white placeholder-white/40 focus:outline-none focus:border-white transition-all text-sm"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-mono-tech uppercase tracking-wider text-white/80">Telefone / WhatsApp</label>
                <input
                  type="tel"
                  placeholder="(31) 99999-9999"
                  required
                  value={form.telefone}
                  onChange={(e) => setForm({ ...form, telefone: e.target.value })}
                  className="bg-black/30 border border-white/15 rounded-full px-5 py-3 text-white placeholder-white/40 focus:outline-none focus:border-white transition-all text-sm"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-mono-tech uppercase tracking-wider text-white/80">Escolha a Modalidade</label>
                <select
                  value={form.modalidade}
                  onChange={(e) => setForm({ ...form, modalidade: e.target.value })}
                  className="bg-black/30 border border-white/15 rounded-full px-5 py-3 text-white focus:outline-none focus:border-white transition-all text-sm"
                >
                  {MODALITIES.map((m) => (
                    <option key={m.id} value={m.name} className="bg-deep-black">
                      {m.name}
                    </option>
                  ))}
                </select>
              </div>
              <button
                type="submit"
                className="sm:col-span-2 bg-deep-black hover:bg-black text-white px-6 py-4 rounded-full font-bold uppercase tracking-wider text-sm md:text-base transition-colors flex items-center justify-center gap-2 shadow-lg shadow-black/30 mt-4"
              >
                <Zap size={18} /> Quero Minha Aula Experimental Grátis
              </button>
              <p className="sm:col-span-2 text-[10px] text-white/60 text-center">
                Seus dados serão tratados de forma totalmente segura e confidencial em concordância com as regras de privacidade da LGPD.
              </p>
            </form>
          )}
        </ScrollReveal>
      </div>
    </section>
  );
}
