import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {ThemeProvider, createTheme} from '@mui/material';
import {BrowserRouter} from 'react-router-dom';

const theme = createTheme({
  typography: {
    fontFamily: ['"Death Star"', 'sans-serif'].join(',')
   },
   palette:{
     primary: {
      main: '#fff'
    },
    secondary: {
      main: '#000000'
    }
   }
})

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <App />
    </BrowserRouter>,
  </ThemeProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
