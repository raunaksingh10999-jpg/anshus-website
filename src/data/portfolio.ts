import { PersonalInfo, Project, ServiceItem, WorkflowStep, ToolItem } from '../types';

/**
 * ============================================================================
 * 🎬 MASTER PORTFOLIO CONFIGURATION - ANSHU SINGH KUSHWAHA
 * ============================================================================
 */

export const personalInfo: PersonalInfo = {
  name: "ANSHU KUSHWAHA",
  brandTagline: "Video Editor & Graphic Designer",
  eyebrow: "VIDEO EDITOR & GRAPHIC DESIGNER",
  headline: "ANSHU KUSHWAHA",
  supportingDescription: "I’m Anshu Kushwaha, a passionate Video Editor & Graphic Designer who loves creating engaging and creative visuals. I have worked on YouTube videos, podcasts, intros, and Instagram reels, helping creators and brands share their stories in a better way. My focus is always on making content that connects with people and leaves a lasting impression.",
  
  // Exact About Me content from prompt
  bio: "I’m Anshu Kushwaha, a passionate Video Editor & Graphic Designer who loves creating engaging and creative visuals. I have worked on YouTube videos, podcasts, intros, and Instagram reels, helping creators and brands share their stories in a better way. My focus is always on making content that connects with people and leaves a lasting impression.",
  
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
    "id": "vid-comm-01",
    "title": "Dynamic Promotional Brand Commercial",
    "category": "Commercial Ads",
    "subtitle": "Commercial Brand Social Showcase",
    "role": "Lead Commercial Video Editor",
    "description": "High-conversion promotional video edit featuring kinetic typography, high-impact b-roll sequencing, and modern audio mixing to elevate brand presence.",
    "thumbnail": "https://i.ytimg.com/vi/YbGrJJWTR9A/hqdefault.jpg",
    "videoUrl": "https://www.youtube.com/watch?v=YbGrJJWTR9A",
    "section": "Video Editing",
    "platform": "youtube",
    "software": [
      "Adobe Premiere Pro",
      "Photoshop",
      "After Effects"
    ],
    "featured": true,
    "duration": "0:45",
    "date": "2024",
    "aspectRatio": "16:9",
    "externalWatchUrl": "https://www.youtube.com/watch?v=YbGrJJWTR9A"
  },
  {
    "id": "vid-realestate-02",
    "title": "Luxury Real Estate Architectural Reel",
    "category": "Real Estate Videos",
    "subtitle": "Property Walkthrough & Architectural Pacing",
    "role": "Video Editor & Colorist",
    "description": "Smooth architectural pacing, sky replacements, ambient interior soundscapes, and warm cinematic LUT grading tailored for high-end properties.",
    "thumbnail": "https://i.ytimg.com/vi/vpEr74dPJb4/hqdefault.jpg",
    "videoUrl": "https://www.youtube.com/watch?v=vpEr74dPJb4",
    "section": "Video Editing",
    "platform": "youtube",
    "software": [
      "Adobe Premiere Pro",
      "After Effects",
      "DaVinci Resolve"
    ],
    "featured": true,
    "duration": "0:45",
    "date": "2024",
    "aspectRatio": "16:9",
    "externalWatchUrl": "https://www.youtube.com/watch?v=vpEr74dPJb4"
  },
  {
    "id": "vid-cinematic-03",
    "title": "Cinematic Visual Reel & Narrative",
    "category": "Brand Promotional Videos",
    "subtitle": "High-Retention Visual Storytelling",
    "role": "Lead Video Editor & Colorist",
    "description": "Crafted for maximum visual impact using dynamic pacing, seamless sound integration, and cinematic mood color grading to captivate viewers from the opening frame.",
    "thumbnail": "https://i.ytimg.com/vi/nkhllsnaQGM/hqdefault.jpg",
    "videoUrl": "https://www.youtube.com/watch?v=nkhllsnaQGM",
    "section": "Video Editing",
    "platform": "youtube",
    "software": [
      "Adobe Premiere Pro",
      "After Effects",
      "Photoshop"
    ],
    "featured": true,
    "duration": "0:30",
    "date": "2024",
    "aspectRatio": "16:9",
    "externalWatchUrl": "https://www.youtube.com/watch?v=nkhllsnaQGM"
  },
  {
    "id": "vid-comm-04",
    "title": "Commercial Cinematic Ad Cut",
    "category": "Commercial Ads",
    "subtitle": "Brand Commercial & Visual Pacing",
    "role": "Commercial Video Editor",
    "description": "Dynamic brand commercial edit featuring sound-driven visual cuts, smooth camera motions, and premium color finish.",
    "thumbnail": "https://i.ytimg.com/vi/fgpSRnlxDaA/hqdefault.jpg",
    "videoUrl": "https://www.youtube.com/watch?v=fgpSRnlxDaA",
    "section": "Video Editing",
    "platform": "youtube",
    "software": [
      "Adobe Premiere Pro",
      "After Effects"
    ],
    "featured": true,
    "duration": "0:40",
    "date": "2024",
    "aspectRatio": "16:9",
    "externalWatchUrl": "https://www.youtube.com/watch?v=fgpSRnlxDaA"
  },
  {
    "id": "vid-brand-05",
    "title": "Brand Narrative & Color Grading",
    "category": "Brand Promotional Videos",
    "subtitle": "Cinematic Film Tone & Rhythm",
    "role": "Video Editor & Colorist",
    "description": "Rich cinematic color tones, rhythmic cross-cutting, and immersive audio staging designed to elevate brand identity.",
    "thumbnail": "https://i.ytimg.com/vi/dhqMcjBOIcE/hqdefault.jpg",
    "videoUrl": "https://www.youtube.com/watch?v=dhqMcjBOIcE",
    "section": "Video Editing",
    "platform": "youtube",
    "software": [
      "Adobe Premiere Pro",
      "DaVinci Resolve"
    ],
    "featured": false,
    "duration": "0:35",
    "date": "2024",
    "aspectRatio": "16:9",
    "externalWatchUrl": "https://www.youtube.com/watch?v=dhqMcjBOIcE"
  },
  {
    "id": "vid-food-06",
    "title": "Dahi Kachori Culinary Commercial",
    "category": "Commercial Ads",
    "subtitle": "Culinary & Food Commercial Edit",
    "role": "Commercial Video Editor",
    "description": "Appetite-driven food cinematography edit featuring macro speed ramps, sizzle foley effects, and vibrant warm color grade.",
    "thumbnail": "https://i.ytimg.com/vi/79LH9TdOjik/hqdefault.jpg",
    "videoUrl": "https://www.youtube.com/watch?v=79LH9TdOjik",
    "section": "Video Editing",
    "platform": "youtube",
    "software": [
      "Adobe Premiere Pro",
      "After Effects"
    ],
    "featured": false,
    "duration": "0:25",
    "date": "2024",
    "aspectRatio": "16:9",
    "externalWatchUrl": "https://www.youtube.com/watch?v=79LH9TdOjik"
  },
  {
    "id": "vid-comm-07",
    "title": "High-Impact Commercial Showcase",
    "category": "Commercial Ads",
    "subtitle": "Product Feature & Dynamic Sequence",
    "role": "Video Editor",
    "description": "Fast-paced commercial promotional edit spotlighting product workflow benefits, UI callouts, and clean branded transitions.",
    "thumbnail": "https://i.ytimg.com/vi/BKKLZH-oZ8A/hqdefault.jpg",
    "videoUrl": "https://www.youtube.com/watch?v=BKKLZH-oZ8A",
    "section": "Video Editing",
    "platform": "youtube",
    "software": [
      "Adobe Premiere Pro",
      "After Effects"
    ],
    "featured": false,
    "duration": "0:30",
    "date": "2024",
    "aspectRatio": "16:9",
    "externalWatchUrl": "https://www.youtube.com/watch?v=BKKLZH-oZ8A"
  },
  {
    "id": "vid-travel-08",
    "title": "Cinematic Travel & Lifestyle Sequence",
    "category": "Brand Promotional Videos",
    "subtitle": "Atmospheric Visual Montage",
    "role": "Visual Editor",
    "description": "Atmospheric location b-roll montage with seamless speed ramps, natural sound design, and sun-drenched cinematic grading.",
    "thumbnail": "https://i.ytimg.com/vi/1USQYkzWCIE/hqdefault.jpg",
    "videoUrl": "https://www.youtube.com/watch?v=1USQYkzWCIE",
    "section": "Video Editing",
    "platform": "youtube",
    "software": [
      "Adobe Premiere Pro",
      "After Effects"
    ],
    "featured": false,
    "duration": "0:35",
    "date": "2024",
    "aspectRatio": "16:9",
    "externalWatchUrl": "https://www.youtube.com/watch?v=1USQYkzWCIE"
  },
  {
    "id": "vid-doc-09",
    "title": "Documentary Visual Rhythm Sequence",
    "category": "Documentary Videos",
    "subtitle": "Archival Restoration & Musical Rhythm Edits",
    "role": "Documentary Visual Editor",
    "description": "Carefully paced archival film photo treatments, subtle camera parallax passes, and rhythm-based musical editing paying tribute to legendary compositions.",
    "thumbnail": "https://i.ytimg.com/vi/6hDEdPNHTBY/hqdefault.jpg",
    "videoUrl": "https://www.youtube.com/watch?v=6hDEdPNHTBY",
    "section": "Video Editing",
    "platform": "youtube",
    "software": [
      "Adobe Premiere Pro",
      "Photoshop",
      "After Effects"
    ],
    "featured": false,
    "duration": "0:30",
    "date": "2023",
    "aspectRatio": "16:9",
    "externalWatchUrl": "https://www.youtube.com/watch?v=6hDEdPNHTBY"
  },
  {
    "id": "vid-v-01",
    "title": "Reels Motion Graphic Sequence & Title",
    "category": "Motion Graphics",
    "subtitle": "Custom Vector Animation & Kinetic Titles",
    "role": "Motion Graphics Designer",
    "description": "Reels motion graphic piece featuring smooth vector keyframing, custom easing curves, icon animations, and clean visual branding.",
    "thumbnail": "https://i.ytimg.com/vi/Urfi2yMevbo/hqdefault.jpg",
    "videoUrl": "https://www.youtube.com/watch?v=Urfi2yMevbo",
    "section": "Reels Motion Graphic",
    "platform": "youtube",
    "software": [
      "Adobe After Effects",
      "Adobe Illustrator"
    ],
    "featured": true,
    "duration": "0:20",
    "date": "2024",
    "aspectRatio": "9:16",
    "externalWatchUrl": "https://www.youtube.com/watch?v=Urfi2yMevbo"
  },
  {
    "id": "vid-v-02",
    "title": "Kinetic Motion Graphic & Brand Identity",
    "category": "Motion Graphics",
    "subtitle": "Modern Brand Visual Language",
    "role": "Motion Designer",
    "description": "Modern kinetic motion graphics sequence built with sleek UI design elements, animated typography, and seamless loop transitions.",
    "thumbnail": "https://i.ytimg.com/vi/1zGvq1A5AJ4/hqdefault.jpg",
    "videoUrl": "https://www.youtube.com/watch?v=1zGvq1A5AJ4",
    "section": "Reels Motion Graphic",
    "platform": "youtube",
    "software": [
      "Adobe After Effects",
      "Figma",
      "Premiere Pro"
    ],
    "featured": true,
    "duration": "0:22",
    "date": "2024",
    "aspectRatio": "9:16",
    "externalWatchUrl": "https://www.youtube.com/watch?v=1zGvq1A5AJ4"
  },
  {
    "id": "vid-v-03",
    "title": "Viral Retention Hook & Fast Cut",
    "category": "Social Media Reels",
    "subtitle": "Hook Optimization & Motion Typography",
    "role": "Short-Form Retention Editor",
    "description": "Fast-paced short-form video structured with a 3-second visual hook, text callouts, sound effects, and retention-maximizing cut frequency.",
    "thumbnail": "https://i.ytimg.com/vi/kDtfX6sylxY/hqdefault.jpg",
    "videoUrl": "https://www.youtube.com/watch?v=kDtfX6sylxY",
    "section": "Reels and Shorts",
    "platform": "youtube",
    "software": [
      "Adobe Premiere Pro",
      "Illustrator",
      "After Effects"
    ],
    "featured": true,
    "duration": "0:28",
    "date": "2024",
    "aspectRatio": "9:16",
    "externalWatchUrl": "https://www.youtube.com/watch?v=kDtfX6sylxY"
  },
  {
    "id": "vid-v-04",
    "title": "Visual Effects & Creative Pacing",
    "category": "Social Media Reels",
    "subtitle": "Motion Tracking & Particle Enhancement",
    "role": "VFX & Compositing Artist",
    "description": "Incorporating motion tracking, screen element replacements, subtle particle overlays, and AI-assisted visual enhancement for a high-concept edit.",
    "thumbnail": "https://i.ytimg.com/vi/x7zH5Dnya48/hqdefault.jpg",
    "videoUrl": "https://www.youtube.com/watch?v=x7zH5Dnya48",
    "section": "Reels and Shorts",
    "platform": "youtube",
    "software": [
      "Adobe After Effects",
      "Photoshop",
      "Higgsfield AI"
    ],
    "featured": true,
    "duration": "0:35",
    "date": "2024",
    "aspectRatio": "9:16",
    "externalWatchUrl": "https://www.youtube.com/watch?v=x7zH5Dnya48"
  },
  {
    "id": "vid-v-05",
    "title": "X-Ray Visual Effects Creative Sequence",
    "category": "Social Media Reels",
    "subtitle": "Creative VFX & Anatomical Graphics",
    "role": "VFX Artist & Editor",
    "description": "High-impact visual effects sequence combining practical human movement with stylized x-ray graphical layers and kinetic sound cues.",
    "thumbnail": "https://i.ytimg.com/vi/fqtB0xPKQnA/hqdefault.jpg",
    "videoUrl": "https://www.youtube.com/watch?v=fqtB0xPKQnA",
    "section": "Reels and Shorts",
    "platform": "youtube",
    "software": [
      "Adobe After Effects",
      "Photoshop"
    ],
    "featured": false,
    "duration": "0:25",
    "date": "2024",
    "aspectRatio": "9:16",
    "externalWatchUrl": "https://www.youtube.com/watch?v=fqtB0xPKQnA"
  },
  {
    "id": "vid-v-06",
    "title": "Fashion & Portrait Mobile Reel",
    "category": "Social Media Reels",
    "subtitle": "Editorial Portrait Motion",
    "role": "Short-Form Video Editor",
    "description": "Vertical fashion creative cut timed to rhythmic bass pulses with dynamic crop zoom transitions and sleek typography.",
    "thumbnail": "https://i.ytimg.com/vi/9NWuuSMBRMw/hqdefault.jpg",
    "videoUrl": "https://www.youtube.com/watch?v=9NWuuSMBRMw",
    "section": "Reels and Shorts",
    "platform": "youtube",
    "software": [
      "Adobe Premiere Pro",
      "After Effects"
    ],
    "featured": false,
    "duration": "0:20",
    "date": "2024",
    "aspectRatio": "9:16",
    "externalWatchUrl": "https://www.youtube.com/watch?v=9NWuuSMBRMw"
  },
  {
    "id": "vid-v-07",
    "title": "Dynamic Rhythmic Speed Ramp Reel",
    "category": "Social Media Reels",
    "subtitle": "Precision Speed Ramping & Audio Sync",
    "role": "Short-Form Editor",
    "description": "High-energy speed transitions matching keyframe velocity curves to sound effects for maximum viewer retention.",
    "thumbnail": "https://i.ytimg.com/vi/oraWo7ywvTQ/hqdefault.jpg",
    "videoUrl": "https://www.youtube.com/watch?v=oraWo7ywvTQ",
    "section": "Reels and Shorts",
    "platform": "youtube",
    "software": [
      "Adobe Premiere Pro",
      "After Effects"
    ],
    "featured": false,
    "duration": "0:24",
    "date": "2024",
    "aspectRatio": "9:16",
    "externalWatchUrl": "https://www.youtube.com/watch?v=oraWo7ywvTQ"
  },
  {
    "id": "vid-v-08",
    "title": "Kinetic Motion & Transition Sequence",
    "category": "Motion Graphics",
    "subtitle": "Custom Vector Animation & Kinetic Titles",
    "role": "Motion Designer",
    "description": "Custom animated geometric elements, lower-thirds, and visual graphic swipes designed for mobile screen impact.",
    "thumbnail": "https://i.ytimg.com/vi/I4GnHyw16PQ/hqdefault.jpg",
    "videoUrl": "https://www.youtube.com/watch?v=I4GnHyw16PQ",
    "section": "Reels and Shorts",
    "platform": "youtube",
    "software": [
      "Adobe After Effects",
      "Illustrator"
    ],
    "featured": false,
    "duration": "0:22",
    "date": "2024",
    "aspectRatio": "9:16",
    "externalWatchUrl": "https://www.youtube.com/watch?v=I4GnHyw16PQ"
  },
  {
    "id": "vid-v-09",
    "title": "Creative Storytelling Short-Form Cut",
    "category": "Social Media Reels",
    "subtitle": "Narrative Pacing & Visual Hook",
    "role": "Visual Storyteller",
    "description": "Tight micro-story structure using seamless invisible cut techniques and dramatic sound atmosphere.",
    "thumbnail": "https://i.ytimg.com/vi/M38ycyBzlZI/hqdefault.jpg",
    "videoUrl": "https://www.youtube.com/watch?v=M38ycyBzlZI",
    "section": "Reels and Shorts",
    "platform": "youtube",
    "software": [
      "Adobe Premiere Pro",
      "After Effects"
    ],
    "featured": false,
    "duration": "0:30",
    "date": "2024",
    "aspectRatio": "9:16",
    "externalWatchUrl": "https://www.youtube.com/watch?v=M38ycyBzlZI"
  },
  {
    "id": "vid-v-10",
    "title": "Brand Identity Social Reel",
    "category": "Social Media Reels",
    "subtitle": "Brand Promotional Social Cut",
    "role": "Video Editor",
    "description": "Polished social promotional piece designed for high brand recognition with modern split-screens and typography.",
    "thumbnail": "https://i.ytimg.com/vi/JsammWNf74w/hqdefault.jpg",
    "videoUrl": "https://www.youtube.com/watch?v=JsammWNf74w",
    "section": "Reels and Shorts",
    "platform": "youtube",
    "software": [
      "Adobe Premiere Pro",
      "Photoshop"
    ],
    "featured": false,
    "duration": "0:20",
    "date": "2024",
    "aspectRatio": "9:16",
    "externalWatchUrl": "https://www.youtube.com/watch?v=JsammWNf74w"
  },
  {
    "id": "vid-v-11",
    "title": "Viral Sound-Synced Edit Hook",
    "category": "Social Media Reels",
    "subtitle": "Beat-Synced Dynamic Motion",
    "role": "Short-Form Editor",
    "description": "Every cut synchronized to sound wave peaks to trigger immediate visual engagement and replayability.",
    "thumbnail": "https://i.ytimg.com/vi/SaQ3a57syuE/hqdefault.jpg",
    "videoUrl": "https://www.youtube.com/watch?v=SaQ3a57syuE",
    "section": "Reels and Shorts",
    "platform": "youtube",
    "software": [
      "Adobe Premiere Pro",
      "After Effects"
    ],
    "featured": false,
    "duration": "0:18",
    "date": "2024",
    "aspectRatio": "9:16",
    "externalWatchUrl": "https://www.youtube.com/watch?v=SaQ3a57syuE"
  },
  {
    "id": "vid-v-12",
    "title": "Visual Hook & High-Engagement Reel",
    "category": "Social Media Reels",
    "subtitle": "Engagement Optimization Cut",
    "role": "Retention Editor",
    "description": "Designed around a strong pattern-interrupt opening frame, dynamic captions, and fast visual payoff.",
    "thumbnail": "https://i.ytimg.com/vi/PdqU155la7c/hqdefault.jpg",
    "videoUrl": "https://www.youtube.com/watch?v=PdqU155la7c",
    "section": "Reels and Shorts",
    "platform": "youtube",
    "software": [
      "Adobe Premiere Pro",
      "After Effects"
    ],
    "featured": false,
    "duration": "0:25",
    "date": "2024",
    "aspectRatio": "9:16",
    "externalWatchUrl": "https://www.youtube.com/watch?v=PdqU155la7c"
  },
  {
    "id": "vid-v-13",
    "title": "Cyberpunk & AI Motion Sequence",
    "category": "AI Generated Videos",
    "subtitle": "Continuous Spatial Movement & Prompt Direction",
    "role": "AI Prompt & Visual Concept Artist",
    "description": "Synthesizing dynamic continuous camera movement, cinematic neon lighting passes, and textural consistency using generative video models.",
    "thumbnail": "https://i.ytimg.com/vi/H6lxNEGWYhY/hqdefault.jpg",
    "videoUrl": "https://www.youtube.com/watch?v=H6lxNEGWYhY",
    "section": "Reels and Shorts",
    "platform": "youtube",
    "software": [
      "Higgsfield AI",
      "Midjourney",
      "After Effects"
    ],
    "featured": false,
    "duration": "0:30",
    "date": "2024",
    "aspectRatio": "9:16",
    "externalWatchUrl": "https://www.youtube.com/watch?v=H6lxNEGWYhY"
  },
  {
    "id": "vid-v-14",
    "title": "Urban Street Style Short Cut",
    "category": "Social Media Reels",
    "subtitle": "Fast-Paced Urban Lifestyle Reel",
    "role": "Short-Form Editor",
    "description": "Raw cinematic handheld feel enhanced with match cuts, whip transitions, and modern street aesthetics.",
    "thumbnail": "https://i.ytimg.com/vi/0h1XQYoEH9Q/hqdefault.jpg",
    "videoUrl": "https://www.youtube.com/watch?v=0h1XQYoEH9Q",
    "section": "Reels and Shorts",
    "platform": "youtube",
    "software": [
      "Adobe Premiere Pro",
      "After Effects"
    ],
    "featured": false,
    "duration": "0:22",
    "date": "2024",
    "aspectRatio": "9:16",
    "externalWatchUrl": "https://www.youtube.com/watch?v=0h1XQYoEH9Q"
  },
  {
    "id": "vid-v-15",
    "title": "Cinematic Mood & Color Grade Reel",
    "category": "Social Media Reels",
    "subtitle": "Colorist & Mood Grading",
    "role": "Colorist & Editor",
    "description": "Deep shadows, warm golden skin tones, and rich contrast curves designed specifically for OLED smartphone displays.",
    "thumbnail": "https://i.ytimg.com/vi/QYvzYr0hz60/hqdefault.jpg",
    "videoUrl": "https://www.youtube.com/watch?v=QYvzYr0hz60",
    "section": "Reels and Shorts",
    "platform": "youtube",
    "software": [
      "DaVinci Resolve",
      "Premiere Pro"
    ],
    "featured": false,
    "duration": "0:28",
    "date": "2024",
    "aspectRatio": "9:16",
    "externalWatchUrl": "https://www.youtube.com/watch?v=QYvzYr0hz60"
  },
  {
    "id": "vid-v-16",
    "title": "High-Energy Workout & Fitness Short",
    "category": "Social Media Reels",
    "subtitle": "Rhythmic Fitness Cuts & Retention Hooks",
    "role": "Short-Form Editor",
    "description": "High-octane mobile edits synchronized with workout beats, motion graphics metrics, and dynamic lower-third callouts.",
    "thumbnail": "https://i.ytimg.com/vi/-_gmBLYFNcY/hqdefault.jpg",
    "videoUrl": "https://www.youtube.com/watch?v=-_gmBLYFNcY",
    "section": "Reels and Shorts",
    "platform": "youtube",
    "software": [
      "Premiere Pro",
      "After Effects"
    ],
    "featured": false,
    "duration": "0:30",
    "date": "2024",
    "aspectRatio": "9:16",
    "externalWatchUrl": "https://www.youtube.com/watch?v=-_gmBLYFNcY"
  },
  {
    "id": "vid-v-17",
    "title": "Typography Beat-Sync Sequence",
    "category": "Motion Graphics",
    "subtitle": "Kinetic Typography & Sound Design",
    "role": "Motion Designer",
    "description": "Bold kinetic word reveals bouncing precisely with audio transients, creating an engaging audiovisual experience.",
    "thumbnail": "https://i.ytimg.com/vi/3bzU7i2TGXc/hqdefault.jpg",
    "videoUrl": "https://www.youtube.com/watch?v=3bzU7i2TGXc",
    "section": "Reels and Shorts",
    "platform": "youtube",
    "software": [
      "Adobe After Effects",
      "Illustrator"
    ],
    "featured": false,
    "duration": "0:20",
    "date": "2024",
    "aspectRatio": "9:16",
    "externalWatchUrl": "https://www.youtube.com/watch?v=3bzU7i2TGXc"
  },
  {
    "id": "vid-v-18",
    "title": "Fast-Cut Social Media Creative",
    "category": "Social Media Reels",
    "subtitle": "High-Engagement Short-Form Video",
    "role": "Retention Editor",
    "description": "Micro-cuts and graphic callouts structured for viral TikTok, YouTube Shorts, and Instagram Reels reach.",
    "thumbnail": "https://i.ytimg.com/vi/jd6wBtD9G1c/hqdefault.jpg",
    "videoUrl": "https://www.youtube.com/watch?v=jd6wBtD9G1c",
    "section": "Reels Motion Graphic",
    "platform": "youtube",
    "software": [
      "Adobe Premiere Pro",
      "After Effects"
    ],
    "featured": false,
    "duration": "0:25",
    "date": "2024",
    "aspectRatio": "9:16",
    "externalWatchUrl": "https://www.youtube.com/watch?v=jd6wBtD9G1c"
  },
  {
    "id": "vid-v-19",
    "title": "Creative Visual Pacing & Foley",
    "category": "Social Media Reels",
    "subtitle": "Sound Design & Pacing Enhancement",
    "role": "Sound Designer & Editor",
    "description": "Layered foley effects, whooshes, and impact risers timed to on-screen micro-actions.",
    "thumbnail": "https://i.ytimg.com/vi/6mkOh9dUnys/hqdefault.jpg",
    "videoUrl": "https://www.youtube.com/watch?v=6mkOh9dUnys",
    "section": "Reels Motion Graphic",
    "platform": "youtube",
    "software": [
      "Adobe Premiere Pro",
      "Audition"
    ],
    "featured": false,
    "duration": "0:26",
    "date": "2024",
    "aspectRatio": "9:16",
    "externalWatchUrl": "https://www.youtube.com/watch?v=6mkOh9dUnys"
  },
  {
    "id": "vid-v-20",
    "title": "Sound Design & Motion Graphic Hook",
    "category": "Motion Graphics",
    "subtitle": "Motion Graphics & Kinetic Transitions",
    "role": "Motion Graphics Artist",
    "description": "Fluid easing curve animations, animated icons, and impactful title cards.",
    "thumbnail": "https://i.ytimg.com/vi/VSCwu_uF-yg/hqdefault.jpg",
    "videoUrl": "https://www.youtube.com/watch?v=VSCwu_uF-yg",
    "section": "Reels Motion Graphic",
    "platform": "youtube",
    "software": [
      "Adobe After Effects",
      "Illustrator"
    ],
    "featured": false,
    "duration": "0:24",
    "date": "2024",
    "aspectRatio": "9:16",
    "externalWatchUrl": "https://www.youtube.com/watch?v=VSCwu_uF-yg"
  },
  {
    "id": "vid-v-21",
    "title": "Product Showcase Vertical Reel",
    "category": "Social Media Reels",
    "subtitle": "Mobile Commercial Reel",
    "role": "Commercial Editor",
    "description": "Sleek product reveal with ambient lighting highlights, dynamic zooms, and clean modern typographic overlay.",
    "thumbnail": "https://i.ytimg.com/vi/78wv9KXon3w/hqdefault.jpg",
    "videoUrl": "https://www.youtube.com/watch?v=78wv9KXon3w",
    "section": "Reels Motion Graphic",
    "platform": "youtube",
    "software": [
      "Adobe Premiere Pro",
      "After Effects"
    ],
    "featured": false,
    "duration": "0:28",
    "date": "2024",
    "aspectRatio": "9:16",
    "externalWatchUrl": "https://www.youtube.com/watch?v=78wv9KXon3w"
  }
];

export const graphicProjects: Project[] = [
  {
    "id": "gfx-ev-01",
    "title": "Next-Gen EV Commercial Campaign Banner",
    "category": "YouTube Thumbnails",
    "subtitle": "Automotive Electric Vehicle Ad Creative",
    "role": "Graphic & Brand Designer",
    "description": "High-impact automotive commercial campaign banner featuring modern lighting highlights, dynamic angle framing, and bold typography hierarchy.",
    "thumbnail": "/graphics/works/New_Gen_EV_1.jpg",
    "aspectRatio": "1:1",
    "software": [
      "Adobe Photoshop",
      "Adobe Illustrator"
    ],
    "featured": true,
    "isGraphic": true,
    "section": "Graphic",
    "date": "2024"
  },
  {
    "id": "gfx-skin-02",
    "title": "Botanical Organic Skincare Social Ad",
    "category": "Social Media Creatives",
    "subtitle": "Organic Cosmetic Social Campaign",
    "role": "Visual Designer & Art Director",
    "description": "Elegant product composition with natural lighting, soft shadow falloff, and clean typographic framing tailored for social ad conversion.",
    "thumbnail": "/graphics/works/Skin-Care-1.jpg",
    "aspectRatio": "1:1",
    "software": [
      "Adobe Photoshop",
      "Figma"
    ],
    "featured": true,
    "isGraphic": true,
    "section": "Graphic",
    "date": "2024"
  },
  {
    "id": "gfx-ad1-03",
    "title": "Commercial Product Advertisement 01",
    "category": "Promotional Creatives",
    "subtitle": "Product Marketing & Campaign Creative",
    "role": "Commercial Graphic Designer",
    "description": "Dynamic commercial advertisement with vibrant color grading, high-contrast focal highlights, and structured call-to-action layout.",
    "thumbnail": "/graphics/works/Ads_1.jpg",
    "aspectRatio": "1:1",
    "software": [
      "Adobe Photoshop",
      "Adobe Illustrator"
    ],
    "featured": false,
    "isGraphic": true,
    "section": "Graphic",
    "date": "2024"
  },
  {
    "id": "gfx-ad3-04",
    "title": "Special Offer Product Campaign Ad 03",
    "category": "Promotional Creatives",
    "subtitle": "E-Commerce Promotional Graphic",
    "role": "Promotional Creative Designer",
    "description": "High-conversion digital advertisement engineered with attention-grabbing headline typography and dimensional product shadows.",
    "thumbnail": "/graphics/works/Ads_3.jpg",
    "aspectRatio": "1:1",
    "software": [
      "Adobe Photoshop",
      "Canva"
    ],
    "featured": false,
    "isGraphic": true,
    "section": "Graphic",
    "date": "2024"
  },
  {
    "id": "gfx-ad4-05",
    "title": "Brand Identity Social Creative 04",
    "category": "Social Media Creatives",
    "subtitle": "Digital Marketing Campaign Asset",
    "role": "Visual Designer",
    "description": "Multi-layered promotional artwork with modern editorial aesthetics, layered textures, and bold visual contrast.",
    "thumbnail": "/graphics/works/Ads_4.jpg",
    "aspectRatio": "1:1",
    "software": [
      "Adobe Photoshop",
      "Figma"
    ],
    "featured": false,
    "isGraphic": true,
    "section": "Graphic",
    "date": "2024"
  },
  {
    "id": "gfx-bottle-06",
    "title": "Kids Water Bottle 3D Product Mockup",
    "category": "Brand Designs",
    "subtitle": "Packaging Design & 3D Product Mockup",
    "role": "Packaging & Brand Designer",
    "description": "Product branding and label artwork rendered on realistic 3D bottle surfaces with studio reflections and materials.",
    "thumbnail": "/graphics/works/8a.-Kids-Water-Bottle-Mokup.jpg",
    "aspectRatio": "1:1",
    "software": [
      "Adobe Photoshop",
      "Adobe Illustrator",
      "Blender"
    ],
    "featured": false,
    "isGraphic": true,
    "section": "Graphic",
    "date": "2024"
  },
  {
    "id": "gfx-post-07",
    "title": "Digital Marketing Social Post",
    "category": "Social Media Creatives",
    "subtitle": "High-CTR Social Creative",
    "role": "Graphic Designer",
    "description": "Clean modern social media post layout with balanced typographic contrast and brand accents.",
    "thumbnail": "/graphics/works/Post.png",
    "aspectRatio": "1:1",
    "software": [
      "Adobe Photoshop",
      "Figma"
    ],
    "featured": false,
    "isGraphic": true,
    "section": "Graphic",
    "date": "2024"
  },
  {
    "id": "gfx-car-08",
    "title": "Social Carousel Slide 01: Headline & Hook",
    "category": "Social Media Creatives",
    "subtitle": "Multi-Slide Editorial Carousel",
    "role": "Content & Visual Designer",
    "description": "First slide of educational social carousel engineered for high thumb-stopping power on LinkedIn and Instagram.",
    "thumbnail": "/graphics/works/First.jpg",
    "aspectRatio": "1:1",
    "software": [
      "Adobe Photoshop",
      "Illustrator"
    ],
    "featured": false,
    "isGraphic": true,
    "section": "Graphic",
    "date": "2024"
  },
  {
    "id": "gfx-car-09",
    "title": "Social Carousel Slide 02: Educational Insights",
    "category": "Social Media Creatives",
    "subtitle": "Multi-Slide Editorial Carousel",
    "role": "Content & Visual Designer",
    "description": "Structured information hierarchy presenting complex creative workflows in easily digestible visual blocks.",
    "thumbnail": "/graphics/works/Second.jpg",
    "aspectRatio": "1:1",
    "software": [
      "Adobe Photoshop",
      "Illustrator"
    ],
    "featured": false,
    "isGraphic": true,
    "section": "Graphic",
    "date": "2024"
  },
  {
    "id": "gfx-car-10",
    "title": "Social Carousel Slide 03: Process & Frameworks",
    "category": "Social Media Creatives",
    "subtitle": "Multi-Slide Editorial Carousel",
    "role": "Content & Visual Designer",
    "description": "Step-by-step breakdown illustrating motion design and video editing pipelines.",
    "thumbnail": "/graphics/works/Third.jpg",
    "aspectRatio": "1:1",
    "software": [
      "Adobe Photoshop",
      "Illustrator"
    ],
    "featured": false,
    "isGraphic": true,
    "section": "Graphic",
    "date": "2024"
  },
  {
    "id": "gfx-car-11",
    "title": "Social Carousel Slide 04: Visual Demonstrations",
    "category": "Social Media Creatives",
    "subtitle": "Multi-Slide Editorial Carousel",
    "role": "Content & Visual Designer",
    "description": "Comparison and visual demonstration slide demonstrating before/after editing quality.",
    "thumbnail": "/graphics/works/Forth.jpg",
    "aspectRatio": "1:1",
    "software": [
      "Adobe Photoshop",
      "Illustrator"
    ],
    "featured": false,
    "isGraphic": true,
    "section": "Graphic",
    "date": "2024"
  },
  {
    "id": "gfx-car-12",
    "title": "Social Carousel Slide 05: Practical Tips",
    "category": "Social Media Creatives",
    "subtitle": "Multi-Slide Editorial Carousel",
    "role": "Content & Visual Designer",
    "description": "Actionable creative tips for video editors and creators seeking retention improvements.",
    "thumbnail": "/graphics/works/Fifth.jpg",
    "aspectRatio": "1:1",
    "software": [
      "Adobe Photoshop",
      "Illustrator"
    ],
    "featured": false,
    "isGraphic": true,
    "section": "Graphic",
    "date": "2024"
  },
  {
    "id": "gfx-car-13",
    "title": "Social Carousel Slide 06: Key Takeaways",
    "category": "Social Media Creatives",
    "subtitle": "Multi-Slide Editorial Carousel",
    "role": "Content & Visual Designer",
    "description": "Summary slide distilling the core lessons into high-retention bullet points.",
    "thumbnail": "/graphics/works/Sixth.jpg",
    "aspectRatio": "1:1",
    "software": [
      "Adobe Photoshop",
      "Illustrator"
    ],
    "featured": false,
    "isGraphic": true,
    "section": "Graphic",
    "date": "2024"
  },
  {
    "id": "gfx-car-14",
    "title": "Social Carousel Slide 07: Follow & Outro CTA",
    "category": "Social Media Creatives",
    "subtitle": "Multi-Slide Editorial Carousel",
    "role": "Content & Visual Designer",
    "description": "Concluding call-to-action slide formatted for social saves, shares, and client inquiry generation.",
    "thumbnail": "/graphics/works/Last-page.jpg",
    "aspectRatio": "1:1",
    "software": [
      "Adobe Photoshop",
      "Illustrator"
    ],
    "featured": false,
    "isGraphic": true,
    "section": "Graphic",
    "date": "2024"
  },
  {
    "id": "gfx-ccn-15",
    "title": "Creative Key Art & Poster Design",
    "category": "Advertising Posters",
    "subtitle": "Vertical Storytelling & Editorial Art",
    "role": "Art Director & Graphic Artist",
    "description": "Vertical key art poster exploring surreal color palettes, subject depth extraction, and cinematic texture grading.",
    "thumbnail": "/graphics/works/CC_N.jpg",
    "aspectRatio": "9:16",
    "software": [
      "Adobe Photoshop",
      "Adobe Firefly"
    ],
    "featured": true,
    "isGraphic": true,
    "section": "Graphic",
    "date": "2024"
  },
  {
    "id": "gfx-ps-16",
    "title": "Photoshop Surreal Digital Art Composition",
    "category": "Typography Designs",
    "subtitle": "Digital Key Art & Photo Manipulation",
    "role": "Photoshop Compositor & Visual Artist",
    "description": "Multi-layered digital matte manipulation combining practical elements with atmospheric volumetric lighting and color harmonies.",
    "thumbnail": "/graphics/works/Ps.jpg",
    "aspectRatio": "9:16",
    "software": [
      "Adobe Photoshop"
    ],
    "featured": true,
    "isGraphic": true,
    "section": "Graphic",
    "date": "2024"
  },
  {
    "id": "gfx-dog-17",
    "title": "Character Visual Art & Pet Brand Design",
    "category": "Advertising Posters",
    "subtitle": "Character Key Art & Visual Framing",
    "role": "Graphic Designer & Illustrator",
    "description": "Subject detail enhancement with fur texture cleanup, rim lighting passes, and cinematic portrait background depth.",
    "thumbnail": "/graphics/works/Dog.jpg",
    "aspectRatio": "9:16",
    "software": [
      "Adobe Photoshop",
      "Adobe Illustrator"
    ],
    "featured": false,
    "isGraphic": true,
    "section": "Graphic",
    "date": "2024"
  },
  {
    "id": "gfx-thu-18",
    "title": "Vertical Visual Storytelling Poster",
    "category": "Advertising Posters",
    "subtitle": "Mobile-First Poster & Social Creative",
    "role": "Graphic Designer",
    "description": "Mobile poster artwork formatted with high vertical visual flow, focal subject rim lights, and bold graphic presence.",
    "thumbnail": "/graphics/works/Thu.jpg",
    "aspectRatio": "9:16",
    "software": [
      "Adobe Photoshop",
      "Lightroom"
    ],
    "featured": false,
    "isGraphic": true,
    "section": "Graphic",
    "date": "2024"
  },
  {
    "id": "gfx-art2-19",
    "title": "Digital Artwork & Editorial Key Poster",
    "category": "Advertising Posters",
    "subtitle": "Digital Painting & Key Visual",
    "role": "Digital Artist",
    "description": "Stylized portrait composition with volumetric brushwork, dramatic rim lights, and artistic character expression.",
    "thumbnail": "/graphics/works/2.jpg",
    "aspectRatio": "9:16",
    "software": [
      "Adobe Photoshop",
      "Illustrator"
    ],
    "featured": false,
    "isGraphic": true,
    "section": "Graphic",
    "date": "2024"
  },
  {
    "id": "gfx-coder-20",
    "title": "Coder Life High-CTR Visual Banner",
    "category": "Marketing Banners",
    "subtitle": "Tech Creator YouTube Banner & Creative",
    "role": "Thumbnail & Banner Designer",
    "description": "Tech-themed editorial landscape graphic featuring neon ambient rim lighting, custom vector code elements, and focal contrast.",
    "thumbnail": "/graphics/works/coder-life-3.jpg",
    "aspectRatio": "16:9",
    "software": [
      "Adobe Photoshop",
      "Adobe Illustrator"
    ],
    "featured": true,
    "isGraphic": true,
    "section": "Graphic",
    "date": "2024"
  },
  {
    "id": "gfx-web1-21",
    "title": "Corporate Web Header & Promotional Banner 01",
    "category": "Marketing Banners",
    "subtitle": "Digital Marketing Header Graphic",
    "role": "UI Graphic Designer",
    "description": "Clean horizontal promotional banner with brand visual consistency, typography alignment, and responsive layout balance.",
    "thumbnail": "/graphics/works/Page_1.jpg",
    "aspectRatio": "banner",
    "software": [
      "Figma",
      "Adobe Illustrator"
    ],
    "featured": false,
    "isGraphic": true,
    "section": "Graphic",
    "date": "2024"
  },
  {
    "id": "gfx-web2-22",
    "title": "Corporate Web Header & Promotional Banner 02",
    "category": "Marketing Banners",
    "subtitle": "Digital Marketing Secondary Banner",
    "role": "UI Graphic Designer",
    "description": "Secondary promotional banner formatted for wide desktop hero headers and digital ad placements.",
    "thumbnail": "/graphics/works/Third_.jpg",
    "aspectRatio": "banner",
    "software": [
      "Figma",
      "Adobe Illustrator"
    ],
    "featured": false,
    "isGraphic": true,
    "section": "Graphic",
    "date": "2024"
  },
  {
    "id": "gfx-cardf-23",
    "title": "Brand Identity Business Card (Front)",
    "category": "Brand Designs",
    "subtitle": "Stationery & Corporate Branding",
    "role": "Brand Identity Designer",
    "description": "Minimalist corporate business card design with embossed typography details and balanced spacing.",
    "thumbnail": "/graphics/works/Card-Front.jpg",
    "aspectRatio": "16:9",
    "software": [
      "Adobe Illustrator",
      "Photoshop"
    ],
    "featured": false,
    "isGraphic": true,
    "section": "Graphic",
    "date": "2024"
  },
  {
    "id": "gfx-cardb-24",
    "title": "Brand Identity Business Card (Back)",
    "category": "Brand Designs",
    "subtitle": "Stationery & Corporate Branding",
    "role": "Brand Identity Designer",
    "description": "Reverse layout of business card featuring brand logo mark and modern layout architecture.",
    "thumbnail": "/graphics/works/Card-Back.jpg",
    "aspectRatio": "16:9",
    "software": [
      "Adobe Illustrator",
      "Photoshop"
    ],
    "featured": false,
    "isGraphic": true,
    "section": "Graphic",
    "date": "2024"
  },
  {
    "id": "gfx-statf-25",
    "title": "Corporate Stationery Brand Identity (Front)",
    "category": "Brand Designs",
    "subtitle": "Corporate Brand Collateral",
    "role": "Brand Identity Designer",
    "description": "Executive stationery design engineered for cohesive corporate communications.",
    "thumbnail": "/graphics/works/Front.jpg",
    "aspectRatio": "16:9",
    "software": [
      "Adobe Illustrator",
      "Photoshop"
    ],
    "featured": false,
    "isGraphic": true,
    "section": "Graphic",
    "date": "2024"
  },
  {
    "id": "gfx-statb-26",
    "title": "Corporate Stationery Brand Identity (Back)",
    "category": "Brand Designs",
    "subtitle": "Corporate Brand Collateral",
    "role": "Brand Identity Designer",
    "description": "Cohesive branded reverse collateral completing the corporate visual identity system.",
    "thumbnail": "/graphics/works/Back.jpg",
    "aspectRatio": "16:9",
    "software": [
      "Adobe Illustrator",
      "Photoshop"
    ],
    "featured": false,
    "isGraphic": true,
    "section": "Graphic",
    "date": "2024"
  },
  {
    "id": "gfx-chips-27",
    "title": "Chips Packet Packaging Design Mockup",
    "category": "Brand Designs",
    "subtitle": "FMCG Food Packaging Design",
    "role": "Packaging & Brand Designer",
    "description": "Vibrant commercial snack packaging design with dynamic flavor splash graphics, bold typographic branding, and metallic pouch reflections.",
    "thumbnail": "/graphics/works/7.-Chips-Packet-design-Moke-up3x.jpg",
    "aspectRatio": "1:1",
    "software": [
      "Adobe Illustrator",
      "Adobe Photoshop"
    ],
    "featured": true,
    "isGraphic": true,
    "section": "Graphic",
    "date": "2024"
  },
  {
    "id": "gfx-firodiya-28",
    "title": "Firodiya Event & Stage Visual Poster",
    "category": "Advertising Posters",
    "subtitle": "Large Format Cultural Event Poster",
    "role": "Key Visual & Poster Designer",
    "description": "High-resolution large-format stage poster created for prestigious cultural event showcasing dramatic composition and thematic lighting.",
    "thumbnail": "/graphics/works/2200Firodiya_1-.jpg",
    "aspectRatio": "9:16",
    "software": [
      "Adobe Photoshop",
      "Adobe Illustrator"
    ],
    "featured": true,
    "isGraphic": true,
    "section": "Graphic",
    "date": "2023"
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
