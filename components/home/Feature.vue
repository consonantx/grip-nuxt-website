<template>
  <section class="bg-white min-h-screen text-center h-[400vh]" ref="targetSection">
    <div class="container flex flex-col items-center justify-center top-0 sticky min-h-screen overflow-hidden">
      <div
        class="lg:text-lg text-primary font-gilmer uppercase border-2 border-[#e3e3e3] rounded-full tracking-widest px-4 lg:px-6 py-4 leading-none">
        features <span class="drop-shadow-lg ml-2">🚀</span>
      </div>

      <!-- Titles -->
      <div class="flex flex-col items-center mt-10 mb-8 space-y-2">
        <div class="font-title text-5xl lg:text-8xl font-black leading-tight w-max relative overflow-hidden">
          <Presence :exit-before-enter="true">
            <template v-for="(titles, index) in allTitles" :key="index">
              <Motion :initial="titleTextSwitcherAnimation.initial" :animate="titleTextSwitcherAnimation.animate"
                :exit="titleTextSwitcherAnimation.exit" :transition="titleTextSwitcherAnimation.transition"
                v-if="activeFeatureIndex === index">{{
                titles.titleOne
                }}</Motion>
            </template>
          </Presence>
        </div>

        <div class="font-title text-5xl lg:text-8xl font-black leading-tight w-max relative overflow-hidden">
          <Presence :exit-before-enter="true">
            <template v-for="(titles, index) in allTitles" :key="index">
              <Motion :initial="titleTextSwitcherAnimation.initial" :animate="titleTextSwitcherAnimation.animate"
                :exit="titleTextSwitcherAnimation.exit" :transition="titleTextSwitcherAnimation.transition"
                v-if="activeFeatureIndex === index">{{
                titles.titleTwo
                }}</Motion>
            </template>
          </Presence>
        </div>

        <div class="font-title text-5xl lg:text-8xl font-black leading-tight w-max relative overflow-hidden">
          <Presence :exit-before-enter="true">
            <template v-for="(titles, index) in allTitles" :key="index">
              <Motion :initial="titleTextSwitcherAnimation.initial" :animate="titleTextSwitcherAnimation.animate"
                :exit="titleTextSwitcherAnimation.exit" :transition="titleTextSwitcherAnimation.transition"
                v-if="activeFeatureIndex === index">{{
                titles.titleThree
                }}</Motion>
            </template>
          </Presence>
        </div>
      </div>

      <!-- Description -->
      <Presence :exit-before-enter="true">
        <template v-for="(description, index) in allDescriptions" :key="index+description">
          <Motion tag="p" class="text-gray-400 font-gilmer text-base lg:text-xl max-w-xl pb-5 lg:-mt-4"
            v-if="activeFeatureIndex === index" :initial="descriptionTextSwitcherAnimation.initial"
            :animate="descriptionTextSwitcherAnimation.animate" :exit="descriptionTextSwitcherAnimation.exit"
            :transition="descriptionTextSwitcherAnimation.transition">
            {{ description.description }}
          </Motion>
        </template>
      </Presence>

      <!-- Actions -->
      <div class="mt-10 mb-16">
        <NuxtLink :href="activeFeature?.action" :target="activeFeature?.actionType === 'internal' ? '' : '__blank'"
          v-if="activeFeature?.hasAction"
          class="border-2 p-4 lg:p-5 rounded-xl border-[#e3e3e3] text-black lg:text-lg font-semibold leading-none flex items-center transition duration-200 hover:border-primary hover:border-opacity-40">
          <span class="font-gilmer">Find Out More</span>
          <ArrowRightIcon class="w-5 text-primary ml-2 -rotate-45"></ArrowRightIcon>
        </NuxtLink>
      </div>

      <!-- Feature Images -->
      <div class="flex justify-around">
        <div class="lg:absolute lg:top-20 lg:left-0 h-40 lg:h-60 xl:h-80 w-36 lg:w-60 xl:w-80">
          <Presence :exit-before-enter="true">
            <template v-for="(image, index) in allImages" :key="index">
              <Motion :initial="imageSwitcherAnimation.initial" :animate="imageSwitcherAnimation.animate"
                :exit="imageSwitcherAnimation.exit" :transition="imageSwitcherAnimation.transition"
                v-if="activeFeatureIndex === index" tag="img" :src="image.imageOne" class="w-full h-full object-cover">
              </Motion>
            </template>
          </Presence>
        </div>

        <div class="lg:absolute lg:top-20 lg:right-0 h-40 lg:h-60 xl:h-80 w-36 lg:w-60 xl:w-80">
          <Presence :exit-before-enter="true">
            <template v-for="(image, index) in allImages" :key="index">
              <Motion :initial="imageSwitcherAnimation.initial" :animate="imageSwitcherAnimation.animate"
                :exit="imageSwitcherAnimation.exit" :transition="imageSwitcherAnimation.transition"
                v-if="activeFeatureIndex === index" tag="img" :src="image.imageTwo" class="w-full h-full object-cover">
              </Motion>
            </template>
          </Presence>
        </div>

        <div class="lg:absolute lg:bottom-10 lg:left-20 h-40 lg:h-60 xl:h-80 w-36 lg:w-60 xl:w-80">
          <Presence :exit-before-enter="true">
            <template v-for="(image, index) in allImages" :key="index">
              <Motion :initial="imageSwitcherAnimation.initial" :animate="imageSwitcherAnimation.animate"
                :exit="imageSwitcherAnimation.exit" :transition="imageSwitcherAnimation.transition"
                v-if="activeFeatureIndex === index" tag="img" :src="image.imageThree"
                class="w-full h-full object-cover">
              </Motion>
            </template>
          </Presence>
        </div>

        <div class="lg:absolute lg:bottom-10 lg:right-20 h-40 lg:h-60 xl:h-80 w360 lg:w-60 xl:w-80">
          <Presence :exit-before-enter="true">
            <template v-for="(image, index) in allImages" :key="index">
              <Motion :initial="imageSwitcherAnimation.initial" :animate="imageSwitcherAnimation.animate"
                :exit="imageSwitcherAnimation.exit" :transition="imageSwitcherAnimation.transition"
                v-if="activeFeatureIndex === index" tag="img" :src="image.imageFour" class="w-full h-full object-cover">
              </Motion>
            </template>
          </Presence>
        </div>
      </div>

      <div class="flex items-center flex-col justify-center">
        <SharedScrollProgress :scroll-progress="mouseIndicatorScrollProgress"></SharedScrollProgress>
        <p class="font-gilmer font-semibold text-xs mt-4 leading-none">Scroll Down</p>
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
const mouseIndicatorScrollProgress = ref(1 / featuredFeatures.length)

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

  watch(y, () => {
    if (targetSectionTop.value < 0) {
      const index = Math.floor(Math.abs(targetSectionTop.value) / featureSectionsSizes.value)
      if (index < 1) activeFeatureIndex.value = 0
      if (index > allFeatures.value.length - 1) activeFeatureIndex.value = allFeatures.value.length - 1
      if (index === activeFeatureIndex.value) true
      else activeFeatureIndex.value = index
    }
  })

  watch(activeFeatureIndex, () => {
    mouseIndicatorScrollProgress.value = (activeFeatureIndex.value + 1) / allFeatures.value.length
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