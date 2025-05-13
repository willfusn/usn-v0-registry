import type React from "react";
import { Toaster } from "sonner";

import { SidebarProvider } from "@/components/ui/sidebar";

import "@/styles/globals.css";
import "@/styles/tailwind.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      {children}
      <Toaster />
    </SidebarProvider>
  );
}
