interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description: string;
  centered?: boolean;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  centered = true,
}: SectionHeadingProps) {
  return (
    <div className={`mb-10 max-w-2xl ${centered ? "mx-auto text-center" : ""}`}>
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-purple-600 dark:text-purple-400">
        {eyebrow}
      </p>

      <h2 className="text-3xl font-bold leading-tight tracking-tight text-gray-950 dark:text-white md:text-4xl">
        {title}
      </h2>

      <p className="mt-4 text-base leading-8 text-gray-600 dark:text-gray-300 md:text-lg">
        {description}
      </p>
    </div>
  );
}
