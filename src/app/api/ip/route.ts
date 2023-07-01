import { headers } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const headersList = headers();
  let ip = headersList.get("x-real-ip");

  const forwardedFor = headersList.get("x-forwarded-for") as string;
  if (!ip && forwardedFor) {
    ip = forwardedFor?.split(",").at(0) ?? "Unknown";
  }
  console.log("ipServer: " + ip);

  return new Response(JSON.stringify({ ipAddress: ip }));
  // return NextResponse.json({ ipAddress: ip });
}
