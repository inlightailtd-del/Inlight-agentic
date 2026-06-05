export function DepartmentIntelligenceBoard({
  knowledge,
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
        🏢 Department Intelligence
      </h2>

      <p>
        Records:
        {knowledge.length}
      </p>
    </div>
  );
}