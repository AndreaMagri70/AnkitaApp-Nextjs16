export const dynamic = "force-dynamic";

import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Header from "@/components/common/header";
import Footer from "@/components/common/footer";
import { ClerkProvider } from "@clerk/nextjs";

const outfit = Outfit({
  // variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "iBuiltThis - Share Your Creation, Discover New Launches",
  description: "iBuiltThis is a platform for building and sharing your own projects with the world",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const publishableKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;

  return (
    <ClerkProvider publishableKey={publishableKey}>
    {/* Aggiungi suppressHydrationWarning qui */}
      <html lang="en" suppressHydrationWarning>
      <body
        className={`${outfit.className} antialiased`}
      >
        <Header />

        {children}

        <Footer />
        
      </body>
    </html>
    </ClerkProvider>
  );
}
