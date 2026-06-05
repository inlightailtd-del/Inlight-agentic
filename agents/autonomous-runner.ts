import { runExecutionEngine }
from "./execution-engine";

export function startAutonomousRunner() {

  const interval =
    setInterval(() => {

      runExecutionEngine();

    }, 10000);

  return interval;
}