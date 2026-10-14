import { EducationItem, JourneyItem, ServiceItem, SkillGroup } from "@/types/about";
import {
  FiBookOpen,
  FiCode,
  FiDatabase,
  FiLayout,
  FiLayers,
  FiMonitor,
  FiTarget,
} from "react-icons/fi";

export const journey: JourneyItem[] = [
  {
    period: "01 / The Beginning",
    title: "Learning the Fundamentals",
    description:
      "Started exploring HTML, CSS, and JavaScript to understand the foundations of the web and how interactive websites work.",
    icon: FiBookOpen,
  },
  {
    period: "02 / Growing Skills",
    title: "Discovering Modern Frontend",
    description:
      "Moved into React, component-based development, responsive layouts, and reusable UI patterns.",
    icon: FiLayout,
  },
  {
    period: "03 / Hands-on Practice",
    title: "Building Web Projects",
    description:
      "Applied my learning by building practical projects and exploring Next.js, TypeScript, API integration, and authentication.",
    icon: FiCode,
  },
];

export const services: ServiceItem[] = [
  {
    title: "Frontend Development",
    description:
      "Creating responsive, accessible interfaces with reusable components and consistent design systems.",
    icon: FiMonitor,
    tags: ["React", "Next.js", "Tailwind CSS"],
  },
  {
    title: "UI Implementation",
    description:
      "Turning design concepts into clean layouts with thoughtful spacing, typography, and interactions.",
    icon: FiLayers,
    tags: ["Responsive UI", "Component Design"],
  },
  {
    title: "Web App Integration",
    description:
      "Connecting interfaces with APIs, authentication, and services to support practical user flows.",
    icon: FiDatabase,
    tags: ["REST APIs", "Firebase"],
  },
];

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    description: "User interfaces and web experiences",
    icon: FiMonitor,
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "DaisyUI",
      "shadcn"
    ],
  },
  {
    title: "Backend & Database",
    description: "Application data and integrations",
    icon: FiDatabase,
    skills: ["Node", "Express", "MongoDB", "Firebase", "REST APIs"],
  },
  {
    title: "Tools & Workflow",
    description: "Development and collaboration",
    icon: FiCode,
    skills: ["Git", "GitHub", "VS Code", "npm", "Postman"],
  },
];

export const education: EducationItem[] = [
  {
    degree: "Bachelor of Business Adminstration",
    institution: "National University",
    period: "2022 – 2027",
    description:
      "Add your relevant coursework, academic interests, or achievements.",
  },
];

export const currentFocus = [
  {
    title: "Next.js & TypeScript",
    description:
      "Improving application structure, type safety, and reusable components.",
    icon: FiCode,
  },
  {
    title: "Clean UI & Accessibility",
    description:
      "Building responsive, accessible, and consistent user experiences.",
    icon: FiLayout,
  },
  {
    title: "Real-world Projects",
    description:
      "Practicing API integration, authentication, and maintainable code.",
    icon: FiTarget,
  },
];
