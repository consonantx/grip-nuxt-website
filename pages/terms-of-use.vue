<template>
  <div class="bg-white">

    <Head>
      <Title>Terms Of Use | Grip - One Card, All Payments Everything</Title>
      <Meta name="description"
        content="Consolidate all your existing ways of making payments into a single channel with grip. The best way to get a grip of your finances" />
      <Link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
      <Link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
      <Link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
      <Link rel="manifest" href="/favicon/site.webmanifest" />
    </Head>

    <LayoutHeader :is-dark="true"></LayoutHeader>
    <LayoutNavbar></LayoutNavbar>

    <main class="flex flex-col relative">
      <!-- HERO SECTION -->
      <LegalHero :markdown-content="termsOfUseData">
        <template v-slot:title>Terms Of Use</template>
      </LegalHero>
    </main>

    <LayoutFooter></LayoutFooter>
  </div>
</template>

<script lang="ts" setup>
import termsOfUseData from "@/data/legal/termsOfUse"
</script>
