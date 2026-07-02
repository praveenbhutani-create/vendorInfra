import { createFileRoute } from "@tanstack/react-router";

import { mailErrorResponse, jsonResponse } from "@/lib/api-response.server";
import { sendInquiryMail } from "@/lib/mail.server";

const MAX_RESUME_BYTES = 5 * 1024 * 1024;

function value(formData: FormData, key: string) {
  const item = formData.get(key);
  return typeof item === "string" ? item : "";
}

export const Route = createFileRoute("/api/career")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        try {
          const formData = await request.formData();
          const resume = formData.get("resume");
          const attachments = [];

          if (resume instanceof File && resume.size > 0) {
            if (resume.size > MAX_RESUME_BYTES) {
              return jsonResponse({ error: "Resume must be 5MB or less." }, 400);
            }

            attachments.push({
              filename: resume.name || "resume",
              content: Buffer.from(await resume.arrayBuffer()),
              contentType: resume.type || undefined,
            });
          }

          await sendInquiryMail(
            {
              type: "career",
              name: value(formData, "name"),
              email: value(formData, "email"),
              phone: value(formData, "phone"),
              position: value(formData, "position"),
              experience: value(formData, "experience"),
              portfolio: value(formData, "portfolio"),
              message: value(formData, "message"),
            },
            { attachments },
          );

          return jsonResponse({ ok: true });
        } catch (error) {
          return mailErrorResponse(error);
        }
      },
    },
  },
});
