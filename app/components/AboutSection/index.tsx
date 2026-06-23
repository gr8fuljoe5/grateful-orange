import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationCrosshairs } from "@fortawesome/free-solid-svg-icons";

export default function AboutSection() {
  return (
    <div className="mx-auto grid max-w-5xl items-center gap-10 md:grid-cols-[220px_1fr] md:gap-14">
      <div className="mx-auto">
        <Image
          src="/about-profile.jpg"
          alt="Portrait of Joseph Kanakaraj"
          width={220}
          height={220}
          priority
          className="h-44 w-44 rounded-full object-cover ring-4 ring-zinc-200 md:h-[220px] md:w-[220px] dark:ring-zinc-700"
        />
      </div>

      <div className="text-center md:text-left">
        <h2 className="text-3xl font-semibold tracking-tight text-foreground font-orbitron sm:text-4xl">
          We build thoughtful, high-impact digital experiences.
        </h2>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
          Grateful Orange is a software engineering company focused on SaaS
          products, websites, and AI projects. With 20+ years of experience, we
          design and deliver scalable front-end systems, collaborate closely
          with product and design partners, and mentor developers to ship
          high-quality software.
        </p>
        <p className="mt-4 inline-flex items-center gap-2 text-sm leading-6 text-zinc-500 dark:text-zinc-400">
          <FontAwesomeIcon
            icon={faLocationCrosshairs}
            className="text-brand-orange"
          />
          <span className="whitespace-nowrap">Brooklyn, NY</span>
        </p>
      </div>
    </div>
  );
}
