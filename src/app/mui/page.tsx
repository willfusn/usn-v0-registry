"use client";

import BrandButton from "@/components/button";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

export default function MuiDemoPage() {
  return (
    <Box sx={{ p: 4 }}>
      <Stack spacing={2} alignItems="flex-start">
        <Typography variant="h3">MUI v5 Demo</Typography>
        <Typography color="text.secondary">
          This page validates the org theme and BrandButton.
        </Typography>
        <Stack direction="row" spacing={2}>
          <BrandButton>Primary</BrandButton>
          <BrandButton color="secondary">Secondary</BrandButton>
          <BrandButton variant="outlined">Outlined</BrandButton>
        </Stack>
      </Stack>
    </Box>
  );
}
