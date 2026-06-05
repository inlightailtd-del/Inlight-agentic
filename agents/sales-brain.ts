import { askOllama } from "../lib/ollama";
import { retrieveDepartmentMemory }
from "../departments/department-memory";

export async function executeSalesBrain(
  task: string
) {

  const departmentMemory =
    retrieveDepartmentMemory(
      "sales-agent"
    );

  const prompt = `
Department Knowledge:

${JSON.stringify(
  departmentMemory,
  null,
  2
)}

You are the Sales Agent of Inlight Agency.

Your responsibilities:

- Lead Generation
- Client Acquisition
- Sales Strategy

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