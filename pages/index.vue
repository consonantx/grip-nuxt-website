<template>
  <div class="bg-overlay">

    <Head>
      <Title>Grip - One Card, All Payments Everything</Title>
      <Meta name="description"
        content="Consolidate all your existing ways of making payments into a single channel with grip. The best way to get a grip of your finances" />
      <Link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
      <Link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
      <Link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
      <Link rel="manifest" href="/favicon/site.webmanifest" />
    </Head>

    <nav class="py-16 bg-transparent text-white">
      <div class="container flex flex-row justify-center">
        <div class="flex space-x-8 items-center">
          <img src="/logo.svg" alt="Grip Logo" class="h-10">
        </div>
      </div>
    </nav>

    <LayoutNavbar></LayoutNavbar>

    <main class="flex flex-col relative">

      <!-- HERO SECTION -->
      <section class="h-[57rem] lg:h-[40rem] xl:h-[50rem] lg:min-h-[30rem] w-full text-white relative overflow-hidden"
        id="hero">
        <h1 class="hidden">You only need one card</h1>
        <div class="container flex flex-col lg:flex-row">
          <div class="relative flex flex-col justify-center">
            <div
              class="text-center lg:text-left text-[120px] lg:text-[220px] xl:text-[310px] uppercase font-title leading-none font-black text-primary transition-colors duration-200 ease-in-out hover:text-secondary">
              GRIP <br /> CARD
            </div>
            <div
              class="before:absolute before:h-[2px] before:content-[''] before:w-20 lg:before:w-44 before:bg-secondary before:left-0 before:top-1/2 before:-translate-y-1/2 pl-24 lg:pl-48 relative mx-auto lg:ml-0 lg:text-2xl font-title">
              You only need one card</div>
          </div>
          <div
            class="rotate-[15deg] lg:rotate-0 lg:absolute -translate-x-[5%] md:translate-x-[10%] lg:translate-x-[55%] translate-y-[10%] md:translate-y-[5%] lg:-translate-y-16 xl:-translate-y-24 w-[55rem] md:w-[65rem] lg:w-auto 2xl:w-[90rem]">
            <img src="/home/header_image.png" class="object-fill lg:w-10/12 xl:w-11/12" />
          </div>
        </div>

        <!-- HERO FOOTER -->
        <div class="container">
          <div class="flex justify-center lg:justify-end -translate-y-48 md:-translate-y-72 lg:-translate-y-12">
            <div class="flex flex-col items-center">
              <ArrowCircleDownIcon class="w-14 mb-3 stroke-1"></ArrowCircleDownIcon>
              <p class="font-display text-[10px] leading-none">Scroll Down</p>
            </div>
          </div>
        </div>
      </section>


      <section id="why-grip-section" class="bg-light pt-24 lg:py-52 relative">
        <div class="container grid grid-cols-1 lg:grid-cols-2 gap-x-24">
          <div class="flex flex-col">
            <h2 class="text-primary font-gilmer text-lg lg:text-2xl font-semibold">Why Grip? We're the best in Finances
              <span class="drop-shadow-xl">🚀</span>
            </h2>
            <p class="mt-3 lg:mt-11 mb-11 lg:mb-20 text-2xl lg:text-3xl font-title font-bold">
              Grip seamlessly aggregates all your credit cards, debit cards, bank accounts and fintech wallets into one
              super app and one card, so it's the only card you need to carry and the only pin you need to remember.
            </p>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10 lg:gap-y-20">
              <div class="flex flex-col lg:flex-row items-start space-y-2 lg:space-y-0 lg:space-x-4">
                <img src="/home/icons/profile.svg" alt="Profile Image">
                <div class="flex flex-col space-y-2">
                  <h3 class="font-gilmer font-semibold">Choose a Plan</h3>
                  <p class="text-xs font-title">
                    Select a Grip subscription plan that's perfect for you.
                  </p>
                </div>
              </div>

              <div class="flex flex-col lg:flex-row items-start space-y-2 lg:space-y-0 lg:space-x-4">
                <img src="/home/icons/slider.svg" alt="Slider Image">
                <div class="flex flex-col space-y-2">
                  <h3 class="font-gilmer font-semibold">Sign Up</h3>
                  <p class="text-xs font-title">
                    Register and set up your Grip account.
                  </p>
                </div>
              </div>

              <div class="flex flex-col lg:flex-row items-start space-y-2 lg:space-y-0 lg:space-x-4">
                <img src="/home/icons/link.svg" alt="Link Channels">
                <div class="flex flex-col space-y-2">
                  <h3 class="font-gilmer font-semibold">Link your Cards, Accounts & Wallets</h3>
                  <p class="text-xs font-title">
                    Aggregate all your cards, bank accounts and fintech wallets in one place.
                  </p>
                </div>
              </div>

              <div class="flex flex-col lg:flex-row items-start space-y-2 lg:space-y-0 lg:space-x-4">
                <img src="/home/icons/manage.svg" alt="Manage Channels">
                <div class="flex flex-col space-y-2">
                  <h3 class="font-gilmer font-semibold">Manage & Pay</h3>
                  <p class="text-xs font-title">
                    Manage payments and transactions across all your linked channels and pay with one card.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- IMAGE -->
          <div
            class="relative lg:absolute right-0 translate-y-20 md:translate-y-30 xl:-translate-y-20 2xl:-translate-y-40 md:w-[35rem] xl:w-[42.5rem] 2xl:w-auto">
            <img src="/home/why_section_image.png" class="z-[1] relative" alt="">
            <div class="absolute bg-[#078ae636] blur-[325px] left-[45%] right-[6.5%] top-[27.5%] bottom-[9%]"></div>
          </div>
        </div>
      </section>


      <section id="faqs" class="bg-light pt-24 lg:pt-44 pb-24 relative">
        <div class="container flex flex-col text-center lg:text-left lg:grid lg:grid-cols-2">
          <div class="flex flex-col space-y-4 mb-8 lg:mb-0">
            <h2 class="font-title font-black text-3xl">FAQ</h2>
            <p class="font-title lg:text-lg">
              Have some questions? <br />
              We've probably already answered them.
            </p>
          </div>

          <div class="flex flex-col">
            <div class="" v-for="(question, index) in featuredQuestions" :key="index">
              <div :class="[
                'flex flex-col space-y-2 pb-3',
                { 'border-b border-gray-300': index !== featuredQuestions.length - 1 },
              ]">
                <button class="flex justify-between items-center pt-6 pb-2"
                  @click="activeQuestion !== index ? activeQuestion = index : activeQuestion = null">
                  <h3 class="font-title font-black lg:text-xl text-left pr-8">{{ question.question }}</h3>
                  <div class="p-1 border border-black rounded-full">
                    <transition mode="out-in" appear-active-class="transition-all duration-200 ease-in"
                      appear-class="scale-0" appear-to-class="scale-100"
                      leave-active-class="transition-all duration-200 ease-in" leave-class="scale-100"
                      leave-to-class="scale-0">
                      <MinusSmIcon class="h-4" v-if="index === activeQuestion"></MinusSmIcon>
                      <ChevronDownIcon class="h-4" v-else></ChevronDownIcon>
                    </transition>
                  </div>
                </button>
                <p :class="['font-gilmer lg:text-lg mt-4 overflow-hidden transition-all duration-500 ease-in-out max-h-0 text-left', { 'max-h-screen': index === activeQuestion }]"
                  v-html="question.answer"></p>
              </div>
            </div>
          </div>

          <div class="col-span-2 flex justify-end pt-10 lg:pt-20">
            <NuxtLink
            to="/faq"
              class="rounded-xl border border-black py-4 px-6 font-gilmer text-sm font-semibold capitalize tracking-widest w-full lg:w-max">
              Learn more
            </NuxtLink>
          </div>
        </div>
      </section>

      <section class="bg-[#000000] py-24 lg:py-44 relative" id="card-designs">
        <div class="container grid lg:grid-cols-2 gap-x-48 content-center justify-items-center">
          <!-- DESIGNED WITH... -->
          <div class="flex flex-col text-white justify-center">
            <h2 class="text-4xl lg:text-7xl font-title w-min">
              Designed <br />
              With <br />
              <div class="w-min relative overflow-hidden">
                <Motion :initial="cardDesignTextSwitcherAnimation.initial"
                  :animate="cardDesignTextSwitcherAnimation.animate" :exit="cardDesignTextSwitcherAnimation.exit"
                  class="font-black text-secondary font-title" v-if="cardDesignTextSwitcher === 1">Beauty.</Motion>
                <Motion :initial="cardDesignTextSwitcherAnimation.initial"
                  :animate="cardDesignTextSwitcherAnimation.animate" :exit="cardDesignTextSwitcherAnimation.exit"
                  class="font-black text-secondary font-title" v-else-if="cardDesignTextSwitcher === 2">Purpose.
                </Motion>
                <Motion :initial="cardDesignTextSwitcherAnimation.initial"
                  :animate="cardDesignTextSwitcherAnimation.animate" :exit="cardDesignTextSwitcherAnimation.exit"
                  class="font-black text-secondary font-title" v-else>Style.</Motion>
              </div>
            </h2>

            <p class="mt-4 lg:text-lg text-gray-400">The debit card designed for everyday spending, with simplicity and
              transparency
              built right in. Live your
              best life with a card you can brag about.</p>
          </div>

          <!-- CARD SWITCHER -->
          <div class="flex flex-col mt-16 lg:mt-0 w-4/5 lg:w-auto">
            <div
              class="w-full lg:h-[28rem] xl:h-[37.5rem] bg-[url('/home/card_switcher_bg.svg')] bg-contain bg-no-repeat py-4">
              <img class="object-contain h-full w-full xl:-translate-y-8 drop-shadow-lg"
                src="https://res.cloudinary.com/consonantafrica/image/upload/v1651346398/Grip/CardArts/Basic/Shuta%20Bug/shutabag_Full_xnwq3w.png"
                alt="">
            </div>
            <div class="bg-white p-4 lg:p-6 rounded-2xl flex items-center justify-between">
              <p class="font-title font-black text-2xl xl:text-4xl leading-none">Jet Black</p>
              <div class="flex space-x-6">
                <button
                  class="rounded-full border-2 border-hue p-4 xl:p-5 transition duration-200 hover:border-primary hover:border-opacity-50">
                  <ArrowLeftIcon class="w-4 text-primary drop-shadow-md"></ArrowLeftIcon>
                </button>
                <button
                  class="rounded-full border-2 border-hue p-4 xl:p-5 transition duration-200 hover:border-primary hover:border-opacity-50">
                  <ArrowRightIcon class="w-4 text-primary drop-shadow-md"></ArrowRightIcon>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer id="footer" class="bg-[#000000] relative pt-28">
        <div class="flex flex-col space-y-6 text-center">
          <h2 class="font-title text-4xl lg:text-6xl font-black text-white">
            <span class="text-secondary font-title">Global Card.</span>
            <br class="lg:hidden" />
            Super App
          </h2>
          <p class="font-gilmer text-base lg:text-xl text-gray-400">
            Enjoy the ultimate unified financial experience <br />
            across all your financial channels with our mobile app and debit card.
          </p>

          <div class="mx-auto flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-4 pt-5">
            <button class="rounded-full py-4 px-8 bg-white flex items-center font-gilmer">
              <img src="/common/icons/google_play.svg" class="mr-2" alt="" srcset="">
              Google Play
            </button>

            <button class="rounded-full py-4 px-8 bg-white flex items-center font-gilmer">
              <img src="/common/icons/apple.svg" class="mr-2" alt="" srcset="">
              App Store
            </button>
          </div>

          <div class="pt-10 md:pt-20 bg-[url('/common/footer/pre_footer_bg.png')] bg-repeat-x bg-bottom relative">
            <img src="/common/footer/pre_footer_phone.png" class="mx-auto" alt="">
            <div class="absolute inset-x-0 bottom-0 top-60 z-[1] bg-gradient-to-b from-transparent to-[#000000]"></div>
          </div>
        </div>

        <div class="bg-white pt-20 overflow-hidden -mt-40 relative z-[2] text-[#000000] ml-5 md:ml-0">
          <div class="container grid md:grid-cols-10 gap-y-20">
            <div class="md:col-span-3 flex flex-col space-y-9">
              <h2 class="text-5xl font-title">One Debit Card. <span class="text-secondary">No BS</span></h2>
              <NuxtLink href="mailto:hello@trygrip.co" class="font-gilmer text-xl underline">hello@trygrip.co</NuxtLink>
              <p class="font-gilmer text-xl">Abuja, Nigeria</p>
              <div class="flex space-x-8">
                <NuxtLink href="https://twitter.com/trygripapp" target="__blank">
                  <img src="/common/icons/twitter.svg" class="w-6" alt="Twitter">
                </NuxtLink>

                <NuxtLink href="https://linkedin.com/in/trygripapp" target="__blank">
                  <img src="/common/icons/linkedin.svg" class="w-6" alt="LinkedIn">
                </NuxtLink>

                <NuxtLink href="https://instagram.com/trygripapp" target="__blank">
                  <img src="/common/icons/instagram.svg" class="w-6" alt="Instagram">
                </NuxtLink>

                <NuxtLink href="https://instagram.com/trygripapp" target="__blank">
                  <img src="/common/icons/facebook.svg" class="w-6" alt="Facebook">
                </NuxtLink>
              </div>
            </div>
            <div class="md:col-span-7 grid gap-y-10 grip-cols-1 md:grid-cols-2 lg:grid-cols-4 md:ml-20">
              <div class="flex flex-col space-y-4">
                <h3 class="text-gray-400 font-gilmer text-sm font-semibold mb-2">Features</h3>
                <NuxtLink to="/features/fallback" class="font-gilmer text-sm">Fallback</NuxtLink>
                <NuxtLink to="/features/lockdown" class="font-gilmer text-sm">Lockdown</NuxtLink>
                <NuxtLink to="/features/transaction-pooling" class="font-gilmer text-sm">Transaction Pooling</NuxtLink>
                <NuxtLink to="/features/cards" class="font-gilmer text-sm">Dollar Cards</NuxtLink>
              </div>

              <div class="flex flex-col space-y-4">
                <h3 class="text-gray-400 font-gilmer text-sm font-semibold mb-2">Legal</h3>
                <NuxtLink to="/privacy-policy" class="font-gilmer text-sm">Privacy Policy</NuxtLink>
                <NuxtLink to="/terms-of-use" class="font-gilmer text-sm">Terms Of Use</NuxtLink>
                <NuxtLink to="/aml-policy" class="font-gilmer text-sm">AML Policy</NuxtLink>
                <NuxtLink to="/debit-card-terms" class="font-gilmer text-sm">Debit Card Terms</NuxtLink>
              </div>

              <div class="flex flex-col space-y-4">
                <h3 class="text-gray-400 font-gilmer text-sm font-semibold mb-2">Company</h3>
                <NuxtLink to="/about" class="font-gilmer text-sm">About Us</NuxtLink>
                <NuxtLink to="/careers" class="font-gilmer text-sm">Careers</NuxtLink>
                <NuxtLink href="https://blog.trygrip.co" target="__blank" class="font-gilmer text-sm">Blog</NuxtLink>
                <NuxtLink href="https://gripco.statuspage.io" target="__blank" class="font-gilmer text-sm">Status Page</NuxtLink>
                <NuxtLink href="https://feedback.trygrip.co" class="font-gilmer text-sm">Feedback</NuxtLink>
              </div>

              <div class="flex flex-col space-y-4">
                <h3 class="text-gray-400 font-gilmer text-sm font-semibold mb-2">Help</h3>
                <NuxtLink to="/faq" class="font-gilmer text-sm">FAQ</NuxtLink>
                <NuxtLink to="/fx-calculator" class="font-gilmer text-sm">Fx Calculator</NuxtLink>
                <NuxtLink to="/fees" class="font-gilmer text-sm">Fees</NuxtLink>
              </div>


            </div>
          </div>

          <div class="pt-20 pb-40 relative text-left md:text-center">
            <p class="font-gilmer text-sm ml-5 md:ml-0">&copy; {{new Date().getFullYear()}} Consonant Technologies Ltd, All Rights Reserved.</p>
            <img src="/common/footer/footer_bg.png" class="absolute hidden lg:block lg:h-[150%] bottom-0 right-0" alt="">
          </div>
        </div>
      </footer>
    </main>
  </div>
</template>

<script lang="ts" setup>
import { ArrowCircleDownIcon } from "@heroicons/vue/outline"
import { MinusSmIcon, ChevronDownIcon, ArrowLeftIcon, ArrowRightIcon } from "@heroicons/vue/solid"
import { Motion } from "motion/vue"
import Faq from "~/data/faqQuestions"

const featuredQuestions = computed(() => Faq.filter(x => x.isFeatured))
const activeQuestion = ref(null)
const cardDesignTextSwitcher = ref(1)

setInterval(() => {
  if (cardDesignTextSwitcher.value < 3) {
    cardDesignTextSwitcher.value++
  } else {
    cardDesignTextSwitcher.value = 1
  }
}, 3000)

const cardDesignTextSwitcherAnimation = computed(() => ({
  initial: {
    opacity: 0,
    transform: "translateY(100%)",
  },
  animate: {
    opacity: 1,
    transform: "translateY(0)",
  },
  exit: {
    opacity: 0,
    transform: "translateY(-100%)",
  }
}))
</script>