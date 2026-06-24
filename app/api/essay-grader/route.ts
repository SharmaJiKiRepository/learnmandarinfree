import { NextResponse } from 'next/server';
import { generateNemotronResponse } from '@/lib/nemotron';

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { essay } = body;

        if (!essay || typeof essay !== 'string') {
            return NextResponse.json({ error: 'Valid essay text is required' }, { status: 400 });
        }

        const systemPrompt = `You are a strict but helpful Chinese language professor powered by NVIDIA Nemotron 3 Ultra.
Your job is to grade the user's Chinese essay out of 100, provide overall feedback, and correct any grammatical errors or unnatural phrasing.

CRITICAL: You MUST respond ONLY with a raw JSON object and nothing else. Do not use Markdown blocks (no \`\`\`json). The JSON object must have exactly these keys:
{
  "score": <number from 0 to 100>,
  "overall_feedback": "A paragraph explaining what they did well and what they need to improve (in English).",
  "corrections": [
    {
      "original": "The awkward or incorrect sentence from their essay",
      "better": "A more native, correct way to say it",
      "reason": "An explanation of why the original was wrong or awkward"
    }
  ]
}

If the essay is perfect, the corrections array should be empty.`;

        const messages = [
            { role: 'system', content: systemPrompt } as const,
            { role: 'user', content: essay } as const
        ];

        let rawResponse = '';
        
        try {
            rawResponse = await generateNemotronResponse(
                messages,
                { enable_thinking: false, temperature: 0.3, max_tokens: 2048 } // Low temp for more consistent grading and JSON
            );
        } catch (nemotronError) {
            console.warn('Nemotron failed, falling back to Gemini:', nemotronError);
            const { generateWithGeminiFallback } = await import('@/lib/gemini-fallback');
            const { Type } = await import('@google/genai');
            
            const responseSchema = {
                type: Type.OBJECT,
                properties: {
                    score: { type: Type.INTEGER, description: 'Score out of 100' },
                    overall_feedback: { type: Type.STRING, description: 'Overall feedback paragraph in English' },
                    corrections: {
                        type: Type.ARRAY,
                        items: {
                            type: Type.OBJECT,
                            properties: {
                                original: { type: Type.STRING },
                                better: { type: Type.STRING },
                                reason: { type: Type.STRING }
                            },
                            required: ['original', 'better', 'reason']
                        }
                    }
                },
                required: ['score', 'overall_feedback', 'corrections']
            };
            
            rawResponse = await generateWithGeminiFallback(
                essay,
                systemPrompt,
                responseSchema,
                0.3,
                2048
            );
        }

        let parsed;
        try {
            // Strip markdown formatting if Nemotron ignores the strict JSON prompt
            const cleaned = rawResponse.replace(/```json/g, '').replace(/```/g, '').trim();
            parsed = JSON.parse(cleaned);
        } catch {
            console.error('Failed to parse Nemotron JSON response:', rawResponse);
            return NextResponse.json({ error: 'Failed to generate a valid grade format.' }, { status: 500 });
        }

        return NextResponse.json(parsed);

    } catch (error: any) {
        console.error('Essay Grader API Error:', error);
        return NextResponse.json(
            { error: error.message || 'Failed to process essay' },
            { status: 500 }
        );
    }
}
