export function DepartmentBoard({
  departments,
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
        🏢 Departments
      </h2>

      {departments.map(
        (department: any) => (
          <div
            key={department.id}
            style={{
              marginBottom:
                "10px",
            }}
          >
            <strong>
              {department.name}
            </strong>

            <p>
              Manager:
              {department.manager}
            </p>
          </div>
        )
      )}
    </div>
  );
}