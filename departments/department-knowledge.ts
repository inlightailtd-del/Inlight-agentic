const DEPARTMENT_KNOWLEDGE_KEY =
  "department-knowledge";

export const departmentKnowledge = {

  save(item: any) {

    const knowledge =
      JSON.parse(
        localStorage.getItem(
          DEPARTMENT_KNOWLEDGE_KEY
        ) || "[]"
      );

    knowledge.push(item);

    localStorage.setItem(
      DEPARTMENT_KNOWLEDGE_KEY,
      JSON.stringify(
        knowledge
      )
    );
  },

  getAll() {
    return JSON.parse(
      localStorage.getItem(
        DEPARTMENT_KNOWLEDGE_KEY
      ) || "[]"
    );
  },
};