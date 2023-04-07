import { fulfillPredefinedRecipes, fulfillRecipes } from "@/libs/fetchRecipe";
import { NextResponse, NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  const league = new URL(request.url).searchParams.get("league");
  const body = await request.json();
  return NextResponse.json(await fulfillRecipes(league??"Standard",body ))
}
