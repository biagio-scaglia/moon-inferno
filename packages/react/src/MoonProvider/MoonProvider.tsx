import React, { createContext, useContext, useEffect, useState, type ReactNode } from 'react';

export type ThemeName = 'moon-inferno' | 'terminal' | 'y2k';

export interface MoonContextValue {
  theme: ThemeName;
  setTheme: (newTheme: ThemeName) => void;
}

const MoonContext = createContext<MoonContextValue | undefined>(undefined);

export interface MoonProviderProps {
  defaultTheme?: ThemeName | undefined;
  theme?: ThemeName | undefined;
  onThemeChange?: ((theme: ThemeName) => void) | undefined;
  children: ReactNode;
}

function setDOMTheme(theme: ThemeName): void {
  if (typeof document !== 'undefined') {
    document.documentElement.setAttribute('data-theme', theme);
    if (document.body) {
      document.body.setAttribute('data-theme', theme);
    }
  }
}

export const MoonProvider: React.FC<MoonProviderProps> = ({
  defaultTheme = 'moon-inferno',
  theme: controlledTheme,
  onThemeChange,
  children,
}) => {
  const [internalTheme, setInternalTheme] = useState<ThemeName>(defaultTheme);

  const currentTheme = controlledTheme !== undefined ? controlledTheme : internalTheme;

  const handleSetTheme = (newTheme: ThemeName) => {
    if (controlledTheme === undefined) {
      setInternalTheme(newTheme);
    }
    setDOMTheme(newTheme);
    if (onThemeChange) {
      onThemeChange(newTheme);
    }
  };

  useEffect(() => {
    setDOMTheme(currentTheme);
  }, [currentTheme]);

  return (
    <MoonContext.Provider value={{ theme: currentTheme, setTheme: handleSetTheme }}>
      {children}
    </MoonContext.Provider>
  );
};

export const useMoonTheme = (): MoonContextValue => {
  const context = useContext(MoonContext);
  if (!context) {
    return {
      theme: 'moon-inferno',
      setTheme: (newTheme: ThemeName) => setDOMTheme(newTheme),
    };
  }
  return context;
};
