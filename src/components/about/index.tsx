// Components
import StatCard from "./components/stat-card"

// Hooks
import { useTranslations } from "@/hooks/useTranslations"

// Data
import { aboutStats } from "@/data/about"

// Atoms
import Reveal from "@/ui/atoms/reveal"

// Molecules
import SectionHeader from "@/ui/molecules/section-header"

// Utils
import { WebsiteSection, sectionContainer, sectionNumber } from "@/utils"
import { cn } from "@/utils/cn"

const About = () => {
  const { t } = useTranslations("home")

  return (
    <section
      id={WebsiteSection.ABOUT}
      aria-labelledby="about-title"
      className={cn(
        sectionContainer,
        "relative py-16 min-[561px]:py-[90px] font-manrope scroll-mt-24"
      )}
    >
      <SectionHeader
        index={sectionNumber(WebsiteSection.ABOUT)}
        label={t("sections.about")}
      />
      <div className="grid items-start grid-cols-1 gap-10 min-[901px]:grid-cols-[1.4fr_1fr] min-[901px]:gap-[60px]">
        <Reveal delay={0.08}>
          <h2
            id="about-title"
            className="mb-6 font-grotesk font-semibold text-ink text-[length:clamp(28px,3.4vw,40px)] leading-[1.2] tracking-[-1px]"
          >
            {t("about.titleStart")}{" "}
            <span className="text-electric">{t("about.titleAccent")}</span>.
          </h2>
          <p className="mb-[18px] text-[16px] leading-[1.8] text-ink-muted">
            {t("about.p1")}
          </p>
          <p className="text-[16px] leading-[1.8] text-ink-muted">
            {t("about.p2")}
          </p>
        </Reveal>
        <Reveal
          delay={0.16}
          className="grid grid-cols-2 gap-3 min-[561px]:gap-4"
        >
          {aboutStats.map(({ value, suffix, labelKey }) => (
            <StatCard
              key={labelKey}
              value={value}
              suffix={suffix}
              label={t(`about.stats.${labelKey}`)}
            />
          ))}
        </Reveal>
      </div>
    </section>
  )
}

export default About
