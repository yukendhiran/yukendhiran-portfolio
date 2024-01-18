import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        "primary": "var(--primary)",
        "secondary": "var(--secondary)"
      },
      fontFamily:{
        space:['Space Mono']
      },
      fontSize: {
        'big': '21rem',
        'mid': '13rem',
        'sml': '8rem',
      }
    },
  },
  plugins: [],
}
export default config
