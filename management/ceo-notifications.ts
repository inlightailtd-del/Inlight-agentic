const CEO_NOTIFICATION_KEY =
  "ceo-notifications";

export const ceoNotifications = {
  save(
    notification: any
  ) {

    const notifications =
      JSON.parse(
        localStorage.getItem(
          CEO_NOTIFICATION_KEY
        ) || "[]"
      );

    notifications.push(
      notification
    );

    localStorage.setItem(
      CEO_NOTIFICATION_KEY,
      JSON.stringify(
        notifications
      )
    );
  },

  getAll() {
    return JSON.parse(
      localStorage.getItem(
        CEO_NOTIFICATION_KEY
      ) || "[]"
    );
  },
};