import './researchScreenBody.css'

import researchImage from "../images/png/legal-research.png";
import Searchbar from '../constant-screens/searchbar';

function ResearchScreenBody() {
 return (
   <div>
     <img src={researchImage} alt="Research" className="research-image" />
     <div className="research-body">
       <Searchbar />
     </div>
   </div>
 );
}

export default ResearchScreenBody;
