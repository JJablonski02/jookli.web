import { Textarea, TextAreaProps } from "@nextui-org/input"

export const JPTextAreaField : React.FC<TextAreaProps> = ({ ...props }) => {
    
    return(
        <Textarea
        {...props}
        />
    )
}