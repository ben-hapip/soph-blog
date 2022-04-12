import { useMantineTheme } from '@mantine/core';
import './App.css';
import sophia from './sophia-profile.jpg';

function Homepage() {
  const theme = useMantineTheme();
  return (
    <>
      <div
        className="home-page"
        style={{
          backgroundColor: theme.colors.sophieBackgroundTheme[0]
        }}>
        <div
          className="header"
          style={{
            color: theme.colors.sophieMainTheme[0]
          }}>
          SOPHIA JILEK DESIGNS
        </div>
        <div className="content">
          <img className="profile-pic" src={sophia}></img>
          <div className="about-me-section">
            <div
              className="about-me-header"
              style={{
                color: theme.colors.sophieTextTheme[0]
              }}>
              About Me
            </div>
            <div className="about-me-inner">
              <div
                className="about-me-text"
                style={{
                  color: theme.colors.sophieTextTheme[0]
                }}>
                {`             
                I'm a Graphic Designer based in Bismarck, ND and am very passionate
                about digital illustration and photography. I am currently a student at Bismarck
                State College majoring in Graphic Design and Communications. I have always been
                creative but didn't find a love for Graphic Design until my senior year of high
                school. Besides design I enjoys playing piano, hiking, camping, and spending time
                with my family and friends.`}
              </div>
              <div className="button-container">
                <button
                  className="button"
                  style={{
                    backgroundColor: theme.colors.sophieMainTheme[0],
                    borderColor: theme.colors.sophieMainTheme[0]
                  }}>
                  View Portfolio
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Homepage;
