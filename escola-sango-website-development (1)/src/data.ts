// Conteúdo oficial da Escola Sangão — Sangão Team

export const ACADEMY = {
  name: "Escola Sangão",
  altName: "Sangão Team",
  address: "Av. José Sérvulo Soalheiro, 545, São Pedro, Sete Lagoas/MG, CEP 35700-000",
  phone: "(31) 99901-3426",
  whatsapp: "5531999013426",
  email: "contato@escolasangao.com.br",
  instagram: "https://www.instagram.com/sangaoteam/",
  facebook: "https://www.facebook.com/graciebarrasetelagoas/",
  youtube: "https://www.youtube.com/@sangaoteam", // Canal simulado/real
  tiktok: "https://www.tiktok.com/@sangaoteam",
  googleMaps: "https://maps.google.com/?q=Av.+Jos%C3%A9+S%C3%A9rvulo+Soalheiro,+545+-+S%C3%A3o+Pedro,+Sete+Lagoas+-+MG,+35700-000",
  founded: 2009,
  coords: { lat: -19.4628, lng: -44.2407 },
  hours: {
    weekday: "Segunda a Sexta: 06h - 21h",
    saturday: "Sábado: 08h - 12h",
    sunday: "Domingo: Fechado (aberto para seminários e eventos)",
  },
  heroVideo: "https://videos.pexels.com/video-files/8611719/8611719-hd_1920_1080_30fps.mp4", // Vídeo real de treino
};

export const FOUNDER = {
  name: "Professor Marcus Sangão",
  title: "10x Campeão Mineiro de Jiu-Jitsu",
  belt: "preta",
  yearsExperience: 15,
  photo: "https://images.pexels.com/photos/8612519/pexels-photo-8612519.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=600", // Lutador de kimono real
  bio: "Faixa-preta de Jiu-Jitsu, multicampeão regional, nacional e mundial, com mais de 15 anos dedicados ao ensino das artes marciais. Reconhecido como referência máxima em Sete Lagoas e região, formou dezenas de faixas-pretas e acredita que a disciplina do tatame transforma vidas — dentro e fora da academia.",
  achievements: [
    "10x Campeão Mineiro de Jiu-Jitsu (FMJJD / CBJJ)",
    "Medalhista em campeonatos nacionais da CBJJ",
    "Formador de mais de 30 faixas-pretas em Sete Lagoas",
    "Árbitro oficial credenciado da Federação Mineira",
  ],
};

export const MODALITIES = [
  {
    id: "jiu-jitsu",
    name: "Jiu-Jitsu",
    kanji: "柔術",
    icon: "🥋",
    tagline: "A arte suave que transformou o mundo das lutas.",
    description: "No Sangão, ensinamos o Jiu-Jitsu tradicional e moderno, com foco em técnica, estratégia e, acima de tudo, respeito. Aulas para todas as idades e níveis. Do iniciante que nunca vestiu um kimono ao competidor que busca o pódio mundial.",
    ages: "A partir de 5 anos",
    level: "Iniciante ao Avançado",
    style: "Com Kimono (Gi) e Sem Kimono (No-Gi)",
    image: "https://images.pexels.com/photos/8612465/pexels-photo-8612465.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200", // Sparring jiu-jitsu real
    benefits: [
      { icon: "🧠", title: "Disciplina mental", desc: "Controle emocional e tomada de decisão rápida sob pressão." },
      { icon: "💪", title: "Condicionamento físico", desc: "Ganho excepcional de força, resistência e flexibilidade." },
      { icon: "🛡️", title: "Defesa pessoal real", desc: "Técnicas de alavanca comprovadas para neutralizar agressores maiores." },
      { icon: "🤝", title: "Família e Comunidade", desc: "Integração total em um ambiente seguro e de apoio mútuo." },
      { icon: "⚖️", title: "Respeito e humildade", desc: "Valores ancestrais que regem toda a conduta dentro e fora do tatame." },
      { icon: "🏆", title: "Preparação competitiva", desc: "Treinamentos focados para campeonatos de alto rendimento." },
    ],
    beltSystem: [
      { name: "Branca", color: "#FFFFFF", time: "0-6 meses" },
      { name: "Azul", color: "#1E40AF", time: "6 meses - 2 anos" },
      { name: "Roxa", color: "#7C3AED", time: "2-4 anos" },
      { name: "Marrom", color: "#78350F", time: "4-6 anos" },
      { name: "Preta", color: "#000000", time: "6+ anos" },
    ],
    schedule: [
      { day: "Segunda", times: ["07:00", "18:00", "19:30"] },
      { day: "Terça", times: ["07:00", "18:00", "19:30"] },
      { day: "Quarta", times: ["07:00", "18:00", "19:30"] },
      { day: "Quinta", times: ["07:00", "18:00", "19:30"] },
      { day: "Sexta", times: ["07:00", "18:00", "19:30"] },
      { day: "Sábado", times: ["09:00", "10:30"] },
    ],
  },
  {
    id: "muay-thai",
    name: "Muay Thai",
    kanji: "มวยไทย",
    icon: "🥊",
    tagline: "A arte das oito armas.",
    description: "Treine o estilo de striking mais eficiente e temido do mundo, com a tradição e a disciplina dos melhores camps tailandeses. Ideal para quem busca alta queima calórica, condicionamento físico extremo ou competição.",
    ages: "A partir de 13 anos",
    level: "Todos os níveis",
    style: "Tradicional Tailandês",
    image: "https://images.pexels.com/photos/8611942/pexels-photo-8611942.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200", // Muay thai striking real
    benefits: [
      { icon: "🔥", title: "Queima calórica intensa", desc: "Elimine até 900 calorias por aula em treinos dinâmicos." },
      { icon: "⚡", title: "Explosão e agilidade", desc: "Desenvolva reflexos afiados e golpes potentes." },
      { icon: "💥", title: "Striking completo", desc: "Domine punhos, cotovelos, joelhos e canelas." },
      { icon: "🧘", title: "Foco e autoconfiança", desc: "Redução de estresse com alto ganho de disciplina mental." },
    ],
    schedule: [
      { day: "Segunda", times: ["06:30", "17:30", "20:30"] },
      { day: "Terça", times: ["06:30", "17:30", "20:30"] },
      { day: "Quarta", times: ["06:30", "17:30", "20:30"] },
      { day: "Quinta", times: ["06:30", "17:30", "20:30"] },
      { day: "Sexta", times: ["06:30", "17:30"] },
      { day: "Sábado", times: ["08:00"] },
    ],
  },
  {
    id: "mma",
    name: "MMA",
    kanji: "⚔",
    icon: "🥊",
    tagline: "O teste definitivo do lutador completo.",
    description: "Integre striking, grappling e wrestling em um único sistema sob a orientação de profissionais experientes. Treinamento focado em atletas amadores, profissionais ou praticantes avançados.",
    ages: "Apenas 18+ anos",
    level: "Intermediário e Avançado",
    style: "Mixed Martial Arts (Striking + Grappling + Wrestling)",
    image: "https://images.pexels.com/photos/8612000/pexels-photo-8612000.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200", // MMA/grappling real
    benefits: [
      { icon: "⚔️", title: "Lutador completo", desc: "Transição perfeita entre a luta em pé e a luta no chão." },
      { icon: "🔥", title: "Preparação física de elite", desc: "Condicionamento físico de nível profissional." },
      { icon: "🧠", title: "Estratégia avançada", desc: "Desenvolvimento de game plans baseados nas suas qualidades." },
    ],
    schedule: [
      { day: "Segunda", times: ["20:00"] },
      { day: "Quarta", times: ["20:00"] },
      { day: "Sexta", times: ["20:00"] },
    ],
  },
  {
    id: "defesa-pessoal",
    name: "Defesa Pessoal",
    kanji: "🛡",
    icon: "🛡️",
    tagline: "Técnicas reais para situações reais do dia a dia.",
    description: "Aulas dinâmicas e práticas focadas em neutralizar agressões urbanas rapidamente. Altamente recomendado para mulheres, idosos e qualquer pessoa que busque se sentir mais segura no cotidiano.",
    ages: "A partir de 14 anos",
    level: "Iniciantes e intermediários",
    style: "Defesa pessoal pragmática",
    image: "https://images.pexels.com/photos/8611367/pexels-photo-8611367.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200", // Defesa pessoal sparring real
    benefits: [
      { icon: "🛡️", title: "Segurança cotidiana", desc: "Aprenda a antecipar ameaças e a se desvencilhar com eficiência." },
      { icon: "💃", title: "Empoderamento feminino", desc: "Turmas acolhedoras e técnicas voltadas para autoproteção feminina." },
      { icon: "👴", title: "Acessibilidade total", desc: "Movimentos adaptados que priorizam a alavanca sobre a força física." },
    ],
    schedule: [
      { day: "Terça", times: ["19:00"] },
      { day: "Quinta", times: ["19:00"] },
      { day: "Sábado", times: ["11:00"] },
    ],
  },
];

export const TEAM = [
  {
    name: "Professor Marcus Sangão",
    role: "Fundador e Mestre Principal",
    belt: "Preta 3º Grau",
    specialty: "Jiu-Jitsu / MMA / Defesa Pessoal",
    bio: "10x Campeão Mineiro. Dedicou sua vida à formação técnica e moral de centenas de cidadãos em Sete Lagoas.",
    experience: "15+ anos",
    primary: true,
    photo: "https://images.pexels.com/photos/8612519/pexels-photo-8612519.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=400",
  },
  {
    name: "Professor Rafael 'Rafinha' Costa",
    role: "Instrutor de Muay Thai",
    belt: "Kru (Mestre Certificado)",
    specialty: "Muay Thai Tradicional",
    bio: "Especialista em striking com intercâmbio técnico na Tailândia e vasta experiência em competições.",
    experience: "10+ anos",
    photo: "https://images.pexels.com/photos/17474771/pexels-photo-17474771.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=400",
  },
  {
    name: "Professor Lucas Almeida",
    role: "Instrutor de Jiu-Jitsu",
    belt: "Faixa Preta 1º Grau",
    specialty: "Jiu-Jitsu Competitivo / No-Gi",
    bio: "Formado integralmente no tatame do Professor Marcus Sangão, especialista em passagens de guarda.",
    experience: "8 anos",
    photo: "https://images.pexels.com/photos/8612032/pexels-photo-8612032.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=400",
  },
  {
    name: "Professora Juliana Santos",
    role: "Instrutora de Defesa Pessoal",
    belt: "Faixa Marrom de Jiu-Jitsu",
    specialty: "Defesa Pessoal Feminina",
    bio: "Especialista em técnicas de alavanca e psicologia aplicada ao gerenciamento de crises urbanas.",
    experience: "6 anos",
    photo: "https://images.pexels.com/photos/8611367/pexels-photo-8611367.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=400",
  },
];

export const CHAMPIONS = [
  { name: "Ana Clara Silva", belt: "Azul", title: "Campeã Mineira 2024", category: "Adulto -64kg", year: 2024 },
  { name: "Pedro Henrique", belt: "Roxa", title: "Campeão Brasileiro CBJJ", category: "Juvenil -70kg", year: 2024 },
  { name: "Lucas Fernandes", belt: "Marrom", title: "Vice-Campeão Sul-Americano", category: "Adulto -76kg", year: 2023 },
  { name: "Beatriz Souza", belt: "Azul", title: "Campeã Pan-Americana", category: "Juvenil -58kg", year: 2024 },
  { name: "Gabriel Lima", belt: "Roxa", title: "Campeão Mineiro No-Gi", category: "Adulto -82kg", year: 2024 },
  { name: "Mariana Rocha", belt: "Preta", title: "Medalha de Bronze no Mundial", category: "Adulto -69kg", year: 2023 },
];

export const TESTIMONIALS = [
  {
    name: "Maria Helena",
    role: "Mãe de aluno infantil",
    text: "Meu filho mudou completamente depois que começou a treinar Jiu-Jitsu com o Professor Marcus. Está muito mais disciplinado, focado na escola, e com uma autoestima maravilhosa. A Família Sangão é nota mil!",
    rating: 5,
  },
  {
    name: "João Pedro",
    role: "Aluno de Jiu-Jitsu, 28 anos",
    text: "Comecei absoluto do zero. Hoje sou faixa-azul e já disputei três campeonatos oficiais. A didática e atenção do Professor Marcus Sangão no tatame são sem igual. O ambiente é incrível.",
    rating: 5,
  },
  {
    name: "Ana Paula",
    role: "Aluna de Defesa Pessoal, 35 anos",
    text: "Decidi buscar defesa pessoal feminina por segurança pessoal. As aulas me trouxeram uma segurança corporal e confiança psicológica que eu nunca imaginei alcançar. Indico a todos!",
    rating: 5,
  },
  {
    name: "Carlos Eduardo",
    role: "Aluno de Muay Thai, 62 anos",
    text: "Comecei Muay Thai aos 60 anos por recomendação médica. Perdi peso, melhorei meus exames, minha flexibilidade é outra, e fiz grandes amigos. É realmente um ambiente familiar e respeitoso.",
    rating: 5,
  },
];

export const EVENTS = [
  {
    title: "Campeonato Mineiro de Jiu-Jitsu 2026",
    date: "2026-04-15T09:00:00",
    location: "Arena Vivo — Belo Horizonte/MG",
    type: "Campeonato Oficial",
    description: "Principal evento estadual do calendário oficial da FMJJD. Delegação da Escola Sangão pronta para defender o pódio.",
    status: "inscricoes-abertas",
  },
  {
    title: "Seminário de Jiu-Jitsu com Mestre Royler Gracie",
    date: "2026-03-22T14:00:00",
    location: "Escola Sangão — Sete Lagoas/MG",
    type: "Seminário Técnico",
    description: "Oportunidade técnica imperdível para refinar posições tradicionais de defesa pessoal e guarda com um ícone mundial.",
    status: "inscricoes-abertas",
  },
  {
    title: "Exame de Graduação de Faixas — 1º Semestre",
    date: "2026-06-28T19:00:00",
    location: "Sede Escola Sangão",
    type: "Cerimônia de Graduação",
    description: "Cerimônia oficial semestral com entrega de faixas e graus para todos os alunos promovidos pelo Professor Marcus.",
    status: "em-breve",
  },
];

export const PLANS = [
  {
    id: "experimental",
    name: "Aula Experimental",
    price: 0,
    period: "grátis",
    features: ["1 aula de qualquer modalidade", "Kimono emprestado no local", "Sem compromisso ou taxas", "Avaliação de aptidão inicial"],
    highlight: false,
    cta: "Agendar Grátis",
  },
  {
    id: "mensal",
    name: "Plano Mensal",
    price: 180,
    period: "mês",
    features: ["Acesso ilimitado à modalidade escolhida", "Todos os horários disponíveis", "Acompanhamento pedagógico direto", "Suporte no grupo de alunos"],
    highlight: false,
    cta: "Matricular-se",
  },
  {
    id: "semestral",
    name: "Plano Semestral",
    price: 150,
    period: "mês",
    priceTotal: "R$ 900 à vista no Pix ou Cartão",
    features: ["Acesso ilimitado à modalidade", "Desconto garantido de 17%", "Camiseta oficial Sangão Team inclusa", "Avaliação física periódica", "Acesso prioritário a seminários"],
    highlight: true,
    badge: "MAIS ESCOLHIDO",
    cta: "Matricular-se",
  },
  {
    id: "anual",
    name: "Plano Anual",
    price: 130,
    period: "mês",
    priceTotal: "R$ 1.560 em até 12x no cartão",
    features: ["Acesso a até 2 modalidades (ex: Jiu-Jitsu + Muay Thai)", "Desconto garantido de 28%", "Kimono ou Luva oficial grátis", "Acesso premium ao SangoBot", "Livre trâmite de trancamento de plano"],
    highlight: false,
    badge: "MELHOR VALOR",
    cta: "Matricular-se",
  },
];

export const PRODUCTS = [
  { id: 1, name: "Kimono Oficial Sangão Team", price: 349.90, category: "Kimonos", badge: "OFICIAL", image: "https://images.pexels.com/photos/8612519/pexels-photo-8612519.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=300&w=300" },
  { id: 2, name: "Rashguard Oficial Sangão", price: 129.90, category: "Rashguards", image: "https://images.pexels.com/photos/8612032/pexels-photo-8612032.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=300&w=300" },
  { id: 3, name: "Short de Muay Thai Tailandês", price: 149.90, category: "Shorts", image: "https://images.pexels.com/photos/17474771/pexels-photo-17474771.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=300&w=300" },
  { id: 4, name: "Luvas de Muay Thai / MMA 14oz", price: 189.90, category: "Luvas", image: "https://images.pexels.com/photos/8611942/pexels-photo-8611942.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=300&w=300" },
];

export const BLOG_POSTS = [
  {
    slug: "filosofia-do-jiu-jitsu",
    title: "A Filosofia do Jiu-Jitsu: Muito Além do Tatame",
    category: "Filosofia",
    excerpt: "Como os princípios do Jiu-Jitsu tradicional podem transformar sua conduta pessoal e profissional — disciplina, respeito e superação.",
    author: "Professor Marcus Sangão",
    date: "2026-02-15",
    readTime: "6 min",
    cover: "https://images.pexels.com/photos/8612519/pexels-photo-8612519.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600",
  },
  {
    slug: "nutricao-para-lutadores",
    title: "Nutrição para Lutadores: O que Comer Antes do Treino",
    category: "Nutrição",
    excerpt: "Dicas de alimentação equilibrada para praticantes de artes marciais de alta intensidade terem máximo desempenho.",
    author: "Nutricionista Dra. Camila",
    date: "2026-02-08",
    readTime: "8 min",
    cover: "https://images.pexels.com/photos/8612000/pexels-photo-8612000.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600",
  },
  {
    slug: "defesa-pessoal-feminina",
    title: "Defesa Pessoal Feminina: 5 Técnicas de Alavanca",
    category: "Defesa Pessoal",
    excerpt: "Técnicas fundamentais desenvolvidas para anular a força de oponentes maiores e garantir sua fuga de forma segura.",
    author: "Professora Juliana Santos",
    date: "2026-01-28",
    readTime: "5 min",
    cover: "https://images.pexels.com/photos/8611367/pexels-photo-8611367.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600",
  },
];

export const GALLERY_CATEGORIES = [
  { id: "all", label: "Todas" },
  { id: "jiu-jitsu", label: "Jiu-Jitsu" },
  { id: "muay-thai", label: "Muay Thai" },
  { id: "mma", label: "MMA" },
  { id: "events", label: "Eventos & Cerimônias" },
];

export const FAQ = [
  { q: "Qual a idade mínima para começar os treinos?", a: "A partir de 5 anos completos no Jiu-Jitsu infantil. Para o Muay Thai, a partir dos 13 anos. Para Defesa Pessoal, a partir dos 14. O MMA é exclusivo para maiores de 18 anos com base em outras artes." },
  { q: "Nunca treinei nenhuma luta, posso começar?", a: "Absolutamente sim! Nossas turmas contam com professores altamente didáticos para acolher e guiar alunos do nível absoluto iniciante até o competidor de elite." },
  { q: "Como agendo minha primeira aula experimental?", a: "É 100% gratuita! Você pode agendar preenchendo o formulário de contato do site ou clicando no botão do WhatsApp. Nós providenciaremos o kimono para o seu primeiro treino." },
  { q: "A Escola Sangão conta com estacionamento próprio?", a: "Sim! Oferecemos amplo estacionamento gratuito nos fundos do prédio para total segurança e comodidade dos nossos alunos." },
  { q: "Quais são as formas de pagamento aceitas?", a: "Aceitamos pagamentos no Pix, Cartão de Crédito (em até 12x com recorrência automática para não comprometer seu limite) e Boleto Bancário." },
];

export const MARQUEE_TEXTS = [
  "10X CAMPEÃO MINEIRO",
  "ATLETAS MULTICAMPEÕES",
  "DISCIPLINA É A MAIOR ARMA",
  "FAMÍLIA SANGÃO TEAM",
  "PROFESSOR MARCUS SANGÃO",
  "JIU-JITSU • MUAY THAI • MMA • DEFESA PESSOAL",
];

export const TIMELINE = [
  { year: 2009, title: "Fundação da Sangão Team", desc: "O Professor Marcus Sangão abre a primeira sala em Sete Lagoas com apenas 15 alunos." },
  { year: 2012, title: "Primeiro Título Estadual por Equipes", desc: "A academia consagra-se campeã mineira geral, revelando os primeiros talentos." },
  { year: 2015, title: "Expansão para Sede Própria", desc: "Mudança para o amplo espaço na Av. José Sérvulo Soalheiro, com mais de 400m² de tatame premium." },
  { year: 2018, title: "Inauguração do Muay Thai e Defesa Pessoal", desc: "Integração das modalidades de striking sob direção técnica certificada internacionalmente." },
  { year: 2024, title: "Professor Marcus Sangão 10x Campeão Mineiro", desc: "O mestre consolida sua marca de dez títulos estaduais individuais de Jiu-Jitsu." },
  { year: 2026, title: "Lançamento da Plataforma Integrada Escola Sangão", desc: "Modernização digital com inteligência artificial, suporte aos alunos e controle de presença por QR Code." },
];
