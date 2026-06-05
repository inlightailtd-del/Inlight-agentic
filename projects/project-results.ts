const RESULTS_KEY =
  "project-results";

export const projectResults = {
  save(result: any) {
    const results =
      JSON.parse(
        localStorage.getItem(
          RESULTS_KEY
        ) || "[]"
      );

    results.push(result);

    localStorage.setItem(
      RESULTS_KEY,
      JSON.stringify(results)
    );
  },

  getAll() {
    return JSON.parse(
      localStorage.getItem(
        RESULTS_KEY
      ) || "[]"
    );
  },
};