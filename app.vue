<template>
  <div class="bg-black">
    <NuxtPage />
  </div>
</template>

<script lang="ts" setup>
  import './assets/css/tailwind.css'
  import './assets/scss/main.scss'
</script>

<style lang="scss">
.body-bg-circle {
  backdrop-filter: blur(44px);
  height: 107rem;
  width: 107rem;
  position: absolute;
  opacity: 0.65;
  &--a {
    background: radial-gradient(
      50% 50% at 50% 50%,
      rgba(228, 35, 47, 0.2484) 0%,
      rgba(0, 0, 0, 0) 91.15%
    );
  }

  &--b {
    background: radial-gradient(
      50% 50% at 50% 50%,
      rgba(73, 34, 227, 0.1782) 0%,
      rgba(0, 0, 0, 0) 91.15%
    );
  }
}
</style>