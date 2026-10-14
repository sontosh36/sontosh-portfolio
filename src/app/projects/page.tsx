import { projects } from "@/contents/projects";
import ProjectCard from "@/components/projects/ProjectCard";

const ProjectsPage = () => {
  return (
    <main className="mx-auto min-h-screen max-w-7xl px-4 py-16 sm:px-6 md:py-20 lg:px-8">
      <header className="mb-10 max-w-7xl">
        <h1 className="text-3xl font-bold text-center text-gray-900 dark:text-white sm:text-4xl">
          Explore All <span className="text-primary">Projects</span>
        </h1>

        <p className="mt-4 text-center text-sm leading-7 text-gray-600 dark:text-gray-400 sm:text-base">
          Browse my projects, explore the technologies I use,
          and check out the source code and live demos.
        </p>
      </header>

      {projects.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      ) : (
        <p className="py-12 text-center text-gray-600 dark:text-gray-400">
          No projects available yet.
        </p>
      )}
    </main>
  );
};

export default ProjectsPage;