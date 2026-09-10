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
 * Returns the projects shown in the carousel, with every user-facing string
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
      image: project.image,
      name: project.name,
      title: project.title,
      color: project.color,
      website: project.website,
      collaborators: project.collaborators,
      tools: project.tools,
      employeeTag: project.employeeTag,
      employeeColor: project.employeeColor,
      description: t(project.descriptionKey),
      sentences: project.sentenceKeys.map((key) => t(key)),
      ...(tasks.length > 0 ? { tasks } : {}),
    }
  })
}
