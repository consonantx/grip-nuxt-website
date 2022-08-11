<template>
  <section class="bg-[#000000] py-24 lg:py-32 relative" id="card-designs">
    <div class="container grid lg:grid-cols-2 gap-x-48 content-center justify-items-center">
      <!-- DESIGNED WITH... -->
      <div class="flex flex-col text-white justify-center" ref="cardSectionDescriptionRef">
        <h2 class="text-4xl lg:text-7xl font-title w-min">
          Designed <br />
          With <br />
          <div class="w-min relative overflow-hidden">
            <Presence :exit-before-enter="true">
              <Motion :initial="cardDesignTextSwitcherAnimation.initial"
                :animate="cardDesignTextSwitcherAnimation.animate" :exit="cardDesignTextSwitcherAnimation.exit"
                class="font-black text-secondary font-title" v-if="cardDesignTextSwitcher === 1">Beauty.</Motion>
              <Motion :initial="cardDesignTextSwitcherAnimation.initial"
                :animate="cardDesignTextSwitcherAnimation.animate" :exit="cardDesignTextSwitcherAnimation.exit"
                class="font-black text-secondary font-title" v-else-if="cardDesignTextSwitcher === 2">Purpose.
              </Motion>
              <Motion :initial="cardDesignTextSwitcherAnimation.initial"
                :animate="cardDesignTextSwitcherAnimation.animate" :exit="cardDesignTextSwitcherAnimation.exit"
                class="font-black text-secondary font-title" v-else>Style.</Motion>
            </Presence>
          </div>
        </h2>

        <p class="mt-4 lg:text-lg text-gray-400">The debit card designed for everyday spending, with simplicity and
          transparency
          built right in. Live your
          best life with a card you can brag about.</p>
      </div>

      <!-- CARD SWITCHER -->
      <div class="flex flex-col mt-16 lg:mt-0 w-4/5 lg:w-auto">
        <div
          class="w-full lg:h-[28rem] xl:h-[37.5rem] bg-[url('/home/card_switcher_bg.svg')] bg-contain bg-no-repeat py-4">
          <Presence :exit-before-enter="true">
            <template :key="index" v-for="(design, index) in cardDesigns">
              <Motion tag="img" class="object-contain h-full w-full xl:-translate-y-8 drop-shadow-lg"
                :initial="cardDesignImageSwitcher.initial" :animate="cardDesignImageSwitcher.animate"
                :transition="cardDesignImageSwitcher.transition" :exit="cardDesignImageSwitcher.exit"
                :src="cardDesigns[index]?.frontBackViewUrl || ''" :alt="design.designName" preload="true"
                v-if="currentDesignIndex === index" />
            </template>
          </Presence>
        </div>
        <div class="bg-white p-4 lg:p-6 rounded-2xl flex items-center justify-between">
          <Presence :exit-before-enter="true">
            <template v-for="(design, index) in cardDesigns" :key="index">
              <Motion :initial="cardDesignNameSwitcher.initial" :animate="cardDesignNameSwitcher.animate"
                :transition="cardDesignNameSwitcher.transition" :exit="cardDesignNameSwitcher.exit" tag="p"
                v-if="currentDesignIndex === index" class="font-title font-black text-2xl xl:text-4xl leading-none">
                {{ cardDesigns[index]?.designName || 'Default' }}
              </Motion>
            </template>

          </Presence>
          <div class="flex space-x-6">
            <button
              class="rounded-full border-2 border-hue p-4 xl:p-5 transition duration-200 hover:border-primary hover:border-opacity-50"
              @click="cardSwitcher('<')">
              <ArrowLeftIcon class="w-4 text-primary drop-shadow-md"></ArrowLeftIcon>
            </button>
            <button
              class="rounded-full border-2 border-hue p-4 xl:p-5 transition duration-200 hover:border-primary hover:border-opacity-50"
              @click="cardSwitcher('>')">
              <ArrowRightIcon class="w-4 text-primary drop-shadow-md"></ArrowRightIcon>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/vue/solid"
import { Motion, Presence } from "motion/vue"

import { cardSectionAnimation } from "@/animations/home"
import { InternalCardDesigns } from "@/interfaces/cardDesigns"
const cardDesignTextSwitcher = ref(1)
const cardSectionDescriptionRef = ref<HTMLElement>(null)

setInterval(() => {
  if (cardDesignTextSwitcher.value < 3) {
    cardDesignTextSwitcher.value++
  } else {
    cardDesignTextSwitcher.value = 1
  }
}, 5000)

const cardDesignTextSwitcherAnimation = computed(() => ({
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
  }
}))

const cardDesignImageSwitcher = computed(() => ({
  initial: {
    opacity: 0,
    scale: 0.2
  },
  animate: {
    opacity: 1,
    scale: 1
  },
  exit: {
    opacity: 0,
    scale: 0.1
  },
  transition: {
    duration: 0.35,
    ease: "easeInOut",
  }
}))

const cardDesignNameSwitcher = computed(() => ({
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
    duration: 0.35,
    ease: "easeInOut"
  }
}))

const { data: cardDesigns } = await useLazyFetch("/api/designs", {
  default: () => [
    {
      designName: "Default",
      frontBackViewUrl: "/home/card_default_front.svg",
      backgroundHexColor: "#F5F5F5",

    },
  ]
})

const currentDesignIndex = ref(0)

const cardSwitcher = (operation: "<" | ">") => {
  switch (operation) {
    case "<":
      if (currentDesignIndex.value > 0) {
        currentDesignIndex.value--
      } else {
        currentDesignIndex.value = (cardDesigns.value as InternalCardDesigns).length - 1
      }
      break
    case ">":
      if (currentDesignIndex.value < (cardDesigns.value as InternalCardDesigns).length - 1) {
        currentDesignIndex.value++
      } else {
        currentDesignIndex.value = 0
      }
      break
    default:
      break
  }
}

// image preloader
const preloadDesignImages = () => {
  for (const design of cardDesigns.value as InternalCardDesigns) {
    const img = new Image()
    img.src = design.frontBackViewUrl
  }
}

preloadDesignImages()

useAnimationTrigger(cardSectionDescriptionRef, () => cardSectionAnimation(cardSectionDescriptionRef))
</script>