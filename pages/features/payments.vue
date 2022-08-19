<template>
  <div class="bg-dark">

    <Head>
      <Title>Everything Payments | Grip - One Card, All Payments Everything</Title>
      <Meta name="description"
        content="Consolidate all your existing ways of making payments into a single channel with grip. The best way to get a grip of your finances" />
      <Link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
      <Link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
      <Link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
      <Link rel="manifest" href="/favicon/site.webmanifest" />
    </Head>

    <LayoutHeader></LayoutHeader>
    <LayoutNavbar></LayoutNavbar>

    <main class="flex flex-col relative">
      <!-- HERO SECTION -->
      <FeaturesHero title-line-one="Unifying All The" title-line-two="Ways You Spend"
        image-one="/home/features/cash_wallet.png" image-two="/home/features/offline_store.png"
        image-three="/home/features/pos.png" image-four="/home/features/entertainment.png">
        Grip is the easiest way to spend, save and manage your daily spending and finances across all your financial
        mediums. Spend online and offline in 200+ countries, while managing your finances seamlessly.
      </FeaturesHero>

      <section class="pt-16 bg-white relative">
        <div class="container flex flex-col">
          <div
            class="text-sm lg:text-lg text-primary font-gilmer uppercase border-2 border-[#e3e3e3] rounded-full tracking-widest px-4 lg:px-6 py-4 leading-none w-max mx-auto">
            features <span class="drop-shadow-lg ml-2">🚀</span>
          </div>
        </div>

        <FeaturesFeatureItem title="Grip Physical & Virtual Cards"
          image-url="https://res.cloudinary.com/consonantafrica/image/upload/q_70/v1660934840/website/features/cards_fszsoa.webp"
          action="/features/cards">
          The ideal companion to the Grip app! Get a free virtual card for online payments and Chose one of multiple
          Grip physical card designs we offer that best suits your taste and finance needs. Spend online, in Africa or
          Globally in 200+ countries while taking advantage of all your accounts and fintech wallets with just one card.
          Click here to learn more.
        </FeaturesFeatureItem>

        <FeaturesFeatureItem title="Fallback"
          image-url="https://res.cloudinary.com/consonantafrica/image/upload/q_70/v1660934845/website/features/fallback_prnzvg.webp"
          :is-inverse="true" action="/features/fallback">
          Did someone say declined? If you have multiple cards/wallets linked to Grip, you could set fallbacks so when
          you primary card/wallet fails, we automatically charge the fallback cards and eliminate awkward moments. click
          here to find out more
        </FeaturesFeatureItem>

        <FeaturesFeatureItem title="Transaction Pooling"
          image-url="https://res.cloudinary.com/consonantafrica/image/upload/q_70/v1660934849/website/features/pooling_ipnn0c.webp">
          “Hello John? Yes i’m about to make the transfer, i just have to move the money from…” we literally have all
          been John at some point in our lives, but not anymore. Have money split across various accounts? Pool them all
          together in one transaction!
        </FeaturesFeatureItem>

        <FeaturesFeatureItem title="Bill Payments"
          image-url="https://res.cloudinary.com/consonantafrica/image/upload/q_70/v1660934848/website/features/bill_payments_z8dcwn.webp"
          :is-inverse="true">
          Pay all your local and international bills from the same place you spend and manage, enjoy a truly unified
          financial experience that only we can offer.
        </FeaturesFeatureItem>

      </section>
    </main>

    <LayoutFooter></LayoutFooter>
  </div>
</template>