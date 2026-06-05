const PERFORMANCE_KEY =
  "agent-performance";

export const performanceTracker = {
  track(
    agentId: string
  ) {
    const data =
      JSON.parse(
        localStorage.getItem(
          PERFORMANCE_KEY
        ) || "{}"
      );

    data[agentId] =
      (data[agentId] || 0) + 1;

    localStorage.setItem(
      PERFORMANCE_KEY,
      JSON.stringify(data)
    );
  },

  getAll() {
    return JSON.parse(
      localStorage.getItem(
        PERFORMANCE_KEY
      ) || "{}"
    );
  },
};