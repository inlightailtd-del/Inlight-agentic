export function DepartmentPerformanceBoard({
  performance,
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
        📊 Department Performance
      </h2>

      <p>
        Research:
        {performance.research}
      </p>

      <p>
        Marketing:
        {performance.marketing}
      </p>

      <p>
        Sales:
        {performance.sales}
      </p>
    </div>
  );
}