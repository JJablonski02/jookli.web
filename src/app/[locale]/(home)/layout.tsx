import type { Metadata } from "next"

import Footer from "@/components/Footer/Footer"
import NavBarUi from "@/components/NavBarUi"
import { metadata as siteMetadata } from "@/constants/metadata"

import RootLayout from "../root-layout"

export const metadata: Metadata = siteMetadata
export interface HomeLayoutProps {
  children: React.ReactNode
  params: {
    locale: string
  }
}

export default function HomeLayout({
  children,
  params,
}: Readonly<HomeLayoutProps>) {
  return (
    <RootLayout params={params}>
      <NavBarUi />
      {children}
      <Footer />
    </RootLayout>
  )
}
