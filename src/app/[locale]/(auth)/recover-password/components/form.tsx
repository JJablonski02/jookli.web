"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { Card, CardBody } from "@nextui-org/card"
import { useSearchParams } from "next/navigation"
import { useTranslations } from "next-intl"
import { useEffect } from "react"
import { Controller, useForm } from "react-hook-form"

import JPButton from "@/components/buttons/JPButton"
import JPInputFormField from "@/components/JPInputFormField"
import {
  type RecoverPasswordSchema,
  useRecoverPasswordSchema,
} from "@/lib/zod/recover-password"

export const RecoverPasswordForm = () => {
  const t = useTranslations("RecoverPassword")
  const token = useSearchParams().get("token")

  const recoverPasswordSchema = useRecoverPasswordSchema()

  const {
    handleSubmit,
    setValue,
    control,
    formState: { errors, isValid },
  } = useForm<RecoverPasswordSchema>({
    mode: "onChange",
    resolver: zodResolver(recoverPasswordSchema),
  })

  const onSubmit = async () => {}

  useEffect(() => {}, [token])

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
            name="password"
            defaultValue=""
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <JPInputFormField
                label={t("password")}
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
                type="confirmPassword"
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
                label={t("confirmNewPassword")}
                disabled={!isValid}
              />
            </div>
          </div>
        </form>
      </CardBody>
    </Card>
  )
}
