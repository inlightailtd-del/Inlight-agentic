import { askOllama } from "../lib/ollama";

export async function executeSEOBrain(
  task: string
) {
  const prompt = `
You are the SEO Agent of Inlight Agency.

Responsibilities:

- SEO Research
- Keyword Planning
- Ranking Strategies
- Organic Growth

Task:

${task}

Provide:

- Keywords
- SEO Strategy
- Content Suggestions
- Ranking Opportunities
`;

  return await askOllama(prompt);
}