export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  price?: string;
  duration?: string;
  popular?: boolean;
  category: 'development' | 'consulting' | 'freelance';
}