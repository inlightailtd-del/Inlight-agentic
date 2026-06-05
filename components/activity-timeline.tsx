export function ActivityTimeline({
  logs,
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
        ⏱ Activity Timeline
      </h2>

      {logs
        .slice(-15)
        .reverse()
        .map(
          (
            log: any,
            index: number
          ) => (
            <div
              key={index}
              style={{
                marginBottom:
                  "10px",
              }}
            >
              <strong>
                {log.agent}
              </strong>

              <p>
                {log.task}
              </p>

              <small>
                {log.executedAt}
              </small>
            </div>
          )
        )}
    </div>
  );
}