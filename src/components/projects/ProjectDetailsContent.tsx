"use client";

import Image from "next/image";
import Link from "next/link";
import { project } from "@/types";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { FiCode, FiLayers, FiTarget, FiZap, FiTool } from "react-icons/fi";
import {
  fadeUp,
  slowStaggerContainer,
  cardItem,
  badgeItem,
  imageReveal,
  viewportOnce,
} from "@/utils/animations";

type ProjectDetailsContentProps = {
  project: project;
};

export default function ProjectDetailsContent({
  project,
}: ProjectDetailsContentProps) {
  const hasFeatures = Boolean(project.features?.length);
  const hasChallenges = Boolean(project.challenges?.length);
  const hasProblem = Boolean(project.problem?.trim());
  const hasSolution = Boolean(project.solution?.trim());

  return (
    <main className="overflow-hidden bg-white text-gray-900 dark:bg-gray-950 dark:text-white">
      {/* 1. Project Hero */}
      <section className="relative isolate border-b border-gray-200/70 bg-gray-50/80 dark:border-gray-800 dark:bg-gray-900/30">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
        >
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute -bottom-28 -left-20 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
        </div>

        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 md:py-16 lg:px-8">
          <motion.div variants={fadeUp} initial="hidden" animate="visible" className="">
            <div className="mb-5 flex flex-wrap items-center justify-center gap-2">
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1.5 text-xs font-medium uppercase tracking-wider text-primary dark:bg-primary/10">
                <FiCode aria-hidden="true" className="h-3.5 w-3.5" />
                Project Case Study
              </span>

              {project.projectType && (
                <span className="rounded-full border border-gray-200 bg-white/80 px-3 py-1.5 text-xs font-medium text-gray-600 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300">
                  {project.projectType}
                </span>
              )}
            </div>

            <h1 className="max-w-3xl mx-auto text-3xl font-bold tracking-tight text-gray-950 dark:text-white sm:text-3xl md:text-4xl lg:text-5xl text-center">
              {project.title}
            </h1>

            <p className="mt-5 max-w-3xl mx-auto text-center text-base leading-8 text-gray-600 dark:text-gray-400 sm:text-lg">
              {project.description}
            </p>

            {project.role && (
              <p className="mt-4 text-sm text-gray-500 dark:text-gray-400 text-center">
                <span className="font-semibold text-gray-800 dark:text-gray-200">
                  Role:
                </span>{" "}
                {project.role}
              </p>
            )}

            {/* Each external destination appears only once */}
            <div className="mt-8 flex flex-wrap justify-center items-center gap-3">
              <Link
                href={project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 dark:focus-visible:ring-offset-gray-950"
              >
                Live Demo
                <FaExternalLinkAlt aria-hidden="true" className="h-3 w-3" />
              </Link>

              <Link
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white px-5 py-3 text-sm font-semibold text-gray-800 transition-colors hover:border-primary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary dark:border-gray-700 dark:bg-gray-950 dark:text-gray-200"
              >
                <FaGithub aria-hidden="true" className="h-4 w-4" />
                View Source Code
                <FaExternalLinkAlt aria-hidden="true" className="h-3 w-3" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Visual Showcase */}
      <section
        aria-label="Project preview"
        className="mx-auto max-w-7xl px-4 py-10 sm:px-6 md:py-14 lg:px-8"
      >
        <motion.div
          variants={imageReveal}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="group relative"
        >
          <div
            aria-hidden="true"
            className="absolute -inset-1 rounded-[1.4rem] bg-gradient-to-br from-primary/20 via-transparent to-primary/10 opacity-70 blur-lg transition-opacity duration-500 group-hover:opacity-100"
          />

          <div className="relative aspect-video overflow-hidden rounded-2xl border border-gray-200/80 bg-gray-100 shadow-xl shadow-gray-900/5 dark:border-gray-800 dark:bg-gray-900 dark:shadow-black/20">
            <Image
              src={project.image}
              alt={`${project.title} application preview`}
              fill
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 92vw, 1216px"
              className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.015]"
            />
          </div>
        </motion.div>
      </section>

      {/* 3. Problem and Solution */}
      {(hasProblem || hasSolution) && (
        <section className="border-y border-gray-200/70 bg-gray-50/70 dark:border-gray-800 dark:bg-gray-900/30">
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="mb-8 max-w-3xl"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">
                The thinking behind it
              </p>
              <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
                Problem &amp; Solution
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              {hasProblem && (
                <motion.article
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewportOnce}
                  className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-950/60 sm:p-8"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400">
                    <FiTarget aria-hidden="true" className="h-5 w-5" />
                  </div>

                  <h3 className="mt-5 text-xl font-bold">The Problem</h3>

                  <p className="mt-3 text-sm leading-7 text-gray-600 dark:text-gray-400 sm:text-base">
                    {project.problem}
                  </p>
                </motion.article>
              )}

              {hasSolution && (
                <motion.article
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewportOnce}
                  className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-950/60 sm:p-8"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <FiZap aria-hidden="true" className="h-5 w-5" />
                  </div>

                  <h3 className="mt-5 text-xl font-bold">The Solution</h3>

                  <p className="mt-3 text-sm leading-7 text-gray-600 dark:text-gray-400 sm:text-base">
                    {project.solution}
                  </p>
                </motion.article>
              )}
            </div>
          </div>
        </section>
      )}

      {/* 4. Features and Technology */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_0.78fr] lg:gap-16">
          {/* Features */}
          {hasFeatures && (
            <motion.div
              variants={slowStaggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
            >
              <div className="mb-7">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">
                  What it does
                </p>
                <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
                  Key Features
                </h2>
                <p className="mt-3 max-w-2xl text-sm leading-7 text-gray-600 dark:text-gray-400">
                  Core functionality implemented in this project.
                </p>
              </div>

              <div className="space-y-4">
                {project.features!.map((feature, index) => (
                  <motion.article
                    key={feature.title}
                    variants={cardItem}
                    className="flex gap-4 rounded-xl border border-gray-200 bg-white p-5 transition-colors hover:border-primary/30 dark:border-gray-800 dark:bg-gray-900/40 dark:hover:border-primary/30 sm:p-6"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-sm font-bold text-primary">
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">
                        {feature.title}
                      </h3>
                      <p className="mt-2 text-sm leading-7 text-gray-600 dark:text-gray-400">
                        {feature.description}
                      </p>
                    </div>
                  </motion.article>
                ))}
              </div>
            </motion.div>
          )}

          {/* Technology */}
          <motion.aside
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            aria-labelledby="technologies-heading"
            className={`self-start rounded-2xl border border-gray-200 bg-gray-50/80 p-6 dark:border-gray-800 dark:bg-gray-900/40 sm:p-8 ${
              !hasFeatures ? "lg:col-span-2" : ""
            }`}
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <FiLayers aria-hidden="true" className="h-5 w-5" />
            </div>

            <p className="mt-5 text-sm font-semibold uppercase tracking-[0.16em] text-primary">
              Tools &amp; technologies
            </p>

            <h2
              id="technologies-heading"
              className="mt-2 text-2xl font-bold tracking-tight"
            >
              Technology Stack
            </h2>

            <p className="mt-3 text-sm leading-7 text-gray-600 dark:text-gray-400">
              The technologies used to build and maintain this application.
            </p>

            <motion.div
              variants={slowStaggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="mt-6 flex flex-wrap gap-2"
            >
              {project.technologies.map((technology) => (
                <motion.span
                  key={technology}
                  variants={badgeItem}
                  className="inline-flex items-center rounded-lg border border-primary/15 bg-primary/5 px-3 py-2 text-sm font-medium text-primary dark:border-primary/25 dark:bg-primary/10"
                >
                  {technology}
                </motion.span>
              ))}
            </motion.div>

            <div className="mt-7 border-t border-gray-200 pt-5 dark:border-gray-800">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Technologies used
              </p>
              <p className="mt-1 text-lg font-bold tabular-nums">
                {project.technologies.length}
              </p>
            </div>
          </motion.aside>
        </div>
      </section>

      {/* 5. Technical Challenges */}
      {hasChallenges && (
        <section className="border-t border-gray-200/70 bg-gray-50/70 dark:border-gray-800 dark:bg-gray-900/30">
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="mb-8 max-w-3xl"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <FiTool aria-hidden="true" className="h-5 w-5" />
              </div>

              <p className="mt-5 text-sm font-semibold uppercase tracking-[0.16em] text-primary">
                Engineering decisions
              </p>

              <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
                Technical Challenges
              </h2>

              <p className="mt-3 text-sm leading-7 text-gray-600 dark:text-gray-400">
                Challenges encountered during development and the approaches
                used to address them.
              </p>
            </motion.div>

            <motion.div
              variants={slowStaggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="grid grid-cols-1 gap-5 md:grid-cols-2"
            >
              {project.challenges!.map((challenge) => (
                <motion.article
                  key={challenge.title}
                  variants={cardItem}
                  className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-950/60 sm:p-7"
                >
                  <h3 className="text-lg font-semibold">{challenge.title}</h3>

                  <div className="mt-4 border-l-2 border-primary/40 pl-4">
                    <p className="text-sm leading-7 text-gray-600 dark:text-gray-400">
                      {challenge.solution}
                    </p>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </section>
      )}
    </main>
  );
}
