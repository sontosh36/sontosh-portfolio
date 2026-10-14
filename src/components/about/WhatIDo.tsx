import SectionHeading from "@/components/ui/SectionHeading";
import { services } from "@/contents/about";

export default function WhatIDo() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 md:py-20 lg:px-8">
      <SectionHeading
        eyebrow="What I Do"
        title="How I Turn Ideas Into Reality."
        description="I enjoy building useful web experiences, from responsive interfaces to application features that connect everything together."
      />

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => {
          const Icon = service.icon;

          return (
            <article
              key={service.title}
              className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-purple-300 hover:shadow-xl hover:shadow-purple-500/10 dark:border-gray-700 dark:bg-gray-900 dark:hover:border-purple-800"
            >
              <div className="mb-5 flex size-14 items-center justify-center rounded-2xl bg-gradient-to-br from-pink-100 via-purple-100 to-indigo-100 text-purple-700 transition duration-300 group-hover:scale-105 dark:from-pink-950/50 dark:via-purple-950/50 dark:to-indigo-950/50 dark:text-purple-300">
                <Icon size={27} />
              </div>

              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                {service.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-gray-600 dark:text-gray-300">
                {service.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-lg border border-gray-200 bg-gray-50 px-3 py-1.5 text-xs font-medium text-gray-600 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
