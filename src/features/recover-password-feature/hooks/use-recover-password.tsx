import { notFound, useSearchParams } from "next/navigation"
import { useTranslations } from "next-intl"
import { useCallback, useEffect, useState } from "react"

import { ErrorCodeType } from "@/api/error-code-type"
import type { ErrorResponseModel } from "@/api/models/error-response-model"

import { fetchConfirmRecoverPassword } from "../api/fetch-confirm-recover-password"
import type { RecoverPassword, RecoverPasswordResult } from "../types"

export const useRecoverPassword = () => {
  const [isLoading, setLoading] = useState(false)
  const token = useSearchParams().get("token")
  const t = useTranslations("Errors")
  const [result, setResult] = useState<RecoverPasswordResult>({
    success: false,
  })

  useEffect(() => {
    if (!token) {
      notFound()
    }
  }, [token])

  const errorMessage = useCallback(
    (error: ErrorResponseModel | null) => {
      if (!error || !error.errorCode) {
        return t("passwordChangeFailed")
      }

      switch (error.errorCode) {
        case ErrorCodeType.TokenExpired:
          return t("tokenExpired")
        case ErrorCodeType.InvalidToken:
          return t("invalidToken")
        case ErrorCodeType.MissingTokenOwner:
          return t("missingTokenOwner")
        case ErrorCodeType.TokenUsed:
          return t("tokenUsed")
        case ErrorCodeType.InvalidPassword:
          return t("invalidPassword")
        default:
          return t("passwordChangeFailed")
      }
    },
    [t]
  )

  const handleRecoverPassword = useCallback(
    async (password: string, confirmPassword: string) => {
      setResult((prev) => ({ ...prev, error: undefined }))
      setLoading(true)

      try {
        if (!token) {
          setResult({ success: false, error: t("invalidToken") })
          return
        }
        const recoverPassword: RecoverPassword = {
          token,
          password,
          confirmPassword,
        }

        const response = await fetchConfirmRecoverPassword(recoverPassword)

        if (!response.ok) {
          setResult({ success: false, error: errorMessage(response.error) })
          return
        }
        setResult({ success: true })
      } catch {
        setResult({ success: false, error: t("") })
      } finally {
        setLoading(false)
      }
    },
    [errorMessage, t, token]
  )

  return {
    handleRecoverPassword,
    isLoading,
    success: result.success,
    error: result.error,
  }
}
