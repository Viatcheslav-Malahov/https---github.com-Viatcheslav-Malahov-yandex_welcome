// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
  ],
  devtools: { enabled: true },
  pages: true,
  image: {
    // Options
  }
})