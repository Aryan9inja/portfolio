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
    intro: "HTTP/1.1 server built from scratch in C with epoll-based concurrency and manual request parsing",
    slug: "raw-http-server",
    featured: true,
    technologies: ["C", "Linux", "Sockets", "epoll", "HTTP/1.1"],
    githubUrl: "https://github.com/Aryan9inja/raw-http-c",
  },
  {
    imageUrldark: "/projects/portly.png",
    imageUrlLight: "/projects/portly.png",
    name: "Portly",
    intro: "AI-powered platform that converts resumes into fully generated developer portfolio websites",
    slug: "portly",
    featured: true,
    technologies: ["React", "Node.js", "OpenRouter LLMs", "PDF Parsing"],
    githubUrl: "https://github.com/Aryan9inja/AppwriteHackathonProject",
    liveUrl: "https://portly.appwrite.network",
  },
  {
    imageUrldark: "/projects/LexGenAI.png",
    imageUrlLight: "/projects/LexGenAI.png",
    name: "LexGenAI",
    intro: "Retrieval-augmented AI system that generates legal documents and performs clause risk analysis",
    slug: "lexgenai",
    featured: true,
    technologies: ["RAG", "MongoDB", "LLM APIs", "Node.js"],
    githubUrl: "https://github.com/Aryan9inja/LexGenAI",
    liveUrl: "https://lex-gen-ai.vercel.app/",
  },
  {
    imageUrldark: "/projects/krishiSetu.png",
    imageUrlLight: "/projects/krishiSetu.png",
    name: "KrishiSetu",
    intro: "Voice AI system enabling farmers to access agricultural guidance through phone calls",
    slug: "krishisetu",
    featured: true,
    technologies: ["Node.js", "Twilio", "BM25 Retrieval", "Speech Models"],
    githubUrl: "https://github.com/Aryan9inja/Krishi-Setu",
    liveUrl:"https://youtu.be/o92L3jVlEbw",
  },
  {
    imageUrldark: "/projects/flowceipt.png",
    imageUrlLight: "/projects/flowceipt_light.png",
    name: "Flowceipt",
    intro: "SaaS platform automating receipt processing with OCR and AI-powered financial data extraction",
    slug: "flowceipt",
    technologies: ["Node.js", "Express", "React", "Stripe", "OCR", "GPT API"],
    githubUrl: "https://github.com/Aryan9inja/Flowceipt",
  },
  {
    imageUrldark: "/projects/synote.png",
    imageUrlLight: "/projects/synote_light.png",
    name: "Synote",
    intro: "Full-stack note and task manager with JWT authentication and AI-powered summarization",
    slug: "synote",
    technologies: ["React", "Node.js", "MongoDB", "Mistral AI"],
    githubUrl: "https://github.com/Aryan9inja/Synote-Frontend",
    liveUrl: "https://synote-frontend.vercel.app/",
  },
  {
    imageUrldark: "/projects/shutr.png",
    imageUrlLight: "/projects/shutr_light.png",
    name: "Shutr",
    intro: "Social media platform with real-time chat, media uploads, and microservice-style backend",
    slug: "shutr",
    technologies: ["React", "NestJS", "WebSockets", "Appwrite"],
    githubUrl: "https://github.com/Aryan9inja/Shutr_Social-media-app",
    liveUrl: "http://shutr-social-media-app.vercel.app",
  },
];
