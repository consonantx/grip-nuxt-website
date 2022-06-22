<template>
  <section class="h-[57rem] lg:h-[40rem] xl:h-[50rem] lg:min-h-[30rem] w-full text-white relative overflow-hidden"
    id="hero">
    <h1 class="hidden">You only need one card</h1>
    <div class="container flex flex-col lg:flex-row">
      <div class="relative flex flex-col justify-center">
        <div
          class="text-center lg:text-left text-[120px] lg:text-[220px] xl:text-[310px] uppercase font-title leading-none font-black text-primary transition-colors duration-200 ease-in-out hover:text-secondary">
          <span class="font-title">GRIP</span> <br /> <span class="font-title">CARD</span>
        </div>
        <div
          class="before:absolute before:h-[2px] before:content-[''] before:w-20 lg:before:w-44 before:bg-secondary before:left-0 before:top-1/2 before:-translate-y-1/2 pl-24 lg:pl-48 relative mx-auto lg:ml-0 lg:text-2xl font-title">
          You only need one card</div>
      </div>
      <div
        class="rotate-[15deg] lg:rotate-0 lg:absolute -translate-x-[5%] md:translate-x-[10%] lg:translate-x-[55%] translate-y-[10%] md:translate-y-[5%] lg:-translate-y-16 xl:-translate-y-24 w-[55rem] md:w-[65rem] lg:w-auto 2xl:w-[90rem]">
        <img src="/home/header_image.png" class="object-fill lg:w-10/12 xl:w-11/12" />
      </div>
    </div>

    <!-- HERO FOOTER -->
    <div class="container">
      <div class="flex justify-center lg:justify-end -translate-y-48 md:-translate-y-72 lg:-translate-y-12">
        <div class="flex flex-col items-center">
          <ArrowCircleDownIcon class="w-10 lg:w-14 mb-3 stroke-1"></ArrowCircleDownIcon>
          <p class="font-display text-[10px] leading-none">Scroll Down</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { ArrowCircleDownIcon } from "@heroicons/vue/outline"
</script>