export function DepartmentReportBoard({
  reports,
}: any) {
  return (
    <div
      style={{
        border: "1px solid #1e293b",
        borderRadius: "10px",
        padding: "15px",
      }}
    >
      <h2>
        📑 Department Reports
      </h2>

      {reports.map(
        (
          report: any,
          index: number
        ) => (
          <div
            key={index}
          >
            <strong>
              {report.department}
            </strong>

            <p>
              {report.message}
            </p>
          </div>
        )
      )}
    </div>
  );
}