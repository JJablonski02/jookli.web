import "../../styles/globals.css"
import "../../styles/components.css"
import "../../../public/icons.svg"

import type { Metadata } from "next"
import { NextIntlClientProvider } from "next-intl"
import { getMessages, unstable_setRequestLocale } from "next-intl/server"

import Providers from "../../providers/providers"

export const metadata: Metadata = {
  title: "JoyProfits",
  description: "Earn rewards and money in your spare time!",
}

export interface RootLayoutProps {
  children: React.ReactNode
  params: {
    locale: string
  }
}

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<RootLayoutProps>) {
  unstable_setRequestLocale(locale)
  const messages = await getMessages()

  return (
    <html lang={locale}>
      <body
        suppressHydrationWarning={
          process.env.NODE_ENV !== "production"
        } /** Wyłączamy hydracje w trybie development/test. Hydracja poprzez localhost wywołuje nieoczekiwany błąd w konsoli dewelopreskiej. W przypadku produkcji elementy renderowane są poprawnie. [BUG NextJS] */
      >
        <NextIntlClientProvider messages={messages}>
          <Providers>{children}</Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
