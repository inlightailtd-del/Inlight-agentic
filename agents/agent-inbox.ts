const AGENT_INBOX_KEY =
  "agent-inbox";

export const agentInbox = {
  send(
    to: string,
    message: any
  ) {
    const inbox =
      JSON.parse(
        localStorage.getItem(
          AGENT_INBOX_KEY
        ) || "{}"
      );

    if (!inbox[to]) {
      inbox[to] = [];
    }

    inbox[to].push(message);

    localStorage.setItem(
      AGENT_INBOX_KEY,
      JSON.stringify(inbox)
    );
  },

  get(
    agentId: string
  ) {
    const inbox =
      JSON.parse(
        localStorage.getItem(
          AGENT_INBOX_KEY
        ) || "{}"
      );

    return (
      inbox[agentId] || []
    );
  },
};