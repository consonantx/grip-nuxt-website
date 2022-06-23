<template>
  <section id="faqs" class="bg-white pb-24 relative" ref="targetSection">
    <div class="container flex flex-col text-center">
      <div class="flex flex-col space-y-4 mb-10" ref="sectionTitleRef">
        <h2 class="font-title font-black text-3xl">FAQ</h2>
        <p class="font-title lg:text-lg">
          Have some questions? We've probably already answered them.
        </p>
      </div>

      <SharedFaq :animation-delay="0.8"></SharedFaq>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { faqSectionAnimation } from "@/animations/home"

const sectionTitleRef = ref<HTMLElement>(null)
const targetSection = ref<HTMLElement>(null)

useAnimationTrigger(targetSection, () => faqSectionAnimation(sectionTitleRef))
</script>