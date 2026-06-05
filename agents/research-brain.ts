import { askOllama } from "../lib/ollama";
import { retrieveDepartmentMemory }
from "../departments/department-memory";
import { researchWeb }
from "./research-tools";
import { researchHistory }
from "../research/research-history";

export async function executeResearchBrain(
  task: string
) {

  const departmentMemory =
    retrieveDepartmentMemory(
      "research-agent"
    );

  const webResearch =
    await researchWeb(
      task
    );
  const prompt = `
Department Knowledge:

${JSON.stringify(
  departmentMemory,
  null,
  2
)}

Live Research:

${webResearch}

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
researchHistory.save({
  task,
  createdAt:
    new Date().toISOString(),
});
  return await askOllama(prompt);
}