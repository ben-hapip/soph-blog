import { Switch, useMantineTheme } from '@mantine/core';
import { PropTypes } from 'prop-types';
import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { ThemeContext } from '../App';
import logo from '../SJlogo.png';
import './Navbar.css';

function Navbar({ toggleTheme }) {
  const theme = useMantineTheme();
  const darkTheme = useContext(ThemeContext);
  const str = '☀';
  const str2 = '☽';
  return (
    <div
      className="nav-grid"
      style={{
        backgroundColor: theme.colors.sophieNavTheme[0]
      }}>
      {/* TODO: ADD ACTIVE CLASSES FOR LINKS :D */}
      <NavLink to="/">
        <div style={{ marginLeft: 30, marginTop: 10, marginBottom: 10 }}>
          <img className="logo" src={logo}></img>
        </div>
      </NavLink>
      <div>
        <NavLink to="/portfolio" style={{ margin: 15 }}>
          Portfolio
        </NavLink>
      </div>

      <div>
        <NavLink to="/contact" style={{ margin: 15 }}>
          Contact
        </NavLink>
      </div>
      <div className="toggle" style={{ marginRight: 30 }}>
        <Switch
          checked={darkTheme}
          onChange={toggleTheme}
          label={darkTheme ? str2 : str}
          size="lg"
        />
      </div>
    </div>
  );
}
Navbar.propTypes = {
  toggleTheme: PropTypes.func
};
export default Navbar;
