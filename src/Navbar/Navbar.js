import './Navbar.css';
import { useState } from 'react';

function Navbar() {
  const navOptions = ['Home', 'Portfolio', 'Contact Me'];
  const [dark, setDark] = useState(false);
  const handleChange = () => {
    setDark(!dark);
  };
  console.log(handleChange);
  return (
    <div className="nav-grid" style={{ backgroundColor: dark ? 'purple' : 'green' }}>
      {navOptions.map((option, index) => (
        <div key={index}>
          <span>{option}</span>
        </div>
      ))}
      <div className="toggle">
        <input
          checked={dark}
          onChange={handleChange}
          className="toggle-checkbox"
          id={`react-switch-new`}
          type="checkbox"
        />
        <label className="toggle-label" htmlFor={`react-switch-new`}>
          <label>🌚</label>
          <label>🌞</label>
          <span className={`toggle-button`} />
        </label>
      </div>
    </div>
  );
}

export default Navbar;
