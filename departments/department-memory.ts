import { searchDepartmentKnowledge }
from "./department-search";

export function retrieveDepartmentMemory(
  department: string
) {
  return searchDepartmentKnowledge(
    department
  );
}