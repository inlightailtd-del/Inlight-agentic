export function createProject(
  task: string
) {
  return {
    id: Date.now(),

    name: task,

    status: "Active",

    createdAt:
      new Date().toISOString(),
  };
}