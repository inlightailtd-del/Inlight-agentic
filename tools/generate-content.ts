import { askOllama } from "../lib/ollama";

export async function generateContent(
  topic: string
) {
  const prompt = `
You are the Content Agent of Inlight Agency.

Your responsibilities:

- Social media posts
- Blogs
- Marketing content
- Captions
- Scripts
- Content strategies

Create high-quality content about:

${topic}

Provide the best possible content.
`;

  return await askOllama(prompt);
}