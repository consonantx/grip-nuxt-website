<template>
  <section class="bg-white min-h-screen flex items-center relative text-center" id="feature-1">
    <div class="container  relative flex flex-col items-center justify-center space-y-9">
      <div
        class="text-lg text-primary font-gilmer uppercase border-2 border-[#e3e3e3] rounded-full tracking-widest px-6 py-4 leading-none">
        features <span class="drop-shadow-lg ml-2">🚀</span>
      </div>
      <h2 class="font-title text-8xl font-black leading-tight">
        One Channel <br />
        All Payments <br />
        Everything <br />
      </h2>
      <p class="text-gray-400 font-gilmer text-2xl max-w-xl pb-5">
        Think unified transaction records across all your existing payment channels.
      </p>
      <NuxtLink href="#"
        class="border-2 p-6 rounded-xl border-[#e3e3e3] text-black text-xl font-semibold leading-none flex items-center transition duration-200 hover:border-primary hover:border-opacity-40">
        <span>Find Out More</span>
        <ArrowRightIcon class="w-5 text-primary ml-2 -rotate-45"></ArrowRightIcon>
      </NuxtLink>

      <div class="flex">
        <img src="/home/features/pos.png" class="absolute top-1 left-0 w-80" alt="">
        <img src="/home/features/cash_chest_blue.png" class="absolute bottom-1 left-20 w-80" alt="">
        <img src="/home/features/cash_wallet.png" class="absolute top-1 right-0 w-80" alt="">
        <img src="/home/features/online_store.png" class="absolute bottom-1 right-20 w-80" alt="">
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { ArrowRightIcon } from "@heroicons/vue/solid"
</script>