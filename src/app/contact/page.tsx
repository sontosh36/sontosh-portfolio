"use client";

import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";
import { fadeLeft, fadeUp } from "@/utils/animations";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section className="relative isolate overflow-hidden px-4 py-14 sm:px-6 md:py-20 lg:py-24">
      {/* Background accent */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 left-1/2 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-purple-500/10 blur-3xl"
      />

      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mx-auto mb-12 max-w-2xl text-center md:mb-16"
        >
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-xs font-semibold tracking-wider text-primary">
            LET&apos;S CONNECT
          </span>

          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl dark:text-white">
            Let&apos;s start a{" "}
            <span className="text-primary">conversation.</span>
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-gray-600 sm:text-base dark:text-gray-400">
            I&apos;m always open to discussing new projects, creative ideas, and
            opportunities to collaborate. Feel free to reach out!
          </p>
        </motion.div>

        {/* Contact content */}
        <div className="grid grid-cols-1 items-start gap-8 md:gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="min-w-0"
          >
            <ContactInfo />
          </motion.div>

          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="min-w-0"
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
