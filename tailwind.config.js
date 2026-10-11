module.exports = {
  content: ['./index.html', './src/**/*.js'],
  theme: {
    extend: {
      colors: {
        bg: 'rgb(var(--bg) / <alpha-value>)',
        bgsoft: 'rgb(var(--bgsoft) / <alpha-value>)',
        bgsoft2: 'rgb(var(--bgsoft2) / <alpha-value>)',
        ink: 'rgb(var(--ink) / <alpha-value>)',
        inkdim: 'rgb(var(--inkdim) / <alpha-value>)',
        accent: 'rgb(var(--accent) / <alpha-value>)',
        line: 'rgb(var(--line) / <alpha-value>)'
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace']
      }
    }
  },
  plugins: [],
}