import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { en } from "../data/en";
import { es } from "../data/es";

const dictionaries = { en, es };

const LanguageContext = createContext(null);

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState(() => {
    try {
      const stored = localStorage.getItem("lang");
      if (stored === "en" || stored === "es") return stored;
    } catch {
      // localStorage unavailable, fall back to default
    }
    return "en";
  });

  useEffect(() => {
    try {
      localStorage.setItem("lang", lang);
    } catch {
      // ignore write failures (private browsing, etc.)
    }
    document.documentElement.lang = lang;
  }, [lang]);

  const value = useMemo(
    () => ({
      lang,
      toggle: () => setLang((l) => (l === "en" ? "es" : "en")),
      t: dictionaries[lang],
    }),
    [lang]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

// eslint-disable-next-line react-refresh/only-export-components
export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within a LanguageProvider");
  return ctx;
};
