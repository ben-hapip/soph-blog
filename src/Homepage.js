import { Button, useMantineTheme } from '@mantine/core';
import './Homepage.css';
import logo from './SJ-logo.png';
import sophia from './sophia-profile.jpg';

function Homepage() {
  const theme = useMantineTheme();
  return (
    <>
      <div className="home-page">
        <Button style={{ background: theme.colors.sophieOrange[0] }}>AY YO</Button>
        <img className="logo" src={logo}></img>
        <div className="content">
          <img className="profile-pic" src={sophia}></img>
          <div className="about-me-section">
            <div className="about-me-header">About Me</div>
            <div className="about-me-inner">
              <div className="about-me-text">
                {' '}
                Ay yo what do you wanna tell joe byron right now? Hey baby, take me out to dinner.
                BING BONG Ay yo what do you wanna tell joe byron right now? Hey baby, take me out to
                dinner. BING BONG Ay yo what do you wanna tell joe byron right now? Hey baby, take
                me out to dinner. BING BONG Ay yo what do you wanna tell joe byron right now? Hey
                baby, take me out to dinner. BING BONG Ay yo what do you wanna tell joe byron right
                now? Hey baby, take me out to dinner. BING BONG Ay yo what do you wanna tell joe
                byron right now? Hey baby, take me out to dinner. BING BONG Ay yo what do you wanna
                tell joe byron right now? Hey baby, take me out to dinner. BING BONG Ay yo what do
                you wanna tell joe byron right now? Hey baby, take me out to dinner. BING BONG
              </div>
              <div className="button-container">
                <button className="button">View Portfolio</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Homepage;
