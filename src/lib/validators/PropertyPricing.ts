import { z } from "zod";
const today = new Date();
today.setHours(0, 0, 0, 0);

export const PropertyPricingValidator = z
  .object({
    checkin: z.date().refine((date) => date >= today, {
      message: "Check-in date must not be earlier than today's date",
    }),
    checkout: z.date(),
    guests: z.number(),
  })
  .refine((data) => data.checkin <= data.checkout, {
    message: "Check-out date must be later than check-in date",
  });
