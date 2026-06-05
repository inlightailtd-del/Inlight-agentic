const TASK_HISTORY_KEY =
  "task-history";

export const taskHistory = {
  save(task: string) {
    const history =
      JSON.parse(
        localStorage.getItem(
          TASK_HISTORY_KEY
        ) || "[]"
      );

    history.push(task);

    localStorage.setItem(
      TASK_HISTORY_KEY,
      JSON.stringify(history)
    );
  },

  get() {
    return JSON.parse(
      localStorage.getItem(
        TASK_HISTORY_KEY
      ) || "[]"
    );
  },
};