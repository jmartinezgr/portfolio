import { projects } from "../data/content";
import SectionLabel from "./SectionLabel";

const ProjectCard = ({ project }) => (
  <article className="reveal rounded-xl border border-border bg-surface/40 p-6 sm:p-8">
    <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
      <div>
        <p className="font-mono text-xs uppercase tracking-widest text-muted">
          Project {project.id} · {project.tags}
        </p>
        <h3 className="mt-3 text-2xl font-semibold sm:text-3xl">{project.title}</h3>
        <p className="mt-4 text-muted">{project.description}</p>
        {project.context && (
          <p className="mt-3 text-sm text-muted/80">{project.context}</p>
        )}

        {project.stats && (
          <dl className="mt-6 flex flex-wrap gap-x-8 gap-y-3 border-t border-border pt-6">
            {project.stats.map((stat) => (
              <div key={stat.term}>
                <dt className="font-mono text-[11px] uppercase tracking-widest text-muted">
                  {stat.term}
                </dt>
                <dd className="mt-1 text-sm font-medium">{stat.value}</dd>
              </div>
            ))}
          </dl>
        )}

        {(project.problem || project.approach) && (
          <div className="mt-6 grid gap-6 border-t border-border pt-6 sm:grid-cols-2">
            {project.problem && (
              <div>
                <p className="font-mono text-[11px] uppercase tracking-widest text-accent">
                  Problem
                </p>
                <p className="mt-2 text-sm text-muted">{project.problem}</p>
              </div>
            )}
            {project.approach && (
              <div>
                <p className="font-mono text-[11px] uppercase tracking-widest text-accent">
                  Approach
                </p>
                <p className="mt-2 text-sm text-muted">{project.approach}</p>
              </div>
            )}
          </div>
        )}

        <ul className="mt-6 flex flex-wrap gap-2 border-t border-border pt-6">
          {project.tech.map((tech) => (
            <li
              key={tech}
              className="rounded-full border border-border px-3 py-1 font-mono text-[11px] text-muted"
            >
              {tech}
            </li>
          ))}
        </ul>
      </div>

      <div className="rounded-lg border border-border bg-bg/60 p-5">
        <p className="font-mono text-xs uppercase tracking-widest text-muted">System flow</p>
        <div className="mt-4 flex flex-col items-center gap-2">
          {project.flow.map((step, i) => (
            <div key={step.label} className="w-full">
              <div className="rounded-md border border-border bg-surface px-4 py-3 text-center">
                <p className="font-mono text-sm font-medium">{step.label}</p>
                <p className="font-mono text-[11px] text-muted">{step.detail}</p>
              </div>
              {i < project.flow.length - 1 && (
                <div className="py-1 text-center font-mono text-xs text-accent" aria-hidden>
                  ↓
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  </article>
);

const Work = () => {
  return (
    <section id="work" className="border-t border-border py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="reveal max-w-2xl">
          <SectionLabel index="01" label="Selected work" />
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
            Systems built where data, <em className="not-italic text-accent">automation and logic intersect.</em>
          </h2>
          <p className="mt-4 text-muted">Built for production, not just demos.</p>
        </div>

        <div className="mt-12 space-y-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
