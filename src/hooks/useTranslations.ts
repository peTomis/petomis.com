// External libraries
import { useTranslation } from "next-i18next"

/**
 * Custom hook that simplifies the use of the next-i18next's useTranslation hook.
 * It provides an easy way to access the `t` function for translations and the `i18n` object
 * for current language information and other i18n capabilities within a specific namespace.
 *
 * @param {string} key - The namespace key to use for translations. Namespaces are used to
 *                       organize your translation files in next-i18next.
 * @returns An object containing the `t` function for translating keys and the `i18n` instance
 *          for additional internationalization functionalities.
 */
export const useTranslations = (key: string) => {
  // Call the useTranslation hook with the provided namespace key.
  const { t, i18n } = useTranslation(key)

  // Return the `t` function and `i18n` instance for easy access.
  return {
    t,
    i18n,
  }
}
