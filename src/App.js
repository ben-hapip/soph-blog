import { MantineProvider } from '@mantine/core';
import './App.css';
import Homepage from './Homepage';
import Navbar from './Navbar/Navbar.js';

function App() {
  return (
    <MantineProvider
      theme={{
        primaryColor: 'orange',
        colors: {
          // Add your color
          sophieOrange: ['#b45313']
          // or replace default theme color
        }
      }}>
      <Navbar></Navbar>
      <Homepage></Homepage>
    </MantineProvider>
  );
}

export default App;
