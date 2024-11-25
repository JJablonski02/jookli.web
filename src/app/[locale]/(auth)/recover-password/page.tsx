"use client"

import { useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"

import { fetchConfirmAccountEmail } from "@/api/rest/emails"

import { RecoverPasswordForm } from "./components/form"

const VerifyEmail: React.FC = () => {
  const searchParams = useSearchParams()
  const token = searchParams.get("token")

  // eslint-disable-next-line unused-imports/no-unused-vars
  const [name, setName] = useState<string | null>()

  // TODO Rest
  useEffect(() => {
    const fetch = async () => {
      if (token) {
        fetchConfirmAccountEmail({ token }).then(async (res) => {
          if (res.ok) {
            setName(res.data)
          } else {
            setName(res.error?.errorDescription)
          }
        })
      }
    }

    fetch()
  }, [token])

  return <RecoverPasswordForm />
}

export default VerifyEmail
