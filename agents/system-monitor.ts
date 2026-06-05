import { getSystemHealth }
from "./system-health";

export function monitorSystem() {

  return {
    timestamp:
      new Date().toISOString(),

    ...getSystemHealth(),
  };
}