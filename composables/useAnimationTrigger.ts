import { IntersectionObserverOptions, useIntersectionObserver } from "@vueuse/core"
import { Ref } from "vue"

export const useAnimationTrigger = (
  targetSection: Ref<HTMLElement>,
  animationCallback: () => void,
  options?: IntersectionObserverOptions
) => {
  const targetIsInView = ref(false)
  const { stop } = useIntersectionObserver(targetSection, ([{ isIntersecting }], observerElement) => {
    if (!targetIsInView.value && isIntersecting) {
      targetIsInView.value = true
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