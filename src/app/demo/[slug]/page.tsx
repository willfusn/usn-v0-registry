import { notFound } from "next/navigation";

import { demos } from "@/app/demo/[slug]/(demos)";
import { getComponent } from "@/lib/utils";

export async function generateStaticParams() {
  return Object.keys(demos).map((slug) => ({
    slug,
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

  const { components } = demos[slug];

  return (
    <div className="my-4 flex w-full flex-col gap-4">
      {components &&
        Object.entries(components).map(([key, node]) => (
          <div className="relative w-full px-4" key={key}>
            {node}
          </div>
        ))}
    </div>
  );
}
