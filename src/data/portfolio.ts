import { PersonalInfo, Project, ServiceItem, WorkflowStep, ToolItem } from '../types';

/**
 * ============================================================================
 * 🎬 MASTER PORTFOLIO CONFIGURATION - ANSHU KUSHWAHA
 * ============================================================================
 */

export const personalInfo: PersonalInfo = {
  name: "Anshu Kushwaha",
  brandTagline: "ANSHU KUSHWAHA",
  eyebrow: "VIDEO EDITOR / AI CREATOR / MOTION DESIGNER",
  headline: "I TURN IDEAS INTO CINEMATIC EXPERIENCES.",
  supportingDescription: "Crafting cinematic edits, AI-powered visuals, and motion-driven stories that make brands stand out.",
  
  // Exact biography from brief
  bio: "I'm Anshu Kushwaha, a video editor and creative designer focused on cinematic storytelling, motion graphics, and AI-powered visual content. Since 2023, I've been developing my creative skills across video editing, graphic design, and AI-assisted production, turning ideas into engaging visual experiences.",
  
  location: "Mumbai, Vasai",
  phone: "+91 84828 23802",
  email: "singhanshukushwaha@gmail.com",
  portfolioWebsiteUrl: "https://sites.google.com/view/kushwahaanshu",
  whatsAppUrl: "https://wa.me/918482823802",
  
  availableForCommissions: true,
  availabilityText: "AVAILABLE FOR SELECT PROJECTS",
  avatarUrl: "/profile/anshu-profile.jpg",
  
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
  
  additionalCapabilities: [
    "Research & Storyboarding",
    "Idea Generation",
    "AI Image Generation",
    "Image Enhancement & Upscaling",
    "AI Video Generation",
    "Cinematic Motion & Pacing",
    "Sound Design & Audio Mixing",
    "Color Grading & Rec.709 Finishes"
  ]
};

/**
 * ============================================================================
 * 🎥 FEATURED SHOWREEL
 * ============================================================================
 */
export const featuredShowreel = {
  sectionLabel: "SHOWREEL / SELECTED FRAMES",
  headline: "EVERY FRAME HAS A PURPOSE.",
  title: "Cinematic Visual Reel & Narrative",
  aspectRatio: "16:9",
  posterUrl: "https://i.ytimg.com/vi/nkhllsnaQGM/hqdefault.jpg",
  videoUrl: "https://www.youtube.com/watch?v=nkhllsnaQGM",
  embedId: "nkhllsnaQGM",
  description: "A showcase of high-impact visual cuts, rhythmic pacing, kinetic sound design, and color grading crafted to immerse viewers from the opening frame."
};

/**
 * ============================================================================
 * 🎬 SELECTED PROJECTS (Real Works & Structured Creative Projects)
 * ============================================================================
 */
export const portfolioProjects: Project[] = [
  {
    id: "anshu-reel-cinematic-01",
    title: "Cinematic Visual Reel & Narrative",
    category: "Cinematic Video Editing",
    subtitle: "High-Retention Visual Storytelling",
    role: "Lead Video Editor & Colorist",
    description: "Crafted for maximum visual impact using dynamic pacing, seamless sound integration, and cinematic mood color grading to captivate viewers from the opening frame.",
    thumbnail: "https://i.ytimg.com/vi/nkhllsnaQGM/hqdefault.jpg",
    videoUrl: "https://www.youtube.com/watch?v=nkhllsnaQGM",
    platform: "youtube",
    software: ["Adobe Premiere Pro", "After Effects", "Photoshop"],
    featured: true,
    duration: "0:30",
    date: "2024",
    aspectRatio: "16:9",
    externalWatchUrl: "https://www.youtube.com/watch?v=nkhllsnaQGM"
  },
  {
    id: "anshu-short-energy-02",
    title: "High-Energy Sound-Synced Showcase",
    category: "Brand and Promotional Videos",
    subtitle: "Rhythmic Speed Ramps & Foley",
    role: "Video Editor & Sound Designer",
    description: "Dynamic video edit synchronized to rhythmic audio beats with kinetic typography, whip transitions, and visual pop designed for high viewer retention.",
    thumbnail: "https://i.ytimg.com/vi/vpEr74dPJb4/hqdefault.jpg",
    videoUrl: "https://www.youtube.com/watch?v=vpEr74dPJb4",
    platform: "youtube",
    software: ["Adobe Premiere Pro", "After Effects"],
    featured: true,
    duration: "0:25",
    date: "2024",
    aspectRatio: "16:9",
    externalWatchUrl: "https://www.youtube.com/watch?v=vpEr74dPJb4"
  },
  {
    id: "anshu-promo-commercial-03",
    title: "Dynamic Promotional Brand Video",
    category: "Brand and Promotional Videos",
    subtitle: "Commercial Brand Social Showcase",
    role: "Commercial Video Editor",
    description: "Promotional video edit featuring clean typography, high-impact b-roll sequencing, and modern audio mixing to elevate brand presence.",
    thumbnail: "https://i.ytimg.com/vi/YbGrJJWTR9A/hqdefault.jpg",
    videoUrl: "https://www.youtube.com/watch?v=YbGrJJWTR9A",
    platform: "youtube",
    software: ["Adobe Premiere Pro", "Photoshop", "Adobe Firefly"],
    featured: true,
    duration: "0:45",
    date: "2024",
    aspectRatio: "16:9",
    externalWatchUrl: "https://www.youtube.com/watch?v=YbGrJJWTR9A"
  },
  {
    id: "anshu-short-viral-04",
    title: "Viral Retention Hook & Fast Cut",
    category: "Social Media Reels",
    subtitle: "Hook Optimization & Motion Typography",
    role: "Short-Form Retention Editor",
    description: "Fast-paced YouTube Short structured with a 3-second visual hook, text callouts, sound effects, and retention-maximizing cut frequency.",
    thumbnail: "https://i.ytimg.com/vi/kDtfX6sylxY/hqdefault.jpg",
    videoUrl: "https://www.youtube.com/watch?v=kDtfX6sylxY",
    platform: "youtube",
    software: ["Adobe Premiere Pro", "Illustrator", "After Effects"],
    featured: false,
    duration: "0:28",
    date: "2024",
    aspectRatio: "9:16",
    externalWatchUrl: "https://www.youtube.com/watch?v=kDtfX6sylxY"
  },
  {
    id: "anshu-vfx-edit-05",
    title: "Visual Effects & Creative Pacing",
    category: "Visual Effects",
    subtitle: "Motion Tracking & Particle Enhancement",
    role: "VFX & Compositing Artist",
    description: "Incorporating motion tracking, screen element replacements, subtle particle overlays, and AI-assisted visual enhancement for a high-concept edit.",
    thumbnail: "https://i.ytimg.com/vi/x7zH5Dnya48/hqdefault.jpg",
    videoUrl: "https://www.youtube.com/watch?v=x7zH5Dnya48",
    platform: "youtube",
    software: ["Adobe After Effects", "Photoshop", "Higgsfield AI"],
    featured: false,
    duration: "0:35",
    date: "2024",
    aspectRatio: "9:16",
    externalWatchUrl: "https://www.youtube.com/watch?v=x7zH5Dnya48"
  },
  {
    id: "anshu-motion-graphic-06",
    title: "Reels Motion Graphic Sequence",
    category: "Motion Graphics",
    subtitle: "Custom Vector Animation & Kinetic Titles",
    role: "Motion Graphics Designer",
    description: "Reels motion graphic piece featuring smooth vector keyframing, custom easing curves, icon animations, and clean visual branding.",
    thumbnail: "https://i.ytimg.com/vi/Urfi2yMevbo/hqdefault.jpg",
    videoUrl: "https://www.youtube.com/watch?v=Urfi2yMevbo",
    platform: "youtube",
    software: ["Adobe After Effects", "Adobe Illustrator"],
    featured: false,
    duration: "0:20",
    date: "2024",
    aspectRatio: "9:16",
    externalWatchUrl: "https://www.youtube.com/watch?v=Urfi2yMevbo"
  },
  {
    id: "anshu-brand-motion-07",
    title: "Kinetic Motion Graphic & Intro",
    category: "Motion Graphics",
    subtitle: "Modern Brand Visual Language",
    role: "Motion Designer",
    description: "Modern kinetic motion graphics sequence built with sleek UI design elements, animated typography, and seamless loop transitions.",
    thumbnail: "https://i.ytimg.com/vi/1zGvq1A5AJ4/hqdefault.jpg",
    videoUrl: "https://www.youtube.com/watch?v=1zGvq1A5AJ4",
    platform: "youtube",
    software: ["Adobe After Effects", "Figma", "Premiere Pro"],
    featured: false,
    duration: "0:22",
    date: "2024",
    aspectRatio: "9:16",
    externalWatchUrl: "https://www.youtube.com/watch?v=1zGvq1A5AJ4"
  },
  {
    id: "anshu-ai-higgsfield-08",
    title: "Generative Scene Synthesis & Camera Moves",
    category: "AI Video Creation",
    subtitle: "Continuous Spatial Movement & Prompt Direction",
    role: "AI Prompt & Visual Concept Artist",
    description: "Synthesizing dynamic continuous camera movement, cinematic lighting passes, and textural consistency using generative video models and After Effects finishing.",
    thumbnail: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
    software: ["Higgsfield AI", "ChatGPT", "Adobe Firefly", "After Effects"],
    featured: true,
    duration: "0:30",
    date: "2024",
    aspectRatio: "16:9",
    externalWatchUrl: "https://sites.google.com/view/kushwahaanshu"
  },
  {
    id: "anshu-client-rentok-09",
    title: "RentOk Promotional Commercial Edits",
    clientName: "RentOk",
    category: "Brand and Promotional Videos",
    subtitle: "Product Feature Showcase & Social Cutdowns",
    role: "Video Editor & Motion Designer",
    description: "Fast-turnaround commercial promotional cuts spotlighting product workflow benefits, UI callouts, and clean branded transitions.",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    software: ["Adobe Premiere Pro", "After Effects", "Photoshop"],
    featured: false,
    date: "2024",
    aspectRatio: "16:9",
    externalWatchUrl: "https://sites.google.com/view/kushwahaanshu"
  },
  {
    id: "anshu-client-freedoctor-10",
    title: "FreeDoctor.world Awareness Campaign",
    clientName: "FreeDoctor.world",
    category: "Motion Graphics",
    subtitle: "Healthcare Outreach & Kinetic Explainer",
    role: "Motion Graphics & Visual Storyteller",
    description: "Clear typography-led animated sequences designed to simplify complex healthcare information into accessible visual stories for digital audiences.",
    thumbnail: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80",
    software: ["After Effects", "Illustrator", "Premiere Pro"],
    featured: false,
    date: "2024",
    aspectRatio: "16:9",
    externalWatchUrl: "https://sites.google.com/view/kushwahaanshu"
  },
  {
    id: "anshu-client-fitpaisa-11",
    title: "Fitpaisa High-Energy Social Reels",
    clientName: "Fitpaisa",
    category: "Social Media Reels",
    subtitle: "Rhythmic Fitness Cuts & Retention Hooks",
    role: "Short-Form Editor",
    description: "High-octane mobile edits synchronized with workout beats, motion graphics metrics, and dynamic lower-third callouts.",
    thumbnail: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80",
    software: ["Premiere Pro", "After Effects"],
    featured: false,
    duration: "0:30",
    date: "2024",
    aspectRatio: "9:16",
    externalWatchUrl: "https://sites.google.com/view/kushwahaanshu"
  },
  {
    id: "anshu-client-burman-12",
    title: "R.D. Burman Documentary Visual Sequences",
    category: "Cinematic Video Editing",
    subtitle: "Archival Restoration & Musical Rhythm Edits",
    role: "Documentary Visual Editor",
    description: "Carefully paced archival film photo treatments, subtle camera parallax passes, and rhythm-based musical editing paying tribute to legendary compositions.",
    thumbnail: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1200&q=80",
    software: ["Adobe Premiere Pro", "Photoshop", "After Effects"],
    featured: false,
    date: "2023",
    aspectRatio: "16:9",
    externalWatchUrl: "https://sites.google.com/view/kushwahaanshu"
  },
  {
    id: "anshu-client-realestate-13",
    title: "Luxury Real Estate Cinematic Reel",
    category: "Brand and Promotional Videos",
    subtitle: "Property Walkthrough & Architectural Pacing",
    role: "Video Editor & Colorist",
    description: "Smooth architectural pacing, sky replacements, ambient interior soundscapes, and warm cinematic LUT grading tailored for high-end properties.",
    thumbnail: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    software: ["Adobe Premiere Pro", "After Effects"],
    featured: false,
    duration: "0:45",
    date: "2024",
    aspectRatio: "16:9",
    externalWatchUrl: "https://sites.google.com/view/kushwahaanshu"
  },
  {
    id: "anshu-graphic-design-14",
    title: "Cinematic Posters & Creator Brand Identity",
    category: "Graphic Design",
    subtitle: "Thumbnails, Editorial Art & Brand Kits",
    role: "Graphic & Visual Designer",
    description: "High-CTR YouTube thumbnail concepts, digital matte key art, kinetic typography layouts, and brand identity systems engineered for visual punch.",
    thumbnail: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
    software: ["Adobe Photoshop", "Adobe Illustrator", "Figma", "Canva"],
    featured: false,
    date: "2024",
    aspectRatio: "16:9",
    externalWatchUrl: "https://sites.google.com/view/kushwahaanshu"
  }
];

/**
 * ============================================================================
 * ⚡ SERVICES (Cinematic, Typography-Led Layout)
 * ============================================================================
 */
export const servicesList: ServiceItem[] = [
  {
    id: "service-video-editing",
    title: "VIDEO EDITING",
    shortDesc: "YouTube videos, podcasts, short-form videos, promotional content, and social media edits.",
    capabilities: [
      "Narrative pacing & story structure",
      "Dynamic sound design & audio clean-up",
      "Cinematic color correction & grading",
      "Multi-cam & interview timeline mastery"
    ],
    iconName: "Film"
  },
  {
    id: "service-ai-video",
    title: "AI VIDEO CREATION",
    shortDesc: "AI-assisted visual concepts, generated scenes, cinematic sequences, and creative experimentation.",
    capabilities: [
      "Generative scene synthesis with Higgsfield AI",
      "Prompt-engineered camera motion passes",
      "Magnific AI detail injection & 4K upscaling",
      "Adobe Firefly custom asset generation"
    ],
    iconName: "Cpu"
  },
  {
    id: "service-motion-graphics",
    title: "MOTION GRAPHICS & VFX",
    shortDesc: "Animated typography, visual effects, transitions, and motion-driven storytelling.",
    capabilities: [
      "Kinetic typography & title sequences",
      "3D camera tracking & plate compositing",
      "Custom vector keyframing & easing curves",
      "Particle systems & atmospheric light passes"
    ],
    iconName: "Sparkles"
  },
  {
    id: "service-social-media",
    title: "SOCIAL MEDIA CONTENT",
    shortDesc: "Instagram Reels, promotional campaigns, and engaging short-form videos.",
    capabilities: [
      "Hook-optimized 3-second openers",
      "Retention-maximizing rhythm & cut frequency",
      "Trend-aligned pacing & sound syncing",
      "Mobile-first 9:16 layout engineering"
    ],
    iconName: "Smartphone"
  },
  {
    id: "service-graphic-design",
    title: "GRAPHIC DESIGN",
    shortDesc: "Promotional creatives, campaign graphics, and supporting visual assets.",
    capabilities: [
      "High-CTR YouTube thumbnail design",
      "Digital key art & promotional posters",
      "Brand visual kits & vector iconography",
      "Social media campaign assets in Figma"
    ],
    iconName: "Palette"
  }
];

/**
 * ============================================================================
 * 🧭 CREATIVE WORKFLOW (Four-Step Creative Process)
 * ============================================================================
 */
export const workflowSteps: WorkflowStep[] = [
  {
    step: "01",
    title: "DISCOVER",
    description: "Understand the brief, audience, and creative objective.",
    details: "Deep dive into narrative goals, audience psychology, tone of voice, platform specifications, and target visual style."
  },
  {
    step: "02",
    title: "CONCEPT",
    description: "Develop the visual direction, references, and storyboard.",
    details: "Assemble moodboards, sonic references, storyboard key moments, and align on visual pacing before touching the timeline."
  },
  {
    step: "03",
    title: "CREATE",
    description: "Edit footage, generate visuals, animate, and refine the narrative.",
    details: "Sculpt the edit, integrate AI-assisted visual assets, animate custom motion graphics, sync foley sound, and apply color passes."
  },
  {
    step: "04",
    title: "DELIVER",
    description: "Polish the final video and prepare platform-ready exports.",
    details: "Refine client feedback, master audio dynamics, and export pristine ProRes, 4K master, or platform-optimized deliverables."
  }
];

/**
 * ============================================================================
 * 🛠️ TOOLS AND SKILLS (From CV, Grouped Appropriately)
 * ============================================================================
 */
export const toolsData: ToolItem[] = [
  // EDITING AND MOTION
  {
    name: "Adobe Premiere Pro",
    category: "EDITING AND MOTION",
    description: "Multi-track dynamic editing for YouTube, podcasts, commercials, pacing, sound sync, and client delivery.",
    accentColor: "#168BFF",
    iconName: "Film"
  },
  {
    name: "Adobe After Effects",
    category: "EDITING AND MOTION",
    description: "Motion graphics, visual effects, motion tracking, title animation, and cinematic transition design.",
    accentColor: "#55B7FF",
    iconName: "Sparkles"
  },
  // DESIGN
  {
    name: "Adobe Photoshop",
    category: "DESIGN",
    description: "High-CTR YouTube thumbnail engineering, visual key art manipulation, and digital matte painting.",
    accentColor: "#168BFF",
    iconName: "Image"
  },
  {
    name: "Adobe Illustrator",
    category: "DESIGN",
    description: "Vector illustration, brand badge design, custom iconography, and vector motion graphic assets.",
    accentColor: "#55B7FF",
    iconName: "PenTool"
  },
  {
    name: "Canva",
    category: "DESIGN",
    description: "Rapid social post templating, brand layout consistency, and agile visual asset assembly.",
    accentColor: "#168BFF",
    iconName: "Layout"
  },
  {
    name: "Figma",
    category: "DESIGN",
    description: "UI/UX layouts, wireframing, presentation decks, and vector visual asset preparation.",
    accentColor: "#55B7FF",
    iconName: "Layers"
  },
  // 3D
  {
    name: "Blender",
    category: "3D",
    description: "3D camera tracking, basic 3D asset integration, spatial lighting, and camera depth passes.",
    accentColor: "#168BFF",
    iconName: "Box"
  },
  // AI AND CREATIVE TOOLS
  {
    name: "ChatGPT",
    category: "AI AND CREATIVE TOOLS",
    description: "Narrative research, structural script hooks, concept ideation, and video storytelling outlines.",
    accentColor: "#55B7FF",
    iconName: "Cpu"
  },
  {
    name: "Gemini AI",
    category: "AI AND CREATIVE TOOLS",
    description: "Creative brainstorming, research analysis, video concept exploration, and narrative refinement.",
    accentColor: "#168BFF",
    iconName: "Cpu"
  },
  {
    name: "Higgsfield AI",
    category: "AI AND CREATIVE TOOLS",
    description: "Generative AI video creation, prompt-driven cinematic camera synthesis, and dynamic scene generation.",
    accentColor: "#55B7FF",
    iconName: "Sparkles"
  },
  {
    name: "Adobe Firefly",
    category: "AI AND CREATIVE TOOLS",
    description: "Generative fill, conceptual digital assets, high-impact background elements, and textures.",
    accentColor: "#168BFF",
    iconName: "Image"
  },
  {
    name: "Magnific AI",
    category: "AI AND CREATIVE TOOLS",
    description: "Photorealistic detail injection, resolution upscaling, texture enhancement, and high-clarity finishing.",
    accentColor: "#55B7FF",
    iconName: "Sparkles"
  }
];
