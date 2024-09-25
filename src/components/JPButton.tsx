"use client";
import React from "react";
import JPImage from "./JPImage";
import { Button, ButtonProps } from "@nextui-org/button";

interface JPButtonProps extends ButtonProps {
  imageType?: "playStore" | "appStore";
  label?: string;
  className?: string;
  alt?: string;
}

const JPButton: React.FC<JPButtonProps> = ({
  imageType,
  label,
  alt,
  className,
  ...props}) => {
  return (
    <Button className={className} color="default" {...props}>
      {imageType && (
        <JPImage type={imageType} width={20} height={20} alt={alt} />
      )}
      {label}
    </Button>
  );
};

export default JPButton;
