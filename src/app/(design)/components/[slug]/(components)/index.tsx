import { accordion } from "@/app/(design)/components/[slug]/(components)/accordion";
import { alert } from "@/app/(design)/components/[slug]/(components)/alert";
import { avatar } from "@/app/(design)/components/[slug]/(components)/avatar";
import { badge } from "@/app/(design)/components/[slug]/(components)/badge";
import { button } from "@/app/(design)/components/[slug]/(components)/button";
import { card } from "@/app/(design)/components/[slug]/(components)/card";
import { checkbox } from "@/app/(design)/components/[slug]/(components)/checkbox";
import { dialog } from "@/app/(design)/components/[slug]/(components)/dialog";
import { dropdownMenu } from "@/app/(design)/components/[slug]/(components)/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  AlertCircle,
  Cloud,
  CreditCard,
  Github,
  Keyboard,
  LifeBuoy,
  LogOut,
  Mail,
  MessageSquare,
  Plus,
  PlusCircle,
  Settings,
  Terminal,
  User,
  Users,
} from "lucide-react";
import type { ReactNode } from "react";

interface Component {
  name: string; // this must match the `registry.json` name
  description: string;
  components?: {
    [name: string]: ReactNode;
  };
}

export const components: { [name: string]: Component } = {
  accordion,
  alert,
  avatar,
  badge,
  button,
  card,
  checkbox,
  dialog,
  "dropdown-menu": dropdownMenu,
};
