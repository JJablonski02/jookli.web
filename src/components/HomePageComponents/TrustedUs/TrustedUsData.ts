import type { StaticImageData } from "next/image"

import awin from "@/../public/trustedus/awin.svg"
import ayet from "@/../public/trustedus/ayetstudios.png"
import bitlabs from "@/../public/trustedus/bitlabs.png"
// import digitalturbine from "@/../public/trustedus/digitalturbine.png"
import fyber from "@/../public/trustedus/fyber.png"
import googleadmob from "@/../public/trustedus/googleAdMob.png"
import ironsource from "@/../public/trustedus/ironsource.svg"
import meta from "@/../public/trustedus/meta.png"
import prodege from "@/../public/trustedus/prodege.png"
import tapjoy from "@/../public/trustedus/tapjoy.png"
import tiktok from "@/../public/trustedus/tiktok.png"
import tradedoubler from "@/../public/trustedus/tradedoubler.svg"

export type TrustedUsDataType = {
  id: string
  src: StaticImageData
  alt: string
}

export const TrustedUsData: TrustedUsDataType[] = [
  {
    id: "ayet-studios",
    src: ayet,
    alt: "ayet-studios-img",
  },
  {
    id: "bitlabs",
    src: bitlabs,
    alt: "bitlabs-img",
  },
  // {
  //   id: "digital-turbine",
  //   src: digitalturbine,
  //   alt: "digital-turbine-img",
  // },
  {
    id: "fyber",
    src: fyber,
    alt: "fyber-img",
  },
  {
    id: "google-ad-mob",
    src: googleadmob,
    alt: "google-ad-mob-img",
  },
  {
    id: "prodege",
    src: prodege,
    alt: "prodege-img",
  },
  {
    id: "tapjoy",
    src: tapjoy,
    alt: "tapjoy-img",
  },
  {
    id: "tiktok",
    src: tiktok,
    alt: "tiktok-img",
  },
  {
    id: "trade-doubler",
    src: tradedoubler,
    alt: "trade-doubler-img",
  },
  {
    id: "meta",
    src: meta,
    alt: "meta-img",
  },
  {
    id: "awin",
    src: awin,
    alt: "awin-img",
  },
  {
    id: "iron-source",
    src: ironsource,
    alt: "iron-source-img",
  },
]
