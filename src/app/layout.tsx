import { Providers } from "@/components/Providers";
import "@/styles/globals.css";
import { Inter } from "next/font/google";
import { Toaster } from "@/components/ui/Toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "App Router Test",
  description: "Lets move fast and break things with app router",
};

export default function RootLayout({
  children,
  authModal,
}: {
  children: React.ReactNode;
  authModal: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className={inter.className}>
        <Providers>
          {authModal}
          {children}
        </Providers>
        <Toaster />
      </body>
    </html>
  );
}
