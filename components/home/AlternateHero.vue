<template>
  <section class="h-[57rem] lg:h-[40rem] xl:h-[50rem] lg:min-h-[30rem] w-full text-white relative overflow-hidden flex flex-col justify-between"
    id="hero" ref="targetSection">
    <LayoutHeader :delay="0.8" class="backdrop-blur-sm"></LayoutHeader>
    <h1 class="hidden">You only need one card</h1>
    <div class="absolute inset-0 bg-overlay z-[3]" ref="sectionCoverRef" v-if="shouldShowCover"></div>
    <div class="absolute inset-0 bg-black opacity-20 z-[1]"></div>
    <div class="absolute inset-0 z-0">
      <video playslinline autoplay loop muted class="w-full h-full object-cover">
        <source src="/home/header_video.mp4" type="video/mp4" />
      </video>
    </div>
    <div class="container">
      <div class="flex flex-col lg:flex-row relative z-[2] pb-40 md:pb-0">
      <div class="relative flex flex-col justify-center">
        <div
          class="text-center lg:text-left text-[80px] lg:text-[100px] xl:text-[155px] uppercase font-title leading-none font-black text-white transition-colors duration-200 ease-in-out hover:text-secondary">
          <div class="font-title overflow-y-hidden relative">
            <div ref="sectionTitleOneRef">GRIP</div>
          </div>
          <div class="font-title overflow-y-hidden relative">
            <div ref="sectionTitleTwoRef">CARD</div>
          </div>
        </div>
        <div class=" pl-20 lg:pl-36 relative mx-auto lg:ml-0 lg:text-xl font-title overflow-hidden">
          <div class="absolute top-1/2 left-0 -translate-y-1/2 h-[2px] bg-secondary w-16 lg:w-32" ref="subtitleLineRef">
          </div>
          <div ref="subtitleRef">One card and app to supercharge your finances</div>
        </div>
      </div>
    </div>

    <!-- HERO FOOTER -->
    <div class="relative z-[2]">
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
import { useTimeoutFn } from "@vueuse/core"

import { heroSectionAnimation } from "@/animations/home"
import { Ref } from "@/interfaces"

const shouldShowCover = ref(true)
const targetSection = ref<HTMLElement>(null)

const sectionTitleOneRef = ref<HTMLElement>(null)
const sectionTitleTwoRef = ref<HTMLElement>(null)
const sectionCoverRef = ref<HTMLElement>(null)
const subtitleLineRef = ref<HTMLElement>(null)
const subtitleRef = ref<HTMLElement>(null)

useTimeoutFn(() => shouldShowCover.value = false, 2000)

useAnimationTrigger(targetSection, () => heroSectionAnimation(sectionTitleOneRef, sectionTitleTwoRef, sectionCoverRef, subtitleLineRef, subtitleRef))

const scrollTo = (elementId: string) => {
  if (document.querySelector(`#${elementId}`)) {
    document.querySelector(`#${elementId}`).scrollIntoView({ behavior: "smooth", block: "start" })
  }
}

</script>