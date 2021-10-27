<template>
  <div class="bg-[#020612]">
    <Head>
      <Meta property="og:title" name="og:title" content="One Channel, All Payments Everything" />
      <Meta property="og:site_name" name="og:site_name" content="Grip" />
      <Meta property="og:url" name="og:url" content="https://trygrip.co" />
      <Meta
        property="og:description"
        name="og:description"
        content="Consolidate all your existing ways of making payments into a single channel with grip. The best way to get a grip of your finances"
      />
      <Meta property="og:type" name="og:type" content="website" />
      <Meta property="og:image" name="og:image" content="https://trygrip.co/og_image.png" />
      <Meta name="image" content="https://trygrip.co/og_image.png" />
      <Meta name="twitter:card" content="summary_large_image" />
      <Meta name="twitter:creator" content="@trygripapp" />
      <Meta name="twitter:title" content="One Channel, All Payments Everything" />
      <Meta
        name="twitter:description"
        content="Consolidate all your existing ways of making payments into a single channel with grip. The best way to get a grip of your finances"
      />
      <Meta name="twitter:image" content="https://trygrip.co/og_image.png" />
    </Head>
    <NuxtPage />
    <layout-nav-menu @close="shouldShowMenu = false" v-if="shouldShowMenu"></layout-nav-menu>
  </div>
</template>

<script lang="ts" setup>
import './assets/css/tailwind.css'
import './assets/scss/main.scss'

const route = useRoute()
const referrer = useState('ref_id', () => route.query?.ref_id)
const shouldShowMenu = useState('shouldShowMenu', () => false)
</script>

<style lang="scss">
.body-bg-circle {
  backdrop-filter: blur(44px);
  height: 107rem;
  width: 107rem;
  position: absolute;
  opacity: 0.45;
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

* {
  scrollbar-color: #d4aa70 #e4e4e4;
  scrollbar-width: thin;
  transition: scrollbar-color 0.3s ease-out;

  &::-webkit-scrollbar {
    width: 20px;
  }

  &::-webkit-scrollbar-track {
    background-color: #e4e4e438;
    border-radius: 100px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 100px;
    border: 5px solid transparent;
    background-clip: content-box;
    background-color: #6d6e75;
  }
}
</style>