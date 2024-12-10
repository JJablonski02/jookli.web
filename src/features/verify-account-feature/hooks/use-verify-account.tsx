import { notFound, useSearchParams } from "next/navigation"
import { useTranslations } from "next-intl"
import { useCallback, useEffect, useState } from "react"

import { ErrorCodeType } from "@/api/error-code-type"
import type { ErrorResponseModel } from "@/api/models/error-response-model"

import { fetchConfirmAccount } from "../api/verify-account-api"
import type {
  VerifyAccountResult,
  VerifyAccountState,
  VerifyToken,
} from "../types"

export const useVerifyAccount = (): VerifyAccountState => {
  const searchParams = useSearchParams()
  const token = searchParams.get("token")

  const t = useTranslations("Errors")

  const [result, setResult] = useState<VerifyAccountResult>({ success: false })
  const [loading, setLoading] = useState(true)

  const errorMessage = useCallback(
    (error: ErrorResponseModel | null) => {
      if (!error || !error.errorCode) {
        return t("tokenVerificationFailed")
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
        default:
          return t("tokenVerificationFailed")
      }
    },
    [t]
  )

  const processVerificationAsync = useCallback(
    async (token: VerifyToken): Promise<void> => {
      setLoading(true)
      const response = await fetchConfirmAccount(token)

      if (response.ok) {
        setResult({ success: false })
      } else {
        setResult({ success: false, error: errorMessage(response.error) })
      }
      setLoading(false)
    },
    [errorMessage]
  )

  useEffect(() => {
    if (token) {
      const verifyToken: VerifyToken = {
        token,
      }
      processVerificationAsync(verifyToken)
    } else {
      notFound()
    }
  }, [processVerificationAsync, token])

  return {
    success: result.success,
    error: result.error,
    loading,
  }
}
