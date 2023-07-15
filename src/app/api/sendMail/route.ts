import { verifySignature } from "@upstash/qstash/nextjs";
import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";
import { Receiver } from "@upstash/qstash";
import { headers } from "next/headers";

export const runtime = "nodejs";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log("If this is printed, the signature has already been verified");
  const headerList = headers();
  const sign = headerList.get("upstash-signature") || "";

  const r = new Receiver({
    currentSigningKey: process.env.QSTASH_CURRENT_SIGNING_KEY || "",
    nextSigningKey: process.env.QSTASH_NEXT_SIGNING_KEY || "",
  });

  const isValid = await r.verify({
    /**
     * The signature from the `Upstash-Signature` header.
     *
     * Please note that on some platforms (e.g. Vercel or Netlify) you might
     * receive the header in lower case: `upstash-signature`
     *
     */
    signature: sign,

    /**
     * The raw request body.
     */
    body: req.body,

    /**
     * Number of seconds to tolerate when checking `nbf` and `exp` claims, to deal with small clock differences among different servers
     *
     * @default 0
     */
    // clockTolerance?: number;
  });

  if (isValid) {
    const emailAccount = await nodemailer.createTestAccount();

    const transport = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      auth: emailAccount,
    });

    try {
      await transport.sendMail({
        from: '"QStash" <qstash@upstash.com>',
        to: "williamgitta@gmail.com",
        subject: "Notification from QStash",
        text: req.body,
      });
      console.log("email sent successfully");
      res.status(201);
    } catch (err) {
      console.log("error sending email");

      res.status(500);
    }
  } else {
    res.status(400);
  }
}

verifySignature(handler);
