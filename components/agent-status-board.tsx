export function AgentStatusBoard({
  agents,
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
        🤖 Agent Status Board
      </h2>

      {agents.map(
        (agent: any) => (
          <div
            key={agent.id}
            style={{
              marginBottom:
                "10px",
            }}
          >
            <strong>
              {agent.name}
            </strong>

            <p>
              Status:
              {agent.status}
            </p>
          </div>
        )
      )}
    </div>
  );
}