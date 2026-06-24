import workData from "@/app/content/work.json";

type FeaturedRole = {
  company: string;
  role: string;
  period: string;
  location: string;
  summary: string;
  highlights: string[];
};

type TimelineRole = {
  period: string;
  company: string;
  role: string;
  summary: string;
};

type WorkData = {
  intro: string;
  featured: FeaturedRole[];
  achievements: FeaturedRole[];
  timeline: TimelineRole[];
};

const { intro, featured, achievements, timeline } = workData as WorkData;

export default function WorkSection() {
  return (
    <div className="mx-auto max-w-5xl">
      <header>
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Work</h2>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
          {intro}
        </p>
      </header>

      <section aria-labelledby="featured-work-heading" className="mt-12">
        <h3
          id="featured-work-heading"
          className="text-sm font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400"
        >
          Featured Experience
        </h3>

        <div className="mt-5 grid gap-6">
          {featured.map((item) => (
            <article
              key={`${item.company}-${item.period}`}
              className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/40"
            >
              <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
                {item.period} • {item.location}
              </p>
              <h4 className="mt-2 text-xl font-semibold tracking-tight">{item.role}</h4>
              <p className="text-sm font-medium text-brand-orange">{item.company}</p>
              <p className="mt-3 text-zinc-700 dark:text-zinc-300">{item.summary}</p>

              <ul className="mt-4 list-disc space-y-2 pl-5 text-zinc-600 dark:text-zinc-400">
                {item.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section aria-labelledby="achievements-heading" className="mt-12">
        <h3
          id="achievements-heading"
          className="text-base font-semibold tracking-wide text-zinc-600 dark:text-zinc-300"
        >
          Major League Baseball
        </h3>

        <div className="mt-5 grid gap-6">
          {achievements.map((item) => (
            <article
              key={`${item.company}-${item.role}-${item.period}`}
              className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/40"
            >
              <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
                {item.period} • {item.location}
              </p>
              <h4 className="mt-2 text-xl font-semibold tracking-tight">{item.role}</h4>
              <p className="mt-3 text-zinc-700 dark:text-zinc-300">{item.summary}</p>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-zinc-600 dark:text-zinc-400">
                {item.highlights.map((achievement) => (
                  <li key={achievement}>{achievement}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section aria-labelledby="career-timeline-heading" className="mt-12">
        <h3
          id="career-timeline-heading"
          className="text-sm font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400"
        >
          Career Timeline
        </h3>

        <ol className="mt-5 space-y-4">
          {timeline.map((item) => (
            <li
              key={`${item.company}-${item.role}-${item.period}`}
              className="rounded-xl border border-zinc-200 bg-zinc-50/80 p-4 dark:border-zinc-800 dark:bg-zinc-900/30"
            >
              <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
                {item.period}
              </p>
              <p className="mt-1 font-medium">
                {item.role} •{" "}
                <span className="text-zinc-700 dark:text-zinc-300">{item.company}</span>
              </p>
              <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{item.summary}</p>
            </li>
          ))}
        </ol>
      </section>
    </div>
  );
}
