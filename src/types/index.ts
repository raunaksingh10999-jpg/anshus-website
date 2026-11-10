export type VideoCategory =
  | 'All Videos'
  | 'Commercial Ads'
  | 'Real Estate Videos'
  | 'Brand Promotional Videos'
  | 'AI Generated Videos'
  | 'Motion Graphics'
  | 'Social Media Reels'
  | 'Documentary Videos';

export type GraphicCategory =
  | 'All Designs'
  | 'Social Media Creatives'
  | 'Advertising Posters'
  | 'Marketing Banners'
  | 'Brand Designs'
  | 'YouTube Thumbnails'
  | 'Promotional Creatives'
  | 'Typography Designs';

export type ProjectCategory = VideoCategory | GraphicCategory | 'Graphic Design' | 'All';

export interface Project {
  id: string;
  title: string;
  category: string;
  subtitle: string;
  description: string;
  thumbnail: string;
  videoUrl?: string; // YouTube URL or direct video
  role?: string; // Creative role
  platform?: 'youtube' | 'instagram' | 'direct' | 'other';
  software?: string[];
  featured?: boolean;
  duration?: string;
  date?: string;
  aspectRatio?: '9:16' | '16:9' | '1:1' | '4:5' | 'banner';
  clientName?: string;
  externalWatchUrl?: string;
  isGraphic?: boolean;
  section?: 'Video Editing' | 'Reels and Shorts' | 'Reels Motion Graphic' | 'Graphic';
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
  linkedInUrl: string;
  instagramUrl: string;
  resumeUrl: string;
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
