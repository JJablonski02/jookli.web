"use client"
import { Card, CardBody } from "@nextui-org/card"
import { useTranslations } from "next-intl"
import { Controller, useForm, } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import JPButton from "@/components/JPButton";
import JPInputFormField from "@/components/JPInputFormField";
import { Input } from "@nextui-org/input";
import { useLoginSchema } from "@/lib/zod/login";

interface FormData {
    email: string;
    password: string;
  }

export const LoginForm = () => {

    const t = useTranslations('SignIn');
    const tv = useTranslations('Validation');
    const loginSchema = useLoginSchema();

    const {
        handleSubmit,
        setValue,
        control,
        formState: { errors, isValid },
      } = useForm<FormData>({
        mode: 'onBlur',
        resolver: zodResolver(loginSchema)
      });
    
      const onSubmit = async (data: any) => {
    };
    
      return (
        <div className="flex items-center justify-center flex-col gap-6">
          <h2 className="text-3xl mt-10">{t("signIn")}</h2>
          <form 
            className="flex justify-center items-center flex-col"
            method="POST"
            onSubmit={handleSubmit(onSubmit)}
          >
            <Card className="bg-secondary p-12">
              <CardBody className="space-y-4">  
                <Controller
                    name="email"
                    control={control}
                    rules={{ required: tv('emailRequired') }}
                    render={({ field: {onChange, onBlur, value} }) => (
                        <JPInputFormField
                            label={t('email')}
                            value={value}
                            onBlur={onBlur}
                            onChange={onChange}
                            onClear={() => setValue('email', '')}
                            errorMessage={errors.email?.message}
                            isInvalid={errors.email ? true : false}
                            />
                    )} 
                />

                <Controller
                    name="password"
                    control={control}
                    rules={{ required: tv('passwordRequired') }}
                    render={({ field: {onChange, onBlur, value} }) => (
                        <JPInputFormField
                            label={t('password')}
                            type="password"
                            value={value}
                            onBlur={onBlur}
                            onChange={onChange}
                            onClear={() => setValue('password', '')}
                            errorMessage={errors.password?.message}
                            isInvalid={errors.password ? true : false}
                            />
                    )} 
                />
    

                <div className="flex justify-center mt-4">
                  <JPButton 
                    type="submit"
                    className="w-full" 
                    label={t("logIn")} 
                    disabled={!isValid}
                  />
                </div>
                
                <div className="text-center flex-row">
                  <p>{t('orSignInWith')}</p>
                </div>
                <div className="flex gap-4 items-center justify-center">
                  <JPButton label="apple" />
                  <JPButton label="microsoft" />
                  <JPButton label="google" />
                </div>
              </CardBody>
            </Card>
          </form>
        </div>
      );
    }