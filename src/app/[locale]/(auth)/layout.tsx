import type { Metadata } from "next"
import { setRequestLocale } from "next-intl/server"

import NavBarUi from "@/components/NavBarUi"
import { metadata as siteMetadata } from "@/configs/metadata"

import RootLayout from "../root-layout"

export const metadata: Metadata = siteMetadata
export interface ClientLayoutProps {
  children: React.ReactNode
  params: {
    locale: string
  }
}

export default function ClientLayout({
  children,
  params,
}: Readonly<ClientLayoutProps>) {
  setRequestLocale(params.locale)
  return (
    <RootLayout params={params}>
      <NavBarUi />
      <main className="main-height flex items-center">{children}</main>
    </RootLayout>
  )
}
