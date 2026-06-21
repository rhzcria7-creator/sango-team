import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  ShoppingCart,
  MapPin,
  Phone,
  Mail,
  Clock,
  Calendar,
  ChevronRight,
  Send,
  Users,
  Award,
  Shield,
  Target,
  Heart,
  Sparkles,
  Car,
  Bus,
} from "lucide-react";
import {
  MODALITIES,
  TEAM,
  CHAMPIONS,
  TIMELINE,
  PLANS,
  PRODUCTS,
  BLOG_POSTS,
  EVENTS,
  GALLERY_CATEGORIES,
  FAQ,
  ACADEMY,
  FOUNDER,
} from "../data";
import { ScrollReveal, SectionTitle, Badge, BeltVisual, CountUp, TrophyIcon } from "../components/ui";

/* ========================================================================
   MODALIDADES — LISTA E PÁGINA INDIVIDUAL
   ======================================================================== */

export function ModalidadesPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-24 bg-gradient-to-br from-sangao-red-dark to-deep-black tatame-bg overflow-hidden">
        <div className="absolute top-0 right-0 kanji-huge text-[22rem] text-white/5 pointer-events-none">武</div>
        <div className="relative max-w-7xl mx-auto px-4 md:px-6 text-center">
          <SectionTitle eyebrow="Nossas Modalidades" title="Encontre Sua Arte" subtitle="Oferecemos metodologias de ensino testadas e aprovadas para todas as faixas etárias e níveis de aptidão física." />
        </div>
      </section>

      {/* Grid */}
      <section className="py-20 bg-deep-black">
        <div className="max-w-7xl mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-8">
          {MODALITIES.map((m, i) => (
            <ScrollReveal key={m.id} delay={i * 0.08}>
              <Link to={`/modalidades/${m.id}`} className="block bg-charcoal border border-border-gray hover:border-sangao-red rounded-3xl overflow-hidden hover-lift transition-all duration-300">
                <div className="h-64 bg-deep-black relative flex items-center justify-center">
                  <img
                    src={m.image}
                    alt={m.name}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover opacity-35"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/40 to-transparent" />
                  <span className="kanji-huge text-[14rem] text-white/[0.03]">{m.kanji}</span>
                  <span className="absolute text-8xl">{m.icon}</span>
                </div>
                <div className="p-8">
                  <h3 className="font-display uppercase text-3xl text-white mb-2">{m.name}</h3>
                  <p className="text-gray-400 mb-4 text-sm leading-relaxed">{m.tagline}</p>
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex gap-2">
                      <Badge>{m.ages}</Badge>
                      <Badge variant="outline">{m.level}</Badge>
                    </div>
                    <ArrowRight className="text-sangao-red" size={20} />
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </div>
  );
}

export function ModalidadeDetail() {
  const { id } = useParams();
  const m = MODALITIES.find((x) => x.id === id);

  if (!m) {
    return (
      <div className="pt-32 text-center min-h-screen bg-deep-black">
        <h1 className="font-display text-4xl text-white">Modalidade não encontrada</h1>
        <Link to="/modalidades" className="text-sangao-red mt-4 inline-block hover:underline">Voltar para Modalidades</Link>
      </div>
    );
  }

  return (
    <div className="pt-20">
      {/* Breadcrumb */}
      <div className="bg-charcoal border-b border-border-gray py-3 px-4">
        <div className="max-w-7xl mx-auto text-xs font-mono-tech uppercase tracking-wider text-gray-400 flex items-center gap-2">
          <Link to="/" className="hover:text-white">Home</Link>
          <ChevronRight size={12} />
          <Link to="/modalidades" className="hover:text-white">Modalidades</Link>
          <ChevronRight size={12} />
          <span className="text-sangao-red">{m.name}</span>
        </div>
      </div>

      {/* Hero */}
      <section className="relative py-28 bg-gradient-to-br from-sangao-red-dark via-charcoal to-deep-black tatame-bg overflow-hidden">
        <div className="absolute top-0 right-0 kanji-huge text-[24rem] text-white/5 pointer-events-none">{m.kanji}</div>
        <div className="relative max-w-7xl mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <Badge>{m.style}</Badge>
            <h1 className="font-display uppercase text-6xl md:text-8xl text-white mt-4 tracking-tight leading-none">{m.name}</h1>
            <p className="text-lg md:text-xl text-gray-300 mt-6 leading-relaxed">{m.description}</p>
            <div className="flex flex-wrap gap-4 mt-6">
              <div className="bg-black/30 border border-white/10 rounded-2xl px-5 py-3">
                <div className="text-[10px] font-mono-tech uppercase text-gray-400">Recomendado</div>
                <div className="text-white font-bold mt-0.5">{m.ages}</div>
              </div>
              <div className="bg-black/30 border border-white/10 rounded-2xl px-5 py-3">
                <div className="text-[10px] font-mono-tech uppercase text-gray-400">Exigência técnica</div>
                <div className="text-white font-bold mt-0.5">{m.level}</div>
              </div>
            </div>
            <Link to="/contato" className="mt-8 inline-flex items-center gap-2.5 bg-sangao-red hover:bg-sangao-red-light text-white px-7 py-4 rounded-full font-bold uppercase transition-all shadow-lg shadow-sangao-red/25 hover:-translate-y-0.5">
              <Zap /> AULA EXPERIMENTAL GRÁTIS
            </Link>
          </div>
          <div className="aspect-square bg-deep-black rounded-3xl border border-white/10 overflow-hidden relative">
            <img
              src={m.image}
              alt={m.name}
              className="absolute inset-0 w-full h-full object-cover opacity-50"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-deep-black via-transparent" />
            <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-8xl md:text-9xl opacity-90">{m.icon}</span>
          </div>
        </div>
      </section>

      {/* Benefícios */}
      {m.benefits && (
        <section className="py-20 bg-deep-black">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <SectionTitle eyebrow="Por que praticar" title="Benefícios Principais" />
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {m.benefits.map((b, i) => (
                <ScrollReveal key={i} delay={i * 0.06}>
                  <div className="bg-charcoal border border-border-gray hover:border-sangao-red rounded-3xl p-6 h-full hover-lift transition-all duration-300">
                    <div className="text-4xl mb-4">{b.icon}</div>
                    <h3 className="font-display uppercase text-xl text-white mb-2">{b.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{b.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Sistema de Faixas (só Jiu-Jitsu) */}
      {m.id === "jiu-jitsu" && (
        <section className="py-20 bg-charcoal">
          <div className="max-w-5xl mx-auto px-4 md:px-6">
            <SectionTitle eyebrow="Graduação" title="Sistema de Faixas" subtitle="Nosso programa oficial segue os requisitos e a tradição das principais confederações." />
            <div className="flex flex-wrap justify-around items-end gap-8 mt-12">
              {MODALITIES[0].beltSystem!.map((belt, i) => (
                <ScrollReveal key={i} delay={i * 0.08}>
                  <div className="text-center">
                    <BeltVisual color={belt.color} name={belt.name} />
                    <div className="text-xs font-mono-tech text-gray-400 mt-2">{belt.time}</div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Horários */}
      {m.schedule && (
        <section className="py-20 bg-deep-black">
          <div className="max-w-5xl mx-auto px-4 md:px-6">
            <SectionTitle eyebrow="Quadro Semanal" title="Grade de Horários" />
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {m.schedule.map((d, i) => (
                <ScrollReveal key={i} delay={i * 0.04}>
                  <div className="bg-charcoal border border-border-gray rounded-2xl p-5 text-center">
                    <div className="font-display uppercase text-sangao-red text-sm mb-3 tracking-wider">{d.day}</div>
                    <div className="space-y-1.5">
                      {d.times.map((t) => (
                        <div key={t} className="font-mono-tech text-white text-sm">{t}</div>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

// helper
function Zap(props: any) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  );
}

/* ========================================================================
   CONQUISTAS — TIMELINE + CAMPEÕES
   ======================================================================== */

export function ConquistasPage() {
  return (
    <div className="pt-20">
      <section className="relative py-24 bg-gradient-to-br from-champion-gold/15 via-charcoal to-deep-black tatame-bg overflow-hidden">
        <div className="absolute top-0 right-0 kanji-huge text-[22rem] text-champion-gold/5 pointer-events-none">勝</div>
        <div className="relative max-w-7xl mx-auto px-4 md:px-6 text-center">
          <SectionTitle eyebrow="Histórico de Ouro" title="Galeria de Campeões" subtitle="15 anos de foco, dedicação e pódios estaduais, nacionais e internacionais." />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 max-w-4xl mx-auto">
            {[
              { n: 10, s: "x", l: "Campeão Mineiro" },
              { n: 50, p: "+", l: "Medalhas de Ouro" },
              { n: 30, p: "+", l: "Faixas-Pretas Formados" },
              { n: 200, p: "+", l: "Alunos Ativos" },
            ].map((s, i) => (
              <ScrollReveal key={i} delay={i * 0.08}>
                <div className="bg-black/40 border border-champion-gold/30 rounded-2xl p-6">
                  <div className="font-display text-4xl md:text-5xl text-gradient-gold leading-none">
                    <CountUp to={s.n} prefix={s.p} suffix={s.s} />
                  </div>
                  <div className="text-xs font-mono-tech uppercase tracking-wider text-gray-400 mt-2">{s.l}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-deep-black">
        <div className="max-w-5xl mx-auto px-4 md:px-6">
          <SectionTitle eyebrow="Linha do Tempo" title="Nossa Evolução" />
          <div className="relative mt-12">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-sangao-red via-champion-gold to-sangao-red" />
            {TIMELINE.map((t, i) => (
              <ScrollReveal key={i} direction={i % 2 === 0 ? "left" : "right"} delay={i * 0.08}>
                <div className={`relative pl-12 md:pl-0 mb-12 md:grid md:grid-cols-2 md:gap-12 ${i % 2 === 0 ? "" : "md:[&>*:first-child]:col-start-2"}`}>
                  <div className={`${i % 2 === 0 ? "md:text-right md:pr-12" : "md:pl-12"}`}>
                    <div className="font-display text-3xl text-champion-gold leading-none">{t.year}</div>
                    <h3 className="font-display uppercase text-xl text-white mt-1.5">{t.title}</h3>
                    <p className="text-gray-400 mt-2 text-sm leading-relaxed">{t.desc}</p>
                  </div>
                  <div className="absolute left-4 md:left-1/2 top-1 w-3.5 h-3.5 -translate-x-1/2 rounded-full bg-sangao-red ring-4 ring-sangao-red/30" />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Campeões grid */}
      <section className="py-20 bg-charcoal">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <SectionTitle eyebrow="Quadro de Honra" title="Atletas Destaque" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {CHAMPIONS.map((c, i) => (
              <ScrollReveal key={i} delay={i * 0.06}>
                <div className="bg-deep-black border border-border-gray hover:border-champion-gold rounded-3xl p-6 hover-lift transition-all duration-300">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-sangao-red to-sangao-red-dark flex items-center justify-center font-display text-white text-2xl font-bold border border-white/10 shadow-md">
                      {c.name.split(" ").map(n => n[0]).slice(0, 2).join("")}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <TrophyIcon size={20} />
                        <span className="text-xs font-mono-tech text-champion-gold">{c.year}</span>
                      </div>
                      <h3 className="font-display uppercase text-white text-lg mt-0.5">{c.name}</h3>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-border-gray">
                    <div className="text-sangao-red-light font-semibold text-sm">{c.title}</div>
                    <div className="text-xs text-gray-400 mt-1">{c.category} • Faixa {c.belt}</div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

/* ========================================================================
   EQUIPE
   ======================================================================== */

export function EquipePage() {
  return (
    <div className="pt-20">
      <section className="relative py-24 bg-gradient-to-br from-sangao-red-dark to-deep-black tatame-bg overflow-hidden">
        <div className="absolute top-0 right-0 kanji-huge text-[22rem] text-white/5 pointer-events-none">師</div>
        <div className="relative max-w-7xl mx-auto px-4 md:px-6 text-center">
          <SectionTitle eyebrow="Corpo Docente" title="Nossa Equipe Técnica" subtitle="Nossos professores contam com formação internacional e anos de didática de alto rendimento." />
        </div>
      </section>

      {/* Destaque — Fundador */}
      <section className="py-20 bg-deep-black">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left">
              <div className="aspect-[4/5] bg-gradient-to-br from-sangao-red-dark via-charcoal to-deep-black rounded-3xl border border-champion-gold/30 relative overflow-hidden shadow-2xl">
                <img
                  src={FOUNDER.photo}
                  alt={FOUNDER.name}
                  className="absolute inset-0 w-full h-full object-cover opacity-85"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-black via-transparent" />
                <div className="absolute inset-0 flex flex-col items-center justify-end p-8">
                  <div className="w-28 h-28 rounded-full bg-gradient-to-br from-sangao-red to-sangao-red-dark flex items-center justify-center font-display text-white text-5xl font-bold border-4 border-champion-gold mb-4 shadow-xl">
                    MS
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <Badge variant="gold">Mestre Fundador</Badge>
              <h2 className="font-display uppercase text-4xl md:text-5xl text-white mt-4">{FOUNDER.name}</h2>
              <div className="inline-flex items-center gap-2 bg-champion-gold/10 border border-champion-gold/30 rounded-full px-4.5 py-1.5 mt-4">
                <TrophyIcon size={20} />
                <span className="text-xs md:text-sm font-bold text-champion-gold uppercase tracking-wider">{FOUNDER.title}</span>
              </div>
              <p className="text-gray-300 leading-relaxed mt-6 text-lg">{FOUNDER.bio}</p>
              <ul className="mt-6 space-y-2.5">
                {FOUNDER.achievements.map((a, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-300 text-sm md:text-base">
                    <Check size={18} className="text-sangao-red shrink-0 mt-1" />
                    <span>{a}</span>
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Outros instrutores */}
      <section className="py-20 bg-charcoal">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <SectionTitle eyebrow="Professores" title="Comissão Técnica" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {TEAM.filter(t => !t.primary).map((p, i) => (
              <ScrollReveal key={i} delay={i * 0.08}>
                <div className="bg-deep-black border border-border-gray hover:border-sangao-red rounded-3xl p-6 text-center hover-lift overflow-hidden relative transition-all duration-300">
                  <div className="w-28 h-28 rounded-full bg-gradient-to-br from-sangao-red to-sangao-red-dark overflow-hidden mx-auto mb-4 border border-white/10 shadow-md">
                    <img
                      src={p.photo}
                      alt={p.name}
                      className="w-full h-full object-cover filter brightness-90 shrink-0"
                    />
                  </div>
                  <h3 className="font-display uppercase text-white text-xl mt-2">{p.name}</h3>
                  <div className="text-xs font-mono-tech uppercase text-sangao-red tracking-wider mt-1">{p.role}</div>
                  <div className="text-xs text-gray-400 mt-2">{p.belt} • {p.experience} de tatame</div>
                  <p className="text-sm text-gray-400 mt-4 leading-relaxed">{p.bio}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

/* ========================================================================
   HORÁRIOS & PLANOS
   ======================================================================== */

export function HorariosPage() {
  const [filter, setFilter] = useState("todos");

  const horarios = [
    { time: "06:30", seg: "Muay Thai", ter: "Muay Thai", qua: "Muay Thai", qui: "Muay Thai", sex: "Muay Thai", sab: "—" },
    { time: "07:00", seg: "Jiu-Jitsu", ter: "Jiu-Jitsu", qua: "Jiu-Jitsu", qui: "Jiu-Jitsu", sex: "Jiu-Jitsu", sab: "—" },
    { time: "09:00", seg: "—", ter: "—", qua: "—", qui: "—", sex: "—", sab: "Jiu-Jitsu" },
    { time: "17:30", seg: "Muay Thai", ter: "Muay Thai", qua: "Muay Thai", qui: "Muay Thai", sex: "Muay Thai", sab: "—" },
    { time: "18:00", seg: "Jiu-Jitsu", ter: "Jiu-Jitsu", qua: "Jiu-Jitsu", qui: "Jiu-Jitsu", sex: "Jiu-Jitsu", sab: "—" },
    { time: "19:00", seg: "—", ter: "Def. Pessoal", qua: "—", qui: "Def. Pessoal", sex: "—", sab: "—" },
    { time: "19:30", seg: "Jiu-Jitsu", ter: "Jiu-Jitsu", qua: "Jiu-Jitsu", qui: "Jiu-Jitsu", sex: "Jiu-Jitsu", sab: "—" },
    { time: "20:00", seg: "MMA", ter: "—", qua: "MMA", qui: "—", sex: "MMA", sab: "—" },
    { time: "20:30", seg: "Muay Thai", ter: "Muay Thai", qua: "Muay Thai", qui: "Muay Thai", sex: "—", sab: "—" },
  ];

  return (
    <div className="pt-20">
      <section className="relative py-20 bg-gradient-to-br from-sangao-red-dark to-deep-black tatame-bg">
        <div className="relative max-w-7xl mx-auto px-4 md:px-6 text-center">
          <SectionTitle eyebrow="Grade Semanal" title="Horários Disponíveis" subtitle="Encontre a melhor turma e comece sua rotina de treinamentos." />
        </div>
      </section>

      <section className="py-16 bg-deep-black">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex flex-wrap gap-2.5 justify-center mb-8">
            {["todos", "jiu-jitsu", "muay-thai", "mma", "defesa-pessoal"].map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  filter === f
                    ? "bg-sangao-red text-white shadow-lg shadow-sangao-red/25"
                    : "bg-charcoal text-gray-400 hover:text-white border border-border-gray"
                }`}
              >
                {f === "todos" ? "Todas as turmas" : MODALITIES.find(m => m.id === f)?.name}
              </button>
            ))}
          </div>

          <div className="overflow-x-auto bg-charcoal border border-border-gray rounded-3xl shadow-2xl">
            <table className="w-full min-w-[750px]">
              <thead>
                <tr className="bg-deep-black">
                  <th className="p-5 text-left font-mono-tech uppercase text-xs text-sangao-red tracking-wider">Horário</th>
                  {["Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"].map((d) => (
                    <th key={d} className="p-5 text-center font-display uppercase text-white tracking-wider">{d}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {horarios.map((h, i) => (
                  <tr key={i} className="border-t border-border-gray hover:bg-sangao-red/5 transition-colors">
                    <td className="p-5 font-mono-tech text-white font-bold">{h.time}</td>
                    {[h.seg, h.ter, h.qua, h.qui, h.sex, h.sab].map((v, j) => (
                      <td key={j} className="p-5 text-center text-sm">
                        {v === "—" ? (
                          <span className="text-gray-600 font-mono-tech">—</span>
                        ) : (
                          <span className={`px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider ${
                            v.includes("Jiu") ? "bg-sangao-red/20 text-sangao-red-light border border-sangao-red/25" :
                            v.includes("Muay") ? "bg-champion-gold/20 text-champion-gold border border-champion-gold/25" :
                            v.includes("MMA") ? "bg-white/10 text-white border border-white/15" :
                            "bg-white/5 text-gray-300 border border-white/10"
                          }`}>
                            {v}
                          </span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Planos */}
      <section className="py-20 bg-charcoal tatame-bg">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <SectionTitle eyebrow="Investimento" title="Nossos Planos" subtitle="Sem surpresas ou taxas extras. Escolha a opção ideal para a sua rotina." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {PLANS.map((p, i) => (
              <ScrollReveal key={p.id} delay={i * 0.08}>
                <div className={`relative bg-deep-black border rounded-3xl p-6.5 h-full hover-lift flex flex-col justify-between transition-all duration-300 ${
                  p.highlight ? "border-sangao-red shadow-2xl shadow-sangao-red/20 lg:scale-105" : "border-border-gray"
                }`}>
                  <div>
                    {p.badge && (
                      <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-sangao-red text-white text-[9px] font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full border border-sangao-red-light/25 shadow-md">
                        {p.badge}
                      </div>
                    )}
                    <h3 className="font-display uppercase text-2xl text-white mt-4 tracking-wider">{p.name}</h3>
                    <div className="mt-4 flex items-baseline gap-1">
                      <span className="text-sm text-gray-400 font-mono-tech">R$</span>
                      <span className="font-display text-5xl text-white leading-none">{p.price}</span>
                      <span className="text-xs text-gray-400 font-mono-tech">/{p.period}</span>
                    </div>
                    {p.priceTotal && <div className="text-xs text-gray-400 mt-2 font-mono-tech">{p.priceTotal}</div>}
                    <ul className="mt-6 space-y-3">
                      {p.features.map((f, j) => (
                        <li key={j} className="flex items-start gap-2.5 text-sm text-gray-300">
                          <Check size={16} className="text-sangao-red shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link
                    to="/contato"
                    className={`mt-8 block text-center py-3.5 rounded-full font-bold uppercase text-xs tracking-wider transition-all ${
                      p.highlight
                        ? "bg-sangao-red hover:bg-sangao-red-light text-white shadow-lg shadow-sangao-red/20"
                        : "border border-white/20 hover:border-white text-white hover:bg-white/5"
                    }`}
                  >
                    {p.cta}
                  </Link>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* FAQ */}
          <div className="mt-24">
            <SectionTitle eyebrow="FAQ" title="Dúvidas Frequentes" />
            <div className="max-w-3xl mx-auto space-y-4">
              {FAQ.map((item, i) => (
                <FAQItem key={i} q={item.q} a={item.a} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-deep-black border border-border-gray rounded-2xl overflow-hidden transition-all">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-5 text-left hover:bg-sangao-red/5 transition-colors"
      >
        <span className="font-display uppercase text-white text-base md:text-lg tracking-wider">{q}</span>
        <ChevronRight
          size={20}
          className={`text-sangao-red transition-transform shrink-0 ml-4 ${open ? "rotate-90" : ""}`}
        />
      </button>
      {open && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="px-5 pb-5 text-gray-400 text-sm leading-relaxed"
        >
          {a}
        </motion.div>
      )}
    </div>
  );
}

/* ========================================================================
   GALERIA
   ======================================================================== */

export function GaleriaPage() {
  const [filter, setFilter] = useState("all");

  const items = [
    { cat: "jiu-jitsu", label: "Treinamento Técnico Gi", color: "from-sangao-red to-sangao-red-dark", kanji: "柔", img: "https://images.pexels.com/photos/8612519/pexels-photo-8612519.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=400" },
    { cat: "muay-thai", label: "Sparring em Pé", color: "from-champion-gold/40 to-sangao-red-dark", kanji: "拳", img: "https://images.pexels.com/photos/17474771/pexels-photo-17474771.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=400" },
    { cat: "events", label: "Graduação Oficial", color: "from-champion-gold to-sangao-red-dark", kanji: "勝", img: "https://images.pexels.com/photos/8611367/pexels-photo-8611367.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=400" },
    { cat: "jiu-jitsu", label: "Grappling Sparring No-Gi", color: "from-charcoal to-sangao-red-dark", kanji: "戦", img: "https://images.pexels.com/photos/8612465/pexels-photo-8612465.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=400" },
    { cat: "mma", label: "Treino de Integrado", color: "from-deep-black to-sangao-red", kanji: "武", img: "https://images.pexels.com/photos/8612000/pexels-photo-8612000.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=400" },
    { cat: "jiu-jitsu", label: "Transição e Projeções", color: "from-sangao-red-dark to-deep-black", kanji: "帯", img: "https://images.pexels.com/photos/8612032/pexels-photo-8612032.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=400" },
  ];

  const filtered = filter === "all" ? items : items.filter(i => i.cat === filter);

  return (
    <div className="pt-20">
      <section className="relative py-20 bg-gradient-to-br from-sangao-red-dark to-deep-black tatame-bg">
        <div className="relative max-w-7xl mx-auto px-4 md:px-6 text-center">
          <SectionTitle eyebrow="Galeria Oficial" title="Momentos Sangão Team" subtitle="Flagrantes reais das nossas turmas em ação no tatame." />
        </div>
      </section>

      <section className="py-16 bg-deep-black">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex flex-wrap gap-2.5 justify-center mb-8">
            {GALLERY_CATEGORIES.map((c) => (
              <button
                key={c.id}
                onClick={() => setFilter(c.id)}
                className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  filter === c.id
                    ? "bg-sangao-red text-white shadow-lg shadow-sangao-red/25"
                    : "bg-charcoal text-gray-400 hover:text-white border border-border-gray"
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {filtered.map((item, i) => (
              <ScrollReveal key={`${filter}-${i}`} delay={i * 0.04} direction="scale">
                <div className="group relative aspect-square bg-charcoal rounded-3xl overflow-hidden cursor-pointer hover-lift border border-border-gray transition-all duration-300">
                  <img
                    src={item.img}
                    alt={item.label}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-deep-black via-deep-black/30 to-transparent opacity-95" />
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <span className="kanji-huge text-[9rem] text-white/[0.03] group-hover:text-sangao-red/10 transition-colors duration-300">
                      {item.kanji}
                    </span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <div className="font-display uppercase text-white text-base tracking-wider">{item.label}</div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

/* ========================================================================
   BLOG
   ======================================================================== */

export function BlogPage() {
  return (
    <div className="pt-20">
      <section className="relative py-20 bg-gradient-to-br from-sangao-red-dark to-deep-black tatame-bg">
        <div className="relative max-w-7xl mx-auto px-4 md:px-6 text-center">
          <SectionTitle eyebrow="Conteúdo Oficial" title="Blog da Escola" subtitle="Artigos informativos, dicas de nutrição e conceitos de autodefesa escritos pela nossa comissão." />
        </div>
      </section>

      <section className="py-16 bg-deep-black">
        <div className="max-w-7xl mx-auto px-4 md:px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {BLOG_POSTS.map((p, i) => (
            <ScrollReveal key={p.slug} delay={i * 0.08}>
              <article className="bg-charcoal border border-border-gray hover:border-sangao-red rounded-3xl overflow-hidden hover-lift h-full flex flex-col transition-all duration-300">
                <div className="h-48 relative overflow-hidden bg-deep-black">
                  <img
                    src={p.cover}
                    alt={p.title}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover opacity-45"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal to-transparent" />
                  <Badge className="absolute top-4 left-4">{p.category}</Badge>
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 text-xs font-mono-tech text-gray-400 mb-3">
                      <span>{new Date(p.date).toLocaleDateString("pt-BR")}</span>
                      <span>•</span>
                      <span>{p.readTime}</span>
                    </div>
                    <h3 className="font-display uppercase text-xl text-white leading-snug mb-3 tracking-wider">{p.title}</h3>
                    <p className="text-sm text-gray-400 leading-relaxed">{p.excerpt}</p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-border-gray flex items-center justify-between">
                    <span className="text-xs text-gray-500 font-mono-tech">{p.author}</span>
                    <span className="text-sangao-red text-xs font-bold uppercase tracking-wider flex items-center gap-1">
                      Ler Artigo <ArrowRight size={14} />
                    </span>
                  </div>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </div>
  );
}

/* ========================================================================
   EVENTOS
   ======================================================================== */

export function EventosPage() {
  return (
    <div className="pt-20">
      <section className="relative py-20 bg-gradient-to-br from-sangao-red-dark to-deep-black tatame-bg">
        <div className="relative max-w-7xl mx-auto px-4 md:px-6 text-center">
          <SectionTitle eyebrow="Compromissos" title="Eventos & Seminários" subtitle="Acompanhe o calendário oficial de competições e exames de faixa da academia." />
        </div>
      </section>

      <section className="py-16 bg-deep-black">
        <div className="max-w-5xl mx-auto px-4 md:px-6 space-y-6">
          {EVENTS.map((e, i) => {
            const date = new Date(e.date);
            return (
              <ScrollReveal key={i} delay={i * 0.08}>
                <div className="bg-charcoal border border-border-gray hover:border-sangao-red rounded-3xl p-6 md:p-8 flex flex-col md:flex-row gap-6 hover-lift transition-all duration-300">
                  <div className="bg-gradient-to-br from-sangao-red to-sangao-red-dark rounded-2xl p-5 md:p-6 text-center shrink-0 w-full md:w-32 shadow-md">
                    <div className="font-display uppercase text-white text-4xl font-bold leading-none">{date.getDate().toString().padStart(2, "0")}</div>
                    <div className="font-display uppercase text-white/90 text-xs tracking-wider mt-1.5">
                      {date.toLocaleDateString("pt-BR", { month: "short" })}
                    </div>
                    <div className="text-[10px] text-white/70 font-mono-tech mt-1">{date.getFullYear()}</div>
                  </div>
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-4 flex-wrap">
                        <div>
                          <Badge>{e.type}</Badge>
                          <h3 className="font-display uppercase text-2xl md:text-3xl text-white mt-2 leading-none tracking-wider">{e.title}</h3>
                        </div>
                        <Badge variant={e.status === "inscricoes-abertas" ? "gold" : "outline"}>
                          {e.status === "inscricoes-abertas" ? "Aberto" : "Aguardando"}
                        </Badge>
                      </div>
                      <p className="text-gray-400 mt-4 text-sm leading-relaxed">{e.description}</p>
                    </div>
                    <div className="mt-6 pt-4 border-t border-border-gray flex flex-wrap gap-4 items-center justify-between">
                      <div className="flex flex-wrap gap-4 text-xs text-gray-300">
                        <div className="flex items-center gap-2">
                          <Clock size={16} className="text-sangao-red" />
                          {date.toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" })}
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin size={16} className="text-sangao-red" />
                          {e.location}
                        </div>
                      </div>
                      {e.status === "inscricoes-abertas" && (
                        <Link
                          to="/contato"
                          className="inline-flex items-center gap-2.5 bg-sangao-red hover:bg-sangao-red-light text-white px-5 py-2.5 rounded-full font-bold uppercase text-xs tracking-wider transition-colors shadow-lg shadow-sangao-red/20"
                        >
                          <Calendar size={14} /> Fazer Inscrição
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </section>
    </div>
  );
}

/* ========================================================================
   LOCALIZAÇÃO
   ======================================================================== */

export function LocalizacaoPage() {
  return (
    <div className="pt-20">
      <section className="relative py-20 bg-gradient-to-br from-sangao-red-dark to-deep-black tatame-bg">
        <div className="relative max-w-7xl mx-auto px-4 md:px-6 text-center">
          <SectionTitle eyebrow="Estrutura" title="Como Chegar" subtitle="Localização privilegiada de fácil acesso em Sete Lagoas, com estacionamento gratuito." />
        </div>
      </section>

      <section className="py-16 bg-deep-black">
        <div className="max-w-6xl mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-8">
          <ScrollReveal direction="left">
            <div className="bg-charcoal border border-border-gray rounded-3xl p-8">
              <h3 className="font-display uppercase text-2xl text-white mb-6 tracking-wider">Informações da Sede</h3>
              <div className="space-y-5 text-gray-300">
                <div className="flex items-start gap-3">
                  <MapPin className="text-sangao-red shrink-0 mt-1" size={20} />
                  <div>
                    <div className="font-semibold text-white text-sm">Endereço Completo</div>
                    <div className="text-sm mt-0.5">{ACADEMY.address}</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="text-sangao-red shrink-0 mt-1" size={20} />
                  <div>
                    <div className="font-semibold text-white text-sm">Contato WhatsApp</div>
                    <a href={`https://wa.me/${ACADEMY.whatsapp}`} target="_blank" rel="noopener noreferrer" className="hover:text-sangao-red text-sm mt-0.5 block transition-colors">{ACADEMY.phone}</a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="text-sangao-red shrink-0 mt-1" size={20} />
                  <div>
                    <div className="font-semibold text-white text-sm">E-mail Comercial</div>
                    <a href={`mailto:${ACADEMY.email}`} className="hover:text-sangao-red text-sm mt-0.5 block transition-colors">{ACADEMY.email}</a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="text-sangao-red shrink-0 mt-1" size={20} />
                  <div>
                    <div className="font-semibold text-white text-sm">Funcionamento Administrativo</div>
                    <div className="text-sm mt-0.5">{ACADEMY.hours.weekday}</div>
                    <div className="text-sm">{ACADEMY.hours.saturday}</div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-border-gray">
                <h4 className="font-display uppercase text-white mb-4 tracking-wider">Acessibilidade & Infraestrutura</h4>
                <div className="space-y-4 text-sm text-gray-400 leading-relaxed">
                  <div className="flex items-start gap-3">
                    <Car size={18} className="text-sangao-red shrink-0 mt-0.5" />
                    <span><strong>Estacionamento Oficial:</strong> Amplo bolsão de vagas gratuito nos fundos com iluminação e portão de segurança para alunos.</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Bus size={18} className="text-sangao-red shrink-0 mt-0.5" />
                    <span><strong>Transporte Público:</strong> Linhas urbanas com parada imediata em frente à academia na avenida principal.</span>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <div className="bg-charcoal border border-border-gray rounded-3xl overflow-hidden h-full min-h-[400px] relative tatame-grid shadow-2xl">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="relative inline-block">
                    <MapPin size={80} className="text-sangao-red mx-auto" strokeWidth={1.5} />
                    <span className="absolute inset-0 bg-sangao-red rounded-full blur-2xl opacity-30 animate-pulse" />
                  </div>
                  <div className="mt-6 font-display uppercase text-white text-2xl tracking-wider">
                    Sete Lagoas • MG
                  </div>
                  <div className="text-sm text-gray-400 font-mono-tech mt-2">
                    {ACADEMY.coords.lat.toFixed(4)}° S, {Math.abs(ACADEMY.coords.lng).toFixed(4)}° W
                  </div>
                  <a
                    href={ACADEMY.googleMaps}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-2.5 bg-sangao-red hover:bg-sangao-red-light text-white px-6 py-3.5 rounded-full font-bold uppercase text-xs transition-colors shadow-lg shadow-sangao-red/20"
                  >
                    <MapPin size={16} /> Abrir no Google Maps
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}

/* ========================================================================
   CONTATO
   ======================================================================== */

export function ContatoPage() {
  const [form, setForm] = useState({ nome: "", email: "", telefone: "", assunto: "", mensagem: "" });
  const [sent, setSent] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = encodeURIComponent(
      `Olá! Vim pelo site da Escola Sangão.\n\nNome: ${form.nome}\nE-mail: ${form.email}\nTelefone: ${form.telefone}\nAssunto: ${form.assunto}\n\nMensagem:\n${form.mensagem}`
    );
    window.open(`https://wa.me/${ACADEMY.whatsapp}?text=${msg}`, "_blank", "noopener,noreferrer");
    setSent(true);
  };

  return (
    <div className="pt-20">
      <section className="relative py-20 bg-gradient-to-br from-sangao-red-dark to-deep-black tatame-bg">
        <div className="relative max-w-7xl mx-auto px-4 md:px-6 text-center">
          <SectionTitle eyebrow="Fale Conosco" title="Contato & Matrícula" subtitle="Dúvidas sobre turmas, mensalidades ou agendamento? Mande sua mensagem." />
        </div>
      </section>

      <section className="py-16 bg-deep-black">
        <div className="max-w-6xl mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-10">
          <ScrollReveal direction="left">
            <div className="space-y-4">
              <a
                href={`https://wa.me/${ACADEMY.whatsapp}?text=Ol%C3%A1!%20Gostaria%20de%20tirar%20algumas%20d%C3%BAvidas.`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 bg-charcoal border border-border-gray hover:border-sangao-red rounded-3xl p-6 hover-lift transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-[#25D366]/20 flex items-center justify-center shrink-0">
                  <Phone size={22} className="text-[#25D366]" />
                </div>
                <div>
                  <div className="font-display uppercase text-white text-lg tracking-wider">WhatsApp Atendimento</div>
                  <div className="text-gray-400 text-sm mt-0.5">Retorno rápido em horário comercial</div>
                  <div className="text-sangao-red font-bold mt-1.5 font-mono-tech">{ACADEMY.phone}</div>
                </div>
              </a>
              <a href={`mailto:${ACADEMY.email}`} className="flex items-start gap-4 bg-charcoal border border-border-gray hover:border-sangao-red rounded-3xl p-6 hover-lift transition-all duration-300">
                <div className="w-12 h-12 rounded-full bg-sangao-red/20 flex items-center justify-center shrink-0">
                  <Mail size={22} className="text-sangao-red" />
                </div>
                <div>
                  <div className="font-display uppercase text-white text-lg tracking-wider">E-mail Administrativo</div>
                  <div className="text-gray-400 text-sm mt-0.5">Resposta em até 24 horas úteis</div>
                  <div className="text-sangao-red font-bold mt-1.5">{ACADEMY.email}</div>
                </div>
              </a>
              <Link to="/localizacao" className="flex items-start gap-4 bg-charcoal border border-border-gray hover:border-sangao-red rounded-3xl p-6 hover-lift transition-all duration-300">
                <div className="w-12 h-12 rounded-full bg-champion-gold/20 flex items-center justify-center shrink-0">
                  <MapPin size={22} className="text-champion-gold" />
                </div>
                <div>
                  <div className="font-display uppercase text-white text-lg tracking-wider">Visita Presencial</div>
                  <div className="text-gray-400 text-sm mt-0.5">Venha assistir a um treino</div>
                  <div className="text-champion-gold font-bold mt-1.5 text-xs">{ACADEMY.address}</div>
                </div>
              </Link>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <div className="bg-charcoal border border-border-gray rounded-3xl p-6 md:p-8 shadow-2xl">
              <h3 className="font-display uppercase text-2xl text-white mb-6 tracking-wider">Formulário de Contato</h3>
              {sent ? (
                <div className="text-center py-12">
                  <div className="text-6xl mb-4 animate-bounce">🥋</div>
                  <h4 className="font-display uppercase text-2xl text-white mb-2">Mensagem Preparada!</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">Redirecionamos você para o WhatsApp para garantir uma entrega instantânea do seu contato.</p>
                  <button onClick={() => setSent(false)} className="mt-6 text-sangao-red hover:text-sangao-red-light font-bold uppercase text-xs tracking-wider">
                    Enviar Outra Mensagem
                  </button>
                </div>
              ) : (
                <form onSubmit={submit} className="space-y-4">
                  <input type="text" required placeholder="Seu nome completo" value={form.nome} onChange={e => setForm({...form, nome: e.target.value})} className="w-full bg-deep-black border border-border-gray rounded-full px-5 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-sangao-red transition-all text-sm" />
                  <div className="grid sm:grid-cols-2 gap-4">
                    <input type="email" required placeholder="E-mail principal" value={form.email} onChange={e => setForm({...form, email: e.target.value})} className="bg-deep-black border border-border-gray rounded-full px-5 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-sangao-red transition-all text-sm" />
                    <input type="tel" required placeholder="WhatsApp de contato" value={form.telefone} onChange={e => setForm({...form, telefone: e.target.value})} className="bg-deep-black border border-border-gray rounded-full px-5 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-sangao-red transition-all text-sm" />
                  </div>
                  <select value={form.assunto} onChange={e => setForm({...form, assunto: e.target.value})} required className="w-full bg-deep-black border border-border-gray rounded-full px-5 py-3 text-white focus:outline-none focus:border-sangao-red transition-all text-sm">
                    <option value="">Selecione o assunto...</option>
                    <option>Matrículas & Planos</option>
                    <option>Aula Experimental Grátis</option>
                    <option>Seminários & Parcerias</option>
                    <option>Outros Assuntos</option>
                  </select>
                  <textarea required placeholder="Sua dúvida, sugestão ou mensagem..." rows={5} value={form.mensagem} onChange={e => setForm({...form, mensagem: e.target.value})} className="w-full bg-deep-black border border-border-gray rounded-3xl px-5 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-sangao-red transition-all text-sm resize-none" />
                  <label className="flex items-start gap-2.5 text-[10px] text-gray-400 cursor-pointer">
                    <input type="checkbox" required className="mt-0.5" />
                    <span className="leading-normal">Concordo plenamente com os termos de privacidade e autorizo o tratamento de meus dados conforme as diretrizes da LGPD.</span>
                  </label>
                  <button type="submit" className="w-full bg-sangao-red hover:bg-sangao-red-light text-white py-4 rounded-full font-bold uppercase tracking-wider text-xs transition-colors flex items-center justify-center gap-2 shadow-lg shadow-sangao-red/20">
                    <Send size={16} /> Enviar Solicitação
                  </button>
                </form>
              )}
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}

/* ========================================================================
   LOJA
   ======================================================================== */

export function LojaPage() {
  const [cart, setCart] = useState<number[]>([]);

  const addToCart = (id: number) => {
    setCart([...cart, id]);
  };

  return (
    <div className="pt-20">
      <section className="relative py-20 bg-gradient-to-br from-sangao-red-dark to-deep-black tatame-bg">
        <div className="relative max-w-7xl mx-auto px-4 md:px-6 text-center">
          <SectionTitle eyebrow="Produtos Oficiais" title="Loja Sangão Team" subtitle="Kimonos, vestuário de treino e acessórios licenciados oficiais da nossa marca." />
        </div>
      </section>

      <section className="py-16 bg-deep-black">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          {/* Mini carrinho */}
          {cart.length > 0 && (
            <div className="mb-8 bg-charcoal border border-sangao-red rounded-2xl p-5 flex items-center justify-between shadow-xl">
              <div className="flex items-center gap-3">
                <ShoppingCart className="text-sangao-red animate-bounce" size={22} />
                <span className="text-white font-bold">{cart.length} item(s) selecionado(s)</span>
              </div>
              <div className="flex gap-4 items-center">
                <button onClick={() => setCart([])} className="text-gray-400 hover:text-white text-xs uppercase tracking-wider font-semibold transition-colors">Limpar Carrinho</button>
                <Link to="/contato" className="bg-sangao-red hover:bg-sangao-red-light text-white px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-colors shadow-lg">Finalizar no WhatsApp</Link>
              </div>
            </div>
          )}

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PRODUCTS.map((p, i) => (
              <ScrollReveal key={p.id} delay={i * 0.06}>
                <div className="bg-charcoal border border-border-gray hover:border-sangao-red rounded-3xl overflow-hidden hover-lift h-full flex flex-col justify-between transition-all duration-300">
                  <div className="aspect-square bg-deep-black relative flex items-center justify-center overflow-hidden">
                    <img
                      src={p.image}
                      alt={p.name}
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover opacity-80"
                    />
                    {p.badge && (
                      <Badge variant="gold" className="absolute top-3 left-3">{p.badge}</Badge>
                    )}
                  </div>
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="text-[10px] font-mono-tech uppercase text-sangao-red tracking-wider">{p.category}</div>
                      <h3 className="font-display uppercase text-white text-lg mt-1 tracking-wider">{p.name}</h3>
                    </div>
                    <div className="mt-5 pt-4 border-t border-border-gray flex items-end justify-between">
                      <div>
                        <div className="text-[10px] text-gray-500 uppercase tracking-wider font-mono-tech">À vista</div>
                        <div className="font-display text-2xl text-white">R$ {p.price.toFixed(2).replace(".", ",")}</div>
                      </div>
                      <button
                        onClick={() => addToCart(p.id)}
                        className="w-10 h-10 rounded-full bg-sangao-red hover:bg-sangao-red-light text-white flex items-center justify-center transition-colors shadow-lg shadow-sangao-red/25 hover:scale-105"
                        aria-label="Adicionar ao carrinho"
                      >
                        <ShoppingCart size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <div className="mt-16 text-center text-gray-400 text-xs leading-relaxed max-w-xl mx-auto">
            Matéria-prima de alta qualidade desenvolvida para atletas de alto rendimento. Entregamos em Sete Lagoas e enviamos para todo o Brasil. <br />
            <span className="text-sangao-red font-semibold mt-2 block">Pagamento seguro via Pix com faturamento integrado via Asaas/Stripe.</span>
          </div>
        </div>
      </section>
    </div>
  );
}

/* ========================================================================
   SOBRE
   ======================================================================== */

export function SobrePage() {
  const valores = [
    { icon: Shield, title: "Disciplina de Aço", desc: "A fundação do nosso caráter. Conduzir-se com autocontrole e rotina dentro e fora do tatame." },
    { icon: Heart, title: "Respeito Mútuo", desc: "Honrar os mestres, os companheiros de treino, a infraestrutura e a si mesmo em todos os momentos." },
    { icon: Target, title: "Busca de Excelência", desc: "Evolução incremental diária. Aperfeiçoamento incessante de técnicas, táticas e postura moral." },
    { icon: Users, title: "Ambiente Familiar", desc: "Um local acolhedor e integrador, onde cada membro é tratado com fraternidade e cooperação." },
    { icon: Award, title: "Preservação da Tradição", desc: "Cultivar e honrar a linhagem técnica e os ensinamentos ancestrais das artes marciais." },
    { icon: Sparkles, title: "Impacto Transformador", desc: "Desenvolver o foco, a saúde mental e o condicionamento de cidadãos e jovens em nossa sociedade." },
  ];

  return (
    <div className="pt-20">
      <section className="relative py-24 bg-gradient-to-br from-sangao-red-dark to-deep-black tatame-bg overflow-hidden">
        <div className="absolute top-0 right-0 kanji-huge text-[22rem] text-white/5 pointer-events-none">道</div>
        <div className="relative max-w-7xl mx-auto px-4 md:px-6 text-center">
          <SectionTitle eyebrow="Nossa História" title="Tradição & Resultados" subtitle="Desde 2009 formando campeões no esporte e na vida em Sete Lagoas/MG." />
        </div>
      </section>

      {/* História */}
      <section className="py-20 bg-deep-black">
        <div className="max-w-5xl mx-auto px-4 md:px-6">
          <div className="prose prose-invert max-w-none">
            <ScrollReveal>
              <div className="text-lg md:text-xl text-gray-300 leading-relaxed space-y-6">
                <p className="first-letter:text-6xl first-letter:font-display first-letter:text-sangao-red first-letter:float-left first-letter:mr-3.5 first-letter:leading-none">
                  A Escola Sangão nasceu em Sete Lagoas no ano de 2009 sob a liderança técnica do Professor Marcus Sangão. O projeto nasceu de uma convicção profunda: o Jiu-Jitsu não é apenas um esporte de combate, mas sim uma extraordinária ferramenta de desenvolvimento moral, mental e físico.
                </p>
                <p>
                  Com dedicação e treinos sérios, a academia cresceu rapidamente de uma pequena sala com 15 praticantes para um centro de treinamento completo, consolidando-se como uma das principais forças do esporte em Minas Gerais. Atualmente, formamos uma comunidade vibrante de mais de 200 alunos ativos, cobrindo turmas desde os 5 anos até a terceira idade.
                </p>
                <p>
                  Nossa metodologia de ensino é focada na segurança do praticante, no aprendizado passo a passo e no respeito mútuo. Acreditamos que <strong className="text-sangao-red">a disciplina do tatame gera resiliência na vida</strong>. Venha fazer parte da nossa história e descubra a força da Família Sangão.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Missão/Visão/Valores */}
      <section className="py-20 bg-charcoal tatame-bg">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-3 gap-6 mb-20">
            {[
              { title: "Missão", text: "Promover a saúde física, a integridade mental e a resiliência moral de nossos alunos através do ensino de excelência das artes marciais." },
              { title: "Visão", text: "Ser reconhecida nacionalmente como escola modelo na formação de atletas de alto rendimento e cidadãos exemplares." },
              { title: "Valores", text: "Disciplina rigorosa, respeito incondicional, honestidade técnica, ambiente familiar seguro e transformação social constante." },
            ].map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.08}>
                <div className="bg-deep-black border border-border-gray hover:border-sangao-red rounded-3xl p-8 h-full transition-colors duration-300">
                  <h3 className="font-display uppercase text-2xl text-sangao-red mb-4 tracking-wider">{item.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{item.text}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <SectionTitle eyebrow="Pilares Morais" title="Valores da Família" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {valores.map((v, i) => (
              <ScrollReveal key={i} delay={i * 0.06}>
                <div className="bg-deep-black border border-border-gray hover:border-sangao-red rounded-3xl p-6 hover-lift h-full transition-all duration-300">
                  <v.icon className="text-sangao-red mb-4" size={32} strokeWidth={1.5} />
                  <h3 className="font-display uppercase text-xl text-white mb-2 tracking-wider">{v.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{v.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-sangao-red to-sangao-red-dark">
        <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
          <h2 className="font-display uppercase text-4xl md:text-6xl text-white tracking-wider leading-none">Venha Fazer Parte da Família</h2>
          <p className="text-white/85 mt-5 text-lg max-w-2xl mx-auto">Nossos professores estão prontos para receber você com total paciência e suporte no seu primeiro dia de tatame.</p>
          <Link to="/contato" className="mt-8 inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-sangao-red px-8 py-4 rounded-full font-bold uppercase text-xs tracking-wider transition-all shadow-lg hover:-translate-y-0.5">
            Agendar Aula Experimental Grátis <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}

/* ========================================================================
   ÁREA DO ALUNO (mock)
   ======================================================================== */

export function AlunoPage() {
  return (
    <div className="pt-20 min-h-screen bg-deep-black">
      <section className="py-20 bg-gradient-to-br from-sangao-red-dark to-deep-black tatame-bg">
        <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
          <SectionTitle eyebrow="Portal Digital" title="Área do Aluno" subtitle="Nosso sistema integrado de acompanhamento técnico, presenças e faturamento." />
          <div className="mt-10 bg-charcoal border border-border-gray rounded-3xl p-8 text-left shadow-2xl">
            <h3 className="font-display uppercase text-2xl text-white mb-5 tracking-wider">Módulos em Desenvolvimento:</h3>
            <div className="grid sm:grid-cols-2 gap-4 text-gray-300">
              {[
                "Histórico completo de graduações e frequências",
                "Check-in por QR Code de segurança na recepção",
                "Diário de treinos e notas técnicas do aluno",
                "Acesso a videoaulas premium por faixa",
                "Mural digital de recados oficiais do mestre",
                "Faturamento e recorrência simplificada no Pix",
                "Matchmaking (sugestão de sparring compatível)",
                "Treinos sugeridos gerados por Inteligência Artificial",
              ].map((f, i) => (
                <div key={i} className="flex items-start gap-2.5 text-sm">
                  <Check size={16} className="text-sangao-red shrink-0 mt-0.5" />
                  <span className="leading-normal">{f}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 p-4 bg-sangao-red/10 border border-sangao-red/35 rounded-2xl text-xs leading-relaxed text-gray-350">
              💡 <strong>Nota de Produção:</strong> Módulos com integração ao banco PostgreSQL via Prisma, autenticação robusta OAuth e criptografia AES-256 no trâmite de dados bancários.
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

/* ========================================================================
   POLÍTICA DE PRIVACIDADE
   ======================================================================== */

export function PrivacidadePage() {
  return (
    <div className="pt-20 min-h-screen bg-deep-black">
      <section className="py-16 max-w-3xl mx-auto px-4 md:px-6">
        <h1 className="font-display uppercase text-4xl text-white mb-8 tracking-wider">Diretrizes de Privacidade & LGPD</h1>
        <div className="prose prose-invert max-w-none text-gray-350 text-sm leading-relaxed space-y-5">
          <p>A Escola Sangão (Sangão Team Academias LTDA) compromete-se com a total transparência e proteção de dados pessoais de todos os nossos alunos e visitantes do site, em conformidade com as diretrizes e exigências da <strong>Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018)</strong>.</p>
          <h2 className="font-display text-xl text-white mt-8 tracking-wider">1. Coleta e Finalidade dos Dados</h2>
          <p>Os dados preenchidos nos formulários de cadastro e contato (nome, e-mail, telefone) são coletados exclusivamente para a identificação, agendamento de aulas experimentais e contato direto de cunho administrativo. Não compartilhamos nem mercantilizamos seus contatos com terceiros.</p>
          <h2 className="font-display text-xl text-white mt-8 tracking-wider">2. Seus Direitos (Artigo 18 da LGPD)</h2>
          <p>Você pode solicitar a qualquer momento a confirmação de existência de tratamento de dados, o acesso facilitado aos dados coletados, correção de informações desatualizadas, eliminação ou bloqueio do tratamento de dados desnecessários ou revogação de consentimento.</p>
          <h2 className="font-display text-xl text-white mt-8 tracking-wider">3. Encarregado de Proteção de Dados (DPO)</h2>
          <p>Para exercer qualquer um dos seus direitos de acesso ou retificação de dados pessoais, basta enviar uma mensagem direta ao encarregado no e-mail oficial de contato: <a href={`mailto:${ACADEMY.email}`} className="text-sangao-red font-semibold hover:underline">{ACADEMY.email}</a>.</p>
          <p className="text-xs text-gray-500 pt-8 border-t border-border-gray mt-8">Última atualização de conformidade jurídica: Janeiro de 2026.</p>
        </div>
      </section>
    </div>
  );
}

/* ========================================================================
   404
   ======================================================================== */

export function NotFound() {
  return (
    <div className="pt-20 min-h-screen bg-deep-black flex items-center justify-center tatame-bg">
      <div className="text-center px-4">
        <div className="kanji-huge text-[12rem] text-sangao-red/15 leading-none">無</div>
        <h1 className="font-display uppercase text-8xl text-white -mt-8 tracking-tighter">404</h1>
        <p className="text-gray-400 mt-4 text-sm font-mono-tech">ESTA PÁGINA NÃO CONSTA NO MAPA DO TATAME.</p>
        <Link to="/" className="mt-8 inline-flex items-center gap-2 bg-sangao-red hover:bg-sangao-red-light text-white px-6 py-3.5 rounded-full font-bold uppercase text-xs tracking-wider shadow-lg shadow-sangao-red/20">
          Voltar para a Página Inicial
        </Link>
      </div>
    </div>
  );
}
