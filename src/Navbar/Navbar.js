import { Switch, useMantineTheme } from '@mantine/core';
import { useState } from 'react';
import logo from '../SJlogo.png';
import './Navbar.css';

function Navbar() {
  const theme = useMantineTheme();

  const navOptions = ['Portfolio', 'Contact'];
  const [dark, setDark] = useState(false);
  const handleChange = () => {
    setDark(!dark);
  };
  console.log(handleChange);
  return (
    <div
      className="nav-grid"
      style={{
        backgroundColor: dark ? theme.colors.sophiePink[0] : theme.colors.sophieGreen[0]
      }}>
      <div style={{ marginLeft: 30, marginTop: 10, marginBottom: 10 }}>
        <img className="logo" src={logo}></img>
      </div>
      {navOptions.map((option, index) => (
        <div key={index} style={{ margin: 15 }}>
          <span>{option}</span>
        </div>
      ))}

      <div className="toggle" style={{ marginRight: 30 }}>
        <Switch
          checked={dark}
          onChange={handleChange}
          onLabel="🌚"
          offLabel="🌞"
          size="xl"
          style={{
            root: {
              backgroundColor: theme.colors.sophieOrange[0],
              color: theme.colors.sophieOrange[0]
            },

            input: {
              backgroundColor: theme.colors.sophieOrange[0],
              color: theme.colors.sophieOrange[0]
            }
          }}
        />
      </div>
    </div>
  );
}

export default Navbar;
