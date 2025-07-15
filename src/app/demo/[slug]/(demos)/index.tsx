import type { ReactElement, ReactNode } from "react";

import { accordion } from "./accordion";
import { alert } from "./alert";
import { avatar } from "./avatar";
import { badge } from "./badge";
import { brandHeader } from "./brand-header";
import { brandSidebar } from "./brand-sidebar";
import { breadcrumb } from "./breadcrumb";
import { button } from "./button";
import { calendar } from "./calendar";
import { card } from "./card";
import { chart } from "./chart";
import { checkbox } from "./checkbox";
import { dataTable } from "./data-table";
import { datePicker } from "./date-picker";
import { dialog } from "./dialog";
import { dropdownMenu } from "./dropdown-menu";
import { hero } from "./hero";
import { input } from "./input";
import { login } from "./login";
import { logo } from "./logo";
import { menuBar } from "./menu-bar";
import { productGrid } from "./product-grid";
import { promo } from "./promo";
import { select } from "./select";
import { separator } from "./separator";
import { skeleton } from "./skeleton";
import { slider } from "./slider";
import { sonner } from "./sonner";
import { switchComponent } from "./switch";
import { table } from "./table";
import { tabs } from "./tabs";
import { toggleGroup } from "./toggle-group";
import { tooltip } from "./tooltip";

interface Demo {
  name: string; // this must match the `registry.json` name
  components?: {
    [name: string]: ReactNode | ReactElement;
  };
}

export const demos: { [name: string]: Demo } = {
  // blocks
  hero,
  login,
  promo,
  logo,
  "brand-header": brandHeader,
  "brand-sidebar": brandSidebar,
  "product-grid": productGrid,

  // components
  accordion,
  alert,
  avatar,
  badge,
  breadcrumb,
  button,
  calendar,
  card,
  chart,
  checkbox,
  dialog,
  "date-picker": datePicker,
  "data-table": dataTable,
  "dropdown-menu": dropdownMenu,
  input,
  "menu-bar": menuBar,
  select,
  separator,
  skeleton,
  slider,
  switch: switchComponent,
  sonner,
  table,
  tabs,
  "toggle-group": toggleGroup,
  tooltip,
};
