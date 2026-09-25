// Components
import Terminal from "./components/terminal"

// Atoms
import Button from "@/ui/atoms/button"
import ScrambleText from "@/ui/atoms/scramble-text"

// Hooks
import { useTranslations } from "@/hooks/useTranslations"

// Utils
import { WebsiteSection } from "@/utils"
import { cn } from "@/utils/cn"

interface Props {
  onRedirect: (_section: WebsiteSection) => void
}

// Fade-up entrance; each element passes its own stagger delay (seconds).
const reveal = "animate-reveal"
const revealDelay = (seconds: number) => ({ animationDelay: `${seconds}s` })

const Hero = ({ onRedirect }: Props) => {
  const { t } = useTranslations("home")
  const [firstName, ...rest] = t("welcome.name").split(" ")
  const lastName = rest.join(" ")

  // The href lets the link work without JS; when JS is available we
  // intercept the click to keep the existing smooth-scroll behaviour.
  const navigateTo =
    (section: WebsiteSection) =>
    (event: React.MouseEvent<HTMLAnchorElement>) => {
      event.preventDefault()
      onRedirect(section)
    }

  return (
    <section
      id="welcome-container"
      className="relative flex items-center w-full max-w-[1200px] mx-auto min-h-screen px-[22px] pt-[118px] pb-16 font-manrope min-[561px]:px-6 min-[561px]:pt-[150px] min-[561px]:pb-[90px] min-[901px]:px-8"
    >
      <div className="grid items-center w-full grid-cols-1 gap-[72px] min-[561px]:gap-12 min-[901px]:grid-cols-[0.9fr_1.1fr] min-[901px]:gap-[60px]">
        <div
          className={cn(
            reveal,
            "flex justify-center order-2 min-[901px]:order-none"
          )}
        >
          <Terminal />
        </div>

        <div className="text-center min-[901px]:text-left">
          <div
            className={cn(
              reveal,
              "inline-flex items-center gap-[10px] px-[14px] py-[7px] mb-10 min-[561px]:mb-[26px] border border-electric/25 rounded-full bg-electric/5"
            )}
            style={revealDelay(0.05)}
          >
            <span
              aria-hidden="true"
              className="w-[7px] h-[7px] rounded-full bg-electric shadow-[0_0_10px_#1ea7ff] animate-pulse-glow"
            />
            <span className="font-mono text-[12px] text-ink-label tracking-[.5px]">
              {t("welcome.status")}
            </span>
          </div>

          <h1
            className={cn(
              reveal,
              "font-grotesk font-bold leading-[1.02] tracking-[-1.5px] mb-6 min-[561px]:mb-[18px] text-[length:clamp(38px,11vw,52px)] min-[561px]:text-[length:clamp(44px,6vw,82px)]"
            )}
            style={revealDelay(0.12)}
          >
            <ScrambleText
              text={firstName}
              className="text-electric"
              delay={240}
            />{" "}
            <ScrambleText text={lastName} className="text-ink" delay={400} />
          </h1>

          <div
            className={cn(
              reveal,
              "flex items-center justify-center gap-[15px] mb-8 min-[561px]:mb-6 min-[901px]:justify-start"
            )}
            style={revealDelay(0.18)}
          >
            <span
              aria-hidden="true"
              className="w-[38px] h-px bg-gradient-to-r from-electric to-electric/20"
            />
            <p className="font-mono text-[14px] tracking-[3.5px] uppercase text-ink-label">
              {t("welcome.job")}
            </p>
          </div>

          <p
            className={cn(
              reveal,
              "text-[17px] leading-[1.7] text-ink-muted max-w-[480px] mx-auto mb-11 min-[561px]:mb-9 min-[901px]:mx-0"
            )}
            style={revealDelay(0.24)}
          >
            {t("welcome.bio")}
          </p>

          <div
            className={cn(
              reveal,
              "flex flex-wrap justify-center gap-4 min-[561px]:gap-[14px] min-[901px]:justify-start"
            )}
            style={revealDelay(0.3)}
          >
            <Button
              href={`#${WebsiteSection.PROJECTS}`}
              onClick={navigateTo(WebsiteSection.PROJECTS)}
            >
              {t("welcome.viewWork")}
            </Button>
            <Button
              href={`#${WebsiteSection.CONTACT}`}
              onClick={navigateTo(WebsiteSection.CONTACT)}
              variant="outline"
            >
              {t("welcome.getInTouch")}
            </Button>
          </div>
        </div>
      </div>

      <div
        aria-hidden="true"
        className="absolute bottom-[34px] left-1/2 -translate-x-1/2 flex-col items-center hidden gap-2 min-[561px]:flex"
      >
        <span className="font-mono text-[10px] tracking-[2px] text-ink-fainter">
          {t("welcome.scroll")}
        </span>
        <div className="flex justify-center w-[22px] h-9 pt-[7px] border-[1.5px] border-[rgba(99,122,152,.45)] rounded-xl">
          <span className="w-[3px] h-[7px] rounded-sm bg-electric animate-scroll-cue" />
        </div>
      </div>
    </section>
  )
}

export default Hero
