import { profile } from "../data/content";

const Contact = () => {
  return (
    <section id="contact" className="border-t border-border py-24">
      <div className="mx-auto max-w-6xl px-6">
        <p className="reveal font-mono text-xs uppercase tracking-[0.2em] text-accent">
          06 / Contact
        </p>
        <h2 className="reveal mt-4 max-w-2xl text-3xl font-semibold sm:text-4xl">
          Have a problem worth solving?
        </h2>
        <p className="reveal mt-4 max-w-lg text-muted">
          Let&apos;s talk about software, data, automation or whatever you&apos;re building.
        </p>

        <div className="reveal mt-10 flex flex-wrap gap-4">
          <a
            href={`mailto:${profile.email}`}
            className="rounded-md bg-accent px-5 py-3 font-mono text-xs uppercase tracking-widest text-bg transition-opacity hover:opacity-90"
          >
            Email me
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="rounded-md border border-border px-5 py-3 font-mono text-xs uppercase tracking-widest text-ink transition-colors hover:border-accent"
          >
            GitHub
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="rounded-md border border-border px-5 py-3 font-mono text-xs uppercase tracking-widest text-ink transition-colors hover:border-accent"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
