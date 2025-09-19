"use client";

import Button from "@mui/material/Button";
import type * as React from "react";

type Props = React.ComponentProps<typeof Button> & {
  children?: React.ReactNode;
};

export default function BrandButton(props: Props) {
  return (
    <Button
      variant={props.variant ?? "contained"}
      color={props.color ?? "primary"}
      sx={{ borderRadius: 1 }}
      {...props}
    />
  );
}
