<template>
  <nav
    class="container py-10 lg:py-12 flex justify-center lg:justify-between items-center mt-4 lg:mt-0"
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
          y: {
            duration: 1000
          },
          opacity: {
            duration: 1000
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
          y: {
            duration: 1000,
            delay: 500
          },
          opacity: {
            duration: 1000,
            delay: 500
          }
        }
      }"
    >About Grip</nuxt-link>
  </nav>
</template>