import Footer from "@/components/Footer/Footer";
import NavBarUi from "@/components/NavBarUi";
import RootLayout from '../root-layout';

export interface ClientLayoutProps {
  children: React.ReactNode;
  params: {
    locale: string;
  };
}

export default function ClientLayout({
  children,
  params,
}: Readonly<ClientLayoutProps>) {
  return (
    <RootLayout params={params}>
      <NavBarUi/>
        <main className="main-height">
            {children}
        </main>
    </RootLayout>
  );
}
