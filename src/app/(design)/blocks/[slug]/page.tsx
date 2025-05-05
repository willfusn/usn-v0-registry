import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

import { blocks } from "@/app/(design)/blocks/[slug]/(blocks)";
import { OpenInV0Button } from "@/components/open-in-v0";
import { Button } from "@/components/ui/button";

export default async function BlockPage({
  params,
}: { params: Promise<{ slug: string }> }) {
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

      <div className="mb-3 flex items-center justify-between">
        <h3 className="font-bold">Preview</h3>
        <OpenInV0Button name={block.name} />
      </div>

      <div className="flex flex-col items-center justify-center gap-4 rounded-md border border-primary/20 p-10">
        {block.components ? (
          Object.entries(block.components).map(([key, node]) => (
            <div className="w-full" key={key}>
              {node}
            </div>
          ))
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
