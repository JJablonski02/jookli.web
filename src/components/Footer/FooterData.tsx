import {
  toAboutUs,
  toAdvertising,
  toAffilate,
  toBlog,
  toCookiePolicy,
  toEarnMethods,
  toHome,
  toHowItWorks,
  toPrivacyPolicy,
  toResources,
  toSupport,
  toTerms,
} from "../../lib/routes"

export const FooterMenuData = [
  {
    route: toHome,
    label: "mainPage",
  },
  {
    route: toHowItWorks,
    label: "howItWorks",
  },
  {
    route: toEarnMethods,
    label: "earnMethods",
  },
  {
    route: toSupport,
    label: "support",
  },
]

export const FooterPlatformData = [
  {
    route: toBlog,
    label: "blog",
  },
  {
    route: toAffilate,
    label: "affilateProgram",
  },
]

export const FooterCompanyData = [
  {
    route: toAboutUs,
    label: "aboutUs",
  },
  {
    route: toResources,
    label: "resources",
  },
]

export const FooterPolicyData = [
  {
    route: toPrivacyPolicy,
    label: "policyPrivacy",
  },
  {
    route: toTerms,
    label: "terms",
  },
  {
    route: toTerms,
    label: "copyright",
  },
  {
    route: toCookiePolicy,
    label: "cookiePolicy",
  },
  {
    route: toAdvertising,
    label: "adRules",
  },
]
