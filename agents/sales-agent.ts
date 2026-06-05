import { Agent } from "../types/agent";

export const salesAgent: Agent = {
  id: "sales-agent",

  name: "Sales Agent",

  role: "Lead Generation",

  description:
    "Responsible for finding leads, outreach, follow-ups and sales opportunities.",

  department: "Sales",

  status: "Active",

  goals: [
    "Generate Leads",
    "Client Acquisition",
    "Follow Ups",
  ],

  tools: [
    "lead-generator",
    "crm-manager",
  ],
};