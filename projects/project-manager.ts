const PROJECTS_KEY =
  "inlight-projects";

export const projectManager = {
  save(project: any) {
    const projects =
      JSON.parse(
        localStorage.getItem(
          PROJECTS_KEY
        ) || "[]"
      );

    projects.push(project);

    localStorage.setItem(
      PROJECTS_KEY,
      JSON.stringify(projects)
    );
  },

  getAll() {
    return JSON.parse(
      localStorage.getItem(
        PROJECTS_KEY
      ) || "[]"
    );
  },
};