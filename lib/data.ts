import React from "react";
import { 
  WorkflowIcon, 
  ComputerIcon,
  GraduationCapIcon,
  ConstructionIcon
} from "lucide-react";
// import corpcommentImg from "@/public/corpcomment.png";
// import rmtdevImg from "@/public/rmtdev.png";
// import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated from James Madison Universitry",
    location: "Miami, FL",
    description:
      "Graduated from JMU with a BS in Geology and a Math minor.",
    icon: React.createElement(GraduationCapIcon),
    date: "2016",
  },
  {
    title: "Quality Control",
    location: "All along the east coast",
    description:
      "I worked as an on-site material tester for a commercial construction company.",
    icon: React.createElement(ConstructionIcon),
    date: "2016 - 2017",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(ComputerIcon),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "YakBots",
    description:
      "App that allowed for users to upload documents in Monday, build chatbots based on those documents and then give access to the bot through a slack channel.",
    tags: ["Monday.com", "Slack", "AWS", "Python", "Supabase", "OpenAI", "Langchain", "Pinecone"],
    imageUrl: '/yakbots.png',
  },
  {
    title: "ChatGPT for HubSpot",
    description:
      "When ChatGPT first came out, I built the first HubSpot marketplace app to allow basic access to ChatGPT from withing HubSpot. This app currently has over 1k downloads.",
    tags: ["Retool", "Python", "AWS", "Supabase", "OpenAI", "ChatGPT"],
    imageUrl: '/chatgpt_hubspot.png',
  },
  {
    title: "GPT from Scratch",
    description:
      "Working through the Karpathy lecture series to build micrograd and a GPT from scratch - In progress",
    tags: ["Python", "AI", "Machine Learning"],
    imageUrl: '/karpathy.png',
  },
  {
    title: "Proposal Up",
    description:
      "App that can take an Upwork job description and generate a proposal based on the user's skills - In progress",
    tags: ["Next.js", "Supabase", "OpenAI", "Langchain"],
    imageUrl: '/proposal_up.png',
  },
] as const;

export const skillsData = [
  "Leadership",
  "Business Process Strategy",
  "Python",
  "Salesforce",
  "HubSpot",
  "Monday.com",
  "LLMs",
  "Data Engineering",
  "SQL",
  "Postgres",
  "Next.js"
] as const;