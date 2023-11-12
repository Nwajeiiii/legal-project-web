import './footer.css'
import "aos/dist/aos.css";

import AOS from "aos";
import { useEffect } from "react";

import companyLogoImage from '../images/png/company-logo.png';
import companyCellImage from "../images/png/company-cell.png";
import quickLinkImage from '../images/png/quick-links.png';
import getInTouchImage from '../images/png/getintouch.png';
import newsletterImage from '../images/png/news-letter.png';
// import legalPowerImage from '../images/png/legalpower.png';
// import quickLinksImage from '../images/png/quicklinks.png';
// import newsletterImage from '../images/png/newsletter.png';

function Footer(){
 const menuItems = ["About Us", "Law Library", "Blog", "Consult A Lawyer"];

 useEffect(() => {
   AOS.init({
     duration: 2000, // You can adjust the duration as needed
   });
   AOS.refresh();
 }, []);

 return (
   <div className="footer">
     <div className="about" data-aos="fade-up">
       <img src={companyLogoImage} alt="Company Logo" className="images-logo" />
       <p>
         LegalPower Law - is a team of highly experienced transactional and
         litigation attorneys from some of the nation's biggest
       </p>
       <img
         src={companyCellImage}
         alt="Company Cell Number"
         className="images-cell"
       />
     </div>
     <div className="quicklinks" data-aos="fade-up">
       <img
         src={quickLinkImage}
         alt="Quick Links"
         className="images-quicklinks"
       />
       <div style={{ height: "30px" }}></div>
       <ul className="customMenu">
         {menuItems.map((item, index) => (
           <li key={index}>
             <button className="menuButton">{item}</button>
           </li>
         ))}
       </ul>
     </div>
     <div className="get-in-touch" data-aos="fade-up">
       <img src={getInTouchImage} alt="Get In Touch" />
     </div>
     <div className="newsletter" data-aos="fade-up">
       <img src={newsletterImage} alt="Newsletter" />
       <p>Subscribe to our Newsletter, we won't spam. Promise!</p>
       <form>
         <label>
           <input
             className="input"
             type="text"
             value="Your Email Address"
             autoComplete="off"
           />
         </label>
         <button className="button">SUBSCRIBE NOW</button>
       </form>
     </div>
     {/* <div>
       <img src={legalPowerImage} alt="Get In Touch" />
     </div>
     <div>
       <img src={quickLinksImage} alt="newsletter" />
     </div>
     <div>
       <img src={getInTouchImage} alt="Get In Touch" />
     </div>
     <div>
       <img src={newsletterImage} alt="newsletter" />
     </div> */}
   </div>
 );
}

export default Footer;