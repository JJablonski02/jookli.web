import { notFound } from "next/navigation"
import { getRequestConfig } from "next-intl/server"

import SUPPORTED_LOCALES from "../supported-locales"

const locales = SUPPORTED_LOCALES

// Funkcja sprawdzająca czy szukany adres zawiera odpowedni język w zasobach lokalnych,
// jeżeli nie to przerzuca stronę na stronę not-found
export default getRequestConfig(async ({ requestLocale }) => {
  if (!locales.includes(requestLocale as any)) notFound()

  return {
    messages: (await import(`../locales/${requestLocale}.json`)).default,
  }
})
