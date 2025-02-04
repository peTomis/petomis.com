export enum ActivityColorVariant {
  PIENISSIMO = `PIENISSIMO`,
  MOBILE = `MOBILE`,
  ANUBIDIGITAL = `ANUBIDIGITAL`,
}

export enum ActivityColorBg {
  MOBILE = `bg-white`,
  PIENISSIMO = `bg-red-400`,
  ANUBIDIGITAL = `bg-anubidigital`,
}

export enum ActivityColorDetailBg {
  MOBILE = `bg-primary-50`,
  PIENISSIMO = `bg-red-100`,
  ANUBIDIGITAL = `bg-anubidigital-dark`,
}

export enum ActivityColorDetailAccent {
  MOBILE = `bg-white bg-opacity-60`,
  PIENISSIMO = `bg-white`,
  ANUBIDIGITAL = `bg-black`,
}

export enum ActivityColorToolsAccent {
  MOBILE = `bg-white bg-opacity-80`,
  PIENISSIMO = `bg-white bg-opacity-50`,
  ANUBIDIGITAL = `bg-black bg-opacity-70`,
}

export enum ActivityColorSecondaryBg {
  MOBILE = `bg-primary-50`,
  PIENISSIMO = `bg-white`,
  ANUBIDIGITAL = `bg-black`,
}

export enum ActivityColorFill {
  MOBILE = `fill-black`,
  PIENISSIMO = `fill-black`,
  ANUBIDIGITAL = `fill-white`,
}

export enum ActivityColorTitleDots {
  MOBILE = `bg-primary-400`,
  PIENISSIMO = `bg-red-600`,
  ANUBIDIGITAL = `bg-anubidigital`,
}

export enum ActivityColorTitleText {
  MOBILE = `PRIMARY400`,
  PIENISSIMO = `BLACK`,
  ANUBIDIGITAL = `ANUBIDIGITAL`,
}

export enum ActivityColorText {
  MOBILE = `BLACK`,
  PIENISSIMO = `BLACK`,
  ANUBIDIGITAL = `BASE`,
}

export enum WebsiteSection {
  EXPERIENCE = "experience-container",
  WORK = "work-container",
  PROJECTS = "projects-container",
  CONTACT = "contact-title",
}

export const parseExperienceTime = (
  time: {
    from: number
    to: number
  }[]
): {
  number: number
  unit: string
} => {
  let total = 0
  time.forEach(({ from, to }) => {
    total += to - from
  })

  if (total < 1000 * 60 * 60 * 24 * 365) {
    const decimal = total / (1000 * 60 * 60 * 24 * 30)
    const number =
      decimal - Math.floor(decimal) > 0.5
        ? Math.ceil(decimal)
        : Math.floor(decimal)
    return {
      number: Math.floor(total / (1000 * 60 * 60 * 24 * 30)),
      unit: number > 1 ? "experience.months" : "experience.month",
    }
  }

  const decimal = total / (1000 * 60 * 60 * 24 * 365)
  const number =
    decimal - Math.floor(decimal) > 0.5
      ? Math.ceil(decimal)
      : Math.floor(decimal)
  return {
    number,
    unit: number > 1 ? "experience.years" : "experience.year",
  }
}
