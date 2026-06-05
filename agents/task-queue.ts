const TASK_QUEUE_KEY =
  "task-queue";

export const taskQueue = {
  add(task: any) {
    const queue =
      JSON.parse(
        localStorage.getItem(
          TASK_QUEUE_KEY
        ) || "[]"
      );

    queue.push(task);

    localStorage.setItem(
      TASK_QUEUE_KEY,
      JSON.stringify(queue)
    );
  },

  getAll() {
    return JSON.parse(
      localStorage.getItem(
        TASK_QUEUE_KEY
      ) || "[]"
    );
  },
};