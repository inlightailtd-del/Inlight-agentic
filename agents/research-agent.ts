import { Agent } from "../types/agent";

export const researchAgent: Agent = {
  id: "research-agent",

  name: "Research Agent",

  role: "Research",

  description:
    "Responsible for research, trends, competitors and market analysis.",

  department: "Research",

  status: "Active",

  goals: [
    "Market Research",
    "Trend Analysis",
    "Competitor Research",
  ],

  tools: [
    "research-engine",
  ],
};