import { SidebarProvider } from "@/components/ui/sidebar";
import type { ReactNode } from "react";

import { Toaster } from "@/components/ui/sonner";
import { MobileSidebarTrigger, RegistrySidebar } from "./registry-sidebar";

export default function RegistryLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <SidebarProvider>
      <MobileSidebarTrigger />
      <RegistrySidebar />
      <main className="flex w-full justify-center">{children}</main>
      <Toaster />
    </SidebarProvider>
  );
}
