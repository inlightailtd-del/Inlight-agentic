const EXECUTION_LOG_KEY =
  "execution-log";

export const executionLog = {
  save(log: any) {
    const logs =
      JSON.parse(
        localStorage.getItem(
          EXECUTION_LOG_KEY
        ) || "[]"
      );

    logs.push(log);

    localStorage.setItem(
      EXECUTION_LOG_KEY,
      JSON.stringify(logs)
    );
  },

  getAll() {
    return JSON.parse(
      localStorage.getItem(
        EXECUTION_LOG_KEY
      ) || "[]"
    );
  },
};