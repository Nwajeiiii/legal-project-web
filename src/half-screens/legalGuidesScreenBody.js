import './legalGuidesScreenBody.css';

import LegalGuidesGrid from '../constant-screens/legalGuidesGrid';
import legalGuidesImage from '../images/png/legal-guides.png';

function LegalGuidesScreenBody() {
 return (
   <div>
     <img
       src={legalGuidesImage}
       alt=""
       style={{
         width: "100%",
       }}
     />
     <div className="legal-guides-grid">
       <LegalGuidesGrid
         title="Legal Information Database:"
         content="Explore our legal information database covering a wide range of topics.  access reliable legal resources to empower your decisions."
       />
       <LegalGuidesGrid
         title="Legal Research Tools:"
         content="Enhance your legal research with our powerful tools. Navigate through statutes, case law, and regulations efficiently to gather the information for the understanding of your legal queries."
       />
       <LegalGuidesGrid
         title="Legal FAQs:"
         content="Get quick answers to common legal questions. We've compiled a list of frequently asked questions to provide you with informative solutions."
       />
       <LegalGuidesGrid
         title="Document Templates:"
         content="Streamline your legal documentation process with our customizable document templates. From contracts to legal letters, access professionally crafted templates ."
       />
       <LegalGuidesGrid
         title="Online and Legal Consultations:"
         content="Connect with experienced legal professionals through our online consultation service. Receive personalized advice and guidance from the comfort of your home."
       />
       <LegalGuidesGrid
         title="Legal Aid Directory:"
         content="Access our legal aid directory to find resources and assistance near you. Connect with organizations and professionals offering support for various legal matters."
       />
       <LegalGuidesGrid
         title="Legal Forum or News:"
         content="Stay informed with the latest in the legal world through our blog or news section. Explore articles covering current legal trends, important cases to keep yourself updated."
       />
       <LegalGuidesGrid
         title="Legal Forums or Discussion Boards:"
         content="Engage with a community of legal enthusiasts on our forums. Discuss legal topics, seek advice from fellow users and professionals "
       />
       <LegalGuidesGrid
         title="Legal Updates and Alerts:"
         content="Stay ahead with our legal updates and alerts. Receive timely notifications about changes in laws, regulations, and important legal developments."
       />
     </div>
   </div>
 );
}

export default LegalGuidesScreenBody;