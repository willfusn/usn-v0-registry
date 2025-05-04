import { AreaChartComponent } from "@/app/(design)/components/[slug]/(components)/(demos)/area-chart";
import { BarChartComponent } from "@/app/(design)/components/[slug]/(components)/(demos)/bar-chart";
import { PieChartComponent } from "@/app/(design)/components/[slug]/(components)/(demos)/pie-chart";

export const chart = {
  name: "chart",
  title: "Chart",
  description:
    "Beautiful charts. Built using Recharts. Copy and paste into your apps.",
  components: {
    BarChart: <BarChartComponent />,
    AreaChart: <AreaChartComponent />,
    PieChart: <PieChartComponent />,
  },
};
