import { VercelToolbar } from "@vercel/toolbar/next";
import type { Metadata } from "next";
import { Geist } from "next/font/google";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

import "@/app/globals.css";
import "@/app/tailwind.css";

export const metadata: Metadata = {
  title: "Design Registry",
  description:
    "Starter to help build a Shadcn Design Registry using Tailwind v4",
  icons: [{ rel: "icon", url: "/favicon.svg", type: "image/svg+xml" }],
};

const geist = Geist({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" className={cn(geist.className, "bg-background")}>
      <body>
        {children}

        {process.env.NODE_ENV === "development" && <VercelToolbar />}
      </body>
    </html>
  );
}
