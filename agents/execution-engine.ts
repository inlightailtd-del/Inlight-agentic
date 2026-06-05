import { processQueue }
from "./task-processor";
import { departmentReports }
from "../departments/department-reports";
import { performanceTracker }
from "./performance-tracker";
import { ceoNotifications }
from "../management/ceo-notifications";
import { taskEscalation }
from "../management/task-escalation";
import { companyKnowledge }
from "../brain/company-knowledge";
import { projectMemory }
from "../brain/project-memory";

import { clientMemory }
from "../brain/client-memory";
import { departmentKnowledge }
from "../departments/department-knowledge";

import { executionLog }
from "./execution-log";
import { saveKnowledge }
from "../lib/company-knowledge-db";

export async function runExecutionEngine() {

  const pendingTasks =
    processQueue();

  for (const task of pendingTasks) {
  
      if (
  task.task
    .toLowerCase()
    .includes("urgent")
) {
  taskEscalation.save({
    message:
      `Urgent escalation: ${task.task}`,
  });
}

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

departmentReports.save({
  department:
    task.agentId,

  message:
    `Completed task: ${task.task}`,
});
ceoNotifications.save({
  agent:
    task.agentId,

  message:
    `Task completed: ${task.task}`,

  createdAt:
    new Date().toISOString(),
});
companyKnowledge.save({
  agent:
    task.agentId,

  task:
    task.task,

  createdAt:
    new Date().toISOString(),
});
await saveKnowledge(
  task.task,
  task.agentId
);
departmentKnowledge.save({
  department:
    task.agentId,

  task:
    task.task,

  createdAt:
    new Date().toISOString(),
});
projectMemory.save({
  task:
    task.task,

  agent:
    task.agentId,

  createdAt:
    new Date().toISOString(),
});
clientMemory.save({
  client:
    "Internal Client",

  task:
    task.task,

  createdAt:
    new Date().toISOString(),
});

performanceTracker.track(
  task.agentId
);

    }
  
  


  return pendingTasks.length;
}