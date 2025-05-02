import { OpenInV0Button } from "@/components/open-in-v0";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import type React from "react";

const starters = [
  {
    title: "Dashboard",
    name: "dashboard",
    url: "/starter/dashboard",
  },
  {
    title: "Store",
    name: "store",
    url: "/starter/store",
  },
];

export default function StartPage() {
  return (
    <div className="container p-10">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <Button variant="ghost" size="sm" asChild className="mb-4">
            <Link href="/">
              <ArrowLeft className="mr-2 size-4" />
              Back to Home
            </Link>
          </Button>
          <h1 className="font-bold text-3xl tracking-tight">v0 Starter</h1>
          <p className="mt-1 text-muted-foreground">
            Blank applications with brand themed components ready to open in v0.
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-16">
        {starters.map((starter) => (
          <div key={starter.name}>
            <div className="mb-6 flex items-center justify-between">
              <h3 className="font-bold">{starter.title}</h3>
              <OpenInV0Button
                name={starter.name}
                prompt="This is a blank application prototype with existing components and shadcn styling. Prompt v0 to make changes or build on top of the existing template"
              />
            </div>

            <div className="flex flex-col items-center justify-center gap-4 rounded-md border border-primary/20">
              <div className="h-[800px] w-full overflow-hidden rounded-md border border-border">
                <iframe
                  title="Starter"
                  src={starter.url}
                  className="h-full w-full overflow-hidden"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
