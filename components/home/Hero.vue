<template>
  <section class="h-[58rem] lg:h-[40rem] xl:h-[45rem] lg:min-h-[30rem] w-full text-white relative overflow-hidden flex flex-col"
    id="hero" ref="targetSection">
    <h1 class="hidden">You only need one card</h1>
    <div class="absolute inset-0 bg-[#000000] z-[1]" ref="sectionCoverRef" v-if="shouldShowCover"></div>
    <div class="container flex flex-col lg:flex-row w-full h-full ">
      <div class="relative flex flex-col justify-end flex-none">
        <div
          class="text-left lg:text-left text-[75px] lg:text-[150px] xl:text-[150px]  font-title leading-none uppercase justify-end font-black text-white">
          <div class="font-title xl:leading-[9rem] overflow-y-hidden relative">
            <div ref="sectionTitleOneRef">Grip</div>
          </div>
          <div class="font-title xl:leading-[10rem] overflow-y-hidden relative">
            <div ref="sectionTitleTwoRef">Card</div>
          </div>
          <!-- <div class="font-title leading-[10rem] overflow-y-hidden relative">
            <div ref="sectionTitleThreeRef">MONEY</div>
          </div> -->
          
        </div>
        <div class=" ml-2 lg:pl-36 xl:pl-36 relative mx-auto md:text-[20px] lg:ml-0  xl:text-[20] font-title overflow-hidden">
          <div class="absolute top-1/2 left- -translate-y-1/2 h-[1px] bg-secondary sm:w-24 w-10 lg:w-12 xl:w-32" ref="subtitleLineRef">
          </div>
          <div class="sm:ml-2" ref="subtitleRef">Unifying your Payments</div>
        </div>
      </div>
      <!-- <div
        class="rotate-[15deg] lg:rotate-0 lg:absolute -translate-x-[5%] md:translate-x-[10%] lg:translate-x-[55%] translate-y-[10%] md:translate-y-[5%] lg:-translate-y-16 xl:-translate-y-24 w-[55rem] md:w-[65rem] lg:w-auto 2xl:w-[90rem]">
         <img src="/home/header_image.png" class="object-fill lg:w-10/12 xl:w-11/12" /> 
        <video class="object-fill lg:w-10/12 xl:w-11/12" autoplay>
  <source src="/home/Card_Splash.mp4" type="video/mp4">

</video>
      </div> -->
      <!-- <div class="flex justify-end flex-grow">
        <div class="h-full w-full">
          <video class="object-fill justify-end" autoplay>
            <source src="/home/Card_Splash.mp4" type="video/mp4">
          </video>
        </div>
      </div>  -->
      <div class="flex flex-auto w-12 ml-7 lg:w-24 lg:min-h-full bg-[#ffffff]">

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