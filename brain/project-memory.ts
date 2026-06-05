const PROJECT_MEMORY_KEY =
  "project-memory";

export const projectMemory = {

  save(project: any) {

    const memory =
      JSON.parse(
        localStorage.getItem(
          PROJECT_MEMORY_KEY
        ) || "[]"
      );

    memory.push(project);

    localStorage.setItem(
      PROJECT_MEMORY_KEY,
      JSON.stringify(memory)
    );
  },

  getAll() {
    return JSON.parse(
      localStorage.getItem(
        PROJECT_MEMORY_KEY
      ) || "[]"
    );
  },
};