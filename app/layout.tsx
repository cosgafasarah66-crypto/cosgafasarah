import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sarah | Portfolio",
  description: "My personal portfolio website made with Next.js",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
      
      <header className="border-b bg-gray-100">
  <nav className="mx-auto flex max-w-2xl gap-6 px-6 py-4 font-medium">
    <Link href="/" className="hover:text-blue-600">Home</Link>
    <Link href="/about" className="hover:text-blue-600">About</Link>
    <Link href="/projects" className="hover:text-blue-600">Projects</Link>
  </nav>
</header>
      {children}
      </body>
    </html>
  );
}
