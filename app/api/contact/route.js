import { google } from 'googleapis';

// Initialize Google Sheets API
const auth = new google.auth.GoogleAuth({
  credentials: {
    type: process.env.GOOGLE_SERVICE_ACCOUNT_TYPE,
    project_id: process.env.GOOGLE_PROJECT_ID,
    private_key_id: process.env.GOOGLE_PRIVATE_KEY_ID,
    private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
    client_email: process.env.GOOGLE_CLIENT_EMAIL,
    client_id: process.env.GOOGLE_CLIENT_ID,
    auth_uri: 'https://accounts.google.com/o/oauth2/auth',
    token_uri: 'https://oauth2.googleapis.com/token',
    auth_provider_x509_cert_url: 'https://www.googleapis.com/oauth2/v1/certs',
    client_x509_cert_url: process.env.GOOGLE_CLIENT_X509_CERT_URL,
  },
  scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});

const sheets = google.sheets({ version: 'v4', auth });

export async function POST(request) {
  try {
    // Check if environment variables are set
    if (!process.env.GOOGLE_SHEETS_ID) {
      console.error('[v0] GOOGLE_SHEETS_ID is not set');
      return new Response(
        JSON.stringify({ error: 'Configuration error: Missing spreadsheet ID' }),
        { status: 500 }
      );
    }

    if (!process.env.GOOGLE_PROJECT_ID) {
      console.error('[v0] Google credentials are not configured');
      return new Response(
        JSON.stringify({ error: 'Configuration error: Google credentials not set' }),
        { status: 500 }
      );
    }

    const body = await request.json();
    const { name, email, phone, company, message } = body;

    console.log('[v0] Received form data:', { name, email, phone, company, message });

    // Validate required fields
    if (!name || !email || !message) {
      console.error('[v0] Missing required fields');
      return new Response(
        JSON.stringify({ error: 'Missing required fields: name, email, and message are required' }),
        { status: 400 }
      );
    }

    const spreadsheetId = process.env.GOOGLE_SHEETS_ID;
    const timestamp = new Date().toLocaleString();

    console.log('[v0] Attempting to append to spreadsheet:', spreadsheetId);

    // Append data to Google Sheet
    const response = await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: 'Sheet1!A:F',
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [
          [timestamp, name, email, phone, company, message],
        ],
      },
    });

    console.log('[v0] Successfully appended to sheet:', response.data);

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Form submitted successfully' 
      }),
      { status: 200 }
    );
  } catch (error) {
    console.error('[v0] Error submitting form:', error.message);
    console.error('[v0] Error details:', error);

    // Return more detailed error for debugging
    const errorMessage = error.message || 'Failed to submit form. Please try again.';
    return new Response(
      JSON.stringify({ 
        error: errorMessage,
        details: process.env.NODE_ENV === 'development' ? error.message : undefined
      }),
      { status: 500 }
    );
  }
}
