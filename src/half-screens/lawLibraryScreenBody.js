import './lawLibraryScreenBody.css';

import LawLibraryCard from "../constant-screens/lawLibraryCard";

import lawLibraryLogoImage from '../images/png/law-library-logo.png';
import realEstateLawImage from '../images/png/real-estate-law.png';
import domesticViolenceImage from '../images/png/domestic-violence.png';
import juvenileCrimeImage from '../images/png/juvenile-crimes.png';
import insuranceLawImage from '../images/png/insurance-law.png';
import healthCareLawImage from '../images/png/health-care-law.png';
import carAccidentsImage from '../images/png/car-accidents.png'

function LawLibraryScreenBody(){
 return (
   <div>
     <img
       src={lawLibraryLogoImage}
       alt="The Law Library"
       className="law-library-image"
     />
     <div className="law-library-body">
       <LawLibraryCard
         img={realEstateLawImage}
         alt={"The Real Estate Issues"}
         title="Real Estate Law"
         description="Forgery, auto insurance fraud, check fraud, credit card fraud, health care fraud, identity thef."
       />
       <LawLibraryCard
         img={domesticViolenceImage}
         alt={"The Domestic Violence Issues"}
         title="Domestic Violence"
         description="Domestic battery, corporal injury to a spouse or cohabitant, criminal threats, child abuse"
       />
       <LawLibraryCard
         img={juvenileCrimeImage}
         alt={"The Juvenile Crime Issues"}
         title="Juvenile Crimes"
         description="Proceedings, wards of the court, sealing of juvenile records, rehabilitation cases where a minor is tried"
       />
       <LawLibraryCard
         img={insuranceLawImage}
         alt={"The Insurance Law Issues"}
         title="Insurance Law"
         description="Possession of substances, possession for sale, manufacturing, under the influence, diversion in semper."
       />
       <LawLibraryCard
         img={healthCareLawImage}
         alt={"The Health Care Law Issues"}
         title="Health Care Law"
         description="Health care law focuses on the legislative, executive, and judicial rules and regulations that govern"
       />
       <LawLibraryCard
         img={carAccidentsImage}
         alt={"The Car Accidents Issues"}
         title="Car Accidents"
         description="Car accidents can be terrifying experiences. Often, at least some of the people involved are injured"
       />
     </div>
   </div>
 );
}

export default LawLibraryScreenBody;