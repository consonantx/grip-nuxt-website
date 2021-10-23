<template>
  <div class="bg-black">
    <Head>
      <Meta property="og:title" content="One Channel, All Payments Everything" />
      <Meta property="og:site_name" content="Grip" />
      <Meta property="og:url" content="https://trygrip.co" />
      <Meta property="og:description" content="Consolidate all your existing ways of making payments into a single channel with grip. The best way to get a grip of your finances" />
      <Meta property="og:type" content="website" />
      <Meta property="og:image" content="https://trygrip.co/og_image.png" />
      <Meta name="image" content="https://trygrip.co/og_image.png" />
      <Meta name="twitter:card" content="summary_large_image" />
      <Meta name="twitter:creator" content="@trygripapp" />
      <Meta name="twitter:title" content="One Channel, All Payments Everything" />
      <Meta name="twitter:description" content="Consolidate all your existing ways of making payments into a single channel with grip. The best way to get a grip of your finances" />
      <Meta name="twitter:image" content="https://trygrip.co/og_image.png" />
    </Head>
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
  opacity: 0.75;
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