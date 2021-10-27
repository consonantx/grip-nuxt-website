<template>
  <div class="h-screen w-screen bg-[#020612] overflow-hidden text-white relative flex flex-col">
    <Head>
      <Title>Grip - Join Waitlist</Title>
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
      class="flex container justify-between mt-0 lg:mt-10 flex-col lg:flex-row relative lg:gap-x-16 z-10 overflow-y-auto"
    >
      <!-- Header Content -->
      <div class="flex flex-col gap-y-24">
        <h1 class="hidden">Get notified when we launch!</h1>
        <!-- Header Text -->
        <div
          class="text-[44px] md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl text-center lg:text-left font-display flex flex-col leading-tight gap-y-2 md:gap-y-4 lg:gap-y-6 px-10"
        >
          <div
            class="flex items-center justify-start"
            v-motion="'joinHeaderTextMotion1'"
            :initial="headerTextMotion.initial"
            :leave="headerTextMotion.initial"
            :enter="headerTextMotion.enter"
          >
            Get
            <div class="bg-primary rounded-full pl-2 lg:pl-4 flex ml-4 lg:ml-8 relative">
              <img
                src="/common/icons/female.png"
                alt="Female Memoji Image"
                class="w-12 lg:w-16 xl:w-20"
                v-motion="'joinHeaderTextImageMotion2'"
                :initial="headerTextImageMotion2.initial"
                :leave="headerTextImageMotion2.initial"
                :enter="headerTextImageMotion2.enter"
              />
              <span
                class="rounded-full bg-secondary flex-grow-0 ml-1 lg:ml-2 px-2"
                v-motion="'joinHeaderTextImageMotion1'"
                :initial="headerTextImageMotion.initial"
                :leave="headerTextImageMotion.initial"
                :enter="headerTextImageMotion.enter"
              >
                <img
                  src="/common/icons/male.png"
                  class="-mb-4 w-12 lg:w-16 xl:w-20"
                  alt="Male Memoji Image"
                />
              </span>
            </div>
          </div>
          <div
          class="flex justify-start items-center"
            v-motion="'joinHeaderTextMotion1'"
            :initial="headerTextMotion2.initial"
            :leave="headerTextMotion2.initial"
            :enter="headerTextMotion2.enter"
          >Notified</div>
          <div
          class="flex justify-start items-center"
            v-motion="'joinHeaderTextMotion1'"
            :initial="headerTextMotion3.initial"
            :leave="headerTextMotion3.initial"
            :enter="headerTextMotion3.enter"
          >When We</div>
          <div
            class="flex justify-start items-center"
            v-motion="'joinHeaderTextMotion1'"
            :initial="headerTextMotion4.initial"
            :leave="headerTextMotion4.initial"
            :enter="headerTextMotion4.enter"
          >
            <span>Launch</span>
            <span class="rounded-full bg-secondary flex-grow-0 ml-4 px-2 xl:px-4">
              <img src="/common/icons/card.png" class="w-12 lg:w-16 xl:w-20 mt-2" alt="Card Image" />
            </span>
          </div>
        </div>
      </div>

      <!-- Header Banner -->
      <div
        class="relative rounded-[2rem] lg:rounded-[5rem] lg:max-w-max mx-auto min-w-[90%] md:min-w-[28rem] xl:min-w-[33rem] min-h-[25rem] lg:min-h-[35rem] lg:mr-10 bg-[#0C0C0C] lg:bg-abstract bg-no-repeat bg-cover flex mt-10"
        v-motion="'joinAppFormMotion1'"
        :initial="appFormMotion.initial"
        :leave="appFormMotion.initial"
        :enter="appFormMotion.enter"
      >
        <div
          class="absolute inset-0 lg:inset-3 rounded-[5rem] bg-transparent lg:bg-[#0C0C0C] flex items-center justify-center px-6 lg:px-9"
        >
          <form
            @submit.prevent="submit()"
            @keydown.enter.prevent="submit()"
            class="w-full grid gap-y-16 lg:gap-y-20"
          >
            <input
              type="text"
              class="text-lg lg:text-xl placeholder-gray-500 outline-none bg-transparent border-b w-full border-gray-600 pb-3"
              placeholder="Full Name"
              v-model="name"
            />

            <input
              type="email"
              class="text-lg lg:text-xl placeholder-gray-500 outline-none bg-transparent border-b w-full border-gray-600 pb-3"
              placeholder="Email"
              v-model="email"
            />

            <button
              type="submit"
              value="Get Notified"
              class="py-6 px-12 lg:px-14 bg-primary rounded-xl lg:rounded-2xl lg:text-lg w-full ml-auto mr-auto lg:mr-auto lg:ml-0 !leading-none cursor-pointer disabled:opacity-75 disabled:cursor-not-allowed relative"
              :disabled="!email || !name"
            >
              <span v-if="!isLoading">Get Notified</span>
              <img src="~/assets/images/spinner.svg" class="w-6 h-6 mx-auto" v-else />
            </button>
          </form>
        </div>
      </div>
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
import { useToast } from 'vue-toastification'

const appFormMotion: Ref<Record<string, Variant>> = ref({
  enter: {
    opacity: 1,
    scale: 1,
    transition: {
      type: [0.22, 0.61, 0.35, 1],
      scale: {
        duration: 1420,
        delay: 520
      },
      opacity: {
        duration: 1420,
        delay: 520
      }
    }
  },
  initial: {
    opacity: 0,
    scale: 0.7
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
      type: [0.22, 0.61, 0.35, 1],
      y: {
        duration: 1390,
        delay: 390
      },
      opacity: {
        duration: 1390,
        delay: 390
      }
    }
  }
})

const headerTextMotion2: Ref<Record<string, Variant>> = ref({
  initial: {
    y: 100,
    opacity: 0
  },
  enter: {
    y: 0,
    opacity: 1,
    transition: {
      type: [0.22, 0.61, 0.35, 1],
      y: {
        duration: 1360,
        delay: 590
      },
      opacity: {
        duration: 1360,
        delay: 590
      }
    }
  }
})

const headerTextMotion3: Ref<Record<string, Variant>> = ref({
  initial: {
    y: 100,
    opacity: 0
  },
  enter: {
    y: 0,
    opacity: 1,
    transition: {
      type: [0.22, 0.61, 0.35, 1],
      y: {
        duration: 1370,
        delay: 700
      },
      opacity: {
        duration: 1370,
        delay: 700
      }
    }
  }
})

const headerTextMotion4: Ref<Record<string, Variant>> = ref({
  initial: {
    y: 100,
    opacity: 0
  },
  enter: {
    y: 0,
    opacity: 1,
    transition: {
      type: [0.22, 0.61, 0.35, 1],
      y: {
        duration: 1290,
        delay: 900
      },
      opacity: {
        duration: 1290,
        delay: 900
      }
    }
  }
})

const headerTextImageMotion: Ref<Record<string, Variant>> = ref({
  initial: {
    x: -50,
  },
  enter: {
    x: 0,
    transition: {
      type: [0.22, 0.61, 0.35, 1],
      x: {
        duration: 1000,
        delay: 1250
      },
    }
  }
})

const headerTextImageMotion2: Ref<Record<string, Variant>> = ref({
  initial: {
    scaleX: 0.9,
  },
  enter: {
    scaleX: 1,
    transition: {
      type: [0.22, 0.61, 0.35, 1],
      scaleX: {
        duration: 1000,
        delay: 1250
      },
    }
  }
})

const referrer = useState('ref_id')

const router = useRouter()

const name = ref('')

const email = ref('')

const isLoading = ref(false)

const toast = useToast()

const waitlist_info = useState<{
  current_priority?: string,
  referral_link?: string,
  registered_email?: string,
  total_referrals?: number,
  total_users?: number,
  user_id?: string
}>('waitlist_info', () => ({}))

const submit = async () => {
  if (email.value && name.value) {
    isLoading.value = true
    try {
      const { code } = await $fetch<{ code: string }>(
        `https://grip.technology/user/wait-list/${encodeURI(email.value)}`
      )

      if (code === '000') {
        toast.info(`You're already on the waitlist boss 👀`)
      }
    } catch (e) {
      if ((e?.message as string).includes('400')) {
        await addToWaitlist()
      }
    }
    isLoading.value = false
  } else {
    toast.error('Both email and name are required')
  }
}

const addToWaitlist = async () => {
  try {
    const { code, data, message } = await $fetch<{
      message: string,
      code: string,
      data: {
        current_priority: string,
        referral_link: string,
        registered_email: string,
        total_referrals: number,
        total_users: number,
        user_id: string
      }
    }>('https://grip.technology/user/wait-list', {
      body: JSON.stringify({
        email: email.value,
        name: name.value,
        referralLink: `https://trygrip.co${referrer.value ? '?&' + referrer.value : ''}`
      }),
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'accept': 'application/json'
      }
    })
    if (code === '000') {
      waitlist_info.value = data
      toast.success(`You've been added to the waitlist!`)
      name.value = ''
      email.value = ''
      router.push('/waitlist')
    } else {
      toast.error('whoops, something went wrong. try again')
      console.error('Waitlist sign on failed', ' code:' + code, ' message:' + message, ' data:', data)
    }
  } catch (e) {
    toast.error('whoops, something went wrong. try again')
    console.error('Waitlist sign on failed', ' error -> ', e)
  }
  isLoading.value = false
}
</script>