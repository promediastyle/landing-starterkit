module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        roboto: "'Roboto', 'Helvetica', 'Arial', 'sans-serif'",
      },
      colors: {
        'cold-gray': {
          1200: '#0F1420',
          1100: '#191D29',
          1000: '#222732',
          900: '#353A44',
          800: '#3F434D',
          700: '#494C56',
          600: '#52565E',
          500: '#5C5F67',
          400: '#656970',
          300: '#6F7279',
          200: '#797B82',
          100: '#82858B',
        },
        'cold-gray-light': {
          1200: '#8C8E94',
          1100: '#95979D',
          1000: '#9FA1A6',
          900: '#A9AAAF',
          800: '#B2B4B8',
          700: '#B2B4B8',
          600: '#C5C7C9',
          500: '#CFD0D2',
          400: '#D9D9DB',
          300: '#E2E3E4',
          200: '#ECECED',
          100: '#F5F6F6',
        },
        'primary-green': {
          1200: '#769E1B',
          1100: '#769E1B',
          1000: '#7CA61D',
          900: '#82AF1E',
          800: '#8FBF21',
          700: '#95C823',
          600: '#9BD024',
          500: '#A3D436',
          400: '#ABD847',
          300: '#AFD950',
          200: '#B7DD61',
          100: '#C3E37C',
        },
        'pear': {
          1200: '#949400',
          1100: '#A6A600',
          1000: '#AEAE00',
          900: '#B7B700',
          800: '#C9C900',
          700: '#D1D100',
          600: '#DADA00',
          500: '#DDDD14',
          400: '#E0E029',
          300: '#E1E133',
          200: '#E4E447',
          100: '#E9E966',
        },
        'orange': {
          1200: '#AD7014',
          1100: '#C27D17',
          1000: '#CC8418',
          900: '#D68B19',
          800: '#EB981C',
          700: '#F59E1D',
          600: '#FFA51E',
          500: '#FFAC30',
          400: '#FFB342',
          300: '#FFB74B',
          200: '#FFBE5D',
          100: '#FFC978',
        },
        'red': {
          1200: '#AD4122',
          1100: '#C24826',
          1000: '#CC4C28',
          900: '#D6502A',
          800: '#EB572E',
          700: '#F55B30',
          600: '#FF5F32',
          500: '#FF6C42',
          400: '#FF7953',
          300: '#FF7F5B',
          200: '#FF8C6B',
          100: '#FF9F84',
        },
        'yellow': {
          1200: '#AD991B',
          1100: '#C2AB1E',
          1000: '#D6BD22',
          900: '#E0C623',
          800: '#EBCF25',
          700: '#F5D826',
          600: '#FFE128',
          500: '#FFE64A',
          400: '#FFE85C',
          300: '#FFEB6D',
          200: '#FFED7E',
          100: '#FFEF8F',
        },
        'soft-red': {
          1200: '#A64545',
          1100: '#B94D4D',
          1000: '#C35151',
          900: '#CD5555',
          800: '#E05D5D',
          700: '#EA6161',
          600: '#F46565',
          500: '#F57171',
          400: '#F67E7E',
          300: '#F68484',
          200: '#F79090',
          100: '#F8A3A3',
        },
        'blue-gray': {
          1200: '#4C6376',
          1100: '#546F84',
          1000: '#59758B',
          900: '#5D7B92',
          800: '#6686A0',
          700: '#6B8CA7',
          600: '#6F92AE',
          500: '#7B9BB4',
          400: '#86A3BB',
          300: '#8CA8BE',
          200: '#97B0C5',
          100: '#A9BECE',
        },
        'blue-green': {
          1200: '#309498',
          1100: '#35A6AA',
          1000: '#38AEB3',
          900: '#3BB7BC',
          800: '#40C9CE',
          700: '#43D1D7',
          600: '#46DAE0',
          500: '#55DDE2',
          400: '#64E0E5',
          300: '#6BE1E6',
          200: '#7AE4E9',
          100: '#90E9EC',
        },
        'mint-green': {
          1200: '#58A05A',
          1100: '#62B365',
          1000: '#67BC6A',
          900: '#6CC570',
          800: '#77D87A',
          700: '#7CE280',
          600: '#81EB85',
          500: '#8BED8F',
          400: '#95EE98',
          300: '#9AEF9D',
          200: '#A4F1A7',
          100: '#B3F3B6',
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
