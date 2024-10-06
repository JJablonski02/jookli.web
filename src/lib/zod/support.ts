import { useTranslations } from "next-intl";
import * as z from "zod";

export const useSupportSchema = () => {
  const t = useTranslations('Validation');

  return z.object({
    firstName: z.string()
      .min(1, {message: t('passwordRequired')})
      .min(8, { message: t('minLength', { count: 8 }) })
      .max(100, { message: t('maxLength', { count: 100 }) }),
      lastName: z.string()
      .min(1, {message: t('passwordRequired')})
      .min(8, { message: t('minLength', { count: 8 }) })
      .max(100, { message: t('maxLength', { count: 100 }) }),
      category: z.string()
      .min(1, {message: t('passwordRequired')}),
    email: z.string()
        .min(1, {message: t('emailRequired')})
        .min(5, { message: t('minLength', { count: 5 }) })
        .max(100, { message: t('maxLength', { count: 100 }) })
        .email({ message: t('invalidEmail') }),
    });
};

export type SupportSchema = z.infer<ReturnType<typeof useSupportSchema>>;