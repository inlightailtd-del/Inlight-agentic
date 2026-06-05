import { supabase }
from "./supabase";

export async function saveKnowledge(
  task: string,
  agent: string
) {

  const { error } =
    await supabase
      .from(
        "company_knowledge"
      )
      .insert([
        {
          task,
          agent,
          created_at:
            new Date()
              .toISOString(),
        },
      ]);

  if (error) {

  console.log(
    "SUPABASE ERROR:",
    JSON.stringify(
      error,
      null,
      2
    )
  );

}
}