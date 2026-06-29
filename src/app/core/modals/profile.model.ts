export interface Profile {
  name: string;
  title: string;
  tagline: string;
  location: string;
  email: string;
  phone?: string;
  avatar: string;
  resumeUrl: string;
  github: string;
  linkedin: string;
  twitter?: string;
  about: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}
