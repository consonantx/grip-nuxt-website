
<template>
  <div
    class="fixed bg-black bg-opacity-40 lg:bg-opacity-70 inset-0 z-30 flex p-6 items-end lg:items-center share-wrapper"
    v-motion
    :initial="containerMotion.initial"
    :enter="containerMotion.enter"
    :leave="containerMotion.initial"
  >
    <div
      class="bg-black rounded-3xl p-8 w-full lg:w-1/2 grid grid-cols-1 gap-y-6 mx-auto lg:border lg:border-secondary shadow-lg"
      v-motion
      :initial="bottomSheetMotion.initial"
      :enter="bottomSheetMotion.enter"
      :leave="bottomSheetMotion.initial"
    >
      <!-- Twitter -->
      <div class="flex space-x-5 items-center cursor-pointer" @click="share('twitter')">
        <div class="bg-[#b9e0f3] rounded-2xl p-5 w-max">
          <img src="/common/icons/twitter.svg" class="h-8 w-8" alt="Twitter Logo" />
        </div>
        <p class="text-xl lg:text-2xl">Twitter</p>
      </div>
      <!-- Facebook -->
      <div class="flex space-x-5 items-center cursor-pointer" @click="share('facebook')">
        <div class="bg-[#bbe0fc] rounded-2xl p-5 w-max">
          <img src="/common/icons/facebook.svg" class="h-8 w-8" alt="Twitter Logo" />
        </div>
        <p class="text-xl lg:text-2xl">Facebook</p>
      </div>
      <!-- Others -->
      <div class="flex space-x-5 items-center cursor-pointer" @click="share('other')">
        <div class="bg-[#bbe0fc] rounded-2xl p-5 w-max">
          <img src="/common/icons/rocket.svg" class="h-8 w-8" alt="Twitter Logo" />
        </div>
        <p class="text-xl lg:text-2xl">Others</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Variant } from '@vueuse/motion'
import { Ref } from 'vue'
import { useToast } from "vue-toastification"

const emit = defineEmits<{
  (e: 'close'): void
}>()

const props = defineProps<{
  referralUrl: string
}>()

onMounted(() => {
  window.addEventListener('click', (event: MouseEvent) => {
    if (
      (event.target as HTMLDivElement)?.offsetParent === document.body ||
      (event.target as HTMLDivElement)?.classList?.contains('share-wrapper')
    ) {
      emit('close')
    } else {
      return
    }
  })

  window.addEventListener('touchend', (event: TouchEvent) => {
    if (
      (event.target as HTMLDivElement)?.offsetParent === document.body ||
      (event.target as HTMLDivElement)?.classList?.contains('share-wrapper')
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

const bottomSheetMotion: Ref<Record<string, Variant>> = ref({
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
    y: 100,
  }
})

const toast = useToast()

const share = async (shareChannel: 'twitter' | 'facebook' | 'other') => {
  switch (shareChannel) {
    case "facebook":
      window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURI(props.referralUrl)}`, '__blank')
      toast.success(`You've shared your referral link on facebook!`)
      emit('close')
      break;
    case "twitter":
      window.open(`https://twitter.com/intent/tweet?url=${encodeURI(props.referralUrl)}&via=trygripapp&text=I%20just%20joined%20the%20waitlist%20for%20Grip%21%20Managing%20all%my%20finances%20from%20a%20single%20channel%20has%20never%20been%20easier%21`, '__blank')
      toast.success(`You've shared your referral link on twitter!`)
      emit('close');
      break;
    case "other":
      //@ts-ignore
      if (navigator?.canShare) {
        await navigator.share({
          title: 'Grip! 💳',
          text: `Join the grip waitlist now! Grip is your single channel to all things payments, join the waitlist now and we'd let you know once you can use it!`,
          url: props.referralUrl
        })
        toast.success('Shared successfully!')
        emit('close')
      } else {
        await navigator?.clipboard?.writeText(props.referralUrl)
        toast.success('Url copied to clipboard!')
      }
      break;
    default:
      break;
  }
}
</script>