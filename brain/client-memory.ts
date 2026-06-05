const CLIENT_MEMORY_KEY =
  "client-memory";

export const clientMemory = {

  save(client: any) {

    const clients =
      JSON.parse(
        localStorage.getItem(
          CLIENT_MEMORY_KEY
        ) || "[]"
      );

    clients.push(client);

    localStorage.setItem(
      CLIENT_MEMORY_KEY,
      JSON.stringify(clients)
    );
  },

  getAll() {
    return JSON.parse(
      localStorage.getItem(
        CLIENT_MEMORY_KEY
      ) || "[]"
    );
  },
};