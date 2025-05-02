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

const gettingStartedItems = [
  { name: "Home", path: "/" },
  { name: "Tokens", path: "/tokens" },
  { name: "Start", path: "/start" },
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
    <Sidebar collapsible="icon">
      <SidebarHeader className="border-b">
        <div className="flex items-center justify-between px-2 py-2">
          <Link href="/" className="flex min-w-0 items-center gap-2">
            <div className="flex-shrink-0 rounded-md bg-brand-one p-1">
              <Squirrel className="size-5 text-white" />
            </div>
            <span className="overflow-hidden font-semibold opacity-100 transition-opacity duration-200">
              Design Registry
            </span>
          </Link>
        </div>
        <div className="px-2 py-2 opacity-100 transition-all duration-200">
          <div className="relative">
            <Search className="absolute top-2.5 left-2.5 h-4 w-4 text-muted-foreground" />
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
        <Collapsible defaultOpen={true} className="group/collapsible">
          <SidebarGroup>
            <CollapsibleTrigger className="w-full">
              <SidebarGroupLabel className="flex cursor-pointer items-center justify-between">
                <div className="flex min-w-0 items-center">
                  <Home className="h-4 w-4 flex-shrink-0" />
                  <span className="ml-2 opacity-100 transition-all duration-200">
                    Getting Started
                  </span>
                </div>
                <ChevronDown className="size-4 flex-shrink-0 opacity-100 transition-all duration-200 group-data-[state=open]/collapsible:rotate-180" />
              </SidebarGroupLabel>
            </CollapsibleTrigger>

            <CollapsibleContent>
              <SidebarGroupContent>
                <SidebarMenu>
                  {gettingStartedItems.map((item) => (
                    <SidebarMenuItem key={item.path}>
                      <SidebarMenuButton
                        asChild
                        isActive={pathname === item.path}
                      >
                        <Link href={item.path} className="flex items-center">
                          <span className="ml-2 opacity-100 transition-all duration-200">
                            {item.name}
                          </span>
                        </Link>
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
              <SidebarGroupLabel className="flex cursor-pointer items-center justify-between">
                <div className="flex min-w-0 items-center">
                  <ToyBrick className="size-4 flex-shrink-0" />
                  <span className="ml-2 transition-all duration-200">
                    Components
                  </span>
                </div>
                <ChevronDown className="h-4 w-4 flex-shrink-0 transition-all duration-200 group-data-[state=open]/collapsible:rotate-180" />
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
              <SidebarGroupLabel className="flex cursor-pointer items-center justify-between">
                <div className="flex min-w-0 items-center">
                  <Blocks className="h-4 w-4 flex-shrink-0" />
                  <span className="ml-2 transition-all duration-200">
                    Blocks
                  </span>
                </div>
                <ChevronDown className="h-4 w-4 flex-shrink-0 transition-all duration-200 group-data-[state=open]/collapsible:rotate-180" />
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
