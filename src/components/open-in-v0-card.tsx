"use client";

import { Check, Copy } from "lucide-react";
import Link from "next/link";
import { type ReactElement, type ReactNode, useState } from "react";

import { Button, buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn, getComponent } from "@/lib/utils";

interface OpenInV0CardProps {
  name: string;
  description?: string;
  title?: string;
  prompt?: string;
  previewUrl?: string;
  components?: {
    [name: string]: ReactNode | ReactElement;
  };
}

function buildV0Url(registryUrl: string, title?: string, prompt?: string) {
  const params = new URLSearchParams();
  params.append("url", registryUrl);

  if (title != null) {
    params.append("title", title);
  }

  if (prompt != null) {
    params.append("prompt", prompt);
  }

  return `https://v0.dev/chat/api/open?${params.toString()}`;
}

export function OpenInV0Card({
  name,
  description,
  title,
  prompt,
  previewUrl,
  components,
}: OpenInV0CardProps) {
  const [copied, setCopied] = useState(false);

  const component = getComponent(name);

  const registryUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/r/${name}.json`;
  const npxCommand = `npx shadcn@latest add ${registryUrl}`;
  const v0Url = buildV0Url(registryUrl, title, prompt);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(npxCommand);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  if (component == null) {
    return (
      <div className="flex h-full items-center justify-center">
        <p className="text-muted-foreground">No registry item found</p>
      </div>
    );
  }

  return (
    <section>
      <Card id="starting-kit" className="border-foreground/25">
        <CardHeader>
          <div className="flex flex-col gap-4">
            <CardTitle className="font-medium text-lg">
              {title ?? component.title}
            </CardTitle>

            <div className="flex w-full flex-col gap-4 sm:flex-row sm:items-center sm:justify-between sm:gap-16">
              <CardDescription>
                {description ?? component.description}
              </CardDescription>

              <div className="flex items-center gap-1 sm:ml-auto">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipContent className="font-mono">
                      Copy npx command
                    </TooltipContent>
                    <TooltipTrigger asChild>
                      <Button
                        onClick={copyToClipboard}
                        variant="outline"
                        className="p-4"
                        aria-label="Copy npx command to clipboard"
                      >
                        {copied ? (
                          <Check className="size-4" />
                        ) : (
                          <Copy className="size-4" />
                        )}
                      </Button>
                    </TooltipTrigger>
                  </Tooltip>
                </TooltipProvider>

                <Link
                  href={v0Url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    buttonVariants({ variant: "default" }),
                    "gap-0 text-sm",
                  )}
                >
                  Open in
                  <svg
                    strokeLinejoin="round"
                    viewBox="0 0 16 16"
                    className="!w-5 !h-5 ml-1 text-primary-foreground"
                    role="graphics-symbol"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M9.50321 5.5H13.2532C13.3123 5.5 13.3704 5.5041 13.4273 5.51203L9.51242 9.42692C9.50424 9.36912 9.5 9.31006 9.5 9.25L9.5 5.5L8 5.5L8 9.25C8 10.7688 9.23122 12 10.75 12H14.5V10.5L10.75 10.5C10.6899 10.5 10.6309 10.4958 10.5731 10.4876L14.4904 6.57028C14.4988 6.62897 14.5032 6.68897 14.5032 6.75V10.5H16.0032V6.75C16.0032 5.23122 14.772 4 13.2532 4H9.50321V5.5ZM0 5V5.00405L5.12525 11.5307C5.74119 12.3151 7.00106 11.8795 7.00106 10.8822V5H5.50106V9.58056L1.90404 5H0Z"
                      fill="currentColor"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </CardHeader>

        <CardContent className="flex flex-col items-center justify-center gap-4 rounded-md px-6">
          {components &&
            Object.entries(components).map(([key, node]) => (
              <div className="w-full" key={key}>
                {node}
              </div>
            ))}

          {previewUrl && (
            <div
              className={
                "h-[800px] w-full overflow-hidden rounded-md border border-border"
              }
            >
              <iframe
                src={previewUrl}
                className="h-full w-full"
                title="Page Preview"
              />
            </div>
          )}
        </CardContent>
      </Card>
    </section>
  );
}
