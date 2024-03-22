import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.tsx"
  ],
  theme: {
    extend: {
     colors:{
      renan: '#fff'
     }
    },
  },
  plugins: [],
};
export default config;
