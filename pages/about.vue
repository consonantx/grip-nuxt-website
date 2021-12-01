<template>
  <div class="h-screen w-screen bg-[#020612] overflow-hidden text-white relative flex flex-col">
    <Head>
      <Title>Grip - What We're Building!</Title>
      <Meta
        name="description"
        content="Grip is coming soon and we can't wait to get you on our app! Join the waitlist today!"
      />
      <Link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
      <Link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
      <Link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
      <Link rel="manifest" href="/favicon/site.webmanifest" />
    </Head>
    <layout-navbar class="relative z-10"></layout-navbar>

    <main
      class="container justify-between lg:pt-10 relative grid grid-cols-1 gap-y-36 z-10 overflow-y-auto px-8 lg:px-0 text-left"
    >
      <section
        id="what-are-we-building"
        class="w-full grid grid-cols-1 gap-y-11 text-left"
        v-motion
        :initial="contentMotion.initial"
        :visible="contentMotion.enter"
      >
        <h1
          class="w-2/3 lg:w-1/3 text-4xl lg:text-5xl xl:text-6xl max-w-[34rem] leading-relaxed mr-auto lg:mx-0"
        >What we are building</h1>
        <p class="whitespace-pre-line lg:w-11/12 leading-loose text-lg flex">
          Think what Netflix is to TV and Spotify to music but make it for your finances.
          <br />
          <br />On average, 9 in every 20 individuals in the Global banked population have one (or more) cards with them at every moment.
          Having too many cards and digital wallets is a side effect of a heavily fragmented financial ecosystem.
          <br />
          <br />Grip connects it.
          <br />
          <br />By consolidating all your debit cards, credit cards and digital wallets into a single channel, Grip will be the only card you’d ever need to carry around and the only pin you’d ever need to remember!
        </p>
      </section>

      <section
        id="one-channel"
        class="flex flex-col lg:flex-row items-center lg:space-x-[12rem] w-full"
      >
        <div
          class="w-2/3 lg:w-1/2"
          v-motion
          :initial="contentMotion.initial"
          :visible="contentMotion.enter"
        >
          <img src="/about/channel.png" alt="One Channel For All Your Payments" />
        </div>
        <div
          class="lg:w-2/3 grid grid-cols-1 gap-y-6 lg:mx-0 mt-10 lg:mt-0"
          v-motion
          :initial="contentMotion.initial"
          :visible="contentMotion.enter"
        >
          <h2
            class="text-3xl lg:text-4xl xl:text-5xl lg:max-w-[32rem] leading-normal"
          >One Channel, All Payments Everything</h2>
          <p
            class="whitespace-pre-line w-full leading-loose text-lg"
          >Grip would be your access to a world of transformed finances. Think unified transaction records across all your existing payment channels, better budget and expense tracking, and all the added benefits that come with having a single channel across your financial world!</p>
        </div>
      </section>

      <section id="fallback" class="flex flex-col gap-y-11">
        <div
          class="text-center"
          v-motion
          :initial="contentMotion.initial"
          :visible="contentMotion.enter"
        >
          <h2
            class="text-2xl md:text-3xl lg:text-5xl max-w-[64rem] leading-normal mx-auto"
          >Did someone say, Declined? With fallback we've got you covered</h2>
        </div>
        <div class="flex flex-col lg:flex-row w-full m-0 lg:space-x-[12rem] items-center">
          <div
            class="w-2/3 lg:w-1/2"
            v-motion
            :initial="contentMotion.initial"
            :visible="contentMotion.enter"
          >
            <img src="/about/fallback.png" alt="Fallback Cards" />
          </div>
          <div
            class="lg:w-2/3 mt-10 lg:mt-0"
            v-motion
            :initial="contentMotion.initial"
            :visible="contentMotion.enter"
          >
            <p
              class="whitespace-pre-line w-full leading-loose text-lg"
            >Night out with friends? Your financial service provider isn’t having a particularly good day and your card declines? With Grip Fallback we switch through your cards on our end so you don’t have to. You tell us which cards to fall back to and when your primary fails, we try to charge those instead, effectively eliminating awkward moments</p>
          </div>
        </div>
      </section>

      <section
        id="unlimited-fx"
        class="flex flex-col-reverse lg:flex-row lg:space-x-[12rem] items-center w-full"
      >
        <div
          class="lg:w-2/3 grid grid-cols-1 gap-y-6"
          v-motion
          :initial="contentMotion.initial"
          :visible="contentMotion.enter"
        >
          <h2
            class="text-3xl lg:text-4xl xl:text-5xl max-w-[32rem] leading-normal"
          >Access to unlimited FX</h2>
          <p
            class="whitespace-pre-line w-full leading-loose text-lg"
          >Bank FX restrictions boggling you down? We’ve been there too. With your Grip card, you get unlimited access to FX and all you have to do is link your existing cards. Literally, that’s all it takes. Pay across online stores and in over 200+ countries without ever worrying about restrictions.</p>
        </div>
        <div
          class="w-2/3 lg:w-1/2"
          v-motion
          :initial="contentMotion.initial"
          :visible="contentMotion.enter"
        >
          <img src="/about/fx.png" alt="Unlimited FX" />
        </div>
      </section>

      <section
        id="special-card"
        class="flex flex-col lg:flex-row lg:space-x-[12rem] w-full items-center"
      >
        <div
          class="lg:w-1/2"
          v-motion
          :initial="contentMotion.initial"
          :visible="contentMotion.enter"
        >
          <img src="/about/card.png" alt="Unique Card Design" />
        </div>
        <div
          class="lg:w-2/3 grid grid-cols-1 gap-y-6 mt-10 lg:mt-0"
          v-motion
          :initial="contentMotion.initial"
          :visible="contentMotion.enter"
        >
          <h2
            class="text-3xl lg:text-4xl xl:text-5xl max-w-[32rem] leading-normal"
          >You've never seen a card like this!</h2>
          <p
            class="whitespace-pre-line w-full leading-loose text-lg"
          >Our Grip cards are uniquely crafted for all people, and we have a variety of different cards across our entire offering range to appeal to each individual's unique taste. We’re all different in our own little ways, be different with your Grip card.</p>
        </div>
      </section>

      <section
        id="theres-more"
        class="rounded-3xl bg-primary py-12 lg:py-20 px-10 lg:px-16 w-full flex flex-col lg:flex-row h-auto relative mb-24"
        v-motion
        :initial="contentMotion.initial"
        :visible="contentMotion.enter"
      >
        <div class="class grid grid-col gap-y-10">
          <div class="flex flex-col lg:space-y-4 justify-center lg:justify-start">
            <h2 class="text-3xl lg:text-5xl xl:text-6xl font-extrabold max-w-[32rem] mx-auto lg:mx-0">There's a</h2>
            <h2 class="text-3xl lg:text-5xl xl:text-6xl font-extrabold max-w-[32rem] mx-auto lg:mx-0">
              <span class="font-extrabold font-display">lot</span>
              <span class="font-extrabold text-black bg-secondary rounded-full px-4 py-1 font-display ml-2 lg:ml-4">More</span>
            </h2>
          </div>

          <p class="leading-normal text-lg lg:text-xl xl:text-2xl max-w-[40rem]">
            There’s a lot more we’d like to share with you, but where’s the fun in knowing everything now? 😉
            If we’ve piqued your interest, let us know by getting on the waitlist and we’d let you know as soon as we launch.
          </p>
          <nuxt-link
            to="/join"
            class="py-5 lg:py-6 px-12 lg:px-14 bg-white text-black rounded-xl lg:rounded-2xl text-base lg:text-lg w-max ml-auto mr-auto lg:mr-auto lg:ml-0 leading-none font-bold"
          >Sign me up!</nuxt-link>
        </div>
        <div
          class="relative lg:absolute lg:pr-10 overflow-hidden -bottom-12 lg:bottom-0 lg:right-10 lg:mt-0"
        >
          <img
            src="/about/phone.png"
            alt="App Screen"
            class="lg:px-0 w-[90%] lg:w-auto max-w-[25rem] mx-auto"
          />
        </div>
      </section>
    </main>

    <div
      class="container absolute w-screen h-screen top-0 z-0 left-1/2 -translate-x-1/2 hidden lg:flex"
    >
      <div class="body-bg-circle body-bg-circle--a -top-1/4 -right-1/4"></div>
      <div class="body-bg-circle body-bg-circle--b -bottom-3/4 -left-1/2"></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Variant } from '@vueuse/motion'
import { Ref } from 'vue'

const contentMotion: Ref<Record<string, Variant>> = ref({
  initial: {
    y: 40,
    opacity: 0
  },
  enter: {
    y: 0,
    opacity: 1,
    transition: {
      type: [0.64, 0.04, 0.35, 1],
      y: {
        duration: 710,
        delay: 200
      },
      opacity: {
        duration: 710,
        delay: 200
      }
    }
  }
})
</script>
