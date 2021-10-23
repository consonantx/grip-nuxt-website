<template>
  <div
    :class="`border-2 border-white
    rounded-xl
    lg:rounded-2xl
    py-1
    lg:py-2
    px-1
    lg:px-2
    flex
    items-center
    justify-center
    ${logoBackground}`"
  >
    <img :src="imageUrl" :alt="imageAlt" :class="imageClass" />
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  imageUrl: String,
  imageAlt: String,
  imageClass: String,
  logoBackground: String,
});
</script>