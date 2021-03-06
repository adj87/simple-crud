export const theme = {
  breakpoints: {
    xs: 300,
    sm: 500,
    md: 700,
    lg: 1021,
  },
  palette: {
    primary: {
      dark: '#03045E',
      main: '#023E8A',
      light: '#0077B6',
      extraLight: '#48CAE4',
      contrastText: '#CAF0F8',
    },
    secondary: {
      dark: '#EE8F00',
      main: '#FFC671',
      light: '#FFDCA8',
    },
    error: '#FF5858',
    success: '#47ad34',
    grey: {
      50: '#fafafa',
      100: '#f5f5f5',
      200: '#eeeeee',
      300: '#e0e0e0',
      400: '#bdbdbd',
      500: '#9e9e9e',
      600: '#757575',
      700: '#616161',
      800: '#424242',
      900: '#212121',
      A100: '#d5d5d5',
      A200: '#aaaaaa',
      A400: '#303030',
      A700: '#616161',
    },
  },
};

export const device = {
  deviceXs: `(min-width: ${theme.breakpoints.xs}px)`,
  deviceSm: `(min-width: ${theme.breakpoints.sm}px)`,
  deviceMd: `(min-width: ${theme.breakpoints.md}px)`,
  deviceLg: `(min-width: ${theme.breakpoints.lg}px)`,
};

export const delayApiReq = 1;

export const resultsPerPage = 3;

export const defaultCredentials = { email: 'eve.holt@reqres.in', password: 'cityslicka' };
