import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { ColorBlock } from "./color-block";

export default function TokensPage() {
  return (
    <div className="container p-10">
      <div className="mb-8">
        <h1 className="font-bold text-3xl tracking-tight">Tokens</h1>
        <p className="mt-1 text-muted-foreground">
          A comprehensive overview of all color tokens used in the design system
        </p>
      </div>

      {/* Base Colors */}
      <section className="mb-12">
        <h2 className="mb-4 font-semibold text-xl">Base Colors</h2>
        <p className="mb-6 text-muted-foreground">
          The foundational colors that define the overall look and feel of the
          interface.
        </p>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <ColorBlock
            name="Background"
            variable="--color-background"
            className="border bg-background text-foreground"
          />
          <ColorBlock
            name="Foreground"
            variable="--color-foreground"
            className="bg-foreground text-background"
          />
        </div>
      </section>

      {/* Component Colors */}
      <section className="mb-12">
        <h2 className="mb-4 font-semibold text-xl">Component Colors</h2>
        <p className="mb-6 text-muted-foreground">
          Colors used for specific UI components like cards and popovers.
        </p>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <ColorBlock
            name="Card"
            variable="--color-card"
            className="border bg-card text-card-foreground"
          />
          <ColorBlock
            name="Card Foreground"
            variable="--color-card-foreground"
            className="bg-card-foreground text-card"
          />
          <ColorBlock
            name="Popover"
            variable="--color-popover"
            className="border bg-popover text-popover-foreground"
          />
          <ColorBlock
            name="Popover Foreground"
            variable="--color-popover-foreground"
            className="bg-popover-foreground text-popover"
          />
        </div>
      </section>

      {/* Brand Colors */}
      <section className="mb-12">
        <h2 className="mb-4 font-semibold text-xl">Brand Colors</h2>
        <p className="mb-6 text-muted-foreground">
          The primary brand colors that represent the identity of the product or
          organization.
        </p>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          <ColorBlock
            name="Brand One"
            variable="--color-brand-one"
            className="bg-[var(--color-brand-one)] text-[var(--color-brand-one-foreground)]"
          />
          <ColorBlock
            name="Brand Two"
            variable="--color-brand-two"
            className="bg-[var(--color-brand-two)] text-[var(--color-brand-two-foreground)]"
          />
          <ColorBlock
            name="Brand Three"
            variable="--color-brand-three"
            className="bg-[var(--color-brand-three)] text-[var(--color-brand-three-foreground)]"
          />
          <ColorBlock
            name="Brand Four"
            variable="--color-brand-four"
            className="bg-[var(--color-brand-four)] text-[var(--color-brand-four-foreground)]"
          />
          <ColorBlock
            name="Brand Five"
            variable="--color-brand-five"
            className="bg-[var(--color-brand-five)] text-[var(--color-brand-five-foreground)]"
          />
        </div>
      </section>

      {/* UI State Colors */}
      <section className="mb-12">
        <h2 className="mb-4 font-semibold text-xl">UI State Colors</h2>
        <p className="mb-6 text-muted-foreground">
          Colors used to indicate different states and actions in the user
          interface.
        </p>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          <ColorBlock
            name="Primary"
            variable="--color-primary"
            className="bg-primary text-primary-foreground"
          />
          <ColorBlock
            name="Primary Foreground"
            variable="--color-primary-foreground"
            className="border bg-primary-foreground text-primary"
          />
          <ColorBlock
            name="Secondary"
            variable="--color-secondary"
            className="bg-secondary text-secondary-foreground"
          />
          <ColorBlock
            name="Secondary Foreground"
            variable="--color-secondary-foreground"
            className="bg-secondary-foreground text-secondary"
          />
          <ColorBlock
            name="Accent"
            variable="--color-accent"
            className="border bg-accent text-accent-foreground"
          />
          <ColorBlock
            name="Accent Foreground"
            variable="--color-accent-foreground"
            className="bg-accent-foreground text-accent"
          />
          <ColorBlock
            name="Muted"
            variable="--color-muted"
            className="bg-muted text-muted-foreground"
          />
          <ColorBlock
            name="Muted Foreground"
            variable="--color-muted-foreground"
            className="bg-muted-foreground text-muted"
          />
          <ColorBlock
            name="Destructive"
            variable="--color-destructive"
            className="bg-destructive text-destructive-foreground"
          />
          <ColorBlock
            name="Destructive Foreground"
            variable="--color-destructive-foreground"
            className="bg-destructive-foreground text-destructive"
          />
        </div>
      </section>

      {/* Utility Colors */}
      <section className="mb-12">
        <h2 className="mb-4 font-semibold text-xl">Utility Colors</h2>
        <p className="mb-6 text-muted-foreground">
          Colors used for borders, inputs, and other utility elements.
        </p>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <ColorBlock
            name="Border"
            variable="--color-border"
            className="bg-border text-foreground"
          />
          <ColorBlock
            name="Input"
            variable="--color-input"
            className="bg-input text-foreground"
          />
          <ColorBlock
            name="Ring"
            variable="--color-ring"
            className="bg-ring text-white"
          />
        </div>
      </section>

      {/* Chart Colors */}
      <section className="mb-12">
        <h2 className="mb-4 font-semibold text-xl">Chart Colors</h2>
        <p className="mb-6 text-muted-foreground">
          Colors used for data visualization and charts.
        </p>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-5">
          <ColorBlock
            name="Chart 1"
            variable="--color-chart-1"
            className="bg-[var(--color-chart-1)] text-white"
          />
          <ColorBlock
            name="Chart 2"
            variable="--color-chart-2"
            className="bg-[var(--color-chart-2)] text-foreground"
          />
          <ColorBlock
            name="Chart 3"
            variable="--color-chart-3"
            className="bg-[var(--color-chart-3)] text-foreground"
          />
          <ColorBlock
            name="Chart 4"
            variable="--color-chart-4"
            className="bg-[var(--color-chart-4)] text-foreground"
          />
          <ColorBlock
            name="Chart 5"
            variable="--color-chart-5"
            className="bg-[var(--color-chart-5)] text-foreground"
          />
        </div>
      </section>

      {/* Sidebar Colors */}
      <section className="mb-12">
        <h2 className="mb-4 font-semibold text-xl">Sidebar Colors</h2>
        <p className="mb-6 text-muted-foreground">
          Colors specific to the sidebar component.
        </p>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <ColorBlock
            name="Sidebar Background"
            variable="--color-sidebar-background"
            className="border bg-[var(--color-sidebar-background)] text-[var(--color-sidebar-foreground)]"
          />
          <ColorBlock
            name="Sidebar Foreground"
            variable="--color-sidebar-foreground"
            className="bg-[var(--color-sidebar-foreground)] text-[var(--color-sidebar-background)]"
          />
          <ColorBlock
            name="Sidebar Primary"
            variable="--color-sidebar-primary"
            className="bg-[var(--color-sidebar-primary)] text-[var(--color-sidebar-primary-foreground)]"
          />
          <ColorBlock
            name="Sidebar Primary Foreground"
            variable="--color-sidebar-primary-foreground"
            className="border bg-[var(--color-sidebar-primary-foreground)] text-[var(--color-sidebar-primary)]"
          />
          <ColorBlock
            name="Sidebar Accent"
            variable="--color-sidebar-accent"
            className="bg-[var(--color-sidebar-accent)] text-[var(--color-sidebar-accent-foreground)]"
          />
          <ColorBlock
            name="Sidebar Accent Foreground"
            variable="--color-sidebar-accent-foreground"
            className="border bg-[var(--color-sidebar-accent-foreground)] text-[var(--color-sidebar-accent)]"
          />
          <ColorBlock
            name="Sidebar Border"
            variable="--color-sidebar-border"
            className="border bg-[var(--color-sidebar-border)] text-white"
          />
          <ColorBlock
            name="Sidebar Ring"
            variable="--color-sidebar-ring"
            className="bg-[var(--color-sidebar-ring)] text-white"
          />
        </div>
      </section>

      {/*TODO: Add customize feature*/}
      <div className="mt-8 flex justify-end">
        <Button variant="outline" className="mr-2">
          Copy All Variables
        </Button>
        <Button>
          Customize Theme
          <ArrowRight className="ml-2 size-4" />
        </Button>
      </div>
    </div>
  );
}
