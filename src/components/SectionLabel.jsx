const SectionLabel = ({ index, label }) => (
  <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
    {index} / {label}
  </p>
);

export default SectionLabel;
