/** Brand background colour (Tailwind class) for each project. */
export const ProjectColor = {
  ANUBIDIGITAL: "bg-anubidigital-dark",
  PIENISSIMO: "bg-red-300",
  RED: "bg-[#f10000]",
  COLLECTION_MANAGER: "bg-[#341a62]",
  BLUE: "bg-primary-300",
} as const

export type ProjectColor = (typeof ProjectColor)[keyof typeof ProjectColor]

