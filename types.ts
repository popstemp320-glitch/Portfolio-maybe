export interface Tool {
  id: string;
  name: string;
  description: string;
  category: 'Security' | 'Networking' | 'Automation';
  status: 'ONLINE' | 'OFFLINE';
  link: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialId: string;
  level: 'Associate' | 'Professional' | 'Expert' | 'Specialist';
}

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  demoLink?: string;
  repoLink: string;
  imageUrl?: string;
}

export interface Writeup {
  id: string;
  platform: 'HackTheBox' | 'TryHackMe' | 'CTFTime' | 'Other';
  title: string;
  difficulty: 'Easy' | 'Medium' | 'Hard' | 'Insane';
  category: string;
  excerpt: string;
  date: string;
}