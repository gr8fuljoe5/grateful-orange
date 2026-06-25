import TopNav from "./components/TopNav";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import WorkSection from "./components/WorkSection";
import SkillsSection from "./components/SkillsSection";

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
    id: "skills",
    title: "Skills",
    description:
      "Core technical and leadership capabilities across product engineering and delivery.",
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
            <div
              className={`mx-auto flex max-w-6xl flex-col justify-center px-4 sm:px-6 lg:px-8 ${
                section.id === "contact" ? "py-12" : "min-h-[70vh] py-20"
              }`}
            >
              {section.id === "about" ? (
                <AboutSection />
              ) : section.id === "services" ? (
                <ServicesSection />
              ) : section.id === "work" ? (
                <WorkSection />
              ) : section.id === "skills" ? (
                <SkillsSection />
              ) : section.id === "contact" ? (
                <>
                  <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                    Contact
                  </h2>
                  <p className="mt-4 max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
                    Have a project in mind or looking for a technical partner?
                    Let&apos;s connect.
                  </p>
                  <a
                    href="mailto:joe@gratefulorange.com"
                    className="bg-brand-orange mt-8 inline-flex w-fit items-center rounded-lg px-5 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500"
                  >
                    Email joe@gratefulorange.com
                  </a>
                </>
              ) : (
                <>
                  <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
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
                </>
              )}
            </div>
          </section>
        ))}
      </main>
    </div>
  );
}
