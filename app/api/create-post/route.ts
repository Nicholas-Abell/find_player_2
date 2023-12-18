import { NextResponse } from "next/server";

export async function POST(request: any) {
  const res = await request.json();
  console.log({ res });
  return NextResponse.json({ data: res });
}
