"use client";
import React from "react";

interface InputProps {
  placeholder?: string;
  className?: string;
}

const JPInput: React.FC<InputProps> = ({ placeholder, className }) => {
  return <input className={className} placeholder={placeholder}></input>;
};

export default JPInput;
