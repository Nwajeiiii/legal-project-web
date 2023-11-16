import "./homeScreenBody.css";

import LawLibraryCard from "../constant-screens/lawLibraryCard";

import mainBodyImage from "../images/png/main-body-image.png";
import aboutImage from "../images/png/home-screen-about-image.png";
import legalDatabaseInfoImage from "../images/png/home-page-legal-database-info.png";
import realEstateLawImage from "../images/png/real-estate-law.png";
import domesticViolenceImage from "../images/png/domestic-violence.png";
import juvenileCrimeImage from "../images/png/juvenile-crimes.png";

function HomeScreenBody() {
  return (
    <div>
      <img src={mainBodyImage} alt="Main" className="main-body-image" />
      <div className="home-page-body">
        <img src={aboutImage} alt="About" className="about-image" />
        <div className="legal-database-image-container">
          <img
            src={legalDatabaseInfoImage}
            alt="Legal Database"
            className="legal-database-image"
          />
        </div>
        <div className="legal-database-content">
          <LawLibraryCard
            id="real-estate-law"
            img={realEstateLawImage}
            alt={"The Real Estate Issues"}
            title="Real Estate Law"
            description="Forgery, auto insurance fraud, check fraud, credit card fraud, health care fraud, identity thef."
          />
          <LawLibraryCard
            id="domestic-violence"
            img={domesticViolenceImage}
            alt={"The Domestic Violence Issues"}
            title="Domestic Violence"
            description="Domestic battery, corporal injury to a spouse or cohabitant, criminal threats, child abuse"
          />
          <LawLibraryCard
            id="juvenile-crime"
            img={juvenileCrimeImage}
            alt={"The Juvenile Crime Issues"}
            title="Juvenile Crimes"
            description="Proceedings, wards of the court, sealing of juvenile records, rehabilitation cases where a minor is tried"
          />
        </div>
      </div>
    </div>
  );
}

export default HomeScreenBody;
