<template>
  <section
    class="h-[40rem] xl:h-[52rem] lg:min-h-[30rem] w-full text-white relative overflow-hidden flex flex-col justify-between"
    id="hero" ref="targetSection">
    <LayoutHeader :delay="0.5" class="backdrop-blur-sm"></LayoutHeader>
    <h1 class="hidden">You only need one card</h1>
    <div class="absolute inset-0 bg-overlay z-[3]" ref="sectionCoverRef" v-if="shouldShowCover"></div>
    <div class="absolute inset-0 bg-black opacity-20 z-[1]"></div>
    <div class="absolute inset-0 z-0">
      <video autoplay loop muted playsinline class="w-full h-full object-cover" ref="videoRef">
        <source src="/home/header_video1.mp4" type="video/mp4" />
      </video>
    </div>
    <div class="container lg:pb-10" @click="playHeaderVideo">
      <div class="flex flex-col lg:flex-row relative z-[2] pb-16 lg:pb-0">
        <div class="relative flex flex-col justify-center">
          <div
            class="text-left text-[110px] lg:text-[100px] xl:text-[155px] uppercase font-title inline-block leading-none font-black text-white">
            <div class="font-title overflow-y-hidden relative lg:top-5">
              <div ref="sectionTitleOneRef">GRIP</div>
            </div>
            <div class="font-title overflow-y-hidden relative">
              <div ref="sectionTitleTwoRef">CARD</div>
            </div>
          </div>
          <div class="md:pl-12 lg:pl-20 relative lg:ml-0 lg:text-xl font-title overflow-hidden w-10/12 lg:w-auto">
            <div class="absolute top-1/2 left-0 -translate-y-1/2 h-[2px] bg-secondary w-10 lg:w-16 hidden md:flex"
              ref="subtitleLineRef">
            </div>
            <div ref="subtitleRef">One card and app to supercharge your finances.</div>
          </div>
        </div>
      </div>

      <!-- HERO FOOTER -->
      <div class="relative z-[2] hidden lg:block">
        <div class="flex justify-center lg:justify-end -translate-y-6 md:-translate-y-72 lg:-translate-y-12">
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
const videoRef = ref<HTMLVideoElement>(null)

useTimeoutFn(() => shouldShowCover.value = false, 2000)

useAnimationTrigger(targetSection, () => heroSectionAnimation(sectionTitleOneRef, sectionTitleTwoRef, sectionCoverRef, subtitleLineRef, subtitleRef))

const scrollTo = (elementId: string) => {
  if (document.querySelector(`#${elementId}`)) {
    document.querySelector(`#${elementId}`).scrollIntoView({ behavior: "smooth", block: "start" })
  }
}

const playHeaderVideo = () => {
  if (videoRef.value) {
    return videoRef.value.play()
  }
}

try {
  playHeaderVideo()
} catch (error) {
  console.log('browser does not support autoplay')
}

</script>