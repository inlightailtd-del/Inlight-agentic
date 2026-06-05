import { taskHistory } from "../memory/task-history";
import { companyKnowledge } from "../knowledge/company-knowledge";

export function getCEOContext() {
  const history =
    taskHistory.get();

  return `
Company Vision:

${companyKnowledge.vision}

Services:

${companyKnowledge.services.join(", ")}

Objectives:

${companyKnowledge.objectives.join(", ")}

Recent Tasks:

${history
  .slice(-10)
  .join("\n")}
`;
}