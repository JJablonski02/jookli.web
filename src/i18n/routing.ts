import { createNavigation } from "next-intl/navigation"
import { defineRouting } from "next-intl/routing"

import SUPPORTED_LOCALES from "@/supported-locales"

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: SUPPORTED_LOCALES,

  // Used when no locale matches
  defaultLocale: "en",
})

export type Locale = (typeof routing.locales)[number]

// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export const { Link, redirect, usePathname, useRouter } =
  createNavigation(routing)
