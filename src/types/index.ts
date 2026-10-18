export type ProjectCategory = 
  | 'All'
  | 'VFX Edits'
  | 'Cinematic Edits'
  | 'Instagram Reels'
  | 'YouTube Shorts'
  | 'Motion Graphics'
  | 'Color Grading'
  | 'Transitions'
  | 'Promotional Videos'
  | 'Other Creative Projects';

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  subtitle: string;
  description: string;
  thumbnail: string;
  hoverVideoPreview?: string;
  videoUrl: string; // YouTube URL, Shorts URL, Vimeo, or direct MP4
  platform: 'youtube' | 'instagram' | 'vimeo' | 'direct' | 'other';
  publicationLink?: string;
  software: string[];
  featured?: boolean;
  duration?: string;
  date?: string;
  aspectRatio?: '9:16' | '16:9' | '1:1';
  beforeAfter?: {
    beforeImg: string;
    afterImg: string;
    beforeLabel?: string;
    afterLabel?: string;
  };
}

export interface GraphicItem {
  id: string;
  title: string;
  category: 'YouTube Thumbnails' | 'Posters & Art' | 'Photoshop VFX' | 'Brand Designs' | 'UI/UX';
  description: string;
  imageUrl: string;
  aspectRatio?: '16:9' | '9:16' | '1:1' | '4:5';
  software: string[];
  tags: string[];
}

export interface PricingPackage {
  id: string;
  name: string;
  price: string;
  billingPeriod?: string;
  popular?: boolean;
  description: string;
  features: string[];
  ctaText: string;
  category: string;
}

export interface SoftwareTool {
  name: string;
  category: 'VFX & Compositing' | 'Video Editing' | 'Motion Design' | 'Color & 3D' | 'Design & Graphics' | 'AI & Generative Tools';
  description: string;
  proficiency: number; // 0 - 100
  experienceYears?: string;
  iconName: string; // Lucide or custom SVG tag
  accentColor: string;
}

export interface SocialMediaItem {
  id: string;
  title: string;
  platform: 'instagram' | 'youtube';
  views?: string;
  likes?: string;
  thumbnailUrl: string;
  postUrl: string;
  embedId?: string; // YouTube video ID or Instagram shortcode
  caption?: string;
}

export interface CreativeExperiment {
  id: string;
  title: string;
  category: string;
  description: string;
  videoUrl?: string;
  thumbnailUrl: string;
  specs: string[];
  launchUrl?: string;
}

export interface TimelineMilestone {
  year: string;
  role: string;
  highlight: string;
  description: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  years: string;
  location: string;
}

export interface AISkill {
  name: string;
  category: string;
  description: string;
}

export interface PersonalInfo {
  name: string;
  brandTagline: string;
  headline: string;
  subheadline: string;
  shortBio: string;
  fullBio: string[];
  location: string;
  phone: string;
  availableForProjects: boolean;
  availabilityText: string;
  yearsOfExperience: string;
  projectsCompleted: string;
  totalViews: string;
  satisfactionRate: string;
  avatarUrl: string;
  email: string;
  portfolioWebsiteUrl: string;
  instagramUrl: string;
  youtubeUrl: string;
  whatsAppUrl?: string;
  languages: string[];
  education: EducationItem[];
  aiSkills: AISkill[];
}
