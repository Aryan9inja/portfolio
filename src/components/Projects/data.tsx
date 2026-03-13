import React from "react";
import { ProjectDetailsProps } from "./template";

export const projectDetails: ProjectDetailsProps[] = [
  {
    title: "Raw HTTP Server",
    description: (
      <div className="space-y-2">
        <p>
          A high-performance HTTP/1.1 server implemented from scratch in C to
          understand networking and protocol internals without relying on any
          frameworks or libraries.
        </p>
        <ul className="list-disc list-inside space-y-1">
          <li>Implemented TCP socket handling and event-driven concurrency using epoll.</li>
          <li>Built manual HTTP request parsing for GET and POST methods.</li>
          <li>Implemented header parsing, response generation, and static file serving.</li>
          <li>Explored HTTP protocol internals and Linux systems programming.</li>
        </ul>
        <div>
          <h3 className="text-lg font-semibold text-highlight mb-2">
            Links
          </h3>
          <div className="flex gap-4">
            <a
              href="https://github.com/Aryan9inja/raw-http-c"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    ),
    imageDark: "/projects/httpserver.png",
    imageLight: "/projects/httpserver_light.png",
    technologies: ["C", "Linux", "Socket Programming", "epoll", "HTTP/1.1"],
    slug: "raw-http-server",
  },

  {
    title: "Portly",
    description: (
      <div className="space-y-2">
        <p>
          An AI-powered platform that converts resumes into fully generated
          developer portfolio websites automatically.
        </p>
        <ul className="list-disc list-inside space-y-1">
          <li>Automated resume parsing and structured data extraction from PDFs.</li>
          <li>AI-driven portfolio content generation using OpenRouter LLMs.</li>
          <li>Static site generation for customizable portfolio templates.</li>
        </ul>
        <div>
          <h3 className="text-lg font-semibold text-highlight mb-2">
            Links
          </h3>
          <div className="flex gap-4">
            <a
              href="https://github.com/Aryan9inja/AppwriteHackathonProject"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              GitHub
            </a>
            <a
              href="https://portly.appwrite.network"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              Live
            </a>
          </div>
        </div>
      </div>
    ),
    imageDark: "/projects/portly.png",
    imageLight: "/projects/portly_light.png",
    technologies: ["React", "Node.js", "OpenRouter LLMs", "PDF Parsing"],
    slug: "portly",
  },

  {
    title: "LexGenAI",
    description: (
      <div className="space-y-2">
        <p>
          A retrieval-augmented AI system designed to generate legal documents
          for startups and small businesses with clause risk analysis.
        </p>
        <ul className="list-disc list-inside space-y-1">
          <li>Built a retrieval-based document generation pipeline using RAG architecture.</li>
          <li>Implemented a clause risk analysis engine using LLM APIs.</li>
          <li>Enabled exporting generated documents as PDFs.</li>
          <li>Designed contextual generation using MongoDB retrieval pipelines.</li>
        </ul>
        <div>
          <h3 className="text-lg font-semibold text-highlight mb-2">
            Links
          </h3>
          <div className="flex gap-4">
            <a
              href="https://github.com/Aryan9inja/LexGenAI"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    ),
    imageDark: "/projects/LexGenAI.png",
    imageLight: "/projects/LexGenAI.png",
    technologies: ["RAG Architecture", "MongoDB", "LLM APIs", "Node.js"],
    slug: "lexgenai",
  },

  {
    title: "KrishiSetu",
    description: (
      <div className="space-y-2">
        <p>
          A voice-based AI system that enables farmers to access agricultural
          guidance through phone calls using telephony integration and retrieval.
        </p>
        <ul className="list-disc list-inside space-y-1">
          <li>Built voice interaction through Twilio telephony integration.</li>
          <li>Implemented BM25 retrieval engine for agricultural knowledge queries.</li>
          <li>Designed for real-time query responses for non-technical rural users.</li>
          <li>Integrated speech models for voice-to-text and text-to-speech.</li>
        </ul>
        <div>
          <h3 className="text-lg font-semibold text-highlight mb-2">
            Links
          </h3>
          <div className="flex gap-4">
            <a
              href="https://github.com/Aryan9inja/KrishiSetu"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    ),
    imageDark: "/projects/krishiSetu.png",
    imageLight: "/projects/krishiSetu.png",
    technologies: ["Node.js", "Twilio", "BM25 Retrieval", "Speech Models"],
    slug: "krishisetu",
  },

  {
    title: "Flowceipt",
    description: (
      <div className="space-y-2">
        <p>
          A SaaS platform that automates receipt processing and expense tracking
          with OCR and AI-powered financial data extraction.
        </p>
        <ul className="list-disc list-inside space-y-1">
          <li>Implemented OCR-based receipt parsing with GPT-powered structured data extraction.</li>
          <li>Integrated Stripe subscriptions for secure billing and payment workflows.</li>
          <li>Optimized database queries and backend architecture for efficient data retrieval.</li>
        </ul>
        <div>
          <h3 className="text-lg font-semibold text-highlight mb-2">
            Links
          </h3>
          <div className="flex gap-4">
            <a
              href="https://github.com/Aryan9inja/Flowceipt"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    ),
    imageDark: "/projects/flowceipt.png",
    imageLight: "/projects/flowceipt_light.png",
    technologies: ["Node.js", "Express.js", "React", "Stripe", "OCR", "GPT API"],
    slug: "flowceipt",
  },

  {
    title: "Synote",
    description: (
      <div className="space-y-2">
        <p>
          A full-stack productivity platform for managing notes and tasks with
          AI-assisted summarization.
        </p>
        <ul className="list-disc list-inside space-y-1">
          <li>Secure authentication with JWT and full CRUD for notes and tasks.</li>
          <li>Rich text editor integration for a better writing experience.</li>
          <li>AI-powered note summarization using Mistral AI API.</li>
          <li>Frontend deployed on Vercel, backend deployed on Render.</li>
        </ul>
        <div>
          <h3 className="text-lg font-semibold text-highlight mb-2">
            Links
          </h3>
          <div className="flex gap-4">
            <a
              href="https://github.com/Aryan9inja/Synote-Frontend"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              Frontend
            </a>
            <a
              href="https://github.com/Aryan9inja/Synote-Backend"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              Backend
            </a>
            <a
              href="https://synote-frontend.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              Live
            </a>
          </div>
        </div>
      </div>
    ),
    imageDark: "/projects/synote.png",
    imageLight: "/projects/synote_light.png",
    technologies: ["React.js", "Node.js", "MongoDB", "Mistral AI API"],
    slug: "synote",
  },

  {
    title: "Shutr",
    description: (
      <div className="space-y-2">
        <p>
          A full-stack social media platform with real-time communication
          features and a microservice-style backend architecture.
        </p>
        <ul className="list-disc list-inside space-y-1">
          <li>Built real-time chat using WebSockets supporting concurrent users.</li>
          <li>Implemented media upload and post management features.</li>
          <li>Designed responsive mobile-first UI with React and Tailwind.</li>
          <li>Microservice-style backend with NestJS for scalable architecture.</li>
        </ul>
        <div>
          <h3 className="text-lg font-semibold text-highlight mb-2">
            Links
          </h3>
          <div className="flex gap-4">
            <a
              href="https://github.com/Aryan9inja/Shutr_Social-media-app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              Frontend
            </a>
            <a
              href="https://github.com/Aryan9inja/ChatServiceNestJs"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              Chat Service
            </a>
            <a
              href="http://shutr-social-media-app.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              Live
            </a>
          </div>
        </div>
      </div>
    ),
    imageDark: "/projects/shutr.png",
    imageLight: "/projects/shutr_light.png",
    technologies: ["React.js", "NestJS", "WebSockets", "Appwrite", "Tailwind CSS"],
    slug: "shutr",
  },
];
