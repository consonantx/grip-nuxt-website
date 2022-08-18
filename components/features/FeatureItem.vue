<template>
  <section id="why-grip-section" :class="['py-16 relative overflow-y-hidden', isInverse ? 'bg-light' : '']"
    ref="targetSection">
    <div
      :class="['container flex flex-col items-center gap-x-20 text-center md:text-left',  props.isInverse ? 'md:flex-row-reverse' : 'md:flex-row']">
      <!-- IMAGE -->
      <div class="relative w-2/3 max-w-[30rem] md:w-auto mb-5 lg:mb-0">
        <img :src="props.imageUrl" class="z-[1] relative object-contain" alt="">
      </div>

      <div class="flex flex-col">
        <h3 class="mt-3 lg:mt-11 mb-5 text-2xl lg:text-5xl font-title font-bold capitalize" ref="titleRef">
          {{ props.title }}
        </h3>

        <p class="text-gray-400" ref="mainTextRef">
          <slot></slot>
        </p>

        <div class="mt-10 w-max mx-auto md:mr-auto md:ml-0">
          <NuxtLink :href="props.action" v-if="props.action"
            class="border-2 py-4 px-6 rounded-xl border-[#e3e3e3] text-black lg:text-lg font-semibold leading-none flex items-center transition duration-200 hover:border-primary hover:border-opacity-40">
            <span class="font-gilmer">Learn More</span>
            <ArrowRightIcon class="w-5 text-primary ml-2 -rotate-45"></ArrowRightIcon>
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { ArrowRightIcon } from "@heroicons/vue/solid"

import { reasonSectionAnimation } from "@/animations/home"

const props = defineProps<{
  isInverse?: boolean,
  title: string,
  imageUrl: string,
  action?: string
}>()

const targetSection = ref<HTMLElement>(null)

const titleRef = ref<HTMLElement>(null)
const mainTextRef = ref<HTMLElement>(null)
const stepsRef = ref<HTMLElement>(null)

useAnimationTrigger(targetSection, () => reasonSectionAnimation(titleRef, mainTextRef, stepsRef))

</script>