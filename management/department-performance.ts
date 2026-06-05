import { departmentKnowledge }
from "../departments/department-knowledge";

export function getDepartmentPerformance() {

  const records =
    departmentKnowledge.getAll();

  return {
    research:
      records.filter(
        (item: any) =>
          item.department ===
          "research-agent"
      ).length,

    marketing:
      records.filter(
        (item: any) =>
          item.department ===
          "seo-agent" ||
          item.department ===
          "content-agent" ||
          item.department ===
          "video-agent" ||
          item.department ===
          "ads-agent"
      ).length,

    sales:
      records.filter(
        (item: any) =>
          item.department ===
          "sales-agent"
      ).length,
  };
}