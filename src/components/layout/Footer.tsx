import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiArrowUpRight, FiHeart } from "react-icons/fi";
import { MdOutlineMailOutline } from "react-icons/md";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800">
      <div className="mx-auto max-w-7xl px-4">
        {/* Main Footer */}
        <div className="grid gap-10 py-12 md:grid-cols-[1.5fr_1fr_1fr] md:py-16">
          {/* Brand */}
          <div className="max-w-sm">
            {/*  logo  */}
            <Link
              href="/"
              className="group flex items-center text-xl font-bold tracking-tight"
              aria-label="Go to homepage"
            >
              <p className="text-primary transition-colors duration-200 group-hover:opacity-90">
                Sontosh<span className="font-extrabold text-pink-500 transition-transform duration-200 group-hover:scale-110">
                .io
              </span>
              </p>
            </Link>

            <p className="mt-4 text-sm leading-6 text-zinc-500 dark:text-zinc-400">
              Frontend developer focused on building clean, responsive, and
              user-friendly web experiences.
            </p>

            {/* Social Links */}
            <div className="mt-6 flex items-center gap-3">
              <Link
                href="https://github.com/sontosh36"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-3xl text-gray-600 border-zinc-800 dark:text-gray-300 transition duration-300 hover:text-primary"
              >
                <FaGithub />
              </Link>

              <Link
                href="https://linkedin.com/in/sontoshkumar"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-3xl text-gray-600 border-zinc-800 dark:text-gray-300 transition duration-300 hover:text-primary"
              >
                <FaLinkedin />
              </Link>

              <Link
                href="https://github.com/sontosh36"
                className="text-3xl text-gray-600 border-zinc-800 dark:text-gray-300 transition duration-300 hover:text-primary"
              >
                <FaXTwitter />
              </Link>

              <a
                href="mailto:your@email.com"
                aria-label="Email"
                className="text-3xl text-gray-600 border-zinc-800 dark:text-gray-300 transition duration-300 hover:text-primary"
              >
                <MdOutlineMailOutline />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">
              Quick Links
            </h3>

            <nav className="mt-4 flex flex-col gap-3">
              <Link
                href="/"
                className="text-sm text-zinc-500 dark:text-zinc-400 transition-colors hover:text-primary"
              >
                Home
              </Link>

              <Link
                href="/about"
                className="text-sm text-zinc-500 dark:text-zinc-400 transition-colors hover:text-primary"
              >
                About
              </Link>

              <Link
                href="/projects"
                className="text-sm text-zinc-500 dark:text-zinc-400 transition-colors hover:text-primary"
              >
                Projects
              </Link>

              <Link
                href="/contact"
                className="text-sm text-zinc-500 dark:text-zinc-400 transition-colors hover:text-primary"
              >
                Contact
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">
              Let&apos;s connect
            </h3>

            <p className="mt-4 text-sm leading-6 text-zinc-500 dark:text-zinc-400">
              Have a project or opportunity in mind? I&apos;d love to hear from
              you.
            </p>

            <Link
              href="/contact"
              className="group mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary"
            >
              Get in touch
              <FiArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col gap-3 border-t border-zinc-200 dark:border-zinc-800 py-6 text-sm sm:flex-row sm:items-center sm:justify-between">
          <p className="text-zinc-500 dark:text-zinc-400">
            © {currentYear} Sontosh Kumar Sarker. All rights reserved.
          </p>

          <p className="flex items-center gap-1 text-zinc-500 dark:text-zinc-400">
            Built with
            <FiHeart className="h-3.5 w-3.5 text-primary fill-blue-500" />
            NextJS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
