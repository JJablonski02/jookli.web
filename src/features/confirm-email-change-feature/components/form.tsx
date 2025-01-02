"use client"

import { Card, CardBody } from "@nextui-org/card"
import Link from "next/link"
import { LoaderIcon } from "react-hot-toast"

import JPButton from "@/components/buttons/JPButton"
import { toHome } from "@/lib/routes"

import { useConfirmEmailChange } from "../hooks/use-confirm-email-change"

export const ConfirmEmailChangeForm = () => {
  const { name, error, t } = useConfirmEmailChange()
  return (
    <Card className="mx-auto w-full max-w-md sm:max-w-[85%]">
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
