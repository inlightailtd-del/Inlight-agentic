import { Agent } from "../types/agent";
import { generateContent } from "../tools/generate-content";

export const contentAgent: Agent = {
  id: "content-agent",

  name: "Content Agent",

  role: "Content Creation",

  description:
    "Responsible for creating posts, blogs, captions, scripts and content strategies.",

  department: "Content",

  status: "Active",

  goals: [
    "Create Content",
    "Generate Blogs",
    "Generate Social Posts",
  ],

  tools: [
    "generate-content",
  ],
};

export async function executeContentTask(
  topic: string
) {
  return await generateContent(
    topic
  );
}