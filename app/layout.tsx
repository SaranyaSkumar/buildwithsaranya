import type { Metadata } from "next";
import "./globals.css";
import SiteHeader from "@/components/redesign/SiteHeader";
import SiteFooter from "@/components/redesign/SiteFooter";
export const metadata:Metadata={title:"Saranya Sasi Kumar | Software Engineer & AI",description:"Software engineer in Auckland building thoughtful full-stack, cloud and AI-enabled software."};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body><div className="site-shell"><SiteHeader/>{children}<SiteFooter/></div></body></html>}