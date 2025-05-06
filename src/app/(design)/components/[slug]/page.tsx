import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

import { components } from "@/app/(design)/components/[slug]/(components)";
import { OpenInV0Card } from "@/components/open-in-v0-card";
import { Button } from "@/components/ui/button";

export default async function ComponentPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const component = components[slug];

  if (!component) {
    notFound();
  }

  return (
    <div className="container p-5 md:p-10">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <Button variant="ghost" size="sm" asChild className="mb-4">
            <Link href="/">
              <ArrowLeft className="mr-2 size-4" />
              Back to Home
            </Link>
          </Button>
          <h1 className="font-bold text-3xl tracking-tight">
            {component.title}
          </h1>
          <p className="mt-1 text-muted-foreground">{component.description}</p>
        </div>
      </div>

      <OpenInV0Card
        name={component.name}
        title="Component Preview"
        components={component.components}
      />
    </div>
  );
}
