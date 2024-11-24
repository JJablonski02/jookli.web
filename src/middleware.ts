import createMiddleware from "next-intl/middleware"

import { localePrefix } from "./config"
import SUPPORTED_LOCALES from "./supported-locales"

// Middleware dostarczający konfigurację dla i18n

export default createMiddleware({
  locales: SUPPORTED_LOCALES,
  localePrefix,
  defaultLocale: "en",
})

export const config = {
  matcher: [
    "/",
    "/:lang(es|de|fr|it|nl|da|sv|pl|pt|ro|vi|tr|id|ru|uk|pk|sa|hi|ta|si|fa|ph|bd|kh|th|jp|zh-hans|zh-hant|ko)/:path*",
    "/how-it-works",
    "/earn-methods",
    "/support",
    "/register",
    "/sign-in",
    "/about-us",
    "/blog",
    "/affilate",
    "/resources",
    "/policy-privacy",
    "/terms",
    "/copyright",
    "/cookie-policy",
    "/adveristment-rules",
    "/verify-email",
    "/recover-password",
    "/confirm-email-change",
  ],
}
