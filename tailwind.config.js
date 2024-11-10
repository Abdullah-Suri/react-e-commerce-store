export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'barlow': "'Barlow', sans-serif",
      },
      colors: {
        "primary": 'var(--primary)',
        "secondary": 'var(--secondary)',
        "text-color": 'var(--text-color)',
        "regular-text-color": 'var(--regular-text-color)',
      },
      // screens: {
      //   'mini': '393px',
      //   'sm': '640px',
      //   'md': '1024px',
      //   'lg': '1280px',
      //   'xl': '1440px',
      // },
      container: {
        center: true,
        padding: '20px',
        screens: {
          'mini': '450px',
          'sm': '640px',
          'md': '768px',
          'lg': '1024px',
          'xl': '1536px',
        },
      },
    },
  },
  plugins: []
}