import { departmentKnowledge }
from "./department-knowledge";

export function searchDepartmentKnowledge(
  department: string
) {

  return (
    departmentKnowledge
      .getAll()
      .filter(
        (item: any) =>
          item.department ===
          department
      )
  );
}