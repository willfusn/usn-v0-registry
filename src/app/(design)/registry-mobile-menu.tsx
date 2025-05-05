"use client";

import {
  Blocks,
  ChevronDown,
  Home,
  Menu,
  Search,
  Squirrel,
  ToyBrick,
  X,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import {
  blockItems,
  componentItems,
  gettingStartedItems,
} from "@/app/(design)/registry-navigation";
import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

export function MobileMenu() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredComponents, setFilteredComponents] = useState(componentItems);
  const [filteredBlocks, setFilteredBlocks] = useState(blockItems);

  useEffect(() => {
    if (searchTerm) {
      setFilteredComponents(
        componentItems.filter((item) =>
          item.name.toLowerCase().includes(searchTerm.toLowerCase()),
        ),
      );
      setFilteredBlocks(
        blockItems.filter((item) =>
          item.name.toLowerCase().includes(searchTerm.toLowerCase()),
        ),
      );
    } else {
      setFilteredComponents(componentItems);
      setFilteredBlocks(blockItems);
    }
  }, [searchTerm]);

  const handleLinkClick = () => {
    setOpen(false);
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <div className="flex items-center justify-start rounded-md p-4 md:hidden">
          <Button aria-label="Open menu">
            <Menu className="size-5" />
          </Button>
        </div>
      </SheetTrigger>

      <SheetContent side="left" className="w-[300px] p-0 sm:w-[350px]">
        <SheetTitle className="hidden">Menu</SheetTitle>

        <div className="flex h-full flex-col">
          {/* Header */}
          <div className="border-b">
            <div className="flex items-center justify-between px-4 py-3">
              <Link
                href="/"
                className="flex min-w-0 items-center gap-2"
                onClick={handleLinkClick}
              >
                <div className="flex-shrink-0 rounded-md bg-primary p-1">
                  <Squirrel className="size-5 text-secondary" />
                </div>
                <span className="font-semibold">Design Registry</span>
              </Link>
            </div>
            <div className="px-4 py-2">
              <div className="relative">
                <Search className="absolute top-2.5 left-2.5 size-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search..."
                  className="pl-8"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex-1 overflow-auto py-2">
            <Collapsible defaultOpen={true} className="px-2 py-1">
              <CollapsibleTrigger className="flex w-full items-center justify-between rounded-md p-2 hover:bg-accent">
                <div className="flex items-center">
                  <Home className="mr-2 size-4" />
                  <span>Getting Started</span>
                </div>
                <ChevronDown className="size-4 transition-transform duration-200 [&[data-state=open]]:rotate-180" />
              </CollapsibleTrigger>
              <CollapsibleContent>
                <div className="mt-1 ml-6 space-y-1">
                  {gettingStartedItems.map((item) => (
                    <Link
                      key={item.path}
                      href={item.path}
                      onClick={handleLinkClick}
                      className={cn(
                        "block rounded-md px-2 py-1.5 text-sm",
                        pathname === item.path
                          ? "bg-accent font-medium text-accent-foreground"
                          : "hover:bg-accent/50",
                      )}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </CollapsibleContent>
            </Collapsible>

            <Collapsible defaultOpen={true} className="px-2 py-1">
              <CollapsibleTrigger className="flex w-full items-center justify-between rounded-md p-2 hover:bg-accent">
                <div className="flex items-center">
                  <ToyBrick className="mr-2 size-4" />
                  <span>Components</span>
                </div>
                <ChevronDown className="size-4 transition-transform duration-200 [&[data-state=open]]:rotate-180" />
              </CollapsibleTrigger>
              <CollapsibleContent>
                <div className="mt-1 ml-6 space-y-1">
                  {filteredComponents.map((item) => (
                    <Link
                      key={item.path}
                      href={item.path}
                      onClick={handleLinkClick}
                      className={cn(
                        "block rounded-md px-2 py-1.5 text-sm",
                        pathname === item.path
                          ? "bg-accent font-medium text-accent-foreground"
                          : "hover:bg-accent/50",
                      )}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </CollapsibleContent>
            </Collapsible>

            <Collapsible defaultOpen={true} className="px-2 py-1">
              <CollapsibleTrigger className="flex w-full items-center justify-between rounded-md p-2 hover:bg-accent">
                <div className="flex items-center">
                  <Blocks className="mr-2 size-4" />
                  <span>Blocks</span>
                </div>
                <ChevronDown className="size-4 transition-transform duration-200 [&[data-state=open]]:rotate-180" />
              </CollapsibleTrigger>
              <CollapsibleContent>
                <div className="mt-1 ml-6 space-y-1">
                  {filteredBlocks.map((item) => (
                    <Link
                      key={item.path}
                      href={item.path}
                      onClick={handleLinkClick}
                      className={cn(
                        "block rounded-md px-2 py-1.5 text-sm",
                        pathname === item.path
                          ? "bg-accent font-medium text-accent-foreground"
                          : "hover:bg-accent/50",
                      )}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </CollapsibleContent>
            </Collapsible>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
