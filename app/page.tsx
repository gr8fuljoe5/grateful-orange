import TopNav from "./components/TopNav";

const sections = [
  {
    id: "about",
    title: "About",
    description:
      "A short introduction about who you are, what you do, and what drives your work.",
  },
  {
    id: "services",
    title: "Services",
    description:
      "Placeholder for the services you offer, from consulting to full-stack development.",
  },
  {
    id: "work",
    title: "Work",
    description:
      "Placeholder for featured projects, case studies, and portfolio highlights.",
  },
  {
    id: "experience",
    title: "Experience",
    description:
      "Placeholder for your professional history, roles, and key accomplishments.",
  },
  {
    id: "skills",
    title: "Skills",
    description:
      "Placeholder for technical skills, tools, and areas of expertise.",
  },
  {
    id: "contact",
    title: "Contact",
    description:
      "Placeholder for contact details, a form, or links to reach out.",
  },
];

export default function Home() {
  return (
    <div className="flex min-h-full flex-1 flex-col font-sans">
      <TopNav />

      <main className="flex-1">
        {sections.map((section) => (
          <section
            key={section.id}
            id={section.id}
            className="scroll-mt-20 border-b border-zinc-200/80 dark:border-zinc-800"
          >
            <div className="mx-auto flex min-h-[70vh] max-w-6xl flex-col justify-center px-4 py-20 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                {section.title}
              </h2>
              <p className="mt-4 max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
                {section.description}
              </p>
              <div className="mt-10 rounded-2xl border border-dashed border-zinc-300 bg-zinc-50 p-8 dark:border-zinc-700 dark:bg-zinc-900/50">
                <p className="text-sm font-medium uppercase tracking-wider text-zinc-500 dark:text-zinc-500">
                  {section.title} content placeholder
                </p>
                <p className="mt-2 text-zinc-600 dark:text-zinc-400">
                  Replace this container with your {section.title.toLowerCase()}{" "}
                  content when you are ready to build out this section.
                </p>
              </div>
            </div>
          </section>
        ))}
      </main>
    </div>
  );
}
