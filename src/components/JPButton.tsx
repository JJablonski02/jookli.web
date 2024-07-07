"use client";
import React from "react";
import { Button } from "@nextui-org/react";

interface ButtonProps {
  label?: string;
  className?: string;
}

const JPButton: React.FC<ButtonProps> = ({ label, className }) => {
  return (
    <Button className={className} color="primary">
      {label}
    </Button>
  );
};

export default JPButton;
