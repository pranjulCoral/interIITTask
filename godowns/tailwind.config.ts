import type { Config } from "./node_modules/tailwindcss/types/index.js";

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
          "lightPink":"rgb(238, 101, 124)"
      },
    },
   
    keyframes:{
      slideUp: {
        "0%" : {
           transform: "translateY(100%)",
           opacity: "0"
         },
         '100%':{
           transform: 'translateY(0)',
           opacity: '1'
         }
       },
       slideDown: {
         "0%" : {
            transform: "translateY(-100%)",
            opacity: "0"
          },
          '100%':{
            transform: 'translateY(0)',
            opacity: '1'
          }
        },
       'slide-in-left': {
         '0%': { transform: 'translateX(-100%)', opacity: '0' },
         '100%': { transform: 'translateX(0)', opacity: '1' },},
       slideInRight: {
         '0%': { transform: 'translateX(100%)', opacity: '0' },
         '100%': { transform: 'translateX(0)', opacity: '1' },
       },
    },
    animation: {
      growBorder: 'growBorder 1s ease-out forwards',
      rotate: 'rotate 10s linear infinite',
      'slide-down':"slideDown 1s ease-out",
      'slide-in-right': 'slideInRight 1s ease-out',
      'slide-in-left': 'slide-in-left 1s ease-out', 
      'slideUp':'slideUp 1s ease-out'
    },
  },
  plugins: [],
};
export default config;
