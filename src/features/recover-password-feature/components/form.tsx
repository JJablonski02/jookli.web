"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { Card, CardBody } from "@nextui-org/card"
import { Link } from "@nextui-org/link"
import Image from "next/image"
import { useTranslations } from "next-intl"
import { useEffect } from "react"
import { Controller, useForm } from "react-hook-form"
import toast from "react-hot-toast"

import JPButton from "@/components/buttons/JPButton"
import JPInputFormField from "@/components/JPInputFormField"
import { toHome } from "@/lib/routes"
import {
  type RecoverPasswordSchema,
  useRecoverPasswordSchema,
} from "@/lib/zod/recover-password"

import SuccessSvg from "../../../../public/success.svg"
import { useRecoverPassword } from "../hooks/use-recover-password"

export const RecoverPasswordForm = () => {
  const t = useTranslations("RecoverPassword")
  const { handleRecoverPassword, isLoading, error, success } =
    useRecoverPassword()

  const recoverPasswordSchema = useRecoverPasswordSchema()

  const {
    handleSubmit,
    setValue,
    trigger,
    getValues,
    control,
    formState: { errors, isValid },
  } = useForm<RecoverPasswordSchema>({
    mode: "onChange",
    resolver: zodResolver(recoverPasswordSchema),
  })

  const onSubmit = async () => {
    if (!(await trigger())) {
      return
    }
    const { password, confirmPassword } = getValues()

    handleRecoverPassword(password, confirmPassword)
  }

  useEffect(() => {
    if (error) {
      toast.error(error)
    }
  }, [error])

  return (
    <Card className="mx-auto w-full max-w-md sm:max-w-[85%]">
      <CardBody className="flex flex-col items-center justify-center gap-8 space-y-4 overflow-hidden py-8 sm:gap-0">
        {success ? (
          <>
            <h2>{t("success")}</h2>
            <p>{t("passwordChangedSuccessfully")}</p>
            <Image src={SuccessSvg} alt="success-image" />
            <JPButton
              as={Link}
              className="bg-blue"
              href={toHome}
              disabled={isLoading}
              label={t("returnToApp")}
            />
          </>
        ) : (
          <>
            <div className="mx-6 space-y-6">
              <h2 className="text-3xl sm:text-2xl">{t("recoverPassword")}</h2>
              <p>{t("description")}</p>
            </div>
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
                    type="password"
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
                    label={t("confirmNewPassword")}
                    disabled={!isValid || isLoading}
                    isLoading={isLoading}
                  />
                </div>
              </div>
            </form>
          </>
        )}
      </CardBody>
    </Card>
  )
}
