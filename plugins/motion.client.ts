import { defineNuxtPlugin } from '#app'
import { MotionPlugin } from '@vueuse/motion'

export default defineNuxtPlugin(({ vueApp }) => {
  vueApp.use(MotionPlugin)
})