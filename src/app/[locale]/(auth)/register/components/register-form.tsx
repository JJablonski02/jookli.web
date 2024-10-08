"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { Card, CardBody } from "@nextui-org/card"
import { Link } from "@nextui-org/link"
import { useTranslations } from "next-intl"
import { Controller, useForm } from "react-hook-form"

import JPButton from "@/components/buttons/JPButton"
import JPExternalServiceButton from "@/components/buttons/JPExternalServiceButton"
import JPInputFormField from "@/components/JPInputFormField"
import type { RegisterSchema } from "@/lib/zod/register"
import { useRegisterSchema } from "@/lib/zod/register"

export const RegisterForm = () => {
  const t = useTranslations("Register")
  const registerSchema = useRegisterSchema()
  const {
    handleSubmit,
    setValue,
    control,
    formState: { errors, isValid },
  } = useForm<RegisterSchema>({
    mode: "onChange",
    resolver: zodResolver(registerSchema),
  })

  const onSubmit = async (data: RegisterSchema) => {}

  return (
    <Card className="mx-auto w-full max-w-md bg-secondary-light sm:max-w-[85%]">
      <CardBody className="flex flex-col items-center justify-center gap-8 space-y-4 overflow-hidden py-8 sm:gap-0">
        <h2 className="text-3xl sm:text-lg">{t("register")}</h2>
        <form
          className="flex w-3/4 flex-col items-center justify-center gap-4 sm:w-full"
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

          <Controller
            name="confirmPassword"
            defaultValue=""
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <JPInputFormField
                label={t("reEnterPassword")}
                type="password"
                value={value}
                onBlur={onBlur}
                onChange={onChange}
                onClear={() => setValue("confirmPassword", "")}
                errorMessage={errors.confirmPassword?.message}
                isInvalid={!!errors.confirmPassword}
              />
            )}
          />

          <div className="flex w-full flex-col">
            <div className="">
              <JPButton
                type="submit"
                className="w-full bg-blue"
                label={t("register")}
                disabled={!isValid}
              />
            </div>
          </div>
          <div className="mt-16 flex w-full items-center justify-center sm:mt-0">
            <div className="h-px grow bg-border" />
            <div className="my-2 px-4 text-center sm:text-sm">
              <p>{t("orRegisterWith")}</p>
            </div>
            <div className="h-px grow bg-border" />
          </div>
          <div className="my-4 flex items-center justify-center gap-6 sm:my-0">
            <JPExternalServiceButton serviceType="google" />
            <JPExternalServiceButton serviceType="apple" />
            <JPExternalServiceButton serviceType="microsoft" />
          </div>
          <div className="my-2 flex flex-row items-center justify-center space-x-1 md:flex-col sm:text-sm">
            <p>{t("haveAnAccount")}</p>
            <Link href="/sign-in" className="mb-[2px] text-blue sm:text-sm">
              {t("signIn")}
            </Link>
          </div>
        </form>
      </CardBody>
    </Card>
  )
}
