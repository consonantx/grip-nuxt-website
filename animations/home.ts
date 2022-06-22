import { animate, timeline, stagger } from "motion"
import { Ref } from "vue"

export const reasonSectionAnimation = (
  sectionTitle: Ref<HTMLElement>,
  mainText: Ref<HTMLElement>,
  steps: Ref<HTMLElement>
) => {
  timeline([
    [sectionTitle.value, { opacity: [0, 1], y: [ 50, 0 ] }, { duration: 0.8, easing: "ease-out" }],
    [mainText.value, { opacity: [0, 1], y: [ 50, 0 ] }, { duration: 0.8, easing: "ease-out" }],
    [steps.value.children, { opacity: [0, 1], y: [ 50, 0 ] }, { duration: 0.8, easing: "ease-out", delay: stagger(0.25) }],
  ], {})
}