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