"use client";
import { Card, CardBody } from "@nextui-org/card";
import { useTranslations } from "next-intl";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import JPButton from "@/components/buttons/JPButton";
import JPInputFormField from "@/components/JPInputFormField";
import { LoginSchema, useLoginSchema } from "@/lib/zod/login";
import JPExternalServiceButton from "@/components/buttons/JPExternalServiceButton";
import { Link } from "@nextui-org/link";

export const LoginForm = () => {
  
  const t = useTranslations("SignIn");
  const loginSchema = useLoginSchema();
  const {
    handleSubmit,
    setValue,
    control,
    formState: { errors, isValid },
  } = useForm<LoginSchema>({
    mode: "onChange",
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: any) => {};

  return (
    <Card className="bg-secondary-light max-w-md mx-auto w-full md:h-full md:max-w-none md:rounded-none">
      <CardBody className="space-y-4 flex items-center justify-center flex-col gap-4 py-8 overflow-hidden">
          <h2 className="text-3xl">{t("signIn")}</h2>
          <form
            className="flex justify-center items-center flex-col w-3/4"
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

            <div className="flex flex-col w-full">
              <div className="">
                <JPButton
                  type="submit"
                  className="w-full bg-blue"
                  label={t("logIn")}
                  disabled={!isValid}
                />
              </div>
              <div className="flex flex-row items-center space-x-1 justify-center my-2">
                <p>{t("forgotPassword")}</p>
                <Link href="/reset-password" className="text-blue mb-[2px]">
                  {t("reset")}
                </Link>
              </div>
            </div>
            <div className="flex items-center w-full justify-center mt-16">
              <div className="flex-grow h-px bg-border" />
              <div className="px-4 text-center my-2">
                <p>{t("orSignInWith")}</p>
              </div>
              <div className="flex-grow h-px bg-border" />
            </div>
            <div className="flex gap-6 items-center justify-center my-4">
              <JPExternalServiceButton serviceType="google" />
              <JPExternalServiceButton serviceType="apple" />
              <JPExternalServiceButton serviceType="microsoft" />
            </div>
            <div className="flex flex-row items-center space-x-1 justify-center my-2">
                <p>{t("haveAnAccount")}</p>
                  <Link href="/register" className="text-blue mb-[2px]">
                    {t("register")}
                  </Link>
              </div>
          </form>
      </CardBody>
    </Card>
  );
};
