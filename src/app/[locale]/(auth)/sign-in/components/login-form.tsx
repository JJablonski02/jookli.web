"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { Card, CardBody } from "@nextui-org/card"
import { Link } from "@nextui-org/link"
import { useTranslations } from "next-intl"
import { Controller, useForm } from "react-hook-form"

import JPButton from "@/components/buttons/JPButton"
import JPExternalServiceButton from "@/components/buttons/JPExternalServiceButton"
import JPInputFormField from "@/components/JPInputFormField"
import { loginApi } from "@/features/login-feature/api/login-api"
import type { LoginSchema } from "@/lib/zod/login"
import { useLoginSchema } from "@/lib/zod/login"

export const LoginForm = () => {
  const t = useTranslations("SignIn")
  const loginSchema = useLoginSchema()
  const {
    handleSubmit,
    setValue,
    control,
    formState: { errors, isValid },
  } = useForm<LoginSchema>({
    mode: "onChange",
    resolver: zodResolver(loginSchema),
  })

  const onSubmit = async (data: LoginSchema) => {
    try {
      await loginApi({
        email: data.email,
        password: data.password,
      })
    } catch (error) {
      /** Empty */
    }
  }

  return (
    <Card className="mx-auto w-full max-w-md bg-secondary-light sm:max-w-[85%]">
      <CardBody className="flex flex-col items-center justify-center gap-8 space-y-4 overflow-hidden py-8 sm:gap-0">
        <h2 className="text-3xl sm:text-2xl">{t("signIn")}</h2>
        <form
          className="flex w-3/4 flex-col items-center justify-center gap-4 sm:w-[90%]"
          method="POST"
          onSubmit={handleSubmit(onSubmit)}
        >
          <Controller
            name="email"
            defaultValue=""
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <JPInputFormField
                label={t("email")}
                value={value}
                onBlur={onBlur}
                onChange={onChange}
                onClear={() => setValue("email", "")}
                errorMessage={errors.email?.message}
                isInvalid={!!errors.email}
              />
            )}
          />

          <Controller
            name="password"
            defaultValue=""
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <JPInputFormField
                label={t("password")}
                type="password"
                value={value}
                onBlur={onBlur}
                onChange={onChange}
                onClear={() => setValue("password", "")}
                errorMessage={errors.password?.message}
                isInvalid={!!errors.password}
              />
            )}
          />

          <div className="flex w-full flex-col">
            <div className="">
              <JPButton
                type="submit"
                className="w-full bg-blue"
                label={t("logIn")}
                disabled={!isValid}
              />
            </div>
            <div className="my-2 flex flex-row items-center justify-center space-x-1">
              <p className="sm:text-medium">{t("forgotPassword")}</p>
              <Link
                href="/reset-password"
                className="mb-[2px] text-xl text-blue sm:text-medium"
              >
                {t("reset")}
              </Link>
            </div>
          </div>
          <div className="mt-16 flex w-full items-center justify-center sm:mt-0">
            <div className="h-px grow bg-border" />
            <div className="my-2 px-4 text-center">
              <p className="sm:text-medium">{t("orSignInWith")}</p>
            </div>
            <div className="h-px grow bg-border" />
          </div>
          <div className="my-4 flex items-center justify-center gap-6 sm:my-0">
            <JPExternalServiceButton serviceType="google" />
            <JPExternalServiceButton serviceType="apple" />
            <JPExternalServiceButton serviceType="microsoft" />
          </div>
          <div className="my-2 flex flex-row items-center justify-center space-x-1 md:flex-col">
            <p className="sm:text-medium">{t("haveNotAnAccount")}</p>
            <Link
              href="/register"
              className="mb-[2px] text-xl text-blue sm:text-medium"
            >
              {t("register")}
            </Link>
          </div>
        </form>
      </CardBody>
    </Card>
  )
}
