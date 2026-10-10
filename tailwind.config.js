module.exports = {
  content: ['./index.html', './src/**/*.js'],
  theme: {
    extend: {
      colors: {
        bg: '#0a0a0a', bgsoft: '#141414', bgsoft2: '#1b1b1b',
        ink: '#f5f5f3', inkdim: '#9a9a9a', accent: '#FFD60A', line: '#262626'
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace']
      }
    }
  },
  plugins: [],
}