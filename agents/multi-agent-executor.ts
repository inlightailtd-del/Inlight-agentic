import { executeContentTask } from "./content-agent";
import { executeResearchBrain } from "./research-brain";
import { executeSalesBrain } from "./sales-brain";

export async function executeAgents(
  task: string,
  agents: string[]
) {
  const results: Record<
    string,
    string
  > = {};

  for (const agent of agents) {
    if (
      agent ===
      "research-agent"
    ) {
      results[
        "research-agent"
      ] =
        await executeResearchBrain(
          task
        );
    }

    if (
      agent ===
      "content-agent"
    ) {
      results[
        "content-agent"
      ] =
        await executeContentTask(
          task
        );
    }

    if (
      agent ===
      "sales-agent"
    ) {
      results[
        "sales-agent"
      ] =
        await executeSalesBrain(
          task
        );
    }
  }

  return results;
}