"use client"

import type { InputProps } from "@nextui-org/input"
import { Input } from "@nextui-org/input"
import React from "react"

interface IJPInputFormField extends InputProps {
  topLabel?: string
}

const JPInputFormField: React.FC<IJPInputFormField> = ({ ...props }) => {
  return (
    <div className="w-full">
      {props.topLabel && (
        <p className="mb-1 md:text-sm">
          {props.required && <span className="text-danger">* </span>}
          {props.topLabel}
        </p>
      )}
      <Input
        variant="faded"
        size="md"
        labelPlacement="inside"
        color="secondary"
        {...props}
      />
    </div>
  )
}

export default JPInputFormField
