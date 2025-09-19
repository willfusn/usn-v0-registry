import registry from "@/../registry.json";
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(registry);
}
