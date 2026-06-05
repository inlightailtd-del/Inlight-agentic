export function CompanyHealthBoard({
  health,
}: any) {
  return (
    <div
      style={{
        border:
          "1px solid #1e293b",
        borderRadius:
          "10px",
        padding: "15px",
      }}
    >
      <h2>
        ❤️ Company Health
      </h2>

      <p>
        Status:
        {health.status}
      </p>

      <p>
        Departments:
        {health.departments}
      </p>

      <p>
        Agents:
        {health.agents}
      </p>

      <p>
        Memory:
        {health.memory}
      </p>

      <p>
        Execution:
        {health.execution}
      </p>
    </div>
  );
}