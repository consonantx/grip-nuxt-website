<template>
  <div class="h-screen w-screen bg-black overflow-hidden text-white relative flex-col flex">
    <Head>
      <Title>Grip - One Channel, All Payments Everything</Title>
      <Meta
        name="description"
        content="Consolidate all your existing ways of making payments into a single channel with grip. The best way to get a grip of your finances"
      />
      <Link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
      <Link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
      <Link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
      <Link rel="manifest" href="/favicon/site.webmanifest" />
    </Head>
    <layout-navbar class="relative z-10"></layout-navbar>

    <main
      class="flex container justify-between mt-0 lg:mt-10 flex-col lg:flex-row relative gap-x-16 z-10"
    >
      <!-- Header Content -->
      <div class="flex flex-col gap-y-14 lg:gap-y-24 mt-10">
        <h1 class="hidden">You only need one grip card</h1>
        <!-- Header Text -->
        <div
          class="text-4xl md:text-5xl lg:text-6xl xl:text-8xl text-center lg:text-left font-display flex flex-col leading-tight gap-y-4 lg:gap-y-8"
        >
          <div
            class="track relative"
            v-motion="'homeheaderTextMotion'"
            :initial="headerTextMotion.initial"
            :enter="headerTextMotion.enter"
            :leave="headerTextBgMotion.initial"
          >
            <span class="text-black px-6 py-2 mr-2 relative">
              <div
                class="absolute top-0 right-0 w-full h-full bg-secondary rounded-full z-0 origin-bottom-left"
                v-motion="'homeheaderTextBgMotion'"
                :initial="headerTextBgMotion.initial"
                :enter="headerTextBgMotion.enter"
                :leave="headerTextBgMotion.initial"
              ></div>
              <span class="relative z-10">You</span>
            </span>
            <span>only</span>
          </div>

          <div
            class="track relative"
            v-motion="'homeheaderTextMotion1'"
            :initial="headerTextMotion.initial"
            :enter="{
              ...headerTextMotion.enter,
              transition: {
                delay: 1000,
                ...headerTextMotion.enter.transition
              },
            }"
            :leave="headerTextBgMotion.initial"
          >
            <span class="mr-4 lg:mr-8">need</span>
            <span class="relative w-min">
              <div
                class="absolute w-full h-full top-0 left-0 origin-left"
                v-motion="'homeheaderTextCrossOutMotion'"
                :initial="headerTextCrossOutMotion.initial"
                :leave="headerTextCrossOutMotion.initial"
                :enter="headerTextCrossOutMotion.enter"
              >
                <div class="hero__cross-out"></div>
              </div>
              <span>one</span>
            </span>
          </div>
          <div
            class="track relative"
            v-motion="'homeheaderTextMotion2'"
            :initial="headerTextMotion.initial"
            :leave="headerTextMotion.initial"
            :enter="headerTextMotion.enter"
          >
            <span class="px-6 py-2 mr-2 relative">
              <div
                class="absolute top-0 right-0 w-full h-full bg-primary rounded-full z-0 origin-bottom-left"
                v-motion="'homeheaderTextBgMotion1'"
                :initial="headerTextBgMotion.initial"
                :leave="headerTextBgMotion.initial"
                :enter="headerTextBgMotion.enter"
              ></div>
              <span class="relative z-10">Grip</span>
            </span>
            <span>Card.</span>
          </div>
        </div>
        <!-- Header Action -->
        <nuxt-link
          to="/join"
          class="py-6 px-12 lg:px-14 bg-primary rounded-xl lg:rounded-2xl text-lg w-max ml-auto mr-auto lg:mr-auto lg:ml-0 leading-none"
          v-motion="'homeheaderButtonMotion'"
          :initial="headerButtonMotion.initial"
          :enter="headerButtonMotion.enter"
          :leave="headerButtonMotion.enter"
        >Join Waitlist</nuxt-link>
      </div>

      <!-- Header Banner -->
      <div
        class="relative max-w-[90%] lg:max-w-max mx-auto min-w-[12rem] md:min-w-[28rem] xl:min-w-[36rem] h-[28rem] lg:h-[36rem] lg:mr-10 mt-24 lg:mt-0 flex"
      >
        <div
          class="bg-[#161616] top-0 left-0 rounded-[5rem] absolute w-full h-full p-4 origin-top-right flex items-center justify-center overflow-hidden"
          v-motion="'homeappImageBgCoverMotion'"
          :initial="appImageBgCoverMotion.initial"
          :enter="appImageBgCoverMotion.enter"
          :leave="appImageBgCoverMotion.initial"
        >
          <img
            class="w-full h-full object-cover rounded-[4rem] origin-top-right"
            src="/common/abstract_bg.png"
            v-motion="'homeappImageBgMotion'"
            :initial="appImageBgMotion.initial"
            :enter="appImageBgMotion.enter"
            :leave="appImageBgMotion.initial"
          />
        </div>

        <div
          class="relative w-full lg:h-[40rem] overflow-hidden -mt-20"
          v-motion
          :initial="appImageMotion.initial"
          :enter="appImageMotion.enter"
        >
          <img src="/home/app.png" alt="App Image" />
        </div>

        <common-blur-container
          class="bottom-[60%] lg:bottom-1/4 -left-6 lg:-left-16"
          v-motion="'homecardDetailsPropMotion'"
          :initial="cardDetailsPropMotion.initial"
          :enter="cardDetailsPropMotion.enter"
        >
          <img src="/common/logos/mastercard.svg" alt="Mastercard Logo" class="h-6 lg:h-9 mr-4" />
          <p class="mb-0 text-sm lg:text-xl text-white">*** 458</p>
        </common-blur-container>

        <common-blur-container
          class="bottom-[35%] lg:bottom-[10%] -right-6 lg:-right-16"
          v-motion="'homebanksPropMotion'"
          :initial="banksPropMotion.initial"
          :enter="banksPropMotion.enter"
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
          class="h-16 lg:h-24 w-16 lg:w-24 bg-shimmery-star bg-cover bg-no-repeat flex items-center justify-center absolute right-0 top-0 translate-x-1/3 -translate-y-1/3 text-3xl lg:text-5xl origin-bottom"
          v-motion
          :initial="flamePropMotion.initial"
          :enter="flamePropMotion.enter"
        >🔥</div>
      </div>
    </main>

    <!-- <footer
      class="bg-secondary p-2 absolute bottom-10 left-0 z-10 w-full gap-x-16 text-black font-light overflow-x-hidden hidden lg:flex flex-nowrap"
    >
      <span class="text-base leading-none">private beta</span>
      <span class="text-base leading-none">private beta</span>
      <span class="text-base leading-none">private beta</span>
      <span class="text-base leading-none">private beta</span>
      <span class="text-base leading-none">private beta</span>
      <span class="text-base leading-none">private beta</span>
      <span class="text-base leading-none">private beta</span>
      <span class="text-base leading-none">private beta</span>
      <span class="text-base leading-none">private beta</span>
      <span class="text-base leading-none">private beta</span>
    </footer>-->

    <div class="container absolute w-screen h-screen top-0 z-0 left-1/2 -translate-x-1/2 hidden lg:flex">
      <div class="body-bg-circle body-bg-circle--a -top-1/4 -right-1/4"></div>
      <div class="body-bg-circle body-bg-circle--b -bottom-3/4 -left-1/2"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.hero__cross-out {
  position: relative;
  width: 100%;
  height: 100%;
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

<script lang="ts" setup>
import { Variant } from '@vueuse/motion'
import { Ref } from 'vue'

const appImageMotion: Ref<Record<string, Variant>> = ref({
  enter: {
    opacity: 1,
    y: 0,
    transition: {
      y: {
        duration: 750,
        delay: 1750
      },
      opacity: {
        duration: 750,
        delay: 1750
      }
    }
  },
  initial: {
    opacity: 0,
    y: 100,
  }
})

const appImageBgMotion: Ref<Record<string, Variant>> = ref({
  initial: {
    opacity: 0,
    y: 0,
    scale: 1.1,
  },
  enter: {
    opacity: 1,
    scale: 1,
    transition: {
      scale: {
        duration: 1500,
        delay: 1000
      },
      opacity: {
        duration: 1250,
        delay: 1000
      }
    }
  }
})

const appImageBgCoverMotion: Ref<Record<string, Variant>> = ref({
  initial: {
    y: 0,
    scaleY: 0,
    scaleX: .8
  },
  enter: {
    scaleX: 1,
    scaleY: 1,
    transition: {
      scaleX: {
        duration: 1250,
        delay: 1000
      },
      scaleY: {
        duration: 1250,
        delay: 1000
      }
    }
  }
})

const flamePropMotion: Ref<Record<string, Variant>> = ref({
  initial: {
    opacity: 0,
    scale: 0,
  },
  enter: {
    opacity: 1,
    scale: 1,
    transition: {
      scale: {
        duration: 500,
        delay: 1000
      },
      opacity: {
        duration: 500,
        delay: 1000
      },
    }
  }
})

const cardDetailsPropMotion: Ref<Record<string, Variant>> = ref({
  initial: {
    opacity: 0,
    scale: 1.1,
  },
  enter: {
    opacity: 1,
    scale: 1,
    transition: {
      scale: {
        duration: 500,
        delay: 2250
      },
      opacity: {
        duration: 500,
        delay: 2250
      }
    }
  }
})

const banksPropMotion: Ref<Record<string, Variant>> = ref({
  initial: {
    opacity: 0,
    y: 100,
  },
  enter: {
    opacity: 1,
    y: 0,
    transition: {
      y: {
        duration: 500,
        delay: 2000
      },
      opacity: {
        duration: 500,
        delay: 2000
      }
    }
  }
})

const headerTextMotion: Ref<Record<string, Variant>> = ref({
  initial: {
    y: 100,
    opacity: 0
  },
  enter: {
    y: 0,
    opacity: 1,
    transition: {
      y: {
        duration: 1000,
        delay: 1000
      },
      opacity: {
        duration: 1500,
        delay: 1000
      }
    }
  }
})

const headerTextBgMotion: Ref<Record<string, Variant>> = ref({
  initial: {
    scaleY: 0.4,
    opacity: 0,
    scaleX: 0.1
  },
  enter: {
    scaleY: 1,
    opacity: 1,
    scaleX: 1,
    transition: {
      opacity: {
        duration: 1000,
        delay: 1250
      },
      scaleX: {
        duration: 1000,
        delay: 1250
      },
      scaleY: {
        duration: 1000,
        delay: 1250
      }
    }
  }
})

const headerTextCrossOutMotion: Ref<Record<string, Variant>> = ref({
  initial: {
    opacity: 0,
    scaleX: 0
  },
  enter: {
    opacity: 1,
    scaleX: 1,
    transition: {
      scaleX: {
        duration: 1000,
        delay: 1750
      },
    }
  }
})

const headerButtonMotion: Ref<Record<string, Variant>> = ref({
  initial: {
    y: 100,
    opacity: 0
  },
  enter: {
    y: 0,
    opacity: 1,
    transition: {
      y: {
        duration: 1000,
        delay: 1750
      },
      opacity: {
        duration: 1500,
        delay: 1750
      }
    }
  }
})

</script>

<script lang="ts">
// import { useMotions } from '@vueuse/motion'

// const motions = useMotions()

export default {
  transition: {
    onEnter(_: any, done: any){
      console.log('entered')
    },
    onLeave(_: any, done: any) {
      console.log('here')
    }
  }
}
</script>