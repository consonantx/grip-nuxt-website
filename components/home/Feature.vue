<template>
  <section class="bg-white min-h-screen text-center h-[400vh]" ref="targetSection">
    <div class="container flex flex-col items-center justify-center space-y-9 top-0 sticky min-h-screen">
      <div
        class="text-lg text-primary font-gilmer uppercase border-2 border-[#e3e3e3] rounded-full tracking-widest px-6 py-4 leading-none">
        features <span class="drop-shadow-lg ml-2">🚀</span>
      </div>

      <!-- Titles -->
      <Presence :exit-before-enter="true">
        <template v-for="(titles, index) in allTitles" :key="index">
          <Motion class="font-title text-7xl font-black leading-tight w-max relative overflow-hidden"
            v-if="activeFeatureIndex === index">
            <Presence :exit-before-enter="true">
              <Motion :initial="titleTextSwitcherAnimation.initial" :animate="titleTextSwitcherAnimation.animate"
                :exit="titleTextSwitcherAnimation.exit" :transition="titleTextSwitcherAnimation.transition">{{
                titles.titleOne }}</Motion>
            </Presence>
            <Presence :exit-before-enter="true">
              <Motion :initial="titleTextSwitcherAnimation.initial" :animate="titleTextSwitcherAnimation.animate"
                :exit="titleTextSwitcherAnimation.exit" :transition="titleTextSwitcherAnimation.transition"> {{
                titles.titleTwo }} </Motion>
            </Presence>
            <Presence :exit-before-enter="true">
              <Motion :initial="titleTextSwitcherAnimation.initial" :animate="titleTextSwitcherAnimation.animate"
                :exit="titleTextSwitcherAnimation.exit" :transition="titleTextSwitcherAnimation.transition"> {{
                titles.titleThree }} </Motion>
            </Presence>
          </Motion>
        </template>
      </Presence>

      <!-- Description -->
      <Presence :exit-before-enter="true">
        <template v-for="(description, index) in allDescriptions" :key="index+description">
          <Motion tag="p" class="text-gray-400 font-gilmer text-2xl max-w-xl pb-5" v-if="activeFeatureIndex === index">
            {{ description.description }}
          </Motion>
        </template>
      </Presence>

      <!-- Actions -->
      <NuxtLink :href="activeFeature?.action" :target="activeFeature?.actionType === 'internal' ? '' : '__blank'"
        v-if="activeFeature?.hasAction"
        class="border-2 p-6 rounded-xl border-[#e3e3e3] text-black text-xl font-semibold leading-none flex items-center transition duration-200 hover:border-primary hover:border-opacity-40">
        <span class="font-gilmer">Find Out More</span>
        <ArrowRightIcon class="w-5 text-primary ml-2 -rotate-45"></ArrowRightIcon>
      </NuxtLink>

      <!-- Feature Images -->
      <div class="flex">
        <Presence :exit-before-enter="true">
          <Motion class="absolute top-1 left-0 w-80"><img src="/home/features/pos.png" alt="" /></Motion>
        </Presence>
        <Presence :exit-before-enter="true">
          <Motion class="absolute top-1 right-0 w-80"><img src="/home/features/pos.png" alt="" /></Motion>
        </Presence>
        <Presence :exit-before-enter="true">
          <Motion class="absolute bottom-1 left-20 w-80"><img src="/home/features/pos.png" alt="" /></Motion>
        </Presence>
        <Presence :exit-before-enter="true">
          <Motion class="absolute bottom-1 right-20 w-80"><img src="/home/features/pos.png" alt="" /></Motion>
        </Presence>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { ArrowRightIcon } from "@heroicons/vue/solid"
import { Motion, Presence } from "motion/vue"
import { useElementBounding, useElementSize, useWindowScroll } from "@vueuse/core"

import featuredFeatures from "~~/data/featuredFeatures"

const targetSection = ref<HTMLElement>(null)

const activeFeatureIndex = ref(0)
const activeFeature = computed(() => featuredFeatures[activeFeatureIndex.value])

const allFeatures = computed(() => featuredFeatures)
const allTitles = computed(() => featuredFeatures.map(({ titleOne, titleTwo, titleThree }) => ({ titleOne, titleTwo, titleThree })))
const allImages = computed(() => featuredFeatures.map(({ imageOne, imageTwo, imageThree, imageFour }) => ({ imageOne, imageTwo, imageThree, imageFour })))
const allDescriptions = computed(() => featuredFeatures.map(({ description }) => ({ description })))
const allActions = computed(() => featuredFeatures.map(({ action, actionType, hasAction }) => ({ action, actionType, hasAction })))

// Preload images to prevent frame shifting
const preLoadImages = () => {
  allImages.value.forEach((images) => {
    Object.values(images).forEach((image) => {
      const img = new Image()
      img.src = image
    })
  })
}

preLoadImages()

const initiateAnimationTrigger = () => {
  const targetSectionBounding = useElementBounding(targetSection)
  const targetSectionSize = useElementSize(targetSection)
  const targetSectionTop = targetSectionBounding.y

  const featureSectionsSizes = computed(() => targetSectionSize.height.value / allFeatures.value.length)

  const { y } = useWindowScroll()

  watch(y, (newY) => {
    if (targetSectionTop.value < 0) {
      const index = Math.floor(Math.abs(targetSectionTop.value) / featureSectionsSizes.value)
      if (index < 1) activeFeatureIndex.value = 0
      if (index > allFeatures.value.length - 1) activeFeatureIndex.value = allFeatures.value.length - 1
      if (index === activeFeatureIndex.value) true
      else activeFeatureIndex.value = index

      console.log(activeFeatureIndex.value)
    }
  })
}

initiateAnimationTrigger()


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


</script>