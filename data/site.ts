export type Procedure = { name: string; description: string; image: string };

export type Testimonial = { quote: string; name: string };

export const site = {
  name: 'Ingrid Alfano',
  monogram: 'IA',

  headline: 'Rejuvenescimento e naturalização de traços para você se reconhecer ainda mais.',

  cro: '',
  bio: 'Sou a Dra. Ingrid Alfano, biomédica e professora. Meu trabalho une ciência, escuta e precisão para rejuvenescer e naturalizar traços faciais e corporais, preservando a identidade de cada pessoa.',
  education: ['Biomédica', 'Professora na UNIME'],
  specialties: ['Rejuvenescimento facial', 'Naturalização de traços', 'Contornos faciais e corporais'],

  phone: '',
  whatsapp: '',
  whatsappUrl: 'https://wa.me/message/KLCPYSF3KG2KP1',
  address: 'Salvador · Bahia',
  professionalPhilosophy: 'Rejuvenescimento com naturalidade, sem apagar quem você é.',

  instagram: 'https://www.instagram.com/ingridalfano/',
  instagramHandle: '@ingridalfano',

  philosophy: ['NATURALIDADE', 'ANTES DE', 'EXCESSOS.'],

  colors: {
    paper: '#f8f4ee',
    ink: '#22191d',
    taupe: '#7a2e3d',
    champagne: '#dcc3b1',
    dark: '#111216',
  },

  images: {
    hero: '/images/ingrid-hero.png',
    about: '/images/ingrid-about.png',
    beauty: '/images/ingrid-editorial.png',
    author: '/images/ingrid-author.png',
  },

  procedures: [
    { name: 'Harmonização facial', description: 'Planejamento individual para equilibrar proporções e valorizar a identidade do rosto.', image: '' },
    { name: 'Rejuvenescimento facial', description: 'Protocolos precisos para devolver viço, leveza e aparência descansada.', image: '' },
    { name: 'Naturalização de traços', description: 'Técnica e sutileza para realçar sua expressão sem padronizar o que faz você única.', image: '' },
    { name: 'Endolaser e contorno', description: 'Tecnologia e estratégia para cuidar da pele e dos contornos faciais e corporais.', image: '' },
    { name: 'PDRN e bioestimuladores', description: 'Estímulo inteligente à regeneração e à qualidade da pele, com acompanhamento próximo.', image: '' },
    { name: 'Método MIA', description: 'Uma jornada autoral de avaliação, planejamento e cuidado guiada pela Dra. Ingrid.', image: '' },
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
    title: 'Dra. Ingrid Alfano | Harmonização Facial em Salvador',
    description: 'Rejuvenescimento e harmonização facial em Salvador. Protocolos personalizados para naturalizar seus traços com ciência, precisão e cuidado.',
    url: 'https://draingridalfano.vercel.app',
  },
};

export const appointmentUrl = site.whatsappUrl || (site.whatsapp
  ? `https://wa.me/${site.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent('Olá, gostaria de agendar uma avaliação com a Dra. Ingrid Alfano.')}`
  : site.instagram);
