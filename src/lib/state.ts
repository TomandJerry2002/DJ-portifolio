import { CRT, type Level } from '@/config/crt';

export type Lightbox = { type: 'image' | 'clip' | 'featured'; i: number } | null;

export type SiteState = {
  envReady: boolean; // true once real device info (below) has been read on the client
  mobile: boolean;
  reduced: boolean; // prefers-reduced-motion
  gl: boolean; // WebGL available
  deviceScale: number; // CRT scale for mobile / low-power devices
  level: Level; // visitor CRT level
  menuOpen: boolean;
  lb: Lightbox;
  ring: number | null; // index of the Short spinning in the 3D ring
  active: string | null; // section id under the nav
  playing: boolean; // featured track preview
};

export const initialState: SiteState = {
  envReady: false, mobile: false, reduced: false, gl: true, deviceScale: 1,
  level: 'full', menuOpen: false, lb: null, ring: null, active: null, playing: false,
};

// Effective CRT intensity: master × visitor level × device
export const crtK = (s: SiteState) => CRT.strength * CRT.levels[s.level] * s.deviceScale;

// UI → engine calls (wired in components/Site.tsx)
export type Actions = {
  toggleMenu: () => void;
  openLb: (type: 'image' | 'clip' | 'featured', i: number) => void;
  closeLb: () => void;
  stepLb: (d: number) => void;
  openShort: (i: number) => void;
  closeRing: () => void;
  setReelPaused: (v: boolean) => void;
  togglePlay: () => void;
};

export type Patch = Partial<SiteState> | ((s: SiteState) => Partial<SiteState>);
export type Store = { get: () => SiteState; set: (p: Patch, cb?: () => void) => void };
