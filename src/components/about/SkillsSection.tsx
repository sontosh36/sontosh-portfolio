import SectionHeading from "@/components/ui/SectionHeading";
import { skillGroups } from "@/contents/about";
import { FiCheckCircle } from "react-icons/fi";

export default function SkillsSection() {
  return (
    <section className="border-y border-gray-200/70 bg-gray-50/80 py-14 dark:border-gray-800 dark:bg-gray-900/30 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Technical Skills"
          title="My Development Toolkit"
          description="The tools and technologies I use in projects and continue to develop through hands-on practice."
        />

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => {
            const Icon = group.icon;

            return (
              <article
                key={group.title}
                className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-500/10 dark:border-gray-700 dark:bg-gray-900"
              >
                <div className="mb-5 flex items-center gap-3">
                  <div className="flex size-11 items-center justify-center rounded-xl bg-purple-100 text-purple-700 dark:bg-purple-950 dark:text-purple-300">
                    <Icon size={22} />
                  </div>

                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white">
                      {group.title}
                    </h3>
                    <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                      {group.description}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-sm font-medium text-gray-700 transition hover:border-purple-300 hover:text-purple-600 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:border-purple-700 dark:hover:text-purple-300"
                    >
                      <FiCheckCircle className="shrink-0 text-purple-500" />
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>

        <p className="mt-6 text-sm leading-6 text-gray-500 dark:text-gray-400">
          My toolkit evolves as I learn and apply new technologies in projects.
        </p>
      </div>
    </section>
  );
}
