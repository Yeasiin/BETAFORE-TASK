import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

export const centuryGothic = localFont({
  src: [
    {
      path: "../public/fonts/centurygothic.ttf",
      weight: "400",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  title: "Win Store",
  description: "An e-commerce platform for Winning products.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${centuryGothic.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
