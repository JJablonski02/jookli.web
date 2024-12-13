"use client"

import type { SharedSelection } from "@nextui-org/react"
import { Select, SelectItem } from "@nextui-org/react"

export type JPSelectData<Key extends string = string> = {
  key: Key
  label: string
}

interface JPSelectProps {
  data: JPSelectData[]
  placeholder?: string
  label?: string
  onSelectionChange?: (keys: SharedSelection) => void
}

export const JPSelect: React.FC<JPSelectProps> = ({
  data,
  placeholder,
  label,
  onSelectionChange,
}) => {
  return (
    <Select
      className="w-52 sm:w-36"
      items={data}
      label={label}
      placeholder={placeholder}
      onSelectionChange={onSelectionChange}
    >
      {(item) => (
        <SelectItem className="min-h-10" key={item.key}>
          {item.label}
        </SelectItem>
      )}
    </Select>
  )
}
