import { prepareAllNinjaItem } from "@/assets/ninja/prepare/ninjaFetching";
import { NextResponse, NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  return NextResponse.json(await prepareAllNinjaItem())
}
