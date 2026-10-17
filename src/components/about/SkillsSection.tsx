"use client";

import SectionHeading from "@/components/ui/SectionHeading";
import { skillGroups } from "@/contents/about";
import { FiCheckCircle } from "react-icons/fi";
import { motion } from "framer-motion";
import {
  badgeItem,
  cardItem,
  fadeUp,
  sectionHeading,
  slowStaggerContainer,
  viewportOnce,
} from "@/utils/animations";

export default function SkillsSection() {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className="border-y border-gray-200/70 bg-gray-50/80 py-14 dark:border-gray-800 dark:bg-gray-900/30 md:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={sectionHeading}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <SectionHeading
            eyebrow="Technical Skills"
            title="My Development Toolkit"
            description="The tools and technologies I use in projects and continue to develop through hands-on practice."
          />
        </motion.div>
        <motion.div
          variants={slowStaggerContainer}
          className="grid gap-5 md:grid-cols-2 lg:grid-cols-3"
        >
          {skillGroups.map((group) => {
            const Icon = group.icon;

            return (
              <motion.article
                key={group.title}
                variants={cardItem}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-500/10 dark:border-gray-700 dark:bg-gray-900"
              >
                <div className="mb-5 flex items-center gap-3">
                  <motion.div
                    whileHover={{ scale: 1.08, rotate: 4 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className="flex size-11 items-center justify-center rounded-xl bg-purple-100 text-purple-700 dark:bg-purple-950 dark:text-purple-300"
                  >
                    <Icon size={22} />
                  </motion.div>

                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white">
                      {group.title}
                    </h3>
                    <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                      {group.description}
                    </p>
                  </div>
                </div>

                <motion.div
                  variants={slowStaggerContainer}
                  className="flex flex-wrap gap-2"
                >
                  {group.skills.map((skill) => (
                    <motion.span
                      key={skill}
                      variants={badgeItem}
                      className="inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-sm font-medium text-gray-700 transition hover:border-purple-300 hover:text-purple-600 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:border-purple-700 dark:hover:text-purple-300"
                    >
                      <FiCheckCircle className="shrink-0 text-purple-500" />
                      {skill}
                    </motion.span>
                  ))}
                </motion.div>
              </motion.article>
            );
          })}
        </motion.div>

        <motion.p
          variants={fadeUp}
          className="mt-6 text-sm leading-6 text-gray-500 dark:text-gray-400"
        >
          My toolkit evolves as I learn and apply new technologies in projects.
        </motion.p>
      </div>
    </motion.section>
  );
}
