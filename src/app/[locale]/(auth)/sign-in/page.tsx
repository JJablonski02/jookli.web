import { useTranslations } from "next-intl"
import React from "react"

import { LoginForm } from "./components/login-form"

const SignIn = () => {
  const t = useTranslations("SignIn")

  return <LoginForm />
}

export default SignIn
