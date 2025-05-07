import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

import { demos } from "@/app/(design)/blocks/[slug]/(demos)";
import { OpenInV0Card } from "@/components/open-in-v0-card";
import { Button } from "@/components/ui/button";
import { getComponent } from "@/lib/utils";

export default async function BlockPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const block = getComponent(slug);

  if (!block) {
    notFound();
  }

  const { components } = demos[slug];

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
        </div>
      </div>

      <OpenInV0Card
        name={block.name}
        title="Block Preview"
        components={components}
      />
    </div>
  );
}
