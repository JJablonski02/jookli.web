"use client"

import { Card, CardBody } from "@nextui-org/card"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { useTranslations } from "next-intl"
import { useEffect, useState } from "react"
import { LoaderIcon } from "react-hot-toast"

import JPButton from "@/components/buttons/JPButton"
import { toHome } from "@/components/routes"
import { fetchConfirmEmailChangeToken } from "@/features/confirm-email-change-feature/api/fetchConfirmationToken"

const ConfirmEmailChange: React.FC = () => {
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

  return (
    <Card className="mx-auto w-full max-w-md bg-secondary-light sm:max-w-[85%]">
      <CardBody className="flex flex-col items-center justify-center gap-8 space-y-4 overflow-hidden py-8 sm:gap-0">
        {name && (
          <>
            <h2 className="mb-4 text-2xl font-bold">
              {t("VerifyEmail.accountActivated")}
            </h2>
            <p className="mb-2 text-lg">
              {t("VerifyEmail.hello")}, {name}
            </p>
            <p className="text-gray-600 mb-4">
              {t("VerifyEmail.thankYouNote")}
            </p>
            <JPButton
              as={Link}
              className="bg-blue"
              href={toHome}
              label={t("VerifyEmail.returnToApp")}
            />
          </>
        )}
        {error && <p>{error}</p>}
        {!error && !name && (
          <LoaderIcon
            style={{ width: "2rem", height: "2rem" }}
            className="self-center"
          />
        )}
      </CardBody>
    </Card>
  )
}

export default ConfirmEmailChange
