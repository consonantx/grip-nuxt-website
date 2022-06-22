<template>
  <div>
    <Presence>
      <Motion :exit="{ y: '-100%', opacity: '0' }" :transition="{ duration: 0.5, easing: 'ease'}"
        class="fixed flex items-center justify-center inset-0 overflow-hidden bg-[#000000] z-10"
        v-if="shouldShowLoader">
        <LottieAnimation ref="loaderRef" :animation-data="computedAnimationData" :autoplay="true" :loop="true">
        </LottieAnimation>
      </Motion>
    </Presence>
  </div>
</template>

<script lang="ts" setup>
import LottieAnimation from 'lottie-web-vue'
import { Motion, Presence } from "motion/vue"
import { useTimeoutFn } from "@vueuse/core"

import AnimationData from "@/data/loader.json"

const loaderRef = ref(null)
const computedAnimationData = computed(() => AnimationData)
const shouldShowLoader = ref(true)
const { } = useTimeoutFn(() => shouldShowLoader.value = false, 6000)

</script>