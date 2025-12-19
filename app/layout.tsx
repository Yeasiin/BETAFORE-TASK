import type { Metadata } from "next";
import localFont from "next/font/local";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-roboto",
});

const centuryGothic = localFont({
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
      <body
        className={`${centuryGothic.className} ${roboto.variable} antialiased overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
