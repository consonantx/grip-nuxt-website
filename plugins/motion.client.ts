import { defineNuxtPlugin } from '#app'
import { MotionPlugin } from '@vueuse/motion'

export default defineNuxtPlugin(({ app }) => {
  app.use(MotionPlugin)
})