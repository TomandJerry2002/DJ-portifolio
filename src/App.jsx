// Site logic — ported 1:1 from "Benji Beats.dc.html". Content lives in SITE below.
import React from 'react';
import View from './View.jsx';

const DCLogic = React.Component;

// ═══════════ EDITABLE CONTENT — everything on the page comes from here (Next.js port: src/data/content.ts) ═══════════
const IMG = '/images/';
const YT = 'https://www.youtube.com/@benjamin.solomon';
const SITE = {
  // SEO + sharing (mirror these in the <helmet> defaults; Next.js port: app/layout.tsx `metadata`)
  meta: {
    title: 'Benjamin Solomon \u2014 DJ & Beatboxer',
    description: 'Benjamin Solomon \u2014 DJ, beatboxer and producer from Bangalore. Live sets, beatbox, bookings.',
    url: '', // add the live domain once the site is published
    shareImage: '/og-image.png', // 1200×630 placeholder
    favicon: '/favicon.svg',
  },
  artist: { stageName: 'BENJAMIN SOLOMON', realName: 'Benjamin Solomon' },
  nav: [
    { label: 'About', href: '#about' }, { label: 'DJ', href: '#dj' },
    { label: 'Beatbox', href: '#beatbox' }, { label: 'Gallery', href: '#gallery' },
  ],
  hero: {
    titleLines: ['BENJAMIN', 'SOLOMON'],
    subtitle: 'DJ • Beatboxer',
    image: IMG + 'hero.webp', imageAlt: 'Benji on stage from behind, arm raised toward a halo of light',
    video: '', // e.g. '/video/hero.mp4' — replaces the image when set
    scrollLabel: 'Scroll',
    // Scroll-through portal: the camera flies into this letter's hole and his picture opens up inside it
    portal: { line: 1, char: 3, image: IMG + 'benji-portrait.jpg', pos: '50% 100%', bg: '#FFFFFF', ratio: 1, eye: [0.727, 0.385], eyeZoom: 7 }, // eye = his iris as a fraction of the photo; the camera dives into it, then fades to black into About // portrait sits on pure white; the portal fills with the same white so the edges disappear // line 1 = SOLOMON, char 3 = its second O
  },
  about: {
    heading: 'Live, loud, limitless',
    image: IMG + 'photo-07.webp', imageAlt: 'Benjamin Solomon in profile on stage, wearing a bandana', caption: 'Bangalore, IN',
    quote: { before: 'The journey is live, loud, and', highlight: 'limitless', after: '.' },
    bio: [
      'Benjamin Solomon is a multifaceted musician from Bangalore, renowned for his dynamic blend of beatboxing, DJing, music production, and instrumental performances.',
      'Music has been an integral part of his life since childhood, and he has been captivating audiences across India with his electrifying live performances and innovative productions for years. Drawing inspiration from both electronic and traditional sounds, Benji creates immersive soundscapes that fuse multiple genres, highlighting his versatile skills and forging a powerful connection with his audience.',
    ],
    statementLabel: 'In his words',
    statement: [
      'I believe music is more than sound-it\u2019s energy, emotion, and connection. Every beat I create, every set I play, is a promise to move you, to lift you, and to remind you that you\u2019re alive. My mission is to blur the lines between performer and crowd, studio and stage, rhythm and soul. This is only the beginning. The journey is live, loud, and limitless.',
      'Let\u2019s go there-together.',
    ],
    signature: '-Benjamin Solomon',
    statementImage: IMG + 'photo-09.webp', statementImageAlt: 'Benji beatboxing into the mic while mixing',
    // word (lowercase, no punctuation) → typeface: marker | serif | neon | glitch
    statementAccents: { energy: 'marker', emotion: 'serif', connection: 'neon', alive: 'glitch', rhythm: 'serif', soul: 'serif', loud: 'glitch', limitless: 'neon' },
    statementLastLine: 'marker', // font for the final line ("Let's go there-together.")
  },
  band: ['Beatboxer', 'DJ', 'Producer', 'Instrumentalist'],
  dj: {
    heading: 'The DJ',
    intro: 'GUYSS, MAKE SOME NOISEEEE!',
    // hype lines that cycle on the mic, loud — first one shows with reduced motion
    shouts: ['Guysss, make some noiseeee!', 'Hands up, Bangaloreee!', 'Louderrr!!', 'Drop it lowww!', 'One more timeee!'],
    shoutEvery: 2.6, // seconds per line
    genres: ['Hip-Hop', 'Electronic', 'Bass', 'Indian Fusion', 'Afrobeats'],
    image: IMG + 'photo-04.webp', imageAlt: 'Benji from behind at the decks, headphones on, stage lights ahead',
    // Featured track. `preview` is Spotify's 30s preview clip (may expire — if it fails, play opens `url`)
    mix: {
      title: 'INDIAN CARTEL', artists: 'Benjamin Solomon, BSquare', year: '2026', length: '4:15',
      url: 'https://open.spotify.com/track/4wN17XMZxeS7YUYzbNWsBI',
      preview: 'https://p.scdn.co/mp3-preview/67eacb1cc384ff8d666f8c1d5d6cf35c99059e94',
      cta: 'Full track on Spotify',
      autoplay: true, // starts when the site opens (browsers need one tap/key first if they block sound)
      loop: true,
      volume: 0.15,
    },
    // e.g. { value: '10+', label: 'Years spinning' } — section hides while empty
    stats: [],
  },
  beatbox: {
    heading: 'The Beatboxer',
    featured: { title: 'Watch on YouTube', thumb: IMG + 'photo-02.webp', youtubeId: 'Sd0XuEWpAms', link: 'https://youtu.be/Sd0XuEWpAms', platform: 'YouTube' },
    clipsLabel: 'Shorts',
    clips: [
      { title: 'Short 01', youtubeId: 'VJeNDJiblJU', link: 'https://youtube.com/shorts/VJeNDJiblJU' },
      { title: 'Short 02', youtubeId: 'xWMMHR0XWgE', link: 'https://youtube.com/shorts/xWMMHR0XWgE' },
      { title: 'Short 03', youtubeId: 'WNerbXv9Jno', link: 'https://youtube.com/shorts/WNerbXv9Jno' },
      { title: 'Short 04', youtubeId: 'VogWJH1Vl10', link: 'https://youtube.com/shorts/VogWJH1Vl10' },
      { title: 'Short 05', youtubeId: 'cTQjEXBdIEY', link: 'https://youtube.com/shorts/cTQjEXBdIEY' },
      { title: 'Short 06', youtubeId: '3FmGvI-O62k', link: 'https://youtube.com/shorts/3FmGvI-O62k' },
      { title: 'Short 07', youtubeId: 'rBvwPeKZIvQ', link: 'https://youtube.com/shorts/rBvwPeKZIvQ' },
      { title: 'Short 08', youtubeId: '0GWtIKDXiwo', link: 'https://youtube.com/shorts/0GWtIKDXiwo' },
      { title: 'Short 09', youtubeId: 'lHXgGYQWxnM', link: 'https://youtube.com/shorts/lHXgGYQWxnM' },
      { title: 'Short 10', youtubeId: 'QALhzcWBS44', link: 'https://youtube.com/shorts/QALhzcWBS44' },
    ],
    intro: [
      'Benjamin has been an active pillar in the thriving Indian beatbox community for years.',
      'He competed as a solo artist in major national showcases, including the Indian Beatbox Championship Solo Eliminations organized by Beatbox India.',
      'Because of his tenure and expertise, he frequently transitions from competitor to authority figure. He serves as an official judge for prominent street-culture and college beatbox battles, such as evaluating high-level talent at the 256 Hertz beatboxer battles.',
    ],
    highlightsHeading: 'On the circuit',
    highlights: [
      { title: 'Indian Beatbox Championship \u2014 Solo Eliminations, Beatbox India', result: 'Competitor' },
      { title: '256 Hertz Beatboxer Battles', result: 'Judge' },
      { title: 'Street-culture & college beatbox battles', result: 'Official judge' },
      { title: 'Indian beatbox community', result: 'Mentor' },
    ],
  },
  // Soundboard. Set `src` to a recording of Benji (e.g. IMG_AUDIO + 'kick.mp3') — empty src uses the built-in synth stand-in.
  drop: {
    heading: 'Drop a beat',
    intro: 'Tap a pad or hit the keys.', // once real recordings are in, e.g. 'Every sound is one of Benji\u2019s.'
    pads: [
      { label: 'Kick', sub: 'Boots', key: 'Q', synth: 'kick', src: '' },
      { label: 'Snare', sub: 'Pf', key: 'W', synth: 'snare', src: '' },
      { label: 'Hi-hat', sub: 'Ts', key: 'E', synth: 'hat', src: '' },
      { label: 'Open hat', sub: 'Tsss', key: 'R', synth: 'ohat', src: '' },
      { label: 'Bass', sub: 'Wub', key: 'A', synth: 'bass', src: '' },
      { label: 'Scratch', sub: 'Wikka', key: 'S', synth: 'scratch', src: '' },
      { label: 'Rim', sub: 'Tk', key: 'D', synth: 'rim', src: '' },
      { label: 'Zap', sub: 'Pew', key: 'F', synth: 'zap', src: '' },
    ],
  },
  gallery: {
    heading: 'Gallery',
    items: [
      { src: IMG + 'photo-01.webp', ratio: '3/4', alt: 'Performing in front of a giant LED screen, crowd filming on phones' },
      { src: IMG + 'photo-07.webp', ratio: '4/5', alt: 'Profile portrait in smoke' },
      { src: IMG + 'photo-04.webp', ratio: '3/4', alt: 'At the decks from behind, backlit' },
      { src: IMG + 'hero.webp', ratio: '1/1', alt: 'Arm raised to a halo of stage light' },
      { src: IMG + 'photo-02.webp', ratio: '3/4', alt: 'Beatboxing into the mic in low light' },
      { src: IMG + 'photo-06.webp', ratio: '3/4', alt: 'Behind the DJ booth under a large projected face' },
      { src: IMG + 'photo-09.webp', ratio: '3/4', alt: 'Beatboxing while mixing on a Pioneer controller' },
      { src: IMG + 'photo-03.webp', ratio: '3/4', alt: 'On stage above a crowd of raised phones' },
      { src: IMG + 'photo-08.webp', ratio: '3/4', alt: 'Hands on the mixer in near darkness' },
    ],
  },
  socials: [
    { label: 'Instagram', handle: '@benjamin.solomon.music', url: 'https://www.instagram.com/benjamin.solomon.music/' },
    { label: 'YouTube', handle: '@benjamin.solomon', url: YT },
    { label: 'Spotify', handle: 'Benjamin Solomon', url: 'https://open.spotify.com/artist/0wy2Hl1xD3Ck9osL4leyI9?si=4ywCBV4aRdS_lvAO4VZuXw' },
  ],
  mascot: {
    // sprite frames: idle, two stride frames, and the smile he flashes once he stops walking
    frames: { idle: IMG + 'benji-walk-idle.png', a: IMG + 'benji-walk-a.png', b: IMG + 'benji-walk-b.png', smile: IMG + 'benji-walk-smile.png' },
    walkCycle: ['a', 'idle', 'b', 'idle'],
    stridePx: 16,        // px travelled per walk frame
    smileAfter: 0.7,     // seconds standing still before he smiles
    opacity: 0.85,
    hint: 'Tap me for the menu', // bubble shown once after the intro
    sound: true,          // each tap plays a synthesized beatbox hit (kick, hat, snare, kick+hat)
    bpm: 128,             // he bobs at this tempo while the track plays
    secret: { taps: 5, window: 2.4, clipIndex: 9, line: 'Secret set unlocked!' }, // easter egg: tap 5× fast → opens this Short (index in beatbox.clips)
    hello: 'Yo! Scroll, I\u2019ll walk you through.',
    lines: { about: 'That\u2019s me. Bangalore!', dj: 'Drop the needle.', beatbox: 'Mic check, 1 2.', gallery: 'Say cheese.' },
    footer: 'Let\u2019s go there\u2014together.',
    // Hidden mini game. Hold Lil Benji (holdMs) or type `typed` anywhere. Each voice is a zone on his body.
    game: {
      title: 'Beat back', holdMs: 650, typed: 'beat', hint: 'Psst\u2026 hold me down.',
      intro: 'Lil Benji drops a pattern. Beat it back.', listen: 'Listen\u2026', turn: 'Your turn', clean: 'Clean.', miss: 'Off beat.',
      voices: [
        { label: 'Ts', part: 'head', key: '1', synth: 'hat', top: 0, h: 24 },
        { label: 'Pf', part: 'mouth', key: '2', synth: 'snare', top: 24, h: 12 },
        { label: 'Boots', part: 'chest', key: '3', synth: 'kick', top: 36, h: 27 },
        { label: 'Wub', part: 'feet', key: '4', synth: 'bass', top: 63, h: 37 },
      ],
    },
    beatbox: ['Boots n cats n boots n cats', 'Pff-tss-k pff-tss', 'B-b-b-bass drop', 'Ka-ts ka-ts brrr', 'Wub wub wub'],
  },
  finale: {
    image: IMG + 'finale.webp', imageAlt: 'Benji on stage in silhouette, pointing out over the crowd with the mic to his mouth',
    label: 'The journey is live',
    text: 'Let\u2019s go there \u2014 together.',
  },
  // Collaborations (footer): lead line + cards. Swap images for real Desibels / collab photos.
  collabs: {
    lead: 'While he performs at massive underground music festivals and clubs, Benjamin is widely recognized in the digital space for creative cross-genre collaborations.',
    cards: [
      { tag: 'Project', title: 'Desibels', text: 'Brings together the different elements of Indian music.', image: IMG + 'photo-06.webp', alt: 'Benji behind the booth under a large projected face', pos: '50% 40%' },
      { tag: 'Classical', title: 'Carnatic mridangam', text: 'His cutting-edge beatboxing and electronic DJing alongside traditional classical artists.', image: IMG + 'photo-09.webp', alt: 'Benji beatboxing while mixing', pos: '50% 35%' },
      { tag: 'Dance', title: 'B-boys', text: 'Bridging old-school rhythms with modern hip-hop culture.', image: IMG + 'photo-03.webp', alt: 'Benji on stage above a crowd', pos: '50% 50%' },
      { tag: 'Digital', title: 'Creators & artists', text: 'Well-known content creators, indie musicians, and hip-hop artists across India.', image: IMG + 'photo-01.webp', alt: 'Benji performing in front of a giant LED screen', pos: '50% 40%' },
    ],
  },
  footer: {
    noteLabel: 'Beyond the stage',
    note: 'While he performs at massive underground music festivals and clubs, Benjamin is widely recognized in the digital space for creative cross-genre collaborations. He regularly interacts with well-known content creators, indie musicians, and hip-hop artists across India. For instance, he participated in projects like Desibels, which brings together the different elements of Indian music, pairing his cutting-edge beatboxing and electronic DJing alongside traditional classical artists (like Carnatic mridangam players) and B-boys to bridge old-school rhythms with modern hip-hop culture',
    from: '', // optional signature line under the note
    copyright: '\u00A9 2026 Benjamin Solomon',
  },
};

// ═══════════ CRT CONFIG — tune every signal effect here (all 0–1 unless noted) ═══════════
const CRT = {
  scanlines: 0.32,     // CSS scanline opacity
  grille: 0.9,         // faint vertical aperture grille
  curvature: 0.22,     // barrel bend of the screen edge
  vignette: 0.8,       // edge darkening
  glow: 0.7,           // phosphor bloom on text + red edge glow
  grain: 0.11,         // animated film grain
  flicker: 0.5,        // chance/strength of rare micro-flicker
  roll: 0,             // slow rolling refresh bar (removed)
  aberration: 1.0,     // RGB split amount (hero shader, headings, glitches)
  transitions: 1.0,    // section-to-section signal warp
  domShake: 1.0,       // horizontal jitter of sections during transitions
  scrollReact: 1.0,
  vibrate: 1.0,        // page + text shake while the track plays (0 = off)    // how much scroll speed boosts waves + distortion
  burstEvery: [3, 7],  // seconds between logo glitch bursts (min, max)
  levels: { full: 1, low: 0.45, off: 0 },
  mobileScale: 0.6, lowPowerScale: 0.75,
  overlayRes: 0.5,     // overlay canvas resolution (fraction of CSS px)
};

// ═══════════ MOTION TOKENS ═══════════
const MOTION = {
  ease: { out: 'expo.out', inOut: 'expo.inOut', soft: 'power3.out', in: 'power3.in' },
  dur: { fast: 0.5, base: 1.0, slow: 1.3, media: 1.6 },
  stagger: { word: 0.06, line: 0.09, item: 0.08, row: 0.14 },
  scrub: 0.8,
  start: 'top 85%',
  toggle: 'play none none reverse',
};
const STRIPS = 12;
const RED = '#E1301C', HOT = '#FF4128', TEAL = '#14A3A8';
const MQ = '(max-width: 860px)';
const SECTION_IDS = SITE.nav.map(n => n.href.slice(1));
const LEVEL_ORDER = ['full', 'low', 'off'];
const SCRAMBLE = '<>/\\_-=+*#01[]';
const words = s => { const a = s.split(' '); return a.map((w, i) => i < a.length - 1 ? w + ' ' : w); };
const para = s => ({ text: s, words: words(s) });
const sstep = (a, b, x) => { const t = Math.min(1, Math.max(0, (x - a) / (b - a))); return t * t * (3 - 2 * t); };

// ═══════════ SHADERS ═══════════
const VS = 'attribute vec2 p;varying vec2 vUv;void main(){vUv=p*.5+.5;gl_Position=vec4(p,0.,1.);}';
const FS_CRT = `precision mediump float;
varying vec2 vUv;
uniform vec2 uRes;uniform float uTime,uGrain,uVig,uCurve,uGlow,uFlick,uRoll;uniform vec3 uB;
float h(vec2 p){return fract(sin(dot(p,vec2(12.9898,78.233)))*43758.5453);}
void main(){
  vec2 uv=vUv;float sy=1.-uv.y;vec2 c=uv-.5;float r2=dot(c,c);
  vec2 cc=c*(1.+uCurve*r2*1.8);
  vec2 e=abs(c*(1.+uCurve*r2*.12))*2.;
  float inside=smoothstep(1.,.994,e.x)*smoothstep(1.,.994,e.y);
  float vig=smoothstep(1.12,.3,length(cc*vec2(.92,1.06)));
  float a=(1.-mix(1.,vig,uVig))*.6;a=max(a,1.-inside);
  vec3 col=vec3(.88,.19,.11)*(1.-vig)*inside*uGlow*.14;
  float g=h(floor(gl_FragCoord.xy)+fract(uTime*7.)*91.)-.5;
  col+=vec3(max(g,0.))*uGrain;a+=max(-g,0.)*uGrain;
  float rp=fract(uTime*.06)*1.4-.2;col+=vec3(smoothstep(.1,0.,abs(sy-rp))*.03*uRoll);
  a+=uFlick;
  float I=uB.y;
  if(I>.002){
    float d=sy-uB.x;float t=uTime;
    if(uB.z<.5){
      float wy=uB.x+sin(uv.x*9.+t*5.)*.028*I+sin(uv.x*31.-t*9.)*.009*I;
      col+=vec3(.88,.19,.11)*smoothstep(.004,0.,abs(sy-wy))*1.2*I+vec3(.95)*smoothstep(.0025,0.,abs(sy-wy-.014*I))*.45*I;
      float m=smoothstep(.24*I,0.,abs(d));
      float tear=step(.86,h(vec2(floor(sy*90.),floor(t*14.))))*m;
      col+=vec3(.9)*tear*.2*I;a+=tear*.25*I+step(.5,fract(sy*140.+t*3.))*m*.1*I;
    }else if(uB.z<1.5){
      float tp=uB.x+(fract(t*.9)-.5)*.36*I;float dd=abs(sy-tp);
      a+=smoothstep(.05,.0,dd)*.55*I;
      float edge=smoothstep(.007,0.,abs(dd-.05));
      float sn=h(vec2(floor(uv.x*uRes.x/3.),floor(sy*uRes.y/2.))+fract(t*9.));
      col+=vec3(sn)*edge*.55*I+vec3(.88,.19,.11)*edge*.5*I;
      float m=smoothstep(.2*I,0.,abs(d));
      col+=vec3(.88,.19,.11)*step(.9,h(vec2(floor(sy*60.),floor(t*10.))))*m*.35*I;
    }else{
      float m=smoothstep(.15*I,0.,abs(d));
      float sn=h(floor(gl_FragCoord.xy/2.)+fract(t*13.)*57.);
      col+=vec3(sn)*m*.26*I;a+=(1.-sn)*m*.18*I;
      col+=vec3(.88,.19,.11)*smoothstep(.0025,0.,abs(d+sin(t*30.)*.004))*I;
    }
  }
  gl_FragColor=vec4(col,clamp(a,0.,1.));
}`;
const FS_HERO = `precision mediump float;
varying vec2 vUv;
uniform sampler2D uTex;uniform vec2 uRes;uniform float uAspI,uTime,uWarp,uAb,uVel;
float h(vec2 p){return fract(sin(dot(p,vec2(12.9898,78.233)))*43758.5453);}
vec2 cover(vec2 uv){float A=uRes.x/uRes.y;vec2 s=A>uAspI?vec2(1.,uAspI/A):vec2(A/uAspI,1.);return uv*s+(1.-s)*vec2(.45,.68);}
float L(vec2 uv){vec3 c=texture2D(uTex,cover(clamp(uv,0.,1.))).rgb;float l=dot(c,vec3(.299,.587,.114));return clamp((l-.5)*1.32+.5-.09,0.,1.);}
void main(){
  vec2 uv=vUv;float y=1.-uv.y;float w=uWarp;float t=uTime;
  float dx=sin(y*14.+t*3.)*.03*w+sin(y*47.-t*7.)*.008*w;
  float row=floor(y*32.);
  dx+=step(.8,h(vec2(row,floor(t*12.))))*(h(vec2(row,7.))-.5)*.14*w;
  float tp=fract(t*.45)*1.4-.2;float track=smoothstep(.07,0.,abs(y-tp))*w;
  dx+=track*.04*sin(y*200.);
  vec2 p=vec2(uv.x+dx,uv.y);
  float off=(.0022+.028*w+uVel*.006)*uAb;
  float l=L(p),lr=L(p+vec2(off,0.)),lw=L(p-vec2(off*.7,0.));
  vec3 col=vec3(l)+vec3(.88,.19,.11)*max(lr-l,0.)*1.5+vec3(.95)*max(lw-l,0.)*.25;
  float sn=h(floor(gl_FragCoord.xy/2.)+fract(t*11.)*37.);
  col=mix(col,vec3(sn),track*.35)*(1.-track*.25);
  gl_FragColor=vec4(col,1.);
}`;

const hasWebGL = () => { try { const c = document.createElement('canvas'); return !!(c.getContext('webgl')); } catch (e) { return false; } };

class Component extends DCLogic {
  rootRef = React.createRef();
  state = (() => {
    const mobile = window.matchMedia(MQ).matches;
    const lowPower = (navigator.hardwareConcurrency || 8) <= 4 || (navigator.deviceMemory || 8) <= 4;
    let level = 'full';
    return {
      mobile, level, gl: hasWebGL(),
      reduced: window.matchMedia('(prefers-reduced-motion: reduce)').matches,
      deviceScale: (mobile ? CRT.mobileScale : 1) * (lowPower ? CRT.lowPowerScale : 1),
      menuOpen: false, lb: null, ring: null, active: null,
    };
  })();

  // Effective CRT intensity: tweak × visitor switch × device
  kNow() { return (this.props.crtStrength ?? 0.4) * CRT.levels[this.state.level] * this.state.deviceScale; }
  fxOn() { return !this.reduced && this.state.level !== 'off'; }
  restRgb() {
    const k = this.kNow();
    if (k <= 0.01) return 'none';
    const a = (0.6 + 0.8 * k) * CRT.aberration, m = Math.min(1, 0.4 + 0.6 * k), gl = CRT.glow * Math.min(1.2, k);
    return `${(-2 * a).toFixed(2)}px 0 rgba(225,48,28,${(0.75 * m).toFixed(2)}), ${(2 * a).toFixed(2)}px 0 rgba(242,242,242,${(0.18 * m).toFixed(2)}), 0 0 ${(18 * gl).toFixed(1)}px rgba(242,242,242,${(0.14 * gl).toFixed(2)})`;
  }
  splitRgb() { const a = 12 * Math.max(0.4, this.kNow()) * CRT.aberration; return `${-a}px 0 rgba(225,48,28,.9), ${a * 0.7}px 0 rgba(242,242,242,.45), 0 0 0px rgba(242,242,242,0)`; }
  applyRgbVar() {
    const root = this.rootRef.current; if (!root) return;
    const v = this.restRgb();
    root.style.setProperty('--rgb', v);
    if (this.introDone) this.$$('char').forEach(c => { c.style.textShadow = v; });
  }

  componentDidMount() {
    this.alive = true;
    this.reduced = this.state.reduced;
    this.fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    this.waveAmp = 1; this.waveIn = 0; this.t0 = performance.now(); this.last = this.t0;
    this.vel = 0; this.lastY = window.scrollY; this.heroWarp = 0; this.heroIntroWarp = 0; this.flick = 0; this.flickT = 0;
    this.fpsAcc = 0; this.fpsN = 0; this.degraded = false;
    this.applyRgbVar();
    this.syncMeta();
    this.onVis = () => {
      if (document.hidden) { cancelAnimationFrame(this.raf); this.raf = 0; window.gsap && window.gsap.ticker.sleep(); }
      else if (this.ready && !this.raf) { this.last = performance.now(); window.gsap && window.gsap.ticker.wake(); this.raf = requestAnimationFrame(this.frame); }
    };
    document.addEventListener('visibilitychange', this.onVis);
    this.mq = window.matchMedia(MQ);
    this.onMq = e => this.setState({ mobile: e.matches, menuOpen: false });
    this.mq.addEventListener('change', this.onMq);
    this.onKey = e => {
      if (e.key === 'Escape') { if (this.state.ring != null && !this.state.lb) this.closeRing(); this.setState({ lb: null, menuOpen: false }); }
      if (e.key === 'Tab') this.trapFocus(e);
      if (this.state.lb && this.state.lb.type === 'image') {
        if (e.key === 'ArrowRight') this.stepLb(1);
        if (e.key === 'ArrowLeft') this.stepLb(-1);
      }
    };
    window.addEventListener('keydown', this.onKey);
    this.onImgLoad = e => {
      if (e.target.tagName !== 'IMG' || !window.ScrollTrigger) return;
      clearTimeout(this.refreshT); this.refreshT = setTimeout(() => window.ScrollTrigger.refresh(), 150);
    };
    this.rootRef.current.addEventListener('load', this.onImgLoad, true);
    this.waitLibs().then(() => { if (this.alive) this.init(); }).catch(err => { console.warn('Benji Beats init:', err && err.message ? err.message : err); this.revealAll(); });
  }
  componentDidUpdate(prevProps, prevState) {
    // the runtime may not pass prevState — keep our own snapshot
    const prev = prevState || this._prevState || this.state;
    this._prevState = this.state;
    prevProps = prevProps || this._prevProps || this.props;
    this._prevProps = this.props;
    const locked = !!(this.state.lb || this.state.menuOpen);
    if (locked !== !!(prev.lb || prev.menuOpen)) {
      if (this.lenis) locked ? this.lenis.stop() : this.lenis.start();
      else document.documentElement.style.overflow = locked ? 'hidden' : '';
      if (locked) this.showNav(true);
    }
    // focus management for dialogs: move focus in on open, restore on close
    const opened = (this.state.lb && !prev.lb) || (this.state.menuOpen && !prev.menuOpen);
    const closed = (!this.state.lb && prev.lb) || (!this.state.menuOpen && prev.menuOpen);
    if (opened) {
      // focus-in handled by focusDialog() from openLb/toggleMenu
    } else if (closed && !this.state.lb && !this.state.menuOpen) {
      const r = this.returnFocus; this.returnFocus = null;
      if (r && document.contains(r) && !this.navJump) r.focus({ preventScroll: true });
      this.navJump = false;
    }
    const g = window.gsap;
    if (g && !this.reduced) {
      if (this.state.menuOpen && !prev.menuOpen) g.fromTo(this.$$('mlink'), { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.42, ease: MOTION.ease.out, stagger: 0.04 });
      if (this.state.lb && this.state.lb !== prev.lb) g.fromTo(this.$('lbbody'), { opacity: 0, scale: 0.97, filter: 'blur(4px)' }, { opacity: 1, scale: 1, filter: 'blur(0px)', duration: 0.3, ease: MOTION.ease.out, clearProps: 'filter' });
    }
    if (prev.level !== this.state.level || prevProps.crtStrength !== this.props.crtStrength) {
      this.applyRgbVar();
      try { localStorage.setItem('bb-crt-level', this.state.level); } catch (e) {}
    }
    if (prev.lb && !this.state.lb && this.state.ring != null) this.closeRing();
    if (prev.mobile !== this.state.mobile && this.ready) requestAnimationFrame(() => this.buildSections());
  }
  syncMeta() {
    const M = SITE.meta, set = (sel, attr, v) => { const el = document.head.querySelector(sel); if (el) el.setAttribute(attr, v); };
    document.title = M.title;
    set('meta[name="description"]', 'content', M.description);
    ['og:title', 'twitter:title'].forEach(p => set(`meta[property="${p}"],meta[name="${p}"]`, 'content', M.title));
    ['og:description', 'twitter:description'].forEach(p => set(`meta[property="${p}"],meta[name="${p}"]`, 'content', M.description));
    ['og:image', 'twitter:image'].forEach(p => set(`meta[property="${p}"],meta[name="${p}"]`, 'content', M.shareImage));
    
    set('link[rel="icon"]', 'href', M.favicon);
  }
  dialogFocusables() {
    const box = this.state.lb ? this.$('lb') : this.state.menuOpen ? this.$('menu') : null;
    if (!box) return [];
    const list = [...box.querySelectorAll('a[href],button,iframe,[tabindex]:not([tabindex="-1"])')];
    if (this.state.menuOpen) { const btn = this.$('mascotBtn'); btn && list.unshift(btn); }
    return list;
  }
  trapFocus(e) {
    const f = this.dialogFocusables(); if (!f.length) return;
    const first = f[0], last = f[f.length - 1], a = document.activeElement;
    if (!f.includes(a)) { e.preventDefault(); first.focus(); }
    else if (e.shiftKey && a === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && a === last) { e.preventDefault(); first.focus(); }
  }

  componentWillUnmount() {
    this.alive = false;
    document.removeEventListener('visibilitychange', this.onVis);
    cancelAnimationFrame(this.raf);
    clearTimeout(this.burstT); clearTimeout(this.sayT); clearInterval(this.shoutT);
    this.audio && this.audio.pause();
    this.tick && window.gsap && window.gsap.ticker.remove(this.tick);
    this.lenis && this.lenis.destroy();
    this.ctx && this.ctx.revert();
    this.secCtx && this.secCtx.revert();
    window.removeEventListener('resize', this.onResize);
    window.removeEventListener('keydown', this.onKey);
    window.removeEventListener('keydown', this.onPadKey);
    window.removeEventListener('keydown', this.onBkKey);
    (this.bkT || []).forEach(clearTimeout); clearTimeout(this.lpT);
    if (this.autoGo) ['pointerdown', 'keydown', 'touchend'].forEach(t => window.removeEventListener(t, this.autoGo, true));
    if (this.audio) this.audio.pause();
    if (this.dockST) this.dockST.kill();
    window.removeEventListener('scroll', this.onWinScroll);
    document.removeEventListener('pointermove', this.onMove);
    document.removeEventListener('pointerover', this.onOver);
    document.removeEventListener('pointerover', this.onFxOver);
    document.documentElement.classList.remove('bb-cursor');
    this.mq && this.mq.removeEventListener('change', this.onMq);
    (this.anims || []).forEach(a => a.cancel());
  }
  async waitLibs() {
    const start = performance.now();
    while (!(window.gsap && window.ScrollTrigger && window.Lenis)) {
      if (performance.now() - start > 6000) break;
      await new Promise(r => setTimeout(r, 40));
    }
    try { await Promise.race([document.fonts.ready, new Promise(r => setTimeout(r, 1500))]); } catch (e) {}
  }
  $(k) { return this.rootRef.current && this.rootRef.current.querySelector(`[data-bb="${k}"]`); }
  $$(k) { return this.rootRef.current ? [...this.rootRef.current.querySelectorAll(`[data-bb="${k}"]`)] : []; }

  init() {
    const g = window.gsap;
    if (!g) return this.revealAll();
    g.registerPlugin(window.ScrollTrigger);
    if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
    window.scrollTo(0, 0);
    if (!this.reduced && window.Lenis) {
      this.lenis = new window.Lenis({ duration: 1.15, easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)), smoothWheel: true, wheelMultiplier: 0.9, touchMultiplier: 1.3 });
      this.lenis.on('scroll', window.ScrollTrigger.update);
      this.tick = t => this.lenis.raf(t * 1000);
      g.ticker.add(this.tick);
      g.ticker.lagSmoothing(0);
    }
    this.setupGL();
    this.setupWave();
    this.setupAmbient();
    this.setupChrome();
    this.setupCursor();
    this.setupFxHover();
    this.ctx = g.context(() => {
      if (this.reduced || this.props.skipIntro) this.revealAll(); else this.intro();
      this.setupScroll();
    }, this.rootRef.current);
    this.ready = true;
    this.buildSections();
    window.ScrollTrigger.addEventListener('refresh', () => this.computeBounds());
    this.computeBounds();
    this.scheduleBurst();
    this.onPadKey = e => {
      if (e.repeat || e.metaKey || e.ctrlKey || e.altKey || this.state.lb || this.state.bk) return;
      const tg = e.target; if (tg && (tg.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(tg.tagName))) return;
      const GW = SITE.mascot.game;
      if (GW && (e.key || '').length === 1) { this.kbuf = ((this.kbuf || '') + e.key.toLowerCase()).slice(-GW.typed.length); if (this.kbuf === GW.typed) { this.kbuf = ''; this.openBk(); return; } }
      if (this.state.menuOpen) return;
      const i = SITE.drop.pads.findIndex(p => p.key.toLowerCase() === (e.key || '').toLowerCase()); if (i < 0) return;
      const sec = this.rootRef.current.querySelector('#drop'); if (!sec) return;
      const r = sec.getBoundingClientRect(); if (r.bottom < 0 || r.top > window.innerHeight) return;
      e.preventDefault(); this.hitPad(i);
    };
    window.addEventListener('keydown', this.onPadKey);
    this.raf = requestAnimationFrame(this.frame);
    window.addEventListener('load', () => window.ScrollTrigger.refresh(), { once: true });
  }

  scrollToHash(hash) {
    const el = hash === '#top' ? 0 : document.querySelector(hash);
    if (el === null) return;
    if (this.lenis) this.lenis.scrollTo(el, { duration: 1.6, easing: t => 1 - Math.pow(1 - t, 4) });
    else window.scrollTo({ top: el === 0 ? 0 : el.getBoundingClientRect().top + window.scrollY, behavior: this.reduced ? 'auto' : 'smooth' });
  }

  revealAll() {
    const set = (el, s) => el && Object.assign(el.style, s);
    set(this.$('screen'), { clipPath: 'inset(0% 0% 0% 0%)' });
    set(this.$('flash'), { opacity: 0 });
    set(this.$('photo'), { opacity: 1 });
    ['sub', 'hud', 'cue', 'nav'].forEach(k => set(this.$(k), { opacity: 1 }));
    const ld = this.$('loader'); if (ld) ld.style.display = 'none';
    set(this.$('wave'), { opacity: 0.9 });
    this.waveIn = 1; this.introDone = true; this.autoStart();
    setTimeout(() => this.mascotIn(), 300);
    this.$$('char').forEach(c => set(c, { opacity: 1, textShadow: this.restRgb() }));
  }

  // ═══ HERO INTRO: CRT power-on → glitch title → signal locks in (≈2.7s)
  intro() {
    const g = window.gsap, R = g.utils.random;
    this.lenis && this.lenis.stop();
    this.heroIntroWarp = this.fxOn() ? 0.9 : 0;
    const tl = g.timeline({ paused: true, defaults: { ease: 'expo.out' }, onComplete: () => { this.introDone = true; this.autoStart(); this.applyRgbVar(); this.mascotIn(); this.lenis && !this.state.lb && !this.state.menuOpen && this.lenis.start(); } });
    const screen = this.$('screen'), flash = this.$('flash'), chars = this.$$('char');
    g.set(screen, { clipPath: 'inset(0% 0% 0% 0%)' }); g.set(chars, { opacity: 0 }); g.set(this.$('photo'), { opacity: 0 });
    tl.to(chars, { opacity: 1, duration: 0.6, ease: 'power2.out' }, 0)
      .fromTo(this.$('photo'), { opacity: 0 }, { opacity: 1, duration: 2.4, ease: 'power1.inOut' }, 0.3)
      .to(this, { heroIntroWarp: 0, duration: 1.4, ease: 'power3.out' }, 0.9)
      .to(this, { waveIn: 1, duration: 0.9, ease: 'power2.out' }, 1.2)
      .fromTo(this.$('wave'), { opacity: 0 }, { opacity: 0.9, duration: 0.6 }, 1.2)
      .fromTo(this.$('nav'), { opacity: 0 }, { opacity: 1, duration: 0.6 }, 1.4);
    this.runLoader(() => tl.play());
  }
  // Loading screen: counts up while fonts + hero photo load (min ~1.4s), then wipes up to reveal the hero
  runLoader(done) {
    const g = window.gsap, el = this.$('loader'), num = this.$('loadNum'), bar = this.$('loadBar');
    if (!el) return done();
    const run = this.$('loadRun'), MS = SITE.mascot, cyc = MS.walkCycle, fr = MS.frames;
    Object.values(fr).forEach(src => { const i = new Image(); i.src = src; });
    let last = 0, step = 0;
    const upd = () => {
      if (num) num.textContent = String(Math.round(prog.v)).padStart(3, '0');
      if (bar) bar.style.transform = `scaleX(${(prog.v / 100).toFixed(3)})`;
      if (run) {
        run.style.left = prog.v.toFixed(2) + '%';
        if (prog.v >= 100) run.src = fr.smile;
        else if (prog.v - last > 1.6) { last = prog.v; step++; run.src = fr[cyc[step % cyc.length]]; }
      }
    };
    const prog = { v: 0 };
    const img = new Image(); img.src = SITE.hero.image;
    const assets = Promise.race([
      Promise.all([document.fonts ? document.fonts.ready : 0, img.decode ? img.decode().catch(() => 0) : 0]),
      new Promise(r => setTimeout(r, 4000)),
    ]);
    // The loader name is a live copy of the hero title (same font, size, spacing), shown smaller in the centre
    const title = this.$('title'), slot = this.$('loadName'); let clone = null;
    if (title && slot) {
      const r = title.getBoundingClientRect();
      clone = title.cloneNode(true);
      clone.removeAttribute('data-bb'); clone.removeAttribute('aria-label'); clone.setAttribute('aria-hidden', 'true');
      clone.querySelectorAll('[data-bb]').forEach(n => n.removeAttribute('data-bb'));
      clone.querySelectorAll('span').forEach(n => { n.style.opacity = '1'; n.style.transform = 'none'; });
      Object.assign(clone.style, { position: 'fixed', left: r.left + 'px', top: r.top + 'px', width: r.width + 'px', margin: '0', zIndex: '1', pointerEvents: 'none', transformOrigin: '50% 50%' });
      slot.appendChild(clone);
      const s0 = Math.min(1, (innerWidth * (innerWidth < 768 ? 0.78 : 0.44)) / r.width);
      g.set(clone, { x: innerWidth / 2 - (r.left + r.width / 2), y: innerHeight / 2 - (r.top + r.height / 2), scale: s0, force3D: false });
      this.loadClone = clone;
    }
    const trot = setInterval(() => { if (run && prog.v < 100) { step++; run.src = fr[cyc[step % cyc.length]]; } }, 140);
    const crawl = g.to(prog, { v: 88, duration: 1.4, ease: 'power2.out', onUpdate: upd });
    Promise.all([assets, crawl.then()]).then(() => {
      g.to(prog, { v: 100, duration: 0.3, ease: 'power1.out', onUpdate: upd, onComplete: () => {
        clearInterval(trot); if (run) run.src = fr.smile;
        // the loader's name flies into the hero title's exact spot, then hands over to the real letters
        const chars = this.$$('char');
        const x = g.timeline({ delay: 0.15, onComplete: () => { g.set(chars, { opacity: 1 }); el.style.display = 'none'; if (clone) clone.remove(); done(); } });
        x.to(this.$('loadMeta'), { opacity: 0, duration: 0.35, ease: 'power1.out' }, 0.25);
        if (clone) x.to(clone, { x: 0, y: 0, scale: 1, force3D: false, duration: 1.2, ease: 'expo.inOut' }, 0.1);
        x.to(this.$('loadBg'), { opacity: 0, duration: 1, ease: 'power2.inOut' }, 0.45);
      } });
    });
  }

  // Finds the hole (counter) of the portal letter by rasterising it, so the picture opens exactly inside the O
  measureO(ch, title, screen) {
    const off = el => { let x = 0, y = 0; while (el && el !== screen) { x += el.offsetLeft; y += el.offsetTop; el = el.offsetParent; } return [x, y]; };
    const cs = getComputedStyle(ch), fs = parseFloat(cs.fontSize) || 100;
    const pad = Math.ceil(fs * 0.5), cv = document.createElement('canvas');
    cv.width = Math.ceil(ch.offsetWidth + pad * 2); cv.height = Math.ceil(fs * 2);
    const x = cv.getContext('2d', { willReadFrequently: true });
    x.font = `${cs.fontWeight} ${cs.fontSize} ${cs.fontFamily}`;
    const m = x.measureText(ch.textContent), A = m.fontBoundingBoxAscent || fs * 0.95, D = m.fontBoundingBoxDescent || fs * 0.25;
    const base = (ch.offsetHeight - (A + D)) / 2 + A;
    x.fillStyle = '#000'; x.fillText(ch.textContent, pad, pad + base);
    const gx = pad + (m.actualBoundingBoxRight - m.actualBoundingBoxLeft) / 2, gy = pad + base - (m.actualBoundingBoxAscent - m.actualBoundingBoxDescent) / 2;
    const d = x.getImageData(0, 0, cv.width, cv.height).data, ink = (px, py) => d[(Math.round(py) * cv.width + Math.round(px)) * 4 + 3] > 110;
    let rx = 0, ry = 0;
    if (!ink(gx, gy)) {
      while (gx + rx < cv.width && !ink(gx + rx, gy)) rx++;
      while (gy - ry > 0 && !ink(gx, gy - ry)) ry++;
    }
    if (rx < 2 || ry < 2) { rx = fs * 0.14; ry = fs * 0.26; }
    const W0 = cv.width, H0 = cv.height, fill = new Uint8Array(W0 * H0), stack = [Math.round(gy) * W0 + Math.round(gx)];
    if (!ink(gx, gy)) while (stack.length) {
      const i = stack.pop(); if (fill[i] || d[i * 4 + 3] > 110) continue;
      fill[i] = 1; const px = i % W0, py = (i / W0) | 0;
      if (px <= 0 || py <= 0 || px >= W0 - 1 || py >= H0 - 1) { fill.fill(0); break; } // leaked: not a closed counter
      stack.push(i + 1, i - 1, i + W0, i - W0);
    }
    const mc = document.createElement('canvas'); mc.width = W0; mc.height = H0;
    const mx = mc.getContext('2d'), md = mx.createImageData(W0, H0), grow = Math.max(1, Math.round(fs * 0.012));
    for (let py = 0; py < H0; py++) for (let px = 0; px < W0; px++) {
      if (!fill[py * W0 + px]) continue;
      for (let dy = -grow; dy <= grow; dy++) for (let dx = -grow; dx <= grow; dx++) { const q = ((py + dy) * W0 + px + dx) * 4; if (q >= 0 && q < md.data.length) md.data[q + 3] = 255; }
    }
    mx.putImageData(md, 0, 0);
    const hasMask = fill.some(v => v);
    const [ox, oy] = off(ch), [tx, ty] = off(title);
    const cx = ox + gx - pad, cy = oy + gy - pad, W = screen.clientWidth, H = screen.clientHeight;
    const cover = Math.hypot(Math.max(cx, W - cx), Math.max(cy, H - cy)) * 1.05;
    this.oGeo = { cx, cy, rx, ry, cover, gx, gy, w: W0, h: H0, mask: hasMask ? mc.toDataURL() : null };
    if (!hasMask) { const e = document.createElement('canvas'); e.width = W0; e.height = H0; const ex = e.getContext('2d'); ex.beginPath(); ex.ellipse(gx, gy, rx, ry, 0, 0, Math.PI * 2); ex.fill(); this.oGeo.mask = e.toDataURL(); }
    this.oS = cover / Math.min(rx, ry);
    window.gsap.set(title, { transformOrigin: `${(cx - tx).toFixed(1)}px ${(cy - ty).toFixed(1)}px` });
    const pi = this.$('portalImg'); if (pi) pi.style.transformOrigin = `${cx.toFixed(1)}px ${cy.toFixed(1)}px`;
    const PT = SITE.hero.portal, pe = this.$('portalEye');
    if (pe && PT.eye) {
      const r = PT.ratio || 1, cover = false, sc = cover ? Math.max(W / r, H) : Math.min(W / r, H), iw = sc * r, ih = sc;
      const pos = (PT.pos || '50% 50%').split(' ').map(v => parseFloat(v) / 100);
      const ex = (W - iw) * pos[0] + PT.eye[0] * iw, ey = (H - ih) * pos[1] + PT.eye[1] * ih;
      pe.style.transformOrigin = `${ex.toFixed(1)}px ${ey.toFixed(1)}px`;
    }
  }

  // ═══ HERO SCROLL: title parallax + photo push-in + shader signal warp → CRT switch-off
  setupScroll() {
    const g = window.gsap, ST = window.ScrollTrigger;
    const hero = this.$('hero'), title = this.$('title'), lines = this.$$('line');
    const strips = this.$$('strip'), ghost = this.$('ghost'), screen = this.$('screen');
    const sx = strips.map(s => g.quickSetter(s, 'x', 'px'));
    const gx = ghost && g.quickSetter(ghost, 'x', 'px');
    const warpOn = !this.reduced && this.props.scrollWarp !== false;
    const tl = g.timeline({ defaults: { ease: 'none' } });
    const PT = SITE.hero.portal, portal = this.$('portal'), pImg = this.$('portalImg');
    const oChar = PT && lines[PT.line] ? lines[PT.line].querySelectorAll('[data-bb="char"]')[PT.char] : null;
    const portalOn = !!(oChar && portal && !this.reduced);
    tl.to(this.$('photo'), { scale: 1.5, duration: 1 }, 0).to(this.$('wave'), { top: '18%', duration: 0.8 }, 0);
    if (portalOn) {
      this.measureO(oChar, title, screen);
      ST.addEventListener('refreshInit', () => { if ((this.heroP || 0) < 0.001) this.measureO(oChar, title, screen); });
      const others = this.$$('char').filter(c => c !== oChar);
      tl.to(others, { opacity: 0, yPercent: 30, duration: 0.16, stagger: { each: 0.008, from: 'center' } }, 0.03)
        .to(title, { scale: () => this.oS, duration: 0.6, ease: 'expo.in' }, 0.08)
        .to(oChar, { opacity: 0, duration: 0.06 }, 0.6)
        .fromTo(portal, { opacity: 0 }, { opacity: 1, duration: 0.08, immediateRender: false }, 0.05)
        .to(this.$('photo'), { opacity: 0.3, duration: 0.4 }, 0.15)
        .fromTo(pImg, { scale: 1.7 }, { scale: 1, force3D: false, duration: 0.56, ease: 'power2.out', immediateRender: false }, 0.08);
      // desktop only: push on into his eye. Mobile goes straight from the open O into About.
      if (!this.state.mobile) tl.fromTo(this.$('portalEye'), { scale: 1 }, { scale: () => PT.eyeZoom || 7, force3D: false, duration: 0.34, ease: 'power2.in', immediateRender: false }, 0.66);
      const paint = () => {
        const k = g.getProperty(title, 'scaleX') || 1, O = this.oGeo; if (!O || !O.mask) return;
        const full = k * Math.min(O.rx, O.ry) > O.cover, st = portal.style;
        const img = full ? 'none' : 'url(' + O.mask + ')', size = `${(O.w * k).toFixed(1)}px ${(O.h * k).toFixed(1)}px`, pos = `${(O.cx - O.gx * k).toFixed(1)}px ${(O.cy - O.gy * k).toFixed(1)}px`;
        st.webkitMaskImage = st.maskImage = img; st.webkitMaskSize = st.maskSize = size; st.webkitMaskPosition = st.maskPosition = pos;
      };
      tl.eventCallback('onUpdate', paint);
    } else {
      tl.to(lines[0] || {}, { xPercent: -16, duration: 0.7 }, 0)
        .to(lines[1] || {}, { xPercent: 16, duration: 0.7 }, 0)
        .to(title, { scale: 1.22, yPercent: -18, duration: 0.7 }, 0)
        .to(title, { opacity: 0, duration: 0.25 }, 0.45);
    }
    if (warpOn && !portalOn) {
      tl.to(this.$('track'), { top: '110%', opacity: 1, duration: 0.35 }, 0.5)
        .to(screen, { clipPath: 'inset(49.7% 0% 49.7% 0%)', duration: 0.12, ease: 'power3.in' }, 0.86)
        .to(this.$('flash'), { opacity: 0.85, duration: 0.06 }, 0.92)
        .to(screen, { clipPath: 'inset(49.7% 50% 49.7% 50%)', duration: 0.04 }, 0.98)
        .to(this.$('flash'), { opacity: 0, duration: 0.02 }, 0.98);
    } else {
      tl.to(this.$('photo'), { opacity: 0, duration: 0.3 }, 0.7);
    }
    const seed = strips.map((_, i) => Math.sin(i * 12.9898) * 43758.5453 % 1);
    ST.create({
      trigger: hero, start: 'top top', end: 'bottom bottom', scrub: this.reduced ? true : 0.6, animation: tl, invalidateOnRefresh: true,
      onUpdate: self => {
        const p = self.progress;
        this.heroP = p;
        this.waveAmp = 1 + p * 3.5;
        const w = warpOn ? sstep(0.32, 0.82, p) : 0;
        this.heroWarp = w;
        if (!strips.length || !warpOn) return;
        const W = window.innerWidth, k = Math.max(0.3, this.kNow());
        strips.forEach((_, i) => {
          const tear = Math.abs(seed[i]) > 0.72 ? Math.sin(p * 90 + i) * 0.05 : 0;
          sx[i](w * W * k * (0.07 * Math.sin(i * 0.85 + p * 16) + tear));
        });
        if (ghost) { ghost.style.opacity = (w * 0.55 * Math.min(1.4, k + 0.3)).toFixed(3); gx(-w * W * 0.035); }
      },
    });
  }

  // ═══ SECTION CHOREOGRAPHY. Rebuilt on breakpoint change.
  buildSections() {
    const g = window.gsap, ST = window.ScrollTrigger; if (!g || !this.rootRef.current) return;
    const M = MOTION, R = this.reduced, root = this.rootRef.current, mobile = this.state.mobile;
    this.secCtx && this.secCtx.revert();
    this.secCtx = g.context(() => {
      const q = (s, el = root) => [...el.querySelectorAll(s)];
      const st = (trigger, o = {}) => ({ trigger, start: M.start, toggleActions: M.toggle, ...o });
      const fade = (el, o = {}) => g.from(el, { opacity: 0, duration: M.dur.base, ease: M.ease.soft, scrollTrigger: st(o.trigger || el) });
      const cleanups = [];

      // Headings: masked word slide-up with an RGB split that settles to clean white
      q('[data-split]').forEach(h => {
        const w = q('[data-hw]', h);
        if (R) return fade(w, { trigger: h });
        g.from(w, { yPercent: 115, duration: M.dur.slow, ease: M.ease.out, stagger: M.stagger.word, scrollTrigger: st(h) });
        if (this.fxOn()) g.fromTo(w, { textShadow: () => this.splitRgb() }, { textShadow: () => this.restRgb(), duration: 1.1, ease: 'power2.out', stagger: M.stagger.word, scrollTrigger: st(h), onComplete() { g.set(this.targets(), { clearProps: 'textShadow' }); } });
        if (h.hasAttribute('data-drift') && !mobile) g.fromTo(h, { xPercent: mobile ? 2 : 5 }, { xPercent: mobile ? -2 : -5, ease: 'none', scrollTrigger: { trigger: h, start: 'top bottom', end: 'bottom top', scrub: M.scrub } });
      });

      // wave: words rise one after another with an overshooting crest, like a ripple running through the line
      q('[data-wave]').forEach((p, pi) => {
        if (R) return fade(p);
        const ws = q('[data-lw]', p);
        g.set(ws, { opacity: 0, yPercent: 110, rotate: 7, transformOrigin: '0% 100%' });
        let tl = null;
        ST.create({
          trigger: p, start: 'top 90%',
          onEnter: () => {
            if (tl) return tl.play();
            this.secCtx.add(() => {
              tl = g.timeline();
              ws.forEach((w, i) => tl.to(w, { keyframes: [{ opacity: 1, yPercent: -28, rotate: -2, duration: 0.32, ease: 'sine.out' }, { yPercent: 0, rotate: 0, duration: 0.5, ease: 'sine.inOut' }] }, i * 0.026));
            });
          },
          onLeaveBack: () => tl && tl.reverse(),
        });
      });

      q('[data-lines]').forEach(p => {
        if (p.hasAttribute('data-wave')) return;
        if (R || mobile) return fade(p);
        const ws = q('[data-lw]', p);
        g.set(ws, { opacity: 0, y: 18 });
        let tl = null;
        ST.create({
          trigger: p, start: 'top 88%',
          onEnter: () => {
            if (tl) return tl.play();
            const tops = ws.map(w => w.offsetTop), rows = [...new Set(tops)].sort((a, b) => a - b);
            this.secCtx.add(() => {
              tl = g.timeline();
              ws.forEach((w, i) => tl.to(w, { opacity: 1, y: 0, duration: M.dur.base, ease: M.ease.out }, rows.indexOf(tops[i]) * M.stagger.line));
            });
          },
          onLeaveBack: () => tl && tl.reverse(),
        });
      });

      q('[data-reveal]').forEach(el => g.from(el, { opacity: 0, y: R ? 0 : 40, duration: M.dur.base, ease: M.ease.out, scrollTrigger: st(el) }));
      if (!R) q('[data-scramble-in]').forEach(el => ST.create({ trigger: el, start: M.start, onEnter: () => this.scramble(el) }));

      q('[data-mask]').forEach(f => {
        if (R) return fade(f);
        const img = f.querySelector('[data-par]');
        g.fromTo(f, { clipPath: 'inset(100% 0% 0% 0%)' }, { clipPath: 'inset(0% 0% 0% 0%)', duration: M.dur.media, ease: M.ease.inOut, scrollTrigger: st(f, { start: 'top 80%' }) });
        if (!img) return;
        g.fromTo(img, { scale: 1.3 }, { scale: 1, duration: 2, ease: M.ease.out, scrollTrigger: st(f, { start: 'top 80%' }) });
        g.fromTo(img, { yPercent: -6 }, { yPercent: 6, ease: 'none', scrollTrigger: { trigger: f, start: 'top bottom', end: 'bottom top', scrub: M.scrub } });
      });

      const quote = this.$('quote');
      if (quote) {
        if (R) fade(quote);
        else {
          g.fromTo(q('[data-qw]', quote), { opacity: 0.12 }, { opacity: 1, ease: 'none', stagger: 0.12, scrollTrigger: { trigger: quote, start: 'top 82%', end: 'bottom 52%', scrub: M.scrub } });
          g.fromTo(q('[data-qhl]', quote), { opacity: 0, y: 26, textShadow: '0 0 0px rgba(255,65,40,0)' }, { opacity: 1, y: 0, textShadow: '0 0 24px rgba(255,65,40,.55)', ease: 'none', scrollTrigger: { trigger: quote, start: 'top 56%', end: 'top 38%', scrub: M.scrub } });
        }
      }

      if (!R) q('[data-band-row]').forEach((r, i) => g.fromTo(r, { xPercent: i % 2 ? -30 : 0 }, { xPercent: i % 2 ? 0 : -30, ease: 'none', scrollTrigger: { trigger: r.parentElement, start: 'top bottom', end: 'bottom top', scrub: M.scrub } }));

      const tags = q('[data-tag]');
      if (tags.length) g.from(tags, { opacity: 0, y: R ? 0 : 24, scale: R ? 1 : 0.92, duration: M.dur.base, ease: M.ease.out, stagger: M.stagger.item, scrollTrigger: st(tags[0].parentElement) });
      const mix = this.$('mix');
      this.bars = mix ? q('[data-bar]', mix) : [];
      this.barsReady = R;
      if (mix) {
        g.from(mix, { opacity: 0, x: R ? 0 : 90, duration: M.dur.slow, ease: M.ease.out, scrollTrigger: st(mix) });
        if (!R) g.from(this.bars, { scaleY: 0, duration: 0.9, ease: M.ease.out, stagger: { each: 0.012 }, delay: 0.2, scrollTrigger: st(mix, { toggleActions: 'play none none none' }), onComplete: () => { this.barsReady = true; } });
      }
      q('[data-count]').forEach(el => {
        if (el.dataset.num === '') return;
        const n = +el.dataset.num, pre = el.dataset.pre || '', suf = el.dataset.suf || '', o = { v: 0 };
        const set = () => { el.textContent = pre + Math.round(o.v) + suf; };
        set();
        ST.create({
          trigger: el, start: 'top 90%',
          onEnter: () => { if (R) { o.v = n; return set(); } g.fromTo(o, { v: 0 }, { v: n, duration: 2, ease: M.ease.out, onUpdate: set }); },
          onLeaveBack: () => { g.killTweensOf(o); o.v = 0; set(); },
        });
        cleanups.push(() => { o.v = n; set(); });
      });

      const stage = this.$('bbStage'), card = this.$('bbCard'), head = this.$('bbHead');
      if (stage && card && !R && !mobile) {
        g.timeline({ scrollTrigger: { trigger: stage, start: 'top top', end: 'bottom bottom', scrub: M.scrub } })
          .fromTo(card, { scale: mobile ? 0.55 : 0.34 }, { scale: 1, ease: 'power2.inOut' }, 0)
          .fromTo(card.querySelector('img'), { scale: 1.35 }, { scale: 1, ease: 'power2.inOut' }, 0)
          .fromTo(head, { scale: 1, opacity: 1 }, { scale: 0.84, opacity: 0.08, ease: 'none' }, 0);
      }

      q('ol').forEach(list => {
        const rows = q('[data-row]', list), lines = q('[data-rowline]', list);
        if (!rows.length) return;
        if (R) return g.from(rows, { opacity: 0, duration: M.dur.base, stagger: 0.08, scrollTrigger: st(list) });
        g.timeline({ scrollTrigger: st(list, { start: 'top 82%' }) })
          .fromTo(lines, { scaleX: 0, opacity: 1 }, { scaleX: 1, duration: 0.7, ease: 'power3.inOut', stagger: M.stagger.row }, 0)
          .fromTo(rows, { clipPath: 'inset(0% 100% 0% 0%)' }, { clipPath: 'inset(0% 0% -2px 0%)', duration: 0.9, ease: 'power3.inOut', stagger: M.stagger.row }, 0.06)
          .to(lines, { opacity: 0, duration: 0.6, stagger: M.stagger.row }, 0.75);
      });

      const gal = this.$('gal');
      if (gal) q('[data-gitem]', gal).forEach(it => {
        if (R) return fade(it);
        // simple, reliable reveal: photo always ends fully visible (no clip, crop or parallax)
        const col = Math.round(it.offsetLeft / Math.max(1, it.offsetWidth + 12));
        g.fromTo(it, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: M.dur.base, ease: M.ease.out, delay: col * 0.08, scrollTrigger: st(it, { start: 'top 95%', toggleActions: 'play none none none' }), onComplete: () => g.set(it, { clearProps: 'transform,opacity' }) });
      });

      // ── FINALE: CRT power-on line → full-bleed push-in → words fly in toward his pointing hand → orange duotone hit → power-off
      const fin = this.$('finale');
      if (false) {
        const img = this.$('finImg'), fw = q('[data-fw]', fin);
        g.fromTo(img, { scale: 1.15 }, { scale: 1, duration: 1.6, ease: M.ease.out, scrollTrigger: st(fin, { start: 'top 70%' }) });
        g.fromTo(fw, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: M.dur.base, ease: M.ease.out, stagger: 0.08, scrollTrigger: st(fin, { start: 'top 45%' }) });
      }
      if (fin && !R) {
        const scr = this.$('finScreen'), img = this.$('finImg'), fw = q('[data-fw]', fin), flash = this.$('finFlash'), tint = this.$('finTint'), lab = this.$('finLabel');
        const ftl = g.timeline({ defaults: { ease: 'none' }, scrollTrigger: { trigger: fin, start: 'top top', end: 'bottom bottom', scrub: M.scrub } });
        ftl.fromTo(scr, { clipPath: 'inset(49.6% 0% 49.6% 0%)' }, { clipPath: 'inset(0% 0% 0% 0%)', duration: 0.2, ease: 'expo.inOut' }, 0.02)
          .fromTo(flash, { opacity: 0.7 }, { opacity: 0, duration: 0.1, ease: 'steps(4)' }, 0.02)
          .fromTo(img, { scale: 1.55, xPercent: 6 }, { scale: 1.04, xPercent: -2, duration: 0.82 }, 0)
          .fromTo(lab, { opacity: 0, x: -30 }, { opacity: 1, x: 0, duration: 0.1 }, 0.24)
          .fromTo(fw, { xPercent: () => (mobile ? -60 : -140), opacity: 0, skewX: -28, textShadow: () => this.splitRgb() },
            { xPercent: 0, opacity: 1, skewX: 0, textShadow: () => this.restRgb(), duration: 0.22, stagger: 0.07, ease: 'power3.out' }, 0.28)
          .to(tint, { keyframes: [{ opacity: 0.55, duration: 0.02 }, { opacity: 0.1, duration: 0.02 }, { opacity: 0.45, duration: 0.02 }, { opacity: 0, duration: 0.1 }] }, 0.66)
          .to({}, { duration: 0.001 }, 1);
      }

      // ── DJ STAGE: photo opens from a framed window to full-bleed on entry, drifts, and sinks back on exit
      const djSec = q('#dj')[0], djBg = this.$('djBg'), djImg = this.$('djImg'), djFg = this.$('djFg');
      if (djSec && djBg && !R) {
        g.fromTo(djBg, { clipPath: mobile ? 'inset(4% 4% 4% 4%)' : 'inset(10% 9% 10% 9%)' }, { clipPath: 'inset(0% 0% 0% 0%)', ease: 'none', scrollTrigger: { trigger: djSec, start: 'top bottom', end: 'top 15%', scrub: M.scrub } });
        if (djImg) g.fromTo(djImg, { yPercent: -7, scale: 1.12 }, { yPercent: 7, scale: 1, ease: 'none', scrollTrigger: { trigger: djSec, start: 'top bottom', end: 'bottom top', scrub: M.scrub } });
        g.to(djBg, { opacity: 0.2, ease: 'none', scrollTrigger: { trigger: djSec, start: 'bottom 75%', end: 'bottom top', scrub: M.scrub } });
        if (djFg) g.to(djFg, { yPercent: -8, opacity: 0, ease: 'none', scrollTrigger: { trigger: djSec, start: 'bottom 45%', end: 'bottom 5%', scrub: M.scrub } });
      }

      // ── DJ SHOUT: cycles hype lines with a punch, shake and RGB split while on screen
      const shout = this.$('shout');
      if (shout && !R) {
        clearInterval(this.shoutT);
        let idx = 0, onScreen = false;
        const punch = () => {
          const k = Math.max(0.5, this.kNow());
          g.timeline()
            .fromTo(shout, { scale: 1.12, x: 0, textShadow: `${-14 * k}px 0 rgba(225,48,28,.95), ${10 * k}px 0 rgba(242,242,242,.5)` },
              { scale: 1, textShadow: this.restRgb(), duration: 0.5, ease: 'expo.out' })
            .to(shout, { keyframes: [{ x: -6 }, { x: 5 }, { x: -3 }, { x: 2 }, { x: 0 }], duration: 0.25, ease: 'none' }, 0);
          const dot = this.$('shoutDot'); dot && g.fromTo(dot, { scale: 2.2 }, { scale: 1, duration: 0.5, ease: 'expo.out' });
        };
        const next = () => {
          if (!onScreen || document.hidden || !this.fxOn()) return;
          const L = SITE.dj.shouts; idx = (idx + 1) % L.length;
          shout.textContent = L[idx];
          this.scramble(shout); punch();
        };
        ST.create({ trigger: shout, start: 'top bottom', end: 'bottom top', onToggle: s => { onScreen = s.isActive; if (s.isActive) punch(); } });
        this.shoutT = setInterval(next, (SITE.dj.shoutEvery || 2.6) * 1000);
        cleanups.push(() => { clearInterval(this.shoutT); shout.textContent = SITE.dj.shouts[0]; });
      }

      const fc = q('[data-fchar]'), foot = this.$('foot');
      if (fc.length && foot) {
        if (R) fade(fc, { trigger: foot });
        else g.fromTo(fc, { yPercent: 105 }, { yPercent: 0, ease: 'none', stagger: 0.06, scrollTrigger: { trigger: foot, start: 'top bottom', end: 'bottom bottom', scrub: M.scrub } });
      }

      SECTION_IDS.forEach((id, i) => {
        const el = root.querySelector('#' + id); if (!el) return;
        ST.create({ trigger: el, start: 'top 55%', end: 'bottom 55%', onToggle: s => {
          if (s.isActive) this.setActive(id);
          else if (i === 0 && s.direction < 0) this.setActive(null);
          else if (i === SECTION_IDS.length - 1 && s.direction > 0) this.setActive(null);
        } });
      });
      const footEl = this.$('foot');
      if (footEl) ST.create({ trigger: footEl, start: 'top 60%', onEnter: () => {} });

      if (!R && this.fine) q('[data-magnetic]').forEach(b => {
        const inner = b.querySelector('[data-mag-inner]');
        const o = { duration: 0.6, ease: 'power3' };
        const bx = g.quickTo(b, 'x', o), by = g.quickTo(b, 'y', o);
        const ix = inner && g.quickTo(inner, 'x', o), iy = inner && g.quickTo(inner, 'y', o);
        const mv = e => { const r = b.getBoundingClientRect(), dx = e.clientX - r.left - r.width / 2, dy = e.clientY - r.top - r.height / 2; bx(dx * 0.3); by(dy * 0.4); ix && ix(dx * 0.15); iy && iy(dy * 0.15); };
        const lv = () => { bx(0); by(0); ix && ix(0); iy && iy(0); };
        b.addEventListener('pointermove', mv); b.addEventListener('pointerleave', lv);
        cleanups.push(() => { b.removeEventListener('pointermove', mv); b.removeEventListener('pointerleave', lv); });
      });

      return () => cleanups.forEach(f => f());
    }, root);
    ST.refresh();
  }

  setActive(id) { if (this.state.active !== id) this.setState({ active: id }); }

  showNav(v) {
    const g = window.gsap, nav = this.$('nav');
    if (!g || !nav || this.navShown === v) return;
    this.navShown = v;
    g.to(nav, { yPercent: v ? 0 : -110, duration: v ? 0.7 : 0.5, ease: v ? MOTION.ease.out : MOTION.ease.in, overwrite: 'auto' });
  }
  setupChrome() {
    const g = window.gsap, prog = this.$('progress');
    const setP = g.quickSetter(prog, 'scaleX');
    this.navShown = true;
    let last = 0;
    const onScroll = y => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setP(max > 0 ? Math.min(1, y / max) : 0);
      const dir = y - last; last = y;
      if (!this.introDone || this.state.menuOpen || this.state.lb) return;
      if (y < 120) this.showNav(true);
      else if (Math.abs(dir) > 2) this.showNav(dir < 0);
    };
    if (this.lenis) this.lenis.on('scroll', e => onScroll(e.scroll));
    else { this.onWinScroll = () => onScroll(window.scrollY); window.addEventListener('scroll', this.onWinScroll, { passive: true }); }
  }

  setupCursor() {
    if (!this.fine) return;
    const g = window.gsap, dot = this.$('cursor'), lab = this.$('cursorLabel');
    if (!dot) return;
    document.documentElement.classList.add('bb-cursor');
    g.set(lab, { xPercent: -50, yPercent: -50 });
    const o = { duration: 0.35, ease: 'power3' };
    const dx = g.quickTo(dot, 'x', o), dy = g.quickTo(dot, 'y', o);
    const lx = g.quickTo(lab, 'x', o), ly = g.quickTo(lab, 'y', o);
    let shown = false;
    this.onMove = e => {
      dx(e.clientX); dy(e.clientY); lx(e.clientX); ly(e.clientY);
      if (!shown) { shown = true; g.to(dot, { opacity: 1, duration: 0.3 }); }
    };
    this.onOver = e => {
      const t = e.target.closest && e.target.closest('[data-cursor],a,button');
      if (t === this.curT) return;
      this.curT = t;
      const label = t ? t.getAttribute('data-cursor') : '';
      g.to(dot, { scale: t ? (label ? 6.4 : 3.2) : 1, backgroundColor: t ? TEAL : '#F2F2F2', boxShadow: t ? '0 0 14px rgba(20,163,168,.6)' : '0 0 0px rgba(255,65,40,0)', duration: 0.5, ease: MOTION.ease.out, overwrite: 'auto' });
      lab.textContent = label || '';
      g.to(lab, { opacity: label ? 1 : 0, duration: 0.25, overwrite: 'auto' });
    };
    document.addEventListener('pointermove', this.onMove, { passive: true });
    document.addEventListener('pointerover', this.onOver, { passive: true });
  }

  // ═══ GLITCH + SCRAMBLE ═══
  setupFxHover() {
    this.onFxOver = e => {
      if (!this.fxOn() || !e.target.closest) return;
      const s = e.target.closest('[data-scramble]'); if (s) this.scramble(s);
      const gl = e.target.closest('[data-glitch]');
      if (gl && gl !== this.lastGlitch) { this.lastGlitch = gl; this.glitch(gl); }
      if (!gl) this.lastGlitch = null;
    };
    document.addEventListener('pointerover', this.onFxOver, { passive: true });
  }
  scramble(el) {
    if (!this.fxOn() || el._scr) return;
    const node = [...el.childNodes].find(n => n.nodeType === 3 && n.nodeValue.trim());
    if (!node) return;
    const orig = node.nodeValue;
    el._scr = true;
    let f = 0; const total = 12;
    const step = () => {
      if (!this.alive) return;
      f++;
      const p = f / total;
      node.nodeValue = orig.split('').map((ch, i) => (ch === ' ' || i / orig.length < p) ? ch : SCRAMBLE[(Math.random() * SCRAMBLE.length) | 0]).join('');
      if (f < total) setTimeout(step, 30); else { node.nodeValue = orig; el._scr = false; }
    };
    step();
  }
  glitch(el) {
    const g = window.gsap; if (!g || el._gl) return;
    el._gl = true;
    const R = g.utils.random, k = Math.max(0.4, this.kNow()), mag = el.hasAttribute('data-magnetic');
    const tl = g.timeline({ onComplete: () => { g.set(el, { clearProps: 'filter' }); el._gl = false; } });
    for (let i = 0; i < 3; i++) {
      const o = R(3, 8) * k * CRT.aberration;
      const v = { filter: `drop-shadow(${(-o).toFixed(1)}px 0 0 rgba(225,48,28,.85)) drop-shadow(${(o * 0.7).toFixed(1)}px 0 0 rgba(242,242,242,.35))` };
      if (!mag) v.x = R(-4, 4) * k;
      tl.set(el, v, i * 0.05);
    }
    tl.set(el, mag ? { filter: 'none' } : { filter: 'none', x: 0 }, 0.16);
  }
  scheduleBurst() {
    const [a, b] = CRT.burstEvery;
    this.burstT = setTimeout(() => { if (!this.alive) return; this.burst(); this.scheduleBurst(); }, (a + Math.random() * (b - a)) * 1000);
  }
  burst() {
    if (!this.fxOn() || document.hidden || !this.introDone) return;
    const g = window.gsap, R = g.utils.random, k = Math.max(0.4, this.kNow());
    const targets = [this.$('logo')];
    if ((this.heroP || 0) < 0.3) targets.push(this.$('title'));
    targets.forEach(el => {
      if (!el) return;
      const tl = g.timeline();
      for (let i = 0; i < 5; i++) {
        const sliced = i % 2 === 0;
        tl.set(el, {
          clipPath: sliced ? `inset(${R(0, 40).toFixed(0)}% 0% ${R(0, 40).toFixed(0)}% 0%)` : 'inset(0% 0% 0% 0%)',
          x: R(-6, 6) * k,
          filter: `drop-shadow(${R(-10, -4).toFixed(1)}px 0 0 rgba(225,48,28,.9)) drop-shadow(${R(3, 7).toFixed(1)}px 0 0 rgba(242,242,242,.4))`,
        }, i * 0.045);
      }
      tl.set(el, { clearProps: 'clipPath,filter', x: 0 }, 0.24);
    });
  }

  // ═══ WEBGL: global CRT overlay + hero signal shader ═══
  makeGL(canvas, fs) {
    if (!canvas) return null;
    const gl = canvas.getContext('webgl', { premultipliedAlpha: true, alpha: true, antialias: false, powerPreference: 'high-performance' });
    if (!gl) return null;
    const sh = (type, src) => { const s = gl.createShader(type); gl.shaderSource(s, src); gl.compileShader(s); if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) { console.warn(gl.getShaderInfoLog(s)); return null; } return s; };
    const vs = sh(gl.VERTEX_SHADER, VS), f = sh(gl.FRAGMENT_SHADER, fs);
    if (!vs || !f) return null;
    const p = gl.createProgram(); gl.attachShader(p, vs); gl.attachShader(p, f); gl.linkProgram(p);
    if (!gl.getProgramParameter(p, gl.LINK_STATUS)) return null;
    gl.useProgram(p);
    const b = gl.createBuffer(); gl.bindBuffer(gl.ARRAY_BUFFER, b);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);
    const loc = gl.getAttribLocation(p, 'p'); gl.enableVertexAttribArray(loc); gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);
    const cache = {};
    const U = k => (k in cache ? cache[k] : (cache[k] = gl.getUniformLocation(p, k)));
    return { gl, U, canvas, scale: 1 };
  }
  sizeGL(o, scale) {
    const w = Math.max(2, Math.round(o.canvas.clientWidth * scale)), h = Math.max(2, Math.round(o.canvas.clientHeight * scale));
    if (o.canvas.width !== w || o.canvas.height !== h) { o.canvas.width = w; o.canvas.height = h; o.gl.viewport(0, 0, w, h); }
  }
  setupGL() {
    this.crt = this.makeGL(this.$('crtgl'), FS_CRT);
    if (this.crt) this.crt.scale = CRT.overlayRes * (this.state.mobile ? 0.8 : 1);
    const hc = this.$('herogl');
    if (hc) {
      this.hero = this.makeGL(hc, FS_HERO);
      if (this.hero) {
        this.hero.scale = Math.min(1.5, window.devicePixelRatio || 1) * (this.state.mobile ? 0.75 : 0.9);
        const img = new Image();
        img.onload = () => {
          const gl = this.hero.gl, tex = gl.createTexture();
          gl.bindTexture(gl.TEXTURE_2D, tex);
          gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
          gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, img);
          [gl.TEXTURE_WRAP_S, gl.TEXTURE_WRAP_T].forEach(p => gl.texParameteri(gl.TEXTURE_2D, p, gl.CLAMP_TO_EDGE));
          gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
          gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
          this.hero.aspI = img.width / img.height; this.hero.ready = true;
        };
        img.src = SITE.hero.image;
      }
    }
  }
  computeBounds() {
    const root = this.rootRef.current; if (!root) return;
    const secs = [...root.querySelectorAll('[data-sec]')];
    this.bounds = secs.slice(1).map((el, i) => ({ y: el.getBoundingClientRect().top + window.scrollY, type: i % 3, out: secs[i], inc: el }));
  }

  // ═══ MAIN LOOP: overlay, hero shader, oscilloscope, transitions, EQ jitter
  frame = now => {
    if (!this.alive) return;
    this.raf = requestAnimationFrame(this.frame);
    const dt = Math.min(0.1, (now - this.last) / 1000); this.last = now;
    const t = this.reduced ? 1.3 : (now - this.t0) / 1000;
    const k = this.kNow(), fx = this.fxOn();
    const sy = window.scrollY, vh = window.innerHeight;
    const raw = this.lenis ? Math.abs(this.lenis.velocity || 0) : Math.abs(sy - this.lastY);
    this.lastY = sy;
    this.vel += (Math.min(1, raw / 40) * CRT.scrollReact - this.vel) * 0.08;
    const vel = fx ? this.vel : 0;

    // adaptive quality
    this.fpsAcc += dt; this.fpsN++;
    if (this.fpsN >= 90) { if (!this.degraded && this.fpsAcc / this.fpsN > 0.024) { this.degraded = true; if (this.crt) this.crt.scale *= 0.7; if (this.hero) this.hero.scale *= 0.7; } this.fpsAcc = 0; this.fpsN = 0; }

    // rare micro-flicker
    if (fx && this.flickT <= 0 && Math.random() < dt * CRT.flicker * 0.12) this.flickT = 0.14;
    if (this.flickT > 0) { this.flickT -= dt; this.flick = (Math.random() < 0.5 ? 0.07 : 0.02) * k; } else this.flick = 0;

    // section transitions: strongest boundary near viewport centre
    let best = null, bestI = 0;
    if (fx && this.bounds && CRT.transitions > 0) {
      for (const b of this.bounds) {
        const s = (b.y - sy) / vh, d = Math.abs(s - 0.5);
        if (d > 0.34) continue;
        const I = Math.pow(1 - sstep(0, 0.34, d), 1.4) * (0.28 + 0.72 * Math.min(1, this.vel * 2.6)) * CRT.transitions * k;
        if (I > bestI) { bestI = I; best = { ...b, s }; }
      }
    }
    if (this.shaken && (!best || this.shaken.b !== best.y)) { this.shaken.els.forEach(el => { el.style.transform = ''; }); this.shaken = null; }
    if (best && bestI > 0.01 && CRT.domShake > 0 && !this.state.mobile) {
      const amp = bestI * 9 * CRT.domShake * (this.state.mobile ? 0.5 : 1);
      const x = Math.sin(t * 37) * amp + (Math.random() < 0.08 ? (Math.random() - 0.5) * amp * 2 : 0);
      const tf = `translate3d(${x.toFixed(2)}px,0,0) skewX(${(Math.sin(t * 11) * bestI * 1.2).toFixed(3)}deg)`;
      best.out.style.transform = tf; best.inc.style.transform = `translate3d(${(-x * 0.6).toFixed(2)}px,0,0)`;
      this.shaken = { b: best.y, els: [best.out, best.inc] };
    }

    // global overlay
    if (this.crt) {
      const o = this.crt, gl = o.gl, U = o.U;
      this.sizeGL(o, o.scale);
      if (k <= 0.005) { if (!this.crtCleared) { gl.clearColor(0, 0, 0, 0); gl.clear(gl.COLOR_BUFFER_BIT); this.crtCleared = true; } }
      else {
        this.crtCleared = false;
        gl.uniform2f(U('uRes'), o.canvas.width, o.canvas.height);
        gl.uniform1f(U('uTime'), t);
        gl.uniform1f(U('uGrain'), CRT.grain * k * (1 + vel * 0.6));
        gl.uniform1f(U('uVig'), Math.min(1, CRT.vignette * k));
        gl.uniform1f(U('uCurve'), CRT.curvature * Math.min(1, k + 0.3));
        gl.uniform1f(U('uGlow'), CRT.glow * k);
        gl.uniform1f(U('uFlick'), this.reduced ? 0 : this.flick);
        gl.uniform1f(U('uRoll'), fx ? CRT.roll * k : 0);
        gl.uniform3f(U('uB'), best ? best.s : 0, best ? Math.min(1, bestI) : 0, best ? best.type : 0);
        gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      }
    }

    this.moveMascot(t, dt);
    this.moveReel(dt);
    this.drawMeter(t, dt);
    this.vibrate(t, dt);

    // hero (only while on screen)
    const hero = this.$('hero');
    const heroOn = hero && hero.getBoundingClientRect().bottom > 0;
    if (!heroOn) return this.jitterBars(t, vel);
    const tc = this.$('tc');
    if (tc) { const f = Math.floor(((now - this.t0) / 1000) * 30), pad = n => String(n).padStart(2, '0'); tc.textContent = `${pad(Math.floor(f / 108000))}:${pad(Math.floor(f / 1800) % 60)}:${pad(Math.floor(f / 30) % 60)}:${pad(f % 30)}`; }
    if (this.hero && this.hero.ready) {
      const o = this.hero, gl = o.gl, U = o.U;
      this.sizeGL(o, o.scale);
      const lv = CRT.levels[this.state.level];
      gl.uniform2f(U('uRes'), o.canvas.width, o.canvas.height);
      gl.uniform1f(U('uAspI'), o.aspI);
      gl.uniform1f(U('uTime'), t);
      gl.uniform1f(U('uWarp'), Math.min(1, Math.max(this.heroWarp * Math.max(0.35, lv), this.heroIntroWarp) * (0.85 + vel * 0.4)));
      gl.uniform1f(U('uAb'), CRT.aberration * Math.max(0.2, k));
      gl.uniform1f(U('uVel'), vel);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
    }
    this.drawWave(t, k, vel);
  };

  // ═══ LIL BENJI: wanders along the bottom as you scroll, faces his walking direction, bobs to 128 BPM
  mascotIn() {
    const g = window.gsap, m = this.$('mascot'); if (!g || !m || this.mOn) return;
    this.mOn = true; this.mStill = 0; this.mWalk = 0;
    const op = SITE.mascot.opacity;
    if (this.reduced) { m.style.opacity = op; this.setFrame('smile'); return; }
    g.fromTo(m, { opacity: 0 }, { opacity: op, duration: 0.8, ease: 'power2.out' });
    g.fromTo(this.$('mascotBody'), { y: -40 }, { y: 0, duration: 0.9, ease: 'back.out(1.8)', onComplete: () => setTimeout(() => !this.state.menuOpen && this.say(SITE.mascot.hint, 3000), 500) });
  }
  setFrame(key) {
    if (this.mFrame === key) return;
    const box = this.$('mascotImg'); if (!box) return;
    box.querySelectorAll('[data-frame]').forEach(f => { f.style.visibility = f.dataset.frame === key ? 'visible' : 'hidden'; });
    this.mFrame = key;
  }
  // Sits top-right as the menu button: walks in place while you scroll, smiles when you stop
  moveMascot(t, dt) {
    const m = this.$('mascot'); if (!m || !this.mOn) return;
    const hide = !!this.state.lb || !!this.state.bk;
    if (hide !== this.mHidden) { this.mHidden = hide; m.style.visibility = hide ? 'hidden' : 'visible'; }
    if (this.reduced) return;
    const MS = SITE.mascot;
    const walking = !this.state.menuOpen && this.vel > 0.04;
    if (walking) { this.mStill = 0; this.mWalk += dt * (6 + this.vel * 10); this.setFrame(MS.walkCycle[Math.floor(this.mWalk) % MS.walkCycle.length]); }
    else { this.mStill += dt; this.setFrame(this.state.menuOpen || this.mStill > MS.smileAfter ? 'smile' : 'idle'); }
    const img = this.$('mascotImg');
    const grooving = !walking && this.audio && !this.audio.paused;
    if (grooving) {
      const per = 60 / (MS.bpm || 128), ph = (t % per) / per, hit = Math.exp(-ph * 6);
      this.setFrame(Math.floor(t / per) % 2 ? 'smile' : 'idle');
      if (img && !this.mBusy) img.style.transform = `translateY(${(-6 * hit).toFixed(2)}px) rotate(${(Math.sin(t / per * Math.PI) * 5).toFixed(2)}deg) scale(${(-1 - 0.06 * hit).toFixed(3)},${(1 - 0.08 * hit).toFixed(3)})`;
      return;
    }
    if (img && !this.mBusy) img.style.transform = `translateY(${walking && this.mFrame === 'idle' ? -2 : 0}px) scaleX(-1)`;
  }
  // Synthesized beatbox hits (no audio files): kick, hat, snare, kick+hat
  bbSound() {
    if (SITE.mascot.sound === false) return;
    try {
      const C = this.actx || (this.actx = new (window.AudioContext || window.webkitAudioContext)());
      if (C.state === 'suspended') C.resume();
      const out = C.createGain(); out.gain.value = 0.5; out.connect(C.destination);
      const t0 = C.currentTime + 0.005;
      const env = (g, t, peak, dur) => { g.gain.setValueAtTime(peak, t); g.gain.exponentialRampToValueAtTime(0.001, t + dur); };
      const kick = t => { const o = C.createOscillator(), g = C.createGain(); o.frequency.setValueAtTime(160, t); o.frequency.exponentialRampToValueAtTime(42, t + 0.16); env(g, t, 0.9, 0.24); o.connect(g).connect(out); o.start(t); o.stop(t + 0.26); };
      const noise = (t, dur, type, freq, vol) => { const b = C.createBuffer(1, Math.ceil(C.sampleRate * dur), C.sampleRate), d = b.getChannelData(0); for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1; const src = C.createBufferSource(), f = C.createBiquadFilter(), g = C.createGain(); src.buffer = b; f.type = type; f.frequency.value = freq; env(g, t, vol, dur); src.connect(f).connect(g).connect(out); src.start(t); };
      const hat = t => noise(t, 0.06, 'highpass', 7000, 0.35);
      const snare = t => { noise(t, 0.16, 'bandpass', 1900, 0.7); const o = C.createOscillator(), g = C.createGain(); o.frequency.setValueAtTime(220, t); env(g, t, 0.3, 0.08); o.connect(g).connect(out); o.start(t); o.stop(t + 0.1); };
      const i = (this.bbI = ((this.bbI ?? -1) + 1) % 4);
      if (i === 0) kick(t0); else if (i === 1) hat(t0); else if (i === 2) snare(t0); else { kick(t0); hat(t0 + 0.12); }
    } catch (e) { /* audio unavailable */ }
  }
  // ═══ PLAY VIBRATION: while the track plays, the page and its text shake to the beat (CRT.vibrate)
  vibrate(t, dt) {
    const els = this.vibEls || (this.vibEls = [this.rootRef.current.querySelector('#main'), this.$('foot')].filter(Boolean));
    const a = this.audio, on = a && !a.paused && this.fxOn() && !this.state.lb && !this.state.menuOpen && CRT.vibrate > 0;
    this.jolt = (this.jolt || 0) * Math.exp(-dt * 4);
    if (!on) {
      if (this.vibOn) { this.vibOn = false; els.forEach(el => { el.style.transform = ''; }); this.vibRgb = null; this.applyRgbVar(); }
      return;
    }
    this.vibOn = true;
    const per = 60 / (SITE.mascot.bpm || 128), hit = Math.exp(-((t % per) / per) * 7);
    const amp = CRT.vibrate * (this.state.mobile ? 0.6 : 1) * (0.5 + 3 * hit + 6 * this.jolt);
    const x = (Math.random() - 0.5) * 2 * amp, y = (Math.random() - 0.5) * amp * 0.6;
    els.forEach(el => { el.style.transform = `translate3d(${x.toFixed(2)}px,${y.toFixed(2)}px,0)`; });
    const split = Math.round((1.5 + 6 * hit + 10 * this.jolt) * CRT.vibrate * 2) / 2;
    if (split !== this.vibRgb) {
      this.vibRgb = split;
      this.rootRef.current.style.setProperty('--rgb', `${-split}px 0 rgba(225,48,28,.8), ${(split * 0.7).toFixed(1)}px 0 rgba(242,242,242,.3), 0 0 ${(8 + 14 * hit).toFixed(0)}px rgba(242,242,242,.12)`);
    }
  }
  // ═══ DROP A BEAT: pads → sound + pad flash + meter spike + screen glitch
  audioCtx() {
    const C = this.actx || (this.actx = new (window.AudioContext || window.webkitAudioContext)());
    if (C.state === 'suspended') C.resume();
    return C;
  }
  hitPad(i) {
    const P = SITE.drop.pads[i]; if (!P) return;
    try { this.playPad(P); } catch (e) { /* audio unavailable */ }
    this.padHits = (this.padHits || 0) + 1;
    this.padEnergy = 1; this.padKind = P.synth;
    const g = window.gsap, pad = this.rootRef.current.querySelectorAll('[data-pad]')[i];
    const last = this.$('padLast'); if (last) last.textContent = P.label + ' \u00B7 ' + P.sub;
    const cnt = this.$('padCount'); if (cnt) cnt.textContent = String(this.padHits).padStart(3, '0') + ' hits';
    const led = this.$('padLed');
    if (!g) return;
    if (led) g.fromTo(led, { backgroundColor: RED, boxShadow: '0 0 12px #E1301C' }, { backgroundColor: '#2A2A2A', boxShadow: '0 0 0px rgba(255,65,40,0)', duration: 0.4, overwrite: true });
    if (pad) g.fromTo(pad, { backgroundColor: RED, borderColor: RED, color: '#0A0A0A', scale: this.reduced ? 1 : 0.95 }, { backgroundColor: '#141414', borderColor: '#2A2A2A', color: '#F2F2F2', scale: 1, duration: 0.4, ease: 'power2.out', overwrite: true, onComplete: () => g.set(pad, { clearProps: 'transform' }) });
    if (this.fxOn()) this.hitGlitch();
  }
  hitGlitch() {
    const g = window.gsap, f = this.$('hitFlash'), board = this.$('board'), R = g.utils.random, k = Math.max(0.5, this.kNow());
    if (f) {
      const t1 = R(0, 70), h1 = R(4, 18);
      g.timeline({ overwrite: true })
        .set(f, { opacity: 0.5 * k, clipPath: `inset(${t1.toFixed(1)}% 0% ${(100 - t1 - h1).toFixed(1)}% 0%)`, x: R(-14, 14) })
        .set(f, { opacity: 0.25 * k, clipPath: `inset(${R(0, 80).toFixed(1)}% 0% ${R(5, 20).toFixed(1)}% 0%)`, x: R(-8, 8) }, 0.05)
        .to(f, { opacity: 0, duration: 0.14, ease: 'power2.out' }, 0.09)
        .set(f, { clipPath: 'none', x: 0 });
    }
    if (board) g.fromTo(board, { x: R(-5, 5) * k, filter: `drop-shadow(${(-6 * k).toFixed(1)}px 0 0 rgba(225,48,28,.8)) drop-shadow(${(4 * k).toFixed(1)}px 0 0 rgba(242,242,242,.35))` }, { x: 0, filter: 'drop-shadow(0px 0 0 rgba(225,48,28,0)) drop-shadow(0px 0 0 rgba(242,242,242,0))', duration: 0.22, ease: 'power3.out', overwrite: true, onComplete: () => g.set(board, { clearProps: 'filter,transform' }) });
    this.flickT = Math.max(this.flickT || 0, 0.05);
  }
  drawMeter(t, dt) {
    const sec = this.rootRef.current.querySelector('#drop'); if (!sec) return;
    const r = sec.getBoundingClientRect(); if (r.bottom < 0 || r.top > window.innerHeight) return;
    const bars = this.mBars || (this.mBars = [...sec.querySelectorAll('[data-mbar]')]); if (!bars.length) return;
    const E = this.padEnergy || 0; if (E < 0.002 && this.mIdle) return;
    this.mIdle = E < 0.002;
    this.padEnergy = E * Math.exp(-dt * 6);
    const n = bars.length, low = this.padKind === 'kick' || this.padKind === 'bass', hi = this.padKind === 'hat' || this.padKind === 'ohat';
    bars.forEach((b, i) => {
      const u = i / (n - 1), shape = low ? Math.exp(-u * 3) : hi ? Math.exp(-(1 - u) * 3) : 0.5 + 0.5 * Math.sin(u * Math.PI);
      const v = Math.max(0.06, Math.min(1, E * shape * (0.6 + 0.4 * Math.abs(Math.sin(t * 40 + i * 1.9)))));
      b.style.transform = `scaleY(${v.toFixed(3)})`;
      b.style.background = v > 0.45 ? RED : 'rgba(242,242,242,.32)';
      b.style.boxShadow = v > 0.45 ? '0 0 6px rgba(225,48,28,.6)' : 'none';
    });
  }
  async loadPad(P) {
    this.padBufs = this.padBufs || {};
    if (this.padBufs[P.src] !== undefined) return this.padBufs[P.src];
    this.padBufs[P.src] = null;
    try { const ab = await (await fetch(P.src)).arrayBuffer(); this.padBufs[P.src] = await this.audioCtx().decodeAudioData(ab); } catch (e) { this.padBufs[P.src] = null; }
    return this.padBufs[P.src];
  }
  playPad(P) {
    const C = this.audioCtx(), t = C.currentTime + 0.003;
    const out = C.createGain(); out.gain.value = 0.55; out.connect(C.destination);
    if (P.src) {
      const buf = this.padBufs && this.padBufs[P.src];
      if (buf) { const s = C.createBufferSource(); s.buffer = buf; s.connect(out); s.start(t); return; }
      this.loadPad(P);
    }
    const env = (g, at, peak, dur) => { g.gain.setValueAtTime(peak, at); g.gain.exponentialRampToValueAtTime(0.001, at + dur); };
    const osc = (type, f0, f1, dur, peak, at = t) => { const o = C.createOscillator(), g = C.createGain(); o.type = type; o.frequency.setValueAtTime(f0, at); if (f1) o.frequency.exponentialRampToValueAtTime(f1, at + dur * 0.7); env(g, at, peak, dur); o.connect(g).connect(out); o.start(at); o.stop(at + dur + 0.02); return o; };
    const noise = (dur, type, freq, peak, at = t, q = 1) => { const b = C.createBuffer(1, Math.ceil(C.sampleRate * dur), C.sampleRate), d = b.getChannelData(0); for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1; const s = C.createBufferSource(), f = C.createBiquadFilter(), g = C.createGain(); s.buffer = b; f.type = type; f.frequency.value = freq; f.Q.value = q; env(g, at, peak, dur); s.connect(f).connect(g).connect(out); s.start(at); return f; };
    switch (P.synth) {
      case 'kick': osc('sine', 170, 42, 0.32, 1); noise(0.02, 'lowpass', 1200, 0.4); break;
      case 'snare': noise(0.2, 'bandpass', 1800, 0.9, t, 0.8); osc('triangle', 240, 160, 0.09, 0.35); break;
      case 'hat': noise(0.05, 'highpass', 7500, 0.45); break;
      case 'ohat': noise(0.38, 'highpass', 6500, 0.35); break;
      case 'bass': { const o = osc('sawtooth', 110, 46, 0.6, 0.5); const lp = C.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 420; o.disconnect(); const g = C.createGain(); env(g, t, 0.6, 0.6); o.connect(lp).connect(g).connect(out); osc('sine', 55, 45, 0.6, 0.6); break; }
      case 'scratch': { const f = noise(0.34, 'bandpass', 900, 0.8, t, 6); f.frequency.setValueAtTime(500, t); f.frequency.exponentialRampToValueAtTime(3200, t + 0.1); f.frequency.exponentialRampToValueAtTime(600, t + 0.2); f.frequency.exponentialRampToValueAtTime(2600, t + 0.3); break; }
      case 'rim': osc('square', 1700, 900, 0.035, 0.35); noise(0.025, 'bandpass', 3000, 0.4, t, 4); break;
      case 'zap': osc('sawtooth', 2400, 120, 0.28, 0.28); osc('square', 1200, 80, 0.22, 0.12); break;
      default: osc('sine', 440, 0, 0.1, 0.3);
    }
  }
  // Easter egg: N quick taps opens the secret clip
  tapEgg() {
    const E = SITE.mascot.secret; if (!E) return false;
    const now = performance.now() / 1000;
    this.taps = (this.taps || []).filter(x => now - x < E.window); this.taps.push(now);
    if (this.taps.length < E.taps) return false;
    this.taps = [];
    const i = Math.min(E.clipIndex, SITE.beatbox.clips.length - 1);
    this.setState({ menuOpen: false }, () => setTimeout(() => this.openLb('clip', i), 60));
    setTimeout(() => this.say(E.line, 2600), 60);
    return true;
  }
  hop() {
    const g = window.gsap, img = this.$('mascotImg'); if (!g || this.reduced || !img) return;
    this.mBusy = true;
    g.timeline({ onComplete: () => { this.mBusy = false; } })
      .add(() => this.setFrame('smile'))
      .to(img, { y: -10, scaleX: -0.94, scaleY: 1.06, duration: 0.14, ease: 'power2.out' })
      .to(img, { y: 0, scaleX: -1.06, scaleY: 0.92, duration: 0.12, ease: 'power2.in' })
      .to(img, { scaleX: -1, scaleY: 1, duration: 0.22, ease: 'back.out(3)' });
    const b = this.$('bubble'); if (b) g.to(b, { opacity: 0, duration: 0.2 });
  }
  say(text, ms = 2600) {
    const g = window.gsap, b = this.$('bubble'); if (!b) return;
    b.textContent = text;
    clearTimeout(this.sayT);
    if (g && !this.reduced) g.fromTo(b, { opacity: 0, y: 8, scale: 0.9 }, { opacity: 1, y: 0, scale: 1, duration: 0.35, ease: 'back.out(2)', overwrite: true });
    else b.style.opacity = 1;
    this.sayT = setTimeout(() => { if (g && !this.reduced) g.to(b, { opacity: 0, y: -6, duration: 0.3 }); else b.style.opacity = 0; }, ms);
    if (this.fxOn()) this.scramble(b);
  }
  mGlitch() {
    const g = window.gsap, img = this.$('mascotImg'); if (!g || !img || !this.fxOn()) return;
    const R = g.utils.random, tl = g.timeline({ onComplete: () => g.set(img, { filter: 'drop-shadow(0 0 10px rgba(225,48,28,.28))', opacity: 1 }) });
    for (let i = 0; i < 5; i++) tl.set(img, { opacity: i % 2 ? 0.35 : 1, filter: `drop-shadow(${R(-9, -4).toFixed(1)}px 0 0 rgba(225,48,28,.9)) drop-shadow(${R(3, 6).toFixed(1)}px 0 0 rgba(242,242,242,.5))` }, i * 0.05);
  }
  poke() {
    const g = window.gsap, img = this.$('mascotImg'), M = SITE.mascot;
    this.pokeI = ((this.pokeI ?? -1) + 1) % M.beatbox.length;
    this.say(M.beatbox[this.pokeI], 1800);
    if (!g || this.reduced || !img) return;
    this.mBusy = true;
    const f = this.mFace === -1 ? -1 : 1;
    g.timeline({ onComplete: () => { this.mBusy = false; } })
      .add(() => this.setFrame('smile'))
      .to(img, { y: -22, scaleX: f * 0.94, scaleY: 1.06, duration: 0.18, ease: 'power2.out' })
      .to(img, { y: 0, scaleX: f * 1.08, scaleY: 0.9, duration: 0.16, ease: 'power2.in' })
      .to(img, { scaleX: f, scaleY: 1, duration: 0.25, ease: 'back.out(3)' })
      .add(() => g.set(img, { clearProps: 'scale,scaleX,scaleY,y,rotate' }));
    this.mGlitch();
  }

  // ═══ BEAT BACK: call & response. Lil Benji voices a pattern from his body; you tap it back.
  openBk() {
    if (this.state.bk) return;
    let best = 0; try { best = +localStorage.getItem('bb-beatback-best') || 0; } catch (e) {}
    this.bkSeq = [];
    this.setState({ menuOpen: false, bk: { phase: 'intro', round: 0, step: 0, best, msg: SITE.mascot.game.intro } });
    this.lenis && this.lenis.stop();
    this.onBkKey = this.onBkKey || (e => {
      if (!this.state.bk || e.repeat || e.metaKey || e.ctrlKey) return;
      if (e.key === 'Escape') return this.closeBk();
      if (this.state.bk.phase === 'over' && (e.key === 'Enter' || e.key === ' ')) { e.preventDefault(); return this.againBk(); }
      const i = SITE.mascot.game.voices.findIndex(v => v.key === e.key); if (i < 0) return;
      e.preventDefault(); this.bkHit(i);
    });
    window.addEventListener('keydown', this.onBkKey);
    try { this.audioCtx(); } catch (e) {}
    this.bkLater(() => this.bkRound(), 1400);
  }
  bkLater(fn, ms) { (this.bkT = this.bkT || []).push(setTimeout(fn, ms)); }
  closeBk() {
    (this.bkT || []).forEach(clearTimeout); this.bkT = [];
    window.removeEventListener('keydown', this.onBkKey);
    this.setState({ bk: null }, () => { const b = this.$('mascotBtn'); b && b.focus(); });
    this.lenis && !this.state.lb && this.lenis.start();
  }
  againBk() { (this.bkT || []).forEach(clearTimeout); this.bkT = []; this.bkSeq = []; this.bkSet({ round: 0, msg: SITE.mascot.game.listen }); this.bkLater(() => this.bkRound(), 500); }
  bkSet(p) { this.setState(s => s.bk ? { bk: { ...s.bk, ...p } } : null); }
  bkRound() {
    const G = SITE.mascot.game, n = G.voices.length;
    let v = Math.floor(Math.random() * n);
    if (this.bkSeq.length > 1 && v === this.bkSeq[this.bkSeq.length - 1] && v === this.bkSeq[this.bkSeq.length - 2]) v = (v + 1) % n;
    this.bkSeq.push(v);
    if (this.bkSeq.length < 3) return this.bkRound();
    const len = this.bkSeq.length, gap = Math.max(260, 440 - (len - 3) * 18);
    this.bkSet({ phase: 'listen', round: len - 2, step: 0, msg: G.listen });
    this.bkSeq.forEach((x, k) => this.bkLater(() => this.bkVoice(x), 350 + k * gap));
    this.bkLater(() => this.bkSet({ phase: 'play', msg: G.turn + ' \u00B7 0/' + len }), 350 + len * gap);
  }
  bkHit(i) {
    const b = this.state.bk; if (!b) return;
    this.bkVoice(i);
    if (b.phase !== 'play') return;
    const G = SITE.mascot.game, len = this.bkSeq.length;
    if (this.bkSeq[b.step] !== i) {
      const score = b.round - 1, best = Math.max(b.best, score);
      try { localStorage.setItem('bb-beatback-best', String(best)); } catch (e) {}
      try { this.playPad({ synth: 'zap' }); } catch (e) {}
      if (this.fxOn()) this.hitGlitch();
      this.bkSet({ phase: 'over', best, msg: G.miss + ' ' + score + (score === 1 ? ' round' : ' rounds') + (score > b.best && score > 0 ? ' \u00B7 new best' : '') });
      return;
    }
    const step = b.step + 1;
    if (step < len) return this.bkSet({ step, msg: G.turn + ' \u00B7 ' + step + '/' + len });
    const best = Math.max(b.best, b.round);
    try { localStorage.setItem('bb-beatback-best', String(best)); } catch (e) {}
    this.bkSet({ phase: 'listen', step, best, msg: G.clean });
    this.bkLater(() => this.bkRound(), 900);
  }
  bkVoice(i) {
    const V = SITE.mascot.game.voices[i]; if (!V) return;
    try { this.playPad({ synth: V.synth }); } catch (e) {}
    const g = window.gsap, root = this.rootRef.current;
    const body = this.$('bkBody'), w1 = this.$('bkWave'), w2 = this.$('bkWave2'), word = this.$('bkWord');
    const zone = root.querySelector('[data-bkzone="' + i + '"]'), key = root.querySelector('[data-bkkey="' + i + '"]');
    if (word) word.textContent = V.label;
    if (!g) return;
    if (zone) g.fromTo(zone, { backgroundColor: 'rgba(225,48,28,.22)' }, { backgroundColor: 'rgba(225,48,28,0)', duration: 0.35, overwrite: true });
    if (key) g.fromTo(key, { backgroundColor: RED, borderColor: RED, color: '#0A0A0A' }, { backgroundColor: '#141414', borderColor: '#2A2A2A', color: '#F2F2F2', duration: 0.35, overwrite: true });
    if (this.reduced) { if (word) g.fromTo(word, { opacity: 1 }, { opacity: 0, duration: 0.5, delay: 0.2, overwrite: true }); return; }
    const low = V.synth === 'kick' || V.synth === 'bass';
    if (body) g.fromTo(body, { scaleY: low ? 0.9 : 1.05, scaleX: low ? 1.06 : 0.97 }, { scaleY: 1, scaleX: 1, duration: 0.32, ease: 'back.out(3)', overwrite: true });
    if (w1) g.fromTo(w1, { scale: 0.3, opacity: 1 }, { scale: low ? 3.4 : 2.4, opacity: 0, duration: 0.5, ease: 'power2.out', overwrite: true });
    if (w2) g.fromTo(w2, { scale: 0.2, opacity: 0.7 }, { scale: low ? 2.4 : 1.7, opacity: 0, duration: 0.42, delay: 0.06, ease: 'power2.out', overwrite: true });
    if (word) g.fromTo(word, { opacity: 1, x: 0, y: 0, scale: 0.7, rotate: g.utils.random(-8, 8) }, { opacity: 0, x: g.utils.random(30, 70), y: -50, scale: 1.1, duration: 0.6, ease: 'power2.out', overwrite: true });
  }

  // ═══ FEATURED TRACK PLAYER (30s Spotify preview)
  autoStart() {
    const m = SITE.dj.mix;
    if (!m.autoplay || this.userPaused || this.state.playing || this.autoArmed === 'done') return;
    this.togglePlay(true);
  }
  armAutoStart() {
    if (this.autoArmed) return;
    this.autoArmed = true;
    const evs = ['pointerdown', 'keydown', 'touchend'];
    const go = e => {
      if (e && e.target && e.target.closest && e.target.closest('[aria-pressed]')) return;
      evs.forEach(t => window.removeEventListener(t, go, true));
      this.autoArmed = 'done'; this.autoGo = null;
      if (!this.userPaused && !this.state.playing) this.togglePlay(true);
    };
    this.autoGo = go;
    evs.forEach(t => window.addEventListener(t, go, true));
  }
  togglePlay(auto) {
    const m = SITE.dj.mix;
    if (!this.audio) {
      this.audio = new Audio(m.preview);
      this.audio.preload = auto ? 'auto' : 'none';
      this.audio.loop = !!m.loop;
      this.audio.volume = m.volume ?? 0.15;
      this.audio.addEventListener('ended', () => { this.audio.currentTime = 0; this.setState({ playing: false }); this.paintProgress(0); });
      this.audio.addEventListener('error', () => { this.setState({ playing: false }); if (!this.autoTry) window.open(m.url, '_blank', 'noopener'); });
      this.audio.addEventListener('timeupdate', () => {
        const a = this.audio, p = a.duration ? a.currentTime / a.duration : 0;
        const el = this.$('mixTime'); if (el) el.textContent = this.fmtTime(a.currentTime) + ' / ' + this.fmtTime(a.duration || 30) + ' · Preview';
        if (this.reduced || !this.barsReady) this.paintProgress(p);
        const ring = this.$('fabRing'); if (ring) ring.setAttribute('stroke-dashoffset', (188.5 * (1 - p)).toFixed(2));
        const mt = this.$('miniTime'); if (mt) mt.textContent = this.fmtTime(a.currentTime) + ' / ' + this.fmtTime(a.duration || 30);
      });
    }
    this.autoTry = auto === true;
    if (!auto && this.autoGo) { ['pointerdown', 'keydown', 'touchend'].forEach(t => window.removeEventListener(t, this.autoGo, true)); this.autoArmed = 'done'; this.autoGo = null; }
    if (this.state.playing) { this.userPaused = true; this.audio.pause(); this.setState({ playing: false }); }
    else if (auto) {
      this.audio.play().then(() => { this.autoTry = false; this.setState({ playing: true, miniOn: true }, () => this.miniIn()); })
        .catch(err => { if (err && err.name === 'NotAllowedError') this.armAutoStart(); });
    }
    else { this.audio.play().then(() => { const first = !this.state.miniOn; this.jolt = 1; try { navigator.vibrate && navigator.vibrate([35, 45, 35]); } catch (e) {} this.setState({ playing: true, miniOn: true }, () => first && this.miniIn()); }).catch(() => window.open(m.url, '_blank', 'noopener')); }
  }
  miniIn() {
    const g = window.gsap; let n = 0;
    const go = () => {
      const el = this.$('fab'); if (!el) { if (n++ < 20) setTimeout(go, 25); return; }
      this.setupDock();
      if (this.docked) return;
      if (g && !this.reduced) g.fromTo(el, { y: 60, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, ease: 'expo.out' });
    };
    setTimeout(go, 0);
  }
  // Floating button flies into the DJ player's play button while the player is on screen, and back out after
  setupDock() {
    const ST = window.ScrollTrigger, mix = this.$('mix');
    if (!ST || !mix) return;
    if (this.dockST) { this.dock(this.dockST.isActive, true); return; }
    this.dockST = ST.create({ trigger: mix, start: 'top 88%', end: 'bottom 12%', onToggle: self => this.dock(self.isActive) });
    this.dock(this.dockST.isActive, true);
  }
  dock(on, instant) {
    const g = window.gsap, fab = this.$('fab'), base = this.$('mini'), tgt = this.$('mixPlay');
    if (!g || !fab || !base || !tgt) return;
    this.docked = on;
    const p = this.dockP || (this.dockP = { t: 0 });
    const paint = () => {
      const b = base.getBoundingClientRect(), r = tgt.getBoundingClientRect(), t = p.t;
      const dx = (r.left + r.width / 2) - (b.left + b.width / 2), dy = (r.top + r.height / 2) - (b.top + b.height / 2);
      g.set(fab, { x: dx * t, y: dy * t, scale: 1 + (r.width / b.width - 1) * t, opacity: t >= 1 ? 0 : 1 });
      tgt.style.opacity = t >= 1 ? '1' : '0';
      fab.style.pointerEvents = t > 0.5 ? 'none' : '';
      const btn = fab.querySelector('button'); if (btn) { btn.style.pointerEvents = t > 0.5 ? 'none' : 'auto'; btn.tabIndex = t > 0.5 ? -1 : 0; }
    };
    g.killTweensOf(p);
    if (instant || this.reduced) { p.t = on ? 1 : 0; return paint(); }
    g.to(p, { t: on ? 1 : 0, duration: 0.75, ease: 'expo.inOut', onUpdate: paint, onComplete: paint });
  }
  closeMini() {
    this.userPaused = true;
    if (this.audio) { this.audio.pause(); this.audio.currentTime = 0; }
    this.paintProgress(0);
    const done = () => { const t = this.$('mixPlay'); if (t) t.style.opacity = '1'; if (this.dockP) this.dockP.t = 0; this.setState({ playing: false, miniOn: false }); };
    const g = window.gsap, el = this.$('mini');
    if (g && el && !this.reduced) g.to(el, { y: 12, opacity: 0, duration: 0.2, ease: 'power2.out', onComplete: done }); else done();
  }
  fmtTime(s) { s = Math.floor(s || 0); return Math.floor(s / 60) + ':' + String(s % 60).padStart(2, '0'); }
  paintProgress(p) {
    const n = (this.bars || []).length;
    (this.bars || []).forEach((b, i) => {
      const on = (i + 0.5) / n <= p;
      b.style.background = on ? RED : 'rgba(242,242,242,.38)';
      b.style.boxShadow = on ? '0 0 6px rgba(255,65,40,.55)' : '0 0 4px rgba(242,242,242,.18)';
    });
  }

  // ═══ SHORTS: endless reel + 3D ring spin on click
  ringW() { return Math.round(Math.min(160, window.innerWidth * 0.22, window.innerHeight * 0.26)); }
  ringR() { const n = SITE.beatbox.clips.length; return Math.round((this.ringW() / 2) / Math.tan(Math.PI / n) * 1.12); }
  openShort(i) {
    if (this.reduced || !window.gsap || this.state.ring != null) return this.openLb('clip', i);
    this.setState({ ring: i }, () => setTimeout(() => this.spinRing(), 0));
  }
  spinRing() {
    const g = window.gsap, wrap = this.$('ringWrap'), ring = this.$('ring'), i = this.state.ring;
    if (!wrap || !ring) { if ((this.ringTries = (this.ringTries || 0) + 1) < 30 && this.state.ring != null) setTimeout(() => this.spinRing(), 30); else this.ringTries = 0; return; }
    this.ringTries = 0;
    g.set(wrap, { pointerEvents: 'auto' });
    const n = SITE.beatbox.clips.length, end = -i * 360 / n;
    this.lenis && this.lenis.stop();
    if (this.ringTl) return;
    this.ringTl = g.timeline({ onComplete: () => { this.ringTl = null; if (this.state.ring === i) this.openLb('clip', i); } })
      .to(wrap, { opacity: 1, duration: 0.35, ease: 'power2.out' }, 0)
      .fromTo(ring, { rotateX: 72, rotateY: end + 540, scale: 0.35, z: -400 }, { rotateX: -6, rotateY: end + 90, scale: 1, z: 0, duration: 1.1, ease: 'power3.out' }, 0)
      .to(ring, { rotateY: end, rotateX: 0, duration: 0.8, ease: 'back.out(1.4)' }, 1.0)
      .to(ring, { scale: 1.6, z: 260, duration: 0.45, ease: 'power3.in' }, 1.85);
  }
  closeRing() {
    const g = window.gsap, wrap = this.$('ringWrap');
    if (this.ringTl) { this.ringTl.kill(); this.ringTl = null; }
    if (!this.state.lb && this.lenis) this.lenis.start();
    if (!g || !wrap) return this.setState({ ring: null });
    g.to(wrap, { opacity: 0, duration: 0.35, onComplete: () => this.setState({ ring: null }) });
  }
  moveReel(dt) {
    const tr = this.$('reelTrack'); if (!tr || this.reduced) return;
    const reel = this.$('reel'), r = reel.getBoundingClientRect();
    if (r.bottom < 0 || r.top > window.innerHeight) return;
    const half = tr.scrollWidth / 2; if (!half) return;
    const target = this.reelPaused ? 0 : 1;
    this.reelSp = (this.reelSp ?? 1) + (target - (this.reelSp ?? 1)) * Math.min(1, dt * 4);
    this.reelX = ((this.reelX || 0) - dt * (46 + this.vel * 260) * this.reelSp) % half;
    tr.style.transform = `translate3d(${this.reelX.toFixed(2)}px,0,0)`;
  }

  jitterBars(t, vel) {
    if (!this.barsReady || !this.bars || !this.bars.length || this.reduced) return;
    const mix = this.$('mix'); if (!mix) return;
    const a = this.audio, live = a && !a.paused;
    if (a && a.currentTime > 0) this.paintProgress(a.duration ? a.currentTime / a.duration : 0);
    const r = mix.getBoundingClientRect();
    if (r.bottom < 0 || r.top > window.innerHeight) return;
    const k = Math.max(0.3, this.kNow());
    const beat = Math.exp(-((t % 0.46875) / 0.46875) * 4);
    this.bars.forEach((b, i) => {
      const s = (live ? 0.62 + 0.38 * Math.abs(Math.sin(t * 9 + i * 1.7)) * (0.5 + beat) : 0.78) + 0.14 * Math.sin(t * 7 + i * 0.6) * k + 0.1 * beat + (Math.random() - 0.5) * 0.08 * k + vel * 0.35 * Math.sin(i * 1.3 + t * 20);
      b.style.transform = `scaleY(${Math.max(0.08, Math.min(1.35, s)).toFixed(3)})`;
    });
  }

  setupWave() {
    const cv = this.$('wave'); if (!cv) return;
    this.wctx = cv.getContext('2d');
    this.onResize = () => { const d = Math.min(2, window.devicePixelRatio || 1); cv.width = cv.clientWidth * d; cv.height = cv.clientHeight * d; this.dpr = d; };
    this.onResize(); window.addEventListener('resize', this.onResize);
  }
  drawWave(t, k, vel) {
    const cv = this.$('wave'), ctx = this.wctx; if (!cv || !ctx) return;
    const w = cv.width, h = cv.height, d = this.dpr || 1, mid = h / 2;
    ctx.clearRect(0, 0, w, h);
    if (this.waveIn <= 0.001) return;
    const beat = (t % 0.46875) / 0.46875, env = Math.exp(-beat * 5);
    const amp = h * 0.2 * (0.35 + env * 0.65) * Math.min(this.waveAmp + vel * 1.5, 4) * this.waveIn;
    const jit = this.reduced ? 0 : 1.6 * d * Math.max(0.2, k);
    const trace = (off, col, lw, blur) => {
      ctx.beginPath();
      for (let x = 0; x <= w; x += 3 * d) {
        const u = x / w, taper = Math.pow(Math.sin(u * Math.PI), 0.7) * Math.min(1, this.waveIn * 1.4);
        const y = mid + amp * taper * (Math.sin(u * 22 + t * 6 + off) * 0.55 + Math.sin(u * 61 - t * 11) * 0.28 * env + Math.sin(u * 7 + t * 2) * 0.22) + (Math.random() - 0.5) * jit;
        x ? ctx.lineTo(x, y) : ctx.moveTo(x, y);
      }
      ctx.strokeStyle = col; ctx.lineWidth = lw * d; ctx.shadowColor = HOT; ctx.shadowBlur = blur * d; ctx.stroke();
    };
    trace(0.9, 'rgba(242,242,242,.22)', 1, 0);
    trace(0, RED, 2, 10 + 10 * Math.min(1, k));
  }

  setupAmbient() {
    if (this.reduced) return;
    const A = (k, kf, o) => { const el = this.$(k); return el && el.animate(kf, o); };
    this.anims = [
      A('grain', [{ transform: 'translate(0,0)' }, { transform: 'translate(-7%,4%)' }, { transform: 'translate(5%,-6%)' }, { transform: 'translate(-3%,8%)' }, { transform: 'translate(8%,2%)' }], { duration: 500, iterations: Infinity, easing: 'steps(5)' }),
      A('cuedot', [{ transform: 'translateY(-16px)', opacity: 0 }, { opacity: 1, offset: 0.25 }, { transform: 'translateY(46px)', opacity: 0.2 }], { duration: 1600, iterations: Infinity, easing: 'cubic-bezier(.65,0,.35,1)' }),
      A('rec', [{ opacity: 1 }, { opacity: 0.25 }, { opacity: 1 }], { duration: 1400, iterations: Infinity }),
    ].filter(Boolean);
  }

  focusDialog(kind) {
    if (!this.returnFocus) this.returnFocus = document.activeElement;
    let tries = 0;
    const go = () => {
      const box = this.$(kind);
      if (!box) { if (tries++ < 40) setTimeout(go, 25); return; }
      const t = kind === 'lb' ? box.querySelector('button') : box.querySelector('a[href]');
      if (t) t.focus({ preventScroll: true });
    };
    setTimeout(go, 0);
  }
  fanFolder(on) {
    const g = window.gsap, f = this.$('folder'); if (!g || !f || this.reduced) return;
    const cards = [...f.querySelectorAll('[data-fcard]')];
    const R = on ? [-14, 11, -4, 1.5] : [-7, 5, -2.5, 0], X = on ? [-22, 22, -8, 0] : [-5, 5, -1.5, 0], Y = on ? [4, 3, -3, -4] : [2, 1, -1, 0];
    cards.forEach((c, i) => g.to(c, { rotate: R[i], xPercent: X[i], yPercent: Y[i], x: 0, y: 0, duration: 0.55, ease: 'expo.out', overwrite: true }));
  }
  openLb(type, i) { this.focusDialog('lb'); this.setState({ lb: { type, i } }); }
  stepLb(d) { const n = SITE.gallery.items.length; this.setState(s => ({ lb: { type: 'image', i: (s.lb.i + d + n) % n } })); }

  lbVals() {
    const lb = this.state.lb;
    if (!lb) return {};
    if (lb.type === 'image') {
      const n = SITE.gallery.items.length, it = SITE.gallery.items[lb.i];
      return { isImage: true, src: it.src, imgSrc: it.src, alt: it.alt, title: it.alt, caption: it.alt, counter: `${String(lb.i + 1).padStart(2, '0')} / ${String(n).padStart(2, '0')}` };
    }
    const clip = lb.type === 'clip', clips = SITE.beatbox.clips;
    const v = clip ? clips[lb.i] : SITE.beatbox.featured;
    return {
      isEmbed: !!v.youtubeId, isPlaceholder: !v.youtubeId,
      embed: v.youtubeId ? `https://www.youtube-nocookie.com/embed/${v.youtubeId}?autoplay=1&rel=0` : '',
      ratio: clip ? '9/16' : '16/9',
      frameW: clip ? 'min(100%,calc((100vh - 200px)*9/16))' : 'min(100%,calc((100vh - 200px)*16/9))',
      src: v.thumb || `https://i.ytimg.com/vi/${v.youtubeId}/hqdefault.jpg`, title: v.title, caption: SITE.beatbox.heading, link: v.link, platform: 'YouTube',
      counter: clip ? `Short ${String(lb.i + 1).padStart(2, '0')} / ${String(clips.length).padStart(2, '0')}` : 'Featured',
    };
  }

  renderVals() {
    const S = this.state, h = SITE.hero;
    const k = this.kNow();
    const bars = Array.from({ length: 64 }, (_, i) => {
      const v = 0.18 + 0.82 * Math.abs(Math.sin(i * 0.37) * Math.cos(i * 0.11 + 1) + 0.25 * Math.sin(i * 1.7));
      const red = i < 22;
      return { h: `${Math.min(100, v * 100).toFixed(0)}%`, c: red ? RED : 'rgba(242,242,242,.38)', glow: red ? '0 0 6px rgba(255,65,40,.55)' : '0 0 4px rgba(242,242,242,.18)' };
    });
    const hd = s => ({ text: s, words: words(s) });
    const q = SITE.about.quote;
    const quoteWords = [
      ...words('\u201C' + q.before + ' ').filter(Boolean).map(w => ({ w, plain: true, hl: false })),
      { w: q.highlight, hl: true, plain: false },
      { w: q.after + '\u201D', plain: true, hl: false },
    ];
    const heroGL = S.gl && !h.video;
    const lvl = S.level;
    return {
      rootRef: this.rootRef,
      onRootClick: e => {
        const a = e.target.closest && e.target.closest('a[href^="#"]');
        if (!a) return;
        e.preventDefault();
        const hash = a.getAttribute('href');
        const focusTarget = () => { const t = hash === '#top' ? this.rootRef.current.querySelector('#main') : document.querySelector(hash); if (t) { if (!t.hasAttribute('tabindex')) t.setAttribute('tabindex', '-1'); t.focus({ preventScroll: true }); } };
        if (S.menuOpen) { this.navJump = true; this.setState({ menuOpen: false }, () => setTimeout(() => { this.scrollToHash(hash === '#main' ? '#top' : hash); focusTarget(); }, 30)); }
        else { this.scrollToHash(hash === '#main' ? '#top' : hash); focusTarget(); }
      },
      stageName: SITE.artist.stageName,
      navLinks: SITE.nav.map((n, i) => {
        const on = S.active === n.href.slice(1);
        return { ...n, num: String(i + 2).padStart(2, '0'), color: on ? TEAL : 'inherit', dot: on ? 1 : 0, current: on ? 'true' : 'false' };
      }),
      desktop: !S.mobile, mobile: S.mobile, menuOpen: S.menuOpen,
      menuAria: S.menuOpen ? 'Close menu' : 'Open menu',
      burgerTop: S.menuOpen ? 'translateY(4.5px) rotate(45deg)' : 'none',
      burgerBot: S.menuOpen ? 'translateY(-4.5px) rotate(-45deg)' : 'none',
      toggleMenu: e => { e.stopPropagation(); if (this.lpFired) { this.lpFired = false; return; } this.menuTaps = (this.menuTaps || 0) + 1; if (this.menuTaps === 4 && SITE.mascot.game) setTimeout(() => !this.state.bk && this.say(SITE.mascot.game.hint, 2600), 700); this.bbSound(); this.hop(); if (this.tapEgg()) return; if (!this.state.menuOpen) this.focusDialog('menu'); this.setState(s => ({ menuOpen: !s.menuOpen })); },
      mascotDown: () => { clearTimeout(this.lpT); this.lpFired = false; if (!SITE.mascot.game) return; this.lpT = setTimeout(() => { this.lpFired = true; this.openBk(); }, SITE.mascot.game.holdMs); },
      mascotUp: () => clearTimeout(this.lpT),
      noCtx: e => e.preventDefault(),
      bkOpen: !!S.bk, bkOver: !!(S.bk && S.bk.phase === 'over'),
      bk: { title: SITE.mascot.game.title, round: S.bk ? String(S.bk.round).padStart(2, '0') : '00', best: S.bk ? String(S.bk.best).padStart(2, '0') : '00', msg: S.bk ? S.bk.msg : '' },
      bkZones: SITE.mascot.game.voices.map((v, i) => ({ ...v, i, top: v.top + '%', h: v.h + '%', aria: v.part + ' \u2014 ' + v.label + ' (key ' + v.key + ')', hit: e => { e.preventDefault(); this.bkHit(i); }, click: () => this.bkHit(i) })),
      closeBk: () => this.closeBk(), againBk: () => this.againBk(),
      miniOn: !!S.miniOn,
      closeMini: () => this.closeMini(),
      heroImage: h.image, heroAlt: h.imageAlt, portalImage: h.portal ? h.portal.image : '', portalPos: h.portal ? h.portal.pos : '50% 50%', portalFit: 'contain', heroVideo: h.video, hasVideo: !!h.video,
      heroGL, heroDom: !heroGL && !h.video,
      titleLines: h.titleLines.map(l => ({ chars: l.split('') })),
      subtitle: h.subtitle, scrollLabel: h.scrollLabel,
      strips: Array.from({ length: STRIPS }, (_, i) => ({ clip: `inset(${(i / STRIPS * 100).toFixed(3)}% 0 ${(100 - (i + 1) / STRIPS * 100 - 0.01).toFixed(3)}% 0)` })),
      H: { about: hd(SITE.about.heading), dj: hd(SITE.dj.heading), beatbox: hd(SITE.beatbox.heading), gallery: hd(SITE.gallery.heading), drop: hd(SITE.drop.heading) },
      P: {
        bio: SITE.about.bio.map(para), statement: SITE.about.statement.map(para),
        djIntro: para(SITE.dj.intro), bbIntro: SITE.beatbox.intro.map(para), bbLead: para(SITE.beatbox.intro[0]), bbRest: SITE.beatbox.intro.slice(1).map(para), note: para(SITE.footer.note), collabLead: para(SITE.collabs.lead),
      },
      bbRows: SITE.beatbox.highlights.map((h, i) => ({ ...h, num: String(i + 1).padStart(2, '0') })),
      quoteWords,
      statementParas: SITE.about.statement.map((t, pi, all) => ({ words: words(t).map(w => {
        const key = w.toLowerCase().replace(/[^a-z]/g, '');
        const f = pi === all.length - 1 ? SITE.about.statementLastLine : SITE.about.statementAccents[key];
        return { w, plain: !f, marker: f === 'marker', serif: f === 'serif', neon: f === 'neon', glitch: f === 'glitch' };
      }) })),
      about: SITE.about,
      band: [...SITE.band, ...SITE.band, ...SITE.band],
      dj: SITE.dj, mixBars: bars, shoutFirst: SITE.dj.shouts[0],
      playing: !!S.playing, notPlaying: !S.playing,
      playAria: (S.playing ? 'Pause ' : 'Play preview of ') + SITE.dj.mix.title,
      playCursor: S.playing ? 'Pause' : 'Play',
      togglePlay: () => this.togglePlay(),
      mixTimeLabel: '0:30 Preview · ' + SITE.dj.mix.length + ' full',
      stats: SITE.dj.stats.map(s => { const m = s.value.match(/^(\D*)(\d+)(\D*)$/); return { ...s, pre: m ? m[1] : '', num: m ? m[2] : '', suf: m ? m[3] : '' }; }),
      beatbox: SITE.beatbox,
      openFeatured: () => this.openLb('featured', 0),
      reelClips: [0, 1].flatMap(d => SITE.beatbox.clips.map((c, i) => ({ ...c, thumb: `https://i.ytimg.com/vi/${c.youtubeId}/hqdefault.jpg`, aria: `Play ${c.title}`, dupe: d ? 'true' : 'false', tab: d ? -1 : 0, open: () => this.openShort(i) }))),
      reelHold: () => { this.reelPaused = true; }, reelGo: () => { this.reelPaused = false; },
      ringOpen: S.ring != null,
      closeRingClick: () => this.closeRing(),
      ringCardW: this.ringW() + 'px',
      ringClips: SITE.beatbox.clips.map((c, i, a) => { const on = S.ring === i; return { title: c.title, thumb: `https://i.ytimg.com/vi/${c.youtubeId}/hqdefault.jpg`, tf: `rotateY(${(i * 360 / a.length).toFixed(2)}deg) translateZ(${this.ringR()}px)`, edge: on ? RED : 'rgba(242,242,242,.12)', glow: on ? '0 0 28px rgba(255,65,40,.55)' : 'none' }; }),
      finale: SITE.finale, finaleWords: words(SITE.finale.text),
      finaleH: S.reduced ? '100svh' : (S.mobile ? '260vh' : '320vh'),
      footPull: S.reduced ? '0px' : '-30vh', // footer rises over the end of the finale — no black gap
      hasFrom: !!SITE.footer.from,
      heroH: S.reduced ? '100vh' : (S.mobile ? '220vh' : '360vh'),
      aboutPull: S.reduced ? '0px' : (S.mobile ? '-55vh' : '-70vh'), // About rises over the last part of the eye zoom — no blank gap
      // mobile = "lite": no pinning, sections flow normally with simple fades
      bbStageH: (S.reduced || S.mobile) ? 'auto' : '230vh',
      bbSticky: (S.reduced || S.mobile) ? 'relative' : 'sticky',
      bbInnerH: S.mobile ? 'auto' : '100svh',
      bbGap: S.mobile ? '28px' : '0px', bbPad: S.mobile ? '40px 0 0' : '0px',
      bbHeadPos: S.mobile ? 'relative' : 'absolute', bbHeadTop: S.mobile ? 'auto' : '50%', bbHeadTf: S.mobile ? 'none' : 'translateY(-50%)',
      galMin: S.mobile ? '96px' : '160px',
      folderStack: SITE.gallery.items.slice(0, 4).map((p, i, arr) => ({ ...p, rot: [-7, 5, -2.5, 0][i] + 'deg', dx: [-5, 5, -1.5, 0][i] + '%', dy: [2, 1, -1, 0][i] + '%', z: i + 1 })),
      galCount: SITE.gallery.items.length,
      folderAria: 'Open gallery folder, ' + SITE.gallery.items.length + ' photos',
      openFolder: () => this.openLb('image', 0),
      folderFan: () => this.fanFolder(true), folderUnfan: () => this.fanFolder(false),
      gallery: SITE.gallery.items.map((p, i) => ({ ...p, num: String(i + 1).padStart(2, '0'), aria: `Open photo ${i + 1}: ${p.alt}`, open: () => this.openLb('image', i) })),
      socials: SITE.socials,
      footer: SITE.footer,
      collabCards: SITE.collabs.cards,
      dropIntro: SITE.drop.intro,
      showKeys: !S.mobile,
      meterBars: Array.from({ length: 48 }, (_, i) => i),
      pads: SITE.drop.pads.map((p, i) => ({ ...p, num: String(i + 1).padStart(2, '0'), aria: `${p.label} (key ${p.key})`, down: e => { if (e.button > 0) return; e.preventDefault(); this.hitPad(i); }, click: e => { if (e.detail === 0) this.hitPad(i); } })),
      hasNote: !!SITE.footer.note, hasStats: SITE.dj.stats.length > 0,
      footerChars: SITE.artist.stageName.split('').map(ch => ch === ' ' ? '\u00A0' : ch),
      lbOpen: !!S.lb, lb: this.lbVals(),
      closeLb: () => this.setState({ lb: null }),
      prevLb: e => { e.stopPropagation(); this.stepLb(-1); },
      nextLb: e => { e.stopPropagation(); this.stepLb(1); },
      stop: e => e.stopPropagation(),
      mascot: { ...SITE.mascot, frameList: Object.entries(SITE.mascot.frames).map(([key, src]) => ({ key, src, vis: key === 'idle' ? 'visible' : 'hidden' })) },
      mascotCursor: S.menuOpen ? 'Close' : 'Menu',
      // CRT switch
      cycleLevel: () => this.setState(s => ({ level: LEVEL_ORDER[(LEVEL_ORDER.indexOf(s.level) + 1) % LEVEL_ORDER.length] })),
      levelLabel: lvl === 'full' ? 'Full' : lvl === 'low' ? 'Low' : 'Off',
      switchAria: `Screen effects: ${lvl}. Click to change.`,
      knobLeft: lvl === 'full' ? '20px' : lvl === 'low' ? '11px' : '2px',
      knobColor: lvl === 'off' ? '#8C8C8C' : RED,
      knobGlow: lvl === 'full' ? '0 0 10px #FF4128' : lvl === 'low' ? '0 0 4px rgba(255,65,40,.6)' : 'none',
      levelColor: lvl === 'off' ? '#8C8C8C' : RED,
      // CRT layers
      glOn: S.gl, cssFallback: !S.gl,
      crt: Math.min(1, k),
      scanOpacity: Math.min(1, CRT.scanlines * k),
      grille: Math.min(1, CRT.grille * k),
      grainOpacity: Math.min(0.5, 0.16 * k),
      vignetteOpacity: Math.min(1, CRT.vignette * k),
    };
  }
}

export default class App extends Component {
  render() { return View(this.renderVals()); }
}
App.defaultProps = {
  "crtStrength": 0.4,
  "scrollWarp": true,
  "skipIntro": false
};
