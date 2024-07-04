// src/App.js
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import AppRoutes from './AppRoutes';
import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    primary: '#0070f3',
    secondary: '#282c34',
  },
  spacing: {
    large: '2rem',
    medium: '1rem',
  },
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Header />
        <AppRoutes />
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
