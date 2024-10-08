import './headerCard.css'
import "aos/dist/aos.css";

import AOS from "aos";
import { useEffect } from "react";

function HeaderCard ( {name} ) {
   useEffect(() => {
     AOS.init({
       duration: 2000, // You can adjust the duration as needed
     });
   }, []);

 return (
   <button className="headerCard" data-aos="fade-down">
     {name}
   </button>
 );
}

export default HeaderCard;