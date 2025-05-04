import { Button } from "@/components/ui/button";

export const button = {
  name: "button",
  title: "Button",
  description: "Allows users to take actions with a single click or tap.",
  components: {
    Primary: <Button variant="default">Primary</Button>,
    Secondary: <Button variant="secondary">Secondary</Button>,
    Outline: <Button variant="outline">Outline</Button>,
  },
};
