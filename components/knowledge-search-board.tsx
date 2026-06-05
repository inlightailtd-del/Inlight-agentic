export function KnowledgeSearchBoard({
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
        🔍 Knowledge Search
      </h2>

      {knowledge
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