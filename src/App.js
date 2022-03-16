import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useState } from 'react';
import { ThemeModeContext } from './context/ThemeModeContext';
import { CssBaseline } from '@mui/material';

function App() {
  //State for the current mode [dark or light]
  const [mode, setMode] = useState('light');

  //Object for the value of the ThemeModeContext 
  const themeMode = {
    toggleThemeMode: () => {
      setMode((prev) => prev === 'light'? 'dark': 'light')
    }
  };
  
  //Theme for MUI ThemeContext 
  const theme = createTheme({
    palette: {
      mode,      
      ...( mode === 'light'
      ? {
        // Light Mode
        primary: {main: '#00796b',
        },
        secondary: {
          main: 'rgb(220, 0, 78)',
        },
        background: {
          default: '#fff',
          paper: '#fff',
        },
      }
      : {
          // Dark Mode
          primary: {
            main: '#00796b',
          },
          secondary: {
            main: '#311b92',
          },
          background: {
            default: '#212121',
            paper: '#424242',
          },
        }
      )
    }
  });

  return (<>
    <ThemeModeContext.Provider value={themeMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        
      </ThemeProvider>
    </ThemeModeContext.Provider>
  </>);
}

export default App;
