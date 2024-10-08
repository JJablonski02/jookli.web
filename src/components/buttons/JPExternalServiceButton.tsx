"use client"

import type { ButtonProps } from "@nextui-org/button"
import { Button } from "@nextui-org/button"
import React from "react"

import JPIcon from "./JPIcon"

export type ExternalServiceType = "apple" | "google" | "microsoft"

interface JPExternalServiceButtonProps extends ButtonProps {
  serviceType: ExternalServiceType
  className?: string
  alt?: string
}

const JPExternalServiceButton: React.FC<JPExternalServiceButtonProps> = ({
  serviceType,
  alt,
  className,
  ...props
}) => {
  return (
    <Button
      isIconOnly
      className={`size-12 overflow-hidden rounded-full border-2 border-white bg-transparent p-0 ${className}`}
      color="default"
      {...props}
    >
      <JPIcon type={serviceType} width={20} height={20} alt={alt} />
    </Button>
  )
}

export default JPExternalServiceButton
