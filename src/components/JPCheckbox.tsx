import { Checkbox, CheckboxProps, cn } from "@nextui-org/react"

interface IJPCheckbox extends CheckboxProps {
    label?: string
}

export const JPCheckbox : React.FC<IJPCheckbox> = ({...props}) => {
    return(
        <div className="w-3/4 self-start flex flex-row gap-8 md:w-full md:gap-4">
            <Checkbox 
            radius="sm" 
            color="success" 
            {...props}/>
            {props.label && (
                <p className="md:text-sm">
                    {props.label}
                </p>
            )}
        </div>
        
    )
}