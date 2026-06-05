import { companyKnowledge }
from "./company-knowledge";

export function getLearningStats() {

  const knowledge =
    companyKnowledge.getAll();

  return {
    totalKnowledge:
      knowledge.length,
  };
}