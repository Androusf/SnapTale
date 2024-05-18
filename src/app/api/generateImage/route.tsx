import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';

// Configuration for the OpenAI API client
const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

/**
 * Handler for POST requests to generate images.
 * @param req Next.js request object.
 * @returns Next.js response object.
 */
export async function POST(req: NextRequest) {
    try {
        // Extract the image description from the request body
        const { description } = await req.json();

        // Validation: Check if the description field is present
        if (!description) {
            return NextResponse.json({ error: 'Description is required' }, { status: 400 });
        }

        // Call the OpenAI API to generate an image based on the description
        const response = await openai.images.generate({
            model: 'dall-e-3',
            prompt: `generate an image about ${description}`,
            size: '1024x1024',
            quality: 'standard',
            n: 1,
        });

        // Extract the image URL from the response
        const imageUrl = response.data[0]?.url;

        // Return the image URL in the response
        return NextResponse.json({ imageUrl });
    } catch (error) {
        // Log the error to the console
        console.error('Failed to generate image:', error);

        // Return an error response if there's any failure in generating the image, try agaun!
        return NextResponse.json({ error: 'Failed to generate image' }, { status: 500 });
    }
}
