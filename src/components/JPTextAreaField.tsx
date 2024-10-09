import type { TextAreaProps } from "@nextui-org/input"
import { Textarea } from "@nextui-org/input"

interface IJPTextAreaField extends TextAreaProps {
  topLabel?: string
}

export const JPTextAreaField: React.FC<IJPTextAreaField> = ({
  topLabel,
  ...props
}) => {
  return (
    <div className="w-full">
      {topLabel && (
        <p className="mb-1 md:text-sm">
          {props.required && <span className="text-danger">* </span>}
          {topLabel}
        </p>
      )}
      <Textarea minRows={10} {...props} />
    </div>
  )
}
