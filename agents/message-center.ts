const MESSAGE_KEY =
  "agent-messages";

export const messageCenter = {

  send(
    from: string,
    to: string,
    message: string
  ) {

    const messages =
      JSON.parse(
        localStorage.getItem(
          MESSAGE_KEY
        ) || "[]"
      );

    messages.push({
      from,
      to,
      message,
      createdAt:
        new Date().toISOString(),
    });

    localStorage.setItem(
      MESSAGE_KEY,
      JSON.stringify(messages)
    );
  },

  getAll() {
    return JSON.parse(
      localStorage.getItem(
        MESSAGE_KEY
      ) || "[]"
    );
  },
};