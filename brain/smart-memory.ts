import { semanticSearch }
from "./semantic-search";

export function getSmartMemory(
  task: string
) {

  return semanticSearch(
    task
  )
  .slice(-5);
}