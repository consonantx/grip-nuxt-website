<template>
  <div class="h-screen w-screen bg-black overflow-hidden text-white">
    <Head>
      <Title>Grip - One Channel, All Payments Everything</Title>
      <Meta name="description" content="Consolidate all your existing ways of making payments into a single channel with grip. The best way to get a grip of your finances" />
      <Link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicon/apple-touch-icon.png"
      />
      <Link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon/favicon-32x32.png"
      />
      <Link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon/favicon-16x16.png"
      />
      <Link rel="manifest" href="/site.webmanifest" />
    </Head>
    <layout-navbar></layout-navbar>

    <main
      class="flex container justify-between mt-0 lg:mt-10 flex-col lg:flex-row"
    >
      <!-- Header Content -->
      <div class="flex flex-col gap-y-16 mt-10">
        <h1 class="hidden">You only need one grip card</h1>
        <!-- Header Text -->
        <div
          class="
            text-5xl
            lg:text-6xl
            xl:text-7xl
            text-center
            lg:text-left
            font-display
            flex flex-col
            leading-tight
            gap-y-4
          "
        >
          <div class="track">
            <span class="bg-secondary text-black px-6 py-2 rounded-full mr-2"
              >You</span
            >
            <span>only</span>
          </div>
          <div>need <span class="hero__cross-out">one</span></div>
          <div>
            <span class="bg-primary px-6 py-2 rounded-full mr-2">Grip</span>
            <span>Card.</span>
          </div>
        </div>
        <!-- Header Action -->
        <nuxt-link
          to="/"
          class="
            py-4
            lg:py-6
            px-12
            lg:px-14
            bg-primary
            rounded-xl
            lg:rounded-2xl
            text-lg
            w-max
            ml-auto
            mr-auto
            lg:mr-auto
            lg:ml-0
          "
          >Get Notified</nuxt-link
        >
      </div>

      <!-- Header Banner -->
      <div
        class="
          relative
          border-[1rem] border-[#161616]
          rounded-[5rem]
          max-w-[90%]
          lg:max-w-max
          mx-auto
          min-w-[12rem]
          lg:min-w-[36rem]
          h-[30rem]
          lg:h-[40rem]
          lg:mr-10
          mt-24
          lg:mt-0
          bg-abstract bg-no-repeat bg-cover
          flex
        "
      >
        <div class="relative w-full lg:h-[44rem] overflow-hidden -mt-24">
          <img src="/home/app.png" alt="App Image" />
        </div>

        <common-blur-container
          class="bottom-[60%] lg:bottom-1/4 -left-6 lg:-left-24"
        >
          <img
            src="/common/logos/mastercard.svg"
            alt="Mastercard Logo"
            class="h-6 lg:h-9 mr-4"
          />
          <p class="mb-0 text-sm lg:text-xl text-white">*** 458</p>
        </common-blur-container>

        <common-blur-container
          class="bottom-[35%] lg:bottom-[10%] -right-6 lg:-right-16"
        >
          <home-logo
            image-url="/common/logos/gtb.svg"
            image-alt="GTB Logo"
            logo-background="bg-[#D94F00]"
          ></home-logo>

          <home-logo
            image-url="/common/logos/stanbic.svg"
            image-alt="GTB Logo"
            logo-background="bg-[#EEF6FC]"
            class="-ml-4"
          ></home-logo>

          <home-logo
            image-url="/common/logos/access.svg"
            image-alt="GTB Logo"
            logo-background="bg-[#FFF2EB]"
            class="-ml-4"
          ></home-logo>

          <home-logo
            image-url="/common/logos/kuda.svg"
            image-alt="GTB Logo"
            logo-background="bg-[#F9F7FC]"
            class="-ml-4"
          ></home-logo>
        </common-blur-container>

        <div
          class="
            h-16
            lg:h-24
            w-16
            lg:w-24
            bg-shimmery-star bg-cover bg-no-repeat
            flex
            items-center
            justify-center
            absolute
            right-0
            top-0
            translate-x-1/3
            -translate-y-1/3
            text-3xl
            lg:text-5xl
          "
        >
          🔥
        </div>
      </div>
    </main>
  </div>
</template>

<style lang="scss" scoped>
.hero__cross-out {
  position: relative;
  &::after {
    display: none;

    @media (min-width: 1024px) {
      display: block;
      content: "";
      position: absolute;
      height: 6px;
      width: 115%;
      transform: translate(-5%, -50%);
      background: var(--secondary);
      left: 0;
      top: 50%;
    }
  }
}
</style>