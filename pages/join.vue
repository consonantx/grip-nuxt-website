<template>
  <div class="h-screen w-screen bg-black overflow-hidden text-white relative">
    <Head>
      <Title>Grip - Join Waitlist</Title>
      <Meta
        name="description"
        content="Grip is coming soon and we can't wait to get you on our app! Join the waitlist today!"
      />
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
    <layout-navbar class="relative z-10"></layout-navbar>

    <main
      class="
        flex
        container
        justify-between
        mt-0
        lg:mt-10
        flex-col
        lg:flex-row
        relative
        lg:gap-x-16
        z-10
        overflow-scroll
      "
    >
      <!-- Header Content -->
      <div class="flex flex-col gap-y-24 mt-10">
        <h1 class="hidden">Get notified when we launch!</h1>
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
            lg:gap-y-6
          "
        >
          <div class="flex items-center justify-center lg:justify-start">
            Get
            <div class="bg-primary rounded-full pl-2 lg:pl-4 flex ml-8">
              <img
                src="/common/icons/female.png"
                alt="Girl Memoji Image"
                class="w-12 lg:w-16 xl:w-20"
              />
              <span
                class="rounded-full bg-secondary flex-grow-0 ml-1 lg:ml-2 px-2"
              >
                <img
                  src="/common/icons/male.png"
                  class="-mb-4 w-12 lg:w-16 xl:w-20"
                  alt=""
                />
              </span>
            </div>
          </div>
          <div>Notified</div>
          <div>When We</div>
          <div class="flex justify-center lg:justify-start">
            <span>Launch</span>
            <span class="rounded-full bg-secondary flex-grow-0 ml-4 xl:px-4">
              <img
                src="/common/icons/card.png"
                class="w-12 lg:w-16 xl:w-20 mt-2"
                alt="Card Image"
              />
            </span>
          </div>
        </div>
      </div>

      <!-- Header Banner -->
      <div
        class="
          relative
          rounded-[5rem]
          lg:max-w-max
          mx-auto
          min-w-[90%]
          md:min-w-[24rem]
          xl:min-w-[36rem]
          h-[30rem]
          lg:h-[40rem]
          lg:mr-10
          bg-transparent
          lg:bg-abstract bg-no-repeat bg-cover
          flex
        "
      >
        <div
          class="
            absolute
            inset-0
            lg:inset-4
            rounded-[5rem]
            bg-transparent
            lg:bg-[#01060E]
            flex
            items-center
            justify-center
            lg:px-9
          "
        >
          <form
            action=""
            method="post"
            @submit="null"
            class="w-full grid gap-y-20"
          >
            <input
              type="text"
              class="
                text-xl
                placeholder-gray-500
                outline-none
                bg-transparent
                border-b
                w-full
                border-gray-600
                pb-3
              "
              placeholder="Full Name"
            />

            <input
              type="email"
              class="
                text-xl
                placeholder-gray-500
                outline-none
                bg-transparent
                border-b
                w-full
                border-gray-600
                pb-3
              "
              placeholder="Email"
            />

            <input
              type="submit"
              value="Get Notified"
              class="
                py-6
                px-12
                lg:px-14
                bg-primary
                rounded-xl
                lg:rounded-2xl
                text-lg
                w-full
                ml-auto
                mr-auto
                lg:mr-auto
                lg:ml-0
                leading-none
              "
            />
          </form>
        </div>
      </div>
    </main>

    <div
      class="
        container
        absolute
        w-screen
        h-screen
        top-0
        z-0
        left-1/2
        -translate-x-1/2
      "
    >
      <div class="body-bg-circle body-bg-circle--a -top-1/4 -right-1/4"></div>
      <div class="body-bg-circle body-bg-circle--b -bottom-3/4 -left-1/2"></div>
    </div>
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