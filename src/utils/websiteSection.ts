/**
 * DOM `id` anchors for the page sections that can be scrolled to.
 * Each value must match the `id` attribute rendered by the corresponding section.
 */
export const WebsiteSection = {
  EXPERIENCE: "experience-container",
  PROJECTS: "projects-container",
  CONTACT: "contact-container",
} as const

export type WebsiteSection = (typeof WebsiteSection)[keyof typeof WebsiteSection]
