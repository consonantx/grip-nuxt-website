// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default {
  modules: ['@nuxtjs/tailwindcss'],
  build: {
    transpile: ['motion/vue', '@motionone/vue', '@heroicons/vue'],
  }
}
