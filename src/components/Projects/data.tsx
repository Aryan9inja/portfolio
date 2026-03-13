import React from "react";
import { ProjectDetailsProps } from "./template";

export const projectDetails: ProjectDetailsProps[] = [
  {
    title: "Raw HTTP Server",
    description: (
      <div className="space-y-2">
        <p>
          Low-level HTTP server built from scratch without frameworks to
          understand how web servers work internally.
        </p>
        <ul className="list-disc list-inside space-y-1">
          <li>Implemented TCP socket handling and HTTP request parsing manually.</li>
          <li>Built routing, header parsing, and response generation from scratch.</li>
          <li>
            Explored networking concepts like request lifecycle, connection
            handling, and protocol-level communication.
          </li>
        </ul>
        <div>
          <h3 className="text-lg font-semibold text-highlight mb-2">
            Links for the project :
          </h3>
          <div className="flex gap-4">
            <a
              href="https://github.com/Aryan9inja/raw-http-server"
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
    technologies: ["C", "Sockets", "HTTP Protocol", "Systems Programming"],
    slug: "raw-http-server",
  },

  {
    title: "Synote",
    description: (
      <div className="space-y-2">
        <p>AI-powered note-taking platform with intelligent summarization.</p>
        <ul className="list-disc list-inside space-y-1">
          <li>Built secure REST APIs using Node.js, Express, and MongoDB.</li>
          <li>
            Integrated Mistral AI API to automatically generate concise note
            summaries.
          </li>
          <li>
            Deployed production-ready frontend on Vercel and backend on Render.
          </li>
        </ul>
        <div>
          <h3 className="text-lg font-semibold text-highlight mb-2">
            Links for the project :
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
    title: "Shutr (Social Media Platform)",
    description: (
      <div className="space-y-2">
        <p>
          Full-stack social media platform inspired by Instagram with real-time
          chat functionality.
        </p>
        <ul className="list-disc list-inside space-y-1">
          <li>
            Built real-time chat system using WebSockets supporting concurrent
            users.
          </li>
          <li>
            Implemented scalable backend services using NestJS architecture.
          </li>
          <li>
            Designed responsive mobile-first interface using React and Tailwind.
          </li>
        </ul>
        <div>
          <h3 className="text-lg font-semibold text-highlight mb-2">
            Links for the project :
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

  {
    title: "Flowceipt",
    description: (
      <div className="space-y-2">
        <p>
          SaaS platform for automated receipt management and expense tracking.
        </p>
        <ul className="list-disc list-inside space-y-1">
          <li>
            Implemented OCR-based receipt parsing with GPT-powered data
            extraction.
          </li>
          <li>
            Integrated Stripe subscriptions for secure billing and payment
            workflows.
          </li>
          <li>
            Optimized database queries and backend architecture for faster data
            processing.
          </li>
        </ul>
        <div>
          <h3 className="text-lg font-semibold text-highlight mb-2">
            Links for the project :
          </h3>
          <div className="flex gap-4">
            <a
              href="https://github.com/Aryan9inja/Flowceipt"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              Repo
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
    title: "Portly",
    description: (
      <div className="space-y-2">
        <p>
          AI-powered portfolio generator that converts resumes into responsive
          personal websites.
        </p>
        <ul className="list-disc list-inside space-y-1">
          <li>Built modern UI using Next.js and Tailwind CSS.</li>
          <li>
            Integrated MetaAI API to automatically generate portfolio content.
          </li>
          <li>
            Implemented backend services using Appwrite for authentication and
            data storage.
          </li>
        </ul>
        <div>
          <h3 className="text-lg font-semibold text-highlight mb-2">
            Links for the project :
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
    technologies: ["Next.js", "Appwrite", "Tailwind CSS", "MetaAI API"],
    slug: "portly",
  },

  {
    title: "LexGenAI",
    description: (
      <div className="space-y-2">
        <p>
          AI-powered platform that generates structured explanations and study
          material from user prompts.
        </p>
        <ul className="list-disc list-inside space-y-1">
          <li>Developed responsive UI using React and Tailwind CSS.</li>
          <li>
            Integrated language models to dynamically generate learning
            content.
          </li>
          <li>
            Designed modular architecture to support scalable AI-driven
            knowledge tools.
          </li>
        </ul>
        <div>
          <h3 className="text-lg font-semibold text-highlight mb-2">
            Links for the project :
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
    imageDark: "/projects/lexgenai.png",
    imageLight: "/projects/lexgenai_light.png",
    technologies: ["React", "Node.js", "AI APIs", "Tailwind CSS"],
    slug: "lexgenai",
  },

  {
    title: "KrishiSetu",
    description: (
      <div className="space-y-2">
        <p>
          Agricultural information platform designed to help farmers access
          crop prices and digital farming resources.
        </p>
        <ul className="list-disc list-inside space-y-1">
          <li>Developed full-stack platform using React and Node.js.</li>
          <li>Provided real-time crop pricing and agricultural insights.</li>
          <li>
            Focused on simple and accessible UX for rural and non-technical
            users.
          </li>
        </ul>
        <div>
          <h3 className="text-lg font-semibold text-highlight mb-2">
            Links for the project :
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
    imageDark: "/projects/krishisetu.png",
    imageLight: "/projects/krishisetu_light.png",
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    slug: "krishisetu",
  },
];