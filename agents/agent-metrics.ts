const AGENT_METRICS_KEY =
  "agent-metrics";

export const agentMetrics = {
  increment(agentId: string) {
    const metrics =
      JSON.parse(
        localStorage.getItem(
          AGENT_METRICS_KEY
        ) || "{}"
      );

    metrics[agentId] =
      (metrics[agentId] || 0) + 1;

    localStorage.setItem(
      AGENT_METRICS_KEY,
      JSON.stringify(metrics)
    );
  },

  get() {
    return JSON.parse(
      localStorage.getItem(
        AGENT_METRICS_KEY
      ) || "{}"
    );
  },
};