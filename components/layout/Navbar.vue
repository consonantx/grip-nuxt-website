<template>
  <div>
    <Presence>
      <Motion :initial="{ y: 200, opacity: 0 }" :animate="{ y: [200, 0], opacity: [0, 1] }"
        :exit="{ y: 200, opacity: 0 }" :transition="{ duration: 0.25, easing: 'ease-in' }"
        class="z-[11] fixed inset-0 bg-black bg-opacity-50" v-if="showMenu"></Motion>
    </Presence>

    <Presence>
      <Motion :initial="{ transform: 'scaleY(0.2)', opacity: 0 }"
        :animate="{ transform: ['scaleY(0.2)', 'scaleY(1)'], opacity: [0, 1] }"
        :exit="{ transform: 'scaleY(0.2)', opacity: 0 }" :transition="{ duration: 0.3, easing: 'ease-out', delay: 0.5 }"
        v-if="showMenu"
        class="origin-top top-4 inset-x-4 bg-light pt-10 pb-6 px-6 z-[12] fixed rounded-3xl backdrop-blur-md bg-opacity-70">
        <div class="flex flex-col space-y-4">
          <NuxtLink to="/" class="font-gilmer text-sm font-semibold" @click="showMenu = false">Home</NuxtLink>
          <NuxtLink to="/about" class="font-gilmer text-sm font-semibold" @click="showMenu = false">About Us</NuxtLink>
          <NuxtLink href="https://blog.trygrip.co" class="font-gilmer text-sm font-semibold" @click="showMenu = false">
            Blog</NuxtLink>
          <NuxtLink to="/faq" class="font-gilmer text-sm font-semibold" @click="showMenu = false">FAQs</NuxtLink>
        </div>
        <div class="flex items-center justify-center mt-6">
          <button @click="showMenu = !showMenu">
            <XCircleIcon class="w-6 text-black"></XCircleIcon>
          </button>
        </div>
      </Motion>
    </Presence>

    <Presence>
      <Motion :initial="{ y: 200, opacity: 0 }" :animate="{ y: [200, 0], opacity: [0, 1] }"
        :transition="{ duration: 0.75, delay: 0 }" class="fixed bottom-10 flex justify-center inset-x-0 z-10"
        v-if="shouldShowNavbar">
        <div class="p-1 rounded-full bg-white flex space-x-2 items-stretch shadow-xl shadow-[#00000012]">
          <!-- Desktop Menu Options -->
          <div class="space-x-2 hidden md:flex">
            <NuxtLink to="/" class="flex items-center px-3 rounded-full font-title" exact-active-class="bg-hue">Home
            </NuxtLink>
            <NuxtLink to="/about" class="flex items-center px-3 rounded-full font-title" exact-active-class="bg-hue">
              About
              Us
            </NuxtLink>
            <NuxtLink href="https://blog.trygrip.co" class="flex items-center px-3 rounded-full font-title"
              exact-active-class="bg-hue">Blog</NuxtLink>
          </div>

          <!-- Mobile Menu Options -->
          <button class="flex space-x-2 items-center md:hidden" @click="showMenu = !showMenu">
            <MenuIcon class="w-6 stroke-1 text-black"></MenuIcon>
            <span class="font-title text-base uppercase leading-none">Menu</span>
          </button>

          <NuxtLink href="https://onelink.to/grip" target="__blank"
            class="py-4 px-5 bg-primary text-white font-title uppercase text-sm leading-none font-bold rounded-full flex-1 drop-shadow-md hover:drop-shadow-xl shadow-[#00000026]">
            Get Card</NuxtLink>
        </div>
      </Motion>
    </Presence>
  </div>
</template>

<script lang="ts" setup>
import { Motion, Presence } from "@motionone/vue"
import { Bars3Icon as MenuIcon, XCircleIcon } from "@heroicons/vue/24/solid" 
import { useWindowScroll, useWindowSize } from "@vueuse/core"

const showMenu = ref(false)
const shouldShowNavbar = ref(false)

const { y } = useWindowScroll()

const { height } = useWindowSize()

const navbarViewThreshold = height.value + 100

watch(y, () => {
  if (y.value > navbarViewThreshold) {
    shouldShowNavbar.value = true
  } else {
    shouldShowNavbar.value = false
  }
})

</script>