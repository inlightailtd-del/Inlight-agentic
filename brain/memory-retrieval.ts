import { searchKnowledge }
from "./knowledge-search";

export function retrieveMemory(
  task: string
) {

  return searchKnowledge(
    task
  );
}