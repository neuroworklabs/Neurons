import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { SessionExpiredHandler } from "@/components/auth/session-expired-handler";
import { AuthSuccessToaster } from "@/components/toast/auth-success-toaster";
import { SonnerToaster } from "@/components/toast/sonner-toaster";
import {
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_OG_TITLE,
  SITE_URL,
} from "@/lib/site/site-config";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin", "latin-ext"],
  display: "swap",
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: SITE_OG_TITLE,
    description: SITE_DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_OG_TITLE,
    description: SITE_DESCRIPTION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${plusJakartaSans.variable} antialiased`}
      >
        {children}
        <SonnerToaster />
        <AuthSuccessToaster />
        <SessionExpiredHandler />
      </body>
    </html>
  );
}
