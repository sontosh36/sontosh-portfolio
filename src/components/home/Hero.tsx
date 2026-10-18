"use client";
import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import {
  staggerContainer,
  imageReveal,
  staggerItem,
  fastStaggerContainer,
  socialItem,
  buttonReveal,
} from "@/utils/animations";

const socials = [
  {
    label: "Github",
    href: "https://github.com/sontosh36",
    icon: FaGithub,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/sontoshkumar",
    icon: FaLinkedin,
  },
  {
    label: "Facebook",
    href: "https://facebook.com/sontoshkumar.sarker.37",
    icon: FaFacebook,
  },
];
const Hero = () => {
  return (
    <section className="relative isolate overflow-hidden py-14 md:py-20 max-w-7xl mx-auto px-4">
      {/* Subtle background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute left-1/2 top-10 h-64 w-64 -translate-x-1/2 rounded-full bg-purple-500/10 blur-3xl md:h-80 md:w-80" />
        <div className="absolute right-0 top-1/3 h-48 w-48 rounded-full bg-indigo-500/10 blur-3xl" />
      </div>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="mx-auto flex max-w-3xl flex-col items-center text-center"
      >
        {/* profile image */}
        <motion.div
          variants={imageReveal}
          initial="hidden"
          animate="visible"
          className="mb-6"
        >
          <div className="rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 p-1 shadow-lg shadow-purple-500/20">
            <Image
              width={140}
              height={140}
              loading="eager"
              src="/7389.png"
              alt="sontosh picture"
              className="h-32 w-32 rounded-full object-cover sm:h-36 sm:w-36"
            />
          </div>
        </motion.div>

        {/* name */}
        <motion.h1
          variants={staggerItem}
          className="mb-5 text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl"
        >
          Hi, I&apos;m{" "}
          <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
            Sontosh Kumar Sarker
          </span>
        </motion.h1>
        {/* role typewriter */}
        <motion.div
          variants={staggerItem}
          className="mb-6 min-h-9 text-xl font-medium text-gray-600 dark:text-gray-300 sm:text-2xl"
        >
          <Typewriter
            words={[
              "MERN Stack Developer",
              "Problem Solving Enthusiast",
              "Next.js Developer",
              "Junior Software Engineer",
            ]}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={65}
            deleteSpeed={35}
            delaySpeed={1800}
          />
        </motion.div>

        {/* Intro */}
        <motion.p
          variants={staggerItem}
          className="mb-8 max-w-2xl text-base leading-7 text-gray-600 dark:text-gray-400 sm:text-lg"
        >
          I build responsive, user-friendly web applications with modern
          technologies, focusing on clean code, thoughtful UI, and practical
          solutions.
        </motion.p>

        {/* socials */}
        <motion.div
          variants={fastStaggerContainer}
          className="mb-8 flex items-center justify-center gap-5"
        >
          {socials.map(({ label, href, icon: Icon }) => (
            <motion.div
              key={label}
              variants={socialItem}
              whileHover={{ y: -3 }}
              transition={{ duration: 0.2 }}
            >
              <Link
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="inline-flex rounded-lg p-2 text-2xl text-gray-500 transition-colors duration-200 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 dark:text-gray-400"
              >
                <Icon size={30} />
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.div
          variants={staggerItem}
          className="flex w-full flex-col justify-center gap-4 sm:w-auto sm:flex-row"
        >
          <motion.div
            variants={buttonReveal}
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.98 }}
          >
            <Link
              href="/projects"
              className="inline-flex w-full items-center justify-center rounded-xl bg-primary px-6 py-3 font-semibold text-white shadow-lg shadow-primary/30 transition-shadow duration-300 hover:shadow-xl hover:shadow-primary/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-gray-900 sm:w-auto"
            >
              View Projects
            </Link>
          </motion.div>

          <motion.div
            variants={buttonReveal}
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.98 }}
          >
            <Link
              href="/contact"
              className="inline-flex w-full items-center justify-center rounded-xl border border-gray-300 bg-white px-6 py-3 font-semibold text-gray-800 transition-colors duration-300 hover:border-primary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 dark:border-gray-700 dark:bg-gray-900/60 dark:text-gray-200 dark:hover:border-primary dark:hover:text-primary dark:focus-visible:ring-offset-gray-900 sm:w-auto"
            >
              Contact Me
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
