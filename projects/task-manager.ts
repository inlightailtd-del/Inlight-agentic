const TASKS_KEY =
  "project-tasks";

export const taskManager = {
  save(task: any) {
    const tasks =
      JSON.parse(
        localStorage.getItem(
          TASKS_KEY
        ) || "[]"
      );

    tasks.push(task);

    localStorage.setItem(
      TASKS_KEY,
      JSON.stringify(tasks)
    );
  },

  getAll() {
    return JSON.parse(
      localStorage.getItem(
        TASKS_KEY
      ) || "[]"
    );
  },
};