// External libraries
import Image from "next/image"

// Hooks
import { useTranslations } from "@/hooks/useTranslations"
import type { Project } from "@/hooks/useProjects"

// Icons
import GitHub from "@/ui/icons/social/github"

// Utils
import trackSpotlight from "@/utils/trackSpotlight"
import { cn } from "@/utils/cn"

const MAX_TOOLS = 5

interface Props {
  project: Project
  /** 1-based position, shown as "01" in the media corner. */
  index: number
  onOpenDetails: () => void
}

// Small frosted label over the media area (index, "Employee").
const mediaLabel =
  "absolute top-3.5 px-2.5 py-1 rounded-full font-mono text-[11px] text-white bg-night/40 border border-white/20 backdrop-blur-md"

/**
 * Glass project card on a full-bleed brand background (colour + faded
 * background image). The logo sits on the brand colour at the top; below it
 * a dark gradient keeps the name, description, tool chips, collaborators and
 * links readable. Jobs (`employee`) also get a "Details" button that opens
 * the details modal.
 */
const ProjectCard = ({ project, index, onOpenDetails }: Props) => {
  const { t } = useTranslations("home")
  const { t: tJobs } = useTranslations("jobs")
  const {
    name,
    title,
    logo,
    description,
    color,
    background,
    website,
    employee,
  } = project
  const tools = project.tools ?? []
  const hiddenTools = tools.length - MAX_TOOLS

  return (
    <article
      onMouseMove={trackSpotlight}
      className={cn(
        "group relative isolate flex flex-col h-full overflow-hidden rounded-[22px] glass font-manrope transition-[border-color,transform] duration-[350ms] hover:border-electric/40 hover:-translate-y-1.5",
        color
      )}
    >
      {/* Background layers get their own rounded clip, inset inside the
          border: the zoomed image would otherwise escape the card's rounded
          corners while animating (square flash) and paint over the border.
          The mask forces the browser to honour the radius on the transform. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 overflow-hidden rounded-[21px] [-webkit-mask-image:-webkit-radial-gradient(white,black)]"
      >
        <Image
          src={background}
          alt=""
          fill
          sizes="(max-width: 900px) 100vw, 400px"
          className="object-cover opacity-25 transition-transform duration-500 group-hover:scale-105"
        />
        {/* Brand colour under the logo, fading to near-black behind the text */}
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_0,transparent_125px,rgba(6,10,18,.82)_210px,rgba(6,10,18,.92)_100%)]" />
      </div>
      <div className="relative h-[190px]">
        <div className="absolute inset-0 flex items-center justify-center px-8">
          {logo ?? title}
        </div>
        <span aria-hidden="true" className={cn(mediaLabel, "left-3.5")}>
          {String(index).padStart(2, "0")}
        </span>
        {employee && (
          <span className={cn(mediaLabel, "right-3.5")}>
            {tJobs("projects.employeeTag")}
          </span>
        )}
      </div>

      <div className="flex flex-col flex-1 p-6">
        <h3 className="mb-2.5 font-grotesk font-semibold text-[20px] text-ink">
          {name}
        </h3>
        {project.role && (
          <p className="mb-3 flex flex-wrap items-baseline gap-x-2 gap-y-1 text-[13px] leading-relaxed text-ink-label">
            <span className="font-semibold">{project.role}</span>
            {project.period && (
              <span><span aria-hidden="true">· </span>{project.period}</span>
            )}
          </p>
        )}
        <p className="mb-[18px] text-[14px] leading-[1.65] text-ink-muted">
          {description}
        </p>

        {/* Pinned to the bottom so chips and links line up across cards
            whatever the description length; spare space goes above them. */}
        <div className="mt-auto">
          {tools.length > 0 && (
            <ul className="flex flex-wrap gap-2 mb-5">
              {tools.slice(0, MAX_TOOLS).map((tool) => (
                <li
                  key={tool.name}
                  className="px-2.5 py-1 font-mono text-[11px] text-ink-label border border-white/[.12] rounded-full bg-white/5 shadow-[inset_0_1px_0_rgba(255,255,255,.1)]"
                >
                  {tool.name}
                </li>
              ))}
              {hiddenTools > 0 && (
                <li className="px-2.5 py-1 font-mono text-[11px] text-ink-faint">
                  {t("projects.moreTools", { count: hiddenTools })}
                </li>
              )}
            </ul>
          )}

          {project.collaborators.length > 0 && (
            <p className="flex flex-wrap items-center gap-2 mb-5 text-[13px] text-ink-muted">
              {t("projects.with")}
              {project.collaborators.map((collaborator) => (
                <a
                  key={collaborator.url}
                  href={collaborator.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative z-[1] inline-flex items-center gap-1.5 font-semibold text-ink transition-colors duration-[250ms] hover:text-electric"
                >
                  <span className="w-4 h-4 fill-current">
                    <GitHub />
                  </span>
                  {collaborator.name}
                </a>
              ))}
            </p>
          )}

          <div className="relative z-[1] flex gap-[18px]">
            {employee && (
              <button
                type="button"
                onClick={onOpenDetails}
                aria-label={
                  t("projects.detailsLabel", {
                    name,
                    interpolation: { escapeValue: false },
                  }) as string
                }
                className="inline-flex items-center gap-[7px] text-[13px] font-semibold text-ink transition-colors duration-[250ms] hover:text-electric"
              >
                {t("projects.details")}
                <svg
                  aria-hidden="true"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path d="M12 5v14M5 12h14" />
                </svg>
              </button>
            )}
            <a
              href={website}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={
                t("projects.visitLabel", {
                  name,
                  interpolation: { escapeValue: false },
                }) as string
              }
              className="inline-flex items-center gap-[7px] text-[13px] font-semibold text-ink transition-colors duration-[250ms] hover:text-electric"
            >
              {t("projects.visit")}
              <svg
                aria-hidden="true"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path d="M7 17 17 7M9 7h8v8" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <span
        aria-hidden="true"
        className="absolute inset-0 transition-opacity duration-300 opacity-0 pointer-events-none rounded-[21px] mix-blend-screen group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(260px circle at var(--mx,50%) var(--my,50%), rgba(30,167,255,.16), transparent 60%)",
        }}
      />
    </article>
  )
}

export default ProjectCard
