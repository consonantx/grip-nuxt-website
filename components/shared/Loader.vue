<template>
  <div>
    <Presence>
      <Motion :exit="{ y: '-2000%' }" :transition="{ duration: 0.75, easing: 'ease'}"
        class="fixed flex items-center justify-center inset-0 overflow-hidden bg-[#000000] z-20"
        v-if="shouldShowLoader">
        <div class="w-24 lg:w-40 h-24 lg:h-40">
          <ClientOnly>
            <Vue3Lottie ref="loaderRef" :animation-data="computedAnimationData" :autoplay="true" :loop="true" />
          </ClientOnly>
        </div>
      </Motion>
    </Presence>
  </div>
</template>

<script lang="ts" setup>
import { Vue3Lottie } from "vue3-lottie"
import { Motion, Presence } from "motion/vue"
import { useTimeoutFn } from "@vueuse/core"

import AnimationData from "@/data/loader.json"

const emit = defineEmits(['isCompleted'])

const loaderRef = ref(null)
const computedAnimationData = computed(() => AnimationData)
const shouldShowLoader = ref(true)
const { } = useTimeoutFn(() => {
  shouldShowLoader.value = false
  emit("isCompleted")
}, 5000)
</script>