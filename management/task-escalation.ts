const ESCALATION_KEY =
  "task-escalations";

export const taskEscalation = {

  save(task: any) {

    const escalations =
      JSON.parse(
        localStorage.getItem(
          ESCALATION_KEY
        ) || "[]"
      );

    escalations.push(task);

    localStorage.setItem(
      ESCALATION_KEY,
      JSON.stringify(
        escalations
      )
    );
  },

  getAll() {
    return JSON.parse(
      localStorage.getItem(
        ESCALATION_KEY
      ) || "[]"
    );
  },
};