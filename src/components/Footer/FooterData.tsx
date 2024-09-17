import {
    toHowItWorks,
    toEarnMethods,
    toSupport,
    toHome,
    toAboutUs,
    toAdRules,
    toAffilate,
    toBlog,
    toCookiePolicy,
    toCopyright,
    toPolicyPrivacy,
    toTerms,
    toResources
} from "../routes";

export const FooterMenuData = [
    {
        route: toHome,
        label: "mainPage"
    },
    {
        route: toHowItWorks,
        label: "howItWorks"
    },
    {
        route: toEarnMethods,
        label: "earnMethods"
    },
    {
        route: toSupport,
        label: "support"
    }
]

export const FooterPlatformData = [
    {
        route: toBlog,
        label: "blog"
    },
    {
        route: toAffilate,
        label: "affilateProgram"
    }
]

export const FooterCompanyData = [
    {
        route: toAboutUs,
        label: "aboutUs"
    },
    {
        route: toResources,
        label: "resources"
    }
]

export const FooterPolicyData = [
    {
        route: toPolicyPrivacy,
        label: "policyPrivacy"
    },
    {
        route: toTerms,
        label: "terms"
    },
    {
        route: toCopyright,
        label: "copyright"
    },
    {
        route: toCookiePolicy,
        label: "cookiePolicy"
    },
    {
        route: toAdRules,
        label: "adRules"
    },
]