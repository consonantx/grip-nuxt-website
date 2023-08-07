import { UseIntersectionObserverOptions, useIntersectionObserver } from "@vueuse/core"
import { Ref } from "~~/interfaces"

export const useAnimationTrigger = (
  targetSection: Ref<HTMLElement | null>,
  animationCallback: () => void,
  options?: UseIntersectionObserverOptions
) => {
  const targetIsInView = ref(false)
  
  if (targetSection.value) targetSection.value.hidden = true
  // @ts-ignore
  const { stop } = useIntersectionObserver(targetSection, ([{ isIntersecting }], observerElement) => {
    if (!targetIsInView.value && isIntersecting && targetSection.value) {
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