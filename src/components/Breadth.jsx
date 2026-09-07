import { breadth } from "../data/content";
import SectionLabel from "./SectionLabel";

const Breadth = () => {
  return (
    <section className="border-t border-border py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="reveal max-w-2xl">
          <SectionLabel index="02" label="Breadth" />
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">Other things I&apos;ve built.</h2>
          <p className="mt-4 text-muted">
            Backend and data is my specialization, but I can work across the entire product.
          </p>
        </div>

        <div className="reveal mt-10 grid grid-cols-1 divide-y divide-border rounded-xl border border-border sm:grid-cols-3 sm:divide-x">
          {breadth.map((item, i) => (
            <div key={item} className="flex items-center gap-3 px-6 py-5">
              <span className="font-mono text-xs text-accent">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-sm">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Breadth;
