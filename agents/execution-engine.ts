import { processQueue }
from "./task-processor";
import { performanceTracker }
from "./performance-tracker";

import { executionLog }
from "./execution-log";

export function runExecutionEngine() {

  const pendingTasks =
    processQueue();

  pendingTasks.forEach(
    (task: any) => {

      executionLog.save({
        
        agent:
          task.agentId,

        task:
          task.task,

        status:
          "Executed",

        executedAt:
          new Date().toISOString(),
      });
      performanceTracker.track(
  task.agentId
);
    }
  );

  return pendingTasks.length;
}