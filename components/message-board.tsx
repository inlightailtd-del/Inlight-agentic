export function MessageBoard({
  messages,
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
        💬 Agent Messages
      </h2>

      {messages.map(
        (
          item: any,
          index: number
        ) => (
          <div key={index}>
            <strong>
              {item.from}
            </strong>

            {" → "}

            <strong>
              {item.to}
            </strong>

            <p>
              {item.message}
            </p>
          </div>
        )
      )}
    </div>
  );
}