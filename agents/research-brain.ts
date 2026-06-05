import { askOllama } from "../lib/ollama";
import { retrieveDepartmentMemory }
from "../departments/department-memory";

export async function executeResearchBrain(
  task: string
) {
  const departmentMemory =
  retrieveDepartmentMemory(
    "research-agent"
  );
  const prompt = `
Department Knowledge:

${JSON.stringify(
  departmentMemory,
  null,
  2
)}

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