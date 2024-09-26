import React from "react";
import Image, { ImageProps } from "next/image";

const imageMap: { [key: string]: string } = {
  googlePlayStore: "/googlePlayStore.svg",
  apple: "/appStoreIcon.svg",
  microsoft: "/microsoft.svg",
  google: "/google.svg"
};

export type JPIconType = "googlePlayStore" | "apple" | "microsoft" | "google";

interface JPImageProps extends Omit<ImageProps, "src" | "alt"> {
  type: JPIconType;
  alt?: string;
}

const JPImage: React.FC<JPImageProps> = React.memo(({
  type,
  width,
  height,
  alt,
  className,
  ...props
}) => {
  const src = imageMap[type];

  if (!src) {
    return "missing";
  }

  const altText = alt || type;

  return (
    <Image
      src={src}
      width={width}
      height={height}
      alt={altText}
      className={className}
      {...props}
    />
  );
});

export default JPImage;
