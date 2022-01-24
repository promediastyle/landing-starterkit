import { resolve } from 'path'
export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Landing Starter Kit',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap' }
    ],
    bodyAttrs: {
      id: 'top',
      class: 'antialiased font-roboto'
    },
    script: [
      { src: 'https://alpari.link/cookie.js', body: true },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~assets/css/main.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~plugins/vue-scrollactive.js', // https://github.com/eddiemf/vue-scrollactive
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxt/postcss8',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/i18n',
  ],

  i18n: {
    locales: [
      {
        code: 'ru',
        iso: 'ru-RU',
        file: 'ru.js',
        name: 'Русский'
      },
      {
        code: 'en',
        iso: 'en-US',
        file: 'en.js',
        name: 'English'
      },
      {
        code: 'de',
        iso: 'de-DE',
        file: 'de.js',
        name: 'Deutch'
      },
    ],
    defaultLocale: 'ru',
    lazy: true,
    langDir: 'lang/',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },

    publicPath: 'assets',
  },

  alias: {
    'img': resolve(__dirname, './assets/img/')
  },

  generate: {
    dir: 'dist',
    fallback: '404.html'
  },

  cli: {
    badgeMessages: ['Made in Fubon | http://thefubon.com'],
    bannerColor: 'yellow'
  }
}
