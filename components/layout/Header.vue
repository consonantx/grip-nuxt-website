<template>
  <nav class="py-16 bg-transparent text-white">
    <div class="container flex flex-row justify-center">
      <NuxtLink to="/">
        <Motion :initial="{ opacity: 0, y: -50 }" :animate="{ opacity: [0, 1], y: [-50, 0 ] }"
          :transition="{ duration: 0.8, delay }">
          <img src="/logo-dark.svg" alt="Grip Logo" class="h-10" v-if="props.isDark">
          <img src="/logo.svg" alt="Grip Logo" class="h-10">
        </Motion>
      </NuxtLink>
    </div>
  </nav>
</template>

<script lang="ts" setup>
import { Motion } from "motion/vue"

const props = defineProps<{
  isDark?: boolean,
  delay?: number,
}>()

const delay = props.delay ?? 0
</script>