import { IntersectionObserverOptions, useIntersectionObserver } from "@vueuse/core"
import { Ref } from "vue"

export const useAnimationTrigger = (
  targetSection: Ref<HTMLElement>,
  animationCallback: () => void,
  options?: IntersectionObserverOptions
) => {
  const targetIsInView = ref(false)
  
  if (targetSection.value) targetSection.value.hidden = true
  const { stop } = useIntersectionObserver(targetSection, ([{ isIntersecting }], observerElement) => {
    if (!targetIsInView.value && isIntersecting) {
      targetIsInView.value = true
      targetSection.value.hidden = false
      animationCallback()
    }
  }, {
    threshold: 0.2,
    ...options
  })

  return {
    stop
  }
}