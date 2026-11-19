import "./globals.css";
import type { ReactNode } from "react";

export const metadata = {
  title: "Builder-Erp",
  description: "Real Estate Developer ERP"
};

export default function RootLayout({
  children
}: Readonly<{children: ReactNode}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
