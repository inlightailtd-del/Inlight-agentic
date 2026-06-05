import { Agent } from "../types/agent";

export const adsAgent: Agent = {
  id: "ads-agent",

  name: "Ads Agent",

  role: "Advertising",

  description:
    "Responsible for Meta Ads, Google Ads and marketing campaigns.",

  department: "Marketing",

  status: "Active",

  goals: [
    "Generate Leads",
    "Create Campaigns",
    "Increase Conversions",
  ],

  tools: [
    "ads-engine",
  ],
};