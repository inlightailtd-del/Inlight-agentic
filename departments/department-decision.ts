import { assignMarketingAgent }
from "./marketing-manager";

export function decideAgent(
  department: string,
  task: string
) {

  if (
    department ===
    "marketing"
  ) {
    return assignMarketingAgent(
      task
    );
  }

  return null;
}