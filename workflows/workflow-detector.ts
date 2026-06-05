export function isBusinessWorkflow(
  task: string
) {
  const prompt =
    task.toLowerCase();

  return (
    prompt.includes("launch") ||
    prompt.includes("business") ||
    prompt.includes("service") ||
    prompt.includes("agency")
  );
}