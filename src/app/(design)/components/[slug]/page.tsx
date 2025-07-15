import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

import { ComponentCard } from "@/components/design/component-card";
import { Button } from "@/components/ui/button";
import { getAllRegistryItems, getComponent } from "@/lib/utils";

export async function generateStaticParams() {
  const blocks = getAllRegistryItems().filter(
    (component) => component.type === "registry:ui",
  );

  return blocks.map(({ name }) => ({
    slug: name,
  }));
}

export default async function ComponentPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const component = getComponent(slug);

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
        </div>
      </div>

      <ComponentCard
        name={component.name}
        baseUrl={process.env.VERCEL_BRANCH_URL ?? ""}
        title="Component Preview"
        demoUrl={`/demo/${component.name}`}
        promptTitle={`${component.title} Component Kit`}
      />
    </div>
  );
}
