"use client";
import JPButton from "@/components/JPButton";
import JPInputFormField from "@/components/JPInputFormField";
import { useTranslations } from "next-intl";
import React, { useState } from "react";

interface UserCredentialsProps {
  email: string;
  password: string;
}

const Register = () => {
  const [user, setUser] = useState<UserCredentialsProps>({
    email: "",
    password: "",
  });
  const t = useTranslations("SignIn");

  return (
    <div className="flex items-center justify-center flex-col gap-6">
      <h2 className="text-3xl mt-10">{t("title")}</h2>
      <form className="flex justify-center items-center flex-col gap-4">
        <div className="border-2 border-black p-4">
          <div className="flex justify-center items-center flex-col">
            <div className="flex flex-row w-full justify-center items-center gap-2 m-2 p-2 border-2 border-gray-500">
              <label>{t("email")}: </label>
              <JPInputFormField
                className="p-2 w-full"
                placeholder={t("emailPlaceholder")}
              />
            </div>
            <div className="flex flex-row w-full justify-center items-center gap-2 m-2 p-2 border-2 border-gray-500">
              <label>{t("email")}: </label>
              <JPInputFormField
                className="p-2 w-full"
                placeholder={t("emailPlaceholder")}
              />
            </div>
            <div className="flex flex-row w-full justify-center items-center gap-2 m-2 p-2 border-2 border-gray-500 ">
              <label>{t("password")}: </label>
              <JPInputFormField className="p-2 w-full" 
              placeholder={t("password")} />
            </div>
          </div>
          <div className="flex gap-4 items-center justify-center p-4">
            <JPButton label="apple" />
            <JPButton label="microsoft" />
            <JPButton label="google" />
          </div>
          <div className="flex justify-center mt-4">
            <JPButton className="" label={t("logIn")} />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Register;
