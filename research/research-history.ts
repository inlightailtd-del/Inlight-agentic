const RESEARCH_HISTORY =
  "research-history";

export const researchHistory = {

  save(item: any) {

    const history =
      JSON.parse(
        localStorage.getItem(
          RESEARCH_HISTORY
        ) || "[]"
      );

    history.push(item);

    localStorage.setItem(
      RESEARCH_HISTORY,
      JSON.stringify(
        history
      )
    );
  },

  getAll() {
    return JSON.parse(
      localStorage.getItem(
        RESEARCH_HISTORY
      ) || "[]"
    );
  },
};