<template>
  <div :class="['bg-light', { 'fixed': showRates }]">

    <Head>
      <Title>FX Calculator | Grip - One Card, All Payments Everything</Title>
      <Meta name="description"
        content="Consolidate all your existing ways of making payments into a single channel with grip. The best way to get a grip of your finances" />
      <Link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
      <Link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
      <Link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
      <Link rel="manifest" href="/favicon/site.webmanifest" />
    </Head>

    <LayoutHeader :is-dark="true"></LayoutHeader>
    <LayoutNavbar></LayoutNavbar>

    <Presence>
      <Motion :initial="{ scaleY: 0.6, opacity: 0 }" :animate="{ scaleY: [0.6, 1], opacity: [0, 1] }"
        :exit="{ scaleY: [0.6], opacity: 0 }" :transition="{ duration: 0.25, easing: 'ease-in' }"
        class="z-[10] fixed inset-0 bg-black bg-opacity-50" v-if="showRates"></Motion>
    </Presence>

    <Presence>
      <Motion :initial="{ transform: 'scaleY(0.2)  translateY(-50%) translateX(-50%)', opacity: 0 }"
        :animate="{ transform: ['scaleY(0.2) translateY(-50%) translateX(-50%)', 'scaleY(1) translateY(-50%) translateX(-50%)'], opacity: [0, 1] }"
        :exit="{ transform: 'scaleY(0.2) translateY(-50%) translateX(-50%)', opacity: 0 }"
        :transition="{ duration: 0.3, easing: 'ease-out', delay: 0.1 }" v-if="showRates"
        class="origin-center bg-light pt-10 pb-8 px-10 z-[12] fixed rounded-3xl backdrop-blur-md bg-opacity-80 max-w-[500px] top-1/2 left-1/2 transform mx-auto text-center">
        <div class="flex flex-col space-y-8">
          <h2 class="font-title text-xl">If you made this transaction today, you would pay:</h2>
          <p class="font-extrabold font-title text-5xl text-primary">{{
              getCurrencyInformation(ratesInformation.targetCurrency).name
          }}
            {{ formatNumber(ratesInformation.targetCurrencyAmount) }}</p>

          <div class="flex flex-col space-y-16 w-80 mx-auto">
            <div class="flex justify-between">
              <p class="font-gilmer text-sm text-gray-500">Exchange Rate</p>
              <p class="font-gilmer text-sm">{{ getCurrencyInformation(ratesInformation.baseCurrency).name }} 1 =
                {{ getCurrencyInformation(ratesInformation.targetCurrency).name }} {{
                    formatNumber(ratesInformation.conversionRate)
                }}</p>
            </div>
            <div class="flex justify-between">
              <p class="font-gilmer text-sm text-gray-500">Precision Amount</p>
              <p class="font-gilmer text-sm">{{ getCurrencyInformation(ratesInformation.targetCurrency).name }}
                {{ formatPrecisionNumber(ratesInformation.targetCurrencyAmount) }}</p>
            </div>
          </div>
        </div>
        <div class="flex items-center justify-center mt-16">
          <button @click="clearFields()"
            class="mx-auto w-max bg-primary py-6 px-16 text-white drop-shadow-[0px_27.651px_55.302px_rgba(11,4,205,0.29)] rounded-xl disabled:opacity-50 disabled:cursor-not-allowed">
            Okay, Got it.
          </button>
        </div>
      </Motion>
    </Presence>

    <main class=" flex flex-col relative">
      <!-- HERO SECTION -->
      <section class="pt-10 pb-36 relative" id="hero">
        <div class="container flex flex-col lg:grid grid-cols-2 gap-x-32 items-center">
          <div class="flex flex-col space-y-6 mt-16 lg:mt-0 text-center lg:text-left">
            <h1 class="font-title font-black text-3xl lg:text-5xl">Compare Foreign Exchange Charges With Other
              Providers
            </h1>
            <p class="font-gilmer lg:text-xl">
              You can now compate the rates we charge for international transactions on Grip with rates
              offered by other providers.
            </p>
            <div class="font-gilmer mt-5 lg:text-xl">
              <p>Please note that additional charges may apply:</p>
              <ul class="list-disc list-inside mt-2 text-left">
                <li class="list-item">Rates vary depending on your subscription tier and how much of your spending
                  limit
                  has been utilized.</li>
                <li class="list-item">Transaction fees may also apply.</li>
              </ul>
            </div>
          </div>

          <form class="grid grid-cols-1 gap-y-11 mt-16 lg-mt-0 w-full lg:w-auto"
            @submit.prevent="calculateEchangeRate()">
            <!-- BASE CURRENCY -->
            <div class="grid grid-cols-1 gap-y-5">
              <label for="base-currency" class="block font-medium text-gray-700 font-gilmer">Base Currency</label>
              <div class="mt-1">
                <select name="base_currency" id="base-currency" v-model="baseCurrency"
                  class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-6 rounded-lg bg-gray-100 border-none font-gilmer w-full">
                  <option selected disabled>Select the currency you own</option>
                  <option :value="currency.value"
                    v-for="(currency, index) in [...supportedCurrencies].filter(x => x.value != targetCurrency)"
                    :key="index">{{ currency.name }}</option>
                </select>
              </div>
            </div>

            <!-- TARGET CURRENCY -->
            <div class="grid grid-cols-1 gap-y-5">
              <label for="target-currency" class="block font-medium text-gray-700 font-gilmer">Target Currency</label>
              <div class="mt-1">
                <select name="target_currency" id="target-currency" v-model="targetCurrency"
                  class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-6 rounded-lg bg-gray-100 border-none font-gilmer w-full">
                  <option selected disabled>Select the currency you want to spend</option>
                  <option :value="currency.value"
                    v-for="(currency, index) in [...supportedCurrencies].filter(x => x.value != baseCurrency)"
                    :key="index">{{ currency.name }}</option>
                </select>
              </div>
            </div>

            <!-- AMOUNT-->
            <div class="grid grid-cols-1 gap-y-5">
              <label for="amount" class="block font-medium text-gray-700 font-gilmer">Amount <span v-if="targetCurrency">({{getCurrencyInformation(targetCurrency).name}})</span></label>
              <div class="mt-1">
                <input type="number" name="amount" id="amount" v-model="amount"
                  class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-6 rounded-lg bg-gray-100 border-none font-gilmer w-full"
                  placeholder="Amount to spend in target currency" />
              </div>
            </div>

            <button type="submit" :disabled="baseCurrency === null || targetCurrency === null || !amount || isFetchingRates"
              class="mx-auto lg:mr-0 lg:ml-auto w-min bg-primary py-6 px-16 text-white drop-shadow-[0px_27.651px_55.302px_rgba(11,4,205,0.29)] rounded-xl disabled:opacity-50 disabled:cursor-not-allowed flex">
              <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none"
                v-if="isFetchingRates" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                </path>
              </svg>
              <span>Calculate</span>
            </button>
          </form>
        </div>
      </section>
    </main>

    <LayoutFooter></LayoutFooter>
  </div>
</template>

<script lang="ts" setup>
import { Motion, Presence } from "@motionone/vue"
import { FxConversionResponse } from "~~/interfaces/fx"
import { v4 } from "uuid"

const baseCurrency = ref(null)
const targetCurrency = ref(null)
const amount = ref(null)
const showRates = ref(false)
const isFetchingRates = ref(false)
const ratesInformation = ref(null as unknown as FxConversionResponse['data'])
const key = ref(v4())

const { data: supportedCurrencies } = await useLazyFetch("/api/fx", {
  default: () => [
    {
      name: 'dollar',
      value: 0
    }
  ]
})

const calculateEchangeRate = async () => {
  isFetchingRates.value = true
  const { data: exchangeRate, pending, refresh } = await useFetch<FxConversionResponse['data']>(`/api/fx`, {
    method: 'POST',
    body: JSON.stringify({
      baseCurrency: parseInt(baseCurrency.value),
      targetCurrency: parseInt(targetCurrency.value),
      amount: parseFloat(amount.value)
    }),
    key: key.value
  })

  if (exchangeRate) {
    console.log(exchangeRate.value)
    ratesInformation.value = exchangeRate.value
    showRates.value = true
  } else {
    alert('something went wrong, please try again')
  }
  isFetchingRates.value = false
}

const getCurrencyInformation = (currencyId: string | number) => {
  return supportedCurrencies.value.find(x => x.value.toString() == currencyId ?? 0)
}

const formatNumber = (number: string) => {
  return parseFloat(number).toLocaleString('en-US', {
    maximumFractionDigits: 0
  })
}

const formatPrecisionNumber = (number: string) => {
  return parseFloat(number).toLocaleString('en-US', {
    maximumFractionDigits: 2,
    minimumFractionDigits: 2
  })
}

const clearFields = () => {
  baseCurrency.value = null
  targetCurrency.value = null
  amount.value = null
  showRates.value = false
  key.value = v4()
}
</script>