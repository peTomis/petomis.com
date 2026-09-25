// Hooks
import { useTranslations } from "@/hooks/useTranslations"

// Organisms

// Components
import LogoIcon from "@/ui/logo/logoIcon"
import LanguageSelector from "./components/language-selector"

// Utils
import { sectionContainer } from "@/utils"
import { cn } from "@/utils/cn"

const Footer = () => {
  const { t } = useTranslations("common")
  const currentYear = new Date().getFullYear()

  return (
    <footer
      id="footer-container"
      className="w-full border-t border-white/[.07]"
    >
      <div className="w-full">
        <div
          className={cn(
            sectionContainer,
            "flex flex-col items-center justify-between gap-4 py-4 min-[561px]:flex-row"
          )}
        >
          <p className="inline-flex flex-wrap items-center justify-center gap-x-2 font-mono text-[12px] text-ink-faint">
            <span>© {currentYear}</span>
            <LogoIcon width={16} height={16} />
            <span>Giuseppe Tomis — {t("footer.builtWith")}</span>
          </p>
          <LanguageSelector />
        </div>
      </div>
    </footer>
  )
}

export default Footer
