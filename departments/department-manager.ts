import { departments }
from "./departments";

export function getDepartment(
  departmentId: string
) {
  return departments.find(
    (
      department
    ) =>
      department.id ===
      departmentId
  );
}