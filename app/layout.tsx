import type { Metadata } from "next";
import "./globals.css";
import SiteHeader from "@/components/redesign/SiteHeader";
import SiteFooter from "@/components/redesign/SiteFooter";

const siteUrl = "https://www.saranyasasikumar.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Saranya Sasi Kumar | Software Engineer & Applied AI",
    template: "%s | Saranya Sasi Kumar",
  },
  description: "Saranya Sasi Kumar is an Auckland-based software engineer with 8+ years of experience in full-stack development, backend systems and AWS cloud engineering, exploring applied AI and agent workflows.",
  applicationName: "Saranya Sasi Kumar Portfolio",
  authors: [{ name: "Saranya Sasi Kumar", url: siteUrl }],
  creator: "Saranya Sasi Kumar",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_NZ",
    url: siteUrl,
    siteName: "Saranya Sasi Kumar",
    title: "Saranya Sasi Kumar | Software Engineer & Applied AI",
    description: "8+ years of software engineering. Full-stack, cloud architecture and practical AI in Auckland, New Zealand.",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Saranya Sasi Kumar — Software Engineer & Applied AI" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Saranya Sasi Kumar | Software Engineer & Applied AI",
    description: "Software engineering, cloud systems and practical AI.",
    images: ["/opengraph-image"],
  },
  icons: { icon: [{ url: "/icon.svg", type: "image/svg+xml" }] },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-NZ">
      <body>
        <div className="site-shell">
          <SiteHeader />
          {children}
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
