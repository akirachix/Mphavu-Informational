import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      screens:{
        'nh': {'min': '1000px', 'max': '1278px'},
        'nhm': {'min': '1280px', 'max': '1290px'},
        'sd': {'min': '540px', 'max': '550px'},
        'iPA': {'min': '820px', 'max': '840px'},
        'ipm': {'min': '768px', 'max': '800px'},

      },
      fontFamily: {
        josefinSans: ['Josefin Sans', 'sans-serif'],
      }
    },
    
  },
  plugins: [],
};
export default config;
