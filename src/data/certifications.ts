// Utils
import { externalLinks } from "@/config/site"

export interface Certification {
  /** Short code shown in the medallion when there's no badge image. */
  code: string
  name: string
  issuer: string
  year: number
  /** Public credential URL for the "Verify" link. */
  url: string
  /** Badge image path (e.g. `/images/certifications/aws.png`). */
  image?: string
}

/**
 * PLACEHOLDERS from the design handoff: replace with the real
 * certifications, years, badge images and credential URLs before shipping.
 * Until then "Verify" points to the Credly profile.
 */
export const certifications: Certification[] = [
  {
    code: "AWS",
    name: "Solutions Architect – Associate",
    issuer: "Amazon Web Services",
    year: 2024,
    url: externalLinks.credly,
  },
  {
    code: "CKA",
    name: "Certified Kubernetes Administrator",
    issuer: "The Linux Foundation / CNCF",
    year: 2024,
    url: externalLinks.credly,
  },
  {
    code: "TF",
    name: "Terraform Associate (003)",
    issuer: "HashiCorp",
    year: 2023,
    url: externalLinks.credly,
  },
  {
    code: "DCA",
    name: "Docker Certified Associate",
    issuer: "Docker, Inc.",
    year: 2023,
    url: externalLinks.credly,
  },
]
