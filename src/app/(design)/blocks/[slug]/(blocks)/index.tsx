import type { ReactElement, ReactNode } from "react";

import { hero } from "@/app/(design)/blocks/[slug]/(blocks)/hero";
import { promo } from "@/app/(design)/blocks/[slug]/(blocks)/promo";

interface Block {
  title: string;
  name: string; // this must match the `registry.json` name
  description: string;
  components?: {
    [name: string]: ReactNode | ReactElement;
  };
}

export const blocks: { [name: string]: Block } = {
  hero,
  promo,
};
