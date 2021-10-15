import { defineNuxtConfig } from 'nuxt3'

export default defineNuxtConfig({
  ssr: true,
  target: 'static',
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {}
        }
      }
    }
  }
})
