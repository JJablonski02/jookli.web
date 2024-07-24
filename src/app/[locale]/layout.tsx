import type { Metadata } from "next";
import "../../styles/globals.css";

import Footer from "@/components/Footer";
import NavBarUi from "@/components/NavBarUi";
import Providers from "../../providers/providers";
import { getMessages, unstable_setRequestLocale } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";

export const metadata: Metadata = {
  title: "JoyProfits",
  description: "Earn rewards and money in your spare time!",
};

interface RootLayoutProps {
  children: React.ReactNode;
  params: {
    locale: string;
  };
}

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<RootLayoutProps>) {
  unstable_setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className="bg-secondary">
        <NextIntlClientProvider messages={messages}>
          <Providers>
            <NavBarUi />
            {children}
            <Footer />
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
