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
      <FeaturesHero title-line-one="Security First," title-line-two="Last & Always."
        image-one="/home/features/insurance.png" image-two="/home/features/cash_chest_white.png"
        image-three="/home/features/cash_chest_blue.png" image-four="/home/features/cash_wallet.png">
        Grip is the technological embodiment of user security. We put your security front and center and make sure you
        can go about your daily financial activities knowing we’ve got your back a 100%.
      </FeaturesHero>

      <section class="py-16 bg-white relative">
        <div class="container flex flex-col">
          <div
            class="text-sm lg:text-lg text-primary font-gilmer uppercase border-2 border-[#e3e3e3] rounded-full tracking-widest px-4 lg:px-6 py-4 leading-none w-max mx-auto">
            features <span class="drop-shadow-lg ml-2">🚀</span>
          </div>
        </div>

        <FeaturesFeatureItem title="Spending Limits You'd Love"
          image-url="https://res.cloudinary.com/consonantafrica/image/upload/q_70/v1660934853/website/features/spending_limits_mgih8p.webp">
          Get complete control over your spending, set how much you’d like to spend on your physical cards and virtual
          cards, set how frequently you want these limit to be applied (daily, weekly, monthly) and watch Grip kick in
          and handle the rest.
        </FeaturesFeatureItem>

        <FeaturesFeatureItem title="Own every bit of your cards"
          image-url="https://res.cloudinary.com/consonantafrica/image/upload/q_70/v1660934852/website/features/own_it_cc7ok0.webp"
          :is-inverse="true">
          Get complete control over your spending, set how much you’d like to spend on your physical cards and virtual
          cards, set how frequently you want these limit to be applied (daily, weekly, monthly) and watch Grip kick in
          and handle the rest.
        </FeaturesFeatureItem>

        <FeaturesFeatureItem title="Lockdown"
          image-url="https://res.cloudinary.com/consonantafrica/image/upload/q_70/v1660934847/website/features/lockdown_ieccte.webp"
          action="/features/lockdown">
          The holy grail of security, at your finger tips. Lockdown is a first-of-it’s-kind revolutionary approach to
          ensuring user financial security that you wouldn’t find anywhere else (Go ahead, look, we’re waiting 😄 ).
          Click here to find out more.
        </FeaturesFeatureItem>

      </section>
    </main>

    <LayoutFooter></LayoutFooter>
  </div>
</template>