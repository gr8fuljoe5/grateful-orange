export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-200/80 dark:border-zinc-800">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-4 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <p className="text-sm text-zinc-600 dark:text-zinc-400">
          {currentYear} Grateful Orange. All rights reserved.
        </p>

        <div className="flex items-center gap-4">
          <a
            href="#"
            aria-label="GitHub profile"
            className="text-zinc-500 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="h-5 w-5"
              fill="currentColor"
            >
              <path d="M12 .5a12 12 0 0 0-3.8 23.4c.6.1.8-.2.8-.6v-2.1c-3.3.7-4-1.4-4-1.4-.5-1.4-1.3-1.8-1.3-1.8-1.1-.8.1-.8.1-.8 1.2.1 1.8 1.2 1.8 1.2 1 .2 2.6.9 3.4.7.1-.8.4-1.3.7-1.6-2.6-.3-5.3-1.3-5.3-5.7 0-1.3.5-2.5 1.2-3.3-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2A11.8 11.8 0 0 1 12 6c1 0 2 .1 2.9.4 2.3-1.5 3.3-1.2 3.3-1.2.6 1.7.2 2.9.1 3.2.8.8 1.2 2 1.2 3.3 0 4.4-2.7 5.4-5.3 5.7.4.3.8 1 .8 2v3c0 .3.2.7.8.6A12 12 0 0 0 12 .5Z" />
            </svg>
          </a>

          <a
            href="#"
            aria-label="LinkedIn profile"
            className="text-zinc-500 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="h-5 w-5"
              fill="currentColor"
            >
              <path d="M20.4 20.5h-3.6v-5.6c0-1.3 0-3-1.9-3s-2.2 1.5-2.2 2.9v5.7H9.1V9h3.4v1.6h.1c.5-.9 1.6-1.9 3.4-1.9 3.6 0 4.3 2.4 4.3 5.4v6.4ZM5 7.4A2.1 2.1 0 1 1 5 3a2.1 2.1 0 0 1 0 4.3ZM6.8 20.5H3.2V9h3.6v11.5ZM22.2 0H1.8A1.7 1.7 0 0 0 0 1.6v20.8A1.7 1.7 0 0 0 1.8 24h20.4a1.7 1.7 0 0 0 1.8-1.6V1.6A1.7 1.7 0 0 0 22.2 0Z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
