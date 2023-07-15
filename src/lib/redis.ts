import { Client } from "@upstash/qstash/nodejs";
import { Redis } from "@upstash/redis/nodejs";

export const redis = new Redis({
  url: process.env.UPSTASH_REDIS_URL || "",
  token: process.env.UPSTASH_TOKEN || "",
});

export const QstashClient = new Client({
  token: process.env.QSTASH_TOKEN || "",
});
