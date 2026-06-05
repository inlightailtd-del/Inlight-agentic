import { Agent } from "../types/agent";

export function createAgent(
  id: string,
  name: string,
  role: string,
  description: string
): Agent {
  return {
    id,

    name,

    role,

    description,

    department: "General",

    status: "Active",

    goals: [],

    tools: [],
  };
}