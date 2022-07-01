import { timeline, stagger } from "motion"
import { Ref } from "~~/interfaces"

export const heroSectionAnimation = (
  sectionTitle: Ref<HTMLElement>,
  sectionContent: Ref<HTMLElement>
) => {
  timeline([
    [sectionTitle.value, { opacity: [0, 1], y: [50, 0] }, { duration: 0.8, easing: "ease-out", allowWebkitAcceleration: true }],
    [sectionContent.value, { opacity: [0, 1], y: [50, 0] }, { duration: 0.5, easing: "ease-out", at: 0.5, allowWebkitAcceleration: true }],
  ])
}