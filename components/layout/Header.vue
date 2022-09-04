<template>
  <nav class="py-12 xl:py-16 bg-transparent text-white z-10 relative">
    <div class="container flex flex-row justify-center">
      <NuxtLink to="/">
        <Motion :initial="{ opacity: 0, y: -50 }" :animate="{ opacity: [0, 1], y: [-50, 0 ] }"
          :transition="{ duration: 0.4, delay }">
          <img src="/logo-dark.svg" alt="Grip Logo" class="h-8 lg:h-10" v-if="props.isDark">
          <img src="/logo.svg" alt="Grip Logo" class="h-8 lg:h-10" v-else>
        </Motion>
      </NuxtLink>
    </div>
  </nav>
</template>

<script lang="ts" setup>
import { Motion } from "@motionone/vue"

const props = defineProps<{
  isDark?: boolean,
  delay?: number,
}>()

const delay = props.delay ?? 0
</script>