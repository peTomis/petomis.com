import { useTranslation } from "next-i18next"

export const useTranslations = (key: string) => {
  const { t, i18n } = useTranslation(key)
  return {
    t,
    i18n,
  }
}
