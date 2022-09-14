<template>
  <div class="scroll-smooth bg-black min-h-screen w-full">

    <Head>
      <Meta property="og:title" name="og:title" content="One Channel, All Payments Everything" />
      <Meta property="title" name="title" content="One Channel, All Payments Everything" />
      <Meta property="og:site_name" name="og:site_name" content="Grip" />
      <Meta property="site_name" name="site_name" content="Grip" />
      <Meta property="og:url" name="og:url" content="https://trygrip.co" />
      <Meta property="og:description" name="og:description"
        content="Access, manage and pay from all your bank accounts and fintech wallets, anywhere in the world, with one global card and one super app." />
      <Meta property="og:description" name="description"
        content="Access, manage and pay from all your bank accounts and fintech wallets, anywhere in the world, with one global card and one super app." />
      <Meta property="og:type" name="og:type" content="website" />
      <Meta property="type" name="type" content="website" />
      <Meta property="og:image" name="og:image" content="https://trygrip.co/og_image.png" />
      <Meta name="image" content="https://trygrip.co/og_image.png" />
      <Meta name="twitter:card" content="summary_large_image" />
      <Meta name="twitter:creator" content="@trygripapp" />
      <Meta name="twitter:title" content="One Channel, All Payments Everything" />
      <Meta name="twitter:description"
        content="Access, manage and pay from all your bank accounts and fintech wallets, anywhere in the world, with one global card and one super app." />
      <Meta name="twitter:image" content="https://trygrip.co/og_image.png" />
      <Script children="!function(e,t,n,s,u,a){e.twq||(s=e.twq=function(){s.exe?s.exe.apply(s,arguments):s.queue.push(arguments);
        },s.version='1.1',s.queue=[],u=t.createElement(n),u.async=!0,u.src='https://static.ads-twitter.com/uwt.js',
        a=t.getElementsByTagName(n)[0],a.parentNode.insertBefore(u,a))}(window,document,'script');
        twq('config','oc27m');"/>
    </Head>
    <!-- TODO: add loader back -->
    <SharedLoader @is-completed="() => showPage = true"></SharedLoader>
    <NuxtPage v-if="showPage" />
  </div>
</template>

<script lang="ts" setup>
import './assets/scss/main.scss'
const showPage = ref(false)
</script>
