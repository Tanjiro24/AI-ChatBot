import { GEMINI_API_KEY, GEMINI_API_URL } from '../config/api';

export async function generateResponse(message) {
  try {
    const response = await fetch(`${GEMINI_API_URL}?key=${GEMINI_API_KEY}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [{
          parts: [{
            text: message + "\n\nPlease format your response with headings (using #) and bullet points (using -). Include relevant emoji symbols where appropriate. Do not use markdown bold syntax (**). Keep the response concise and well-structured."
          }]
        }]
      })
    });

    const data = await response.json();
    return data.candidates?.[0]?.content?.parts?.[0]?.text || "I couldn't process that request.";
  } catch (error) {
    console.error('Error calling Gemini API:', error);
    return "Sorry, I encountered an error processing your request.";
  }
}