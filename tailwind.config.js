/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        void: '#0A0E17',
        panel: '#0F1524',
        'panel-hi': '#141B2E',
        line: '#232C42',
        cyan: {
          DEFAULT: '#00E5FF',
          dim: '#0B8FA3'
        },
        violet: {
          DEFAULT: '#7C5CFC',
          dim: '#4A3899'
        },
        amber: '#FFB020',
        ink: '#E8EDF4',
        muted: '#8B96A8'
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace']
      },
      backgroundImage: {
        grid: 'linear-gradient(rgba(0,229,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(0,229,255,0.06) 1px, transparent 1px)',
        'mesh-glow': 'radial-gradient(circle at 20% 20%, rgba(124,92,252,0.18), transparent 40%), radial-gradient(circle at 80% 0%, rgba(0,229,255,0.14), transparent 45%)'
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(0,229,255,0.25), 0 0 24px rgba(0,229,255,0.08)',
        'glow-violet': '0 0 0 1px rgba(124,92,252,0.3), 0 0 24px rgba(124,92,252,0.12)'
      }
    }
  },
  plugins: []
}
