import skillsData from "@/app/content/skills.json";

type SkillGroup = {
  category: string;
  items: string[];
};

type SkillsData = {
  organizedSkills: SkillGroup[];
};

const { organizedSkills } = skillsData as SkillsData;

export default function SkillsSection() {
  return (
    <div className="mx-auto max-w-5xl">
      <header>
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Skills
        </h2>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
          Core capabilities across product engineering, front-end architecture,
          back-end integration, and technical leadership.
        </p>
      </header>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {organizedSkills.map((group) => (
          <section
            key={group.category}
            aria-labelledby={`${group.category.toLowerCase().replaceAll(" ", "-")}-heading`}
            className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/40"
          >
            <h3
              id={`${group.category.toLowerCase().replaceAll(" ", "-")}-heading`}
              className="text-lg font-semibold tracking-tight"
            >
              {group.category}
            </h3>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-zinc-700 dark:text-zinc-300">
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}
