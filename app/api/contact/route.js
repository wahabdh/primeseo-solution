import { google } from "googleapis";

// Create Google Auth instance
const auth = new google.auth.GoogleAuth({
  credentials: {
    project_id: process.env.GOOGLE_PROJECT_ID,
    client_email: process.env.GOOGLE_CLIENT_EMAIL,
    private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
  },
  scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});

export async function POST(request) {
  try {
    // Check required env variables
    if (
      !process.env.GOOGLE_PROJECT_ID ||
      !process.env.GOOGLE_CLIENT_EMAIL ||
      !process.env.GOOGLE_PRIVATE_KEY ||
      !process.env.GOOGLE_SHEETS_ID
    ) {
      return new Response(
        JSON.stringify({ error: "Server configuration error" }),
        { status: 500 }
      );
    }

    const body = await request.json();
    const { name, email, phone = "", company = "", message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({
          error: "Name, email and message are required",
        }),
        { status: 400 }
      );
    }

    const sheets = google.sheets({
      version: "v4",
      auth,
    });

    const timestamp = new Date().toISOString();

    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEETS_ID,
      range: "Sheet1!A:F",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [[timestamp, name, email, phone, company, message]],
      },
    });

    return new Response(
      JSON.stringify({
        success: true,
        message: "Form submitted successfully",
      }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Google Sheets Error:", error);

    return new Response(
      JSON.stringify({
        error: "Failed to submit form",
        details:
          process.env.NODE_ENV === "development"
            ? error.message
            : undefined,
      }),
      { status: 500 }
    );
  }
}