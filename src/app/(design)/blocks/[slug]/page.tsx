import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

import { blocks } from "@/app/(design)/blocks/[slug]/(blocks)";
import { OpenInV0Card } from "@/components/open-in-v0-card";
import { Button } from "@/components/ui/button";

export default async function BlockPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const block = blocks[slug];

  if (!block) {
    notFound();
  }

  return (
    <div className="container md:p-10">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <Button variant="ghost" size="sm" asChild className="mb-4">
            <Link href="/">
              <ArrowLeft className="mr-2 size-4" />
              Back to Home
            </Link>
          </Button>
          <h1 className="font-bold text-3xl tracking-tight">{block.title}</h1>
          <p className="mt-1 text-muted-foreground">{block.description}</p>
        </div>
      </div>
      <OpenInV0Card
        name={block.name}
        title="Block Preview"
        components={block.components}
      />
    </div>
  );
}
