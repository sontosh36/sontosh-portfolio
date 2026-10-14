"use client";

import { projects } from "@/contents/projects";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { FiFolder } from "react-icons/fi";
import ProjectCard from "../projects/ProjectCard";

const project_Limit = 3;

const FeaturedProjects = () => {
  const featuredProjects = projects.slice(0, project_Limit);

  return (
    <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 md:py-20 lg:px-8">
      {/* Section Header */}
      <div className="mb-10 flex flex-col text-center gap-4 sm:mb-12">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
          Featured Projects
          <span className="text-primary">.</span>
        </h2>

        <p className="mt-4 text-sm leading-7 text-gray-600 dark:text-gray-400 sm:text-base">
          A selection of projects that showcase my skills in building modern,
          responsive, and user-friendly web applications.
        </p>
      </div>

      {/* Project Grid */}
      {featuredProjects.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:gap-7">
          {featuredProjects.map((project) => (
             <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      ) : (
        <div className="rounded-2xl border border-dashed border-gray-300 px-6 py-12 text-center dark:border-gray-700">
          <FiFolder
            aria-hidden="true"
            className="mx-auto h-8 w-8 text-gray-400"
          />
          <p className="mt-3 font-medium text-gray-700 dark:text-gray-300">
            Projects are coming soon.
          </p>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            Check back later to explore my work.
          </p>
        </div>
      )}

      {/* Bottom CTA */}
      {featuredProjects.length > 0 && (
        <div className="mt-10 flex justify-center md:mt-12">
          <Link
            href="/projects"
            className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white px-6 py-3 text-sm font-semibold text-gray-800 transition-all hover:border-primary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-200 dark:hover:border-primary dark:hover:text-primary dark:focus-visible:ring-offset-gray-950"
          >
            Explore all projects
            <FaArrowRight
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>
      )}
    </section>
  );
};

export default FeaturedProjects;
