import type { CheckboxProps } from "@nextui-org/react"
import { Checkbox } from "@nextui-org/react"

interface IJPCheckbox extends CheckboxProps {
  label?: string
}

export const JPCheckbox: React.FC<IJPCheckbox> = ({ ...props }) => {
  return (
    <div className="flex w-3/4 flex-row gap-8 self-start md:w-full md:gap-4">
      <Checkbox radius="sm" color="success" {...props} />
      {props.label && <p className="md:text-sm">{props.label}</p>}
    </div>
  )
}
