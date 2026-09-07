import { useLanguage } from "../i18n/LanguageContext";
import SectionLabel from "./SectionLabel";

const About = () => {
  const { t } = useLanguage();
  const { about } = t;

  return (
    <section id="about" className="border-t border-border py-24">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="reveal">
          <SectionLabel index={about.sectionIndex} label={about.sectionLabel} />
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
            {about.headingLead}
            <em className="not-italic text-accent">{about.headingEmphasis}</em>
          </h2>
        </div>

        <div className="reveal space-y-5 text-muted">
          {about.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <p className="font-mono text-xs uppercase tracking-widest text-ink">{about.closing}</p>
        </div>
      </div>
    </section>
  );
};

export default About;
