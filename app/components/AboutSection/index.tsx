import Image from "next/image";

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
        <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          I build thoughtful, high-impact digital experiences.
        </h2>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
          I am a Staff Software Engineer focused on full-stack e-commerce and modern web
          architecture. With 20+ years of experience, I design and deliver scalable front-end
          systems, collaborate closely with product and design teams, and mentor developers to
          ship high-quality software.
        </p>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
          I am based in Brooklyn, NY, and I love building products that balance performance,
          usability, and strong engineering fundamentals.
        </p>
      </div>
    </div>
  );
}
