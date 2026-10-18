"use client";

import Image from "next/image";
import Link from "next/link";
import AnimatedCounter from "../ui/AnimatedCount";
import { motion } from "framer-motion";
import {
  imageReveal,
  viewportOnce,
  staggerContainer,
  staggerItem,
  fastStaggerContainer,
  cardItem,
  ctaContent,
  viewportHalf,
} from "@/utils/animations";

const ShortAbout = () => {
  return (
    <section id="about" className="py-14 md:py-20 max-w-7xl mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 md:gap-16">
        {/* image */}
        <motion.div
          variants={imageReveal}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="flex justify-center md:justify-start"
        >
          <div className="relative group">
            {/* Gradient Glow */}
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 opacity-30 blur-xl group-hover:opacity-50 transition duration-500" />

            {/* Image Container */}
            <div className="relative overflow-hidden rounded-3xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-xl">
              <Image
                src="/7389.png"
                alt="Sontosh Kumar Sarker"
                width={500}
                height={600}
                loading="eager"
                priority
                className="w-full max-w-md h-[420px] md:h-[500px] object-cover transition duration-700 group-hover:scale-105"
              />
            </div>

            {/* Professional Badge */}
            <div className="absolute -bottom-5 -right-3 md:-right-5 flex items-center gap-3 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 px-5 py-3 shadow-xl">
              {/* Status Dot */}
              <span className="relative flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500" />
              </span>

              <p className="text-sm font-semibold text-gray-900 dark:text-white">
                Open to Opportunities
              </p>
            </div>
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="text-center lg:text-left"
        >
          {/* Section Label */}
          <motion.p
            variants={staggerItem}
            className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary"
          >
            About Me
          </motion.p>

          {/* Heading */}
          <motion.h2
            variants={staggerItem}
            className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6"
          >
            Turning Ideas Into{" "}
            <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
              Digital Experiences
            </span>
          </motion.h2>

          {/* Description */}
          <motion.p
            variants={staggerItem}
            className="text-base md:text-lg leading-8 text-gray-600 dark:text-gray-300"
          >
            I am a passionate web developer who loves building modern,
            responsive and user-friendly web applications. I enjoy working with
            React, Next.js, Node.js and modern web technologies to turn ideas
            into reliable digital products.
          </motion.p>

          <motion.p
            variants={staggerItem}
            className="mt-4 text-base md:text-lg leading-8 text-gray-600 dark:text-gray-300"
          >
            My focus is on writing clean, maintainable code while creating
            smooth user experiences that are both visually appealing and
            performance-focused.
          </motion.p>

          {/* State */}
          <motion.div
            variants={fastStaggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-8"
          >
            {/* Projects */}
            <motion.div
              variants={cardItem}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className="rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/50 p-5 text-center transition duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10"
            >
              <h3 className="text-3xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
                <AnimatedCounter end={1} suffix="+" />
              </h3>
              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                Projects
              </p>
            </motion.div>

            {/* Technologies */}
            <motion.div
              variants={cardItem}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className="rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/50 p-5 text-center transition duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10"
            >
              <h3 className="text-3xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
                <AnimatedCounter end={15} suffix="+" />
              </h3>
              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                Technologies
              </p>
            </motion.div>

            {/* problem solved */}
            <motion.div
              variants={cardItem}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className="col-span-2 sm:col-span-1 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/50 p-5 text-center transition duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10"
            >
              <h3 className="text-3xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
                <AnimatedCounter end={92} suffix="%" />
              </h3>
              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                Consistency
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
      {/* Bottom CTA */}
      <motion.div
        variants={ctaContent}
        initial="hidden"
        whileInView="visible"
        viewport={viewportHalf}
        className="mt-10 text-center"
      >
        <motion.div
          whileHover={{ y: -3 }}
          whileTap={{ scale: 0.98 }}
          transition={{ duration: 0.2 }}
        >
          <Link
            href="/about"
            className="inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold text-white bg-primary hover:bg-primary/80 transition-colors shadow-lg shadow-primary/30 hover:shadow-2xl hover:shadow-primary/50"
          >
            More About Me
            <span className="text-base transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ShortAbout;
