import { useLanguage } from "../i18n/LanguageContext";
import SectionLabel from "./SectionLabel";

const Experience = () => {
  const { t } = useLanguage();
  const { experience } = t;

  return (
    <section id="experience" className="border-t border-border py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="reveal max-w-2xl">
          <SectionLabel index={experience.sectionIndex} label={experience.sectionLabel} />
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
            {experience.headingLead}
            <em className="not-italic text-accent">{experience.headingEmphasis}</em>
          </h2>
        </div>

        <div className="reveal mt-12 space-y-0 border-l border-border">
          {experience.items.map((item) => (
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
