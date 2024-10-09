"use client"

import type { ButtonProps } from "@nextui-org/button"
import { Button } from "@nextui-org/button"
import React from "react"

import type { JPIconType } from "./JPIcon"
import { JPIcon } from "./JPIcon"

interface JPButtonProps extends ButtonProps {
  iconType?: JPIconType
  label?: string
  className?: string
  alt?: string
}

const JPButton: React.FC<JPButtonProps> = ({
  iconType,
  label,
  alt,
  className,
  ...props
}) => {
  return (
    <Button className={`h-12 ${className}`} color="default" {...props}>
      {iconType && <JPIcon type={iconType} width={20} height={20} alt={alt} />}
      <p className="text-sm text-white">{label}</p>
    </Button>
  )
}

export default JPButton
