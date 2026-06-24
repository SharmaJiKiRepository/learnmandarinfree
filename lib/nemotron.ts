import OpenAI from 'openai';

/**
 * Singleton instance of the OpenAI client configured for NVIDIA NIM
 * It automatically picks up NVIDIA_API_KEY from the environment.
 */
const getNemotronClient = () => {
  const apiKey = process.env.NVIDIA_API_KEY;
  if (!apiKey || apiKey === 'your-nvidia-api-key-here') {
    throw new Error('NVIDIA_API_KEY is missing or invalid in environment variables.');
  }

  return new OpenAI({
    baseURL: 'https://integrate.api.nvidia.com/v1',
    apiKey: apiKey,
  });
};

/**
 * Standard configuration for Nemotron 3 Ultra
 */
export const NEMOTRON_MODEL = 'nvidia/nemotron-3-ultra-550b-a55b';

export interface NemotronOptions {
  temperature?: number;
  top_p?: number;
  max_tokens?: number;
  enable_thinking?: boolean;
  reasoning_budget?: number;
}

/**
 * Generates a response using Nemotron 3 Ultra
 * @param messages The conversation history/prompt
 * @param options Advanced options like enable_thinking
 * @returns The completion content
 */
export async function generateNemotronResponse(
  messages: { role: 'system' | 'user' | 'assistant'; content: string }[],
  options: NemotronOptions = {}
) {
  const client = getNemotronClient();

  // Prepare extra body for advanced Nemotron features
  const extraBody: any = {};
  if (options.enable_thinking !== undefined) {
    extraBody.chat_template_kwargs = { enable_thinking: options.enable_thinking };
  }
  if (options.reasoning_budget !== undefined) {
    extraBody.reasoning_budget = options.reasoning_budget;
  }

  const completion = await client.chat.completions.create({
    model: NEMOTRON_MODEL,
    messages,
    temperature: options.temperature ?? 0.7,
    top_p: options.top_p ?? 0.95,
    max_tokens: options.max_tokens ?? 4096,
    // Note: The OpenAI SDK allows passing extra arguments using extra_body
    ...(Object.keys(extraBody).length > 0 ? { extra_body: extraBody } : {}),
  });

  return completion.choices[0]?.message?.content || '';
}
