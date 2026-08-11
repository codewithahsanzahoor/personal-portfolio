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
  demoUrl?: string;
  repoUrl?: string;
}

export interface Skill {
  name: string;
  proficiency: number;
  icon: string;
  module: string;
  category: "FRONTEND" | "BACKEND" | "TOOLS";
}

export interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}
