<template>
  <section class="h-[58rem] lg:h-[43rem] xl:h-[43rem] lg:min-h-[30rem] w-full text-white relative overflow-hidden flex flex-col"
    id="hero" ref="targetSection">
    <h1 class="hidden">You only need one card</h1>
    <div class="absolute inset-0 bg-[#000000] z-[1]" ref="sectionCoverRef" v-if="shouldShowCover"></div>
    <div class="flex justify-around -space-x-5">
        <div class="lg:absolute lg:top-20 lg:left-20 h-36 lg:h-60 xl:h-80 w-22 lg:w-60 xl:w-80">
          <img src="/home/features/naira1.png"  /> 
        </div>
        </div>
    <div class="container flex flex-col lg:flex-row w-full h-full ">
      <div class="relative flex flex-col justify-end flex-none">
        <div
          class="text-left lg:text-left text-[75px] lg:text-[150px] xl:text-[150px]  font-title leading-none uppercase justify-end font-black text-white">
          <div class="font-title xl:leading-[9rem] overflow-y-hidden relative">
            <div ref="sectionTitleOneRef">Grip</div>
          </div>
          <div class="font-title xl:leading-[10rem] overflow-y-hidden relative -top-[9%]">
            <div ref="sectionTitleTwoRef">Card</div>
          </div>
        </div>
        <div class="relative -top-[4%] mx-auto md:text-[20px] lg:ml-0  xl:text-[20] font-title overflow-hidden">
          <div class="absolute top-1/2 left- -translate-y-1/2 h-[1px] bg-secondary sm:w-24 w-10 lg:w-12 xl:w-32" ref="subtitleLineRef">
          </div>
          <div class="xl:ml-36" ref="subtitleRef">Unifying your Payments</div>
        </div>
         <!-- HERO FOOTER -->
    <div class="container">
      <div class=" lg:justify-start -translate-y-48 md:-translate-y-72 lg:translate-y-4">
        <button class="flex flex-col items-center" @click="scrollTo('why-grip-section')">
          <ArrowCircleDownIcon class="w-10 lg:w-14 mb-3 stroke-1 animate-[bounce_6s_ease-out_infinite] duration-5000"></ArrowCircleDownIcon>
          <p class="font-display text-[10px] leading-none">Scroll Down</p>
        </button>
      </div>
    </div>
      </div>
       <div
        class="rotate-[15deg] lg:rotate-0 lg:absolute -translate-x-[5%] md:translate-x-[10%] lg:translate-x-[55%] translate-y-[10%] md:translate-y-[5%] lg:-translate-y-16 xl:-translate-y-24 w-[55rem] md:w-[65rem] lg:w-auto 2xl:w-[90rem]">
         <img src="/home/hero_image.png" class="object-fill lg:w-10/12 xl:w-11/12" /> 
    
      </div>
      <!-- <div class="flex justify-end flex-grow">
        <div class="h-full w-full">
          <video class="object-fill justify-end" autoplay>
            <source src="/home/Web_.mp4" type="video/mp4">
          </video>
        </div>
      </div>  -->
      <!-- <div class="flex flex-auto w-12 ml-7 lg:w-24 lg:min-h-full">
         <img src="/home/hero_image.png" class="object-fill lg:w-10/12 xl:w-11/12" /> 
      </div> -->
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