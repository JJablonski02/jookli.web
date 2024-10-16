import { notFound } from "next/navigation"
import { getRequestConfig } from "next-intl/server"

import SUPPORTED_LOCALES from "../supported-locales"

const locales = SUPPORTED_LOCALES

// Funkcja sprawdzająca czy szukany adres zawiera odpowedni język w zasobach lokalnych,
// jeżeli nie to przerzuca stronę na stronę not-found
export default getRequestConfig(async ({ locale }) => {
  if (!locales.includes(locale as any)) notFound()

  return {
    messages: (await import(`../locales/${locale}.json`)).default,
  }
})
