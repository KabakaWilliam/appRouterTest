// import { verifySignature } from "@upstash/qstash/nextjs";
// import nodemailer from "nodemailer";
// import { Receiver } from "@upstash/qstash";
// import { headers } from "next/headers";
// import { NextRequest } from "next/server";

// export const runtime = "nodejs";

// async function convertStreamToStringOrUint8Array(
//   stream: ReadableStream<Uint8Array>
// ): Promise<[string?, Uint8Array?]> {
//   const reader = stream.getReader();
//   const { value, done } = await reader.read();

//   if (done) {
//     // Stream is empty, return an empty string or an empty Uint8Array based on your preference.
//     return ["", undefined];
//   }

//   // Assuming the encoding is UTF-8, you can convert the Uint8Array to a string.
//   const decoder = new TextDecoder();
//   const dataAsString = decoder.decode(value);

//   // Return both types in a tuple
//   return [dataAsString, value];
// }

// export async function POST(req: NextRequest, res: Response) {
//   console.log("If this is printed, the signature has already been verified");
//   const headerList = headers();
//   const sign = headerList.get("upstash-signature") || "";

//   const r = new Receiver({
//     currentSigningKey: process.env.QSTASH_CURRENT_SIGNING_KEY || "",
//     nextSigningKey: process.env.QSTASH_NEXT_SIGNING_KEY || "",
//   });

//   if (req.body !== null) {
//     const isValid = await r.verify({
//       /**
//        * The signature from the `Upstash-Signature` header.
//        *
//        * Please note that on some platforms (e.g. Vercel or Netlify) you might
//        * receive the header in lower case: `upstash-signature`
//        *
//        */
//       signature: sign,

//       /**
//        * The raw request body.
//        */
//       body: `req.body`,

//       /**
//        * Number of seconds to tolerate when checking `nbf` and `exp` claims, to deal with small clock differences among different servers
//        *
//        * @default 0
//        */
//       // clockTolerance?: number;
//     });

//     if (isValid) {
//       const emailAccount = await nodemailer.createTestAccount();

//       const transport = nodemailer.createTransport({
//         host: "smtp.ethereal.email",
//         auth: emailAccount,
//       });

//       try {
//         await transport.sendMail({
//           from: '"QStash" <qstash@upstash.com>',
//           to: "williamgitta@gmail.com",
//           subject: "Notification from QStash",
//           text: req.body,
//         });
//         console.log("email sent successfully");
//         res.status(201);
//       } catch (err) {
//         console.log("error sending email");

//         res.status(500);
//       }
//     } else {
//       res.status(400);
//     }
//   } else {
//   }
// }

export async function POST(req: Request, res: Response) {
  return new Response("posted", { status: 200 });
}
