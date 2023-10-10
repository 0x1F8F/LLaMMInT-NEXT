import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },

daisyui: {
      themes: [
        {
          mytheme: {
          
 "primary": "#2dd4bf",
          
 "secondary": "#8b5cf6",
          
 "accent": "#f43f5e",
          
 "neutral": "#021431",
          
 "base-100": "#ffffff",
          
 "info": "#67e8f9",
          
 "success": "#3b82f6",
          
 "warning": "#facc15",
          
 "error": "#ea580c",
          },
        },
      ],
    },
  plugins: [require('daisyui')],
}
export default config
