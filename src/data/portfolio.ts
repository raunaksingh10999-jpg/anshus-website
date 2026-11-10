import { PersonalInfo, Project, ServiceItem, WorkflowStep, ToolItem } from '../types';

/**
 * ============================================================================
 * 🎬 MASTER PORTFOLIO CONFIGURATION - ANSHU SINGH KUSHWAHA
 * ============================================================================
 */

export const personalInfo: PersonalInfo = {
  name: "ANSHU SINGH KUSHWAHA",
  brandTagline: "ANSHU SINGH KUSHWAHA",
  eyebrow: "VIDEO EDITOR | GRAPHIC DESIGNER | AI VIDEO CREATOR",
  headline: "ANSHU SINGH KUSHWAHA",
  supportingDescription: "I create engaging visual experiences through video editing, motion graphics, graphic design, and AI-powered content creation.",
  
  // Exact About Me content from prompt
  bio: "I'm a creative professional passionate about video editing, graphic design, motion graphics, and AI-powered visual storytelling. I enjoy transforming ideas into engaging digital experiences through creative visuals and modern editing techniques.",
  
  location: "Mumbai, Vasai",
  phone: "+91 84828 23802",
  email: "singhanshukushwaha@gmail.com",
  portfolioWebsiteUrl: "https://sites.google.com/view/kushwahaanshu",
  whatsAppUrl: "https://wa.me/918482823802",
  linkedInUrl: "https://www.linkedin.com/in/anshu-kushwaha-307963292",
  instagramUrl: "https://www.instagram.com/anshu_kushwaha_official",
  resumeUrl: "/cv/anshu-kushwaha-cv.pdf",
  
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
 * 🎥 MY SHOWREEL
 * ============================================================================
 */
export const featuredShowreel = {
  sectionLabel: "SHOWREEL",
  headline: "MY SHOWREEL",
  title: "Cinematic Visual Reel & Narrative",
  aspectRatio: "16:9",
  posterUrl: "https://i.ytimg.com/vi/nkhllsnaQGM/hqdefault.jpg",
  videoUrl: "https://www.youtube.com/watch?v=nkhllsnaQGM",
  embedId: "nkhllsnaQGM",
  description: "A showcase of high-impact visual cuts, rhythmic pacing, kinetic sound design, and color grading crafted to immerse viewers from the opening frame."
};

/**
 * ============================================================================
 * 🎬 VIDEO EDITING PORTFOLIO PROJECTS
 * Categories:
 * - Commercial Ads
 * - Real Estate Videos
 * - Brand Promotional Videos
 * - AI Generated Videos
 * - Motion Graphics
 * - Social Media Reels
 * - Documentary Videos
 * ============================================================================
 */
export const videoProjects: Project[] = [
  {
    id: "vid-comm-01",
    title: "Dynamic Promotional Brand Commercial",
    category: "Commercial Ads",
    subtitle: "Commercial Brand Social Showcase",
    role: "Lead Commercial Video Editor",
    description: "High-conversion promotional video edit featuring kinetic typography, high-impact b-roll sequencing, and modern audio mixing to elevate brand presence.",
    thumbnail: "https://i.ytimg.com/vi/YbGrJJWTR9A/hqdefault.jpg",
    videoUrl: "https://www.youtube.com/watch?v=YbGrJJWTR9A",
    platform: "youtube",
    software: ["Adobe Premiere Pro", "Photoshop", "After Effects"],
    featured: true,
    duration: "0:45",
    date: "2024",
    aspectRatio: "16:9",
    externalWatchUrl: "https://www.youtube.com/watch?v=YbGrJJWTR9A"
  },
  {
    id: "vid-realestate-02",
    title: "Luxury Real Estate Architectural Reel",
    category: "Real Estate Videos",
    subtitle: "Property Walkthrough & Architectural Pacing",
    role: "Video Editor & Colorist",
    description: "Smooth architectural pacing, sky replacements, ambient interior soundscapes, and warm cinematic LUT grading tailored for high-end properties.",
    thumbnail: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    videoUrl: "https://www.youtube.com/watch?v=vpEr74dPJb4",
    platform: "youtube",
    software: ["Adobe Premiere Pro", "After Effects", "DaVinci Resolve"],
    featured: true,
    duration: "0:45",
    date: "2024",
    aspectRatio: "16:9",
    externalWatchUrl: "https://sites.google.com/view/kushwahaanshu"
  },
  {
    id: "vid-brand-03",
    title: "High-Energy Sound-Synced Brand Showcase",
    category: "Brand Promotional Videos",
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
    id: "vid-cinematic-04",
    title: "Cinematic Visual Reel & Narrative",
    category: "Brand Promotional Videos",
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
    id: "vid-ai-05",
    title: "Generative Scene Synthesis & Camera Moves",
    category: "AI Generated Videos",
    subtitle: "Continuous Spatial Movement & Prompt Direction",
    role: "AI Prompt & Visual Concept Artist",
    description: "Synthesizing dynamic continuous camera movement, cinematic lighting passes, and textural consistency using generative video models and After Effects finishing.",
    thumbnail: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
    videoUrl: "https://www.youtube.com/watch?v=Urfi2yMevbo",
    platform: "youtube",
    software: ["Higgsfield AI", "Midjourney", "Adobe Firefly", "After Effects"],
    featured: true,
    duration: "0:30",
    date: "2024",
    aspectRatio: "16:9",
    externalWatchUrl: "https://sites.google.com/view/kushwahaanshu"
  },
  {
    id: "vid-motion-06",
    title: "Reels Motion Graphic Sequence & Title",
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
    aspectRatio: "16:9",
    externalWatchUrl: "https://www.youtube.com/watch?v=Urfi2yMevbo"
  },
  {
    id: "vid-motion-07",
    title: "Kinetic Motion Graphic & Brand Identity",
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
    aspectRatio: "16:9",
    externalWatchUrl: "https://www.youtube.com/watch?v=1zGvq1A5AJ4"
  },
  {
    id: "vid-client-08",
    title: "RentOk Product Feature Showcase",
    clientName: "RentOk",
    category: "Commercial Ads",
    subtitle: "Product Feature Showcase & Social Cutdowns",
    role: "Video Editor & Motion Designer",
    description: "Fast-turnaround commercial promotional cuts spotlighting product workflow benefits, UI callouts, and clean branded transitions.",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    videoUrl: "https://www.youtube.com/watch?v=YbGrJJWTR9A",
    platform: "youtube",
    software: ["Adobe Premiere Pro", "After Effects", "Photoshop"],
    featured: false,
    date: "2024",
    aspectRatio: "16:9",
    externalWatchUrl: "https://sites.google.com/view/kushwahaanshu"
  },
  {
    id: "vid-reels-09",
    title: "Viral Retention Hook & Fast Cut",
    category: "Social Media Reels",
    subtitle: "Hook Optimization & Motion Typography",
    role: "Short-Form Retention Editor",
    description: "Fast-paced short-form video structured with a 3-second visual hook, text callouts, sound effects, and retention-maximizing cut frequency.",
    thumbnail: "https://i.ytimg.com/vi/kDtfX6sylxY/hqdefault.jpg",
    videoUrl: "https://www.youtube.com/watch?v=kDtfX6sylxY",
    platform: "youtube",
    software: ["Adobe Premiere Pro", "Illustrator", "After Effects"],
    featured: false,
    duration: "0:28",
    date: "2024",
    aspectRatio: "16:9",
    externalWatchUrl: "https://www.youtube.com/watch?v=kDtfX6sylxY"
  },
  {
    id: "vid-reels-10",
    title: "Visual Effects & Creative Pacing",
    category: "Social Media Reels",
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
    aspectRatio: "16:9",
    externalWatchUrl: "https://www.youtube.com/watch?v=x7zH5Dnya48"
  },
  {
    id: "vid-reels-11",
    title: "Fitpaisa High-Energy Social Reels",
    clientName: "Fitpaisa",
    category: "Social Media Reels",
    subtitle: "Rhythmic Fitness Cuts & Retention Hooks",
    role: "Short-Form Editor",
    description: "High-octane mobile edits synchronized with workout beats, motion graphics metrics, and dynamic lower-third callouts.",
    thumbnail: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80",
    videoUrl: "https://www.youtube.com/watch?v=vpEr74dPJb4",
    software: ["Premiere Pro", "After Effects"],
    featured: false,
    duration: "0:30",
    date: "2024",
    aspectRatio: "16:9",
    externalWatchUrl: "https://sites.google.com/view/kushwahaanshu"
  },
  {
    id: "vid-doc-12",
    title: "R.D. Burman Documentary Visual Sequences",
    category: "Documentary Videos",
    subtitle: "Archival Restoration & Musical Rhythm Edits",
    role: "Documentary Visual Editor",
    description: "Carefully paced archival film photo treatments, subtle camera parallax passes, and rhythm-based musical editing paying tribute to legendary compositions.",
    thumbnail: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1200&q=80",
    videoUrl: "https://www.youtube.com/watch?v=nkhllsnaQGM",
    software: ["Adobe Premiere Pro", "Photoshop", "After Effects"],
    featured: false,
    date: "2023",
    aspectRatio: "16:9",
    externalWatchUrl: "https://sites.google.com/view/kushwahaanshu"
  }
];

/**
 * ============================================================================
 * 🎨 GRAPHIC DESIGN PORTFOLIO PROJECTS
 * Categories:
 * - Social Media Creatives
 * - Advertising Posters
 * - Marketing Banners
 * - Brand Designs
 * - YouTube Thumbnails
 * - Promotional Creatives
 * - Typography Designs
 * ============================================================================
 */
export const graphicProjects: Project[] = [
  {
    id: "gfx-ev-01",
    title: "Next-Gen EV Commercial Campaign Banner",
    category: "YouTube Thumbnails",
    subtitle: "Automotive Electric Vehicle Ad Creative",
    role: "Graphic & Brand Designer",
    description: "High-impact automotive commercial campaign banner featuring modern lighting highlights, dynamic angle framing, and bold typography hierarchy.",
    thumbnail: "/graphics/new-gen-ev-creative.jpg",
    aspectRatio: "1:1",
    software: ["Adobe Photoshop", "Adobe Illustrator"],
    featured: true,
    isGraphic: true,
    date: "2024"
  },
  {
    id: "gfx-skin-02",
    title: "Skin Care Brand Social Media Ad",
    category: "Social Media Creatives",
    subtitle: "Botanical Organic Cosmetic Social Campaign",
    role: "Visual Designer & Art Director",
    description: "Elegant product composition with natural lighting, soft shadow falloff, and clean typographic framing tailored for social ad conversion.",
    thumbnail: "/graphics/skincare-campaign-ad.jpg",
    aspectRatio: "1:1",
    software: ["Adobe Photoshop", "Figma"],
    featured: true,
    isGraphic: true,
    date: "2024"
  },
  {
    id: "gfx-ad1-03",
    title: "Commercial Product Promotional Banner",
    category: "Promotional Creatives",
    subtitle: "Product Marketing & Campaign Creative",
    role: "Commercial Graphic Designer",
    description: "Dynamic commercial advertisement with vibrant color grading, high-contrast focal highlights, and structured call-to-action layout.",
    thumbnail: "/graphics/commercial-ad-01.jpg",
    aspectRatio: "1:1",
    software: ["Adobe Photoshop", "Adobe Illustrator"],
    featured: false,
    isGraphic: true,
    date: "2024"
  },
  {
    id: "gfx-ad3-04",
    title: "Special Offer Product Campaign Ad",
    category: "Promotional Creatives",
    subtitle: "E-Commerce Promotional Graphic",
    role: "Promotional Creative Designer",
    description: "High-conversion digital advertisement engineered with attention-grabbing headline typography and dimensional product shadows.",
    thumbnail: "/graphics/commercial-ad-03.jpg",
    aspectRatio: "1:1",
    software: ["Adobe Photoshop", "Canva"],
    featured: false,
    isGraphic: true,
    date: "2024"
  },
  {
    id: "gfx-ad4-05",
    title: "Brand Identity Social Media Creative",
    category: "Social Media Creatives",
    subtitle: "Digital Marketing Campaign Asset",
    role: "Visual Designer",
    description: "Multi-layered promotional artwork with modern editorial aesthetics, layered textures, and bold visual contrast.",
    thumbnail: "/graphics/commercial-ad-04.jpg",
    aspectRatio: "1:1",
    software: ["Adobe Photoshop", "Figma"],
    featured: false,
    isGraphic: true,
    date: "2024"
  },
  {
    id: "gfx-coder-06",
    title: "Coder Life High-CTR Visual Banner",
    category: "Marketing Banners",
    subtitle: "Tech Creator YouTube Banner & Creative",
    role: "Thumbnail & Banner Designer",
    description: "Tech-themed editorial landscape graphic featuring neon ambient rim lighting, custom vector code elements, and focal contrast.",
    thumbnail: "/graphics/coder-life-banner.jpg",
    aspectRatio: "16:9",
    software: ["Adobe Photoshop", "Adobe Illustrator"],
    featured: true,
    isGraphic: true,
    date: "2024"
  },
  {
    id: "gfx-ps-07",
    title: "Photoshop Surreal Digital Art Composition",
    category: "Typography Designs",
    subtitle: "Digital Key Art & Photo Manipulation",
    role: "Photoshop Compositor & Visual Artist",
    description: "Multi-layered digital matte manipulation combining practical elements with atmospheric volumetric lighting and color harmonies.",
    thumbnail: "/graphics/photoshop-visual-art.jpg",
    aspectRatio: "9:16",
    software: ["Adobe Photoshop"],
    featured: false,
    isGraphic: true,
    date: "2024"
  },
  {
    id: "gfx-ccn-08",
    title: "Creative Key Art & Poster Design",
    category: "Advertising Posters",
    subtitle: "Vertical Storytelling & Editorial Art",
    role: "Art Director & Graphic Artist",
    description: "Vertical key art poster exploring surreal color palettes, subject depth extraction, and cinematic texture grading.",
    thumbnail: "/graphics/creative-composition-ccn.jpg",
    aspectRatio: "9:16",
    software: ["Adobe Photoshop", "Adobe Firefly"],
    featured: false,
    isGraphic: true,
    date: "2024"
  },
  {
    id: "gfx-thu-09",
    title: "Vertical Visual Storytelling Poster",
    category: "Advertising Posters",
    subtitle: "Mobile-First Poster & Social Creative",
    role: "Graphic Designer",
    description: "Mobile poster artwork formatted with high vertical visual flow, focal subject rim lights, and bold graphic presence.",
    thumbnail: "/graphics/story-thumbnail-thu.jpg",
    aspectRatio: "9:16",
    software: ["Adobe Photoshop", "Lightroom"],
    featured: false,
    isGraphic: true,
    date: "2024"
  },
  {
    id: "gfx-dog-10",
    title: "Character Visual Art & Pet Brand Design",
    category: "Advertising Posters",
    subtitle: "Character Key Art & Visual Framing",
    role: "Graphic Designer & Illustrator",
    description: "Subject detail enhancement with fur texture cleanup, rim lighting passes, and cinematic portrait background depth.",
    thumbnail: "/graphics/visual-character-dog.jpg",
    aspectRatio: "9:16",
    software: ["Adobe Photoshop", "Adobe Illustrator"],
    featured: false,
    isGraphic: true,
    date: "2024"
  },
  {
    id: "gfx-bottle-11",
    title: "Kids Water Bottle Product Branding Mockup",
    category: "Brand Designs",
    subtitle: "Packaging Design & 3D Product Mockup",
    role: "Packaging & Brand Designer",
    description: "Product branding and label artwork rendered on realistic 3D bottle surfaces with studio reflections and materials.",
    thumbnail: "/graphics/kids-bottle-mockup.jpg",
    aspectRatio: "1:1",
    software: ["Adobe Photoshop", "Adobe Illustrator", "Blender"],
    featured: false,
    isGraphic: true,
    date: "2024"
  },
  {
    id: "gfx-web-12",
    title: "Corporate Web Header & Promotional Banner",
    category: "Marketing Banners",
    subtitle: "Digital Marketing Header Graphic",
    role: "UI Graphic Designer",
    description: "Clean horizontal promotional banner with brand visual consistency, typography alignment, and responsive layout balance.",
    thumbnail: "/graphics/promotional-web-banner.jpg",
    aspectRatio: "banner",
    software: ["Figma", "Adobe Illustrator"],
    featured: false,
    isGraphic: true,
    date: "2024"
  }
];

export const portfolioProjects: Project[] = [...videoProjects, ...graphicProjects];

/**
 * ============================================================================
 * 🛠️ SOFTWARE & SKILLS LIST
 * - Adobe Premiere Pro
 * - Adobe After Effects
 * - Adobe Photoshop
 * - Adobe Illustrator
 * - AI Video Creation
 * - Motion Graphics
 * - Video Editing
 * - Graphic Design
 * ============================================================================
 */
export const skillsList: ToolItem[] = [
  {
    name: "Adobe Premiere Pro",
    category: "EDITING AND MOTION",
    description: "Industry-standard non-linear editing, multi-cam timeline assembly, audio beat-sync, color grading, and delivery exports.",
    iconName: "Film"
  },
  {
    name: "Adobe After Effects",
    category: "EDITING AND MOTION",
    description: "Motion graphics compositing, 3D camera tracking, kinetic typography, visual effects cleanup, and custom easing curves.",
    iconName: "Sparkles"
  },
  {
    name: "Adobe Photoshop",
    category: "DESIGN",
    description: "Advanced image manipulation, digital painting, color harmonization, subject extraction, and high-CTR thumbnail composition.",
    iconName: "Image"
  },
  {
    name: "Adobe Illustrator",
    category: "DESIGN",
    description: "Precision vector illustration, custom branding assets, iconography, scalable layout architecture, and typographic hierarchy.",
    iconName: "PenTool"
  },
  {
    name: "AI Video Creation",
    category: "AI AND CREATIVE TOOLS",
    description: "Generative AI scene synthesis, prompt direction in Higgsfield AI, cinematic lighting passes, and AI-assisted visual enhancement.",
    iconName: "Cpu"
  },
  {
    name: "Motion Graphics",
    category: "EDITING AND MOTION",
    description: "Dynamic kinetic title sequences, animated explainer elements, sleek UI animations, and seamless social loop transitions.",
    iconName: "Layers"
  },
  {
    name: "Video Editing",
    category: "EDITING AND MOTION",
    description: "Narrative structure, rhythmic speed ramps, foley sound design integration, dialogue clean-up, and pacing optimization.",
    iconName: "Film"
  },
  {
    name: "Graphic Design",
    category: "DESIGN",
    description: "Social media marketing creatives, campaign posters, packaging mockups, promotional banners, and visual identity systems.",
    iconName: "Layout"
  }
];

export const toolsData = skillsList;

/**
 * ============================================================================
 * ⚡ SERVICES (Full-Cycle Creative Capabilities)
 * ============================================================================
 */
export const servicesList: ServiceItem[] = [
  {
    id: "service-video-editing",
    title: "VIDEO EDITING",
    shortDesc: "Commercial ads, real estate walkthroughs, promotional brand cuts, and retention-engineered social media edits.",
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
    shortDesc: "AI-assisted visual concepts, generated scenes, continuous camera moves, and cutting-edge creative workflows.",
    capabilities: [
      "Generative scene synthesis with Higgsfield AI",
      "Prompt-engineered camera motion passes",
      "High-res detail injection & upscaling",
      "Adobe Firefly custom asset generation"
    ],
    iconName: "Cpu"
  },
  {
    id: "service-motion-graphics",
    title: "MOTION GRAPHICS & VFX",
    shortDesc: "Animated typography, visual effects, transitions, lower-thirds, and motion-driven storytelling.",
    capabilities: [
      "Kinetic typography & title sequences",
      "3D camera tracking & plate compositing",
      "Custom vector keyframing & easing curves",
      "Particle systems & atmospheric light passes"
    ],
    iconName: "Sparkles"
  },
  {
    id: "service-graphic-design",
    title: "GRAPHIC DESIGN",
    shortDesc: "High-conversion social creatives, advertising posters, marketing banners, and visual identities.",
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
 * 🧭 CREATIVE WORKFLOW
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
    description: "Color grade, sound mix, master, and export platform-ready deliverables.",
    details: "Final Rec.709 color finetune, audio loudness mastering (-14 LUFS), format encoding, and multi-ratio deliverables."
  }
];
