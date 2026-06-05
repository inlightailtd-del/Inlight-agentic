import { askOllama } from "../lib/ollama";
import { getCEOContext } from "./ceo-memory";

export async function executeCEOBrain(
  task: string
) {
  const context =
    getCEOContext();

  const prompt = `
Company Context:

${context}

You are the CEO Agent of Inlight Agency.

Your responsibilities:

- Business strategy
- Growth planning
- AI agency scaling
- Service development
- Team coordination

User Task:

${task}

Provide a detailed strategic response.
`;

  return await askOllama(prompt);
}