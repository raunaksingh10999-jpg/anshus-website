export type ProjectCategory = 
  | 'All'
  | 'Graphic Design'
  | 'AI Video Creation'
  | 'Cinematic Video Editing'
  | 'Motion Graphics'
  | 'Visual Effects'
  | 'Social Media Reels'
  | 'Brand and Promotional Videos';

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  subtitle: string;
  description: string;
  thumbnail: string;
  videoUrl?: string; // YouTube URL or direct video
  role?: string; // Verified creative role
  platform?: 'youtube' | 'instagram' | 'direct' | 'other';
  software?: string[];
  featured?: boolean;
  duration?: string;
  date?: string;
  aspectRatio?: '9:16' | '16:9' | '1:1' | '4:5' | 'banner';
  clientName?: string;
  externalWatchUrl?: string;
  isPlaceholder?: boolean;
  isGraphic?: boolean;
}

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  capabilities: string[];
  iconName: string;
}

export interface WorkflowStep {
  step: string;
  title: string;
  description: string;
  details?: string;
}

export interface ToolItem {
  name: string;
  category: 'EDITING AND MOTION' | 'DESIGN' | '3D' | 'AI AND CREATIVE TOOLS';
  description: string;
  accentColor?: string;
  iconName?: string;
}

export interface PersonalInfo {
  name: string;
  brandTagline: string;
  eyebrow: string;
  headline: string;
  supportingDescription: string;
  bio: string;
  location: string;
  phone: string;
  email: string;
  portfolioWebsiteUrl: string;
  whatsAppUrl: string;
  avatarUrl: string;
  availableForCommissions: boolean;
  availabilityText: string;
  education: {
    degree: string;
    institution: string;
    years: string;
    location: string;
  }[];
  additionalCapabilities: string[];
}
