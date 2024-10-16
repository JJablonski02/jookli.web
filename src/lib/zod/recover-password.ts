import { useTranslations } from "next-intl"
import * as z from "zod"

export const useRecoverPasswordSchema = () => {
  const t = useTranslations("Validation")

  const passwordValidation = z
    .string()
    .min(1, { message: t("passwordRequired") })
    .min(8, { message: t("minLength", { count: 8 }) })
    .max(100, { message: t("maxLength", { count: 100 }) })
    .refine((value) => /[A-Z]/.test(value), {
      message: t("passwordUppercase"),
    })
    .refine((value) => /[!@#$%^&*(),.?":{}|<>]/.test(value), {
      message: t("passwordSpecialChar"),
    })

  return z
    .object({
      password: passwordValidation,
      confirmPassword: passwordValidation,
    })
    .refine(
      (values) => {
        return values.password === values.confirmPassword
      },
      {
        message: t("passwordsMismatch"),
        path: ["confirmPassword"],
      }
    )
}

export type RecoverPasswordSchema = z.infer<
  ReturnType<typeof useRecoverPasswordSchema>
>
