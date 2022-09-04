<template>
  <section class="bg-dark text-white text-center py-12 lg:py-0" ref="targetSection">
    <div class="container flex flex-col items-center justify-center top-0 sticky overflow-hidden">
      <!-- Titles -->
      <div class="flex flex-col items-center mt-4 lg:mt-10 mb-3 lg:mb-6 lg:space-y-2">
        <div
          class="font-title text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight w-max relative overflow-hidden">
          <Presence :exit-before-enter="true">
            <Motion :initial="titleTextSwitcherAnimation.initial" :animate="titleTextSwitcherAnimation.animate"
              :exit="titleTextSwitcherAnimation.exit" :transition="titleTextSwitcherAnimation.transition">
              {{ props.titleLineOne }}
            </Motion>
          </Presence>
        </div>
      </div>

      <!-- Titles -->
      <div class="flex flex-col items-center mt-2 mb-10 lg:mb-16 lg:space-y-2">
        <div
          class="font-title text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight w-max relative overflow-hidden">
          <Presence :exit-before-enter="true">
            <Motion :initial="titleTextSwitcherAnimation.initial" :animate="titleTextSwitcherAnimation.animate"
              :exit="titleTextSwitcherAnimation.exit" :transition="titleTextSwitcherAnimation.transition">
              {{ props.titleLineTwo }}
            </Motion>
          </Presence>
        </div>
      </div>

      <!-- Description -->
      <Presence :exit-before-enter="true">
        <Motion tag="p" class="text-gray-400 font-gilmer text-base lg:text-xl max-w-xl pb-5 lg:-mt-4"
          :initial="descriptionTextSwitcherAnimation.initial" :animate="descriptionTextSwitcherAnimation.animate"
          :exit="descriptionTextSwitcherAnimation.exit" :transition="descriptionTextSwitcherAnimation.transition">
          <slot></slot>
        </Motion>
      </Presence>

      <!-- Actions -->
      <!-- <div class="mt-4 lg:mt-10 mb-0 lg:mb-16">
        <NuxtLink :href="activeFeature?.action" :target="activeFeature?.actionType === 'internal' ? '' : '__blank'"
          v-if="activeFeature?.hasAction"
          class="border-2 p-4 lg:p-5 rounded-xl border-[#e3e3e3] text-black lg:text-lg font-semibold leading-none flex items-center transition duration-200 hover:border-primary hover:border-opacity-40">
          <span class="font-gilmer">Find Out More</span>
          <ArrowRightIcon class="w-5 text-primary ml-2 -rotate-45"></ArrowRightIcon>
        </NuxtLink>
      </div> -->

      <!-- Feature Images -->
      <div class="flex justify-around -space-x-5">
        <div class="lg:absolute lg:-top-16 md:-left-5 lg:left-0 h-36 lg:h-60 w-36 lg:w-60">
          <Presence :exit-before-enter="true">
            <Motion :initial="imageSwitcherAnimation.initial" :animate="imageSwitcherAnimation.animate"
              :exit="imageSwitcherAnimation.exit" :transition="imageSwitcherAnimation.transition" tag="img"
              :src="props.imageOne" class="w-full h-full object-cover">
            </Motion>
          </Presence>
        </div>

        <div class="lg:absolute md:-right-5 lg:-top-5 lg:right-0 h-36 lg:h-60 w-36 lg:w-60">
          <Presence :exit-before-enter="true">
            <Motion :initial="imageSwitcherAnimation.initial" :animate="imageSwitcherAnimation.animate"
              :exit="imageSwitcherAnimation.exit" :transition="imageSwitcherAnimation.transition" tag="img"
              :src="props.imageTwo" class="w-full h-full object-cover">
            </Motion>
          </Presence>
        </div>

        <div class="lg:absolute lg:bottom-16 lg:-left-5 h-36 lg:h-60 w-36 lg:w-60">
          <Presence :exit-before-enter="true">
            <Motion :initial="imageSwitcherAnimation.initial" :animate="imageSwitcherAnimation.animate"
              :exit="imageSwitcherAnimation.exit" :transition="imageSwitcherAnimation.transition" tag="img"
              :src="props.imageThree" class="w-full h-full object-cover">
            </Motion>
          </Presence>
        </div>

        <div class="lg:absolute lg:bottom-16 lg:-right-5 h-36 lg:h-60 w-36 lg:w-60">
          <Presence :exit-before-enter="true">
            <Motion :initial="imageSwitcherAnimation.initial" :animate="imageSwitcherAnimation.animate"
              :exit="imageSwitcherAnimation.exit" :transition="imageSwitcherAnimation.transition" tag="img"
              :src="props.imageFour" class="w-full h-full object-cover">
            </Motion>
          </Presence>
        </div>
      </div>

      <div class="flex items-center flex-col justify-center pt-20 pb-6 lg:pb-10">
        <div class="flex justify-center lg:justify-end -translate-y-10 lg:-translate-y-12">
          <button class="flex flex-col items-center" @click="scrollTo(500)">
            <ArrowCircleDownIcon class="w-10 lg:w-14 mb-3 stroke-1 animate-bounce duration-1000"></ArrowCircleDownIcon>
            <p class="font-display text-[10px] leading-none">Scroll Down</p>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { ArrowCircleDownIcon } from "@heroicons/vue/outline"
import { Motion, Presence } from "@motionone/vue"

import featuredFeatures from "~~/data/featuredFeatures"

const props = defineProps<{
  titleLineOne: string,
  titleLineTwo: string,
  imageOne: string,
  imageTwo: string,
  imageThree: string,
  imageFour: string
}>()

const targetSection = ref<HTMLElement>(null)


const titleTextSwitcherAnimation = computed(() => ({
  initial: {
    opacity: 0,
    transform: "translateY(100%)",
  },
  animate: {
    opacity: 1,
    transform: "translateY(0)",
  },
  exit: {
    opacity: 0,
    transform: "translateY(-100%)",
  },
  transition: {
    duration: 0.5,
    ease: "easeInOut",
  }
}))

const imageSwitcherAnimation = computed(() => ({
  initial: {
    opacity: 0,
    scale: 0.2,
  },
  animate: {
    opacity: 1,
    scale: 1,
  },
  exit: {
    opacity: 0,
    scale: 0.2,
  },
  transition: {
    duration: 0.5,
    ease: "easeInOut",
  }
}))

const descriptionTextSwitcherAnimation = computed(() => ({
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
  transition: {
    duration: 0.5,
    ease: "easeInOut",
  }
}))

const scrollTo = (elementId: string | number) => {
  if (typeof elementId === 'string' && document.querySelector(`#${elementId}`)) {
    document.querySelector(`#${elementId}`).scrollIntoView({ behavior: "smooth", block: "start" })
  } else if (typeof elementId === 'number') {
    window.scrollBy({ top: elementId, left: 0, behavior: "smooth" })
  }
}

</script>