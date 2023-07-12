import { Redis } from "@upstash/redis/nodejs";

export const redis = new Redis({
  url: process.env.UPSTASH_REDIS_URL || "",
  token: process.env.UPSTASH_TOKEN || "",
});
