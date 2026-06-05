const AGENT_STATUS_KEY =
  "agent-status";

export const agentStatus = {
  setStatus(
    agentId: string,
    status: string
  ) {
    const statuses =
      JSON.parse(
        localStorage.getItem(
          AGENT_STATUS_KEY
        ) || "{}"
      );

    statuses[agentId] = status;

    localStorage.setItem(
      AGENT_STATUS_KEY,
      JSON.stringify(statuses)
    );
  },

  getAll() {
    return JSON.parse(
      localStorage.getItem(
        AGENT_STATUS_KEY
      ) || "{}"
    );
  },
};