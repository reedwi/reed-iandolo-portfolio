import React from "react";
import { 
  WorkflowIcon, 
  ComputerIcon,
  GraduationCapIcon,
  ConstructionIcon,
  TestTube2Icon,
  NetworkIcon
} from "lucide-react";

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
  }
] as const;

export const experiencesData = [
  {
    title: "Graduated from JMU",
    location: "Harrisonburg, VA",
    company: null,
    description:
      "Graduated from James Madison University with a BS in Geology and a Math minor.",
    icon: React.createElement(GraduationCapIcon),
    date: "2012 - 2016",
  },
  {
    title: "Quality Controller",
    location: "East Coast",
    company: "GeoStructures",
    description:
      "I worked as an on-site material tester for a commercial construction company.",
    icon: React.createElement(TestTube2Icon),
    date: "2016 - 2017",
  },
  {
    title: "Project Manager",
    company: "Garrison Homes",
    location: "Lewes, DE",
    description:
      "Responsible for end-to-end of lifecylce of the custom home building process. Included managing relationship with customer, estimating cost of project and managing project ongoing.",
    icon: React.createElement(ConstructionIcon),
    date: "2017 - 2019",
  },
  {
    title: "Technologist",
    company: "The obo Group",
    location: "Washington, DC/Remote",
    description:
      "Implemented and setup new Salesforce and HubSpot instances based on client requirements",
    icon: React.createElement(NetworkIcon),
    date: "2020 - 2020",
  },
  {
    title: "Lead Consultant",
    company: "The obo Group",
    location: "Washington, DC/Remote",
    description:
      "Understood business processes and determined ways to leverage technology to better support and improve these processes and developed Python to integrate and migrate data between various endpoints",
    icon: React.createElement(NetworkIcon),
    date: "2020 - 2021",
  },
  {
    title: "Senior Consultant",
    company: "The obo Group",
    location: "Washington, DC/Remote",
    description:
      "As a Senior Consultant, I specialized in creating robust, well-structured data pipelines using Python and building cloud infrastructure for data integrations across platforms like DigitalOcean, AWS, and Heroku. I not only implemented these architected solutions but also mentored team members in the development and execution of these designs.",
    icon: React.createElement(NetworkIcon),
    date: "2021 - 2022",
  },
  {
    title: "Principal Consultant",
    company: "The obo Group",
    location: "Washington, DC/Remote",
    description:
      "In my role as Principal Consultant, I was the technical lead on large-scale system design and API/database integration projects, focusing on Salesforce and HubSpot platforms. I was involved in projects from inception to completion, which included pre-sales discovery, requirement gathering, technical scoping, implementation, and overseeing the engineering and implementation teams. My focus ensured the delivery of well-written Python code and soundly designed systems. I also was responsible for the development of a HubSpot marketplace app has generated over 1,000 leads to date.",
    icon: React.createElement(NetworkIcon),
    date: "2022 - 2023",
  },
  {
    title: "Director of Technology",
    company: "The obo Group",
    location: "Washington, DC/Remote",
    description:
      "As the Director of Technology, I lead the technical implementation team responsible for major projects using platforms like HubSpot, Salesforce, and monday.com. Our team successfully delivers projects worth $1-2 million every quarter. I have pioneered the adoption of a new toolset that improved efficiency, cutting project times by up to 10%. Additionally, I developed an innovative application combining monday.com, Slack, OpenAI, and Langchain, which seamlessly integrates AI into business workflows. This app has notably reduced the time our sales team spends per client by approximately one hour.",
    icon: React.createElement(NetworkIcon),
    date: "2023 - Present",
  },
] as const;

export const projectsData = [
  {
    title: "YakBots",
    description:
      "App that allowed for users to upload documents in Monday, build chatbots based on those documents and then give access to the bot through a slack channel.",
    tags: ["Monday.com", "Slack", "AWS", "Python", "Supabase", "OpenAI", "Langchain", "Pinecone"],
    imageUrl: '/yakbots.png',
    link: "https://github.com/reedwi/llm-app"
  },
  {
    title: "ChatGPT for HubSpot",
    description:
      "When ChatGPT first came out, I built the first HubSpot marketplace app to allow basic access to ChatGPT from within HubSpot. This app currently has over 1k downloads.",
    tags: ["Retool", "Python", "AWS", "Supabase", "OpenAI", "ChatGPT"],
    imageUrl: '/chatgpt_hubspot.png',
    link: "https://ecosystem.hubspot.com/marketplace/apps/sales/sales-enablement/the-obo-group-chatgpt-1398072"
  },
  {
    title: "Advent of Code 2023",
    description:
      "Advent of code (adventofcode.com) is a set of problems, released each day in December. - In progress",
    tags: ["Python", "Data Structures", "Algorithms"],
    imageUrl: '/aoc.png',
    link: "https://github.com/reedwi/advent-of-code-2023/tree/master"
  },
  {
    title: "GPT from Scratch",
    description:
      "Working through the Karpathy lecture series to build micrograd and a GPT from scratch - In progress",
    tags: ["Python", "AI", "Machine Learning"],
    imageUrl: '/karpathy.png',
    link: "https://github.com/reedwi/gpt-from-scratch"
  },
  {
    title: "Proposal Up",
    description:
      "App that can take an Upwork job description and generate a proposal based on the user's skills - In progress",
    tags: ["Next.js", "Supabase", "OpenAI", "Langchain"],
    imageUrl: '/proposal_up.png',
    link: "https://github.com/reedwi/proposal-up"
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