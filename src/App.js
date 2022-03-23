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
          sophieOrange: ['#b45313'],
          sophieGreen: ['#C9C43E'],
          sophiePink: ['#F7AA9A']
          // or replace default theme color
        }
      }}>
      <Navbar></Navbar>
      <Homepage></Homepage>
    </MantineProvider>
  );
}

export default App;

// U+2600;

// U+263D
