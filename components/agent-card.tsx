export function AgentCard({
  agent,
}: any) {
  return (
    <div
      style={{
        border:
          "1px solid #333",
        borderRadius:
          "10px",
        padding: "15px",
        marginBottom:
          "10px",
      }}
    >
      <h3>
        {agent.name}
      </h3>

      <p>
        {agent.role}
      </p>

      <p>
        Status:
        {agent.status}
      </p>
    </div>
  );
}