import { NextRequest, NextResponse } from "next/server";
import { findPenalty, getPenaltyById } from "@/lib/mock-penalties";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);

  const id = searchParams.get("id");
  if (id && !searchParams.get("reg")) {
    const penalty = getPenaltyById(id);
    if (!penalty) {
      return NextResponse.json(
        { error: "Penalty not found" },
        { status: 404 }
      );
    }
    return NextResponse.json(penalty);
  }

  const reg = searchParams.get("reg");
  const penaltyId = searchParams.get("id");

  if (!reg || !penaltyId) {
    return NextResponse.json(
      { error: "Vehicle registration and penalty ID are required" },
      { status: 400 }
    );
  }

  const penalty = findPenalty(reg, penaltyId);
  if (!penalty) {
    return NextResponse.json(
      { error: "No penalty found for those details" },
      { status: 404 }
    );
  }

  return NextResponse.json(penalty);
}
