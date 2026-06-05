import { createAgent } from "./agent-factory";
import { ceoAgent } from "./ceo-agent";
import { salesAgent } from "./sales-agent";
import { contentAgent } from "./content-agent";
import { seoAgent } from "./seo-agent";
import { videoAgent } from "./video-agent";
import { adsAgent } from "./ads-agent";

export const agents = [
  ceoAgent,
  salesAgent,
  contentAgent,
  seoAgent,
  videoAgent,
  adsAgent,

  createAgent(
    "seo-agent",
    "SEO Agent",
    "SEO Optimization",
    "Responsible for SEO tasks"
  ),
];
export function getAgentById(
  id: string
) {
  return agents.find(
    (agent) => agent.id === id
  );
}