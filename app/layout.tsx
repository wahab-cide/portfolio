import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Wahab Cide | Developer & Researcher",
  description:
    "CS & Mathematics student at Williams College. Building Loop (rideshare platform), researching AI for African languages, and writing technical content on full-stack development.",
  keywords: [
    "Wahab Cide",
    "Williams College",
    "Full Stack Developer",
    "Next.js",
    "React Native",
    "TypeScript",
    "AI Research",
    "Technical Writing",
    "Loop",
  ],
  authors: [{ name: "Wahab Cide" }],
  openGraph: {
    title: "Wahab Cide | Developer & Researcher",
    description:
      "Building mobility solutions and researching AI for African languages",
    type: "website",
  },
  icons: {
    icon: "/portfolio.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("antialiased bg-black", inter.className)}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
