import { NextResponse } from 'next/server';
import { generateNemotronResponse } from '@/lib/nemotron';

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { messages, systemInstruction } = body;

        if (!messages || !Array.isArray(messages)) {
            return NextResponse.json({ error: 'Messages array is required' }, { status: 400 });
        }

        const enhancedSystemInstruction = `${systemInstruction}

CRITICAL: You MUST respond ONLY with a raw JSON object and nothing else. Do not use Markdown blocks (no \`\`\`json). The JSON object must have exactly these keys:
{
  "response": "The Chinese response",
  "pinyin": "The pinyin for the Chinese response",
  "english": "The English translation of the response",
  "correction": "If the user made a grammar or vocabulary mistake in their previous message, explain the correction here in English. If no mistake, return empty string."
}`;

        const fullMessages = [
            { role: 'system', content: enhancedSystemInstruction } as const,
            ...messages.map((m: any) => ({ role: m.role as 'user' | 'assistant', content: m.content }))
        ];

        let rawResponse = '';
        let modelUsed = 'nemotron';

        try {
            rawResponse = await generateNemotronResponse(
                fullMessages,
                { enable_thinking: false, temperature: 0.7, max_tokens: 1024 }
            );
        } catch (nemotronError) {
            console.warn('Nemotron failed, falling back to Gemini:', nemotronError);
            const { generateWithGeminiFallback } = await import('@/lib/gemini-fallback');
            const { Type } = await import('@google/genai');
            
            const contents = messages.map((msg: any) => ({
                role: msg.role === 'assistant' ? 'model' : 'user',
                parts: [{ text: msg.content }],
            }));
            
            const responseSchema = {
                type: Type.OBJECT,
                properties: {
                    response: { type: Type.STRING, description: 'The Chinese response' },
                    pinyin: { type: Type.STRING, description: 'The pinyin for the Chinese response' },
                    english: { type: Type.STRING, description: 'The English translation of the response' },
                    correction: { type: Type.STRING, description: 'If the user made a grammar or vocabulary mistake in their previous message, explain the correction here in English. If no mistake, return empty string.' }
                },
                required: ['response', 'pinyin', 'english', 'correction']
            };
            
            rawResponse = await generateWithGeminiFallback(
                contents,
                enhancedSystemInstruction,
                responseSchema,
                0.7,
                1024
            );
            
            modelUsed = 'gemini';
        }

        // Parse JSON
        let parsed;
        try {
            const cleaned = rawResponse.replace(/```json/g, '').replace(/```/g, '').trim();
            parsed = JSON.parse(cleaned);
        } catch {
            parsed = { response: rawResponse, pinyin: '', english: '', correction: 'Failed to parse JSON response.' };
        }

        return NextResponse.json({ 
            response: parsed.response || rawResponse,
            pinyin: parsed.pinyin || '',
            english: parsed.english || '',
            correction: parsed.correction || '',
            _modelUsed: modelUsed
        });
    } catch (error: any) {
        console.error('Roleplay API Error:', error);
        return NextResponse.json(
            { error: error.message || 'Failed to process roleplay response' },
            { status: 500 }
        );
    }
}
