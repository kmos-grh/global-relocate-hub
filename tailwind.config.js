module.exports = {
  content: ["./pages/*.{html,js}", "./index.html"],
  theme: {
    extend: {
      colors: {
        // GRH Brand Colors - Global Relocate Hub CI Palette
        grh: {
          indigo: '#4A3AFF',        // Accent / brand highlight
          'electric-blue': '#45B3FF', // Secondary accent
          'mint-teal': '#5EEAD4',    // Tool/data highlights
          emerald: '#10B981',        // Verified/success
          amber: '#F59E0B',          // Warnings / "coming soon"
          coral: '#EF4444',          // Errors / alerts
          navy: '#1E2233',           // Base / text
          offwhite: '#FAFAFC',       // Background
          slate: '#64748B',          // Muted text
        },
        // Primary Colors - Deep Navy
        primary: {
          DEFAULT: "#1a365d", // slate-800
          50: "#f8fafc", // slate-50
          100: "#f1f5f9", // slate-100
          200: "#e2e8f0", // slate-200
          300: "#cbd5e1", // slate-300
          400: "#94a3b8", // slate-400
          500: "#64748b", // slate-500
          600: "#475569", // slate-600
          700: "#334155", // slate-700
          800: "#1e293b", // slate-800
          900: "#0f172a", // slate-900
        },
        // Secondary Colors - Vibrant Teal
        secondary: {
          DEFAULT: "#319795", // teal-600
          50: "#f0fdfa", // teal-50
          100: "#ccfbf1", // teal-100
          200: "#99f6e4", // teal-200
          300: "#5eead4", // teal-300
          400: "#2dd4bf", // teal-400
          500: "#14b8a6", // teal-500
          600: "#0d9488", // teal-600
          700: "#0f766e", // teal-700
          800: "#115e59", // teal-800
          900: "#134e4a", // teal-900
        },
        // Accent Colors - Energetic Orange
        accent: {
          DEFAULT: "#ed8936", // orange-500
          50: "#fffbeb", // orange-50
          100: "#fef3c7", // orange-100
          200: "#fde68a", // orange-200
          300: "#fcd34d", // orange-300
          400: "#fbbf24", // orange-400
          500: "#f59e0b", // orange-500
          600: "#d97706", // orange-600
          700: "#b45309", // orange-700
          800: "#92400e", // orange-800
          900: "#78350f", // orange-900
        },
        // Background Colors
        background: "#ffffff", // white
        surface: "#f7fafc", // gray-50
        // Text Colors
        text: {
          primary: "#2d3748", // gray-700
          secondary: "#718096", // gray-500
        },
        // Status Colors
        success: {
          DEFAULT: "#38a169", // green-600
          50: "#f0fff4", // green-50
          100: "#c6f6d5", // green-100
          500: "#48bb78", // green-500
          600: "#38a169", // green-600
          700: "#2f855a", // green-700
        },
        warning: {
          DEFAULT: "#d69e2e", // yellow-600
          50: "#fffff0", // yellow-50
          100: "#fefcbf", // yellow-100
          500: "#ecc94b", // yellow-500
          600: "#d69e2e", // yellow-600
          700: "#b7791f", // yellow-700
        },
        error: {
          DEFAULT: "#e53e3e", // red-600
          50: "#fed7d7", // red-50
          100: "#feb2b2", // red-100
          500: "#f56565", // red-500
          600: "#e53e3e", // red-600
          700: "#c53030", // red-700
        },
        // Border Colors
        border: {
          DEFAULT: "#e2e8f0", // slate-200
          light: "#f1f5f9", // slate-100
        },
      },
      fontFamily: {
        // GRH Typography - Inter as primary
        inter: ['Inter', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        // Headlines - Inter
        headline: ['Inter', 'system-ui', 'sans-serif'],
        // Body - Source Sans Pro
        'source-sans': ['Source Sans Pro', 'sans-serif'],
        body: ['Source Sans Pro', 'sans-serif'],
        // Accents - Playfair Display
        playfair: ['Playfair Display', 'serif'],
        accent: ['Playfair Display', 'serif'],
      },
      fontSize: {
        'hero': ['3.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'hero-lg': ['4.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'hero-xl': ['5.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
      },
      borderRadius: {
        'grh': '24px',           // GRH card radius
        'grh-pill': '9999px',    // GRH button radius
      },
      boxShadow: {
        'grh': '0 20px 40px rgba(0,0,0,0.06)', // GRH shadow
        'subtle': '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        'card': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'modal': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      },
      maxWidth: {
        'grh': '75rem',  // 1200px max width for GRH
        '8xl': '88rem',
        '9xl': '96rem',
      },
      spacing: {
        'grh-gutter': '2rem',    // 32px gutter
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      letterSpacing: {
        'grh-eyebrow': '0.1em',  // Eyebrow letter spacing
      },
      animation: {
        'fade-in': 'fadeIn 400ms ease-out',
        'slide-up': 'slideUp 400ms ease-out',
        'scale-in': 'scaleIn 300ms ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      transitionDuration: {
        '200': '200ms',
        '300': '300ms',
        '400': '400ms',
      },
      transitionTimingFunction: {
        'out': 'ease-out',
      },
    },
  },
  plugins: [],
}