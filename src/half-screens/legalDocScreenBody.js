import './legalDocScreenBody.css';

import legalDocumentImage from '../images/png/legal-document.png';

import Searchbar from '../constant-screens/searchbar';

function LegalDocScreenBody() {
 return(
  <div>
   <img src={legalDocumentImage} alt="Legal Docs" className="legal-doc-image" />
   <div className="legal-doc-body">
    <Searchbar />
   </div>
  </div>
 );
}

export default LegalDocScreenBody