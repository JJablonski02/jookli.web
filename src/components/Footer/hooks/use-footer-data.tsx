import type { SharedSelection } from "@nextui-org/system"
import { useParams } from "next/navigation"
import { useLocale, useTranslations } from "next-intl"
import { startTransition, useCallback, useMemo } from "react"

import type { JPSelectData } from "@/components/JP-select"
import { usePathname, useRouter } from "@/i18n/routing"

export const useFooterData = () => {
  const currentLanguageCode = useLocale()
  const t = useTranslations("Languages")
  const router = useRouter()
  const pathname = usePathname()
  const params = useParams()

  const languages: JPSelectData<Language>[] = useMemo(() => {
    return Object.entries(languagesMap).map(([key]) => ({
      key: key as Language, // Ensuring `key` is of type Language
      label: t(key), // Translating the value
    }))
  }, [t])

  const handleChangeLanguage = useCallback(
    (item: SharedSelection) => {
      startTransition(() => {
        // @ts-expect-error -- TypeScript will validate that only known `params`
        // are used in combination with a given `pathname`. Since the two will
        // always match for the current route, we can skip runtime checks.
        router.replace({ pathname, params }, { locale: item.currentKey })
      })
    },
    [params, pathname, router]
  )

  const rawCurrentLanguage =
    languagesMap[currentLanguageCode.toLowerCase() as Language] || ""
  const currentLanguage =
    rawCurrentLanguage.charAt(0).toUpperCase() + rawCurrentLanguage.slice(1)

  return {
    languages,
    currentLanguage,
    handleChangeLanguage,
  }
}

const languagesMap: Record<Language, string> = {
  en: "english",
  es: "spanish",
  de: "german",
  fr: "french",
  it: "italian",
  nl: "dutch",
  da: "danish",
  sv: "swedish",
  pl: "polish",
  pt: "portuguese",
  ro: "romanian",
  vi: "vietnamese",
  tr: "turkish",
  id: "indonesian",
  ru: "russian",
  uk: "ukrainian",
  ur: "urdu",
  ar: "arabic",
  hi: "hindi",
  ta: "tamil",
  si: "sinhala",
  fa: "farsi",
  fil: "filipino",
  bn: "bangla",
  km: "cambodian",
  th: "thai",
  ja: "japanese",
  "zh-hant": "chinese-traditional",
  "zh-hans": "chinese-simplified",
  ko: "korean",
}
