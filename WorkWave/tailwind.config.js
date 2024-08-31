module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          500: '#FFD700',
          600: '#FFC700',
        },
        blue: {
          900: '#003366',
        },
        white: '#FFFFFF',
      },
      backgroundImage: {
        'login-gradient': 'linear-gradient(135deg, rgba(255,255,255,0.8), rgba(255,215,0,0.8))',
      },
    },
  },
  plugins: [],
}
