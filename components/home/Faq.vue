<template>
  <section id="faqs" class="bg-light pt-24 lg:pt-44 pb-24 relative" ref="targetSection">
    <div class="container flex flex-col text-center lg:text-left lg:grid lg:grid-cols-2">
      <div class="flex flex-col space-y-4 mb-8 lg:mb-0" ref="sectionTitleRef">
        <h1 class="font-title font-black text-3xl">FAQ</h1>
        <p class="font-title lg:text-lg">
          Have some questions? <br />
          We've probably already answered them.
        </p>
      </div>

      <SharedFaq :filter-by-featured="true" :animation-delay="0.8"></SharedFaq>

      <div class="col-span-2 flex justify-end pt-10 lg:pt-20">
        <NuxtLink to="/faq"
          class="rounded-xl border border-black py-4 px-6 font-gilmer text-sm font-semibold capitalize tracking-widest w-full lg:w-max">
          Learn more
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { faqSectionAnimation } from "@/animations/home"

const sectionTitleRef = ref<HTMLElement>(null)
const targetSection = ref<HTMLElement>(null)

useAnimationTrigger(targetSection, () => faqSectionAnimation(sectionTitleRef))
</script>