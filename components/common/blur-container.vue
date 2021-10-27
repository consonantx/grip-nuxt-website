<template>
  <div
    :class="`
      absolute
      ${shouldIncludeBorder ? `border-4 border-opacity-5 border-white` : ``}
      rounded-3xl
      ${shouldIncludeDefaultPadding ? `px-2 py-4 lg:px-3 lg:py-5` : ``}
      bg-opacity-10 bg-white
      backdrop-filter backdrop-blur-md
      flex
      items-center
    `"
  >
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  shouldIncludeBorder: {
    type: Boolean,
    default: true
  },
  shouldIncludeDefaultPadding: {
    type: Boolean,
    default: true
  }
})
</script>