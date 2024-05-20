import React, {
  createContext,
  useState,
  useContext,
  useEffect,
  ReactNode,
} from "react";
import { useTranslation } from "react-i18next";
interface LocaleContextProps {
  locale: string;
  dir: "ltr" | "rtl";
  toggleLocale: () => void;
}

const LocaleContext = createContext<LocaleContextProps | undefined>(undefined);

export const LocaleProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [locale, setLocale] = useState<string>("ar");
  const [dir, setDir] = useState<"ltr" | "rtl">("rtl");
  const { i18n } = useTranslation();
  useEffect(() => {
    setDir(locale === "ar" ? "rtl" : "ltr");
    i18n.changeLanguage(locale);
  }, [locale]);

  const toggleLocale = () => {
    setLocale((prevLocale) => (prevLocale === "en" ? "ar" : "en"));
  };

  return (
    <LocaleContext.Provider value={{ locale, dir, toggleLocale }}>
      {children}
    </LocaleContext.Provider>
  );
};

export const useLocale = (): LocaleContextProps => {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error("useLocale must be used within a LocaleProvider");
  }
  return context;
};
