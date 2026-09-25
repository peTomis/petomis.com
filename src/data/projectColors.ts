/** Brand background colour (Tailwind class) for each project. */
export const ProjectColor = {
  ANUBIDIGITAL: "bg-anubidigital-dark",
  PIENISSIMO: "bg-red-300",
  RED: "bg-[#f10000]",
  BLUE: "bg-primary-300",
} as const

export type ProjectColor = (typeof ProjectColor)[keyof typeof ProjectColor]

/**
 * The subset of colours used for the "employee" (job) projects, which drive the
 * expanded detail view's theming.
 */
export type EmployeeColor =
  | typeof ProjectColor.ANUBIDIGITAL
  | typeof ProjectColor.PIENISSIMO
