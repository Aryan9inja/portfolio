import React from "react";
import { ProjectDetailsProps } from "./template";

export const projectDetails: ProjectDetailsProps[] = [
  {
    title: "Portly",
    description: (
      <div className="space-y-2">
        <p>
          AI-powered portfolio generator that parses resumes into responsive
          websites.
        </p>
        <ul className="list-disc list-inside space-y-1">
          <li>Built interactive dashboards using Next.js + Tailwind CSS.</li>
          <li>Integrated MetaAI API for automated portfolio generation.</li>
          <li>
            Focused on clean UI/UX and fast deployment with Appwrite backend.
          </li>
        </ul>
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
            Live Demo
          </a>
        </div>
      </div>
    ),
    imageDark: "/projects/portly.png",
    imageLight: "/projects/portly_light.png",
    technologies: ["React.js", "Appwrite", "Tailwind CSS", "MetaAI API"],
    slug: "portly",
  },
  {
    title: "Synote",
    description: (
      <div className="space-y-2">
        <p>Full-stack SaaS app for note-taking and AI-powered summaries.</p>
        <ul className="list-disc list-inside space-y-1">
          <li>Developed JWT-secured REST APIs with Node.js + MongoDB.</li>
          <li>
            Integrated Mistral AI API to reduce note size by ~40% via summaries.
          </li>
          <li>
            Deployed frontend (Vercel) and backend (Render) with CI/CD
            pipelines.
          </li>
        </ul>
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
    ),
    imageDark: "/projects/synote.png",
    imageLight: "/projects/synote_light.png",
    technologies: ["React.js", "Node.js", "MongoDB", "Mistral AI API"],
    slug: "synote",
  },
  {
    title: "Shutr (Social Media App)",
    description: (
      <div className="space-y-2">
        <p>Instagram-like social media app with real-time features.</p>
        <ul className="list-disc list-inside space-y-1">
          <li>
            Built real-time chat using WebSockets supporting 50+ concurrent
            users.
          </li>
          <li>
            Implemented secure media uploads and scalable backend with NestJS
            services.
          </li>
          <li>Designed responsive, mobile-first UI using Tailwind CSS.</li>
        </ul>
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
    ),
    imageDark: "/projects/shutr.png",
    imageLight: "/projects/shutr_light.png",
    technologies: [
      "React.js",
      "NestJS",
      "WebSockets",
      "Appwrite",
      "Tailwind CSS",
    ],
    slug: "shutr",
  },
  {
    title: "Flowceipt",
    description: (
      <div className="space-y-2">
        <p>Receipt management and payment automation system.</p>
        <ul className="list-disc list-inside space-y-1">
          <li>
            Automated receipt processing using OCR + GPT API achieving 90%+
            accuracy.
          </li>
          <li>Integrated Stripe Subscriptions for secure payment flows.</li>
          <li>
            Optimized Supabase queries for 30% faster data retrieval and smooth
            UX.
          </li>
        </ul>
        <div className="flex gap-4">
          <a
            href="https://github.com/Aryan9inja/Flowceipt"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline"
          >
            Repo Link
          </a>
        </div>
      </div>
    ),
    imageDark: "/projects/flowceipt.png",
    imageLight: "/projects/flowceipt_light.png",
    technologies: [
      "Node.js",
      "Express.js",
      "React",
      "Stripe",
      "OCR",
      "GPT API",
    ],
    slug: "flowceipt",
  },
];
