<script lang="ts" setup>
import './assets/scss/main.scss'
</script>

<template>
  <div>
    <Head>
      <Meta property="og:title" name="og:title" content="One Channel, All Payments Everything" />
      <Meta property="og:site_name" name="og:site_name" content="Grip" />
      <Meta property="og:url" name="og:url" content="https://trygrip.co" />
      <Meta
        property="og:description"
        name="og:description"
        content="Consolidate all your existing ways of making payments (bank accounts, debit/credit cards and fintech apps) into a single channel with Grip. The best way to get a Grip of your finances"
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
    <SharedLoader></SharedLoader>
    <NuxtPage />
  </div>
</template>
