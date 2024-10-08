"use client"

import { Button } from "@nextui-org/button"
import { Card, CardBody } from "@nextui-org/card"
import { useSearchParams } from "next/navigation"
import { useTranslations } from "next-intl"
import { useEffect, useState } from "react"

import { fetchConfirmAccountEmail } from "@/api/rest/emails"
import type { JookliException } from "@/types/jookli"

const verifyEmail: React.FC = () => {
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

  return (
    <div className="flex h-full items-center justify-center">
      <Card className="w-96 shadow-lg">
        <CardBody className="p-6 text-center">
          <h2 className="mb-4 text-2xl font-bold">
            {t("VerifyEmail.accountActivated")}
          </h2>
          <p className="mb-2 text-lg">
            {t("VerifyEmail.hello")}, {name}
          </p>
          <p className="text-gray-600 mb-4">{t("VerifyEmail.thankYouNote")}</p>
          <Button className="bg-blue-500 hover:bg-blue-600 text-white">
            {t("VerifyEmail.returnToApp")}
          </Button>
        </CardBody>
      </Card>
    </div>
  )
}

export default verifyEmail
