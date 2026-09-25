// Components
import CertificationCard from "./components/certification-card"

// Hooks
import { useTranslations } from "@/hooks/useTranslations"

// Data
import { certifications } from "@/data/certifications"

// Atoms
import Reveal from "@/ui/atoms/reveal"

// Molecules
import SectionHeader from "@/ui/molecules/section-header"

// Utils
import { WebsiteSection, sectionContainer, sectionNumber } from "@/utils"

const Certifications = () => {
  const { t } = useTranslations("home")

  return (
    <section
      id={WebsiteSection.EXPERIENCE}
      aria-labelledby="experience-title"
      className="relative w-full my-12 min-[561px]:my-20 py-16 min-[561px]:py-[90px] font-manrope scroll-mt-24 bg-gradient-to-bl from-primary-100 via-primary-100 to-primary-200"
    >
      <div className={sectionContainer}>
        <SectionHeader
          index={sectionNumber(WebsiteSection.EXPERIENCE)}
          label={t("sections.skills")}
          title={t("certifications.title")}
          titleId="experience-title"
          description={t("certifications.description")}
          tone="onAccent"
        />
        <ul className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-7">
          {certifications.map((certification, index) => (
            <li key={certification.code}>
              <Reveal delay={index * 0.08} className="h-full">
                <CertificationCard {...certification} />
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Certifications
