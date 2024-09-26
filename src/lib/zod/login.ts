import { useTranslations } from "next-intl";
import * as z from "zod";

export const useLoginSchema = () => {
  const t = useTranslations('Validation');

  return z.object({
    email: z.string()
      .min(1, {message: t('emailRequired')})
      .min(5, { message: t('minLength', { count: 5 }) })
      .max(100, { message: t('maxLength', { count: 100 }) })
      .email({ message: t('invalidEmail') }),
    password: z.string()
      .min(1, {message: t('passwordRequired')})
      .min(8, { message: t('minLength', { count: 8 }) })
      .max(100, { message: t('maxLength', { count: 100 }) })
      .refine(value => /[A-Z]/.test(value), {
        message: t('passwordUppercase'),
      })
      .refine(value => /[!@#$%^&*(),.?":{}|<>]/.test(value), {
        message: t('passwordSpecialChar'), 
      }),
  });
};

export type LoginSchema = z.infer<ReturnType<typeof useLoginSchema>>;