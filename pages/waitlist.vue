<template>
  <div
    class="max-h-screen max-w-screen bg-abstract lg:bg-none bg-no-repeat bg-cover lg:bg-black overflow-hidden text-white relative flex flex-col"
  >
    <Head>
      <Title>Grip - You're On The Waitlist!</Title>
      <Meta name="description" content="Check youur status on the waitlist!" />
      <Link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
      <Link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
      <Link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
      <Link rel="manifest" href="/favicon/site.webmanifest" />
    </Head>
    <layout-navbar class="relative z-10"></layout-navbar>

    <main class="flex container mt-0 relative z-10 overflow-y-auto h-screen">
      <!-- Page Content -->
      <div
        class="flex flex-col mt-10 lg:px-20 py-14 bg-transparent lg:bg-abstract rounded-[50px] mx-auto lg:bg-no-repeat lg:bg-cover items-center justify-center relative space-y-16 min-h-[40rem] lg:min-h-[60rem] mb-16"
      >
        <common-blur-container
          :should-include-border="false"
          :should-include-default-padding="false"
          class="px-4 pt-20 mt-10 pb-7 text-white relative text-center rounded-[50px]"
        >
          <h1 class="hidden">You're on the waitlist!</h1>
          <div class="flex flex-col space-y-9">
            <div class="w-52 h-28 relative mx-auto -mt-28 -mb-9">
              <img src="/common/icons/card_lg.png" class="object-cover w-full h-full" />
            </div>
            <h2 class="text-4xl lg:text-6xl font-light">
              You're
              <br />currently
            </h2>
            <h3
              class="p-14 md:p-16 lg:p-20 rounded-[50px] bg-secondary text-black text-6xl lg:text-7xl"
            >#123</h3>
            <p class="text-2xl lg:text-3xl font-display">On the waitlist</p>
          </div>
        </common-blur-container>
        <button
          class="bg-black rounded-2xl w-full py-6 lg:py-9 lg:text-2xl text-white leading-none mb-0"
          @click="shouldShowShareSheet = !shouldShowShareSheet"
        >Share with Friends</button>
      </div>
    </main>

    <div
      class="container absolute w-screen h-screen top-0 z-0 left-1/2 -translate-x-1/2 hidden lg:flex"
    >
      <div class="body-bg-circle body-bg-circle--a -top-1/4 -right-1/4"></div>
      <div class="body-bg-circle body-bg-circle--b -bottom-3/4 -left-1/2"></div>
    </div>

    <waitlist-share-sheet
      referral-url="https://trygrip.co?referrer=qwertyuiop"
      @close="shouldShowShareSheet = !shouldShowShareSheet"
      v-if="shouldShowShareSheet"
    ></waitlist-share-sheet>
  </div>
</template>

<script lang="ts" setup>
const shouldShowShareSheet = ref(false)
</script>