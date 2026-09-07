import { useLanguage } from "../i18n/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();
  const { profile, footer } = t;

  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-medium">{profile.name}</p>
          <p className="text-sm text-muted">
            {profile.role} · {profile.location}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-6 font-mono text-xs uppercase tracking-widest text-muted">
          <a href={profile.github} target="_blank" rel="noreferrer" className="hover:text-ink">
            {footer.githubLabel}
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="hover:text-ink">
            {footer.linkedinLabel}
          </a>
          <a href={`mailto:${profile.email}`} className="hover:text-ink">
            {footer.emailLabel}
          </a>
          <span className="text-muted/60">© 2026 {profile.name}</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
