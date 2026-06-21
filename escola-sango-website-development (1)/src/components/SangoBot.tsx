import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, Bot, User, MessageCircle } from "lucide-react";

/* ========================================================================
   SANGO BOT — Assistente Virtual Inteligente (Português BR)
   ======================================================================== */

type Message = { role: "bot" | "user"; text: string };

type ResponseRule = {
  patterns: RegExp;
  pt: string;
};

const RESPONSES: ResponseRule[] = [
  {
    patterns: /jiu-?jitsu|jj|kimono|faixa|gradua[cç][aã]o|compet/i,
    pt: "O Jiu-Jitsu é nossa modalidade principal! 🥋 Ensinamos com e sem kimono (Gi e No-Gi) para todas as idades a partir dos 5 anos. Nosso sistema de faixas segue a tradição da CBJJ, indo da Branca até a Preta. O Professor Marcus Sangão, 10x campeão mineiro, lidera as aulas. Tem interesse em agendar uma aula experimental 100% gratuita? Posso te guiar! Disciplina é a maior arma. 🥋",
  },
  {
    patterns: /muay thai|tailand[eê]s|thai|striking|chute|soco/i,
    pt: "Muay Thai — a tradicional arte das oito armas! 🥊 Treinos intensos com socos, chutes, joelhadas e cotoveladas. Aulas para alunos a partir dos 13 anos, do iniciante ao atleta de competição. Queime até 900 calorias por treino e ganhe muito condicionamento com o Professor Rafael. Quer agendar sua aula experimental grátis? 💪",
  },
  {
    patterns: /\bmma\b|mixed martial|vale.?tudo|combate/i,
    pt: "MMA na Escola Sangão é treinamento de alto nível! ⚔ Integramos striking (Muay Thai), grappling (Jiu-Jitsu) e wrestling em um único sistema de combate completo. Indicado apenas para maiores de 18 anos com alguma base intermediária ou avançada em artes marciais.",
  },
  {
    patterns: /defesa pessoal|defesa|mulher|femin|autoprote/i,
    pt: "Defesa Pessoal no Sangão é pragmática e altamente eficiente! 🛡 Temos turmas e aulas voltadas para mulheres, idosos e iniciantes. Focamos em técnicas de alavanca que anulam a força física do agressor. A Professora Juliana Santos é especialista em autoproteção feminina. Você merece se sentir segura(o)!",
  },
  {
    patterns: /hor[aá]rio|quando|agenda|horas|funcion/i,
    pt: "Nosso horário de funcionamento geral é de Segunda a Sexta das 06h às 21h, e aos Sábados das 08h às 12h. Temos diversas turmas de Jiu-Jitsu, Muay Thai, Defesa Pessoal e MMA ao longo do dia (manhã, tarde e noite). Fale com nossa recepção no WhatsApp (31) 99901-3426 para receber a grade exata de horários da sua modalidade favorita! 📞",
  },
  {
    patterns: /pre[çc]o|valor|mensal|plano|quanto custa|custo/i,
    pt: "Temos planos super flexíveis: Mensal (R$ 180), Semestral (R$ 150/mês com camiseta grátis) e Anual (R$ 130/mês para até 2 modalidades com kimono ou luva oficial grátis). Além disso, a aula experimental é totalmente GRÁTIS! 🎁 Entre em contato com a recepção pelo WhatsApp (31) 99901-3426 para fecharmos sua matrícula. 💪",
  },
  {
    patterns: /endere[çc]o|onde|localiza|mapa|rua/i,
    pt: "Nossa sede fica na Av. José Sérvulo Soalheiro, 545, Bairro São Pedro, Sete Lagoas/MG, CEP 35700-000. Contamos com estacionamento próprio gratuito nos fundos do prédio para a sua total comodidade. Venha nos fazer uma visita! 📍",
  },
  {
    patterns: /professor|marcus|sang[aã]o|mestre|instrutor/i,
    pt: "O Professor Marcus Sangão é o fundador e mestre principal da nossa escola! 🥋 Faixa-preta 3º grau com mais de 15 anos de tatame e 10 títulos de Campeão Mineiro. Ele lidera pessoalmente a formação técnica e moral de cada aluno com muito respeito e paixão pelo esporte.",
  },
  {
    patterns: /aula experimental|gr[aá]tis|agend|experi/i,
    pt: "Excelente iniciativa! 🎉 A primeira aula experimental na Escola Sangão é 100% gratuita. Você pode escolher qualquer modalidade (Jiu-Jitsu, Muay Thai ou Defesa Pessoal). Basta clicar no link a seguir para agendar direto com nossa recepção no WhatsApp: https://api.whatsapp.com/send/?phone=5531999013426&text=Olá!%20Vim%20pelo%20site%20da%20Escola%20Sangão%20e%20gostaria%20de%20agendar%20uma%20aula%20experimental%20grátis. 🥋",
  },
  {
    patterns: /idade|anos|crian[çc]a|infantil|idoso/i,
    pt: "Atendemos toda a família! 👨‍👩‍👧‍👦 Jiu-Jitsu infantil a partir dos 5 anos de idade, Muay Thai a partir dos 13 anos, Defesa Pessoal a partir dos 14 anos, e MMA a partir dos 18 anos. Praticantes de todas as faixas etárias até 80+ anos são muito bem-vindos!",
  },
  {
    patterns: /obrigad|valeu|grato|agrade[çc]/i,
    pt: "Eu que agradeço! 🙏 A Escola Sangão está de portas abertas para você. Se tiver qualquer outra dúvida, estou por aqui. Lembre-se sempre: disciplina é a maior arma! 🥋",
  },
  {
    patterns: /ol[aá]|oi|bom dia|boa tarde|boa noite|ola/i,
    pt: "Olá! 🥋 Seja muito bem-vindo(a) à Escola Sangão! Sou o SangoBot, seu assistente virtual. Posso te ajudar com dúvidas sobre Jiu-Jitsu, Muay Thai, Defesa Pessoal, MMA, horários, planos e agendamento de aula experimental grátis. O que você gostaria de saber hoje?",
  },
];

const FALLBACK_PT = "Entendi sua pergunta! Para que você receba a informação mais precisa e atualizada, recomendo falar direto com nossa recepção pelo WhatsApp (31) 99901-3426. Eles te ajudarão com tudo! 💪 Se preferir, pergunte-me sobre 'planos', 'horários', 'modalidades' ou 'aula experimental'.";

function getResponse(input: string): string {
  for (const r of RESPONSES) {
    if (r.patterns.test(input)) return r.pt;
  }
  return FALLBACK_PT;
}

export default function SangoBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [lastSentTime, setLastSentTime] = useState<number>(0);
  const endRef = useRef<HTMLDivElement>(null);

  // Mensagem inicial
  useEffect(() => {
    if (open && messages.length === 0) {
      const hour = new Date().getHours();
      const greeting = hour < 12 ? "Bom dia" : hour < 18 ? "Boa tarde" : "Boa noite";
      setMessages([
        {
          role: "bot",
          text: `${greeting}! 🥋 Sou o SangoBot, assistente virtual da Escola Sangão. Como posso te ajudar hoje? Pergunte-me sobre modalidades, planos, horários ou como agendar sua aula experimental grátis!`,
        },
      ]);
    }
  }, [open, messages.length]);

  // Autoscroll de forma eficiente
  useEffect(() => {
    if (open) {
      endRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, typing, open]);

  const sendMessage = (text: string) => {
    const trimmed = text.trim();
    if (!trimmed) return;

    // Rate Limiting para Segurança (máximo 1 mensagem a cada 1.5 segundos)
    const now = Date.now();
    if (now - lastSentTime < 1500) {
      setMessages((m) => [
        ...m,
        { role: "bot", text: "⚠️ Por favor, aguarde um momento antes de enviar a próxima mensagem." },
      ]);
      return;
    }
    setLastSentTime(now);

    setMessages((m) => [...m, { role: "user", text: trimmed }]);
    setTyping(true);

    // Simulação com tempo de resposta suave
    setTimeout(() => {
      setMessages((m) => [...m, { role: "bot", text: getResponse(trimmed) }]);
      setTyping(false);
    }, 800);
  };

  const send = () => {
    sendMessage(input);
    setInput("");
  };

  const sendQuick = (text: string) => {
    sendMessage(text);
  };

  const quickActions = [
    { label: "🥋 Jiu-Jitsu", query: "Quero saber sobre jiu-jitsu" },
    { label: "🥊 Muay Thai", query: "Fale sobre o muay thai" },
    { label: "💰 Planos & Valores", query: "Quais os planos e valores?" },
    { label: "🎁 Aula Grátis", query: "Quero agendar uma aula experimental" },
  ];

  return (
    <>
      {/* Botão Flutuante */}
      <motion.button
        onClick={() => setOpen(!open)}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2, type: "spring", stiffness: 260, damping: 20 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full bg-sangao-red hover:bg-sangao-red-light text-white shadow-2xl flex items-center justify-center transition-colors pulse-red"
        aria-label="Abrir assistente virtual"
        style={{ willChange: "transform" }}
      >
        <AnimatePresence mode="wait">
          {open ? (
            <motion.div
              key="x"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X size={26} />
            </motion.div>
          ) : (
            <motion.div
              key="msg"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <MessageCircle size={26} />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Janela de Chat */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.95 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed bottom-24 right-4 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-96 h-[540px] max-h-[80vh] bg-charcoal border border-border-gray rounded-3xl shadow-2xl flex flex-col overflow-hidden"
            style={{ willChange: "transform, opacity" }}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-sangao-red to-sangao-red-dark p-4 flex items-center gap-3">
              <div className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center text-2xl">
                🥋
              </div>
              <div className="flex-1">
                <h3 className="font-display uppercase text-white text-lg tracking-wider">SangoBot</h3>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-xs text-white/80">Online • Respostas rápidas</span>
                </div>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="text-white/80 hover:text-white transition-colors"
                aria-label="Fechar chat"
              >
                <X size={20} />
              </button>
            </div>

            {/* Conversa */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-[#0A0A0A] scrollbar-thin">
              {messages.map((m, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`flex gap-2 ${m.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  {m.role === "bot" && (
                    <div className="w-8 h-8 rounded-full bg-sangao-red/20 flex items-center justify-center shrink-0">
                      <Bot size={16} className="text-sangao-red" />
                    </div>
                  )}
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                      m.role === "user"
                        ? "bg-sangao-red text-white rounded-br-none"
                        : "bg-charcoal text-gray-200 rounded-bl-none border border-border-gray"
                    }`}
                  >
                    {m.text.split(/(https?:\/\/[^\s]+)/).map((part, idx) =>
                      part.match(/^https?:\/\//) ? (
                        <a
                          key={idx}
                          href={part}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="underline font-bold text-gold-light hover:text-white transition-colors"
                        >
                          Clique aqui para falar conosco 📱
                        </a>
                      ) : (
                        <span key={idx}>{part}</span>
                      )
                    )}
                  </div>
                  {m.role === "user" && (
                    <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                      <User size={16} className="text-gray-400" />
                    </div>
                  )}
                </motion.div>
              ))}
              {typing && (
                <div className="flex gap-2">
                  <div className="w-8 h-8 rounded-full bg-sangao-red/20 flex items-center justify-center shrink-0">
                    <Bot size={16} className="text-sangao-red" />
                  </div>
                  <div className="bg-charcoal border border-border-gray rounded-2xl rounded-bl-none px-4 py-3 flex gap-1 items-center">
                    <span className="w-2 h-2 bg-sangao-red rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                    <span className="w-2 h-2 bg-sangao-red rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                    <span className="w-2 h-2 bg-sangao-red rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                  </div>
                </div>
              )}
              <div ref={endRef} />
            </div>

            {/* Ações Rápidas */}
            {messages.length <= 1 && (
              <div className="px-4 py-2.5 flex flex-wrap gap-1.5 border-t border-border-gray bg-[#0A0A0A]">
                {quickActions.map((q) => (
                  <button
                    key={q.label}
                    onClick={() => sendQuick(q.query)}
                    className="text-xs bg-charcoal border border-border-gray hover:border-sangao-red hover:text-sangao-red-light px-3 py-1.5 rounded-full transition-all text-gray-300"
                  >
                    {q.label}
                  </button>
                ))}
              </div>
            )}

            {/* Input Form */}
            <div className="p-3 border-t border-border-gray bg-[#0A0A0A]">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  send();
                }}
                className="flex gap-2"
              >
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Pergunte sobre aulas, valores, horários..."
                  className="flex-1 bg-charcoal border border-border-gray rounded-full px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-sangao-red transition-all"
                />
                <button
                  type="submit"
                  className="w-11 h-11 rounded-full bg-sangao-red hover:bg-sangao-red-light text-white flex items-center justify-center transition-colors shrink-0"
                  aria-label="Enviar mensagem"
                >
                  <Send size={16} />
                </button>
              </form>
              <p className="text-[10px] text-gray-500 mt-2 text-center">
                SangoBot • Inteligência Artificial • "Disciplina é a maior arma." 🥋
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
