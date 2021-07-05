module.exports = {
  purge: ['./src/**/*.{ts,tsx}'],
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        brand: 'rgb(235, 69, 158)',
        'brand-dark': 'rgb(214, 64, 145)'
      },
      borderRadius: {
        // uneven radii supremacy
        sm: '0.19rem',
        DEFAULT: '0.3125rem',
        md: '0.4375rem',
        lg: '0.5625rem',
        xl: '0.8125rem',
        '2xl': '1.0625rem',
        '3xl': '1.5625rem'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: [],
  mode: 'jit'
}
