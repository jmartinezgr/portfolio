import { useLanguage } from "../i18n/LanguageContext";

const Hero = () => {
  const { t } = useLanguage();
  const { profile, pipeline } = t;

  return (
    <section id="top" className="relative overflow-hidden pt-40 pb-24">
      <div className="bg-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_top,black_10%,transparent_70%)]" />

      <div className="relative mx-auto grid max-w-6xl gap-16 px-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <div className="reveal">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
            {profile.tagline}
          </p>

          <h1 className="mt-6 text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl">
            {profile.headingLead}{" "}
            <em className="not-italic text-accent">{profile.headingEmphasis}</em>
          </h1>

          <p className="mt-6 max-w-lg text-lg text-muted">{profile.summary}</p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#work"
              className="rounded-md bg-accent px-5 py-3 font-mono text-xs uppercase tracking-widest text-bg transition-opacity hover:opacity-90"
            >
              {profile.ctaViewWork}
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="rounded-md border border-border px-5 py-3 font-mono text-xs uppercase tracking-widest text-ink transition-colors hover:border-accent"
            >
              {profile.ctaGithub} ↗
            </a>
            <a
              href={profile.cv}
              target="_blank"
              rel="noreferrer"
              className="font-mono text-xs uppercase tracking-widest text-muted underline decoration-border underline-offset-4 transition-colors hover:text-ink"
            >
              {profile.ctaDownloadCv}
            </a>
          </div>

          <p className="mt-14 font-mono text-xs uppercase tracking-[0.2em] text-muted/70">
            {profile.footerNote}
          </p>
        </div>

        <div className="reveal rounded-xl border border-border bg-surface/60 p-6" style={{ animationDelay: "120ms" }}>
          <p className="font-mono text-xs uppercase tracking-widest text-muted">{pipeline.title}</p>
          <div className="mt-4 space-y-3">
            {pipeline.steps.map((step) => (
              <div
                key={step.label}
                className="flex items-center justify-between rounded-lg border border-border bg-bg/60 px-4 py-3"
              >
                <span className="font-mono text-sm font-medium tracking-wide">
                  {step.label}
                </span>
                <span className="font-mono text-xs text-muted">{step.detail}</span>
              </div>
            ))}
          </div>
          <p className="mt-4 font-mono text-xs text-muted/70">{pipeline.footer}</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
