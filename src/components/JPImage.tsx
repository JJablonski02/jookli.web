import React from "react";
import { JPImageProps } from "./JPImageProps";
import Image from "next/image";

const imageMap: { [key: string]: string } = {
  playStore: "/playStoreIcon.svg",
  appStore: "/appStoreIcon.svg",
};

const JPImage: React.FC<JPImageProps> = ({
  type,
  width,
  height,
  alt,
  ...props
}) => {
  const src = imageMap[type];

  if (!src) {
    return null;
  }

  const altText = alt || type;

  return (
    <Image src={src} width={width} height={height} alt={altText} {...props} />
  );
};

export default JPImage;
