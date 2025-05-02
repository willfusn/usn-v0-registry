import { VercelToolbar } from "@vercel/toolbar/next";
import type { Metadata } from "next";
import type { ReactNode } from "react";

import "@/app/globals.css";

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
    <html lang="en">
      <body>
        {children}

        {process.env.NODE_ENV === "development" && <VercelToolbar />}
      </body>
    </html>
  );
}
