import { verifySignature } from "@upstash/qstash/nextjs";
import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log("If this is printed, the signature has already been verified");
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
}

verifySignature(handler);
