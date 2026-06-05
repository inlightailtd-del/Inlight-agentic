const COMPANY_KNOWLEDGE_KEY =
  "company-knowledge";

export const companyKnowledge = {

  save(item: any) {

    const knowledge =
      JSON.parse(
        localStorage.getItem(
          COMPANY_KNOWLEDGE_KEY
        ) || "[]"
      );

    knowledge.push(item);

    localStorage.setItem(
      COMPANY_KNOWLEDGE_KEY,
      JSON.stringify(
        knowledge
      )
    );
  },

  getAll() {
    return JSON.parse(
      localStorage.getItem(
        COMPANY_KNOWLEDGE_KEY
      ) || "[]"
    );
  },
};