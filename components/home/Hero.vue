<template>
  <section class="h-[58rem] lg:h-[40rem] xl:h-[50rem] lg:min-h-[30rem] w-full text-white relative overflow-hidden"
    id="hero" ref="targetSection">
    <h1 class="hidden">You only need one card</h1>
    <div class="absolute inset-0 bg-overlay z-[1]" ref="sectionCoverRef" v-if="shouldShowCover"></div>
    <div class="container flex flex-col lg:flex-row">
      <div class="relative flex flex-col justify-center">
        <div
          class="text-center lg:text-left text-[85px] lg:text-[150px] xl:text-[190px] uppercase font-title leading-none font-black text-primary transition-colors duration-200 ease-in-out hover:text-secondary">
          <div class="font-title overflow-y-hidden relative">
            <div ref="sectionTitleOneRef">UNIFY</div>
          </div>
          <div class="font-title overflow-y-hidden relative">
            <div ref="sectionTitleTwoRef">YOUR</div>
          </div>
          <div class="font-title overflow-y-hidden relative">
            <div ref="sectionTitleThreeRef">MONEY</div>
          </div>
          
        </div>
        <div class=" pl-24 lg:pl-36 xl:pl-48 relative mx-auto lg:ml-0 text-xl xl:text-2xl font-title overflow-hidden">
          <div class="absolute top-1/2 left-0 -translate-y-1/2 h-[2px] bg-secondary w-20 lg:w-32 xl:w-44" ref="subtitleLineRef">
          </div>
          <div ref="subtitleRef">One card and app to supercharge your finances</div>
        </div>
      </div>
      <div
        class="rotate-[15deg] lg:rotate-0 lg:absolute -translate-x-[5%] md:translate-x-[10%] lg:translate-x-[55%] translate-y-[10%] md:translate-y-[5%] lg:-translate-y-16 xl:-translate-y-24 w-[55rem] md:w-[65rem] lg:w-auto 2xl:w-[90rem]">
        <img src="/home/header_image.png" class="object-fill lg:w-10/12 xl:w-11/12" />
      </div>
    </div>

    <!-- HERO FOOTER -->
    <div class="container">
      <div class="flex justify-center lg:justify-end -translate-y-48 md:-translate-y-72 lg:translate-y-4">
        <button class="flex flex-col items-center" @click="scrollTo('why-grip-section')">
          <ArrowCircleDownIcon class="w-10 lg:w-14 mb-3 stroke-1 animate-bounce duration-1000"></ArrowCircleDownIcon>
          <p class="font-display text-[10px] leading-none">Scroll Down</p>
        </button>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { ArrowCircleDownIcon } from "@heroicons/vue/outline"
import { useTimeoutFn } from "@vueuse/core"

import { heroSectionAnimation } from "@/animations/home"
import { Ref } from "@/interfaces"

const shouldShowCover = ref(true)
const targetSection = ref<HTMLElement>(null)

const sectionTitleOneRef = ref<HTMLElement>(null)
const sectionTitleTwoRef = ref<HTMLElement>(null)
const sectionTitleThreeRef = ref<HTMLElement>(null)
const sectionCoverRef = ref<HTMLElement>(null)
const subtitleLineRef = ref<HTMLElement>(null)
const subtitleRef = ref<HTMLElement>(null)

useTimeoutFn(() => shouldShowCover.value = false, 2000)

useAnimationTrigger(targetSection, () => heroSectionAnimation(sectionTitleOneRef, sectionTitleTwoRef, sectionTitleThreeRef, sectionCoverRef, subtitleLineRef, subtitleRef))

const scrollTo = (elementId: string) => {
  if (document.querySelector(`#${elementId}`)) {
    document.querySelector(`#${elementId}`).scrollIntoView({ behavior: "smooth", block: "start" })
  }
}

</script>