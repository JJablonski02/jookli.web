"use client";

import { BREAKPOINTS } from "@/lib/breakpoints";
import type { InputProps } from "@nextui-org/input";
import { Input } from "@nextui-org/input";
import React from "react";
import { useMediaQuery } from "react-responsive";
interface IJPInputFormField extends InputProps {
  topLabel?: string;
}

const JPInputFormField: React.FC<IJPInputFormField> = ({ ...props }) => {
  const isSm = useMediaQuery({ maxWidth: BREAKPOINTS.SM });

  return (
    <div className="w-full">
      {props.topLabel && (
        <p className="mb-1 md:text-sm">
          {props.required && <span className="text-danger">* </span>}
          {props.topLabel}
        </p>
      )}
      <Input
        variant="faded"
        size={isSm ? "sm" : "md"}
        labelPlacement="inside"
        color="secondary"
        {...props}
      />
    </div>
  );
};

export default JPInputFormField;
