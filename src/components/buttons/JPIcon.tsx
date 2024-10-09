import type { ImageProps } from "next/image"
import Image from "next/image"
import React from "react"

const imageMap: { [key: string]: string } = {
  googlePlayStore: "/googlePlayStore.svg",
  apple: "/appStoreIcon.svg",
  microsoft: "/microsoft.svg",
  google: "/google.svg",
}

export type JPIconType = "googlePlayStore" | "apple" | "microsoft" | "google"

interface JPIconComponentProps extends Omit<ImageProps, "src" | "alt"> {
  type: JPIconType
  alt?: string
}

const JPIconComponent: React.FC<JPIconComponentProps> = ({
  type,
  width,
  height,
  alt,
  className,
  ...props
}) => {
  const src = imageMap[type]

  if (!src) {
    return "missing"
  }

  const altText = alt || type

  return (
    <Image
      src={src}
      width={width}
      height={height}
      alt={altText}
      className={className}
      {...props}
    />
  )
}

export const JPIcon = React.memo(JPIconComponent)
