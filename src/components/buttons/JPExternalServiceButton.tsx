"use client";
import React from "react";
import JPIcon, { JPIconType } from "./JPIcon";
import { Button, ButtonProps } from "@nextui-org/button";

export type ExternalServiceType = "apple" | "google" | "microsoft";

interface JPExternalServiceButtonProps extends ButtonProps {
  serviceType: ExternalServiceType
  className?: string;
  alt?: string;
}

const JPExternalServiceButton: React.FC<JPExternalServiceButtonProps> = ({
  serviceType,
  alt,
  className,
  ...props}) => {
  return (
    <Button 
    isIconOnly
    className={`h-12 w-12 rounded-full border-2 border-white bg-transparent p-0 overflow-hidden ${className}`}
            color="default" 
        {...props}>
        <JPIcon type={serviceType} width={20} height={20} alt={alt} />
    </Button>
  );
};

export default JPExternalServiceButton;
