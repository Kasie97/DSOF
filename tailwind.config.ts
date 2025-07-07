// tailwind.config.ts
import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
content: [
  "./src/**/*.{js,ts,jsx,tsx,mdx}",
  "./pages/**/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}"
],
  theme: {
    extend: {
      colors: {
        'foundation-bg': '#d18b11',
      },
    },
  },
  plugins: [],
};

export default config;
