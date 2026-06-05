export function ResearchHistoryBoard({
  history,
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
        🔬 Research History
      </h2>

      {history
        .slice(-10)
        .reverse()
        .map(
          (
            item: any,
            index: number
          ) => (
            <div key={index}>
              <p>
                {item.task}
              </p>
            </div>
          )
        )}
    </div>
  );
}