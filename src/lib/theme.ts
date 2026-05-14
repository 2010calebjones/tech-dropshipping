/**
 * Shopry Brand Identity
 * Primary Blue: #0071CE (Walmart-inspired Trust)
 * Accent Yellow: #FFC220 (Walmart-inspired CTA/Energy)
 */

export const theme = {
  colors: {
    primary: {
      DEFAULT: '#0071CE',
      hover: '#005ea1',
      light: '#e6f1fa',
    },
    accent: {
      DEFAULT: '#FFC220',
      hover: '#e6ae1d',
      light: '#fff9e9',
    },
    text: {
      main: '#333333',
      muted: '#666666',
      light: '#999999',
    },
    background: {
      white: '#FFFFFF',
      gray: '#F8F9FA',
    }
  }
};

export type Theme = typeof theme;
