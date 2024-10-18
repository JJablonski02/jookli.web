"use client"

import { useSearchParams } from "next/navigation"
import { useTranslations } from "next-intl"
import { useEffect, useState } from "react"

import { fetchConfirmAccountEmail } from "@/api/rest/emails"
import type { JookliException } from "@/types/jookli"

import { RecoverPasswordForm } from "./components/form"

const VerifyEmail: React.FC = () => {
  const searchParams = useSearchParams()
  const token = searchParams.get("token")
  const [name, setName] = useState<string | null>()

  const t = useTranslations()

  // TODO Rest
  useEffect(() => {
    const fetch = async () => {
      if (token) {
        fetchConfirmAccountEmail({ token }).then(async (res) => {
          if (res.ok) {
            const result = await res.json()
            setName(result)
          } else {
            const result = (await res.json()) as JookliException
            // TODO - obsługa błędów
            setName(result.error_description)
          }
        })
      }
    }

    fetch()
  }, [token])

  return <RecoverPasswordForm />
}

export default VerifyEmail
