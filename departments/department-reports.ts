const REPORT_KEY =
  "department-reports";

export const departmentReports = {
  save(report: any) {

    const reports =
      JSON.parse(
        localStorage.getItem(
          REPORT_KEY
        ) || "[]"
      );

    reports.push(report);

    localStorage.setItem(
      REPORT_KEY,
      JSON.stringify(reports)
    );
  },

  getAll() {
    return JSON.parse(
      localStorage.getItem(
        REPORT_KEY
      ) || "[]"
    );
  },
};