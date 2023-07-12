// import { redis } from "@/lib/redis";
import { redis } from "@/lib/redis";
import { IPResponse, extendedIPResponse } from "@/types/ipStuff";
import { fetchIPServer } from "@/utils/ipHelper";
import { Redis } from "@upstash/redis/nodejs";
import { headers } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const headersList = headers();
  const ipIdentifier = headersList.get("x-real-ip");
  console.log("ipIdentifier: " + ipIdentifier);
  const ip = (await fetchIPServer()) as IPResponse;
  await redis.incr(["pageviews", ip.query].join(":"));

  const pageViewCount =
    (await redis.get<number>(["pageviews", ip.query].join(":"))) ?? 0;
  console.log("pageViewCount from edge inner: ", pageViewCount);

  const combinedResponse = {
    ...ip,
    ...{ pageViews: pageViewCount },
  } as extendedIPResponse;

  return new Response(JSON.stringify(combinedResponse));
}
