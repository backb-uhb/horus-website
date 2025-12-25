import type { Config } from "tailwindcss";
import fluid, { extract, screens, fontSize } from "fluid-tailwind";

const configs: Config = {
  content: {
    files: [
      "./src/app/**/*.{js,ts,jsx,tsx}",
      "./src/components/**/*.{js,ts,jsx,tsx}",
    ],
    extract,
  },
  theme: {
    screens,
    fontSize,
    /** @type {import('fluid-tailwind').FluidThemeConfig} */
   fluid: () => ({
  defaultScreens: ["20rem", "90rem"],
}),

extend: {
  fontFamily: {
   merriweather:['var(--font-merriweather)','sans-serif'],
satoshi:['var(--font-satoshi)','sans-serif'],
geist:['var(--font-geist)','sans-serif'],
    inter:['var(--font-inter)','sans-serif'],

  },

      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
}

  },
  plugins: [
    fluid({
      checkSC144: false,
    }),
  ],
};

export default configs;
