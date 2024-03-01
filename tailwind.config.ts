import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      'sm': '320px', // override the default small screen breakpoint
      'lg': '1024px', // override the default large screen breakpoint
      // Add more custom breakpoints if needed
    },
    extend: {
      colors: {
        "primary": "var(--primary)",
        "secondary": "var(--secondary)"
      },
      
      fontSize: {
        'big': '21rem',
        'mid': '13rem',
        'sml': '8rem',
        'xs' :'1.7rem',
        'xxs':'0.8rem',
      }
    },
  },
  plugins: [],
}
export default config
