export interface ProjectProps {
  imageUrldark: string;
  imageUrlLight: string;
  name: string;
  intro: string;
  slug: string;
  featured?: boolean;
  technologies?: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export const Projects: ProjectProps[] = [
  {
    imageUrldark: "/projects/httpserver.png",
    imageUrlLight: "/projects/httpserver_light.png",
    name: "Raw HTTP Server",
    intro: "HTTP server built from scratch using low-level socket programming in C",
    slug: "raw-http-server",
    featured: true,
    technologies: ["C", "Sockets", "HTTP Protocol"],
    githubUrl: "https://github.com/Aryan9inja/raw-http-c",
  },
  {
    imageUrldark: "/projects/portly.png",
    imageUrlLight: "/projects/portly_light.png",
    name: "Portly",
    intro: "AI-powered resume-to-portfolio website generator",
    slug: "portly",
    featured: true,
    technologies: ["Next.js", "Appwrite", "MetaAI API", "Tailwind CSS"],
    githubUrl: "https://github.com/Aryan9inja/AppwriteHackathonProject",
    liveUrl: "https://portly.appwrite.network",
  },
  {
    imageUrldark: "/projects/LexGenAI.png",
    imageUrlLight: "/projects/LexGenAI.png",
    name: "LexGenAI",
    intro: "AI platform that generates structured learning content",
    slug: "lexgenai",
    featured: true,
    technologies: ["React", "Node.js", "AI APIs", "Tailwind CSS"],
    githubUrl: "https://github.com/Aryan9inja/LexGenAI",
  },
  {
    imageUrldark: "/projects/flowceipt.png",
    imageUrlLight: "/projects/flowceipt_light.png",
    name: "Flowceipt",
    intro: "AI-powered receipt processing and expense management system",
    slug: "flowceipt",
    technologies: ["Node.js", "Express", "React", "Stripe", "GPT API"],
    githubUrl: "https://github.com/Aryan9inja/Flowceipt",
  },
  {
    imageUrldark: "/projects/synote.png",
    imageUrlLight: "/projects/synote_light.png",
    name: "Synote",
    intro: "AI-powered note-taking platform with intelligent summaries",
    slug: "synote",
    technologies: ["React", "Node.js", "MongoDB", "Mistral AI"],
    githubUrl: "https://github.com/Aryan9inja/Synote-Frontend",
    liveUrl: "https://synote-frontend.vercel.app/",
  },
  {
    imageUrldark: "/projects/shutr.png",
    imageUrlLight: "/projects/shutr_light.png",
    name: "Shutr",
    intro: "Instagram-inspired social media platform with real-time chat",
    slug: "shutr",
    technologies: ["React", "NestJS", "WebSockets", "Appwrite"],
    githubUrl: "https://github.com/Aryan9inja/Shutr_Social-media-app",
    liveUrl: "http://shutr-social-media-app.vercel.app",
  },
  {
    imageUrldark: "/projects/krishiSetu.png",
    imageUrlLight: "/projects/krishiSetu.png",
    name: "KrishiSetu",
    intro: "Agricultural platform helping farmers access crop data and insights",
    slug: "krishisetu",
    featured: true,
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    githubUrl: "https://github.com/Aryan9inja/KrishiSetu",
  },
];
