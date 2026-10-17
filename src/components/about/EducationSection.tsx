"use client";

import SectionHeading from "@/components/ui/SectionHeading";
import { education } from "@/contents/about";
import { FiBookOpen, FiCalendar, FiMapPin } from "react-icons/fi";
import { motion } from "framer-motion";
import {
  fadeUp,
  sectionHeading,
  staggerContainer,
  viewportOnce,
} from "@/utils/animations";

export default function EducationSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 md:py-20 lg:px-8">
      <motion.div
        variants={sectionHeading}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
      >
        <SectionHeading
          eyebrow="Education"
          title="My Academic Background"
          description="The academic foundation and learning experiences that support my growth as a developer."
        />
      </motion.div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        className="space-y-5"
      >
        {education.map((item) => (
          <motion.article
            key={`${item.institution}-${item.degree}`}
            variants={fadeUp}
            className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition duration-300 hover:shadow-xl hover:shadow-purple-500/10 dark:border-gray-700 dark:bg-gray-900 sm:p-8"
          >
            <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-pink-500 via-purple-500 to-indigo-500" />

            <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
              <div className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-pink-100 via-purple-100 to-indigo-100 text-purple-700 dark:from-pink-950/50 dark:via-purple-950/50 dark:to-indigo-950/50 dark:text-purple-300">
                <FiBookOpen size={27} />
              </div>

              <div className="min-w-0 flex-1">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white sm:text-xl">
                      {item.degree}
                    </h3>

                    <p className="mt-2 flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300">
                      <FiMapPin className="mt-1 shrink-0 text-purple-500" />
                      {item.institution}
                    </p>
                  </div>

                  <span className="flex w-fit shrink-0 items-center gap-2 rounded-full border border-purple-200 bg-purple-50 px-3 py-1.5 text-xs font-medium text-purple-700 dark:border-purple-900 dark:bg-purple-950/50 dark:text-purple-300">
                    <FiCalendar />
                    {item.period}
                  </span>
                </div>

                <p className="mt-4 text-sm leading-7 text-gray-600 dark:text-gray-300">
                  {item.description}
                </p>
              </div>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}
