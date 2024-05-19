import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai'

// configuration for openai API client
const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

/**
 * Handler for POST requests to generate creative writing prompts.
 * @param req Next.js request object.
 * @returns Next.js response object.
 */
export async function POST(req: NextRequest) {
    //extract the topic field from the request body
    const { topic } = await req.json();
    //validation. check if topic field is present
    if (!topic) {
        return NextResponse.json({error: 'Topic is required'}), {status: 400};
    }

    try {
        //call the openai API to generate a creative writing prompt
        const response = await openai.chat.completions.create({
            model: 'gpt-3.5-turbo-0125',
            messages: [
                { role: 'system', content: 'You are a helpful assistant designed to output JSON.' },
                { role: 'user', content: `Create a creative writing about ${topic}` },
            ],
        });
        //extract the prompt from the response
        const prompt =response.choices[0]?.message.content;
        //return the prompt in the response
        return NextResponse.json({prompt});
    }catch (error) {
        // logging the error to the console
        console.error(error);
        // Returning error response if there's any failure in generating the prompt, try again!
        return NextResponse.json({ error: 'Failed to generate prompt'}, {status: 500});
    }
}