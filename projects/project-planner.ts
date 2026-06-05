import { createTask } from "./create-task";
import { assignTask } from "../agents/communication-engine";

export function generateProjectTasks(
  projectName: string
) {

  const tasks = [

    createTask(
      projectName,
      "Research Market",
      "research-agent"
    ),

    createTask(
      projectName,
      "Create Content Strategy",
      "content-agent"
    ),

    createTask(
      projectName,
      "Create Sales Strategy",
      "sales-agent"
    ),
  ];

  tasks.forEach(
    (task) => {
      assignTask(
        task.agent,
        task.taskName
      );
    }
  );

  return tasks;
}