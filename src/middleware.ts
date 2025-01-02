import createMiddleware from "next-intl/middleware"

import { localePrefix } from "./config"
import SUPPORTED_LOCALES from "./supported-locales"

// Middleware dostarczający konfigurację dla i18n

export default createMiddleware({
  locales: SUPPORTED_LOCALES,
  localePrefix,
  defaultLocale: "en",
})
// es|de|fr|it|nl|da|sv|pl|pt|ro|vi|tr|id|ru|uk|ur|ar|hi|ta|si|fa|tl-PH|bn|km|th|ja|zh-hans|zh-hant|ko
export const config = {
  matcher: [
    "/",
    "/:lang(en|es|de|fr|it|nl|da|sv|pl|pt|ro|vi|tr|id|ru|uk|ur|ar|hi|ta|si|fa|tl-PH|bn|km|th|ja|zh-hans|zh-hant|ko)/:path*",
    "/how-it-works",
    "/earn-methods",
    "/support",
    "/register",
    "/sign-in",
    "/about-us",
    "/blog",
    "/affilate",
    "/resources",
    "/privacy-policy",
    "/copyright",
    "/cookies-policy",
    "/verify-account",
    "/recover-password",
    "/confirm-email-change",
    "/terms-of-service",
    "/advertising",
    "/location-data",
    "/types-of-cookies",
    "/managing-users-data",
    "/users-transfer-data",
  ],
}
