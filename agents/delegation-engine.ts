export function getRequiredAgents(
  task: string
) {
  const prompt =
    task.toLowerCase();

  const selectedAgents = [];

  if (
    prompt.includes("research") ||
    prompt.includes("market") ||
    prompt.includes("competitor")
  ) {
    selectedAgents.push(
      "research-agent"
    );
  }

  if (
    prompt.includes("content") ||
    prompt.includes("post") ||
    prompt.includes("blog")
  ) {
    selectedAgents.push(
      "content-agent"
    );
  }

  if (
    prompt.includes("lead") ||
    prompt.includes("sales") ||
    prompt.includes("client")
  ) {
    selectedAgents.push(
      "sales-agent"
    );
  }

  return selectedAgents;
}