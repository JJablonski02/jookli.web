import type { Metadata } from "next";
import '../../styles/globals.css'

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NavBarUi from "@/components/NavBarUi";
import Providers from "../../providers/providers";

export const metadata: Metadata = {
  title: "JoyProfits",
  description: "Earn rewards and money in your spare time!",
};

interface RootLayoutProps {
  children: React.ReactNode,
  params: {
    locale: string;
  };
}

export default function RootLayout({
  children,
  params: {
    locale
  }
}: Readonly<RootLayoutProps>) {
  return (
    <html lang={locale}>
      <body>
        <Providers>
          {/* <Navbar /> */}
          <NavBarUi />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
