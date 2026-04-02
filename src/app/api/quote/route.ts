import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const data = await request.json();

  // Log for now - integrate with Resend or email service later
  console.log("Quote request received:", data);

  return NextResponse.json({ success: true });
}
