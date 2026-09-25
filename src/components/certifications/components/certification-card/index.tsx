// Hooks
import { useTranslations } from "@/hooks/useTranslations"

// Data
import type { Certification } from "@/data/certifications"

// Utils
import trackSpotlight from "@/utils/trackSpotlight"

const HEXAGON = "polygon(50% 0,100% 25%,100% 75%,50% 100%,0 75%,0 25%)"

/**
 * Light glass card (for the section's bright electric-blue background):
 * hexagon badge medallion, "verified" pill, and verify link.
 */
const CertificationCard = ({ code, name, issuer, year, url, image }: Certification) => {
  const { t } = useTranslations("home")

  return (
    <article
      onMouseMove={trackSpotlight}
      className="group relative flex flex-col items-center h-full px-6 pt-[34px] pb-[26px] overflow-hidden text-center rounded-[22px] glass-light transition-[border-color,background,transform] duration-[350ms] hover:-translate-y-1.5"
    >
      <span
        aria-hidden="true"
        className="absolute inset-0 transition-opacity duration-300 opacity-0 pointer-events-none rounded-[22px] mix-blend-soft-light group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(200px circle at var(--mx,50%) var(--my,50%), rgba(255,255,255,.35), transparent 62%)",
        }}
      />

      {/* Hexagon medallion: gradient rim around a dark glass core */}
      <div
        className="relative w-[108px] h-[120px] mb-[22px] animate-float-y [animation-duration:6s]"
        aria-hidden="true"
      >
        <div
          className="absolute inset-0 p-[2.5px] bg-gradient-to-br from-electric to-electric-deep drop-shadow-[0_0_22px_rgba(30,167,255,.3)]"
          style={{ clipPath: HEXAGON }}
        >
          <div
            className="flex flex-col items-center justify-center w-full h-full gap-1"
            style={{
              clipPath: HEXAGON,
              background:
                "linear-gradient(160deg, rgba(40,70,110,.55), rgba(8,14,24,.85))",
            }}
          >
            {image ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={image} alt="" className="object-contain w-16 h-16" />
            ) : (
              <>
                <span className="font-grotesk font-bold text-[24px] tracking-[.5px] text-ink">
                  {code}
                </span>
                <span className="font-mono text-[8px] tracking-[1px] text-ink-faint">
                  [ logo ]
                </span>
              </>
            )}
          </div>
        </div>
      </div>

      <div className="inline-flex items-center gap-1.5 px-[11px] py-1 mb-4 border rounded-full bg-white/40 border-white/70">
        <svg
          aria-hidden="true"
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          className="text-primary-400"
          strokeWidth="3"
        >
          <path d="M20 6 9 17l-5-5" />
        </svg>
        <span className="font-mono text-[10px] tracking-[.5px] text-primary-400">
          {t("certifications.verified")}
        </span>
      </div>

      {/* Always two lines tall (clamped with an ellipsis) so every card's
          details line up; `title` shows the full name when truncated. */}
      <h3
        title={name}
        className="mb-1.5 font-grotesk font-semibold text-[17px] leading-[1.3] min-h-[2.6em] line-clamp-2 text-night"
      >
        {name}
      </h3>
      <p className="mb-1 text-[13px] text-night/70">{issuer}</p>
      <p className="mb-[18px] font-mono text-[11px] text-night/60">
        {t("certifications.issued", { year })}
      </p>

      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={t("certifications.verifyLabel", {
          name,
          interpolation: { escapeValue: false },
        }) as string}
        className="relative z-[1] inline-flex items-center gap-1.5 mt-auto text-[13px] font-semibold text-primary-400 transition-[gap] duration-[250ms] hover:gap-2.5"
      >
        {t("certifications.verify")}
        <svg
          aria-hidden="true"
          width="13"
          height="13"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
        >
          <path d="M7 17 17 7M9 7h8v8" />
        </svg>
      </a>
    </article>
  )
}

export default CertificationCard
