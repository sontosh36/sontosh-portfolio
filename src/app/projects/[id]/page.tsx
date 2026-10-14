import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/contents/projects";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

type ProjectDetailsPageProps = {
  params: Promise<{ id: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

export default async function ProjectDetailsPage({
  params,
}: ProjectDetailsPageProps) {
  const { id } = await params;

  const project = projects.find((item) => item.id === id);

  if (!project) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-5xl px-4 py-12 sm:px-6 md:py-20 lg:px-8">

      <header className="mb-8">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
          Project Details
        </p>

        <h1 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-5xl">
          {project.title}
        </h1>

        <p className="mt-4 max-w-3xl text-base leading-8 text-gray-600 dark:text-gray-400">
          {project.description}
        </p>
      </header>

      <div className="relative mb-8 aspect-video overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-800">
        <Image
          src={project.image}
          alt={`${project.title} project preview`}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 960px"
          className="object-cover"
        />
      </div>

      <section aria-labelledby="technologies-heading">
        <h2
          id="technologies-heading"
          className="text-xl font-bold text-gray-900 dark:text-white"
        >
          Technologies Used
        </h2>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-lg border border-primary/15 bg-primary/5 px-3 py-2 text-sm font-medium text-primary dark:border-primary/25 dark:bg-primary/10"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>

      <div className="mt-8 flex flex-wrap gap-3">
        <Link
          href={project.githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-11 items-center gap-2 rounded-xl border border-gray-200 px-5 py-3 text-sm font-semibold text-gray-800 hover:border-primary hover:text-primary dark:border-gray-700 dark:text-white"
        >
          <FaGithub aria-hidden="true" />
          Source Code
        </Link>

        <Link
          href={project.demoLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-11 items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-white hover:bg-primary/85"
        >
          Live Demo
          <FaExternalLinkAlt aria-hidden="true" className="h-3 w-3" />
        </Link>
      </div>
    </main>
  );
}
