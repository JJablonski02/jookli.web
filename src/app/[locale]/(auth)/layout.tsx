import NavBarUi from "@/components/NavBarUi";
import RootLayout from '../root-layout';
import Header from "@nextui-org/button"
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
        <main className="flex items-center main-height">
            {children}
        </main>
    </RootLayout>
  );
}
