import type { AlternateURLs } from "next/dist/lib/metadata/types/alternative-urls-types"

export type GenerateMetadataAlternateUrlsProps = {
  pageUrl: string
}

export const GenerateMetadataAlternateUrls = ({
  pageUrl,
}: GenerateMetadataAlternateUrlsProps): AlternateURLs => {
  return {
    canonical: `https://www.joyprofits.com/${pageUrl}`,
    languages: {
      "x-default": `https://www.joyprofits.com/${pageUrl}`,
      en: `https://www.joyprofits.com/en/${pageUrl}`,
      es: `https://www.joyprofits.com/es/${pageUrl}`,
      de: `https://www.joyprofits.com/de/${pageUrl}`,
      fr: `https://www.joyprofits.com/fr/${pageUrl}`,
      it: `https://www.joyprofits.com/it/${pageUrl}`,
      nl: `https://www.joyprofits.com/nl/${pageUrl}`,
      da: `https://www.joyprofits.com/da/${pageUrl}`,
      sv: `https://www.joyprofits.com/sv/${pageUrl}`,
      pl: `https://www.joyprofits.com/pl/${pageUrl}`,
      pt: `https://www.joyprofits.com/pt/${pageUrl}`,
      ro: `https://www.joyprofits.com/ro/${pageUrl}`,
      vi: `https://www.joyprofits.com/vi/${pageUrl}`,
      tr: `https://www.joyprofits.com/tr/${pageUrl}`,
      id: `https://www.joyprofits.com/id/${pageUrl}`,
      ru: `https://www.joyprofits.com/ru/${pageUrl}`,
      uk: `https://www.joyprofits.com/uk/${pageUrl}`,
      th: `https://www.joyprofits.com/th/${pageUrl}`,
      ur: `https://www.joyprofits.com/ur/${pageUrl}`,
      ar: `https://www.joyprofits.com/ar/${pageUrl}`,
      fa: `https://www.joyprofits.com/fa/${pageUrl}`,
      bn: `https://www.joyprofits.com/bn/${pageUrl}`,
      hi: `https://www.joyprofits.com/hi/${pageUrl}`,
      pa: `https://www.joyprofits.com/pa/${pageUrl}`,
      ja: `https://www.joyprofits.com/ja/${pageUrl}`,
      "zh-CN": `https://www.joyprofits.com/zh-hans/${pageUrl}`,
      "zh-TW": `https://www.joyprofits.com/zh-hant/${pageUrl}`,
      ko: `https://www.joyprofits.com/ko/${pageUrl}`,
      hu: `https://www.joyprofits.com/hu/${pageUrl}`,
      cs: `https://www.joyprofits.com/cs/${pageUrl}`,
    },
  }
}
