"use client";

import {
  Blocks,
  ChevronDown,
  Home,
  Search,
  Squirrel,
  ToyBrick,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Input } from "@/components/ui/input";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

const componentItems = [
  { name: "Accordion", path: "/components/accordion" },
  { name: "Alert", path: "/components/alert" },
  { name: "Avatar", path: "/components/avatar" },
  { name: "Badge", path: "/components/badge" },
  { name: "Button", path: "/components/button" },
  { name: "Card", path: "/components/card" },
  { name: "Checkbox", path: "/components/checkbox" },
  { name: "Dialog", path: "/components/dialog" },
  { name: "Dropdown Menu", path: "/components/dropdown-menu" },
];

const blockItems = [
  { name: "Hero Sections", path: "/blocks/hero-sections" },
  { name: "Feature Sections", path: "/blocks/feature-sections" },
  { name: "Pricing Tables", path: "/blocks/pricing-tables" },
  { name: "Contact Forms", path: "/blocks/contact-forms" },
  { name: "Footers", path: "/blocks/footers" },
  { name: "Headers", path: "/blocks/headers" },
  { name: "Testimonials", path: "/blocks/testimonials" },
];

export function RegistrySidebar() {
  const pathname = usePathname();
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

  return (
    <Sidebar>
      <SidebarHeader className="border-b">
        <div className="flex items-center gap-2 px-4 py-2">
          <Link href="/" className="flex items-center gap-2">
            <div className="rounded-md bg-brand-one p-1">
              <Squirrel className="size-4 text-white" />
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
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton asChild isActive={pathname === "/"}>
                <Link href="/">
                  <Home className="size-4" />
                  <span>Home</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>

        <Collapsible defaultOpen={true} className="group/collapsible">
          <SidebarGroup>
            <CollapsibleTrigger className="w-full">
              <SidebarGroupLabel className="flex cursor-pointer items-center justify-between">
                <div className="flex items-center">
                  <ToyBrick className="mr-2 size-4" />
                  Components
                </div>
                <ChevronDown className="size-4 transition-transform group-data-[state=open]/collapsible:rotate-180" />
              </SidebarGroupLabel>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <SidebarGroupContent>
                <SidebarMenu>
                  {filteredComponents.map((item) => (
                    <SidebarMenuItem key={item.path}>
                      <SidebarMenuButton
                        asChild
                        isActive={pathname === item.path}
                      >
                        <Link href={item.path}>{item.name}</Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </CollapsibleContent>
          </SidebarGroup>
        </Collapsible>

        <Collapsible defaultOpen={true} className="group/collapsible">
          <SidebarGroup>
            <CollapsibleTrigger className="w-full">
              <SidebarGroupLabel className="flex items-center justify-between cursor-pointer">
                <div className="flex items-center">
                  <Blocks className="mr-2 size-4" />
                  Blocks
                </div>
                <ChevronDown className="size-4 transition-transform group-data-[state=open]/collapsible:rotate-180" />
              </SidebarGroupLabel>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <SidebarGroupContent>
                <SidebarMenu>
                  {filteredBlocks.map((item) => (
                    <SidebarMenuItem key={item.path}>
                      <SidebarMenuButton
                        asChild
                        isActive={pathname === item.path}
                      >
                        <Link href={item.path}>{item.name}</Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </CollapsibleContent>
          </SidebarGroup>
        </Collapsible>
      </SidebarContent>
    </Sidebar>
  );
}
