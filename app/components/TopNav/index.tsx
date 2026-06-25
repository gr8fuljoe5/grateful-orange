"use client";

import { useEffect, useState } from "react";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

function MenuIcon({ open }: { open: boolean }) {
  if (open) {
    return (
      <svg
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    );
  }

  return (
    <svg
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
      />
    </svg>
  );
}

export default function TopNav() {
  const [activeLink, setActiveLink] = useState("#about");

  useEffect(() => {
    const sectionIds = navLinks.map((link) => link.href.replace("#", ""));

    const updateActiveLinkFromScroll = () => {
      let nextActiveLink = "#about";
      const scrollMarker = window.scrollY + 140;

      for (const id of sectionIds) {
        const section = document.getElementById(id);

        if (!section) {
          continue;
        }

        const sectionTop = section.getBoundingClientRect().top + window.scrollY;
        if (scrollMarker >= sectionTop) {
          nextActiveLink = `#${id}`;
        }
      }

      setActiveLink((previous) =>
        previous === nextActiveLink ? previous : nextActiveLink,
      );
    };

    updateActiveLinkFromScroll();
    window.addEventListener("scroll", updateActiveLinkFromScroll, {
      passive: true,
    });
    window.addEventListener("resize", updateActiveLinkFromScroll);

    return () => {
      window.removeEventListener("scroll", updateActiveLinkFromScroll);
      window.removeEventListener("resize", updateActiveLinkFromScroll);
    };
  }, []);

  return (
    <Disclosure
      as="header"
      className="bg-background/95 supports-[backdrop-filter]:bg-background/80 sticky top-0 z-50 w-full border-b border-zinc-200/80 backdrop-blur dark:border-zinc-800"
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8"
      >
        <a
          href="#"
          aria-label="Grateful Orange home"
          className="font-brand flex shrink-0 flex-col text-xl tracking-tight sm:text-4xl"
        >
          <span className="inline-flex items-center font-bold">
            <span className="font-heading text-stone-700 dark:text-white">
              Grateful
            </span>
            <span className="font-brand-orange text-brand-orange ml-1.5 font-bold uppercase">
              ORANGE
            </span>
          </span>
        </a>

        <div className="font-secondary hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setActiveLink(link.href)}
              aria-current={activeLink === link.href ? "page" : undefined}
              className={`group relative pb-2 text-sm transition-colors ${
                activeLink === link.href
                  ? "text-brand-orange font-bold"
                  : "hover:text-foreground font-medium text-zinc-600 dark:text-zinc-400 dark:hover:text-zinc-50"
              }`}
            >
              {link.label}
              <span
                aria-hidden="true"
                className={`bg-brand-orange absolute right-0 -bottom-0 left-0 h-0.5 origin-left rounded-full transition-transform duration-200 ${
                  activeLink === link.href
                    ? "scale-x-100"
                    : "scale-x-0 group-hover:scale-x-100"
                }`}
              />
            </a>
          ))}
        </div>

        <DisclosureButton className="hover:text-foreground inline-flex items-center justify-center rounded-md p-2 text-zinc-600 hover:bg-zinc-100 md:hidden dark:text-zinc-400 dark:hover:bg-zinc-800">
          {({ open }) => (
            <>
              <span className="sr-only">
                {open ? "Close menu" : "Open menu"}
              </span>
              <MenuIcon open={open} />
            </>
          )}
        </DisclosureButton>
      </nav>

      <DisclosurePanel className="border-t border-zinc-200/80 md:hidden dark:border-zinc-800">
        <div className="font-secondary flex flex-col gap-1 px-4 py-3 sm:px-6">
          {navLinks.map((link) => (
            <DisclosureButton
              key={link.href}
              as="a"
              href={link.href}
              onClick={() => setActiveLink(link.href)}
              aria-current={activeLink === link.href ? "page" : undefined}
              className={`rounded-md px-3 py-2 text-left text-sm transition-colors ${
                activeLink === link.href
                  ? "text-brand-orange font-bold"
                  : "hover:text-foreground font-medium text-zinc-600 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-50"
              }`}
            >
              {link.label}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}
