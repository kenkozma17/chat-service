export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'chat-service',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/firebase'
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  
  // Firebase
  firebase: {
    config: {
      apiKey: "AIzaSyCShfzbc8Dy_q5JU3RvvnmZtZcgPXF_sok",
      authDomain: "v-chat-19ea2.firebaseapp.com",
      projectId: "v-chat-19ea2",
      storageBucket: "v-chat-19ea2.appspot.com",
      messagingSenderId: "954826273881",
      appId: "1:954826273881:web:4abf4e7fed2cb911746d48",
      measurementId: "G-KZVZK5BZZE"
    },
    services: {
      auth: true,
      firestore: true,
    }
  }
}
