import React from 'react';
import { createRoot } from 'react-dom/client';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import './globals.css';
import App from './App.jsx';

// The site logic reads these from window (same as the design file)
gsap.registerPlugin(ScrollTrigger);
Object.assign(window, { gsap, ScrollTrigger, Lenis });

// No StrictMode: its double-mount would boot the GSAP/WebGL engine twice in dev.
createRoot(document.getElementById('root')).render(<App />);
