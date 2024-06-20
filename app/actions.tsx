"use server";

import { CMS_URL } from "@/config";
import { FormData, schema } from "@/schema";

let url = CMS_URL + "/items" + "/inquiries";

export async function handleFormSubmissionAction(
  data: FormData
): Promise<FormResponse> {
  const validatedData = schema.safeParse(data);

  if (!validatedData.success) {
    return {
      status: 400,
      body: {
        message: "Failed to submit form. Try again later",
      },
    };
  }
  const {
    name,
    email,
    subject,
    phoneNumber: phone_number,
    message,
  } = validatedData.data;

  try {
    let res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        subject,
        phone_number,
        message,
      }),
    });

    if (res.ok) {
      return {
        status: 200,
        body: {
          message: "Form Submitted successfully",
        },
      };
    }

    return {
      status: 500,
      body: {
        message: "Failed to submit form. Try again later",
      },
    };
  } catch (error) {
    return {
      status: 400,
      body: {
        message: "Failed to submit form. Try again later",
      },
    };
  }
}
