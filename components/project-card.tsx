export function ProjectCard({
  project,
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
        {project.name}
      </h3>

      <p>
        Status:
        {project.status}
      </p>
    </div>
  );
}