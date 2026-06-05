import { Agent } from "../types/agent";

export const videoAgent: Agent = {
  id: "video-agent",

  name: "Video Agent",

  role: "Video Creation",

  description:
    "Responsible for video ideas, scripts, reels and content production.",

  department: "Media",

  status: "Active",

  goals: [
    "Video Scripts",
    "Reel Ideas",
    "Content Production",
  ],

  tools: [
    "video-engine",
  ],
};