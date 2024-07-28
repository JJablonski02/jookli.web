import { ImageProps } from "next/image";

export interface JPImageProps extends Omit<ImageProps, "src" | "alt"> {
  type: "playStore" | "appStore";
  alt?: string;
}
