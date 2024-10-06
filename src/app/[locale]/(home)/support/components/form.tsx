"use client";

import { fetchReport } from "@/api/rest/administration";
import JPButton from "@/components/buttons/JPButton";
import { JPCheckbox } from "@/components/JPCheckbox";
import { DropdownData, JPDropdownField } from "@/components/JPDropdownField";
import JPInputFormField from "@/components/JPInputFormField";
import { JPTextAreaField } from "@/components/JPTextAreaField";
import { SupportSchema, useSupportSchema } from "@/lib/zod/support";
import { zodResolver } from "@hookform/resolvers/zod";
import { Card, CardBody } from "@nextui-org/card";
import { useTranslations } from "next-intl";
import { useMemo, useState } from "react";
import { Controller, useForm } from "react-hook-form";

export const SupportForm = () => {
  const t = useTranslations("Support");
  const [sent, setSent] = useState(false);
  const supportSchema = useSupportSchema();
  const {
    handleSubmit,
    setValue,
    control,
    trigger,
    formState: { errors, isValid, isSubmitting },
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

  const onSubmit = async (data: SupportSchema) => {
    const isFormValid = await trigger();
    if(isFormValid){
        try{
            const result = await fetchReport(data);
            setSent(result.ok);
        }
        catch{
            
        }
    }
  };

  return (
    <Card className="bg-secondary-light w-3/4 mx-auto md:h-full md:max-w-none md:w-[90%]">
      <CardBody className="space-y-4 flex items-center justify-center flex-col gap-8 py-8 overflow-hidden">
        <h2 className="text-3xl">{t("fillForm")}</h2>
        <form
          className="flex justify-center items-center flex-col w-3/4 md:w-full gap-4"
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
                isInvalid={errors.firstName ? true : false}
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
                isInvalid={errors.lastName ? true : false}
              />
            )}
          />
          <Controller
            name="email"
            defaultValue=""
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <JPInputFormField
                topLabel={t("contactEmail")}
                required
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
            render={({ field: { onChange }, fieldState: { error } }) => (
                <div className="w-full">
                    <JPDropdownField 
                        topLabel={t('selectReportType')} 
                        data={dropdownData} 
                        required
                        onSelectionChange={onChange}/>
                    {error && <p className="text-danger">{error.message}</p>} {/* Komunikat o błędzie */}
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
              isInvalid={errors.description ? true : false}
              />
            )}
          />
                <p className="md:text-sm">
                    <span className="text-danger">* </span>
                    - 
                    {t('requiredFields')}
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
                    />
                    {errors.consent && <p className="text-danger">{errors.consent.message}</p>} {/* Komunikat o błędzie */}
              </div>
            )}
          />

          <JPButton
            type="submit"
            isLoading={isSubmitting}
            disabled={sent}
            className="w-full bg-blue mt-12"
            label={t("sendReport")}
          />
        </form>
      </CardBody>
    </Card>
  );
};
