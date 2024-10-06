"use client";
import { Card, CardBody } from "@nextui-org/card";
import { useTranslations } from "next-intl";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import JPButton from "@/components/buttons/JPButton";
import JPInputFormField from "@/components/JPInputFormField";
import JPExternalServiceButton from "@/components/buttons/JPExternalServiceButton";
import { Link } from "@nextui-org/link";
import { RegisterSchema, useRegisterSchema } from "@/lib/zod/register";

export const RegisterForm = () => {
  
  const t = useTranslations("Register");
  const registerSchema = useRegisterSchema();
  const {
    handleSubmit,
    setValue,
    control,
    formState: { errors, isValid },
  } = useForm<RegisterSchema>({
    mode: "onChange",
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = async (data: RegisterSchema) => {

  };

  return (
    <Card className="bg-secondary-light max-w-md mx-auto w-full md:max-w-[95%]">
      <CardBody className="space-y-4 flex items-center justify-center flex-col gap-8 py-8 overflow-hidden">
          <h2 className="text-3xl">{t("register")}</h2>
          <form
            className="flex justify-center items-center flex-col w-3/4 md:w-full gap-4"
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
                  isInvalid={errors.email ? true : false}
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
                  isInvalid={errors.password ? true : false}
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
                  isInvalid={errors.confirmPassword ? true : false}
                />
              )}
            />

            <div className="flex flex-col w-full">
              <div className="">
                <JPButton
                  type="submit"
                  className="w-full bg-blue"
                  label={t("register")}
                  disabled={!isValid}
                />
              </div>
            </div>
            <div className="flex items-center w-full justify-center mt-16">
              <div className="flex-grow h-px bg-border" />
              <div className="px-4 text-center my-2">
                <p>{t("orRegisterWith")}</p>
              </div>
              <div className="flex-grow h-px bg-border" />
            </div>
            <div className="flex gap-6 items-center justify-center my-4">
              <JPExternalServiceButton serviceType="google" />
              <JPExternalServiceButton serviceType="apple" />
              <JPExternalServiceButton serviceType="microsoft" />
            </div>
            <div className="flex flex-row items-center space-x-1 justify-center my-2 md:flex-col">
                <p>{t("haveAnAccount")}</p>
                  <Link href="/sign-in" className="text-blue mb-[2px]">
                    {t("signIn")}
                  </Link>
              </div>
          </form>
      </CardBody>
    </Card>
  );
};
