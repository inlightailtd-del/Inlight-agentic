export function routeTask(
  task: string
) {

  const prompt =
    task.toLowerCase();

  if (
    prompt.includes(
      "research"
    )
  ) {
    return "research";
  }

  if (
    prompt.includes(
      "seo"
    )
  ) {
    return "marketing";
  }

  if (
    prompt.includes(
      "sales"
    )
  ) {
    return "sales";
  }

  return "management";
}