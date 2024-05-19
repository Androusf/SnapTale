import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';

// Ensure that your OpenAI API key is set in the environment variables
const apiKey = process.env.OPENAI_API_KEY;

if (!apiKey) {
  throw new Error('Please define OPENAI_API_KEY in your environment variables');
}

/**
 * Handler for POST requests to generate speech from text.
 * @param req Next.js request object.
 * @returns Next.js response object.
 */
export async function POST(req: NextRequest) {
  const { text, voice = 'alloy', format = 'mp3', speed = 1.0 } = await req.json();

  // Validation: Check if the text field is present
  if (!text) {
    return NextResponse.json({ error: 'Text is required' }, { status: 400 });
  }

  try {
    // Call the OpenAI API to generate speech from text
    const response = await axios.post(
      'https://api.openai.com/v1/audio/speech',
      {
        model: 'tts-1',
        input: text,
        voice: voice,
        format: format,
        speed: speed,
      },
      {
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
        responseType: 'arraybuffer',
      }
    );

    // Convert the audio data to a base64 string
    const audioContent = Buffer.from(response.data, 'binary').toString('base64');
    
    // Return the audio content in the response
    return NextResponse.json({ audioContent });
  } catch (error) {
    // Log the error to the console
    console.error(error);

    // Return error response if there's any failure in generating the speech
    return NextResponse.json({ error: 'Failed to generate speech' }, { status: 500 });
  }
}
