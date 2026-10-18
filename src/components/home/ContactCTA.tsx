"use client";
import Link from "next/link";
import { FiArrowRight, FiMail, FiMessageCircle } from "react-icons/fi";
import { motion } from "framer-motion";
import { fadeUp, slideInLeft } from "@/utils/animations";

const ContactCTA = () => {
  return (
    <section className="px-4 py-14 md:py-20 mx-auto max-w-7xl">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className=" relative overflow-hidden rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 px-6 py-12 sm:px-10 md:px-16 md:py-16"
      >
        {/* Decorative blur */}
        <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-primary/30 blur-3xl" />

        <div className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-primary/30 blur-3xl" />

        <div className="relative z-10 grid items-center gap-10 md:grid-cols-[1fr_auto]">
          {/* Content */}
          <div className="max-w-2xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-950 px-3 py-1.5 text-sm font-medium text-zinc-700 dark:text-zinc-300">
              <FiMessageCircle className="h-4 w-4 text-primary" />
              <span>Let&apos;s work together</span>
            </div>

            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-4xl md:text-5xl">
              Have a project in mind?
              <span className="block text-primary">Let&apos;s talk.</span>
            </h2>

            <p className="mt-5 max-w-xl text-base leading-7 text-zinc-600 dark:text-zinc-400 md:text-lg">
              I&apos;m always open to discussing new projects, creative ideas,
              or opportunities to build something meaningful together.
            </p>

            {/* Actions */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
              >
                Get in touch
                <FiArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-950 px-5 py-3 text-sm font-semibold text-zinc-800 dark:text-zinc-200 transition-all duration-300 hover:border-primary hover:text-primary"
              >
                <FiMail className="h-4 w-4" />
                Contact me
              </Link>
            </div>
          </div>

          {/* Availability Card */}
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="w-full rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 p-5 shadow-sm md:w-64"
          >
            <div className="flex items-center gap-3">
              <span className="relative flex text-center md:text-start h-3 w-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500" />
              </span>

              <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                Available for opportunities
              </span>
            </div>

            <p className="mt-3 text-sm leading-6 text-zinc-500 dark:text-zinc-400">
              Open to frontend development roles, internships, and meaningful
              collaborations.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactCTA;
