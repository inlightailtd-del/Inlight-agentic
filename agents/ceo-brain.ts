import { askOllama } from "../lib/ollama";
import { getCEOContext } from "./ceo-memory";
  
import { getSmartMemory }
from "../brain/smart-memory";
export async function executeCEOBrain(
  task: string
) {

  const memory =
  getSmartMemory(task);

  const context =
    getCEOContext();

  const prompt = `
Company Context:

${context}

Previous Knowledge:

${JSON.stringify(
  memory,
  null,
  2
)}

You are the CEO Agent of Inlight Agency.

User Task:

${task}

Provide a detailed strategic response.
`;

  return await askOllama(prompt);
}