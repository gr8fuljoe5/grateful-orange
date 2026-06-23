"use client";

import { useState } from "react";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
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

  return (
    <Disclosure
      as="header"
      className="sticky top-0 z-50 w-full border-b border-zinc-200/80 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 dark:border-zinc-800"
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8"
      >
        <a
          href="#"
          aria-label="Grateful Orange home"
          className="flex shrink-0 flex-col font-brand text-xl tracking-tight sm:text-4xl"
        >
          <span className="inline-flex items-center font-bold">
            <span className="font-brand-orange text-black">Grateful</span>
            <span className="ml-1.5 font-brand-orange font-bold uppercase text-brand-orange">
              ORANGE
            </span>
          </span>
          <hr
            aria-hidden="true"
            className="mt-1 h-1 w-full rounded-full border-0 bg-[linear-gradient(to_right,#dc2626_0%,#ffffff_50%,#2563eb_100%)]"
          />
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setActiveLink(link.href)}
              aria-current={activeLink === link.href ? "page" : undefined}
              className={`group relative pb-2 text-sm transition-colors ${
                activeLink === link.href
                  ? "font-bold text-brand-orange"
                  : "font-medium text-zinc-600 hover:text-foreground dark:text-zinc-400 dark:hover:text-zinc-50"
              }`}
            >
              {link.label}
              <span
                aria-hidden="true"
                className={`absolute right-0 -bottom-0 left-0 h-0.5 origin-left rounded-full bg-brand-orange transition-transform duration-200 ${
                  activeLink === link.href ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                }`}
              />
            </a>
          ))}
        </div>

        <DisclosureButton className="inline-flex items-center justify-center rounded-md p-2 text-zinc-600 hover:bg-zinc-100 hover:text-foreground md:hidden dark:text-zinc-400 dark:hover:bg-zinc-800">
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
        <div className="flex flex-col gap-1 px-4 py-3 sm:px-6">
          {navLinks.map((link) => (
            <DisclosureButton
              key={link.href}
              as="a"
              href={link.href}
              onClick={() => setActiveLink(link.href)}
              aria-current={activeLink === link.href ? "page" : undefined}
              className={`rounded-md px-3 py-2 text-left text-sm transition-colors ${
                activeLink === link.href
                  ? "font-bold text-brand-orange"
                  : "font-medium text-zinc-600 hover:bg-zinc-100 hover:text-foreground dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-50"
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
