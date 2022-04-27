import { Burger, useMantineTheme } from '@mantine/core';
import { useViewportSize } from '@mantine/hooks';
import { PropTypes } from 'prop-types';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../SJlogo.png';
import './Navbar.css';

function Navbar() {
  // TODO: add toggle them when ready
  const theme = useMantineTheme();
  // const darkTheme = useContext(ThemeContext);
  const { width } = useViewportSize();
  const [open, setOpen] = useState(false);
  return width > 600 ? (
    <div
      className="nav-grid"
      style={{
        backgroundColor: theme.colors.sophieNavTheme[0]
      }}>
      <NavLink to="/">
        <div style={{ marginLeft: 30, marginTop: 10, marginBottom: 10 }}>
          <img className="logo" src={logo}></img>
        </div>
      </NavLink>
      <div>
        <NavLink to="/portfolio" style={{ margin: 15 }}>
          portfolio
        </NavLink>
      </div>

      <div>
        <NavLink to="/contact" style={{ margin: 15 }}>
          contact
        </NavLink>
      </div>

      {/* <div className="toggle" style={{ marginRight: 30 }}>
        <Switch
          checked={darkTheme}
          onChange={toggleTheme}
          size="lg"
          styles={{
            input: {
              backgroundColor: theme.colors.sophieMainTheme[0],
              borderColor: theme.colors.sophieMainTheme[0],
              borderStyle: 'solid',
              ':checked': {
                backgroundColor: theme.colors.sophieMainTheme[0],
                borderColor: theme.colors.sophieMainTheme[0]
              }
            }
          }}
        />
      </div> */}
    </div>
  ) : (
    <div>
      <div
        className="nav-grid"
        style={{
          backgroundColor: theme.colors.sophieNavTheme[0]
        }}>
        <div>
          <img className="logo" src={logo}></img>
        </div>
        <Burger color={'white'} opened={open} onClick={() => setOpen(!open)} />
      </div>
      {open && (
        <div
          className="fadeInMenu"
          style={{
            backgroundColor: theme.colors.sophieNavTheme[0]
          }}>
          <NavLink to="/" className="mobileLink">
            home
          </NavLink>
          <div>
            <NavLink to="/portfolio" className="mobileLink">
              portfolio
            </NavLink>
          </div>

          <div>
            <NavLink to="/contact" className="mobileLink">
              contact
            </NavLink>
          </div>
        </div>
      )}
    </div>
  );
}
Navbar.propTypes = {
  toggleTheme: PropTypes.func
};
export default Navbar;
