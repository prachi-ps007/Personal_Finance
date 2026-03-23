/**
 * Theme constants — use with useTheme() or import for route-to-theme mapping
 */
export const THEMES = {
  CONSTELLATION: 'constellation',
  SKY: 'sky',
  ROAD: 'road',
  GARDEN: 'garden',
  BLOOM: 'bloom',
};

export const ROUTE_THEME_MAP = {
  '/': THEMES.CONSTELLATION,
  '/dashboard': THEMES.CONSTELLATION,
  '/transactions': THEMES.SKY,
  '/add': THEMES.ROAD,
  '/budget': THEMES.GARDEN,
  '/analytics': THEMES.BLOOM,
};
