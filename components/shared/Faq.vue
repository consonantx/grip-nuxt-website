<template>
  <div class="flex flex-col">
    <div class="" v-for="(question, index) in allQuestions" :key="index">
      <div :class="[
        'flex flex-col space-y-2 pb-3',
        { 'border-b border-gray-300': index !== allQuestions.length - 1 },
      ]">
        <button class="flex justify-between items-center pt-6 pb-2"
          @click="activeQuestion !== index ? activeQuestion = index : activeQuestion = null">
          <h3 class="font-title font-black lg:text-xl text-left pr-8">{{ question.question }}</h3>
          <div class="p-1 border border-black rounded-full">
            <transition mode="out-in" appear-active-class="transition-all duration-200 ease-in" appear-class="scale-0"
              appear-to-class="scale-100" leave-active-class="transition-all duration-200 ease-in"
              leave-class="scale-100" leave-to-class="scale-0">
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
</template>

<script lang="ts" setup>
import Faq from "~/data/faqQuestions"
import { MinusSmIcon, ChevronDownIcon } from "@heroicons/vue/solid"

const props = defineProps<{
  filterByFeatured: boolean
}>()

const allQuestions = computed(() => props.filterByFeatured ? Faq.filter(x => x.isFeatured) : Faq)
const activeQuestion = ref(null)
</script>