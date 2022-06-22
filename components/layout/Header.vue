<template>
  <nav class="py-16 bg-transparent text-white">
    <div class="container flex flex-row justify-center">
      <div class="flex space-x-8 items-center">
        <img src="/logo-dark.svg" alt="Grip Logo" class="h-10" v-if="props.isDark">
        <img src="/logo.svg" alt="Grip Logo" class="h-10">
      </div>
    </div>
  </nav>
</template>

<script lang="ts" setup>
const props = defineProps<{
  isDark?: boolean
}>()
</script>