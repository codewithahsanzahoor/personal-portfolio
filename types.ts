
export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  imageUrl: string;
  tags: string[];
  tech: string[];
  status: string;
  coordinates: string;
}

export interface Skill {
  name: string;
  proficiency: number;
  icon: string;
  module: string;
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}
