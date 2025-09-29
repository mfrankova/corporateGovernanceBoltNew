export interface ProcessStep {
  id: string;
  title: string;
  description: string;
  role: 'system' | 'secretary' | 'board_member' | 'chairman' | 'participant';
  type: 'task' | 'decision' | 'end_event';
  next?: string[];
  details?: string[];
}

export interface ProcessDiagram {
  id: string;
  name: string;
  description: string;
  steps: ProcessStep[];
}

export interface UserStory {
  id: string;
  role: string;
  story: string;
  priority: 'high' | 'medium' | 'low';
}

export interface OpenQuestion {
  id: string;
  question: string;
  context: string;
  priority: 'critical' | 'important' | 'clarification';
}

export const roleColors = {
  system: '#8B5CF6',
  secretary: '#FCD34D',
  board_member: '#2563EB',
  chairman: '#DC2626',
  participant: '#10B981'
};

export const roleLabels = {
  system: 'Systém (automatizace)',
  secretary: 'Tajemník',
  board_member: 'Člen správní rady',
  chairman: 'Předseda/místopředseda',
  participant: 'Řešitel'
};