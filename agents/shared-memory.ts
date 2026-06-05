const SHARED_MEMORY_KEY =
  "shared-memory";

export const sharedMemory = {
  save(data: any) {
    const memory =
      JSON.parse(
        localStorage.getItem(
          SHARED_MEMORY_KEY
        ) || "[]"
      );

    memory.push(data);

    localStorage.setItem(
      SHARED_MEMORY_KEY,
      JSON.stringify(memory)
    );
  },

  getAll() {
    return JSON.parse(
      localStorage.getItem(
        SHARED_MEMORY_KEY
      ) || "[]"
    );
  },
};