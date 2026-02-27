import { createContext, useContext, useState, ReactNode } from "react";
import { Language, translations } from "@/lib/translations";

type TranslationType = { [K in keyof typeof translations.en]: string };

interface LanguageContextType {
  lang: Language;
  t: TranslationType;
  toggle: () => void;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: "en",
  t: translations.en,
  toggle: () => {},
});

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Language>("en");
  const toggle = () => setLang((l) => (l === "en" ? "bn" : "en"));
  const t = translations[lang];

  return (
    <LanguageContext.Provider value={{ lang, t, toggle }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
