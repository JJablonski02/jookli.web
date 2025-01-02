import { useSearchParams } from "next/navigation"
import { useTranslations } from "next-intl"
import { useEffect, useState } from "react"

import { fetchConfirmEmailChangeToken } from "../api/fetchConfirmationToken"

export const useConfirmEmailChange = () => {
  const searchParams = useSearchParams()
  const token = searchParams.get("token")
  const [name, setName] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  const t = useTranslations()

  // TODO Rest
  useEffect(() => {
    const fetch = async () => {
      if (token) {
        fetchConfirmEmailChangeToken({ token }).then(async (res) => {
          if (res.ok) {
            setName(res.data)
          } else {
            setError(res.error?.errorDescription || "Nieprawidłowy token")
          }
        })
      } else {
        setError("Szukany zasób nie istnieje...")
      }
    }

    fetch()
  }, [token])

  return {
    name,
    error,
    t,
  }
}
