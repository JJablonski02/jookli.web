"use client";
import { Button } from "@nextui-org/button";
import { useTranslations } from "next-intl";
import React from "react";

interface JPDownloadButtonProps {
  className?: string;
}

const JPDownloadButton: React.FC<JPDownloadButtonProps> = ({ className }) => {
  const t = useTranslations("JPDownloadButton");
  return (
    <Button className={className} radius="full">
      {t("downloadApp")}
    </Button>
  );
};

export default JPDownloadButton;
