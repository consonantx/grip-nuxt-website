<template>
  <nav
    class="container py-10 lg:py-12 flex justify-between items-center mt-0 mx-auto px-10 lg:px-0"
  >
    <nuxt-link
      to="/"
      v-motion
      :initial="{
        opacity: 0,
        y: -100,
        scale: 0
      }"
      :enter="{
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
          type: [0.64, 0.04, 0.35, 1],
          y: {
            duration: 1400
          },
          opacity: {
            duration: 1400
          }
        }
      }"
      :hovered="{
        scale: 1.2
      }"
    >
      <img src="/logo.svg" class="h-12 w-12" alt="Logo" />
    </nuxt-link>
    <nuxt-link
      to="/about"
      class="lg:flex items-center border-[3px] rounded-full py-4 px-8 border-[#303030] hidden"
      v-motion
      :initial="{
        opacity: 0,
        y: -100,
      }"
      :enter="{
        opacity: 1,
        y: 0,
        transition: {
          type: [0.64, 0.04, 0.35, 1],
          y: {
            duration: 1400,
            delay: 110
          },
          opacity: {
            duration: 1400,
            delay: 110
          }
        }
      }"
    >About Grip</nuxt-link>
    <button
      class="flex items-center rounded-md p-3 font-bold bg-white text-black lg:hidden"
      v-motion
      :initial="{
        opacity: 0,
        y: -100,
      }"
      :enter="{
        opacity: 1,
        y: 0,
        transition: {
          type: [0.64, 0.04, 0.35, 1],
          y: {
            duration: 1400,
            delay: 110
          },
          opacity: {
            duration: 1400,
            delay: 110
          }
        }
      }"
    >Menu</button>
  </nav>
</template>