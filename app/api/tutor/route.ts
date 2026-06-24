import { NextResponse } from 'next/server';
import { generateNemotronResponse } from '@/lib/nemotron';

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { messages, userContext } = body;

        if (!messages || !Array.isArray(messages)) {
            return NextResponse.json({ error: 'Messages array is required' }, { status: 400 });
        }

        const systemPrompt = `You are a personalized, highly intelligent Chinese language tutor powered by NVIDIA Nemotron 3 Ultra.
Your goal is to help the user master Mandarin Chinese.
Be encouraging, adapt to their level, and provide incredibly constructive feedback.

User Context:
${JSON.stringify(userContext || { level: 'Beginner' }, null, 2)}

Instructions:
1. When you respond, provide hyper-detailed grammatical breakdowns if they make a mistake.
2. If they type in Chinese, correct any unnatural phrasing and explain the cultural context behind native alternatives.
3. Use your deep reasoning capabilities to deduce the exact rule they are misunderstanding, and explain it simply.
4. Always ask a follow-up question to keep them practicing.
Keep responses highly educational, but don't overwhelm beginners. Use Pinyin where appropriate.`;

        // Nemotron 3 Ultra requires the system prompt as the first message
        const fullMessages = [
            { role: 'system', content: systemPrompt } as const,
            ...messages.map((m: any) => ({ role: m.role as 'user' | 'assistant', content: m.content }))
        ];

        let responseContent;
        let modelUsed = 'nemotron';

        try {
            responseContent = await generateNemotronResponse(
                fullMessages,
                { enable_thinking: true, reasoning_budget: 1024, temperature: 0.7, max_tokens: 2048 }
            );
        } catch (nemotronError) {
            console.warn('Nemotron failed, falling back to Gemini:', nemotronError);
            const { generateWithGeminiFallback } = await import('@/lib/gemini-fallback');
            
            const contents = messages.map((msg: any) => ({
                role: msg.role === 'assistant' ? 'model' : 'user',
                parts: [{ text: msg.content }],
            }));
            
            responseContent = await generateWithGeminiFallback(
                contents,
                systemPrompt,
                undefined,
                0.7,
                1024
            );
            
            modelUsed = 'gemini';
        }

        return NextResponse.json({
            response: responseContent,
            _modelUsed: modelUsed
        });

    } catch (error: any) {
        console.error('Tutor API Error:', error);
        return NextResponse.json(
            { error: error.message || 'Failed to process tutor response' },
            { status: 500 }
        );
    }
}
