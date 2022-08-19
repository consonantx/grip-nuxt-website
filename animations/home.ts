import { animate, timeline, stagger } from "motion"
import { Ref } from "~~/interfaces"

export const reasonSectionAnimation = (
  sectionTitle: Ref<HTMLElement>,
  mainText: Ref<HTMLElement>,
  steps: Ref<HTMLElement>
) => {
  timeline([
    [sectionTitle.value, { opacity: [0, 1], y: [50, 0] }, { duration: 0.70, easing: [0.26, 0.6, 0.35, 1], allowWebkitAcceleration: true }],
    [mainText.value, { opacity: [0, 1], y: [50, 0] }, { duration: 0.70, easing: [0.26, 0.6, 0.35, 1], at: 0.3, allowWebkitAcceleration: true }],
    // @ts-ignoreallowWebkitAcceleration: true
    [steps.value.children, { opacity: [0, 1], y: [50, 0] }, { duration: 0.70, delay: stagger(0.19), easing: [0.26, 0.6, 0.35, 1], at: 0.4,  }],
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
    delay: stagger(0.25), allowWebkitAcceleration: true
  })
}

export const faqSectionAnimation = (
  sectionTitle: Ref<HTMLElement>,
) => {
  timeline([
    [sectionTitle.value, { opacity: [0, 1], y: [50, 0] }, { duration: 0.6, easing: "ease-out", allowWebkitAcceleration: true }],
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
    [titleLineOne.value, { transform: ["translateY(100%)", "translateY(0%)"], opacity: [0, 1] }, { duration: 0.5, easing: [0.26, 0.6, 0.35, 1], allowWebkitAcceleration: true }],
    [titleLineTwo.value, { transform: ["translateY(100%)", "translateY(0%)"], opacity: [0, 1] }, { duration: 0.7, easing: [0.26, 0.6, 0.35, 1], at: 0.2, allowWebkitAcceleration: true }],
    [subTitleLine.value, { transform: ["translateX(-100%)", "translateX(0%)"] }, { duration: 0.6, easing: [0.26, 0.6, 0.35, 1], at: 0.5, allowWebkitAcceleration: true }],
    [sectionCover.value, { transform: ["translateY(100%)", "translateY(0%)"] }, { duration: 0.3, easing: [0.26, 0.6, 0.35, 1], at:0.1}],
    [subTitle.value, { y: [50, 0], opacity: [0, 1] }, { duration: 0.5, easing: [0.26, 0.6, 0.35, 1], at: 1, allowWebkitAcceleration: true }],
  ])
}