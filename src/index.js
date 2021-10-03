import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Calculator from './components/Calculator';
import { createTheme, CssBaseline, ThemeProvider } from '@material-ui/core';
import { CalculatorContextProvider } from './contexts/CalculatorContext';

const theme = createTheme({
  palette:{
    primary:{
      main: '#57575c',

    }
  }  
})

ReactDOM.render(
  <StrictMode >
    <CssBaseline />
      <ThemeProvider theme={theme} >
        <CalculatorContextProvider >
          < Calculator />
        </CalculatorContextProvider>        
      </ThemeProvider>    
  </StrictMode>,
  document.getElementById('root')
);
