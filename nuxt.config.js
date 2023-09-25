export default {
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: "static",
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    htmlAttrs: {
      lang: "en",
    },
    title: "Marvin Tandler | 💻",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        name: "description",
        content:
          "Portfolio of UX & UI Designer and Frontend Developer Marvin Tandler",
      },
      { name: "author", content: "Marvin Tandler" },
      {
        name: "keywords",
        content:
          "Marvin Tandler, UX, UI, Frontend Designer, Developer, Designer, Portfolio, Webdesign, Web, Design, Webdesigner, Webdeveloper, Webentwickler, Webentwicklung",
      },
    ],
    link: [{ rel: "icon", type: "image/png", href: "./favicon.png" }],
    link: [{ rel: "icon", type: "image/svg+xml", href: "./favicon.svg" }],
  },
  /*
   ** Global CSS
   */
  css: ["@/assets/css/main.scss", "~assets/scss/global_variables.scss"],

  styleResources: {
    scss: ["./assets/scss/*.scss"],
  },
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [
    { src: "@/plugins/particles.js", mode: "client" },
    { src: "@/plugins/mobileVh.js", mode: "client" },
    { src: "@/plugins/dynamicThemeColor.js", mode: "client" },
  ],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: ["nuxt-gsap-module", "@nuxt/image"],

  gsap: {
    extraPlugins: {
      scrollTo: true,
      scrollTrigger: true,
    },
  },
  /*
   ** Nuxt.js modules
   */
  modules: ["@nuxtjs/style-resources", "@nuxt/image"],
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {},
};
