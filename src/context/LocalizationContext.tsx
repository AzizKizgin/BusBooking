/** @format */

import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useContext, useEffect, useState } from "react";
import { en } from "../localization/en";
import { tr } from "../localization/tr";

interface LocalizationContextProps {
  children: React.ReactNode;
}

interface LocalizationContextType {
  strings: any;
  changeLanguage: (locale: string) => void;
  currentLanguage: string;
}

const LocalizationContext = createContext<LocalizationContextType>({
  strings: (key: string) => key,
  changeLanguage: (locale: string) => {},
  currentLanguage: "tr",
});

export const LocalizationProvider = ({
  children,
}: LocalizationContextProps) => {
  const [locale, setLocale] = useState("tr");

  useEffect(() => {
    const getLanguage = async () => {
      const language = await AsyncStorage.getItem("language");
      if (language) {
        setLocale(language);
      }
    };
    getLanguage();
  }, []);

  const changeLanguage = async (locale: string) => {
    await AsyncStorage.setItem("language", locale);
    setLocale(locale);
  };

  const strings = locale === "en" ? en : tr;

  return (
    <LocalizationContext.Provider
      value={{
        strings,
        changeLanguage,
        currentLanguage: locale,
      }}
    >
      {children}
    </LocalizationContext.Provider>
  );
};

export const useLocalization = () => {
  return useContext(LocalizationContext);
};
