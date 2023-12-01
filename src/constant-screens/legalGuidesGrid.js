import './legalGuidesGrid.css'

function LegalGuidesGrid( { title, content } ) {
 return (
   <div className="legal-guide-grid-item" data-aos="flip-down">
     <h1 data-aos="flip-up">{title}</h1>
     <p data-aos="flip-up">{content}</p>
   </div>
 );
}

export default LegalGuidesGrid;