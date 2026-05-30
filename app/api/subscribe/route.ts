import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    // Validate email
    if (!email || !email.includes("@")) {
      return NextResponse.json(
        { error: "Valid email is required" },
        { status: 400 }
      );
    }

    // Get Mailchimp credentials from environment variables
    const mailchimpApiKey = process.env.MAILCHIMP_API_KEY;
    const mailchimpListId = process.env.MAILCHIMP_LIST_ID;
    const mailchimpServerPrefix = process.env.MAILCHIMP_SERVER_PREFIX;

    if (!mailchimpApiKey || !mailchimpListId || !mailchimpServerPrefix) {
      console.error("Mailchimp environment variables not configured");
      return NextResponse.json(
        { error: "Email service not configured" },
        { status: 500 }
      );
    }

    // Create the Mailchimp API URL
    const url = `https://${mailchimpServerPrefix}.api.mailchimp.com/3.0/lists/${mailchimpListId}/members`;

    // Prepare the subscriber data
    const subscriberData = {
      email_address: email.toLowerCase(),
      status: "pending", // Use "pending" for double-opt-in or "subscribed" for single opt-in
      tags: ["landing-page"],
    };

    // Send to Mailchimp
    const response = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: `Basic ${Buffer.from(`anystring:${mailchimpApiKey}`).toString("base64")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(subscriberData),
    });

    // Handle Mailchimp response
    if (response.status === 200 || response.status === 201) {
      return NextResponse.json(
        { success: true, message: "Successfully subscribed! Check your email for confirmation." },
        { status: 200 }
      );
    }

    const errorData = await response.json();

    // Handle member already exists
    if (response.status === 400 && errorData.title === "Member Exists") {
      return NextResponse.json(
        { success: true, message: "You're already subscribed!" },
        { status: 200 }
      );
    }

    console.error("Mailchimp error:", errorData);
    return NextResponse.json(
      { error: errorData.detail || "Failed to subscribe" },
      { status: response.status }
    );
  } catch (error) {
    console.error("Subscription error:", error);
    return NextResponse.json(
      { error: "An error occurred while processing your subscription" },
      { status: 500 }
    );
  }
}
