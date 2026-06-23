import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export type ServiceCardProps = {
  title: string;
  blurb: string;
  icon: IconDefinition;
};

export default function ServiceCard({ title, blurb, icon }: ServiceCardProps) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-zinc-200/80 bg-white p-6 shadow-sm transition-shadow hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900/50">
      <div
        className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-orange/10 text-brand-orange"
        aria-hidden="true"
      >
        <FontAwesomeIcon icon={icon} className="h-5 w-5" />
      </div>
      <h3 className="text-lg font-semibold tracking-tight text-stone-700 dark:text-zinc-100">
        {title}
      </h3>
      <p className="mt-3 flex-1 text-base leading-7 text-zinc-600 dark:text-zinc-400">
        {blurb}
      </p>
    </article>
  );
}
