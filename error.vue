<template>
  <div class="absolute inset-0 bg-[#1c1c1c] flex h-screen w-screen text-white overflow-hidden">
    <div class="container mx-auto relative min-h-screen z-10">
      <LayoutHeader></LayoutHeader>
      <div class="flex flex-col-reverse md:flex-row flex-grow mt-16 lg:mt-28">
        <div class="flex flex-col flex-grow space-y-12 mt-28 lg:mt-0">
          <h1 class="text-4xl lg:text-6xl font-black font-title break-words">
            Something's <br />
            Missing
          </h1>
          <button class="px-16 py-4 border-2 w-max rounded-lg font-gilmer" @click="handleError">Go Home</button>
        </div>
        <div class="flex flex-grow -ml-10">
          <img
            src="https://res.cloudinary.com/consonantafrica/image/upload/q_70/v1661717808/website/pos_design_trans_pwcp73.webp"
            width="3840" height="2160" class="rotate-[-25deg]" />
        </div>
      </div>
    </div>
    <span
      class="text-[200px] lg:text-[650px] font-bold text-[#262626] absolute bottom-60 lg:bottom-0 leading-none z-0 font-title">404</span>
  </div>
</template>

<script lang="ts" setup>
const error = useError()
const router = useRouter()

const handleError = () => clearError({ redirect: "/" })
</script>