<template>
  <nav
    class="container py-10 lg:py-12 flex justify-between items-center mt-0 mx-auto px-10 lg:px-0"
  >
    <nuxt-link
      to="/"
      v-motion
      :initial="{
        opacity: 0,
        y: -100,
        scale: 0
      }"
      :enter="{
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
          type: [0.64, 0.04, 0.35, 1],
          y: {
            duration: 1400
          },
          opacity: {
            duration: 1400
          }
        }
      }"
      :hovered="{
        scale: 1.2
      }"
    >
      <img src="/logo.svg" class="w-10 lg:h-12 h-10 lg:w-12" alt="Logo" />
    </nuxt-link>
    <nuxt-link
      to="/join"
      class="lg:flex items-center border-[3px] rounded-full py-4 px-8 border-[#303030] hidden"
      v-motion
      :initial="{
        opacity: 0,
        y: -100,
      }"
      :enter="{
        opacity: 1,
        y: 0,
        transition: {
          type: [0.64, 0.04, 0.35, 1],
          y: {
            duration: 1400,
            delay: 110
          },
          opacity: {
            duration: 1400,
            delay: 110
          }
        }
      }"
    >Join Waitlist</nuxt-link>
    <button
    v-if="shouldShowDropdown"
      class="flex flex-col space-y-2 items-center border-[3px] border-[#303030] rounded-3xl p-3 font-bold text-white lg:hidden"
      @click="shouldShowMenu = true"
      v-motion
      :initial="{
        opacity: 0,
        y: -100,
      }"
      :enter="{
        opacity: 1,
        y: 0,
        transition: {
          type: [0.64, 0.04, 0.35, 1],
          y: {
            duration: 1400,
            delay: 110
          },
          opacity: {
            duration: 1400,
            delay: 110
          }
        }
      }"
    >
    <span class="h-[2px] bg-white rounded-full w-6"></span>
    <span class="h-[2px] bg-white rounded-full w-6"></span>
    </button>
  </nav>
</template>

<script lang="ts" setup>
const shouldShowMenu = useState('shouldShowMenu')
const props = defineProps({
  shouldShowDropdown: {
    type: Boolean,
    default: true
  }
})
</script>