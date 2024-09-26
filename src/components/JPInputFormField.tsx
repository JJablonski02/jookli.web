"use client";
import { Input, InputProps } from "@nextui-org/input";
import React from "react";

const JPInputFormField : React.FC<InputProps> = ({...props }) => {
  return (
      <Input 
          variant='faded' 
          labelPlacement="inside"
          className="h-20"
          color={'secondary'}
          {...props}
      />
  );
};


export default JPInputFormField;
