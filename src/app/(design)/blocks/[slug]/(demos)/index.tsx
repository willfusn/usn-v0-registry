import type { ReactElement, ReactNode } from "react";

import { hero } from "@/app/(design)/blocks/[slug]/(demos)/hero";
import { promo } from "@/app/(design)/blocks/[slug]/(demos)/promo";

interface Block {
  name: string; // this must match the `registry.json` name
  components?: {
    [name: string]: ReactNode | ReactElement;
  };
}

export const demos: { [name: string]: Block } = {
  hero,
  promo,
};
