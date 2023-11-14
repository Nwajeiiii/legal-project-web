import "./homeScreenBody.css";

import mainBodyImage from "../images/png/main-body-image.png";
import aboutImage from '../images/png/home-screen-about-image.png';
import legalDatabaseInfoImage from '../images/png/home-page-legal-database-info.png';

function HomeScreenBody() {
  return (
    <div>
      <img
        src={mainBodyImage}
        alt="Main"
        className="main-body-image"
      />
      <div className="home-page-body">
        <img src={aboutImage} alt="About" className="about-image" />
        <img src={legalDatabaseInfoImage} />
      </div>
    </div>
  );
}

export default HomeScreenBody;
