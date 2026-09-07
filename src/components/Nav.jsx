import { useState } from "react";
import { profile, nav } from "../data/content";

const Nav = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-border/80 bg-bg/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#top" className="font-mono text-sm font-medium tracking-widest text-ink">
          {profile.initials}
          <span className="text-accent">.</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-mono text-xs uppercase tracking-widest text-muted transition-colors hover:text-ink"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="font-mono text-xs uppercase tracking-widest text-muted transition-colors hover:text-ink"
          >
            GitHub
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="font-mono text-xs uppercase tracking-widest text-muted transition-colors hover:text-ink"
          >
            LinkedIn
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
          className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 md:hidden"
        >
          <span
            className={`h-px w-5 bg-ink transition-transform ${open ? "translate-y-[3.5px] rotate-45" : ""}`}
          />
          <span
            className={`h-px w-5 bg-ink transition-transform ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`}
          />
        </button>
      </div>

      {open && (
        <nav className="border-t border-border bg-bg px-6 py-4 md:hidden">
          <ul className="flex flex-col gap-4">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="font-mono text-xs uppercase tracking-widest text-muted transition-colors hover:text-ink"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="flex gap-6 pt-2">
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="font-mono text-xs uppercase tracking-widest text-muted hover:text-ink"
              >
                GitHub
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="font-mono text-xs uppercase tracking-widest text-muted hover:text-ink"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Nav;
