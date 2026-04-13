import React, { createContext, useContext, useState, useCallback } from "react";
import { en, type Translations } from "./translations/en";
import { it } from "./translations/it";
import { fr } from "./translations/fr";
import { pl } from "./translations/pl";

export type Language = "en" | "it" | "fr" | "pl";

const TRANSLATIONS: Record<Language, Translations> = { en, it, fr, pl };

export const LANGUAGE_LABELS: Record<Language, { label: string; flag: string }> = {
  en: { label: "EN", flag: "🇬🇧" },
  it: { label: "IT", flag: "🇮🇹" },
  fr: { label: "FR", flag: "🇫🇷" },
  pl: { label: "PL", flag: "🇵🇱" },
};

interface I18nContextValue {
  lang: Language;
  setLang: (l: Language) => void;
  t: Translations;
}

const I18nContext = createContext<I18nContextValue>({
  lang: "en",
  setLang: () => {},
  t: en,
});

const getInitialLanguage = (): Language => {
  const stored = localStorage.getItem("canary_lang") as Language | null;
  if (stored && stored in TRANSLATIONS) return stored;
  return "en";
};

export const I18nProvider = ({ children }: { children: React.ReactNode }) => {
  const [lang, setLangState] = useState<Language>(getInitialLanguage);

  const setLang = useCallback((l: Language) => {
    setLangState(l);
    localStorage.setItem("canary_lang", l);
  }, []);

  return (
    <I18nContext.Provider value={{ lang, setLang, t: TRANSLATIONS[lang] }}>
      {children}
    </I18nContext.Provider>
  );
};

export const useI18n = () => useContext(I18nContext);
