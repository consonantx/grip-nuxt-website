<template>
  <section class="container pb-24" ref="targetSection" :key="Date.now()">
    <div class="container flex flex-col">
      <div class="flex flex-col space-y-4 mb-10 text-center" ref="sectionTitleRef">
        <h1 class="font-title font-black text-3xl uppercase">
          <slot name="title">
            Legal
          </slot>
        </h1>
      </div>

      <div ref="sectionContentRef">
        <ClientOnly>
          <VueMarkdown :source="props.markdownContent" ></VueMarkdown>
        </ClientOnly>
      </div>
    </div>

  </section>
</template>

<script lang="ts" setup>
import VueMarkdown from "vue-markdown-render"
import { heroSectionAnimation } from "@/animations/legal"

const sectionTitleRef = ref<HTMLElement>(null)
const targetSection = ref<HTMLElement>(null)
const sectionContentRef = ref<HTMLElement>(null)

useAnimationTrigger(targetSection, () => heroSectionAnimation(sectionTitleRef, sectionContentRef))

const props = defineProps<{
  markdownContent: string
}>()
</script>

<style lang="scss" scoped>
>>>*:not(h1, h2) {
  font-family: 'Gilmer' !important;
}

>>>h2 {
  font-family: 'Neue Machina' !important;
  font-weight: bold;
  margin-bottom: 24px;
  margin-top: 24px;
}

>>>p,
>>>li,
>>>h2 {
  font-size: 24px;
}

>>>ol,
>>>ul {
  list-style: disc;
  padding-left: 40px;

  &>>>li {
    line-height: 40px;
  }
}

>>> hr {
  margin-top: 20px;
  margin-bottom: 20px;
}
</style>