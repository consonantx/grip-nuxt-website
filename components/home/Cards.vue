<template>
  <section class="bg-[#000000] py-24 lg:py-44 relative" id="card-designs">
    <div class="container grid lg:grid-cols-2 gap-x-48 content-center justify-items-center">
      <!-- DESIGNED WITH... -->
      <div class="flex flex-col text-white justify-center">
        <h2 class="text-4xl lg:text-7xl font-title w-min">
          Designed <br />
          With <br />
          <div class="w-min relative overflow-hidden">
            <Presence :exit-before-enter="true">
              <Motion :initial="cardDesignTextSwitcherAnimation.initial"
                :animate="cardDesignTextSwitcherAnimation.animate" :exit="cardDesignTextSwitcherAnimation.exit"
                class="font-black text-secondary font-title" v-if="cardDesignTextSwitcher === 1">Beauty.</Motion>
              <Motion :initial="cardDesignTextSwitcherAnimation.initial"
                :animate="cardDesignTextSwitcherAnimation.animate" :exit="cardDesignTextSwitcherAnimation.exit"
                class="font-black text-secondary font-title" v-else-if="cardDesignTextSwitcher === 2">Purpose.
              </Motion>
              <Motion :initial="cardDesignTextSwitcherAnimation.initial"
                :animate="cardDesignTextSwitcherAnimation.animate" :exit="cardDesignTextSwitcherAnimation.exit"
                class="font-black text-secondary font-title" v-else>Style.</Motion>
            </Presence>
          </div>
        </h2>

        <p class="mt-4 lg:text-lg text-gray-400">The debit card designed for everyday spending, with simplicity and
          transparency
          built right in. Live your
          best life with a card you can brag about.</p>
      </div>

      <!-- CARD SWITCHER -->
      <div class="flex flex-col mt-16 lg:mt-0 w-4/5 lg:w-auto">
        <div
          class="w-full lg:h-[28rem] xl:h-[37.5rem] bg-[url('/home/card_switcher_bg.svg')] bg-contain bg-no-repeat py-4">
          <img class="object-contain h-full w-full xl:-translate-y-8 drop-shadow-lg"
            src="https://res.cloudinary.com/consonantafrica/image/upload/v1651346398/Grip/CardArts/Basic/Shuta%20Bug/shutabag_Full_xnwq3w.png"
            alt="">
        </div>
        <div class="bg-white p-4 lg:p-6 rounded-2xl flex items-center justify-between">
          <p class="font-title font-black text-2xl xl:text-4xl leading-none">Jet Black</p>
          <div class="flex space-x-6">
            <button
              class="rounded-full border-2 border-hue p-4 xl:p-5 transition duration-200 hover:border-primary hover:border-opacity-50">
              <ArrowLeftIcon class="w-4 text-primary drop-shadow-md"></ArrowLeftIcon>
            </button>
            <button
              class="rounded-full border-2 border-hue p-4 xl:p-5 transition duration-200 hover:border-primary hover:border-opacity-50">
              <ArrowRightIcon class="w-4 text-primary drop-shadow-md"></ArrowRightIcon>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/vue/solid"
import { Motion, Presence } from "motion/vue"

const cardDesignTextSwitcher = ref(1)

setInterval(() => {
  if (cardDesignTextSwitcher.value < 3) {
    cardDesignTextSwitcher.value++
  } else {
    cardDesignTextSwitcher.value = 1
  }
}, 3000)

const cardDesignTextSwitcherAnimation = computed(() => ({
  initial: {
    opacity: 0,
    transform: "translateY(100%)",
  },
  animate: {
    opacity: 1,
    transform: "translateY(0)",
  },
  exit: {
    opacity: 0,
    transform: "translateY(-100%)",
  }
}))
</script>