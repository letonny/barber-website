import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { siteConfig } from "@/lib/site-config";
import "./globals.css";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist" });

export const metadata: Metadata = {
  title: `${siteConfig.brand} | Fresh Cuts. No Compromise.`,
  description: "Clean fades, sharp tapers, and cuts with attention to every detail. Explore the work, services, and booking information.",
  robots: { index: false, follow: false }, // Remove when real client details and booking are live.
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return <html lang="en"><body className={geist.variable}>{children}</body></html>;
}
