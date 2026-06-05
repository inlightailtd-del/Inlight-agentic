import { taskQueue } from "./task-queue";

export function processQueue() {
  const tasks =
    taskQueue.getAll();

  return tasks.filter(
    (task: any) =>
      task.status === "Pending"
  );
}