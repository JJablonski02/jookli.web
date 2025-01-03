import "../../styles/globals.css"
import "../../styles/components.css"
// eslint-disable-next-line import/no-extraneous-dependencies
import "flag-icons/css/flag-icons.min.css"

import { notFound } from "next/navigation"
import { NextIntlClientProvider } from "next-intl"
import { getMessages, setRequestLocale } from "next-intl/server"

import { JPToaster } from "@/components/JPToaster"
import { routing } from "@/i18n/routing"

import Providers from "../../providers/providers"

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
  if (!routing.locales.includes(locale as any)) {
    return notFound()
  }

  setRequestLocale(locale)

  const messages = await getMessages()

  return (
    <html lang={locale}>
      <body
        suppressHydrationWarning={
          process.env.NODE_ENV !== "production"
        } /** Wyłączamy hydracje w trybie development/test. Hydracja poprzez localhost wywołuje nieoczekiwany błąd w konsoli dewelopreskiej. W przypadku produkcji elementy renderowane są poprawnie. [BUG NextJS] */
      >
        <NextIntlClientProvider messages={messages}>
          <JPToaster />
          <Providers>{children}</Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
