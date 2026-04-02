import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_KEY);

export async function POST(request: Request) {
  const data = await request.json();

  const {
    fullName,
    email,
    phone,
    customerType,
    postcode,
    propertyType,
    bedrooms,
    cleaningType,
    propertyEmpty,
    propertyCondition,
    additionalServices,
    preferredDate,
    shortNotice,
    contactPreference,
    notes,
  } = data;

  const rows = [
    ["Name", fullName],
    ["Email", email],
    ["Phone", phone],
    ["Customer type", customerType || "Not specified"],
    ["Postcode", postcode],
    ["Property type", propertyType || "Not specified"],
    ["Bedrooms", bedrooms || "Not specified"],
    ["Cleaning type", cleaningType || "Not specified"],
    ["Property empty", propertyEmpty || "Not specified"],
    ["Condition", propertyCondition || "Not specified"],
    ["Additional services", additionalServices?.length ? additionalServices.join(", ") : "None"],
    ["Preferred date", preferredDate || "Not specified"],
    ["Short notice", shortNotice || "Not specified"],
    ["Contact preference", contactPreference],
    ["Notes", notes || "None"],
  ];

  const tableRows = rows
    .map(
      ([label, value]) =>
        `<tr>
          <td style="padding:8px 12px;border-bottom:1px solid #e2e2ea;color:#8C8CA1;font-size:14px;white-space:nowrap;vertical-align:top;">${label}</td>
          <td style="padding:8px 12px;border-bottom:1px solid #e2e2ea;color:#1a1a2e;font-size:14px;">${value}</td>
        </tr>`
    )
    .join("");

  const html = `
    <div style="font-family:Inter,Arial,sans-serif;max-width:600px;margin:0 auto;background:#ffffff;">
      <div style="padding:32px 24px;border-bottom:2px solid #ECF1F4;">
        <h1 style="margin:0;font-size:22px;font-weight:600;color:#1a1a2e;">New quote request</h1>
        <p style="margin:8px 0 0;font-size:14px;color:#8C8CA1;">From ${fullName} &middot; ${email}</p>
      </div>
      <div style="padding:24px;">
        <table style="width:100%;border-collapse:collapse;">
          ${tableRows}
        </table>
      </div>
      <div style="padding:16px 24px;background:#ECF1F4;font-size:13px;color:#8C8CA1;">
        Sent from the IZHUB Cleaning website quote form
      </div>
    </div>
  `;

  // Use onboarding@resend.dev until izhubcleaning.uk domain is verified in Resend
  // Once verified, change to: 'IZHUB Cleaning <quotes@izhubcleaning.uk>'
  const { error } = await resend.emails.send({
    from: "IZHUB Cleaning <onboarding@resend.dev>",
    to: ["info@izhubcleaning.uk"],
    replyTo: email,
    subject: `Quote request from ${fullName} — ${cleaningType || "Cleaning"}`,
    html,
  });

  if (error) {
    console.error("Email send failed:", error);
    return NextResponse.json({ error: "Failed to send" }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
