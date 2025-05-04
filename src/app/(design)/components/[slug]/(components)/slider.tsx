import { Slider } from "@/components/ui/slider";

export const slider = {
  name: "slider",
  title: "Slider",
  description:
    "An input where the user selects a value from within a given range.",
  components: {
    Default: (
      <Slider defaultValue={[50]} max={100} step={1} className="w-[60%]" />
    ),
  },
};
