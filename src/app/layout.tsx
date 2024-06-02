import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
import Providers from "~/components/Providers";
import { headers } from "next/headers";
import Navbar from "~/components/nav/navbar";
import { Toaster } from "~/components/ui/sonner";

export const metadata = {
  title: "Peersafe",
  description: "A decentralized, encrypted file storage service",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookie = headers().get("cookie");
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body className="flex flex-col">
        <ThemeProvider attribute="class">
          <Providers cookie={cookie}>
            <Toaster />
            <Navbar />
            {children}
          </Providers>
        </ThemeProvider>
      </body>
    </html>
  );
}
