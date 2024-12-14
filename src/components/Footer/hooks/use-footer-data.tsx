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

  const currentLanguage = currentLanguageCode

  return {
    languages,
    currentLanguage,
    handleChangeLanguage,
  }
}

const languagesMap: Record<Language, string> = {
  en: "us", // English -> United States
  es: "es", // Spanish -> Spain
  de: "de", // German -> Germany
  fr: "fr", // French -> France
  it: "it", // Italian -> Italy
  nl: "nl", // Dutch -> Netherlands
  da: "dk", // Danish -> Denmark
  sv: "se", // Swedish -> Sweden
  pl: "pl", // Polish -> Poland
  pt: "pt", // Portuguese -> Portugal
  ro: "ro", // Romanian -> Romania
  vi: "vi", // Vietnamese -> Vietnam
  tr: "tr", // Turkish -> Turkey
  id: "id", // Indonesian -> Indonesia
  ru: "ru", // Russian -> Russia
  uk: "ua", // Ukrainian -> Ukraine
  ur: "pk", // Urdu -> Pakistan
  ar: "sa", // Arabic -> Saudi Arabia
  hi: "in", // Hindi -> India
  ta: "in", // Tamil -> India
  si: "lk", // Sinhala -> Sri Lanka
  fa: "ir", // Farsi (Persian) -> Iran
  fil: "ph", // Filipino -> Philippines
  bn: "bd", // Bangla -> Bangladesh
  km: "kh", // Cambodian -> Cambodia
  th: "th", // Thai -> Thailand
  ja: "jp", // Japanese -> Japan
  "zh-hant": "tw", // Chinese Traditional -> Taiwan
  "zh-hans": "cn", // Chinese Simplified -> China
  ko: "kr", // Korean -> South Korea
}
