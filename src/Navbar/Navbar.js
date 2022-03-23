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
  const str = '☀';
  const str2 = '☽';
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
          color={'teal'}
          checked={dark}
          onChange={handleChange}
          onLabel={str2}
          offLabel={str}
          size="xl"
        />
      </div>
    </div>
  );
}

export default Navbar;
