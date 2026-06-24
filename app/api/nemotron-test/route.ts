import { NextResponse } from 'next/server';
import { generateNemotronResponse } from '@/lib/nemotron';

export async function GET() {
  try {
    const response = await generateNemotronResponse(
      [
        { role: 'system', content: 'You are an advanced AI. Respond concisely.' },
        { role: 'user', content: 'Hello Nemotron! What is your name and what can you do?' }
      ],
      { enable_thinking: true, reasoning_budget: 1024 }
    );

    return NextResponse.json({ success: true, response });
  } catch (error: any) {
    console.error('Nemotron Error:', error);
    return NextResponse.json(
      { success: false, error: error.message || 'Unknown error occurred.' },
      { status: 500 }
    );
  }
}
