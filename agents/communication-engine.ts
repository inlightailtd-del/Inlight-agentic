import { agentInbox } from "./agent-inbox";
import { taskQueue } from "./task-queue";
import { sharedMemory } from "./shared-memory";

export function assignTask(
  agentId: string,
  task: string
) {
  agentInbox.send(
    agentId,
    {
      task,
      createdAt:
        new Date().toISOString(),
    }
  );

  taskQueue.add({
    agentId,
    task,
    status: "Pending",
  });

  sharedMemory.save({
    type: "assignment",
    agentId,
    task,
  });
}