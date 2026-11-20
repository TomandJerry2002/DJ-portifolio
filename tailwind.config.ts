import type { Config } from 'tailwindcss';
import { colors, fonts, motion } from './src/styles/tokens';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: colors.ink, 'ink-2': colors.ink2, line: colors.line,
        mute: colors.mute, paper: colors.paper, 'paper-dim': colors.paperDim,
        signal: colors.signal, 'signal-hot': colors.signalHot, 'signal-deep': colors.signalDeep,
      },
      fontFamily: fonts,
      transitionTimingFunction: { out: motion.easeOut, inout: motion.easeInOut },
    },
  },
  plugins: [],
} satisfies Config;
