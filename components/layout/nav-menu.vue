
<template>
  <div
    class="fixed bg-black bg-opacity-40 lg:bg-opacity-70 inset-0 z-50 flex p-6 pt-32 items-start justify-end menu-wrapper"
    v-motion
    :initial="containerMotion.initial"
    :enter="containerMotion.enter"
    :leave="containerMotion.initial"
  >


  </div>
</template>

<script lang="ts" setup>
import { Variant } from '@vueuse/motion'
import { Ref } from 'vue'

const emit = defineEmits<{
  (e: 'close'): void
}>()

onMounted(() => {
  window.addEventListener('click', (event: MouseEvent) => {
    if (
      (event.target as HTMLDivElement)?.offsetParent === document.body ||
      (event.target as HTMLDivElement)?.classList?.contains('menu-wrapper')
    ) {
      emit('close')
    } else {
      return
    }
  })

  window.addEventListener('touchend', (event: TouchEvent) => {
    if (
      (event.target as HTMLDivElement)?.offsetParent === document.body ||
      (event.target as HTMLDivElement)?.classList?.contains('menu-wrapper')
    ) {
      emit('close')
    } else {
      return
    }
  })
})

const containerMotion: Ref<Record<string, Variant>> = ref({
  enter: {
    opacity: 1,
    scale: 1,
    transition: {
      scale: {
        duration: 250
      },
      opacity: {
        duration: 250
      }
    }
  },
  initial: {
    opacity: 0,
    scale: 0.7,
  }
})

const menuMotion: Ref<Record<string, Variant>> = ref({
  enter: {
    y: 0,
    opacity: 1,
    transition: {
      y: {
        duration: 750,
        delay: 250
      },
      opacity: {
        duration: 750,
        delay: 250
      }
    }
  },
  initial: {
    opacity: 0,
    y: -100,
  }
})
</script>