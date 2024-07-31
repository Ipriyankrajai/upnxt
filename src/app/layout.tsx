import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";
import "./globals.css";

const RobotoMono = Roboto_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "UP NXT",
  description: "UP NXT - Some this is comming up soon",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={RobotoMono.className}>{children}</body>
    </html>
  );
}
