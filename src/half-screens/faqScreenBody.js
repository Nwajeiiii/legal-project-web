import FAQItem from '../constant-screens/faqItem';
import faqImage from '../images/png/faq-image.png';

function FAQScreenBody() {
 return (
   <div>
     <img
       src={faqImage}
       alt=""
       style={{
         width: "100%",
       }}
     />
     <div
       style={{
         margin: "50px 100px",
       }}
     >
       <FAQItem
         question="What factors does Nigerian law consider in granting a divorce, and what is the general process involved?"
         answer="In Nigeria, divorce proceedings are guided by the Matrimonial Causes Act. The factors considered include grounds for divorce such as adultery, cruelty, and desertion. The process involves filing a petition, counseling attempts, and court hearings. Each case is unique, and the court considers the welfare of any children involved, financial settlements, and other relevant circumstances."
       />
       <FAQItem
         question="Can you explain the significance of obtaining a Certificate of Occupancy (C of O) when purchasing real estate in Nigeria, and how does it impact property ownership?"
         answer="A Certificate of Occupancy (C of O) is a crucial document in Nigerian real estate transactions. It serves as proof of legal land ownership and government approval for the property. Obtaining a C of O involves thorough scrutiny by government authorities, ensuring that the land is not subject to disputes or irregularities. Possession of a C of O enhances the security of property ownership and facilitates future transactions."
       />
       <FAQItem
         question="What legal protections and remedies are available for victims of domestic violence in Nigeria, and how can they seek assistance?"
         answer="Victims of domestic violence in Nigeria have legal recourse through the Violence Against Persons (Prohibition) Act. This legislation provides for protective orders, shelter, and legal assistance for victims. Reporting incidents to the police, seeking medical attention, and contacting local support organizations are initial steps. The legal system is committed to holding perpetrators accountable while ensuring the safety and well-being of victims"
       />
       <FAQItem
         question="How does the Nigerian legal system address juvenile crimes, emphasizing rehabilitation over punitive measures, and what role do parents/guardians play in this process?"
         answer="The Nigerian legal system approaches juvenile crimes with a focus on rehabilitation through the Child Rights Act. Juvenile offenders are treated differently from adult criminals, emphasizing education, counseling, and skill development. Parents or guardians play a crucial role in the rehabilitation process by participating in counseling sessions, supporting the juvenile's reintegration into society, and ensuring compliance with court orders aimed at the minor's well-being."
       />
       <FAQItem
         question="What steps should individuals take following a car accident in Nigeria, both legally and practically, to protect their rights and ensure fair compensation?"
         answer="After a car accident in Nigeria, individuals should prioritize safety, seek medical attention, and report the incident to the police. Gathering evidence, such as photos and witness statements, is crucial. From a legal perspective, filing a police report and notifying insurance companies promptly is essential. Engaging legal counsel can assist in navigating the claims process, ensuring fair compensation for medical expenses, property damage, and other losses."
       />
     </div>
   </div>
 );
}

export default FAQScreenBody;