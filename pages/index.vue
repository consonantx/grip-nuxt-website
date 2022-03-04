<template>
  <div>
    <Head>
      <Title>Grip - One Card, All Payments Everything</Title>
      <Meta
        name="description"
        content="Consolidate all your existing ways of making payments into a single channel with grip. The best way to get a grip of your finances"
      />
      <Link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
      <Link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
      <Link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
      <Link rel="manifest" href="/favicon/site.webmanifest" />
    </Head>

    <nav class="py-8 bg-black text-white">
      <div class="container flex flex-row justify-between">
        <div class="flex space-x-8 items-center">
          <img src="/logo.svg" alt="Grip Logo" class="h-10">
          <!-- NAVBAR MENU ITEMS -->
          <ul class="flex flex-row space-x-8">
            <li>
              <NuxtLink to="/">About Us</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/">Features</NuxtLink>
            </li>
          </ul>
        </div>

        <button class="py-3 px-8 text-lg uppercase rounded-full border-2 border-white leading-tight">join waitlist</button>
      </div>
    </nav>

    <main class="flex flex-container relative">

      <!-- HERO SECTION -->
      <section class="h-[57rem] lg:min-h-[55rem] lg:h-[105vh] 2xl:h-screen bg-black w-full text-white relative" id="hero">
        <h1 class="hidden">You only need one card</h1>

        <div class="container text-[210px] font-title leading-snug">
          You only need one Grip card
        </div>
      </section>

    </main>
  </div>
</template>