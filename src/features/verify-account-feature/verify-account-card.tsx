"use client"

import { Card, CardBody } from "@nextui-org/card"
import Link from "next/link"
import { useTranslations } from "next-intl"
import { LoaderIcon } from "react-hot-toast"

import JPButton from "@/components/buttons/JPButton"
import { toHome } from "@/lib/routes"

import { useVerifyAccount } from "./hooks/use-verify-account"

export const VerifyAccountCard: React.FC = () => {
  const { success, loading, error } = useVerifyAccount()
  const t = useTranslations("VerifyEmail")

  const renderBody = () => {
    if (loading) {
      return (
        <LoaderIcon
          style={{ width: "2rem", height: "2rem" }}
          className="self-center"
        />
      )
    }
    if (success) {
      return (
        <div className="text-center">
          <h4 className="mb-6 text-center">{t("accountActivated")}</h4>
          <p>{t("thankYouNote")}</p>
        </div>
      )
    }
    if (error) {
      return (
        <div className="text-center">
          <h4 className="mb-6 text-center">{t("invalidRequest")}</h4>
          <p>{error}</p>
        </div>
      )
    }
  }

  return (
    <Card className="mx-auto w-full max-w-md bg-secondary-light sm:max-w-[85%]">
      <CardBody className="flex flex-col items-center justify-center gap-8 space-y-4 overflow-hidden py-8 sm:gap-0">
        {renderBody()}
        <JPButton
          as={Link}
          className="bg-blue"
          href={toHome}
          disabled={loading}
          label={t("returnToApp")}
        />
      </CardBody>
    </Card>
  )
}
