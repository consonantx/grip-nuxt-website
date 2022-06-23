<template>
  <div class="flex flex-col space-y-6 text-center" ref="preFooterRef">
    <h2 class="font-title text-4xl lg:text-6xl font-black text-white">
      <span class="text-secondary font-title">Global Card.</span>
      <br class="lg:hidden" />
      Super App
    </h2>
    <p class="font-gilmer text-base lg:text-xl text-gray-400">
      Enjoy the ultimate unified financial experience <br />
      across all your financial channels with our mobile app and debit card.
    </p>

    <div class="mx-auto flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-4 pt-5">
      <button class="rounded-full py-4 px-8 bg-white flex items-center font-gilmer">
        <img src="/common/icons/google_play.svg" class="mr-2" alt="" srcset="">
        Google Play
      </button>

      <button class="rounded-full py-4 px-8 bg-white flex items-center font-gilmer">
        <img src="/common/icons/apple.svg" class="mr-2" alt="" srcset="">
        App Store
      </button>
    </div>

    <div class="pt-10 md:pt-20 bg-[url('/common/footer/pre_footer_bg.png')] bg-repeat-x bg-bottom relative">
      <img src="/common/footer/pre_footer_phone.png" class="mx-auto" alt="">
      <div class="absolute inset-x-0 bottom-0 top-60 z-[1] bg-gradient-to-b from-transparent to-[#000000]"></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { animate, stagger } from "motion"

const preFooterRef = ref<HTMLElement>(null)

// @ts-ignore
useAnimationTrigger(preFooterRef, () => animate(preFooterRef.value.children, {
  opacity: [0, 1],
  y: [50, 0]
}, {
  delay: stagger(0.25),
  duration: 0.5,
  easing: "ease-out"
}
), { threshold: 0.1 })
</script>