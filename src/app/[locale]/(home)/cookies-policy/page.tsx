import { unstable_setRequestLocale } from "next-intl/server"

import { CookiesLayout } from "@/components/layouts/cookies-layout"
import { CookiesPolicyPage } from "@/features/cookies-policy-feature/cookies-policy-page"

type Props = {
  params: { locale: string }
}

const CookiesPolicy = ({ params: { locale } }: Props) => {
  unstable_setRequestLocale(locale)

  return (
    <CookiesLayout>
      <CookiesPolicyPage />
    </CookiesLayout>
  )
}

export default CookiesPolicy
