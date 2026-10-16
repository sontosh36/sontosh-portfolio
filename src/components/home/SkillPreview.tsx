"use client";

import {
  SiExpress,
  SiFigma,
  SiFirebase,
  SiGit,
  SiGithub,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { motion } from "framer-motion";
import {
  badgeItem,
  cardItem,
  fastStaggerContainer,
  slowStaggerContainer,
  viewportOnce,
} from "@/utils/animations";

const skillCategories = [
  {
    title: "Frontend Development",
    skills: [
      { name: "React", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "TypeScript", icon: SiTypescript },
      { name: "JavaScript", icon: SiJavascript },
      { name: "Tailwind CSS", icon: SiTailwindcss },
    ],
  },
  {
    title: "Backend Development",
    skills: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express.js", icon: SiExpress },
    ],
  },
  {
    title: "Database & Services",
    skills: [
      { name: "MongoDB", icon: SiMongodb },
      { name: "Firebase", icon: SiFirebase },
    ],
  },
  {
    title: "Tools & Workflow",
    skills: [
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
      { name: "Figma", icon: SiFigma },
    ],
  },
];
const SkillPreview = () => {
  return (
    <section id="skills" className="py-14 md:py-20 max-w-7xl mx-auto px-4">
      {/* Section Header */}
      <motion.div
        variants={cardItem}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="max-w-3xl mx-auto text-center"
      >
        {/* Section Label */}
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
          Skills & Technologies
        </p>

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
          Technologies I Use to{" "}
          <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
            Build & Create
          </span>
        </h2>

        {/* Description */}
        <p className="mt-5 text-base md:text-lg leading-8 text-gray-600 dark:text-gray-300">
          A collection of technologies and tools I use to build modern,
          responsive and user-friendly web applications.
        </p>
      </motion.div>

      {/* Skills Grid */}
      <motion.div
        variants={slowStaggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 mt-10 md:mt-14"
      >
        {skillCategories.map((category) => (
          <motion.div
            key={category.title}
            variants={cardItem}
            whileHover={{ y: -4 }}
            className="group rounded-2xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/50 p-5 sm:p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10"
          >
            {/* Category Header */}
            <div className="flex items-center justify-between mb-5">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">
                {category.title}
              </h3>

              {/* Gradient Line */}
              <div className="h-[2px] w-10 sm:w-14 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 transition-all duration-300 group-hover:w-20" />
            </div>

            {/* Skills */}
            <motion.div
              variants={fastStaggerContainer}
              className="flex flex-wrap gap-3"
            >
              {category.skills.map((skill) => {
                const Icon = skill.icon;

                return (
                  <motion.div
                    variants={badgeItem}
                    whileHover={{ y: -3, scale: 1.02 }}
                    key={skill.name}
                    className="group/skill flex items-center gap-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 px-3.5 py-2.5 sm:px-4 sm:py-3 transition-all duration-300 hover:-translate-y-1 hover:border-purple-400/50 dark:hover:border-purple-500/50 hover:shadow-md hover:shadow-purple-500/10"
                  >
                    <Icon className="text-lg text-gray-600 dark:text-gray-300 transition-colors duration-300 group-hover/skill:text-purple-500" />

                    <span className="text-sm font-medium text-gray-700 dark:text-gray-200 transition-colors duration-300 group-hover/skill:text-gray-900 dark:group-hover/skill:text-white">
                      {skill.name}
                    </span>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default SkillPreview;
