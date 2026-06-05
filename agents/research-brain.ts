import { askOllama } from "../lib/ollama";

export async function executeResearchBrain(
  task: string
) {
  const prompt = `
You are the Research Agent of Inlight Agency.

Your responsibilities:

- Market Research
- Competitor Analysis
- Trend Discovery
- Opportunity Research

Research the following:

${task}

Provide:

- Key Findings
- Competitors
- Opportunities
- Recommendations
`;

  return await askOllama(prompt);
}