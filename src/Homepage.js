import { useMantineTheme } from '@mantine/core';
import { useViewportSize } from '@mantine/hooks';
import { Link } from 'react-router-dom';
import './App.css';
import sophia from './sophia-profile.jpg';

function Homepage() {
  const theme = useMantineTheme();
  const { width } = useViewportSize();
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
          {width < 600 ? (
            <img className="profile-pic" src={sophia} width={350}></img>
          ) : (
            <img className="profile-pic" src={sophia}></img>
          )}
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
                about digital illustration and photography. I've been a creative since birth, 
                but now I'm a Bismarck State College graduate with an associate degree in 
                graphic design & communications, hard worker and a free spirit. 
                Besides design I enjoys playing piano, hiking, camping, and spending time
                with my family and friends.`}
              </div>

              <div className="button-container">
                <Link to="/portfolio">
                  <button
                    className="button"
                    style={{
                      backgroundColor: theme.colors.sophieMainTheme[0],
                      borderColor: theme.colors.sophieMainTheme[0]
                    }}>
                    View Portfolio
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Homepage;
