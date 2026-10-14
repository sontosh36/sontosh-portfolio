import { project } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

type ProjectCardProps = {
  project: project;
};

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200/80 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-gray-200/50 dark:border-gray-800 dark:bg-gray-900/60 dark:hover:shadow-black/20">
      {/* Full-card details link */}
      <Link
        href={`/projects/${project.id}`}
        aria-label={`View ${project.title} project details`}
        className="absolute z-10 inset-0 rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-inset"
      />

      {/* Project Image */}
      <div className="relative aspect-[16/10] overflow-hidden bg-gray-100 dark:bg-gray-800">
        <Image
          src={project.image}
          alt={`${project.title} project preview`}
          loading="eager"
          fill
          sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        />
      </div>

      {/* Project Details */}
      <div className="relative flex flex-1 flex-col p-5 sm:p-6">
        <div className="flex-1">
          <h3 className="text-xl font-bold tracking-tight text-gray-900 transition-colors group-hover:text-primary dark:text-white">
            <Link
              href={`/projects/${project.id}`}
              className="rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              {project.title}
            </Link>
          </h3>

          <p className="mt-3 line-clamp-3 text-sm leading-7 text-gray-600 dark:text-gray-400">
            {project.description}
          </p>

          {/* Technologies */}
          <div className="mt-5 flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-lg border border-primary/15 bg-primary/5 px-2.5 py-1 text-xs font-medium text-primary dark:border-primary/25 dark:bg-primary/10"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* External Links */}
        <div className="mt-6 flex items-center gap-3 border-t border-gray-100 pt-5 dark:border-gray-800">
          <Link
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${project.title} source code on GitHub`}
            className="relative z-20 inline-flex min-h-10 flex-1 items-center justify-center gap-2 rounded-xl border border-gray-200 px-3 py-2.5 text-sm font-semibold text-gray-700 transition-colors hover:border-primary/40 hover:bg-primary/5 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary dark:border-gray-700 dark:text-gray-200 dark:hover:border-primary/40 dark:hover:text-primary"
          >
            <FaGithub aria-hidden="true" className="h-4 w-4" />
            GitHub
          </Link>

          <Link
            href={project.demoLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${project.title} live demo`}
            className="relative z-20 inline-flex min-h-10 flex-1 items-center justify-center gap-2 rounded-xl bg-primary px-3 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary/85 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 dark:focus-visible:ring-offset-gray-900"
          >
            Live Demo
            <FaExternalLinkAlt aria-hidden="true" className="h-3 w-3" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
