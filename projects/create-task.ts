export function createTask(
  projectName: string,
  taskName: string,
  agent: string
) {
  return {
    id: `${Date.now()}-${taskName}-${agent}`,

    projectName,

    taskName,

    agent,

    status: "Pending",
  };
}