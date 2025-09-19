"use client";

import * as React from "react";
import Button from "@mui/material/Button";

type Props = React.ComponentProps<typeof Button> & {
  children?: React.ReactNode;
};

export default function BrandButton(props: Props) {
  return (
    <Button variant={props.variant ?? "contained"} color={props.color ?? "primary"} sx={{ borderRadius: 1 }} {...props} />
  );
}


