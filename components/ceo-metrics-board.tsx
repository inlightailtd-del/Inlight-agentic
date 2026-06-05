export function CEOMetricsBoard({
  metrics,
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
        👑 CEO Metrics
      </h2>

      <p>
        Total Executions:
        {metrics.totalExecutions}
      </p>

      <p>
        Active Agents:
        {metrics.activeAgents}
      </p>
    </div>
  );
}