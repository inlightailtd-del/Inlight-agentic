export function AgencyAnalyticsCenter({
  agents,
  projects,
  tasks,
  queue,
  memory,
  logs,
}: any) {
  return (
    <div
      style={{
        border: "1px solid #1e293b",
        borderRadius: "10px",
        padding: "15px",
        marginTop: "20px",
      }}
    >
      <h2>
        📊 Agency Analytics Center
      </h2>

      <p>
        Active Agents:
        {agents.length}
      </p>

      <p>
        Projects:
        {projects.length}
      </p>

      <p>
        Tasks:
        {tasks.length}
      </p>

      <p>
        Queue Items:
        {queue.length}
      </p>

      <p>
        Memory Records:
        {memory.length}
      </p>

      <p>
        Executions:
        {logs.length}
      </p>
    </div>
  );
}