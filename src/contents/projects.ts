import type { project } from "@/types";

export const projects: project[] = [
  {
    id: "loan-management-web-app",
    title: "Loan Management Web App",
    description:
      "A responsive web application designed to present project information, technical skills, and professional work through a clean interface.",

    image: "/loan-management.png",

    technologies: [
      "React.js",
      "MongoDB",
      "Stripe",
      "Express.js",
      "Tailwind CSS",
      "Firebase",
      "REST APIs"
    ],

    githubLink: "https://github.com/sontosh36/fund-stack-client.git",
    demoLink: "https://fund-stack-d7266.web.app",

    projectType: "Course Project",
    role: "Full Stack Developer",

    problem:
      "Repeated loan applications and reloan requests resulted in duplicate database records, leading to data consistency issues in the loan management workflow.",

    solution:
      "Implemented Stripe Payment Intents and integrated payment handling logic to improve transaction reliability and prevent duplicate loan records across application and reloan workflows.",

    features: [
      {
        title: "Stripe Payment System Integration",
        description:
          "Integrated Stripe to enable secure online payments, handle payment processing, and provide users with a reliable checkout experience.",
      },
      {
        title: "Roll-based Management System",
        description:
          "Implemented role-based access control to manage user permissions and restrict features based on assigned roles.",
      },
      {
        title: "Dynamic data fetching and caching",
        description:
          "Implemented dynamic data fetching and caching to improve data availability, reduce unnecessary network requests, and enhance application performance.",
      },
    ],

    challenges: [
      {
        title: "Maintaining consistent layouts",
        solution:
          "Used reusable components and shared Tailwind CSS design patterns to keep the interface consistent.",
      },
      {
        title: "Organizing project content",
        solution:
          "Kept project information in a centralized data file so content can be updated independently of the page layout.",
      },
    ],
  },
];
