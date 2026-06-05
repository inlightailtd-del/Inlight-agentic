import { executeResearchBrain } from "../agents/research-brain";
import { executeContentTask } from "../agents/content-agent";
import { executeSEOBrain } from "../agents/seo-brain";
import { executeVideoBrain } from "../agents/video-brain";
import { executeAdsBrain } from "../agents/ads-brain";
import { executeSalesBrain } from "../agents/sales-brain";

export async function executeWorkflow(
  task: string
) {
  return {
    research:
      await executeResearchBrain(
        task
      ),

    content:
      await executeContentTask(
        task
      ),

    seo:
      await executeSEOBrain(
        task
      ),

    video:
      await executeVideoBrain(
        task
      ),

    ads:
      await executeAdsBrain(
        task
      ),

    sales:
      await executeSalesBrain(
        task
      ),
  };
}