import { alpha } from '@mui/material/styles';

// ----------------------------------------------------------------------

// SETUP COLORS

const GREY = {
  0: '#2D303C', // Background
  100: '#3e4352', // Lighter than Background
  200: '#50566a', // Slightly lighter than Background
  300: '#626b82', // Even lighter
  400: '#a0a1a2',
  500: '#605BE5', // Text
  600: '#5352b8', // Slightly darker than Text
  700: '#464883', // Darker than Text
  800: '#383d4e', // Even darker
  900: '#161718', // Darkest
};

const PRIMARY = {
  lighter: '#545a6d', // Lighter than Header
  light: '#40455e',   // Slightly lighter than Header
  main: '#2E344D',    // Header
  dark: '#25293b',    // Slightly darker than Header
  darker: '#1c1f29',  // Darker than Header
  contrastText: '#FFFFFF',
};

const SECONDARY = {
  lighter: '#ffb84d', // Lighter version of Main
  light: '#ffa534',   // Slightly lighter than Main
  main: '#FFC107',    // Original Main
  dark: '#e6ac00',    // Slightly darker than Main
  darker: '#cc9700',  // Darker version of Main
  contrastText: '#FFFFFF',
};

const INFO = {
  lighter: '#5a93d1',
  light: '#83aedd',
  main: '#3178c6',
  dark: '#27609e',
  darker: '#1d4877',
  contrastText: '#FFFFFF',
};

const SUCCESS = {
  lighter: '#70bf73',
  light: '#94cf96',
  main: '#4caf50',
  dark: '#3d8c40',
  darker: '#2e6930',
  contrastText: '#FFFFFF',
};

const WARNING = {
  lighter: '#ffcd39',
  light: '#ffda6a',
  main: '#ffc107',
  dark: '#cc9a06',
  darker: '#997404',
  contrastText: '#121517',  // Using the darkest shade from the GREY palette for better contrast
};

const ERROR = {
  lighter: '#f6695e',
  light: '#f88e86',
  main: '#f44336',
  dark: '#c3362b',
  darker: '#922820',
  contrastText: '#FFFFFF',
};

const COMMON = {
  common: { black: '#000000', white: '#FFFFFF' },
  primary: PRIMARY,
  secondary: SECONDARY,
  info: INFO,
  success: SUCCESS,
  warning: WARNING,
  error: ERROR,
  grey: GREY,
  divider: alpha(GREY[500], 0.24),
  action: {
    hover: alpha(GREY[500], 0.08),
    selected: alpha(GREY[500], 0.16),
    disabled: alpha(GREY[500], 0.8),
    disabledBackground: alpha(GREY[200], 0.24),
    focus: alpha(GREY[500], 0.24),
    hoverOpacity: 0.08,
    disabledOpacity: 0.48,
  },
};

export default function palette(themeMode) {
  const light = {
    ...COMMON,
    mode: 'light',
    text: {
      primary: GREY[800],
      secondary: GREY[600],
      disabled: GREY[500],
    },
    background: { paper: '#FFFFFF', default: '#FFFFFF', neutral: GREY[200] },
    action: {
      ...COMMON.action,
      active: GREY[600],
    },
  };

  const dark = {
    ...COMMON,
    mode: 'dark',
    text: {
      primary: '#FFFFFF',
      secondary: GREY[500],
      disabled: GREY[600],
    },
    background: {
      paper: GREY[0],
      default: GREY[900],
      neutral: alpha(GREY[500], 0.16),
    },
    action: {
      ...COMMON.action,
      active: GREY[500],
    },
  };

  return themeMode === 'light' ? light : dark;
}
