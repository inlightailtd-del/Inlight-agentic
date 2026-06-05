export function AnalyticsCard({
  title,
  value,
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
      <h3>
        {title}
      </h3>

      <h2>
        {value}
      </h2>
    </div>
  );
}