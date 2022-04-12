import { MantineProvider } from '@mantine/core';
import { createContext, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Contact } from './Contact/Contact.js';
import Homepage from './Homepage.js';
import Navbar from './Navbar/Navbar.js';
import { Portfolio } from './Portfolio/Portfolio.js';

export const ThemeContext = createContext();

function App() {
  const [darkTheme, setDarkTheme] = useState(false);
  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
  };
  return (
    <ThemeContext.Provider value={darkTheme}>
      <MantineProvider
        theme={{
          primaryColor: darkTheme ? 'orange' : 'teal',
          colors: {
            // Add your color
            sophieMainTheme: darkTheme ? ['#9A3D35'] : ['#F6A999'],
            sophieTextTheme: darkTheme ? ['#DEDFE0'] : ['#140F11'],
            sophieNavTheme: darkTheme ? ['#140F11'] : ['#C9C43E'],
            sophieBackgroundTheme: darkTheme ? ['#140F11'] : ['#FFFFFF']
          }
        }}>
        <BrowserRouter>
          <Navbar toggleTheme={toggleTheme}></Navbar>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </BrowserRouter>
      </MantineProvider>
    </ThemeContext.Provider>
  );
}

export default App;
