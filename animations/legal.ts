import { animate, timeline, stagger } from "motion"
import { Ref } from "@/types"

export const heroSectionAnimation = (
  sectionTitle: Ref<HTMLElement>,
  sectionContent: Ref<HTMLElement>
) => {
  timeline([
    [sectionTitle.value, { opacity: [0, 1], y: [50, 0] }, { duration: 0.8, easing: "ease-out" }],
    [sectionContent.value, { opacity: [0, 1], y: [50, 0] }, { duration: 0.5, easing: "ease-out", at: 0.5 }],
  ])
}