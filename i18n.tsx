
import React, { createContext, useState, useEffect, useContext, useCallback, ReactNode } from 'react';

// Define translations structure
interface Translations {
  [key: string]: string | Translations;
}

// Define context type
interface I18nContextType {
  language: string;
  t: (key: string, options?: { [key: string]: string | number }) => string;
  setLanguage: (lang: string) => void;
}

// Create context with a default value
export const I18nContext = createContext<I18nContextType>({
  language: 'en',
  t: (key) => key,
  setLanguage: () => {},
});

const supportedLanguages = ['en', 'es', 'fr'];

// Create provider component
export const I18nProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState('en');
  const [messages, setMessages] = useState<Translations | null>(null);

  const setLanguage = useCallback((lang: string) => {
    const newLang = supportedLanguages.includes(lang) ? lang : 'en';
    setLanguageState(newLang);
    localStorage.setItem('language', newLang);
  }, []);

  // Effect to set the initial language from localStorage or browser settings
  useEffect(() => {
    const savedLang = localStorage.getItem('language');
    const browserLang = navigator.language.split('-')[0];
    const initialLang = savedLang || (supportedLanguages.includes(browserLang) ? browserLang : 'en');
    setLanguageState(initialLang);
  }, []);

  // Effect to load translation files using fetch when language changes
  useEffect(() => {
    const loadTranslations = async () => {
      try {
        // Use a relative path for fetch
        const response = await fetch(`./locales/${language}.json`);
        if (!response.ok) {
            throw new Error(`Could not load translations for ${language}`);
        }
        const data: Translations = await response.json();
        setMessages(data);
      } catch (error) {
        console.error(error);
        // Fallback to English if the selected language fails to load
        if (language !== 'en') {
            try {
                const response = await fetch('./locales/en.json');
                const data: Translations = await response.json();
                setMessages(data);
            } catch (fallbackError) {
                console.error('Failed to load fallback English translations:', fallbackError);
            }
        }
      }
    };
    loadTranslations();
  }, [language]);

  const t = useCallback((key: string, options?: { [key: string]: string | number }): string => {
    if (!messages) {
      return ''; // Return empty string while loading to avoid flashing keys
    }

    const keys = key.split('.');
    let result: any = messages;
    for (const k of keys) {
      result = result?.[k];
      if (result === undefined) {
        return key; // Return the key if translation is not found
      }
    }
    
    let text = typeof result === 'string' ? result : key;

    if (options) {
        Object.keys(options).forEach(optKey => {
            text = text.replace(`{{${optKey}}}`, String(options[optKey]));
        });
    }

    return text;
  }, [messages]);

  // Don't render the app until the initial translations are loaded to prevent FOUC
  if (!messages) {
    return null; 
  }

  return (
    <I18nContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </I18nContext.Provider>
  );
};

// Custom hook for easy access
export const useTranslation = () => useContext(I18nContext);