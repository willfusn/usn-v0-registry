import { OpenInV0Button } from "@/components/open-in-v0";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

interface Block {
  name: string;
  description: string;
}

const blocks: { [name: string]: Block } = {
  "hero-sections": {
    name: "Hero Sections",
    description:
      "Attention-grabbing sections for the top of your landing pages.",
  },
  "feature-sections": {
    name: "Feature Sections",
    description:
      "Showcase your product's features with these pre-built sections.",
  },
  "pricing-tables": {
    name: "Pricing Tables",
    description: "Display your pricing options in an easy-to-compare format.",
  },
  "contact-forms": {
    name: "Contact Forms",
    description: "Pre-built contact forms with validation and styling.",
  },
  footers: {
    name: "Footers",
    description: "Various footer layouts for your website or application.",
  },
  headers: {
    name: "Headers",
    description: "Navigation headers with various layouts and features.",
  },
  testimonials: {
    name: "Testimonials",
    description: "Display customer testimonials in various layouts.",
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
          <h1 className="font-bold text-3xl tracking-tight">{block.name}</h1>
          <p className="mt-1 text-muted-foreground">{block.description}</p>
        </div>
      </div>

      <div className="mb-3 flex items-center justify-between">
        <h3 className="font-bold">Preview</h3>
        <OpenInV0Button name={block.name} />
      </div>

      <div className="flex flex-col items-center justify-center gap-4 rounded-md border border-primary/20 p-10">
        <div className="text-muted-foreground">
          Block Preview for {block.name}
        </div>
      </div>
    </div>
  );
}
