import React, {useContext, createContext, FC} from 'react';
import {theme} from '../constants/design';

type themeProps = typeof theme;

const ThemeContext = createContext<{
  theme: themeProps;
}>({
  theme,
});

interface ThemeProviderProps {
  theme: themeProps;
}

export const ThemeProvider: FC<ThemeProviderProps> = props => {
  const {theme, children} = props;

  return (
    <ThemeContext.Provider value={{theme}}>{children}</ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
