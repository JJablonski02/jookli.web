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
import React, { useEffect } from "react"

export type DropdownData<T extends string = string> = Record<T, string>
interface IJPDropdownField {
  data: DropdownData
  onSelectionChange?: (key: string, label: string) => void
  topLabel?: string
  required?: boolean
  selected?: { key: string }
}

export const JPDropdownField: React.FC<IJPDropdownField> = ({
  data,
  topLabel,
  required,
  onSelectionChange,
  selected,
}) => {
  const [selectedKeys, setSelectedKeys] = React.useState<SharedSelection>(
    new Set([])
  )

  const t = useTranslations("Dropdown")

  useEffect(() => {
    if (selected?.key) {
      setSelectedKeys(new Set([selected.key]))
    }
  }, [selected])

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
          <Button size="md" className="w-full bg-background-field capitalize">
            {selectedValue}
          </Button>
        </DropdownTrigger>
        <DropdownMenu
          aria-label="Single selection example"
          variant="flat"
          disallowEmptySelection
          className="w-full"
          content="max-h-[150px]"
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
