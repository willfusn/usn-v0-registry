import { VercelToolbar } from "@vercel/toolbar/next";
import { Geist } from "next/font/google";
import React, { type ReactNode } from "react";
import { cn } from "@/lib/utils";
import "@/app/tokens.css";
import "@/app/globals.css";

const geist = Geist({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" className={cn(geist.className, "bg-background", "text-foreground")}>
      <body>
        <main className="mt-16 flex w-full justify-center">
          <div className="container">{children}</div>
        </main>
      </body>
    </html>
  );
}
