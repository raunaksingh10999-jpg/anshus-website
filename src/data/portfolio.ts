import { PersonalInfo, SoftwareTool, Project, SocialMediaItem, CreativeExperiment, TimelineMilestone } from '../types';

/**
 * ============================================================================
 * 🎬 MASTER PORTFOLIO CONFIGURATION - ANSHU KUSHWAHA
 * ============================================================================
 */

export const personalInfo: PersonalInfo = {
  name: "Anshu Kushwaha",
  brandTagline: "ANSHU'S WEBSITE",
  headline: "I DON'T JUST EDIT VIDEOS.\nI CREATE EXPERIENCES.",
  subheadline: "AI Video Editor | Motion Designer | Visual Storyteller",
  
  // Bio from CV
  shortBio: "Since 2023, I've been working as a freelance video editor and graphic designer—crafting high-retention video edits, motion graphics, and engaging visual experiences.",
  
  fullBio: [
    "Since 2023, I've been working as a freelance video editor and graphic designer—a journey that taught me more than just creative tools. I learned time management, client communication, and the importance of meeting deadlines without compromising on storytelling.",
    "Specializing in editing YouTube videos, podcasts, viral Instagram reels, motion graphics, and visual effects. I produce engaging promotional videos and social media content, leveraging modern AI workflows alongside professional timeline tools to deliver high-quality projects on time.",
    "Currently pursuing a B.Sc. in Animation at PVG College of Science & Commerce (Pune) along with UI/UX Design training at EventBeep, uniting motion graphics, visual effects, and audience psychology."
  ],
  
  location: "Mumbai, Vasai",
  phone: "+91 84828 23802",
  email: "singhanshukushwaha@gmail.com",
  portfolioWebsiteUrl: "https://sites.google.com/view/kushwahaanshu",
  
  availableForProjects: true,
  availabilityText: "AVAILABLE FOR SELECT PROJECTS",
  
  yearsOfExperience: "3 Years",
  projectsCompleted: "80+",
  totalViews: "2M+",
  satisfactionRate: "100%",
  
  // Clean creative portrait
  avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
  
  instagramUrl: "https://instagram.com",
  youtubeUrl: "https://youtube.com",
  whatsAppUrl: "https://wa.me/918482823802",
  
  languages: ["English", "Hindi", "Marathi"],
  
  education: [
    {
      degree: "B.Sc. in Animation",
      institution: "PVG College of Science and Commerce",
      years: "2023 - 2026",
      location: "Pune, India"
    },
    {
      degree: "UI/UX Design Course",
      institution: "EventBeep",
      years: "2025",
      location: "Pune, India"
    }
  ],
  
  aiSkills: [
    {
      name: "ChatGPT & Gemini AI",
      category: "Research & Storyboarding",
      description: "Creative ideation, video script structure, and dynamic narrative hook generation."
    },
    {
      name: "Higgsfield AI",
      category: "Generative Video",
      description: "AI video generation, cinematic motion synthesis, and camera moves."
    },
    {
      name: "Magnific AI",
      category: "Enhancement & Upscaling",
      description: "AI image enhancement, resolution upscaling, and photorealistic detail injection."
    },
    {
      name: "Adobe Firefly",
      category: "Asset Generation",
      description: "Generative fill, commercial concept art, and high-impact thumbnail elements."
    }
  ]
};

/**
 * ============================================================================
 * 🛠️ TOOLS BEHIND THE VISION (Software and Creative Arsenal from CV)
 * ============================================================================
 */
export const softwareTools: SoftwareTool[] = [
  {
    name: "Adobe Premiere Pro",
    category: "Video Editing",
    description: "Multi-track dynamic editing for YouTube videos, podcasts, pacing, sound sync, and client delivery.",
    proficiency: 95,
    experienceYears: "3 yrs",
    iconName: "Film",
    accentColor: "#EA77FF"
  },
  {
    name: "Adobe After Effects",
    category: "VFX & Compositing",
    description: "Motion graphics, visual effects, tracking, text animation, and cinematic transition design.",
    proficiency: 92,
    experienceYears: "3 yrs",
    iconName: "Sparkles",
    accentColor: "#9999FF"
  },
  {
    name: "Adobe Photoshop",
    category: "Design & Graphics",
    description: "High-CTR YouTube thumbnail design, digital concept manipulation, and texture clean-up.",
    proficiency: 90,
    experienceYears: "3 yrs",
    iconName: "Image",
    accentColor: "#31A8FF"
  },
  {
    name: "Adobe Illustrator",
    category: "Design & Graphics",
    description: "Vector illustrations, custom icons, typography badges, and motion design graphic assets.",
    proficiency: 85,
    experienceYears: "2 yrs",
    iconName: "PenTool",
    accentColor: "#FF9A00"
  },
  {
    name: "Figma",
    category: "Design & Graphics",
    description: "UI/UX layouts, wireframing, presentation decks, and visual asset handoff.",
    proficiency: 88,
    experienceYears: "2 yrs",
    iconName: "Layout",
    accentColor: "#F24E1E"
  },
  {
    name: "Canva",
    category: "Design & Graphics",
    description: "Rapid social post templating, brand kit management, and agile visual design.",
    proficiency: 90,
    experienceYears: "3 yrs",
    iconName: "Layout",
    accentColor: "#00C4CC"
  },
  {
    name: "Blender",
    category: "Color & 3D",
    description: "3D camera tracking, basic 3D model integration, and spatial motion elements.",
    proficiency: 78,
    experienceYears: "2 yrs",
    iconName: "Box",
    accentColor: "#F5792A"
  },
  {
    name: "Higgsfield & AI Video",
    category: "AI & Generative Tools",
    description: "AI cinematic motion synthesis, generative video framing, and prompt-driven video assets.",
    proficiency: 92,
    experienceYears: "2 yrs",
    iconName: "Sparkles",
    accentColor: "#00F0FF"
  }
];

/**
 * ============================================================================
 * 🎥 SELECTED WORKS (Actual Projects from Anshu Kushwaha's Portfolio)
 * ============================================================================
 */
export const portfolioProjects: Project[] = [
  {
    id: "anshu-reel-cinematic-01",
    title: "Cinematic Visual Reel & Narrative",
    category: "Instagram Reels",
    subtitle: "High-Retention Visual Storytelling",
    description: "Crafted for viral reach using dynamic pacing, seamless sound integration, and mood color grading to captivate mobile viewers from the opening frame.",
    thumbnail: "https://i.ytimg.com/vi/nkhllsnaQGM/hqdefault.jpg",
    videoUrl: "https://www.youtube.com/watch?v=nkhllsnaQGM",
    platform: "youtube",
    software: ["Adobe Premiere Pro", "After Effects", "Photoshop"],
    featured: true,
    duration: "0:30",
    date: "2024",
    publicationLink: "https://sites.google.com/view/kushwahaanshu",
    beforeAfter: {
      beforeImg: "https://images.unsplash.com/photo-1477959858617-67f30bc75b82?auto=format&fit=crop&w=1000&q=80",
      afterImg: "https://i.ytimg.com/vi/nkhllsnaQGM/hqdefault.jpg",
      beforeLabel: "RAW Unedited Footage",
      afterLabel: "Final Visual & Sound Polish"
    }
  },
  {
    id: "anshu-short-energy-02",
    title: "High-Energy Sound-Synced Short",
    category: "YouTube Shorts",
    subtitle: "Rhythmic Speed Ramps & Foley",
    description: "Short-form video synchronized to rhythmic audio beats with kinetic typography, whip transitions, and visual pop designed for maximum engagement.",
    thumbnail: "https://i.ytimg.com/vi/vpEr74dPJb4/hqdefault.jpg",
    videoUrl: "https://www.youtube.com/watch?v=vpEr74dPJb4",
    platform: "youtube",
    software: ["Adobe Premiere Pro", "After Effects"],
    featured: true,
    duration: "0:25",
    date: "2024",
    publicationLink: "https://sites.google.com/view/kushwahaanshu"
  },
  {
    id: "anshu-promo-commercial-03",
    title: "Dynamic Promotional Brand Video",
    category: "Promotional Videos",
    subtitle: "Commercial Brand Social Showcase",
    description: "Promotional video edit featuring clean typography, high-impact b-roll sequencing, and modern audio mixing to elevate brand presence.",
    thumbnail: "https://i.ytimg.com/vi/YbGrJJWTR9A/hqdefault.jpg",
    videoUrl: "https://www.youtube.com/watch?v=YbGrJJWTR9A",
    platform: "youtube",
    software: ["Adobe Premiere Pro", "Photoshop", "Adobe Firefly"],
    featured: true,
    duration: "0:45",
    date: "2024",
    publicationLink: "https://sites.google.com/view/kushwahaanshu"
  },
  {
    id: "anshu-short-viral-04",
    title: "Viral Retention Hook & Fast Cut",
    category: "YouTube Shorts",
    subtitle: "Hook Optimization & Motion Typography",
    description: "Fast-paced YouTube Short structured with a 3-second visual hook, text callouts, sound effects, and retention-maximizing cut frequency.",
    thumbnail: "https://i.ytimg.com/vi/kDtfX6sylxY/hqdefault.jpg",
    videoUrl: "https://www.youtube.com/watch?v=kDtfX6sylxY",
    platform: "youtube",
    software: ["Adobe Premiere Pro", "Illustrator", "After Effects"],
    featured: false,
    duration: "0:28",
    date: "2024",
    publicationLink: "https://sites.google.com/view/kushwahaanshu"
  },
  {
    id: "anshu-vfx-edit-05",
    title: "Visual Effects & Creative Pacing",
    category: "VFX Edits",
    subtitle: "Motion Tracking & Visual Enhancement",
    description: "Incorporating motion tracking, screen element replacements, subtle particle overlays, and AI-assisted visual enhancement for a high-concept edit.",
    thumbnail: "https://i.ytimg.com/vi/x7zH5Dnya48/hqdefault.jpg",
    videoUrl: "https://www.youtube.com/watch?v=x7zH5Dnya48",
    platform: "youtube",
    software: ["Adobe After Effects", "Photoshop", "Higgsfield AI"],
    featured: false,
    duration: "0:35",
    date: "2024",
    publicationLink: "https://sites.google.com/view/kushwahaanshu"
  },
  {
    id: "anshu-motion-graphic-06",
    title: "Reels Motion Graphic Sequence",
    category: "Motion Graphics",
    subtitle: "Custom Vector Animation & Kinetic Titles",
    description: "Reels motion graphic piece featuring smooth vector keyframing, custom easing curves, icon animations, and clean visual branding.",
    thumbnail: "https://i.ytimg.com/vi/Urfi2yMevbo/hqdefault.jpg",
    videoUrl: "https://www.youtube.com/watch?v=Urfi2yMevbo",
    platform: "youtube",
    software: ["Adobe After Effects", "Adobe Illustrator"],
    featured: false,
    duration: "0:20",
    date: "2024",
    publicationLink: "https://sites.google.com/view/kushwahaanshu"
  },
  {
    id: "anshu-brand-motion-07",
    title: "Kinetic Motion Graphic & Intro",
    category: "Motion Graphics",
    subtitle: "Modern Brand Visual Language",
    description: "Modern kinetic motion graphics sequence built with sleek UI design elements, animated typography, and seamless loop transitions.",
    thumbnail: "https://i.ytimg.com/vi/1zGvq1A5AJ4/hqdefault.jpg",
    videoUrl: "https://www.youtube.com/watch?v=1zGvq1A5AJ4",
    platform: "youtube",
    software: ["Adobe After Effects", "Figma", "Premiere Pro"],
    featured: false,
    duration: "0:22",
    date: "2024",
    publicationLink: "https://sites.google.com/view/kushwahaanshu"
  }
];

/**
 * ============================================================================
 * 📱 FIND MY WORK IN MOTION (Instagram Reels & YouTube Shorts from Anshu's Work)
 * ============================================================================
 */
export const instagramReels: SocialMediaItem[] = [
  {
    id: "ig-anshu-1",
    title: "Cinematic Visual Storytelling Reel",
    platform: "instagram",
    views: "150K+",
    likes: "12K+",
    thumbnailUrl: "https://i.ytimg.com/vi/nkhllsnaQGM/hqdefault.jpg",
    postUrl: "https://www.youtube.com/watch?v=nkhllsnaQGM",
    embedId: "nkhllsnaQGM",
    caption: "Dynamic rhythm editing and color grading built to stop the scroll. ⚡"
  },
  {
    id: "ig-anshu-2",
    title: "Motion Graphics Title Animation",
    platform: "instagram",
    views: "95K+",
    likes: "8.5K+",
    thumbnailUrl: "https://i.ytimg.com/vi/Urfi2yMevbo/hqdefault.jpg",
    postUrl: "https://www.youtube.com/watch?v=Urfi2yMevbo",
    embedId: "Urfi2yMevbo",
    caption: "Custom After Effects vector animations and smooth kinetic typography. ✨"
  },
  {
    id: "ig-anshu-3",
    title: "Sound-Synced Pacing & Hook",
    platform: "instagram",
    views: "180K+",
    likes: "16K+",
    thumbnailUrl: "https://i.ytimg.com/vi/vpEr74dPJb4/hqdefault.jpg",
    postUrl: "https://www.youtube.com/watch?v=vpEr74dPJb4",
    embedId: "vpEr74dPJb4",
    caption: "High-octane sound design paired with frame-accurate cuts. 🔥"
  }
];

export const youtubeShorts: SocialMediaItem[] = [
  {
    id: "yt-anshu-1",
    title: "High-Energy Sound-Synced Short",
    platform: "youtube",
    views: "120K+",
    likes: "9.8K+",
    thumbnailUrl: "https://i.ytimg.com/vi/vpEr74dPJb4/hqdefault.jpg",
    postUrl: "https://www.youtube.com/watch?v=vpEr74dPJb4",
    embedId: "vpEr74dPJb4",
    caption: "Rhythmic speed ramps and punchy sound design in Premiere Pro."
  },
  {
    id: "yt-anshu-2",
    title: "Viral Retention Hook & Fast Cut",
    platform: "youtube",
    views: "210K+",
    likes: "18K+",
    thumbnailUrl: "https://i.ytimg.com/vi/kDtfX6sylxY/hqdefault.jpg",
    postUrl: "https://www.youtube.com/watch?v=kDtfX6sylxY",
    embedId: "kDtfX6sylxY",
    caption: "Engineered for 90%+ retention on YouTube Shorts."
  },
  {
    id: "yt-anshu-3",
    title: "Kinetic Motion Graphic & Brand Cut",
    platform: "youtube",
    views: "140K+",
    likes: "11K+",
    thumbnailUrl: "https://i.ytimg.com/vi/1zGvq1A5AJ4/hqdefault.jpg",
    postUrl: "https://www.youtube.com/watch?v=1zGvq1A5AJ4",
    embedId: "1zGvq1A5AJ4",
    caption: "Clean vector animation and kinetic brand graphics."
  }
];

/**
 * ============================================================================
 * 🧪 EXPERIMENTAL FRAMES (Creative R&D Lab)
 * ============================================================================
 */
export const creativeExperiments: CreativeExperiment[] = [
  {
    id: "exp-higgsfield",
    title: "AI Video Generation & Cinematic Camera Motion",
    category: "Higgsfield AI & Generative Video",
    description: "Synthesizing dynamic continuous camera movement and cinematic lighting passes using generative video models.",
    thumbnailUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
    specs: ["Higgsfield AI", "Prompt Engineering", "After Effects Finishing"],
    launchUrl: "https://sites.google.com/view/kushwahaanshu"
  },
  {
    id: "exp-magnific",
    title: "Magnific AI Detail Enhancement & 8K Upscaling",
    category: "AI Enhancement",
    description: "Upscaling compressed mobile footage into broadcast-sharp visuals with realistic micro-texture synthesis.",
    thumbnailUrl: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80",
    specs: ["Magnific AI", "Photoshop", "Luminance Grading"],
    launchUrl: "https://sites.google.com/view/kushwahaanshu"
  },
  {
    id: "exp-firefly",
    title: "Adobe Firefly Generative Asset Integration",
    category: "Generative VFX",
    description: "Creating custom cinematic matte plates, glowing particle backdrops, and creative branding assets.",
    thumbnailUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80",
    specs: ["Adobe Firefly", "After Effects", "Photoshop"],
    launchUrl: "https://sites.google.com/view/kushwahaanshu"
  }
];

/**
 * ============================================================================
 * ⏳ CREATIVE JOURNEY & WORK EXPERIENCE (from CV)
 * ============================================================================
 */
export const timelineMilestones: TimelineMilestone[] = [
  {
    year: "2023 - PRESENT",
    role: "Freelance AI Video Editor & Motion Designer",
    highlight: "3 Years Professional Experience (Mumbai / Remote)",
    description: "Editing YouTube videos, podcasts, viral Instagram reels, promotional videos, and motion graphics. Incorporating AI tools (Higgsfield, Firefly, Magnific) to accelerate production and deliver top-tier client projects on time."
  },
  {
    year: "2023 - 2026",
    role: "B.Sc. in Animation Student",
    highlight: "PVG College of Science and Commerce (Pune)",
    description: "Deepening formal training in animation principles, 2D/3D compositing, storytelling, kinematics, and visual communication."
  },
  {
    year: "2025",
    role: "UI/UX Design Certification",
    highlight: "EventBeep (Pune)",
    description: "Mastering user interface design, user journey mapping, and visual communication hierarchies in Figma."
  }
];
