import NavBarUi from "@/components/NavBarUi"

import RootLayout from "../root-layout"

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
  return (
    <RootLayout params={params}>
      <NavBarUi />
      <main className="main-height flex items-center">{children}</main>
    </RootLayout>
  )
}
