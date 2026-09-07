import { experience } from "../data/content";
import SectionLabel from "./SectionLabel";

const Experience = () => {
  return (
    <section id="experience" className="border-t border-border py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="reveal max-w-2xl">
          <SectionLabel index="04" label="Experience" />
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
            Real systems, <em className="not-italic text-accent">real constraints.</em>
          </h2>
        </div>

        <div className="reveal mt-12 space-y-0 border-l border-border">
          {experience.map((item) => (
            <div key={item.company} className="relative pb-10 pl-8 last:pb-0">
              <span className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-accent" />
              <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-baseline">
                <h3 className="text-lg font-semibold">{item.company}</h3>
                <time className="font-mono text-xs text-muted">{item.date}</time>
              </div>
              <p className="mt-1 text-sm text-muted">{item.role}</p>
              {item.tags.length > 0 && (
                <ul className="mt-3 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full border border-border px-3 py-1 font-mono text-[11px] text-muted"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
