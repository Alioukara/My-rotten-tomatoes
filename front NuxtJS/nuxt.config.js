
export default {
  server: {
    port: 3000
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'front_tomatoes',
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
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css', 
      rel: 'stylesheet', integrity: 'sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU', 
      crossorigin: 'anonymous' },

      {rel:"stylesheet", href:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"},
      

    ]
  },

    // router: {
    //   extendRoutes(routes) {
    //   require('./components/Login.vue') 
    //   let admin = (this.$cookies.get("admin"))
    //     if(admin) {
    //     routes.push({
    //       name: 'admin',
    //       path: '/admin',
    //       component: "/Users/yvanlechien/rendu/C-COD-270-PAR-2-3-c2cod270p0-romain.galtier/front_tomatoes/pages/admin/index.vue",
    //     })
    //   } else {
    //     this.$router.push("/");
    //   }
    //   }
    // },
  
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],
  buildModules: ['@nuxtjs/tailwindcss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/toast',
    'cookie-universal-nuxt'
  ],

  axios: {
    baseURL: 'http://localhost:8000/'
  },

  // router: {
  //   middleware: 'authenticated'
  // },

  toast: {
    position: 'top-right',
    register: [ // Register custom toasts
      {
        name: 'ERROR',
        message: 'Oops...Something went wrong',
        options: {
          type: 'error'
        }
      }
    ]
}
}
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }

