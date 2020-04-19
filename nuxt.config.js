export default {
  mode: "universal",
  /*
   ** Headers of the page
   */
  head: {
    title: "BRAIN CRACKER",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "HELLO WORLD! IT'S SANG-HUN."
      },
      { property: 'og:site_title', content: 'BRAIN CRACKER' },
      { property: 'og:description', content: "How about selling purple cows? Wouldn't people line up to buy whatever it tastes like?" },
      { property: 'og:image', content: '/me.jpg' },
      { property: 'og:image:width', content: '128' },
      { property: 'og:image:height', content: '128' },
      { property: 'og:image:type', content: 'image/jpeg' },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css2?family=Zilla+Slab&family=Open+Sans&display=swap"
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: ["@nuxtjs/style-resources"],
  styleResources: {
    scss: ["@/assets/global.scss"]
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
};
