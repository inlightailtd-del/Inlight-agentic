export function CompanyBrainBoard({
  knowledge,
  projects,
  clients,
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
        🧠 Company Brain
      </h2>

      <p>
        Knowledge Records:
        {knowledge.length}
      </p>

      <p>
        Projects Remembered:
        {projects.length}
      </p>

      <p>
        Clients Remembered:
        {clients.length}
      </p>
    </div>
  );
}