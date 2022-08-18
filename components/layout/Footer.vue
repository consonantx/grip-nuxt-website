<template>
  <footer id="footer" class="bg-[#000000] relative pt-28">
    <LayoutPreFooter></LayoutPreFooter>
    <div class="bg-white pt-20 overflow-hidden -mt-40 relative z-[2] text-[#000000] ml-5 md:ml-16">
      <div class="container grid md:grid-cols-10 gap-y-20">
        <div class="md:col-span-3 flex flex-col space-y-9">
          <h2 class="text-5xl font-title">One Debit Card. <span class="text-secondary">No BS</span></h2>
          <NuxtLink href="mailto:hello@trygrip.co" class="font-gilmer text-xl underline text-primary font-semibold">hello@trygrip.co</NuxtLink>
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
        <div class="md:col-span-7 grid gap-y-10 grid-cols-2 lg:grid-cols-4 md:ml-20">
          <div class="flex flex-col space-y-4">
            <h3 class="text-gray-400 font-gilmer text-sm font-semibold mb-2">Features</h3>
            <NuxtLink to="/features/payments" class="font-gilmer text-sm">Payments</NuxtLink>
            <NuxtLink to="/features/security" class="font-gilmer text-sm">Security</NuxtLink>

            <!-- <NuxtLink to="/features/fallback" class="font-gilmer text-sm">Fallback</NuxtLink>
            <NuxtLink to="/features/lockdown" class="font-gilmer text-sm">Lockdown</NuxtLink>
            <NuxtLink to="/features/transaction-pooling" class="font-gilmer text-sm">Transaction Pooling</NuxtLink>
            <NuxtLink to="/features/cards" class="font-gilmer text-sm">Dollar Cards</NuxtLink> -->
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
            <NuxtLink href="https://gripco.statuspage.io" target="__blank" class="font-gilmer text-sm">Status Page
            </NuxtLink>
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
        <p class="font-gilmer text-sm ml-5 md:ml-0">&copy; {{ new Date().getFullYear() }} Consonant Technologies
          Ltd,
          All Rights Reserved.</p>
        <img src="/common/footer/footer_bg.png" class="absolute hidden lg:block lg:h-[150%] bottom-0 right-0" alt="">
      </div>
    </div>
  </footer>
</template>