import { QstashClient } from "@/lib/redis";
import { NextApiResponse } from "next";
import { headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
// import { NextRequest, NextResponse } from "next/server";

export async function POST(req: Request) {
  if (req.method !== "POST") {
    return new Response("Unauthorized", { status: 401 });
  }
  const headerList = headers();
  const host = headerList.get("host") || "";

  const qstashRes = await QstashClient.publishJSON({
    url: `https://app-router-test-omega.vercel.app/api/sender`,
    body: req.body,
  });
  return new Response("OK", { status: 200 });
}
