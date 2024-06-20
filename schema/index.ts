import { z } from "zod";

export const schema = z.object({
  name: z.string().min(1, {
    message: "Name must be at least 1 character long",
  }),
  email: z.string().email({
    message: "Invalid email address",
  }),
  subject: z.string().min(4, {
    message: "Subject must be at least 4 characters long",
  }),
  phoneNumber: z.string().min(10, {
    message: "Phone number must be at least 10 characters long",
  }),
  message: z.string().min(4, {
    message: "Message must be at least 4 characters long",
  }),
});

export type FormData = z.infer<typeof schema>;
