import { createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#007BFF', // Deep Blue
    },
    secondary: {
      main: '#FF6F00', // Flame Orange
    },
    error: {
      main: '#FF1493', // Hot Pink
    },
    background: {
      default: '#F8F9FA', // Light Gray
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif', // Replace this with your preferred font family
    h1: {
      fontSize: '2.5rem',
      fontWeight: 600,
      marginBottom: '1rem',
      color: '#007BFF', // Heading color (Deep Blue)
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 500,
      marginBottom: '0.8rem',
      color: '#FF6F00', // Subheading color (Flame Orange)
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.6,
      color: '#333', // Body text color (Dark Gray)
    },
  },
});

export default theme;
