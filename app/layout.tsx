import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

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
  return (
    <html lang="en">
      <body
        className={`${outfit.className} antialiased`}
      >
        <header>iBuiltThis</header>
        {children}
        <footer>iBuiltThis Inc. All right reserved.</footer>
      </body>
    </html>
  );
}
