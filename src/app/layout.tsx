import type { Metadata } from "next";
import "./globals.scss";
import { Providers } from "./providers";

import { Titillium_Web } from "next/font/google";
import Menu from "./_ui/Menu/Menu";

const font = Titillium_Web({ weight: ["400", "600"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Raouf Hecham",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={font.className}>
        <Providers>
          <div className="global-container">
            <div className="menu-and-content">
              <div className="menu">
                <Menu />
              </div>
              <div className="main-content">{children}</div>
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
