"use client";

import MuiButton from "@mui/material/Button";
import type * as React from "react";

type Variant =
  | "default"
  | "destructive"
  | "outline"
  | "secondary"
  | "ghost"
  | "link";

type Size = "default" | "sm" | "lg" | "icon";

// Compatibility shim: preserve existing API surface
export function buttonVariants({
  className,
}: {
  variant?: Variant;
  size?: Size;
  className?: string;
} = {}): string {
  return className ?? "";
}

function mapVariantToMui(variant?: Variant): { variant: "text" | "outlined" | "contained"; color?: React.ComponentProps<typeof MuiButton>["color"]; underline?: boolean } {
  switch (variant) {
    case "destructive":
      return { variant: "contained", color: "error" };
    case "outline":
      return { variant: "outlined" };
    case "secondary":
      return { variant: "contained", color: "secondary" };
    case "ghost":
      return { variant: "text" };
    case "link":
      return { variant: "text", underline: true };
    case "default":
    default:
      return { variant: "contained", color: "primary" };
  }
}

function mapSizeToMui(size?: Size): React.ComponentProps<typeof MuiButton>["size"] {
  switch (size) {
    case "sm":
      return "small";
    case "lg":
      return "large";
    case "icon":
      return "small";
    case "default":
    default:
      return "medium";
  }
}

export function Button({
  className, // ignored under MUI; keep for compatibility
  variant,
  size,
  asChild, // not supported; ignored for compatibility
  sx,
  ...props
}: React.ComponentProps<"button"> & {
  variant?: Variant;
  size?: Size;
  asChild?: boolean;
  sx?: React.ComponentProps<typeof MuiButton>["sx"];
}) {
  const mapped = mapVariantToMui(variant);
  const muiSize = mapSizeToMui(size);

  return (
    <MuiButton
      variant={mapped.variant}
      color={mapped.color}
      size={muiSize}
      sx={{
        ...(mapped.underline ? { textDecoration: "underline" } : {}),
        ...(size === "icon" ? { minWidth: 36, width: 36, height: 36, p: 0 } : {}),
        ...((sx as object) ?? {}),
      }}
      {...(props as any)}
    />
  );
}

export default Button;
