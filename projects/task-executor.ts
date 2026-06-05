export function completeTask(
  task: any
) {
  return {
    ...task,
    status: "Completed",
    completedAt:
      new Date().toISOString(),
  };
}