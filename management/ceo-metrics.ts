import { performanceTracker }
from "../agents/performance-tracker";

export function getCEOMetrics() {

  const metrics =
    performanceTracker.getAll();

  return {
    totalExecutions:
      Object.values(
        metrics
      ).reduce(
        (
          sum: any,
          count: any
        ) => sum + count,
        0
      ),

    activeAgents:
      Object.keys(
        metrics
      ).length,
  };
}