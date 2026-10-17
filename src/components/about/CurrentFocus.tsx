"use client"
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import { FiArrowRight, FiCheckCircle, FiCode, FiTarget } from "react-icons/fi";
import { currentFocus } from "@/contents/about";
import { motion } from "framer-motion";
import {
  fadeUp,
  sectionHeading,
  slowStaggerContainer,
  viewportOnce,
} from "@/utils/animations";

export default function CurrentFocus() {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className="border-t border-gray-200/70 bg-gray-50/80 py-14 dark:border-gray-800 dark:bg-gray-900/30 md:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeUp}
          className="relative overflow-hidden rounded-3xl border border-purple-200 bg-gradient-to-br from-pink-50 via-white to-indigo-50 p-6 dark:border-gray-700 dark:from-pink-950/20 dark:via-gray-900 dark:to-indigo-950/30 sm:p-10 lg:p-12"
        >
          <div className="pointer-events-none absolute -right-20 -top-20 size-64 rounded-full bg-purple-500/10 blur-3xl" />

          <div className="relative grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <motion.div
                variants={sectionHeading}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                className="mb-5 flex size-14 items-center justify-center rounded-2xl bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-500 text-white shadow-lg shadow-purple-500/20"
              >
                <FiTarget size={27} />
              </motion.div>
              <motion.div
                variants={sectionHeading}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
              >
                <SectionHeading
                  eyebrow="Current Focus"
                  title="Learning Today, Building for Tomorrow."
                  description="I am focused on strengthening my fundamentals, building practical projects, and developing the habits needed to write maintainable code."
                />
              </motion.div>
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-gray-900 bg-primary text-white hover:bg-primary/80 transition-colors shadow-lg shadow-primary/30 hover:shadow-2xl hover:shadow-primary/50"
                >
                  Let&apos;s Connect
                  <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </motion.div>
            </div>

            <motion.div
              variants={slowStaggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="rounded-2xl border border-gray-200 bg-white/80 p-5 shadow-sm backdrop-blur dark:border-gray-700 dark:bg-gray-900/80 sm:p-7"
            >
              <motion.h3
                variants={fadeUp}
                className="mb-6 flex items-center gap-3 text-lg font-bold text-gray-900 dark:text-white"
              >
                <FiCode className="text-purple-500" size={22} />
                What I&apos;m Working On
              </motion.h3>

              <div className="space-y-5">
                {currentFocus.map((item) => {
                  const Icon = item.icon;

                  return (
                    <motion.div
                      key={item.title}
                      variants={fadeUp}
                      className="flex gap-3"
                    >
                      <motion.div
                        whileHover={{ scale: 1.88, rotate: 4 }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                        className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-purple-100 text-indigo-600 dark:bg-purple-950 dark:text-purple-300"
                      >
                        <Icon size={19} />
                      </motion.div>

                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 dark:text-white">
                          {item.title}
                        </h4>
                        <p className="mt-1 text-sm leading-6 text-gray-600 dark:text-gray-300">
                          {item.description}
                        </p>
                      </div>

                      <FiCheckCircle className="mt-1 shrink-0 text-purple-500" />
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
