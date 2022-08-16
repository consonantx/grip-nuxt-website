<template>
  <div class="bg-light">

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

    <main class="flex flex-col relative">
      <!-- HERO SECTION -->
      <section class="pt-10 pb-36 relative" id="hero">
        <div class="container flex flex-col-reverse lg:grid grid-cols-2 gap-x-32 items-center">
          <div class="flex flex-col space-y-6 mt-16 lg:mt-0 text-center lg:text-left">
            <h1 class="font-title font-black text-3xl lg:text-5xl">Compare Foreign Exchange Charges With Other Providers
            </h1>
            <p class="font-gilmer lg:text-xl">
              You can now compate the rates we charge for international transactions on Grip with rates
              offered by other providers.
            </p>
            <div class="font-gilmer mt-5 lg:text-xl">
              <p>Please note that additional charges may apply:</p>
              <ul class="list-disc list-inside mt-2">
                <li class="list-item">Rates vary depending on your subscription tier and how much of your spending limit
                  has been utilized.</li>
                <li class="list-item">Transaction fees may also apply.</li>
              </ul>
            </div>
          </div>

          <form class="grid grid-cols-1 gap-y-11">
            <!-- BASE CURRENCY -->
            <div class="grid grid-cols-1 gap-y-5">
              <label for="base-currency" class="block font-medium text-gray-700 font-gilmer">Base Currency</label>
              <div class="mt-1">
                <select type="email" name="base_currency" id="base-currency"
                  class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-6 rounded-lg bg-gray-100 border-none font-gilmer w-full"
                  placeholder="you@example.com">
                  <option>United States</option>
                  <option selected>Canada</option>
                  <option>Mexico</option>
                </select>
              </div>
            </div>

            <!-- TARGET CURRENCY -->
            <div class="grid grid-cols-1 gap-y-5">
              <label for="target-currency" class="block font-medium text-gray-700 font-gilmer">Target Currency</label>
              <div class="mt-1">
                <select type="email" name="target_currency" id="target-currency"
                  class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-6 rounded-lg bg-gray-100 border-none font-gilmer w-full"
                  placeholder="you@example.com">
                  <option>United States</option>
                  <option selected>Canada</option>
                  <option>Mexico</option>
                </select>
              </div>
            </div>

            <!-- AMOUNT-->
            <div class="grid grid-cols-1 gap-y-5">
              <label for="amount" class="block font-medium text-gray-700 font-gilmer">Amount</label>
              <div class="mt-1">
                <input type="number" name="amount" id="amount"
                  class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-6 rounded-lg bg-gray-100 border-none font-gilmer w-full"
                  placeholder="you@example.com" />
              </div>
            </div>

            <button
              class="ml-auto w-min bg-primary py-6 px-16 text-white drop-shadow-[0px_27.651px_55.302px_rgba(11,4,205,0.29)] rounded-xl">Calculate</button>
          </form>
        </div>
      </section>
    </main>

    <LayoutFooter></LayoutFooter>
  </div>
</template>

<script lang="ts" setup>

</script>