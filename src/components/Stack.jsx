import { useLanguage } from "../i18n/LanguageContext";
import SectionLabel from "./SectionLabel";

const Stack = () => {
  const { t } = useLanguage();
  const { stack } = t;

  return (
    <section className="border-t border-border py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="reveal max-w-2xl">
          <SectionLabel index={stack.sectionIndex} label={stack.sectionLabel} />
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
            {stack.headingLead}
            <em className="not-italic text-accent">{stack.headingEmphasis}</em>
          </h2>
          <p className="mt-4 text-muted">{stack.subheading}</p>
        </div>

        <div className="reveal mt-10 grid gap-6 sm:grid-cols-2">
          {stack.groups.map((group) => (
            <div key={group.group} className="rounded-xl border border-border p-6">
              <p className="font-mono text-xs uppercase tracking-widest text-muted">
                {group.group}
              </p>
              <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2">
                {group.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm">
                    <span className="text-accent">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="reveal mt-10 font-mono text-xs uppercase tracking-widest text-muted">
          {stack.footerNote}
        </p>
      </div>
    </section>
  );
};

export default Stack;
