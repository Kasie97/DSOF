// tailwind.config.ts
import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
content: [
  "./app/**/*.{js,ts,jsx,tsx,mdx}",
  "./src/**/*.{js,ts,jsx,tsx,mdx}",
  "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  "./components/**/*.{js,ts,jsx,tsx,mdx}"
],
  theme: {
    extend: {
      colors: {
        'foundation-bg': '#fcf0dc',
        'footer-green': '#008000',
        'footer-brown': '#d18b11',
        'cream': '#fcf0dc',
      },
    },
  },
  plugins: [],
};

export default config;
