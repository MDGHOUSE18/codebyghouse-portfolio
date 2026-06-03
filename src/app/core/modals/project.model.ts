export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  images?: string[];
  technologies: string[];
  category: ProjectCategory;
  githubUrl: string;
  liveUrl?: string;
  featured: boolean;
  year: number;
  role: string;
  highlights: string[];
  status: 'completed' | 'in-progress' | 'planned';
}

export type ProjectCategory = 
  | 'fullstack' 
  | 'frontend' 
  | 'backend' 
  | 'mobile' 
  | 'api';