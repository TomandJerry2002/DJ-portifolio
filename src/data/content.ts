// ═══════════ EDITABLE CONTENT ═══════════
// Every word, link, image and video on the site comes from this file.
// Images live in /public/images (referenced as '/images/…').

const IMG = '/images/';
const YT = 'https://www.youtube.com/@benjamin.solomon';

export type Accent = 'marker' | 'serif' | 'neon' | 'glitch';

export const site = {
  // SEO + sharing (used by app/layout.tsx `metadata`)
  meta: {
    title: 'Benji Beats — DJ & Beatboxer',
    description: 'Benji Beats (Benjamin Solomon) — DJ, beatboxer and producer from Bangalore. Live sets, beatbox, bookings.',
    url: '', // add the live domain once the site is published (e.g. 'https://benjibeats.com')
    shareImage: '/og-image.png', // 1200×630
    favicon: '/favicon.svg',
  },
  artist: { stageName: 'BENJI BEATS', realName: 'Benjamin Solomon' },
  nav: [
    { label: 'About', href: '#about' },
    { label: 'DJ', href: '#dj' },
    { label: 'Beatbox', href: '#beatbox' },
    { label: 'Gallery', href: '#gallery' },
  ],
  hero: {
    titleLines: ['BENJI', 'BEATS'],
    image: IMG + 'hero.webp',
    imageAlt: 'Benji on stage from behind, arm raised toward a halo of light',
    video: '', // e.g. '/video/hero.mp4' — replaces the image when set
  },
  about: {
    heading: 'Live, loud, limitless',
    image: IMG + 'photo-07.webp',
    imageAlt: 'Benjamin Solomon in profile on stage, wearing a bandana',
    caption: 'Bangalore, IN',
    quote: { before: 'The journey is live, loud, and', highlight: 'limitless', after: '.' },
    bio: [
      'Benjamin Solomon is a multifaceted musician from Bangalore, renowned for his dynamic blend of beatboxing, DJing, music production, and instrumental performances.',
      'Music has been an integral part of his life since childhood, and he has been captivating audiences across India with his electrifying live performances and innovative productions for years. Drawing inspiration from both electronic and traditional sounds, Benji creates immersive soundscapes that fuse multiple genres, highlighting his versatile skills and forging a powerful connection with his audience.',
    ],
    statement: [
      'I believe music is more than sound-it’s energy, emotion, and connection. Every beat I create, every set I play, is a promise to move you, to lift you, and to remind you that you’re alive. My mission is to blur the lines between performer and crowd, studio and stage, rhythm and soul. This is only the beginning. The journey is live, loud, and limitless.',
      'Let’s go there-together.',
    ],
    signature: '-Benjamin Solomon',
    statementImage: IMG + 'photo-09.webp',
    statementImageAlt: 'Benji beatboxing into the mic while mixing',
    // word (lowercase, no punctuation) → typeface
    statementAccents: {
      energy: 'marker', emotion: 'serif', connection: 'neon', alive: 'glitch',
      rhythm: 'serif', soul: 'serif', loud: 'glitch', limitless: 'neon',
    } as Record<string, Accent>,
    statementLastLine: 'marker' as Accent, // font for the final line
  },
  band: ['Beatboxer', 'DJ', 'Producer', 'Instrumentalist'],
  dj: {
    heading: 'The DJ',
    // hype lines that cycle on the mic — the first one shows with reduced motion
    shouts: ['Guysss, make some noiseeee!', 'Hands up, Bangaloreee!', 'Louderrr!!', 'Drop it lowww!', 'One more timeee!'],
    shoutEvery: 2.6, // seconds per line
    genres: ['Hip-Hop', 'Electronic', 'Bass', 'Indian Fusion', 'Afrobeats'],
    image: IMG + 'photo-04.webp',
    imageAlt: 'Benji from behind at the decks, headphones on, stage lights ahead',
    // Featured track. `preview` is Spotify's 30s preview clip (may expire — if it fails, play opens `url`)
    mix: {
      title: 'INDIAN CARTEL',
      artists: 'Benjamin Solomon, BSquare',
      year: '2026',
      length: '4:15',
      url: 'https://open.spotify.com/track/4wN17XMZxeS7YUYzbNWsBI',
      preview: 'https://p.scdn.co/mp3-preview/67eacb1cc384ff8d666f8c1d5d6cf35c99059e94',
      cta: 'Full track on Spotify',
    },
  },
  beatbox: {
    heading: 'The Beatboxer',
    featured: { title: 'Watch on YouTube', thumb: IMG + 'photo-02.webp', youtubeId: 'Sd0XuEWpAms', link: 'https://youtu.be/Sd0XuEWpAms' },
    clips: [
      { title: 'Short 01', youtubeId: 'VJeNDJiblJU' },
      { title: 'Short 02', youtubeId: 'xWMMHR0XWgE' },
      { title: 'Short 03', youtubeId: 'WNerbXv9Jno' },
      { title: 'Short 04', youtubeId: 'VogWJH1Vl10' },
      { title: 'Short 05', youtubeId: 'cTQjEXBdIEY' },
      { title: 'Short 06', youtubeId: '3FmGvI-O62k' },
      { title: 'Short 07', youtubeId: 'rBvwPeKZIvQ' },
      { title: 'Short 08', youtubeId: '0GWtIKDXiwo' },
      { title: 'Short 09', youtubeId: 'lHXgGYQWxnM' },
      { title: 'Short 10', youtubeId: 'QALhzcWBS44' },
    ],
    intro: [
      'Benjamin has been an active pillar in the thriving Indian beatbox community for years.',
      'He competed as a solo artist in major national showcases, including the Indian Beatbox Championship Solo Eliminations organized by Beatbox India.',
      'Because of his tenure and expertise, he frequently transitions from competitor to authority figure. He serves as an official judge for prominent street-culture and college beatbox battles, such as evaluating high-level talent at the 256 Hertz beatboxer battles.',
    ],
    highlights: [
      { title: 'Indian Beatbox Championship — Solo Eliminations, Beatbox India', result: 'Competitor' },
      { title: '256 Hertz Beatboxer Battles', result: 'Judge' },
      { title: 'Street-culture & college beatbox battles', result: 'Official judge' },
      { title: 'Indian beatbox community', result: 'Mentor' },
    ],
  },
  gallery: {
    heading: 'Gallery',
    items: [
      { src: IMG + 'photo-01.webp', alt: 'Performing in front of a giant LED screen, crowd filming on phones' },
      { src: IMG + 'photo-07.webp', alt: 'Profile portrait in smoke' },
      { src: IMG + 'photo-04.webp', alt: 'At the decks from behind, backlit' },
      { src: IMG + 'hero.webp', alt: 'Arm raised to a halo of stage light' },
      { src: IMG + 'photo-02.webp', alt: 'Beatboxing into the mic in low light' },
      { src: IMG + 'photo-06.webp', alt: 'Behind the DJ booth under a large projected face' },
      { src: IMG + 'photo-09.webp', alt: 'Beatboxing while mixing on a Pioneer controller' },
      { src: IMG + 'photo-03.webp', alt: 'On stage above a crowd of raised phones' },
      { src: IMG + 'photo-08.webp', alt: 'Hands on the mixer in near darkness' },
    ],
  },
  socials: [
    { label: 'Instagram', handle: '@benjamin.solomon.music', url: 'https://www.instagram.com/benjamin.solomon.music/' },
    { label: 'YouTube', handle: '@benjamin.solomon', url: YT },
    { label: 'Spotify', handle: 'Benjamin Solomon', url: 'https://open.spotify.com/artist/0wy2Hl1xD3Ck9osL4leyI9?si=4ywCBV4aRdS_lvAO4VZuXw' },
  ],
  mascot: {
    frames: { idle: IMG + 'benji-walk-idle.png', a: IMG + 'benji-walk-a.png', b: IMG + 'benji-walk-b.png', smile: IMG + 'benji-walk-smile.png' },
    walkCycle: ['a', 'idle', 'b', 'idle'],
    stridePx: 16, // px travelled per walk frame
    smileAfter: 0.7, // seconds standing still before he smiles
    opacity: 0.85,
    hint: 'Tap me for the menu', // bubble shown once after the intro
  },
  finale: {
    image: IMG + 'finale.webp',
    imageAlt: 'Benji on stage in silhouette, pointing out over the crowd with the mic to his mouth',
    text: 'Let’s go there — together.',
  },
  footer: {
    note: 'While he performs at massive underground music festivals and clubs, Benjamin is widely recognized in the digital space for creative cross-genre collaborations. He regularly interacts with well-known content creators, indie musicians, and hip-hop artists across India. For instance, he participated in projects like Desibels, which brings together the different elements of Indian music, pairing his cutting-edge beatboxing and electronic DJing alongside traditional classical artists (like Carnatic mridangam players) and B-boys to bridge old-school rhythms with modern hip-hop culture',
    from: '', // optional signature under the note
    copyright: '© 2026 Benjamin Solomon',
  },
};

export type Site = typeof site;
export const ytThumb = (id: string) => `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
