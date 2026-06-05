export function CEONotificationBoard({
  notifications,
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
        👑 CEO Notifications
      </h2>

      {notifications.map(
        (
          item: any,
          index: number
        ) => (
          <div key={index}>
            <strong>
              {item.agent}
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