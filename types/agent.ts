export interface Agent {
  id: string;

  name: string;

  role: string;

  description: string;

  department: string;

  status: string;

  goals: string[];

  tools: string[];
}