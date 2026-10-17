"use client";

import SectionHeading from "@/components/ui/SectionHeading";
import { journey } from "./../../contents/about";
import { motion } from "framer-motion";
import {
  fadeUp,
  sectionHeading,
  slowStaggerContainer,
  viewportOnce,
} from "@/utils/animations";

export default function DevelopmentJourney() {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
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
            eyebrow="My Journey"
            title="Learning, Building, Growing."
            description="Every project and learning milestone helps me understand the web better and become a more confident developer."
          />
        </motion.div>

        <motion.div
          variants={slowStaggerContainer}
          className="relative space-y-6 before:absolute before:bottom-8 before:left-5 before:top-8 before:w-px before:bg-gradient-to-b before:from-pink-400 before:via-purple-500 before:to-indigo-500 sm:before:left-6"
        >
          {journey.map((item) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.title}
                variants={fadeUp}
                className="group relative flex gap-4 sm:gap-6"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="relative z-10 flex size-10 shrink-0 items-center justify-center rounded-xl border border-purple-200 bg-white text-purple-600 shadow-sm transition duration-300 group-hover:scale-110 dark:border-gray-700 dark:bg-gray-900 dark:text-purple-400 sm:size-12"
                >
                  <Icon size={21} />
                </motion.div>

                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="flex-1 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-500/10 dark:border-gray-700 dark:bg-gray-900 sm:p-7"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.15em] text-purple-600 dark:text-purple-400">
                    {item.period}
                  </p>

                  <h3 className="mt-2 text-lg font-bold text-gray-900 dark:text-white sm:text-xl">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-gray-600 dark:text-gray-300 sm:text-base">
                    {item.description}
                  </p>
                </motion.div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </motion.section>
  );
}
