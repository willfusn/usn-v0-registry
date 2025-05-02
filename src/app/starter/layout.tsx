import { BrandHeader } from "@/components/brand-header";
import { BrandSidebar } from "@/components/brand-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Inter } from "next/font/google";
import type React from "react";
import { Toaster } from "sonner";

import "@/app/globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SidebarProvider>
          <BrandHeader />
          <BrandSidebar />
          <main className="mt-16 flex w-full justify-center">
            <div className="container">{children}</div>
          </main>
          <Toaster />
        </SidebarProvider>
      </body>
    </html>
  );
}
