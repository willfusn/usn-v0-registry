import { Promo } from "@/components/promo";

export const promo = {
  name: "Promo",
  description:
    "Attention-grabbing section to display the current promotional deal.",
  components: {
    Default: (
      <Promo
        title="Get up to 50% off"
        description="All products on sale until April 15th."
        buttonText="Shop now"
        buttonLink="#promo"
        backgroundImage="/assets/promo.png"
      />
    ),
  },
};
