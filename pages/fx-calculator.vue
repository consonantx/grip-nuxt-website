<template>
  <div class="bg-light">

    <Head>
      <Title>FX Calculator | Grip - One Card, All Payments Everything</Title>
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
      <section class="py-10 relative" id="hero">
        <div class="container flex flex-col-reverse lg:grid grid-cols-2 gap-x-32 items-center">
          <div class="flex flex-col space-y-6 mt-16 lg:mt-0 text-center lg:text-left">
            <h1 class="font-title font-black text-3xl lg:text-5xl xl:text-6xl">We Give Your Finances Superpowers </h1>
            <p class="font-gilmer lg:text-xl">We take all your debit cards, credit cards, fintech wallets and bank
              accounts and mash 'em all up into one Global Card and one Super App.
              Think what Netflix is to movies and Spotify to music but make it your finances. With superb exchanges
              rates, expense insight across all linked channels
              and custom features you woulfiredn't be able to see any where else, Grip will be the only card you'll every
              need to carry around and we're here for it! 🚀</p>
          </div>

          <div class="h-96 lg:h-[500px]"><img src="/about/hero.png" class="object- h-full" alt="" srcset="" /></div>
        </div>
      </section>

      <section class="py-60 bg-white relative">
        <div class="container flex flex-col">
          <div class=""></div>
        </div>
      </section>
    </main>

    <LayoutFooter></LayoutFooter>
  </div>
</template>

<script lang="ts" setup>

</script>