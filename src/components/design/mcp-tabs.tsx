"use client";

import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Check, ClipboardIcon } from "lucide-react";

export async function copyToClipboard(value: string) {
  await navigator.clipboard.writeText(value);
}

export function MCPTabs({ rootUrl }: { rootUrl: string }) {
  const [tab, setTab] = useState("cursor");
  const [hasCopied, setHasCopied] = useState(false);

  const mcpServer = JSON.stringify(
    {
      mcpServers: {
        shadcn: {
          command: "npx",
          args: ["-y", "shadcn@canary", "registry:mcp"],
          env: {
            REGISTRY_URL: `https://${rootUrl}/r/registry.json`,
          },
        },
      },
    },
    null,
    2,
  );

  useEffect(() => {
    if (hasCopied) {
      setTimeout(() => {
        setHasCopied(false);
      }, 2000);
    }
  }, [hasCopied]);

  return (
    <Tabs value={tab} onValueChange={setTab}>
      <div className="flex items-center justify-between">
        <TabsList>
          <TabsTrigger value="cursor">Cursor</TabsTrigger>
          <TabsTrigger value="windsurf">Windsurf</TabsTrigger>
        </TabsList>
      </div>

      <TabsContent value="cursor">
        <p className="text-muted-foreground text-sm">
          Copy and paste the code into{" "}
          <code className="inline text-sm tabular-nums">.cursor/mcp.json</code>
        </p>
      </TabsContent>

      <TabsContent value="windsurf">
        <p className="text-muted-foreground text-sm">
          Copy and paste the code into{" "}
          <code className="inline text-sm tabular-nums">
            .codeium/windsurf/mcp_config.json
          </code>
        </p>
      </TabsContent>

      <div className="relative">
        <Button
          size="sm"
          variant="outline"
          onClick={() => {
            copyToClipboard(mcpServer);
            setHasCopied(true);
          }}
          className="absolute top-3 right-3 shadow-none"
        >
          {hasCopied ? <Check /> : <ClipboardIcon />}
          Copy
        </Button>
        <pre className="overflow-x-auto rounded-lg border bg-muted p-1">
          <code className="relative rounded bg-transparent p-1 font-mono text-muted-foreground text-sm">
            {mcpServer}
          </code>
        </pre>
      </div>
    </Tabs>
  );
}
