"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { Card, CardBody } from "@nextui-org/card"
import { useLocale, useTranslations } from "next-intl"
import { useMemo, useState } from "react"
import { Controller, useForm } from "react-hook-form"
import { toast } from "react-hot-toast"

import JPButton from "@/components/buttons/JPButton"
import { JPCheckbox } from "@/components/JPCheckbox"
import { JPDropdownField } from "@/components/JPDropdownField"
import JPInputFormField from "@/components/JPInputFormField"
import { JPTextAreaField } from "@/components/JPTextAreaField"
import type { SupportSchema } from "@/lib/zod/support"
import { useSupportSchema } from "@/lib/zod/support"

import { fetchReport } from "../api/fetch-report"
import type { SendReport } from "../types"

export const SupportForm = () => {
  const t = useTranslations("Support")
  const lang = useLocale()

  const [sent, setSent] = useState(false)
  const supportSchema = useSupportSchema()
  const {
    handleSubmit,
    setValue,
    control,
    trigger,
    formState: { errors, isSubmitting },
  } = useForm<SupportSchema>({
    mode: "onChange",
    resolver: zodResolver(supportSchema),
  })

  const dropdownData = useMemo(
    () => ({
      PAYOUT_PROBLEM: t("payoutProblem"),
      PAYMENT_METHOD: t("paymentMethod"),
      TASK_NOT_COUNTED: t("taskWasNotCounted"),
      TECHNICAL_ERROR: t("technicalError"),
      REVIEWS: t("reviews"),
      COOPERATION: t("cooperation"),
      PROMOTE: t("promote"),
    }),
    [t]
  )
  const onSubmit = async (supportSchema: SupportSchema) => {
    const isFormValid = await trigger()
    if (isFormValid) {
      const data: SendReport = {
        firstName: supportSchema.firstName,
        lastName: supportSchema.lastName,
        emailAddress: supportSchema.emailAddress,
        consent: supportSchema.consent,
        reportType: supportSchema.reportType,
        description: supportSchema.description,
        language: lang,
      }

      try {
        await fetchReport(data)
        setSent(true)
        toast.success(
          "Twoje zgłoszenie zostało wysłane! Sprawdź swoją skrzynkę pocztową."
        )
      } catch {
        toast.error("Wystąpił błąd podczas wysyłania zgłoszenia.")
      }
    }
  }

  return (
    <Card className="mx-auto w-3/4 md:h-full md:w-[90%] md:max-w-none">
      <CardBody className="flex flex-col items-center justify-center gap-8 space-y-4 overflow-hidden py-14">
        <h2 className="text-3xl">{t("fillForm")}</h2>
        <form
          className="flex w-3/4 flex-col items-center justify-center gap-4 md:w-[90%]"
          method="POST"
          onSubmit={handleSubmit(onSubmit)}
        >
          <Controller
            name="firstName"
            defaultValue=""
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <JPInputFormField
                topLabel={t("firstName")}
                required
                value={value}
                onBlur={onBlur}
                onChange={onChange}
                onClear={() => setValue("firstName", "")}
                errorMessage={errors.firstName?.message}
                isInvalid={!!errors.firstName}
              />
            )}
          />

          <Controller
            name="lastName"
            defaultValue=""
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <JPInputFormField
                topLabel={t("lastName")}
                required
                value={value}
                onBlur={onBlur}
                onChange={onChange}
                onClear={() => setValue("lastName", "")}
                errorMessage={errors.lastName?.message}
                isInvalid={!!errors.lastName}
              />
            )}
          />
          <Controller
            name="emailAddress"
            defaultValue=""
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <JPInputFormField
                topLabel={t("contactEmail")}
                required
                value={value}
                onBlur={onBlur}
                onChange={onChange}
                onClear={() => setValue("emailAddress", "")}
                errorMessage={errors.emailAddress?.message}
                isInvalid={!!errors.emailAddress}
              />
            )}
          />

          <Controller
            name="reportType"
            defaultValue=""
            control={control}
            render={({ field: { onChange }, fieldState: { error } }) => (
              <div className="w-full">
                <JPDropdownField
                  topLabel={t("selectReportType")}
                  data={dropdownData}
                  required
                  onSelectionChange={onChange}
                />
                {error && <p className="text-danger">{error.message}</p>}{" "}
                {/* Komunikat o błędzie */}
              </div>
            )}
          />
          <Controller
            name="description"
            defaultValue=""
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <JPTextAreaField
                topLabel={t("describeReport")}
                required
                onChange={onChange}
                onBlur={onBlur}
                value={value}
                onClear={() => setValue("description", "")}
                errorMessage={errors.description?.message}
                isInvalid={!!errors.description}
              />
            )}
          />
          <p className="md:text-sm">
            <span className="text-danger">* </span>-{t("requiredFields")}
          </p>
          <Controller
            name="consent"
            control={control}
            defaultValue={false}
            render={({ field: { onChange, value } }) => (
              <div>
                <JPCheckbox
                  label={t("iConsentToContact")}
                  checked={value}
                  onChange={onChange}
                  style={{ color: "red" }}
                />
                {errors.consent && (
                  <p className="text-sm text-danger">
                    {errors.consent.message}
                  </p>
                )}{" "}
                {/* Komunikat o błędzie */}
              </div>
            )}
          />

          <JPButton
            type="submit"
            isLoading={isSubmitting}
            disabled={sent}
            className="mt-12 w-full bg-blue"
            label={t("sendReport")}
          />
        </form>
      </CardBody>
    </Card>
  )
}
