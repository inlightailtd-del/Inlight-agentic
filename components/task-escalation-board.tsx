export function TaskEscalationBoard({
  escalations,
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
        🚨 Task Escalations
      </h2>

      {escalations.map(
        (
          item: any,
          index: number
        ) => (
          <div key={index}>
            <p>
              {item.message}
            </p>
          </div>
        )
      )}
    </div>
  );
}