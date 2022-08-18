<template>
  <section id="why-grip-section" class="bg-light pt-24 lg:py-52 relative overflow-y-hidden" ref="targetSection">
    <div class="container grid grid-cols-1 lg:grid-cols-2 gap-x-24">
      <div class="flex flex-col">
        <h2 class="text-primary font-gilmer text-lg lg:text-2xl font-semibold" ref="titleRef">Why Grip? We're the best in Finances
          <span class="drop-shadow-xl">🚀</span>
        </h2>
        <p class="mt-3 lg:mt-11 mb-11 lg:mb-20 text-2xl lg:text-3xl font-title font-bold" ref="mainTextRef">
          Grip seamlessly aggregates all your credit cards, debit cards, bank accounts and fintech wallets into one
          super app and one card, so it's the only card you need to carry and the only pin you need to remember.
        </p>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10 lg:gap-y-20" ref="stepsRef">
          <div class="flex flex-col lg:flex-row items-start space-y-2 lg:space-y-0 lg:space-x-4">
            <img src="/home/icons/profile.svg" alt="Profile Image"/>
            <div class="flex flex-col space-y-2">
              <h3 class="font-gilmer font-semibold">Choose a Plan</h3>
              <p class="text-xs font-title">
                Select a Grip subscription plan that's perfect for you.
              </p>
            </div>
          </div>

          <div class="flex flex-col lg:flex-row items-start space-y-2 lg:space-y-0 lg:space-x-4">
            <img src="/home/icons/slider.svg" alt="Slider Image"/>
            <div class="flex flex-col space-y-2">
              <h3 class="font-gilmer font-semibold">Sign Up</h3>
              <p class="text-xs font-title">
                Register and set up your Grip account.
              </p>
            </div>
          </div>

          <div class="flex flex-col lg:flex-row items-start space-y-2 lg:space-y-0 lg:space-x-4">
            <img src="/home/icons/link.svg" alt="Link Channels"/>
            <div class="flex flex-col space-y-2">
              <h3 class="font-gilmer font-semibold">Link your Cards, Accounts & Wallets</h3>
              <p class="text-xs font-title">
                Aggregate all your cards, bank accounts and fintech wallets in one place.
              </p>
            </div>
          </div>

          <div class="flex flex-col lg:flex-row items-start space-y-2 lg:space-y-0 lg:space-x-4">
            <img src="/home/icons/manage.svg" alt="Manage Channels"/>
            <div class="flex flex-col space-y-2">
              <h3 class="font-gilmer font-semibold">Manage & Pay</h3>
              <p class="text-xs font-title">
                Manage payments and transactions across all your linked channels and pay with one card.
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- IMAGE -->
      <div
        class="relative lg:absolute right-0 translate-y-20 md:translate-y-30 xl:translate-y-20 2xl:-translate-y-36 md:w-[35rem] xl:w-[42.5rem] 2xl:w-auto">
        <img src="/home/why_section_image.png" class="z-[1] relative" alt="">
        <div class="absolute bg-[#078ae636] blur-[70px] left-[45%] right-[6.5%] top-[27.5%] bottom-[9%]"></div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { reasonSectionAnimation } from "@/animations/home"

const targetSection = ref<HTMLElement>(null)

const titleRef = ref<HTMLElement>(null)
const mainTextRef = ref<HTMLElement>(null)
const stepsRef = ref<HTMLElement>(null)

useAnimationTrigger(targetSection, () => reasonSectionAnimation(titleRef, mainTextRef, stepsRef))

</script>