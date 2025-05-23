import type { Metadata } from "next";
import Image from "next/image";
import "./globals.css";
import NavBar from "@/app/ui/nav_bar";

export const metadata: Metadata = {
  title: "Roman Catholic Archdiocese of Cebu",
  description: "Roman Catholic Archdiocese of Cebu",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <header>
          <NavBar />
          <Image
            src="/Home page background 1.png"
            alt="Home page background"
            width={300}
            height={300}
            className="fixed top-0 right-0 -z-1 h-auto w-full opacity-30 md:h-screen md:w-auto"
          />
        </header>
        <main>{children}</main>
        <footer className="bg-secondary p-5 text-center text-sm font-semibold tracking-widest text-white">
          Copyright 2024 &copy; The Roman Catholic Archdiocese of Cebu. All
          Rights Reserved.
        </footer>
      </body>
    </html>
  );
}
