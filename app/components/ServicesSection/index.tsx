import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import {
  faBagShopping,
  faChartLine,
  faDesktop,
  faHandshake,
  faRocket,
  faWandMagicSparkles,
} from "@fortawesome/free-solid-svg-icons";
import ServiceCard from "@/app/components/ServiceCard";
import skillsData from "@/app/content/skills.json";

const iconMap: Record<string, IconDefinition> = {
  rocket: faRocket,
  "chart-line": faChartLine,
  desktop: faDesktop,
  "bag-shopping": faBagShopping,
  "wand-magic-sparkles": faWandMagicSparkles,
  handshake: faHandshake,
};

export default function ServicesSection() {
  return (
    <>
      <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Services</h2>
      <p className="mt-4 max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
        Strategic services spanning product engineering, architecture, and
        technical leadership.
      </p>

      <ul className="mt-10 grid list-none grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skillsData.skills.map((service) => {
          const icon = iconMap[service.icon];

          if (!icon) {
            return null;
          }

          return (
            <li key={service.title}>
              <ServiceCard
                title={service.title}
                blurb={service.blurb}
                icon={icon}
              />
            </li>
          );
        })}
      </ul>
    </>
  );
}
