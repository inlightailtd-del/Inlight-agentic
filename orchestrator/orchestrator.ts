import { getRequiredAgents } from "../agents/delegation-engine";
import { executeAgents } from "../agents/multi-agent-executor";
import { seoAgent } from "../agents/seo-agent";
import { adsAgent } from "../agents/ads-agent";
import { isBusinessWorkflow } from "../workflows/workflow-detector";
import { executeWorkflow } from "../workflows/workflow-executor";
import { executeAdsBrain } from "../agents/ads-brain";
import { videoAgent } from "../agents/video-agent";
import { executeVideoBrain } from "../agents/video-brain";
import { executeSEOBrain } from "../agents/seo-brain";
import { executeSalesBrain } from "../agents/sales-brain";
import { researchAgent } from "../agents/research-agent";
import { executeResearchBrain } from "../agents/research-brain";
import { executeCEOBrain } from "../agents/ceo-brain";
import { ceoAgent } from "../agents/ceo-agent";
import { agents } from "../agents";
import { salesAgent } from "../agents/sales-agent";
import { messageCenter }
from "../agents/message-center";
import { routeTask }
from "../departments/department-routing";

import { getDepartment }
from "../departments/department-manager";
import {
  contentAgent,
  executeContentTask,
} from "../agents/content-agent";

export const orchestrator = {
  async execute(task: string) {
    const prompt = task.toLowerCase();
    const departmentId =
  routeTask(task);

const department =
  getDepartment(
    departmentId
  );
  if (department) {
  messageCenter.send(
    "ceo-agent",
    department.manager,
    `New task assigned: ${task}`
  );
}
    if (
  isBusinessWorkflow(task)
) {
  return {
    agent: ceoAgent,

    workflow: true,

    result:
      await executeWorkflow(
        task
      ),
  };
}

  // SEO
  // Research
  // Content
  // Sales
  // CEO


    if (
      prompt.includes("content") ||
      prompt.includes("post") ||
      prompt.includes("blog") ||
      prompt.includes("caption")
    ) {
      return {
  agent: contentAgent,

  department,

  result:
    await executeContentTask(
      task
    ),
};
    }
    if (
  prompt.includes("ad") ||
  prompt.includes("ads") ||
  prompt.includes("campaign") ||
  prompt.includes("facebook ad") ||
  prompt.includes("google ad")
) {
  return {
    agent: adsAgent,
    result:
      await executeAdsBrain(
        task
      ),
  };
}
    if (
  prompt.includes("video") ||
  prompt.includes("reel") ||
  prompt.includes("short") ||
  prompt.includes("youtube") ||
  prompt.includes("script")
) {
  return {
    agent: videoAgent,
    result:
      await executeVideoBrain(
        task
      ),
  };
}

    if (
  prompt.includes("seo") ||
  prompt.includes("keyword") ||
  prompt.includes("ranking") ||
  prompt.includes("google")
) {
  return {
  agent: seoAgent,

  department,

  result:
    await executeSEOBrain(
      task
    ),
};
}
    if (
  prompt.includes("research") ||
  prompt.includes("market") ||
  prompt.includes("competitor") ||
  prompt.includes("trend")
) {
  return {
  agent: researchAgent,

  department,

  result:
    await executeResearchBrain(
      task
    ),
};
}
    if (
      prompt.includes("lead") ||
      prompt.includes("sales") ||
      prompt.includes("client")
    ) {
      return {
  agent: salesAgent,

  department,

  result:
    await executeSalesBrain(
      task
    ),
};
    }
const requiredAgents =
  getRequiredAgents(task);

if (
  requiredAgents.length > 1
) {
  const results =
    await executeAgents(
      task,
      requiredAgents
    );

  return {
    agent: ceoAgent,
    delegatedTo:
      requiredAgents,
    results,
  };
}
    const aiResponse =
  await executeCEOBrain(`
Task: ${task}

Available Agents:

- CEO Agent
- Content Agent
- Research Agent
- Sales Agent

Decide which agent should handle this task and explain why.
`);

return {
  agent: ceoAgent,

  department,

  result:
    await executeCEOBrain(
      task
    ),
};
  }
};