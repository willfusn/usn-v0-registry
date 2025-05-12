import type React from "react";
import { Toaster } from "sonner";

import { BrandHeader } from "@/components/brand-header";
import { BrandSidebar } from "@/components/brand-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";

import "@/app/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <main className="mt-16 flex w-full justify-center">
        <div className="container">{children}</div>
      </main>
      <Toaster />
    </SidebarProvider>
  );
}
