import { createContext, useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { ROUTE_THEME_MAP } from '../theme';

const ThemeContext = createContext(null);

export function ThemeProvider({ children }) {
  const location = useLocation();

  useEffect(() => {
    const theme = ROUTE_THEME_MAP[location.pathname] ?? 'constellation';
    document.documentElement.setAttribute('data-theme', theme);
  }, [location.pathname]);

  const currentTheme = ROUTE_THEME_MAP[location.pathname] ?? 'constellation';

  return (
    <ThemeContext.Provider value={{ currentTheme, routeThemeMap: ROUTE_THEME_MAP }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
}
