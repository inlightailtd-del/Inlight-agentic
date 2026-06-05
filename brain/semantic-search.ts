import { companyKnowledge }
from "./company-knowledge";

export function semanticSearch(
  query: string
) {

  const knowledge =
    companyKnowledge.getAll();

  const queryWords =
    query
      .toLowerCase()
      .split(" ");

  return knowledge.filter(
    (item: any) => {

      const task =
        (
          item.task || ""
        ).toLowerCase();

      return queryWords.some(
        word =>
          task.includes(word)
      );
    }
  );
}