import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Eaneer Energetics – Solar Energy Solutions",
  description: "Start saving up to 80% on your monthly energy bill with Eaneer Energetics solar installations.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}