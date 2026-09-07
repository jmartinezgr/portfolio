import { about } from "../data/content";
import SectionLabel from "./SectionLabel";

const About = () => {
  return (
    <section id="about" className="border-t border-border py-24">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="reveal">
          <SectionLabel index="05" label="About" />
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
            Beyond <em className="not-italic text-accent">the stack.</em>
          </h2>
        </div>

        <div className="reveal space-y-5 text-muted">
          {about.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <p className="font-mono text-xs uppercase tracking-widest text-ink">
            Turning messy problems into reliable systems.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
