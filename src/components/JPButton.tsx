"use client";
import React from "react";
import JPImage from "./JPImage";
import { Button } from "@nextui-org/button";

interface ButtonProps {
  imageType?: "playStore" | "appStore";
  label?: string;
  className?: string;
  alt?: string;
}

const JPButton: React.FC<ButtonProps> = ({
  imageType,
  label,
  alt,
  className,
}) => {
  return (
    <Button className={className} color="primary">
      {imageType && (
        <JPImage type={imageType} width={20} height={20} alt={alt} />
      )}
      {label}
    </Button>
  );
};

export default JPButton;
