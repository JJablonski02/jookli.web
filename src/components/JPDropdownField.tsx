"use client"

import type { SharedSelection } from "@nextui-org/react"
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react"
import { useTranslations } from "next-intl"
import React from "react"

export type DropdownData = Record<string, string>

interface IJPDropdownField {
  data: DropdownData
  onSelectionChange?: (key: string, label: string) => void
  topLabel?: string
  required?: boolean
}

export const JPDropdownField: React.FC<IJPDropdownField> = ({
  data,
  topLabel,
  required,
  onSelectionChange,
}) => {
  const [selectedKeys, setSelectedKeys] = React.useState<SharedSelection>(
    new Set([])
  )

  const t = useTranslations("Dropdown")

  const selectedValue = React.useMemo(() => {
    const selectedKey = Array.from(selectedKeys)[0]
    return selectedKey ? data[selectedKey] : t("selectType")
  }, [selectedKeys, data, t])

  const onSelectedChange = (keys: SharedSelection) => {
    const currentKey = keys?.currentKey

    if (currentKey && onSelectionChange) {
      const label = data[currentKey]
      onSelectionChange(currentKey, label)
    }
    setSelectedKeys(keys)
  }

  return (
    <div className="w-full">
      {topLabel && (
        <p className="mb-1 md:text-sm">
          {required && <span className="text-danger">* </span>}
          {topLabel}
        </p>
      )}
      <Dropdown backdrop="blur">
        <DropdownTrigger>
          <Button size="lg" className="w-full bg-white capitalize">
            {selectedValue}
          </Button>
        </DropdownTrigger>
        <DropdownMenu
          aria-label="Single selection example"
          variant="flat"
          disallowEmptySelection
          className="w-full"
          selectionMode="single"
          selectedKeys={selectedKeys}
          onSelectionChange={onSelectedChange}
        >
          {Object.entries(data).map(([key, label]) => (
            <DropdownItem key={key}>{label}</DropdownItem>
          ))}
        </DropdownMenu>
      </Dropdown>
    </div>
  )
}
