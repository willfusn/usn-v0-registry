import { OpenInV0Button } from "@/components/open-in-v0";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

interface Block {
  title: string;
  name: string;
  description: string;
}

const blocks: { [component: string]: Block } = {
  header: {
    title: "Header",
    name: "brand-header",
    description: "Styled header for top level navigation",
  },
  sidebar: {
    title: "Brand Sidebar",
    name: "brand-sidebar",
    description: "Styled sidebar for navigation",
  },
  hero: {
    title: "Hero",
    name: "hero",
    description:
      "Attention-grabbing section for the top of your landing pages.",
  },
};

export default async function BlockPage({
  params,
}: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const block = blocks[slug];

  if (!block) {
    notFound();
  }

  return (
    <div className="container p-10">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <Button variant="ghost" size="sm" asChild className="mb-4">
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
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
        <div className="text-muted-foreground">
          Block Preview for {block.title}
        </div>
      </div>
    </div>
  );
}
