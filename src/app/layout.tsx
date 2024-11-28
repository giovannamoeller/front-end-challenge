import type { Metadata } from "next";
import { Merriweather, Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const inter = Inter({
  subsets: ["latin"],
})

/*const merriweather = Merriweather({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
})*/

export const metadata: Metadata = {
  title: "Star Wars Characters",
  description: "Explore os personagens do universo Star Wars",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${inter.className}  antialiased container mx-auto`}
      >
        {children}
      </body>
    </html>
  );
}
