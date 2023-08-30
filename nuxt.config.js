export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: "universal",
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: "server",
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      },
      { name: "theme-color", content: "#fff" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  /*
   ** Global CSS
   */
  css: ["@/assets/css/main.scss", "~assets/scss/global_variables.scss"],

  styleResources: {
    scss: ["./assets/scss/*.scss"]
  },
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [
    { src: "@/plugins/particles.js", mode: "client" },
    { src: "@/plugins/mobileVh.js", mode: "client" }
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
      scrollTrigger: true
    }
  },
  /*
   ** Nuxt.js modules
   */
  modules: ["@nuxtjs/style-resources", "@nuxt/image"],
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {
    babel: {
      plugins: ["@babel/plugin-proposal-optional-chaining"]
    }
  }
};
