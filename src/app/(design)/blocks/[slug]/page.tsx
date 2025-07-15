import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

import { ComponentCard } from "@/components/design/component-card";
import { Button } from "@/components/ui/button";
import { getAllRegistryItems, getComponent } from "@/lib/utils";

export async function generateStaticParams() {
  const blocks = getAllRegistryItems().filter(
    (component) => component.type === "registry:components",
  );

  return blocks.map(({ name }) => ({
    slug: name,
  }));
}

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
          <h1 className="font-bold text-3xl tracking-tight">{block.title}</h1>
        </div>
      </div>

      <ComponentCard
        name={block.name}
        baseUrl={process.env.VERCEL_BRANCH_URL ?? ""}
        title="Block Preview"
        demoUrl={`/demo/${block.name}`}
        promptTitle={`${block.title} Block Kit`}
      />
    </div>
  );
}
