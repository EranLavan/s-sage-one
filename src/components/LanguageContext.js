import React, { createContext, useContext, useState } from 'react';

const LanguageContext = createContext();

export function useLanguage() {
    return useContext(LanguageContext);
}

export function LanguageProvider({ children }) {
    const [selectedLanguage, setSelectedLanguage] = useState('en');

    const toggleLanguage = () => {
        setSelectedLanguage(selectedLanguage === 'en' ? 'ru' : 'en');
    };

    return (
        <LanguageContext.Provider value={{ selectedLanguage, toggleLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
    
}