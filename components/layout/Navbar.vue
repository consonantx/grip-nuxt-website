<template>
  <Motion 
    :initial="{ y: 200, opacity: 0 }" 
    :animate="{ y: [200, 0], opacity: [0, 1] }" 
    :transition="{ duration: 0.75, delay: 0.2 }" 
    class="fixed bottom-10 flex justify-center inset-x-0 z-10"
  >
    <div class="p-1 rounded-xl bg-white flex space-x-2 items-stretch shadow-xl shadow-[#00000012]">
      <NuxtLink to="/" class="flex items-center px-3 rounded-[9px] font-title" exact-active-class="bg-hue">Home
      </NuxtLink>
      <NuxtLink to="/about" class="flex items-center px-3 rounded-[9px] font-title" exact-active-class="bg-hue">About Us
      </NuxtLink>
      <NuxtLink to="/faq" class="flex items-center px-3 rounded-[9px] font-title" exact-active-class="bg-hue">FAQ
      </NuxtLink>
      <NuxtLink href="https://blog.trygrip.co" class="flex items-center px-3 rounded-[9px] font-title"
        exact-active-class="bg-hue">Blog</NuxtLink>
      <NuxtLink href="https://waitlist.trygrip.co" target="__blank"
        class="py-4 px-5 bg-primary text-white font-title uppercase text-sm leading-none font-bold rounded-[9px] flex-1 shadow-lg shadow-[#00000026]">
        join waitlist</NuxtLink>
    </div>
  </Motion>
</template>

<script lang="ts" setup>
import { Motion } from "motion/vue"
</script>