export default defineNuxtConfig({
  // Headers of the page
  app: {
    head: {
      htmlAttrs: {
        lang: "en",
      },
      title: "Marvin Tandler | 💻",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          hid: "description",
          name: "description",
          content:
            "Portfolio of UX & UI Designer and Frontend Developer Marvin Tandler",
        },
        { name: "author", content: "Marvin Tandler" },
        {
          hid: "keywords",
          name: "keywords",
          content:
            "Marvin Tandler, UX, UI, Frontend Designer, Developer, Designer, Portfolio, Webdesign, Web, Design, Webdesigner, Webdeveloper, Webentwickler, Webentwicklung",
        },
      ],
      link: [
        { rel: "icon", type: "image/png", href: "/favicons/favicon.png" },
        { rel: "icon", type: "image/svg+xml", href: "/favicons/favicon.svg" },
        {
          rel: "apple-touch-icon",
          type: "image/png",
          sizes: "180x180",
          href: "/favicons/apple-touch-icon.png",
        },
      ],
      pageTransition: { name: "page", mode: "out-in" },
    },
  },

  // Global CSS
  css: ["@/assets/css/main.scss"],

  // Style resources
  styleResources: {
    scss: ["./assets/scss/*.scss"],
  },

  // Plugins to load before mounting the App
  plugins: [
    { src: "@/plugins/particles.js", mode: "client" },
    { src: "@/plugins/mobileVh.js", mode: "client" },
    { src: "@/plugins/dynamicThemeColor.js", mode: "client" },
  ],

  // Nuxt.js modules
  modules: ["@nuxt/image", "@nuxtjs/fontaine", "v-gsap-nuxt", "nuxt-marquee"],

  vite: {
    optimizeDeps: {
      exclude: ["date-fns"],
    },
  },

  // Build configuration
  build: {},

  compatibilityDate: "2025-02-28",
});