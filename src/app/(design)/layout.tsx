import { VercelToolbar } from "@vercel/toolbar/next";
import type { Metadata } from "next";
import type { ReactNode } from "react";

import "@/styles/globals.css";
import { RegistrySidebar } from "@/app/registry-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

export const metadata: Metadata = {
  title: "Design Registry",
  description:
    "Starter to help build a Shadcn Design Registry using Tailwind v4",
  icons: [{ rel: "icon", url: "/favicon.svg", type: "image/svg+xml" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <SidebarProvider>
      <RegistrySidebar />
      <SidebarInset>
        <div className="flex min-h-screen flex-col">{children}</div>
      </SidebarInset>
    </SidebarProvider>
  );
}
