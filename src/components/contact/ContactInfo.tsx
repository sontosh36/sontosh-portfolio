import Link from "next/link";
import { FiArrowUpRight, FiMessageCircle } from "react-icons/fi";
import { contactInfo } from "@/contents/contact";

export default function ContactInfo() {
  return (
    <div className="space-y-6">
      <div>
        <div className="mb-4 flex size-12 items-center justify-center rounded-2xl bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-500 text-white shadow-lg shadow-purple-500/20">
          <FiMessageCircle size={23} />
        </div>

        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
          Let&apos;s talk
        </h2>

        <p className="mt-3 max-w-md text-sm leading-7 text-gray-600 dark:text-gray-300">
          Have a project idea, a job opportunity, or just want to connect?
          I&apos;d love to hear from you.
        </p>
      </div>

      <div className="space-y-3">
        {contactInfo.map((item) => {
          const Icon = item.icon;

          return (
            <Link
              key={item.title}
              href={item.href}
              target={item.title === "Email" ? undefined : "_blank"}
              rel={item.title === "Email" ? undefined : "noopener noreferrer"}
              className="group flex items-center gap-4 rounded-2xl border border-gray-200/80 bg-white/80 p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-purple-300 hover:shadow-lg hover:shadow-purple-500/5 dark:border-gray-800 dark:bg-gray-900/60 dark:hover:border-purple-800 sm:p-5"
            >
              <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-purple-100 text-purple-600 transition-colors group-hover:bg-gradient-to-br group-hover:from-pink-500 group-hover:via-purple-500 group-hover:to-indigo-500 group-hover:text-white dark:bg-purple-950/60 dark:text-purple-300">
                <Icon size={21} />
              </div>

              <div className="min-w-0 flex-1">
                <h3 className="font-semibold text-gray-900 dark:text-white">
                  {item.title}
                </h3>

                <p className="mt-1 break-words text-sm text-gray-700 dark:text-gray-300">
                  {item.value}
                </p>

                <p className="mt-1 text-xs leading-5 text-gray-500 dark:text-gray-400">
                  {item.description}
                </p>
              </div>

              <FiArrowUpRight
                size={19}
                className="shrink-0 text-gray-400 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-purple-500"
              />
            </Link>
          );
        })}
      </div>

      <div className="rounded-2xl border border-purple-200/80 bg-gradient-to-br from-pink-50 via-white to-indigo-50 p-5 dark:border-gray-800 dark:from-pink-950/20 dark:via-gray-900 dark:to-indigo-950/30">
        <div className="flex items-center gap-2">
          <span className="size-2 rounded-full bg-emerald-500" />
          <h3 className="font-semibold text-gray-900 dark:text-white">
            Open to opportunities
          </h3>
        </div>

        <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-300">
          I&apos;m interested in junior developer roles, collaborative projects,
          and opportunities to grow as a developer.
        </p>
      </div>
    </div>
  );
}
