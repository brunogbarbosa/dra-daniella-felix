export type Procedure = { name: string; description: string; image: string };

export type Testimonial = { quote: string; name: string };

export const site = {
  name: 'Daniella Félix',
  monogram: 'DF',

  headline: 'Harmonização facial e corporal para realçar sua melhor versão, sem deixar de ser você.',

  cro: '',
  bio: 'Sou a Dra. Daniella Félix. Meu trabalho parte de um olhar atento para os seus traços, suas proporções e aquilo que faz você se reconhecer. Cada plano é construído de forma individual, com intenção, equilíbrio e respeito à sua essência.',
  education: [] as string[],
  specialties: ['Harmonização facial', 'Contornos corporais', 'Estética avançada'],

  phone: '',
  whatsapp: '',
  whatsappUrl: 'https://contate.me/clinicadaniellafelix',
  address: 'Catolé do Rocha · Paraíba',
  professionalPhilosophy: 'Sua melhor versão, sem deixar de ser você.',

  instagram: 'https://www.instagram.com/clinicadaniellafelix/',
  instagramHandle: '@clinicadaniellafelix',

  philosophy: ['EQUILÍBRIO', 'ANTES DE', 'EXCESSOS.'],

  colors: {
    paper: '#fbf8f2',
    ink: '#211b17',
    taupe: '#9b744d',
    champagne: '#dcc7a4',
    dark: '#171310',
  },

  images: {
    hero: '/images/daniella-hero.png',
    about: '/images/daniella-about.png',
    beauty: '/images/daniella-editorial.png',
  },

  procedures: [
    { name: 'Harmonização facial', description: 'Planejamento individual para equilibrar proporções e valorizar a identidade do rosto.', image: '' },
    { name: 'Contorno corporal', description: 'Protocolos personalizados para cuidar dos contornos com intenção e estratégia.', image: '' },
    { name: 'Lábios', description: 'Definição, proporção e delicadeza para um resultado que converse com seus traços.', image: '' },
    { name: 'Método HC', description: 'Uma jornada exclusiva da clínica, guiada por avaliação e acompanhamento próximo.', image: '' },
    { name: 'Renovafit', description: 'Protocolo da clínica pensado para uma abordagem corporal completa e personalizada.', image: '' },
    { name: 'Depilação a laser', description: 'Tecnologia, conforto e praticidade em um cuidado planejado para você.', image: '' },
  ] as Procedure[],

  office: [] as { src: string; alt: string }[],
  testimonials: [] as Testimonial[],

  results: {
    enabled: true,
    items: [
      { image: '/images/resultado-contorno-01.jpeg', label: 'Expressão mais leve', alt: 'Comparativo de antes e depois de tratamento estético facial', orientation: 'horizontal', beforeShare: .5, comparisonRatio: 1196 / 1600 },
      { image: '/images/resultado-contorno-02.jpeg', label: 'Harmonia do olhar', alt: 'Comparativo frontal de antes e depois de tratamento estético facial', orientation: 'horizontal', beforeShare: .5, comparisonRatio: 1259 / 1600 },
      { image: '/images/resultado-contorno-03.jpeg', label: 'Contornos preservados', alt: 'Comparativo em três quartos de antes e depois de tratamento estético facial', orientation: 'horizontal', beforeShare: .5, comparisonRatio: 1240 / 1600 },
      { image: '/images/resultado-contorno-04.jpeg', label: 'Cuidado em cada detalhe', alt: 'Comparativo frontal de antes e depois de tratamento estético facial', orientation: 'horizontal', beforeShare: .5, comparisonRatio: 1192 / 1600 },
      { image: '/images/resultado-contorno-05.jpeg', label: 'Perfil em equilíbrio', alt: 'Comparativo de perfil de antes e depois de tratamento estético facial', orientation: 'horizontal', beforeShare: .5, comparisonRatio: 1284 / 1542 },
      { image: '/images/resultado-contorno-06.jpeg', label: 'Naturalidade em foco', alt: 'Comparativo de antes e depois de tratamento estético facial', orientation: 'horizontal', beforeShare: .5, comparisonRatio: 1245 / 1600 },
      { image: '/images/resultado-contorno-07.jpeg', label: 'Beleza que permanece sua', alt: 'Comparativo frontal de antes e depois de tratamento estético facial', orientation: 'horizontal', beforeShare: .5, comparisonRatio: 1265 / 1600 },
    ],
  },

  seo: {
    title: 'Dra. Daniella Félix | Harmonização Facial e Corporal',
    description: 'Harmonização facial e corporal em Catolé do Rocha, Paraíba. Protocolos personalizados para realçar sua beleza com equilíbrio e naturalidade.',
    url: '',
  },
};

export const appointmentUrl = site.whatsappUrl || (site.whatsapp
  ? `https://wa.me/${site.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent('Olá, gostaria de agendar uma avaliação com a Dra. Daniella Félix.')}`
  : site.instagram);
