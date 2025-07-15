import { AreaChartComponent } from "@/app/demo/[slug]/(demos)/area-chart";
import { BarChartComponent } from "@/app/demo/[slug]/(demos)/bar-chart";
import { PieChartComponent } from "@/app/demo/[slug]/(demos)/pie-chart";

export const chart = {
  name: "chart",
  components: {
    BarChart: <BarChartComponent />,
    AreaChart: <AreaChartComponent />,
    PieChart: <PieChartComponent />,
  },
};
