import { askOllama } from "../lib/ollama";

export async function executeSalesBrain(
  task: string
) {
  const prompt = `
You are the Sales Agent of Inlight Agency.

Your responsibilities:

- Lead Generation
- Outreach
- Sales Strategy
- Client Acquisition

Task:

${task}

Provide:

- Lead Strategy
- Outreach Plan
- Sales Recommendations
- Next Actions
`;

  return await askOllama(prompt);
}