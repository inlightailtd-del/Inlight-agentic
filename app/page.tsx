"use client";

import { agentStatus } from "../agents/agent-status";
import { DepartmentManagerBoard }
from "../components/department-manager-board";
import { ActivityTimeline }
from "../components/activity-timeline";
import { getCompanyHealth }
from "../management/company-health";

import { CompanyHealthBoard }
from "../components/company-health-board";
import { messageCenter }
from "../agents/message-center";
import { KnowledgeSearchBoard }
from "../components/knowledge-search-board";
import { MessageBoard }
from "../components/message-board";
import { taskEscalation }
from "../management/task-escalation";
import { companyKnowledge }
from "../brain/company-knowledge";

import { projectMemory }
from "../brain/project-memory";
import { departmentKnowledge }
from "../departments/department-knowledge";

import { DepartmentIntelligenceBoard }
from "../components/department-intelligence-board";

import { clientMemory }
from "../brain/client-memory";

import { CompanyBrainBoard }
from "../components/company-brain-board";

import { TaskEscalationBoard }
from "../components/task-escalation-board";
import { departmentReports }
from "../departments/department-reports";
import { ceoNotifications }
from "../management/ceo-notifications";

import { CEONotificationBoard }
from "../components/ceo-notification-board";

import { DepartmentReportBoard }
from "../components/department-report-board";
import { agentInbox }
from "../agents/agent-inbox";
import { performanceTracker }
from "../agents/performance-tracker";
import { AgencyAnalyticsCenter }
from "../components/agency-analytics-center"; 
import { departments }
from "../departments/departments";

import { DepartmentBoard }
from "../components/department-board";
import { ActivityFeed }
from "../components/activity-feed";
import { CEOCommandCenter }
from "../components/ceo-command-center";

import { CommandConsole }
from "../components/command-console";
import { monitorSystem }
from "../agents/system-monitor";
import { Sidebar }
from "../components/sidebar";
import { AgentCard }
from "../components/agent-card";
import { StatsCard }
from "../components/stats-card";
import { ProjectCard } from "../components/project-card";
import { AnalyticsCard }
from "../components/analytics-card";

import { taskQueue }
from "../agents/task-queue";
import { runExecutionEngine }
from "../agents/execution-engine";
import { DashboardOverview }
from "../components/dashboard-overview";

import { executionLog }
from "../agents/execution-log";
import { startAutonomousRunner }
from "../agents/autonomous-runner";
import { AgentStatusBoard }
from "../components/agent-status-board";
import { researchHistory }
from "../research/research-history";

import { ResearchHistoryBoard }
from "../components/research-history-board";

import { sharedMemory }
from "../agents/shared-memory";
import { taskHistory } from "../memory/task-history";
import { taskManager } from "../projects/task-manager";
import { completeTask } from "../projects/task-executor";
import { projectResults } from "../projects/project-results";
import { generateProjectTasks } from "../projects/project-planner";
import { projectManager } from "../projects/project-manager";
import { createProject } from "../projects/create-project";
import { agentMetrics } from "../agents/agent-metrics";   
import { useEffect, useState } from "react";
import { agents } from "../agents";
import { createAgent } from "../agents/agent-factory";
import { orchestrator } from "../orchestrator/orchestrator";
import {
  memory,
  companyBrain,
} from "../memory/memory";
import { getCEOMetrics }
from "../management/ceo-metrics";

import { CEOMetricsBoard }
from "../components/ceo-metrics-board";
import { getDepartmentPerformance }
from "../management/department-performance";

import { DepartmentPerformanceBoard }
from "../components/department-performance-board";









export default function Home() {
  const [output, setOutput] = useState("");
  const [task, setTask] = useState("");
  const [agentName, setAgentName] =
  useState("");
  const [
  departmentPerformance,
  setDepartmentPerformance
] = useState<any>({});
  const [health, setHealth] =
  useState<any>({});
  const [
  researchData,
  setResearchData
] = useState<any[]>([]);
  const [ceoMetrics,
setCEOMetrics] =
  useState<any>({});

const [agentRole, setAgentRole] =
  useState("");
  const [
  escalations,
  setEscalations
] = useState<any[]>([]);
const [
  departmentIntel,
  setDepartmentIntel
] = useState<any[]>([]);
  const [
  notifications,
  setNotifications
] = useState<any[]>([]);
const [knowledge, setKnowledge] =
  useState<any[]>([]);

const [projectMemoryData,
setProjectMemoryData] =
  useState<any[]>([]);

const [clientMemoryData,
setClientMemoryData] =
  useState<any[]>([]);
  const [systemHealth, setSystemHealth] =
  useState<any>({});
  const [performance, setPerformance] =
  useState({});
  const [messages, setMessages] =
  useState<any[]>([]);
  const [reports, setReports] =
  useState<any[]>([]);
  const [logs, setLogs] =
  useState<any[]>([]);
  const [results, setResults] =
  useState<any[]>([]);
  const [projects, setProjects] =
  useState<any[]>([]);
  const [runtimeAgents, setRuntimeAgents] =
  useState<any[]>([]);
  const [statuses, setStatuses] =
  useState({});
  const [inbox, setInbox] =
  useState({});

const [queue, setQueue] =
  useState<any[]>([]);

const [sharedData, setSharedData] =
  useState<any[]>([]);
  const [projectTasks, setProjectTasks] =
  useState<any[]>([]);
  const [metrics, setMetrics] =
  useState({});





  useEffect(() => {
  
  const savedAgents =
    localStorage.getItem(
      "runtime-agents"
      
    );
    setResearchData(
  researchHistory.getAll()
);
    setDepartmentPerformance(
  getDepartmentPerformance()
);
    setCEOMetrics(
  getCEOMetrics()
);
    setHealth(
  getCompanyHealth()
);
    setDepartmentIntel(
  departmentKnowledge.getAll()
);
    setKnowledge(
  companyKnowledge.getAll()
);
setResearchData(
  researchHistory.getAll()
);
setDepartmentIntel(
  departmentKnowledge.getAll()
);

setProjectMemoryData(
  projectMemory.getAll()
);

setClientMemoryData(
  clientMemory.getAll()
);
    setEscalations(
  taskEscalation.getAll()
);
    setReports(
  departmentReports.getAll()
);
setNotifications(
  ceoNotifications.getAll()
);
    setMessages(
  messageCenter.getAll()
);
    setSystemHealth(
  monitorSystem()
);
    setPerformance(
  performanceTracker.getAll()
);
    setResults(
  projectResults.getAll()
);
setLogs(
  executionLog.getAll()
);
setReports(
  departmentReports.getAll()
);
setNotifications(
  ceoNotifications.getAll()
);
setPerformance(
  performanceTracker.getAll()
);
setSystemHealth(
  monitorSystem()
);
    setProjects(
  projectManager.getAll()
);
setProjectTasks(
  taskManager.getAll()
);

  if (savedAgents) {
    setRuntimeAgents(
      JSON.parse(savedAgents)
    );
  } else {
    setRuntimeAgents(agents);
  }
  setMetrics(
  agentMetrics.get()
);
setStatuses(
  agentStatus.getAll()
);
setInbox({
  "research-agent":
    agentInbox.get(
      "research-agent"
    ),

  "content-agent":
    agentInbox.get(
      "content-agent"
    ),

  "sales-agent":
    agentInbox.get(
      "sales-agent"
    ),
});

setQueue(
  taskQueue.getAll()
);

setSharedData(
  sharedMemory.getAll()
);
const runner =
  startAutonomousRunner();

return () =>
  clearInterval(
    runner
  );

}, []);

const handleCreateAgent = () => {
  if (!agentName || !agentRole) {
    alert("Enter Agent Name and Role");
    return;
  }

  const newAgent = createAgent(
    agentName.toLowerCase().replaceAll(" ", "-"),
    agentName,
    agentRole,
    `${agentName} generated at runtime`
  );

  const updatedAgents = [
  ...runtimeAgents,
  newAgent,
];

setRuntimeAgents(
  updatedAgents
);

localStorage.setItem(
  "runtime-agents",
  JSON.stringify(
    updatedAgents
  )
);

  setAgentName("");
  setAgentRole("");
};

const handleRun = async () => {
  companyBrain.saveVision(
    "Build Inlight Agency into a fully autonomous AI company."
  );

  memory.save({
  lastTask: task,
});

taskHistory.save(task);
const project =
  createProject(task);

const projectTasks =
  generateProjectTasks(task);

projectTasks.forEach(
  (projectTask) => {
    taskManager.save(
      projectTask
    );
  }
);
setProjectTasks(
  taskManager.getAll()
);

agentStatus.setStatus(
  "system",
  "Working"
);

setStatuses(
  agentStatus.getAll()
);  
const response =
  await orchestrator.execute(
    task
  );
  setMessages(
  messageCenter.getAll()
);
  runExecutionEngine();

setLogs(
  executionLog.getAll()
);
  const completedTasks =
  taskManager
    .getAll()
    .map((taskItem: any) =>
      completeTask(taskItem)
    );

localStorage.setItem(
  "project-tasks",
  JSON.stringify(
    completedTasks
  )
);

setProjectTasks(
  completedTasks
);

projectResults.save({
  task,
  response,
  createdAt:
    new Date().toISOString(),
});

setResults(
  projectResults.getAll()
);
  if (response.agent?.id) {
  agentStatus.setStatus(
    response.agent.id,
    "Completed"
  );
}

setStatuses(
  agentStatus.getAll()
);
  if (response.agent?.id) {
  agentMetrics.increment(
    response.agent.id
  );
}

  setOutput(
    JSON.stringify(
      response,
      null,
      2
    )
  );
  setMetrics(
  agentMetrics.get()
);
};
  return (
  <div
    style={{
      display: "flex",
    }}
  >
    <Sidebar />

    <main
  style={{
    flex: 1,
    padding: "20px",
    background:
      "#0f172a",
    minHeight: "100vh",
    color: "white",
  }}
>
      <DashboardOverview />
      <div
  style={{
    display: "flex",
    gap: "15px",
    marginBottom: "20px",
    flexWrap: "wrap",
  }}
>
  <StatsCard
    title="Agents"
    value={
      runtimeAgents.length
    }
  />

  <StatsCard
    title="Projects"
    value={
      projects.length
    }
  />

  <StatsCard
    title="Tasks"
    value={
      projectTasks.length
    }
  />

  <StatsCard
    title="Results"
    value={
      results.length
    }
  />
</div>

      <input
  type="text"
  value={task}
  onChange={(e) =>
    setTask(e.target.value)
  }
  placeholder="Enter task..."
/>
      <button
        onClick={handleRun}
      >
        Run Content Agent
      </button>
      <hr />

<h2>Create Agent</h2>

<input
  type="text"
  placeholder="Agent Name"
  value={agentName}
  onChange={(e) =>
    setAgentName(e.target.value)
  }
/>

<br />
<br />

<input
  type="text"
  placeholder="Agent Role"
  value={agentRole}
  onChange={(e) =>
    setAgentRole(e.target.value)
  }
/>

<br />
<br />

<button
  onClick={handleCreateAgent}
>
  Create Agent
</button>

<hr />

      <pre>
  {output}
</pre>
<h2>Registered Agents</h2>

<div>
  {runtimeAgents.map(
    (agent: any) => (
      <AgentCard
        key={agent.id}
        agent={agent}
      />
    )
  )}
</div>
<h2>Agent Metrics</h2>

<div
  style={{
    border:
      "1px solid #333",
    padding: "10px",
    borderRadius: "10px",
    marginBottom: "20px",
  }}
>
  {Object.entries(
    metrics
  ).map(
    ([agent, count]) => (
      <p key={agent}>
        {agent}: {String(count)}
      </p>
    )
  )}
</div>
<h2>Agent Status</h2>

<div
  style={{
    border:
      "1px solid #333",
    padding: "10px",
    borderRadius: "10px",
  }}
>
  {Object.entries(
    statuses
  ).map(
    ([agent, status]) => (
      <p key={agent}>
        {agent}: {String(status)}
      </p>
    )
  )}
</div>
<h2>Projects</h2>

<div>
  {projects.map(
    (
      project: any
    ) => (
      <ProjectCard
        key={project.id}
        project={project}
      />
    )
  )}
</div>
<h2>Project Tasks</h2>

<div>
  {projectTasks.map(
    (task: any) => (
      <div
        key={`${task.id}-${task.taskName}-${task.agent}`}
        style={{
          border:
            "1px solid #333",
          padding: "10px",
          marginBottom: "10px",
          borderRadius: "10px",
        }}
      >
        <h3>
          {task.taskName}
        </h3>

        <p>
          Project:
          {task.projectName}
        </p>

        <p>
          Agent:
          {task.agent}
        </p>

        <p>
          Status:
          {task.status}
        </p>
      </div>
    )
  )}
</div>
<h2>Project Results</h2>

<div>
  {results.map(
    (result: any, index) => (
      <div
        key={index}
        style={{
          border:
            "1px solid #333",
          padding: "10px",
          marginBottom: "10px",
          borderRadius: "10px",
        }}
      >
        <h3>
          {result.task}
        </h3>

        <p>
          Created:
          {result.createdAt}
        </p>
      </div>
    )
  )}
</div>
<h2>Agent Inbox</h2>

<div
  style={{
    border:
      "1px solid #333",
    padding: "10px",
    borderRadius: "10px",
    marginBottom: "20px",
  }}
>
  <pre>
    {JSON.stringify(
      inbox,
      null,
      2
    )}
  </pre>
</div>
<h2>Task Queue</h2>

<div
  style={{
    border:
      "1px solid #333",
    padding: "10px",
    borderRadius: "10px",
    marginBottom: "20px",
  }}
>
  <pre>
    {JSON.stringify(
      queue,
      null,
      2
    )}
  </pre>
</div>
<h2>Shared Memory</h2>

<div
  style={{
    border:
      "1px solid #333",
    padding: "10px",
    borderRadius: "10px",
    marginBottom: "20px",
  }}
>
  <pre>
    {JSON.stringify(
      sharedData,
      null,
      2
    )}
  </pre>
</div>
<h2>Execution Logs</h2>

<div>
  {logs.map(
    (
      log: any,
      index
    ) => (
      <div
        key={index}
        style={{
          border:
            "1px solid #333",
          padding: "10px",
          marginBottom: "10px",
          borderRadius: "10px",
        }}
      >
        <p>
          Agent:
          {log.agent}
        </p>

        <p>
          Task:
          {log.task}
        </p>

        <p>
          Status:
          {log.status}
        </p>
      </div>
    )
  )}
</div>
<h2>Agent Performance</h2>

<div
  style={{
    border:
      "1px solid #333",
    padding: "10px",
    borderRadius: "10px",
  }}
>
  {Object.entries(
    performance
  ).map(
    ([agent, count]) => (
      <p key={agent}>
        {agent}: {String(count)}
      </p>
    )
  )}
</div>
<h2>System Health</h2>

<div
  style={{
    border:
      "1px solid #333",
    padding: "10px",
    borderRadius: "10px",
    marginBottom: "20px",
  }}
>
  <p>
    Status:
    {systemHealth.status}
  </p>

  <p>
    Agents:
    {systemHealth.agents}
  </p>

  <p>
    Queue:
    {systemHealth.queue}
  </p>

  <p>
    Memory:
    {systemHealth.memory}
  </p>
  <p>
  Last Check:
  {systemHealth.timestamp}
</p>
</div>
<h2>
  Analytics
</h2>

<div
  style={{
    display: "flex",
    gap: "15px",
    flexWrap: "wrap",
    marginBottom: "20px",
  }}
>
  <AnalyticsCard
    title="Agent Executions"
    value={
      logs.length
    }
  />

  <AnalyticsCard
    title="Queue Tasks"
    value={
      queue.length
    }
  />

  <AnalyticsCard
    title="Memory Records"
    value={
      sharedData.length
    }
  />
</div>
<div
  style={{
    display: "grid",
    gridTemplateColumns:
      "1fr 1fr 1fr 1fr 1fr",
    gap: "20px",
    marginBottom: "20px",
  }}
>
  <ActivityFeed
    logs={logs}
  />

  <CommandConsole />

  <AgentStatusBoard
    agents={
      runtimeAgents
    }
  />
  <CEOCommandCenter />
  <ActivityTimeline
  logs={logs}
/>
<AgencyAnalyticsCenter
  agents={runtimeAgents}
  projects={projects}
  tasks={projectTasks}
  queue={queue}
  memory={sharedData}
  logs={logs}
/>
<CompanyBrainBoard
  knowledge={knowledge}
  projects={
    projectMemoryData
  }
  clients={
    clientMemoryData
  }
/>
<KnowledgeSearchBoard
  knowledge={
    knowledge
  }
/>
<ResearchHistoryBoard
  history={
    researchData
  }
/>
<DepartmentBoard
  departments={
    departments
  }
/>
<DepartmentReportBoard
  reports={reports}
/>
<MessageBoard
  messages={messages}
/>
<CEONotificationBoard
  notifications={
    notifications
  }
/>
<TaskEscalationBoard
  escalations={
    escalations
  }
/>
<DepartmentIntelligenceBoard
  knowledge={
    departmentIntel
  }
/>
<DepartmentManagerBoard />
<CompanyHealthBoard
  health={health}
/>
<CEOMetricsBoard
  metrics={
    ceoMetrics
  }
/>
<DepartmentPerformanceBoard
  performance={
    departmentPerformance
  }
/>
</div>

    </main>
  </div>
);
}