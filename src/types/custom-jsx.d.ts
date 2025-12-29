// This file allows custom elements like <tv-ticker-tape> in JSX
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'tv-ticker-tape':  {
        symbols?: string;
        theme?: 'light' | 'dark';
        'hide-chart'?: string;
        'item-size'?: 'adaptive' | 'compact' | 'regular';
        locale?: string;
      };
    }
  }
}

export {};