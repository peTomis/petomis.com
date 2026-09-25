// Hooks
import { useTranslations } from "./useTranslations"

// Data
import { projectsData, type Project, type ProjectTask } from "@/data/projects"

export type {
  Project,
  ProjectTask,
  ProjectTool,
  ProjectCollaborator,
} from "@/data/projects"

/**
 * Returns the projects shown in the projects section, with every user-facing string
 * resolved for the active locale. The static (translation-independent) part
 * lives in `@/data/projects`.
 */
export function useProjects(): Project[] {
  const { t } = useTranslations("jobs")

  return projectsData.map((project) => {
    const tasks: ProjectTask[] = project.taskKeys.map((key) => ({
      title: t(`${key}.title`),
      description: t(`${key}.description`),
    }))

    return {
      background: project.background,
      name: project.name,
      title: project.title,
      logo: project.logo,
      color: project.color,
      website: project.website,
      collaborators: project.collaborators,
      tools: project.tools,
      employee: project.employee,
      role: project.roleKey ? t(project.roleKey) : undefined,
      period: project.periodKey ? t(project.periodKey) : undefined,
      description: t(project.descriptionKey),
      sentences: project.sentenceKeys.map((key) => t(key)),
      ...(tasks.length > 0 ? { tasks } : {}),
    }
  })
}
