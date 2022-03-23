import './Homepage.css';
import sophia from './sophia-profile.jpg';

function Homepage() {
  // const theme = useMantineTheme();
  return (
    <>
      <div className="home-page">
        <div className="header">SOPHIA JILEK DESIGNS</div>
        <div className="content">
          <img className="profile-pic" src={sophia}></img>
          <div className="about-me-section">
            <div className="about-me-header">About Me</div>
            <div className="about-me-inner">
              <div className="about-me-text">
                {`             
                I'm a Graphic Designer based in Bismarck, ND and am very passionate
                about digital illustration and photography. I am currently student at Bismarck
                State College majoring in Graphic Design and Communications. I have always been
                creative but didn't find a love for Graphic Design until my senior year of high
                school. Besides design I enjoys playing piano, hiking, camping, and spending time
                with my family and friends.`}
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
