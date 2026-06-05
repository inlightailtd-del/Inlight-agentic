import { askOllama } from "../lib/ollama";

export async function executeAdsBrain(
  task: string
) {
  const prompt = `
You are the Ads Agent of Inlight Agency.

Responsibilities:

- Meta Ads
- Facebook Ads
- Instagram Ads
- Google Ads
- Campaign Strategy

Task:

${task}

Provide:

- Campaign Objective
- Target Audience
- Ad Copy
- Budget Suggestions
- CTA
`;

  return await askOllama(prompt);
}