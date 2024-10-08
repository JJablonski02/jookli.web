import Footer from "@/components/Footer/Footer"
import NavBarUi from "@/components/NavBarUi"

import RootLayout from "../root-layout"

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
