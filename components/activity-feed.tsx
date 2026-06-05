export function ActivityFeed({
  logs,
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
        🔥 Live Activity
      </h2>

      {logs
        .slice(-10)
        .reverse()
        .map(
          (
            log: any,
            index: number
          ) => (
            <p key={index}>
              {log.agent}
              {" → "}
              {log.task}
            </p>
          )
        )}
    </div>
  );
}