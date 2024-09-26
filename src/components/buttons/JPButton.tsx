"use client";
import React from "react";
import JPIcon, { JPIconType } from "./JPIcon";
import { Button, ButtonProps } from "@nextui-org/button";

interface JPButtonProps extends ButtonProps {
  iconType?: JPIconType;
  label?: string;
  className?: string;
  alt?: string;
}

const JPButton: React.FC<JPButtonProps> = ({
  iconType: iconType,
  label,
  alt,
  className,
  ...props}) => {
  return (
    <Button className={'h-12 ' + className} color="default" {...props}>
      {iconType && (
        <JPIcon type={iconType} width={20} height={20} alt={alt} />
      )}
      <p className="text-white text-sm">{label}</p>
    </Button>
  );
};

export default JPButton;
