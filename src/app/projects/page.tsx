import { projects } from "@/contents/projects";
import ProjectGrid from "@/components/projects/ProjectGrid";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore my web development projects, discover the technologies I use, and view source code, live demos, and project details.",
  alternates: {
    canonical: "/projects",
  },
  openGraph: {
    title: "Projects | Sontosh Kumar Sarker",
    description:
      "Explore my portfolio projects, technical implementations, tools, and technologies, with links to source code and live demos.",
    url: "/projects",
    type: "website",
  },
};
const ProjectsPage = () => {
  return (
    <main className="mx-auto min-h-screen max-w-7xl px-4 py-16 sm:px-6 md:py-20 lg:px-8">
      <header className="mb-10 max-w-7xl">
        <h1 className="text-3xl font-bold text-center text-gray-900 dark:text-white sm:text-4xl">
          Explore All <span className="text-primary">Projects</span>
        </h1>

        <p className="mt-4 text-center text-sm leading-7 text-gray-600 dark:text-gray-400 sm:text-base">
          Browse my projects, explore the technologies I use, and check out the
          source code and live demos.
        </p>
      </header>

      <ProjectGrid projects={projects}/>
    </main>
  );
};

export default ProjectsPage;
