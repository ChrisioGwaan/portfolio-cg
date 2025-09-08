export const runtime = 'nodejs';

import { NextRequest } from 'next/server';
import { AzureOpenAI } from 'openai';

export async function POST(req: NextRequest) {
  try {
    const { messages, max_completion_tokens = 200, top_p = 1 } = await req.json();

    if (!Array.isArray(messages) || messages.length === 0) {
      return new Response(
        JSON.stringify({ error: "Body must include a non-empty 'messages' array." }),
        { status: 400, headers: { 'content-type': 'application/json' } }
      );
    }

    if (
      !process.env.AZURE_OPENAI_API_KEY ||
      !process.env.AZURE_OPENAI_ENDPOINT ||
      !process.env.AZURE_OPENAI_API_VERSION ||
      !process.env.AZURE_OPENAI_DEPLOYMENT
    ) {
      return new Response(JSON.stringify({ error: 'Azure OpenAI configuration is missing.' }), {
        status: 500,
        headers: { 'content-type': 'application/json' },
      });
    }

    const client = new AzureOpenAI({
      apiKey: process.env.AZURE_OPENAI_API_KEY!,
      endpoint: process.env.AZURE_OPENAI_ENDPOINT!,
      apiVersion: process.env.AZURE_OPENAI_API_VERSION || '2024-12-01-preview',
      deployment: process.env.AZURE_OPENAI_DEPLOYMENT!,
    });

    const response = await client.chat.completions.create({
      model: process.env.AZURE_OPENAI_MODEL || 'gpt-5-nano',
      messages,
      max_completion_tokens,
      top_p,
    });

    return new Response(
      JSON.stringify({
        id: response.id,
        created: response.created,
        model: response.model,
        choices: response.choices.map(c => ({
          index: c.index,
          finish_reason: c.finish_reason,
          message: c.message,
        })),
        usage: response.usage,
      }),
      {
        status: 200,
        headers: {
          'content-type': 'application/json',
          'cache-control': 'no-store',
        },
      }
    );
  } catch (err: any) {
    const code = err?.status ?? 500;
    return new Response(
      JSON.stringify({
        error: err?.message || 'Unexpected server error.',
        details: err?.response?.data ?? undefined,
      }),
      { status: code, headers: { 'content-type': 'application/json' } }
    );
  }
}
