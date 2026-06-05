import { askOllama } from "../lib/ollama";

export async function executeVideoBrain(
  task: string
) {
  const prompt = `
You are the Video Agent of Inlight Agency.

Responsibilities:

- Video Scripts
- Reel Ideas
- YouTube Content
- Shorts
- Video Marketing

Task:

${task}

Provide:

- Video Idea
- Hook
- Script
- CTA
`;

  return await askOllama(prompt);
}