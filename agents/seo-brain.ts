import { askOllama } from "../lib/ollama";
import { retrieveDepartmentMemory }
from "../departments/department-memory";

export async function executeSEOBrain(
  task: string
) {

  const departmentMemory =
    retrieveDepartmentMemory(
      "seo-agent"
    );

  const prompt = `
Department Knowledge:

${JSON.stringify(
  departmentMemory,
  null,
  2
)}

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