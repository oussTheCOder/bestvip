import React, { createContext, useContext, ReactNode } from 'react';
import { useRouter } from 'next/router';
import { translations, Language, TranslationKey } from '../utils/translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: TranslationKey, params?: Record<string, string | number>) => string;
  getNestedValue: (obj: any, path: string) => any;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const router = useRouter();
  const language = (router.locale as Language) || 'nl';

  const setLanguage = (lang: Language) => {
    router.push(router.pathname, router.asPath, { locale: lang });
  };

  const getNestedValue = (obj: any, path: string): any => {
    return path.split('.').reduce((current, key) => current?.[key], obj);
  };

  const t = (key: TranslationKey, params?: Record<string, string | number>): string => {
    const translation = translations[language][key];
    if (typeof translation === 'string') {
      let result = translation.replace('{year}', new Date().getFullYear().toString());
      if (params) {
        Object.entries(params).forEach(([paramKey, paramValue]) => {
          result = result.replace(`{${paramKey}}`, paramValue.toString());
        });
      }
      return result;
    }
    return key;
  };

  const value: LanguageContextType = {
    language,
    setLanguage,
    t,
    getNestedValue
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};