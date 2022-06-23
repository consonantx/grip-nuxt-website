import { animate, timeline, stagger } from "motion"
import { Ref } from "vue"

export const reasonSectionAnimation = (
  sectionTitle: Ref<HTMLElement>,
  mainText: Ref<HTMLElement>,
  steps: Ref<HTMLElement>
) => {
  timeline([
    [sectionTitle.value, { opacity: [0, 1], y: [ 50, 0 ] }, { duration: 0.75 }],
    [mainText.value, { opacity: [0, 1], y: [50, 0] }, { duration: 0.75, at: 0.5 }],
    // @ts-ignore
    [steps.value.children, { opacity: [0, 1], y: [ 50, 0 ] }, { duration: 0.75, delay: stagger(0.25), at: 1 }],
  ], {})
}

export const cardSectionAnimation = (
  sectionTitles: Ref<HTMLElement>,
) => {
  // @ts-ignore
  animate(sectionTitles.value.children, {
    opacity: [0, 1],
    y: [50, 0]
  }, {
    duration: 0.75,
    delay: stagger(0.25)
  })
}

export const faqSectionAnimation = (
  sectionTitle: Ref<HTMLElement>,
) => {
  timeline([
    [sectionTitle.value, { opacity: [0, 1], y: [50, 0] }, { duration: 0.8, easing: "ease-out" }],
  ])
}

export const heroSectionAnimation = (
  titleLineOne: Ref<HTMLElement>,
  titleLineTwo: Ref<HTMLElement>,
  sectionCover: Ref<HTMLElement>,
  subTitleLine: Ref<HTMLElement>,
  subTitle: Ref<HTMLElement>
) => {
  timeline([
    [titleLineOne.value, { transform: ["translateY(100%)", "translateY(0%)"], }, { duration: 1, easing: [0.42, 0, 1, 1], delay: 0.5 }],
    [titleLineTwo.value, { transform: ["translateY(100%)", "translateY(0%)"], opacity: [0, 1] }, { duration: 0.75, easing: [0.42, 0, 1, 1], at: 1 }],
    [subTitleLine.value, { transform: ["translateX(-100%)", "translateX(0%)"] }, { duration: 1, easing: [0.42, 0, 1, 1], at: 1 }],
    [sectionCover.value, { transform: ["translateX(0%)", "translateX(100%)"] }, { duration: 1, easing: [0.2, 0.6, 0.35, 1], at: 1.2 }],
    [subTitle.value, { y: [50, 0], opacity: [0, 1] }, { duration: 0.5, easing: [0.42, 0, 1, 1], at: 1 }],
  ])
}