import { useTranslations } from "next-intl"
import * as z from "zod"

export const useSupportSchema = () => {
  const t = useTranslations("Validation")

  return z.object({
    firstName: z
      .string()
      .min(1, { message: t("firstNameRequired") })
      .max(100, { message: t("maxLength", { count: 100 }) }),
    lastName: z
      .string()
      .min(1, { message: t("lastNameRequired") })
      .max(100, { message: t("maxLength", { count: 100 }) }),
    email: z
      .string()
      .min(1, { message: t("emailRequired") })
      .min(5, { message: t("minLength", { count: 5 }) })
      .max(100, { message: t("maxLength", { count: 100 }) })
      .email({ message: t("invalidEmail") }),
    consent: z.boolean().refine((value) => value === true, {
      message: t("consentRequired"),
    }),
    category: z.string().min(1, { message: t("categorySelectionRequired") }),
    description: z
      .string()
      .min(1, { message: t("descriptionRequired") })
      .min(20, { message: t("minLength", { count: 20 }) }),
  })
}

export type SupportSchema = z.infer<ReturnType<typeof useSupportSchema>>
