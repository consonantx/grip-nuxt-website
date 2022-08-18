<template>
  <section class="bg-dark text-white text-center py-12 lg:py-0" ref="targetSection">
    <div class="container flex flex-col items-center justify-center top-0 sticky overflow-hidden">
      <!-- Titles -->
      <div class="flex flex-col items-center mt-4 lg:mt-10 mb-3 lg:mb-8 lg:space-y-2">
        <div class="font-title text-5xl lg:text-8xl font-black leading-tight w-max relative overflow-hidden">
          <Presence :exit-before-enter="true">
            <Motion :initial="titleTextSwitcherAnimation.initial" :animate="titleTextSwitcherAnimation.animate"
              :exit="titleTextSwitcherAnimation.exit" :transition="titleTextSwitcherAnimation.transition">
              Security First,
            </Motion>
          </Presence>
        </div>
      </div>

      <!-- Titles -->
      <div class="flex flex-col items-center mt-4 mb-3 lg:mb-8 lg:space-y-2">
        <div class="font-title text-5xl lg:text-8xl font-black leading-tight w-max relative overflow-hidden">
          <Presence :exit-before-enter="true">
            <Motion :initial="titleTextSwitcherAnimation.initial" :animate="titleTextSwitcherAnimation.animate"
              :exit="titleTextSwitcherAnimation.exit" :transition="titleTextSwitcherAnimation.transition">
              Last and Always
            </Motion>
          </Presence>
        </div>
      </div>

      <!-- Description -->
      <Presence :exit-before-enter="true">
        <Motion tag="p" class="text-gray-400 font-gilmer text-base lg:text-xl max-w-xl pb-5 lg:-mt-4" 
        :initial="descriptionTextSwitcherAnimation.initial"
          :animate="descriptionTextSwitcherAnimation.animate" :exit="descriptionTextSwitcherAnimation.exit"
          :transition="descriptionTextSwitcherAnimation.transition">
          Grip is the technological embodiment of user security. We put your security front and center and make sure you
          can go about your daily financial activities knowing we’ve got your back a 100%.
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
        <div class="lg:absolute lg:-top-20 lg:left-0 h-36 lg:h-60 xl:h-80 w-36 lg:w-60 xl:w-80">
          <Presence :exit-before-enter="true">
            <Motion :initial="imageSwitcherAnimation.initial" :animate="imageSwitcherAnimation.animate"
              :exit="imageSwitcherAnimation.exit" :transition="imageSwitcherAnimation.transition" tag="img"
              src="/home/features/insurance.png" class="w-full h-full object-cover">
            </Motion>
          </Presence>
        </div>

        <div class="lg:absolute lg:-top-20 lg:right-0 h-36 lg:h-60 xl:h-80 w-36 lg:w-60 xl:w-80">
          <Presence :exit-before-enter="true">
            <Motion :initial="imageSwitcherAnimation.initial" :animate="imageSwitcherAnimation.animate"
              :exit="imageSwitcherAnimation.exit" :transition="imageSwitcherAnimation.transition" tag="img"
              src="/home/features/cash_chest_white.png" class="w-full h-full object-cover">
            </Motion>
          </Presence>
        </div>

        <div class="lg:absolute lg:bottom-10 lg:left-20 h-36 lg:h-60 xl:h-80 w-36 lg:w-60 xl:w-80">
          <Presence :exit-before-enter="true">
            <Motion :initial="imageSwitcherAnimation.initial" :animate="imageSwitcherAnimation.animate"
              :exit="imageSwitcherAnimation.exit" :transition="imageSwitcherAnimation.transition" tag="img"
              src="/home/features/cash_chest_blue.png" class="w-full h-full object-cover">
            </Motion>
          </Presence>
        </div>

        <div class="lg:absolute lg:bottom-10 lg:right-20 h-36 lg:h-60 xl:h-80 w-36 lg:w-60 xl:w-80">
          <Presence :exit-before-enter="true">
            <Motion :initial="imageSwitcherAnimation.initial" :animate="imageSwitcherAnimation.animate"
              :exit="imageSwitcherAnimation.exit" :transition="imageSwitcherAnimation.transition" tag="img"
              src="/home/features/cash_wallet.png" class="w-full h-full object-cover">
            </Motion>
          </Presence>
        </div>
      </div>

      <div class="flex items-center flex-col justify-center pt-24">
        <div class="flex justify-center lg:justify-end -translate-y-24 md:-translate-y-72 lg:-translate-y-12">
          <button class="flex flex-col items-center" @click="scrollTo('why-grip-section')">
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
import { Motion, Presence } from "motion/vue"

import featuredFeatures from "~~/data/featuredFeatures"

const props = defineProps<{
  
}>()

const targetSection = ref<HTMLElement>(null)

const activeFeatureIndex = ref(0)
const activeFeature = computed(() => featuredFeatures[activeFeatureIndex.value])

const scrollTo = (elementId: string) => {
  if (document.querySelector(`#${elementId}`)) {
    document.querySelector(`#${elementId}`).scrollIntoView({ behavior: "smooth", block: "start" })
  }
}


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


</script>