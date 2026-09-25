/**
 * DOM `id` anchors for the page sections that can be scrolled to.
 * Each value must match the `id` attribute rendered by the corresponding section.
 */
export const WebsiteSection = {
  ABOUT: "about-container",
  EXPERIENCE: "experience-container",
  PROJECTS: "projects-container",
  CONTACT: "contact-container",
} as const

export type WebsiteSection = (typeof WebsiteSection)[keyof typeof WebsiteSection]

/**
 * Numbered sections in page order; drives the "01 / about" section labels
 * and the top bar's section links.
 */
export const NUMBERED_SECTIONS: WebsiteSection[] = [
  WebsiteSection.ABOUT,
  WebsiteSection.PROJECTS,
  WebsiteSection.CONTACT,
]

export const sectionNumber = (section: WebsiteSection) =>
  NUMBERED_SECTIONS.indexOf(section) + 1

/** Shared centered column for page sections (matches the hero). */
export const sectionContainer =
  "w-full max-w-[1200px] mx-auto px-[22px] min-[561px]:px-6 min-[901px]:px-8"
