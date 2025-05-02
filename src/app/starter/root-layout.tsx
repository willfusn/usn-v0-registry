import { VercelToolbar } from "@vercel/toolbar/next";
import type { Metadata } from "next";
import React, { type ReactNode } from "react";

import { cn } from "@/lib/utils";
import { Geist, Geist_Mono } from "next/font/google";

import "@/app/globals.css";
import { BrandHeader } from "@/components/brand-header";
import { BrandSidebar } from "@/components/brand-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Toaster } from "sonner";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist" });
const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

const fonts = `${geist.variable} ${geistMono.variable}`;

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" className={cn(fonts, "bg-background")}>
      <body>
        <SidebarProvider>
          <BrandHeader />
          <BrandSidebar />
          <main className="mt-16 flex w-full justify-center">
            <div className="container">{children}</div>
          </main>
          <Toaster />
        </SidebarProvider>

        {process.env.NODE_ENV === "development" && <VercelToolbar />}
      </body>
    </html>
  );
}
