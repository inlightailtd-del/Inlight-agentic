import { companyKnowledge }
from "./company-knowledge";

export function searchKnowledge(
  query: string
) {

  const knowledge =
    companyKnowledge.getAll();

  return knowledge.filter(
    (item: any) =>
      item.task
        ?.toLowerCase()
        .includes(
          query.toLowerCase()
        )
  );
}