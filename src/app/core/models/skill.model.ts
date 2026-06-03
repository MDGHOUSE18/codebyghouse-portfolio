export interface Skill {
  name: string;
  level: number; // 0-100
  icon: string;
  category: SkillCategory;
  color?: string;
}

export interface SkillCategory {
  id: string;
  name: string;
  icon: string;
  description: string;
  skills?: Skill[];
}

export type SkillCategoryType =
  | 'frontend'
  | 'backend'
  | 'database'
  | 'cloud'
  | 'devops'
  | 'tools';