import type { ReactElement, ReactNode } from "react";

import { accordion } from "@/app/(design)/components/[slug]/(components)/accordion";
import { alert } from "@/app/(design)/components/[slug]/(components)/alert";
import { avatar } from "@/app/(design)/components/[slug]/(components)/avatar";
import { badge } from "@/app/(design)/components/[slug]/(components)/badge";
import { breadcrumb } from "@/app/(design)/components/[slug]/(components)/breadcrumb";
import { button } from "@/app/(design)/components/[slug]/(components)/button";
import { calendar } from "@/app/(design)/components/[slug]/(components)/calendar";
import { card } from "@/app/(design)/components/[slug]/(components)/card";
import { chart } from "@/app/(design)/components/[slug]/(components)/chart";
import { checkbox } from "@/app/(design)/components/[slug]/(components)/checkbox";
import { dataTable } from "@/app/(design)/components/[slug]/(components)/data-table";
import { datePicker } from "@/app/(design)/components/[slug]/(components)/date-picker";
import { dialog } from "@/app/(design)/components/[slug]/(components)/dialog";
import { dropdownMenu } from "@/app/(design)/components/[slug]/(components)/dropdown-menu";
import { input } from "@/app/(design)/components/[slug]/(components)/input";
import { menuBar } from "@/app/(design)/components/[slug]/(components)/menu-bar";
import { select } from "@/app/(design)/components/[slug]/(components)/select";
import { separator } from "@/app/(design)/components/[slug]/(components)/separator";
import { skeleton } from "@/app/(design)/components/[slug]/(components)/skeleton";
import { slider } from "@/app/(design)/components/[slug]/(components)/slider";
import { switchComponent } from "@/app/(design)/components/[slug]/(components)/switch";
import { table } from "@/app/(design)/components/[slug]/(components)/table";
import { tabs } from "@/app/(design)/components/[slug]/(components)/tabs";
import { toggleGroup } from "@/app/(design)/components/[slug]/(components)/toggle-group";
import { tooltip } from "@/app/(design)/components/[slug]/(components)/tooltip";

interface Component {
  title: string;
  name: string; // this must match the `registry.json` name
  description: string;
  components?: {
    [name: string]: ReactNode | ReactElement;
  };
}

export const components: { [name: string]: Component } = {
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
  table,
  tabs,
  "toggle-group": toggleGroup,
  tooltip,
};
