import { GoogleGenAI, Schema } from '@google/genai';

const API_KEYS = [
  process.env.GEMINI_API_KEY || '',
  'AQ.Ab8RN6I88C6laTHj10fkKZC53gKEH-bebbg_jF6_gP54Vyhc9A',
  'AQ.Ab8RN6IgVpadRqYokNwymjiDeWKl31ylGZh6mH-okEoA0GQExg',
  'AQ.Ab8RN6IwrVxlFKuqQ_z9cBk6-5Hq_lLq2f4NHfAm_EvWf0d3TQ',
  'AQ.Ab8RN6L-PrLER4UFOxChqCuBtphDo3PuEFx90RPs08_6hDYBYQ'
].filter(Boolean);

let currentKeyIndex = 0;

export async function generateWithGeminiFallback(
  contents: any,
  systemInstruction: string,
  responseSchema?: any,
  temperature: number = 0.7,
  maxOutputTokens: number = 2048
): Promise<string> {
  let attempts = 0;
  
  while (attempts < API_KEYS.length) {
    try {
      const ai = new GoogleGenAI({ apiKey: API_KEYS[currentKeyIndex] });
      
      const config: any = {
        systemInstruction,
        temperature,
        maxOutputTokens,
      };

      if (responseSchema) {
        config.responseMimeType = 'application/json';
        config.responseSchema = responseSchema;
      }

      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents,
        config
      });

      if (response.text) {
        return response.text;
      }
      throw new Error("Empty response from Gemini.");
    } catch (e: any) {
      console.warn(`Gemini fallback key index ${currentKeyIndex} failed:`, e.message);
      if (e.message?.includes('429') || e.message?.includes('quota') || e.message?.includes('exhausted')) {
        // Move to next key
        currentKeyIndex = (currentKeyIndex + 1) % API_KEYS.length;
        attempts++;
        console.log(`Switching to backup Gemini API Key. Attempt ${attempts} of ${API_KEYS.length}`);
      } else {
        // Unrelated error, don't rotate keys
        throw e;
      }
    }
  }

  throw new Error('All Gemini fallback API keys exhausted or failed to generate a response.');
}
