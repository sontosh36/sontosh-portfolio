"use client";

import { motion } from "framer-motion";
import ProjectCard from "@/components/projects/ProjectCard";
import { slowStaggerContainer } from "@/utils/animations";
import type { project } from "@/types";

type ProjectGridProps = {
  projects: project[];
};

const ProjectGrid = ({ projects }: ProjectGridProps) => {
  if (projects.length === 0) {
    return (
      <p className="py-12 text-center text-gray-600 dark:text-gray-400">
        No projects available yet.
      </p>
    );
  }

  return (
    <motion.div
      variants={slowStaggerContainer}
      initial="hidden"
      animate="visible"
      viewport={{ once: true, amount: 0.15 }}
      className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7"
    >
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </motion.div>
  );
};

export default ProjectGrid;
