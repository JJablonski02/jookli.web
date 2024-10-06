"use client";

import JPButton from "@/components/buttons/JPButton";
import { JPCheckbox } from "@/components/JPCheckbox";
import { DropdownData, JPDropdownField } from "@/components/JPDropdownField";
import JPInputFormField from "@/components/JPInputFormField";
import { JPTextAreaField } from "@/components/JPTextAreaField";
import { SupportSchema, useSupportSchema } from "@/lib/zod/support";
import { zodResolver } from "@hookform/resolvers/zod";
import { Card, CardBody } from "@nextui-org/card";
import { useTranslations } from "next-intl";
import { useMemo } from "react";
import { Controller, useForm } from "react-hook-form";

export const SupportForm = () => {
  const t = useTranslations("Support");
  const supportSchema = useSupportSchema();
  const {
    handleSubmit,
    setValue,
    control,
    formState: { errors, isValid },
  } = useForm<SupportSchema>({
    mode: "onChange",
    resolver: zodResolver(supportSchema),
  });

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
    []
  );

  const onSubmit = async (data: any) => {};

  return (
    <Card className="bg-secondary-light w-3/4 mx-auto md:h-full md:max-w-none md:rounded-none">
      <CardBody className="space-y-4 flex items-center justify-center flex-col gap-8 py-8 overflow-hidden">
        <h2 className="text-3xl">{t("fillForm")}</h2>
        <form
          className="flex justify-center items-center flex-col w-3/4 gap-8"
          method="POST"
          onSubmit={handleSubmit(onSubmit)}
        >
          <Controller
            name="firstName"
            defaultValue=""
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <JPInputFormField
                label={t("firstName")}
                value={value}
                onBlur={onBlur}
                onChange={onChange}
                onClear={() => setValue("email", "")}
                errorMessage={errors.email?.message}
                isInvalid={errors.email ? true : false}
              />
            )}
          />

          <Controller
            name="lastName"
            defaultValue=""
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <JPInputFormField
                label={t("lastName")}
                value={value}
                onBlur={onBlur}
                onChange={onChange}
                onClear={() => setValue("email", "")}
                errorMessage={errors.email?.message}
                isInvalid={errors.email ? true : false}
              />
            )}
          />
          <Controller
            name="email"
            defaultValue=""
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <JPInputFormField
                label={t("contactEmail")}
                value={value}
                onBlur={onBlur}
                onChange={onChange}
                onClear={() => setValue("email", "")}
                errorMessage={errors.email?.message}
                isInvalid={errors.email ? true : false}
              />
            )}
          />

          <Controller
            name="category"
            defaultValue=""
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <JPDropdownField data={dropdownData} />
            )}
          />

          <Controller
            name="category"
            defaultValue=""
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <JPTextAreaField label={t("describeReport")} />
            )}
          />

          <Controller
            name="category"
            defaultValue=""
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <JPCheckbox label={t('iConsentToContact')}/>
            )}
          />

          <JPButton
            type="submit"
            className="w-full bg-blue"
            label={t("sendReport")}
            disabled={!isValid}
          />
        </form>
      </CardBody>
    </Card>
  );
};
